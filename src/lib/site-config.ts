// Configuração central de conteúdo e contatos.
// Edite os valores abaixo para atualizar o site rapidamente.

export const siteConfig = {
  // ====== CONTATOS (edite aqui) ======
  // Número no formato internacional, somente dígitos (DDI + DDD + número).
  whatsappNumber: "5511999999999",
  instagramHandle: "srsramesquita",
  instagramUrl: "https://instagram.com/srsramesquita",
  email: "contato@srsramesquita.com",
  address: "Av. Exemplo, 1000 — São Paulo, SP",
  hours: {
    pt: "Seg a Sáb: 9h às 19h",
    en: "Mon to Sat: 9am to 7pm",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
