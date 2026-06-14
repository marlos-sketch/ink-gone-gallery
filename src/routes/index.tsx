import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Results } from "@/components/site/Results";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sr & Sra Mesquita — Remoção de Tatuagem e Micropigmentação" },
      {
        name: "description",
        content:
          "Clínica especializada em remoção de tatuagem e micropigmentação a laser. Protocolo seguro, equipe especializada e atendimento premium. Agende sua avaliação.",
      },
      { property: "og:title", content: "Sr & Sra Mesquita — Beauty / Clinic" },
      {
        property: "og:description",
        content:
          "Remoção segura de tatuagem e micropigmentação com resultados reais. Agende sua avaliação na Sr & Sra Mesquita.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Sr & Sra Mesquita — Beauty / Clinic",
          description:
            "Clínica especializada em remoção de tatuagem e micropigmentação a laser.",
          image: "/__l5e/assets-v1/2247518c-929e-435b-9da1-b8de6dcfbc61/clinica-recepcao.jpg",
          priceRange: "$$",
          areaServed: "Brasil",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Process />
        <WhyUs />
        <Testimonials />
        <Faq />
        <ContactForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </I18nProvider>
  );
}
