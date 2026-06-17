// Galerias personalizadas para cada serviço da seção "Nossos Serviços".
// Mídia hospedada via Lovable Assets (CDN).

import type { Bilingual } from "./procedures";

import sobrancelhaVideo from "@/assets/galeria/sobrancelha-despigmentacao.mp4.asset.json";
import sobrancelha1 from "@/assets/galeria/sobrancelha-antes-depois-1.jpg.asset.json";
import sobrancelha2 from "@/assets/galeria/sobrancelha-antes-depois-2.jpg.asset.json";
import sobrancelha3 from "@/assets/galeria/sobrancelha-antes-depois-3.jpg.asset.json";
import sobrancelha4 from "@/assets/galeria/sobrancelha-antes-depois-4.jpg.asset.json";

import tatuagemVideo1 from "@/assets/galeria/tatuagem/tatuagem-video-1.mp4.asset.json";
import tatuagemVideo2 from "@/assets/galeria/tatuagem/tatuagem-video-2.mp4.asset.json";
import tatuagem1 from "@/assets/galeria/tatuagem/tatuagem-1.jpg.asset.json";
import tatuagem2 from "@/assets/galeria/tatuagem/tatuagem-2.jpg.asset.json";
import tatuagem3 from "@/assets/galeria/tatuagem/tatuagem-3.jpg.asset.json";
import tatuagem4 from "@/assets/galeria/tatuagem/tatuagem-4.jpg.asset.json";
import tatuagem5 from "@/assets/galeria/tatuagem/tatuagem-5.jpg.asset.json";
import tatuagem6 from "@/assets/galeria/tatuagem/tatuagem-6.jpg.asset.json";
import tatuagem7 from "@/assets/galeria/tatuagem/tatuagem-7.jpg.asset.json";
import tatuagem8 from "@/assets/galeria/tatuagem/tatuagem-8.jpg.asset.json";

export type GalleryMedia =
  | { type: "image"; src: string; caption: Bilingual }
  | { type: "video"; src: string; poster?: string; caption: Bilingual };

export type Gallery = {
  slug: string;
  name: Bilingual;
  intro: Bilingual;
  whatsappMessage: Bilingual;
  media: GalleryMedia[];
};

export const galleries: Gallery[] = [
  {
    slug: "remocao-tatuagem",
    name: { pt: "Remoção de Tatuagem", en: "Tattoo Removal" },
    intro: {
      pt: "Veja por dentro o nosso protocolo de remoção a laser: tecnologia avançada, cuidado em cada disparo e o clareamento progressivo do pigmento — sem agredir a pele e preservando a saude dos pelos.",
      en: "See our laser removal protocol up close: advanced technology, careful precision at every pulse and progressive pigment fading — without harming the skin and preserving hair health.",
    },
    whatsappMessage: {
      pt: "Olá! Vi a galeria de remoção de tatuagem no site e gostaria de agendar uma avaliação.",
      en: "Hello! I saw the tattoo removal gallery on the website and would like to book an assessment.",
    },
    media: [
      {
        type: "video",
        src: tatuagemVideo1.url,
        poster: tatuagem1.url,
        caption: {
          pt: "Sessão de remoção de tatuagem a laser",
          en: "Laser tattoo removal session",
        },
      },
      {
        type: "video",
        src: tatuagemVideo2.url,
        poster: tatuagem4.url,
        caption: {
          pt: "Protocolo em ação — disparos controlados",
          en: "Protocol in action — controlled pulses",
        },
      },
      {
        type: "image",
        src: tatuagem1.url,
        caption: {
          pt: "Antes e depois — clareamento progressivo",
          en: "Before and after — progressive fading",
        },
      },
      {
        type: "image",
        src: tatuagem2.url,
        caption: {
          pt: "Tatuagem na mão — antes da sessão",
          en: "Hand tattoo — before the session",
        },
      },
      {
        type: "image",
        src: tatuagem3.url,
        caption: {
          pt: "Mesma área — clareamento após sessões",
          en: "Same area — fading after sessions",
        },
      },
      {
        type: "image",
        src: tatuagem4.url,
        caption: {
          pt: "Antes e depois — remoção completa",
          en: "Before and after — complete removal",
        },
      },
      {
        type: "image",
        src: tatuagem5.url,
        caption: {
          pt: "Letra no ombro — antes",
          en: "Shoulder lettering — before",
        },
      },
      {
        type: "image",
        src: tatuagem6.url,
        caption: {
          pt: "Mesma letra — depois das sessões",
          en: "Same lettering — after sessions",
        },
      },
      {
        type: "image",
        src: tatuagem7.url,
        caption: {
          pt: "Tatuagem no pescoço — antes",
          en: "Neck tattoo — before",
        },
      },
      {
        type: "image",
        src: tatuagem8.url,
        caption: {
          pt: "Mesma área — resultado após sessões",
          en: "Same area — result after sessions",
        },
      },
    ],
  },
  {
    slug: "remocao-micropigmentacao",
    name: { pt: "Remoção de Micropigmentação", en: "Micropigmentation Removal" },
    intro: {
      pt: "Veja por dentro o nosso protocolo de despigmentação a laser: tecnologia avançada, cuidado em cada disparo e o clareamento progressivo do pigmento — sem agredir a pele e preservando a saúde dos fios.",
      en: "See our laser depigmentation protocol up close: advanced technology, careful precision at every pulse and progressive pigment fading — without harming the skin and preserving hair health.",
    },
    whatsappMessage: {
      pt: "Olá! Vi a galeria de remoção de micropigmentação no site e gostaria de agendar uma avaliação.",
      en: "Hello! I saw the micropigmentation removal gallery on the website and would like to book an assessment.",
    },
    media: [
      {
        type: "video",
        src: sobrancelhaVideo.url,
        poster: sobrancelha1.url,
        caption: {
          pt: "Despigmentação de sobrancelha a laser",
          en: "Eyebrow laser depigmentation",
        },
      },
      {
        type: "image",
        src: sobrancelha1.url,
        caption: {
          pt: "Antes e depois — despigmentação de sobrancelha",
          en: "Before and after — eyebrow depigmentation",
        },
      },
      {
        type: "image",
        src: sobrancelha2.url,
        caption: {
          pt: "Antes e depois — remoção de micropigmentação",
          en: "Before and after — micropigmentation removal",
        },
      },
      {
        type: "image",
        src: sobrancelha3.url,
        caption: {
          pt: "Antes e depois — sobrancelha renovada",
          en: "Before and after — renewed eyebrows",
        },
      },
      {
        type: "image",
        src: sobrancelha4.url,
        caption: {
          pt: "Resultado final — pele e fios naturais",
          en: "Final result — natural skin and brow hair",
        },
      },
    ],
  },
];

export function getGallery(slug: string): Gallery | undefined {
  return galleries.find((g) => g.slug === slug);
}
