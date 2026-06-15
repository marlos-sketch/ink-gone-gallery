import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";
import { procedures } from "@/lib/procedures";

export function Procedures() {
  const { lang } = useI18n();
  const t = translations.procedures;

  return (
    <section id="procedimentos" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
            {t.eyebrow[lang]}
          </p>
          <h2 className="text-3xl font-medium text-foreground md:text-5xl">
            {t.title[lang]}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {t.subtitle[lang]}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <p.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-2xl text-foreground">
                  {p.name[lang]}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {p.shortDesc[lang]}
                </p>
                <Link
                  to="/procedimentos/$slug"
                  params={{ slug: p.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-gold"
                >
                  {t.learnMore[lang]}
                  <span aria-hidden>→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
