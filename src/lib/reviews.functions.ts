import { createServerFn } from "@tanstack/react-start";

export type GoogleReview = {
  authorName: string;
  authorPhoto: string | null;
  authorUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  language?: string;
};

export type GoogleReviewsResult = {
  available: boolean;
  rating: number | null;
  total: number | null;
  reviews: GoogleReview[];
  placeUrl: string | null;
  error?: string;
};

// Cache in-memory (1h) — server-side
let cache: { at: number; data: GoogleReviewsResult } | null = null;
const TTL_MS = 60 * 60 * 1000;

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsResult> => {
    if (cache && Date.now() - cache.at < TTL_MS) return cache.data;

    const placeId = process.env.GOOGLE_PLACE_ID;
    const lovableKey = process.env.LOVABLE_API_KEY;
    const mapsKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!placeId || !lovableKey || !mapsKey) {
      const result: GoogleReviewsResult = {
        available: false,
        rating: null,
        total: null,
        reviews: [],
        placeUrl: null,
        error: "missing_config",
      };
      return result;
    }

    try {
      const url = `${GATEWAY_URL}/maps/api/place/details/json?place_id=${encodeURIComponent(
        placeId,
      )}&fields=rating,user_ratings_total,reviews,url&language=pt-BR&reviews_sort=newest`;
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": mapsKey,
        },
      });
      if (!res.ok) {
        console.error("[reviews] HTTP", res.status, await res.text());
        return {
          available: false,
          rating: null,
          total: null,
          reviews: [],
          placeUrl: null,
          error: `http_${res.status}`,
        };
      }
      const json = (await res.json()) as {
        status?: string;
        result?: {
          rating?: number;
          user_ratings_total?: number;
          url?: string;
          reviews?: Array<{
            author_name: string;
            profile_photo_url?: string;
            rating: number;
            text: string;
            relative_time_description: string;
            language?: string;
          }>;
        };
      };
      if (json.status && json.status !== "OK") {
        console.error("[reviews] Google status", json.status);
        return {
          available: false,
          rating: null,
          total: null,
          reviews: [],
          placeUrl: null,
          error: json.status,
        };
      }
      const r = json.result ?? {};
      const data: GoogleReviewsResult = {
        available: true,
        rating: r.rating ?? null,
        total: r.user_ratings_total ?? null,
        placeUrl: r.url ?? null,
        reviews: (r.reviews ?? []).slice(0, 6).map((rv) => ({
          authorName: rv.author_name,
          authorPhoto: rv.profile_photo_url ?? null,
          rating: rv.rating,
          text: rv.text,
          relativeTime: rv.relative_time_description,
          language: rv.language,
        })),
      };
      cache = { at: Date.now(), data };
      return data;
    } catch (err) {
      console.error("[reviews] fetch failed", err);
      return {
        available: false,
        rating: null,
        total: null,
        reviews: [],
        placeUrl: null,
        error: "fetch_failed",
      };
    }
  },
);
