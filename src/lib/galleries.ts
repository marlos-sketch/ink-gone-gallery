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
      pt: "Veja por dentro o nosso protocolo de remoção de tatuagem a laser: tecnologia avançada e cuidado em cada disparo, respeitando o tempo da sua pele.",
      en: "See our laser tattoo removal protocol up close: advanced technology and careful precision at every pulse, respecting your skin's natural pace.",
    },
    whatsappMessage: {
      pt: "Olá! Vi a galeria de remoção de tatuagem no site e gostaria de agendar uma avaliação.",
      en: "Hello! I saw the tattoo removal gallery on the website and would like to book an assessment.",
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
        type: "image",
        src: tatuagemFoto1.url,
        caption: {
          pt: "Aplicação do laser sobre a tatuagem",
          en: "Laser application over the tattoo",
        },
      },
    ],
  },
  {
    slug: "remocao-micropigmentacao",
    name: { pt: "Remoção de Micropigmentação", en: "Micropigmentation Removal" },
    intro: {
      pt: "Acompanhe a evolução real de clientes que removeram micropigmentações antigas — clareamento gradual, sem agredir a pele, devolvendo a naturalidade.",
      en: "Follow the real progression of clients who removed old micropigmentations — gradual lightening, gentle on the skin, restoring a natural look.",
    },
    whatsappMessage: {
      pt: "Olá! Vi a galeria de remoção de micropigmentação no site e gostaria de agendar uma avaliação.",
      en: "Hello! I saw the micropigmentation removal gallery on the website and would like to book an assessment.",
    },
    media: [
      {
        type: "video",
        src: microVideo.url,
        poster: microAntesA.url,
        caption: {
          pt: "Sessão de remoção de micropigmentação",
          en: "Micropigmentation removal session",
        },
      },
      {
        type: "image",
        src: microAntesA.url,
        caption: { pt: "Antes — tatuagem letra A", en: "Before — letter A tattoo" },
      },
      {
        type: "image",
        src: microProgressoA.url,
        caption: { pt: "Em progresso — clareamento visível", en: "In progress — visible fading" },
      },
      {
        type: "image",
        src: microAntesEt.url,
        caption: { pt: "Antes — micropigmentação et", en: "Before — et micropigmentation" },
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
