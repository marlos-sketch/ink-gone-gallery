// Configuração central de conteúdo e contatos.
// Edite os valores abaixo para atualizar o site rapidamente.

export const siteConfig = {
  // ====== CONTATOS (edite aqui) ======
  // Número no formato internacional, somente dígitos (DDI + DDD + número).
  whatsappNumber: "5511917147633",
  whatsappDisplay: "(11) 91714-7633",
  instagramHandle: "srsramesquitabeautyclinic",
  instagramUrl: "https://www.instagram.com/srsramesquitabeautyclinic",
  email: "contato@srsramesquita.com",
  address: "Rua Ezequiel Freire, 192 - Sala 906 - Santana - São Paulo - SP, CEP: 02034-000",
  hours: {
    pt: "Seg a Sáb: 9h às 19h",
    en: "Mon to Sat: 9am to 7pm",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
