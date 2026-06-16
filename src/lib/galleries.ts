// Galerias personalizadas para cada serviço da seção "Nossos Serviços".
// Mídia hospedada via Lovable Assets (CDN).

import type { Bilingual } from "./procedures";

import tatuagemFoto1 from "@/assets/galeria/tatuagem-laser-1.jpg.asset.json";
import tatuagemVideo from "@/assets/galeria/tatuagem-laser.mp4.asset.json";
import microVideo from "@/assets/galeria/micro-laser.mp4.asset.json";
import microAntesA from "@/assets/galeria/micro-antes-a.jpg.asset.json";
import microProgressoA from "@/assets/galeria/micro-progresso-a.jpg.asset.json";
import microAntesEt from "@/assets/galeria/micro-antes-et.jpg.asset.json";
import microProgressoEt from "@/assets/galeria/micro-progresso-et.jpg.asset.json";
import microFinalEt from "@/assets/galeria/micro-final-et.jpg.asset.json";

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
        type: "video",
        src: tatuagemVideo.url,
        poster: tatuagemFoto1.url,
        caption: {
          pt: "Sessão de remoção a laser em andamento",
          en: "Laser removal session in progress",
        },
      },
      {
        type: "video",
        src: microVideo.url,
        poster: microAntesA.url,
        caption: {
          pt: "Aplicação do laser sobre o pigmento",
          en: "Laser application over the pigment",
        },
      },
      {
        type: "image",
        src: tatuagemFoto1.url,
        caption: {
          pt: "Aplicação do laser sobre a tatuagem",
          en: "Laser application over the tattoo",
        },
      },
      {
        type: "image",
        src: microAntesA.url,
        caption: { pt: "Antes do tratamento", en: "Before treatment" },
      },
      {
        type: "image",
        src: microProgressoA.url,
        caption: { pt: "Em progresso — clareamento visível", en: "In progress — visible fading" },
      },
      {
        type: "image",
        src: microAntesEt.url,
        caption: { pt: "Antes — pigmento marcado", en: "Before — heavy pigment" },
      },
      {
        type: "image",
        src: microProgressoEt.url,
        caption: { pt: "Após algumas sessões", en: "After a few sessions" },
      },
      {
        type: "image",
        src: microFinalEt.url,
        caption: { pt: "Resultado final — pele renovada", en: "Final result — renewed skin" },
      },
    ],
  },
];

export function getGallery(slug: string): Gallery | undefined {
  return galleries.find((g) => g.slug === slug);
}
