import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, { pt: string; en: string }>;

export const translations = {
  nav: {
    home: { pt: "Início", en: "Home" },
    services: { pt: "Serviços", en: "Services" },
    results: { pt: "Resultados", en: "Results" },
    process: { pt: "Como funciona", en: "How it works" },
    about: { pt: "Sobre", en: "About" },
    contact: { pt: "Contato", en: "Contact" },
    book: { pt: "Agendar avaliação", en: "Book a consultation" },
  },
  hero: {
    eyebrow: { pt: "Remoção de tatuagem & micropigmentação", en: "Tattoo & micropigmentation removal" },
    title: { pt: "Sua pele renovada,\nresultados que se veem", en: "Renewed skin,\nresults you can see" },
    subtitle: {
      pt: "Especialistas em remoção segura de tatuagens e micropigmentação. Tecnologia avançada, protocolo personalizado e o cuidado premium da\u00a0 \u00a0 \u00a0Sr & Sra Mesquita.",
      en: "Specialists in safe removal of tattoos and micropigmentation. Advanced technology, personalized protocol and the premium care of Sr & Sra Mesquita.",
    },
    ctaPrimary: { pt: "Agendar avaliação", en: "Book a consultation" },
    ctaSecondary: { pt: "Ver resultados", en: "See results" },
    statSessions: { pt: "Sessões realizadas", en: "Sessions performed" },
    statSafety: { pt: "Protocolo seguro", en: "Safe protocol" },
    statRating: { pt: "Avaliação dos clientes", en: "Client rating" },
  },
  services: {
    eyebrow: { pt: "Nossos serviços", en: "Our services" },
    title: { pt: "\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0Cuidado especializado\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 para cada caso", en: "Specialized care for every case" },
    subtitle: {
      pt: "Avaliamos sua pele e o pigmento para criar o protocolo ideal de remoção.",
      en: "We assess your skin and pigment to create the ideal removal protocol.",
    },
    tattooTitle: { pt: "Remoção de Tatuagem", en: "Tattoo Removal" },
    tattooDesc: {
      pt: "Remoção gradual e segura de tatuagens de qualquer tamanho, cor e região do corpo, respeitando a sua pele.",
      en: "Gradual and safe removal of tattoos of any size, color and body area, respecting your skin.",
    },
    microTitle: { pt: "Remoção de Micropigmentação", en: "Micropigmentation Removal" },
    microDesc: {
      pt: "Correção e remoção de micropigmentação de sobrancelhas, lábios e fios, devolvendo a naturalidade ao rosto.",
      en: "Correction and removal of eyebrow, lip and hairline micropigmentation, restoring a natural look.",
    },
    evalTitle: { pt: "Avaliação Personalizada", en: "Personalized Assessment" },
    evalDesc: {
      pt: "Análise individual do pigmento e da pele para definir número de sessões e expectativa de resultado.",
      en: "Individual analysis of pigment and skin to define number of sessions and expected results.",
    },
    learnMore: { pt: "Falar com especialista", en: "Talk to a specialist" },
  },
  results: {
    eyebrow: { pt: "Antes & Depois", en: "Before & After" },
    title: { pt: "Transformações reais", en: "Real transformations" },
    subtitle: {
      pt: "Resultados de clientes atendidos na Sr & Sra Mesquita.",
      en: "Results from clients treated at Sr & Sra Mesquita.",
    },
    tattooCaption: { pt: "Remoção de tatuagem — antebraço", en: "Tattoo removal — forearm" },
    microCaption: { pt: "Remoção de micropigmentação — sobrancelhas", en: "Micropigmentation removal — eyebrows" },
    tattooTag: { pt: "Tatuagem", en: "Tattoo" },
    microTag: { pt: "Micropigmentação", en: "Micropigmentation" },
    disclaimer: {
      pt: "*Resultados variam conforme a pele, o pigmento e a quantidade de sessões.",
      en: "*Results vary according to skin, pigment and number of sessions.",
    },
  },
  process: {
    eyebrow: { pt: "Como funciona", en: "How it works" },
    title: { pt: "\u00a0 \u00a0 \u00a0 \u00a0 Um processo seguro,\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0do início ao fim", en: "A safe process, from start to finish" },
    step1Title: { pt: "Avaliação", en: "Assessment" },
    step1Desc: { pt: "Analisamos o pigmento, a pele e o histórico para montar seu plano.", en: "We analyze pigment, skin and history to build your plan." },
    step2Title: { pt: "Sessões", en: "Sessions" },
    step2Desc: { pt: "Aplicação do protocolo em sessões espaçadas para fragmentar o pigmento.", en: "Protocol applied in spaced sessions to fragment the pigment." },
    step3Title: { pt: "Cicatrização", en: "Healing" },
    step3Desc: { pt: "Orientamos os cuidados pós-sessão para uma recuperação tranquila.", en: "We guide aftercare for a smooth recovery." },
    step4Title: { pt: "Resultado", en: "Result" },
    step4Desc: { pt: "Clareamento progressivo até a remoção desejada da pele.", en: "Progressive lightening until the desired removal." },
  },
  why: {
    eyebrow: { pt: "Por que a Sr & Sra Mesquita", en: "Why Sr & Sra Mesquita" },
    title: { pt: "Cuidado premium\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 Em um ambiente\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 acolhedor", en: "Premium care in a welcoming space" },
    p1: {
      pt: "Unimos técnica, segurança e um atendimento atencioso para que sua experiência de remoção seja confortável do começo ao fim.",
      en: "We combine technique, safety and attentive care so your removal experience is comfortable from start to finish.",
    },
    f1Title: { pt: "Profissionais especializados", en: "Specialized professionals" },
    f1Desc: { pt: "Equipe treinada em remoção de pigmentos.", en: "Team trained in pigment removal." },
    f2Title: { pt: "Higiene & segurança", en: "Hygiene & safety" },
    f2Desc: { pt: "Protocolos rigorosos e materiais descartáveis.", en: "Strict protocols and disposable materials." },
    f3Title: { pt: "Ambiente premium", en: "Premium space" },
    f3Desc: { pt: "Espaço confortável e discreto.", en: "Comfortable and discreet space." },
    f4Title: { pt: "Plano personalizado", en: "Personalized plan" },
    f4Desc: { pt: "Protocolo feito para o seu caso.", en: "Protocol made for your case." },
  },
  testimonials: {
    eyebrow: { pt: "Depoimentos", en: "Testimonials" },
    title: { pt: "O que dizem nossos clientes", en: "What our clients say" },
    t1: { pt: "Atendimento impecável e resultado acima do que eu esperava. Minha tatuagem clareou muito já nas primeiras sessões.", en: "Impeccable service and results beyond my expectations. My tattoo faded a lot in the first sessions." },
    t1Name: { pt: "Cliente — Remoção de tatuagem", en: "Client — Tattoo removal" },
    t2: { pt: "Removi a micropigmentação das sobrancelhas e recuperei a naturalidade. Profissionais muito cuidadosas.", en: "I removed my eyebrow micropigmentation and got my natural look back. Very careful professionals." },
    t2Name: { pt: "Cliente — Micropigmentação", en: "Client — Micropigmentation" },
    t3: { pt: "Ambiente lindo, limpo e acolhedor. Me senti segura em todas as etapas do processo.", en: "Beautiful, clean and welcoming space. I felt safe at every step of the process." },
    t3Name: { pt: "Cliente — Avaliação", en: "Client — Assessment" },
  },
  faq: {
    eyebrow: { pt: "Dúvidas frequentes", en: "FAQ" },
    title: { pt: "Perguntas frequentes", en: "Frequently asked questions" },
    q1: { pt: "A remoção dói?", en: "Does removal hurt?" },
    a1: { pt: "Há um desconforto durante a sessão, mas utilizamos recursos para deixar o procedimento o mais confortável possível.", en: "There is some discomfort during the session, but we use resources to make the procedure as comfortable as possible." },
    q2: { pt: "Quantas sessões são necessárias?", en: "How many sessions are needed?" },
    a2: { pt: "Depende do pigmento, da cor e da sua pele. Definimos o número estimado na avaliação.", en: "It depends on the pigment, color and your skin. We define the estimated number during the assessment." },
    q3: { pt: "Qual o intervalo entre as sessões?", en: "What is the interval between sessions?" },
    a3: { pt: "Em geral respeitamos um intervalo para a pele cicatrizar e o organismo eliminar o pigmento.", en: "We generally respect an interval for the skin to heal and the body to eliminate the pigment." },
    q4: { pt: "Funciona em micropigmentação antiga?", en: "Does it work on old micropigmentation?" },
    a4: { pt: "Sim. Avaliamos cada caso para indicar o melhor protocolo de correção ou remoção.", en: "Yes. We assess each case to indicate the best correction or removal protocol." },
  },
  contact: {
    eyebrow: { pt: "Agende sua avaliação", en: "Book your consultation" },
    title: { pt: "Pronta para renovar sua pele?", en: "Ready to renew your skin?" },
    subtitle: {
      pt: "Fale com a gente no WhatsApp e tire suas dúvidas. A avaliação é o primeiro passo.",
      en: "Talk to us on WhatsApp and clear your doubts. The assessment is the first step.",
    },
    whatsappCta: { pt: "Chamar no WhatsApp", en: "Chat on WhatsApp" },
    instagramCta: { pt: "Ver no Instagram", en: "See on Instagram" },
    hoursLabel: { pt: "Horário", en: "Hours" },
    addressLabel: { pt: "Endereço", en: "Address" },
  },
  form: {
    eyebrow: { pt: "Tire suas dúvidas", en: "Ask your questions" },
    title: { pt: "Faça sua pergunta", en: "Send us your question" },
    subtitle: {
      pt: "Preencha seus dados e escreva sua dúvida. Enviaremos sua mensagem direto para o nosso WhatsApp.",
      en: "Fill in your details and write your question. Your message will be sent straight to our WhatsApp.",
    },
    nameLabel: { pt: "Nome", en: "Name" },
    namePlaceholder: { pt: "Seu nome completo", en: "Your full name" },
    phoneLabel: { pt: "Telefone", en: "Phone" },
    phonePlaceholder: { pt: "(11) 99999-9999", en: "+1 555 000 0000" },
    emailLabel: { pt: "E-mail", en: "Email" },
    emailPlaceholder: { pt: "voce@email.com", en: "you@email.com" },
    questionLabel: { pt: "Sua pergunta", en: "Your question" },
    questionPlaceholder: {
      pt: "Escreva aqui a sua dúvida sobre o tratamento...",
      en: "Write your question about the treatment here...",
    },
    submit: { pt: "Enviar pelo WhatsApp", en: "Send via WhatsApp" },
    errName: { pt: "Informe seu nome.", en: "Please enter your name." },
    errPhone: { pt: "Informe um telefone válido.", en: "Please enter a valid phone." },
    errEmail: { pt: "Informe um e-mail válido.", en: "Please enter a valid email." },
    errQuestion: { pt: "Escreva sua pergunta.", en: "Please write your question." },
    waName: { pt: "Nome", en: "Name" },
    waPhone: { pt: "Telefone", en: "Phone" },
    waEmail: { pt: "E-mail", en: "Email" },
    waQuestion: { pt: "Pergunta", en: "Question" },
    waGreeting: { pt: "Olá! Vim pelo site e gostaria de tirar uma dúvida:", en: "Hello! I came from the website and would like to ask a question:" },
  },
  footer: {
    tagline: { pt: "Beauty / Clinic — Remoção de tatuagem & micropigmentação", en: "Beauty / Clinic — Tattoo & micropigmentation removal" },
    rights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  },
  whatsappMessages: {
    general: { pt: "Olá! Gostaria de agendar uma avaliação de remoção.", en: "Hello! I'd like to book a removal consultation." },
    tattoo: { pt: "Olá! Tenho interesse em remoção de tatuagem.", en: "Hello! I'm interested in tattoo removal." },
    micro: { pt: "Olá! Tenho interesse em remoção de micropigmentação.", en: "Hello! I'm interested in micropigmentation removal." },
  },
} satisfies Record<string, Dict>;

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (stored === "pt" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem("lang", lang);
  }, [lang]);

  const toggle = () => setLang((p) => (p === "pt" ? "en" : "pt"));

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
