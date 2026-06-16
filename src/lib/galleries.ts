// Galerias personalizadas para cada serviço da seção "Nossos Serviços".
// Mídia hospedada via Lovable Assets (CDN).

import type { Bilingual } from "./procedures";

import tatuagemFoto1 from "@/assets/galeria/tatuagem-laser-1.jpg.asset.json";
import sobrancelhaVideo from "@/assets/galeria/sobrancelha-despigmentacao.mp4.asset.json";
import sobrancelha1 from "@/assets/galeria/sobrancelha-antes-depois-1.jpg.asset.json";
import sobrancelha2 from "@/assets/galeria/sobrancelha-antes-depois-2.jpg.asset.json";
import sobrancelha3 from "@/assets/galeria/sobrancelha-antes-depois-3.jpg.asset.json";
import sobrancelha4 from "@/assets/galeria/sobrancelha-antes-depois-4.jpg.asset.json";

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
      pt: "Veja por dentro o nosso protocolo de remoção a laser: tecnologia avançada, cuidado em cada disparo e o clareamento progressivo do pigmento — sem agredir a pele.",
      en: "See our laser removal protocol up close: advanced technology, careful precision at every pulse and progressive pigment fading — without harming the skin.",
    },
    whatsappMessage: {
      pt: "Olá! Vi a galeria de remoção no site e gostaria de agendar uma avaliação.",
      en: "Hello! I saw the removal gallery on the website and would like to book an assessment.",
    },
    media: [
      {
        type: "image",
        src: tatuagemFoto1.url,
        caption: {
          pt: "Aplicação do laser sobre a tatuagem",
          en: "Laser application over the tattoo",
        },
      },
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
