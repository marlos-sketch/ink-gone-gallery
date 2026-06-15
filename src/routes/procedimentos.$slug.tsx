import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ArrowLeft, MessageCircle } from "lucide-react";
import { I18nProvider, useI18n, translations } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Reveal } from "@/components/site/Reveal";
import { getProcedure, procedures } from "@/lib/procedures";
import { whatsappLink } from "@/lib/site-config";

export const Route = createFileRoute("/procedimentos/$slug")({
  beforeLoad: ({ params }) => {
    if (!getProcedure(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const proc = getProcedure(params.slug);
    if (!proc) {
      return {
        meta: [{ title: "Procedimento não encontrado — Sr & Sra Mesquita" }],
      };
    }
    const title = `${proc.name.pt} — Sr & Sra Mesquita`;
    const desc = proc.shortDesc.pt;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/procedimentos/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <I18nProvider>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-32 text-center md:px-10">
        <h1 className="text-3xl font-medium text-foreground md:text-5xl">
          Procedimento não encontrado
        </h1>
        <Link
          to="/"
          className="mt-8 inline-block text-sm uppercase tracking-[0.16em] text-gold"
        >
          ← Voltar para o início
        </Link>
      </main>
      <Footer />
    </I18nProvider>
  ),
  errorComponent: ({ error }) => (
    <I18nProvider>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-32 text-center md:px-10">
        <h1 className="text-3xl font-medium text-foreground md:text-5xl">
          Algo deu errado
        </h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
      </main>
      <Footer />
    </I18nProvider>
  ),
  component: ProcedurePage,
});

function ProcedurePage() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="pt-20">
        <ProcedureContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </I18nProvider>
  );
}

function ProcedureContent() {
  const { slug } = Route.useParams();
  const { lang } = useI18n();
  const t = translations.procedures;
  const proc = getProcedure(slug);
  if (!proc) return null;

  const Icon = proc.icon;

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-gold"
            >
              <ArrowLeft size={14} />
              {t.backHome[lang]}
            </Link>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Icon size={32} strokeWidth={1.5} />
            </div>
            <h1 className="mt-6 text-4xl font-medium text-foreground md:text-6xl">
              {proc.name[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {proc.longDesc[lang]}
            </p>
            <a
              href={whatsappLink(proc.whatsappMessage[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:bg-primary/90"
            >
              <MessageCircle size={16} />
              {t.cta[lang]}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
              {t.benefitsEyebrow[lang]}
            </p>
            <h2 className="text-3xl font-medium text-foreground md:text-4xl">
              {t.benefitsTitle[lang]}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {proc.benefits[lang].map((b, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <p className="text-foreground">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
              {t.stepsEyebrow[lang]}
            </p>
            <h2 className="text-3xl font-medium text-foreground md:text-4xl">
              {t.stepsTitle[lang]}
            </h2>
          </Reveal>

          <ol className="mt-10 space-y-5">
            {proc.steps[lang].map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <li className="flex items-start gap-5 rounded-2xl border border-border bg-background p-6">
                  <span className="font-serif text-3xl text-gold">
                    0{i + 1}
                  </span>
                  <p className="pt-1 text-foreground md:text-lg">{s}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <div className="mt-12 rounded-2xl border border-gold/40 bg-background p-8 text-center md:p-10">
              <h3 className="text-2xl font-medium text-foreground md:text-3xl">
                {t.bookTitle[lang]}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                {t.bookSubtitle[lang]}
              </p>
              <a
                href={whatsappLink(proc.whatsappMessage[lang])}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-all hover:opacity-90"
              >
                <MessageCircle size={16} />
                {t.cta[lang]}
              </a>
            </div>
          </Reveal>

          {/* Outros procedimentos */}
          <div className="mt-16 border-t border-border pt-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-luxe text-gold">
              {t.othersEyebrow[lang]}
            </p>
            <div className="flex flex-wrap gap-3">
              {procedures
                .filter((p) => p.slug !== slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    to="/procedimentos/$slug"
                    params={{ slug: p.slug }}
                    className="rounded-full border border-border bg-background px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-gold hover:text-gold"
                  >
                    {p.name[lang]}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
