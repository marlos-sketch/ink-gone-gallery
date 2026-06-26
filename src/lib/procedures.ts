// Catálogo de procedimentos estéticos exibidos no site.
// Bilíngue PT/EN — edite os textos abaixo livremente.

import type { LucideIcon } from "lucide-react";
import {
  Syringe,
  Sparkles,
  Heart,
  Smile,
  Diamond,
  Flower2,
} from "lucide-react";

export type Bilingual = { pt: string; en: string };

export type Procedure = {
  slug: string;
  icon: LucideIcon;
  name: Bilingual;
  shortDesc: Bilingual;
  longDesc: Bilingual;
  benefits: { pt: string[]; en: string[] };
  steps: { pt: string[]; en: string[] };
  whatsappMessage: Bilingual;
};

export const procedures: Procedure[] = [
  {
    slug: "botox",
    icon: Syringe,
    name: { pt: "Toxina Botulínica", en: "Botulinum Toxin" },
    shortDesc: {
      pt: "Suaviza rugas de expressão e devolve frescor ao olhar.",
      en: "Softens expression lines and brings freshness back to the gaze.",
    },
    longDesc: {
      pt: "A toxina botulínica relaxa os músculos responsáveis pelas rugas dinâmicas (testa, glabela, pés de galinha), resultando em uma pele mais lisa, descansada e natural.",
      en: "Botulinum toxin relaxes the muscles responsible for dynamic wrinkles (forehead, glabella, crow's feet), leaving the skin smoother, rested and natural.",
    },
    benefits: {
      pt: [
        "Reduz rugas de expressão",
        "Resultado natural e duradouro (4 a 6 meses)",
        "Procedimento rápido, sem afastamento",
        "Aspecto descansado e rejuvenescido",
      ],
      en: [
        "Reduces expression wrinkles",
        "Natural, long-lasting result (4–6 months)",
        "Quick procedure, no downtime",
        "Rested, rejuvenated appearance",
      ],
    },
    steps: {
      pt: [
        "Avaliação facial e definição dos pontos de aplicação",
        "Aplicação rápida com agulhas ultrafinas",
        "Resultado se completa em 7 a 14 dias",
      ],
      en: [
        "Facial assessment and mapping of application points",
        "Quick application with ultra-fine needles",
        "Final result appears in 7–14 days",
      ],
    },
    whatsappMessage: {
      pt: "Olá! Tenho interesse no procedimento de Toxina Botulínica.",
      en: "Hello! I'm interested in the Botulinum Toxin procedure.",
    },
  },
  {
    slug: "micropigmentacao-sobrancelha",
    icon: Sparkles,
    name: {
      pt: "Micropigmentação de Sobrancelha",
      en: "Eyebrow Micropigmentation",
    },
    shortDesc: {
      pt: "Design personalizado fio a fio para sobrancelhas perfeitas todos os dias.",
      en: "Custom hair-stroke design for flawless eyebrows every day.",
    },
    longDesc: {
      pt: "Técnica de implantação de pigmento na pele que desenha fios realistas, corrige falhas e harmoniza o formato do rosto. Resultado natural e duradouro.",
      en: "A pigment implantation technique that draws realistic strokes, corrects gaps and harmonizes the face. Natural and long-lasting result.",
    },
    benefits: {
      pt: [
        "Sobrancelhas naturais 24h por dia",
        "Correção de falhas e assimetrias",
        "Design exclusivo, baseado no seu rosto",
        "Praticidade na rotina diária",
      ],
      en: [
        "Natural eyebrows 24/7",
        "Correction of gaps and asymmetries",
        "Exclusive design based on your face",
        "Practicality in daily routine",
      ],
    },
    steps: {
      pt: [
        "Visagismo: desenho personalizado para o seu rosto",
        "Aplicação do pigmento com técnica fio a fio",
        "Retoque após 30 dias para fixação ideal",
      ],
      en: [
        "Visagism: personalized design for your face",
        "Pigment application with hair-stroke technique",
        "Touch-up after 30 days for ideal fixation",
      ],
    },
    whatsappMessage: {
      pt: "Olá! Tenho interesse em micropigmentação de sobrancelha.",
      en: "Hello! I'm interested in eyebrow micropigmentation.",
    },
  },
  {
    slug: "micropigmentacao-labial",
    icon: Heart,
    name: {
      pt: "Micropigmentação Labial",
      en: "Lip Micropigmentation",
    },
    shortDesc: {
      pt: "Lábios com cor, contorno e luminosidade naturais.",
      en: "Lips with natural color, contour and glow.",
    },
    longDesc: {
      pt: "Técnica que devolve a cor natural, define o contorno e dá volume visual aos lábios. Ideal para quem busca um aspecto saudável e iluminado sem maquiagem.",
      en: "Technique that restores natural color, defines the contour and adds visual volume to lips. Ideal for a healthy, glowing look without makeup.",
    },
    benefits: {
      pt: [
        "Cor natural e duradoura",
        "Contorno definido e harmônico",
        "Aspecto saudável e hidratado",
        "Camufla manchas e assimetrias",
      ],
      en: [
        "Natural, long-lasting color",
        "Defined and harmonious contour",
        "Healthy, hydrated look",
        "Camouflages spots and asymmetries",
      ],
    },
    steps: {
      pt: [
        "Escolha da cor de pigmento ideal para o seu tom de pele",
        "Aplicação confortável com anestésico tópico",
        "Retoque após 30 dias para uniformidade",
      ],
      en: [
        "Choice of pigment color ideal for your skin tone",
        "Comfortable application with topical anesthetic",
        "Touch-up after 30 days for uniformity",
      ],
    },
    whatsappMessage: {
      pt: "Olá! Tenho interesse em micropigmentação labial.",
      en: "Hello! I'm interested in lip micropigmentation.",
    },
  },
  {
    slug: "preenchimento-labial",
    icon: Smile,
    name: { pt: "Preenchimento Labial", en: "Lip Filler" },
    shortDesc: {
      pt: "Volume, hidratação e contorno preservando a naturalidade.",
      en: "Volume, hydration and contour while keeping it natural.",
    },
    longDesc: {
      pt: "Aplicação de ácido hialurônico para devolver volume, definir contorno e hidratar profundamente os lábios. Resultado equilibrado e personalizado.",
      en: "Hyaluronic acid application to restore volume, define contour and deeply hydrate the lips. Balanced, personalized result.",
    },
    benefits: {
      pt: [
        "Volume natural e proporcional",
        "Contorno definido sem exageros",
        "Hidratação profunda e duradoura",
        "Resultado imediato",
      ],
      en: [
        "Natural, proportional volume",
        "Defined contour without overdoing it",
        "Deep, long-lasting hydration",
        "Immediate result",
      ],
    },
    steps: {
      pt: [
        "Avaliação do formato e expectativa do resultado",
        "Aplicação cuidadosa com anestésico para conforto",
        "Massagem e orientações pós-procedimento",
      ],
      en: [
        "Assessment of shape and result expectation",
        "Careful application with anesthetic for comfort",
        "Massage and post-procedure guidance",
      ],
    },
    whatsappMessage: {
      pt: "Olá! Tenho interesse em preenchimento labial.",
      en: "Hello! I'm interested in lip filler.",
    },
  },
  {
    slug: "harmonizacao-facial",
    icon: Diamond,
    name: { pt: "Harmonização Facial", en: "Facial Harmonization" },
    shortDesc: {
      pt: "Equilíbrio das proporções do rosto, com técnica e bom senso.",
      en: "Balance of facial proportions with technique and good sense.",
    },
    longDesc: {
      pt: "Combinação personalizada de procedimentos (preenchimento, bioestimuladores, botox) para equilibrar as proporções do rosto, ressaltar traços e devolver suavidade.",
      en: "Personalized combination of procedures (filler, biostimulators, botox) to balance facial proportions, highlight features and restore softness.",
    },
    benefits: {
      pt: [
        "Plano de tratamento individual",
        "Realça o que você tem de melhor",
        "Resultado equilibrado e natural",
        "Acompanhamento próximo em cada etapa",
      ],
      en: [
        "Individual treatment plan",
        "Highlights your best features",
        "Balanced, natural result",
        "Close monitoring at every step",
      ],
    },
    steps: {
      pt: [
        "Diagnóstico facial completo e desenho do plano",
        "Aplicação combinada dos procedimentos indicados",
        "Retornos de avaliação e ajustes finos",
      ],
      en: [
        "Complete facial diagnosis and plan design",
        "Combined application of indicated procedures",
        "Follow-up appointments and fine adjustments",
      ],
    },
    whatsappMessage: {
      pt: "Olá! Tenho interesse em harmonização facial.",
      en: "Hello! I'm interested in facial harmonization.",
    },
  },
  {
    slug: "bioestimulador-colageno",
    icon: Flower2,
    name: {
      pt: "Bioestimulador de Colágeno",
      en: "Collagen Biostimulator",
    },
    shortDesc: {
      pt: "Estimula a produção natural de colágeno e firma a pele de dentro para fora.",
      en: "Stimulates natural collagen production and firms skin from the inside out.",
    },
    longDesc: {
      pt: "Substâncias injetáveis que estimulam o organismo a produzir colágeno novo, melhorando firmeza, viço e sustentação da pele. Resultado progressivo e prolongado.",
      en: "Injectables that stimulate the body to produce new collagen, improving firmness, glow and skin support. Progressive, long-lasting result.",
    },
    benefits: {
      pt: [
        "Firmeza e sustentação da pele",
        "Reduz flacidez do rosto e pescoço",
        "Resultado progressivo e natural",
        "Durabilidade de até 24 meses",
      ],
      en: [
        "Skin firmness and support",
        "Reduces face and neck laxity",
        "Progressive, natural result",
        "Lasts up to 24 months",
      ],
    },
    steps: {
      pt: [
        "Avaliação da pele e indicação do bioestimulador adequado",
        "Aplicação em pontos estratégicos do rosto",
        "Acompanhamento da evolução do colágeno em 60 a 90 dias",
      ],
      en: [
        "Skin assessment and indication of the appropriate biostimulator",
        "Application at strategic points on the face",
        "Follow-up of collagen progression in 60–90 days",
      ],
    },
    whatsappMessage: {
      pt: "Olá! Tenho interesse em bioestimulador de colágeno.",
      en: "Hello! I'm interested in collagen biostimulator.",
    },
  },
];

export function getProcedure(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}
