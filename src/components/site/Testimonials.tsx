import { Star, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { getGoogleReviews, type GoogleReview } from "@/lib/reviews.functions";

export function Testimonials() {
  const { lang } = useI18n();
  const t = translations.testimonials;
  const fetchReviews = useServerFn(getGoogleReviews);

  const { data } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 60 * 60 * 1000,
  });

  // Fallback (depoimentos placeholder) caso Google não esteja configurado / falhe
  const fallback: GoogleReview[] = [
    { authorName: t.t1Name[lang], authorPhoto: null, rating: 5, text: t.t1[lang], relativeTime: "" },
    { authorName: t.t2Name[lang], authorPhoto: null, rating: 5, text: t.t2[lang], relativeTime: "" },
    { authorName: t.t3Name[lang], authorPhoto: null, rating: 5, text: t.t3[lang], relativeTime: "" },
  ];

  const reviews = data?.available && data.reviews.length > 0 ? data.reviews : fallback;
  const showGoogleMeta = data?.available && data.rating != null;

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
            {t.eyebrow[lang]}
          </p>
          <h2 className="text-3xl font-medium text-foreground md:text-5xl">{t.title[lang]}</h2>

          {showGoogleMeta && (
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">
                {data!.rating!.toFixed(1)}
              </span>
              <span className="text-xs text-muted-foreground">
                {data!.total} {lang === "pt" ? "avaliações no Google" : "Google reviews"}
              </span>
            </div>
          )}
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 6).map((item, i) => (
            <Reveal key={`${item.authorName}-${i}`} delay={i * 110}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      fill={s < item.rating ? "currentColor" : "none"}
                      strokeWidth={s < item.rating ? 0 : 1}
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-foreground">
                  “{item.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {item.authorPhoto ? (
                    <img
                      src={item.authorPhoto}
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-xs font-semibold text-gold">
                      {item.authorName.charAt(0)}
                    </span>
                  )}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                      {item.authorName}
                    </p>
                    {item.relativeTime && (
                      <p className="text-[0.7rem] text-muted-foreground">{item.relativeTime}</p>
                    )}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {data?.available && data.placeUrl && (
          <Reveal className="mt-10 text-center">
            <a
              href={data.placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-gold"
            >
              {lang === "pt" ? "Ver todas as avaliações no Google" : "See all Google reviews"}
              <ExternalLink size={14} />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
