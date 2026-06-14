import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site-config";
import clinica from "@/assets/clinica-recepcao.jpg.asset.json";

export function Hero() {
  const { lang } = useI18n();
  const t = translations.hero;

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-32">
      {/* Decorative gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 0%, var(--gold-soft) 0%, transparent 55%), linear-gradient(180deg, var(--cream) 0%, var(--background) 100%)",
          opacity: 0.7,
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:px-10 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <Reveal>
            <Logo className="mx-auto mb-8 h-24 w-auto md:h-28 lg:mx-0" />
          </Reveal>
          <Reveal delay={80}>
            <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-luxe text-gold md:text-xs">
              {t.eyebrow[lang]}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="whitespace-pre-line text-balance text-4xl font-medium leading-[1.05] text-foreground md:text-6xl lg:text-[4.2rem]">
              {t.title[lang]}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
              {t.subtitle[lang]}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start">
              <a
                href={whatsappLink(translations.whatsappMessages.general[lang])}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-primary px-8 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-all hover:bg-primary/90 sm:w-auto"
              >
                {t.ctaPrimary[lang]}
              </a>
              <a
                href="#resultados"
                className="w-full rounded-full border border-foreground/20 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-foreground transition-all hover:border-gold hover:text-gold sm:w-auto"
              >
                {t.ctaSecondary[lang]}
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-7 lg:mx-0">
              {[
                { v: "+2.500", l: t.statSessions[lang] },
                { v: "100%", l: t.statSafety[lang] },
                { v: "5,0★", l: t.statRating[lang] },
              ].map((s) => (
                <div key={s.l} className="text-center lg:text-left">
                  <dt className="font-serif text-2xl text-foreground md:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/15 blur-2xl"
            />
            <img
              src={clinica.url}
              alt="Recepção da clínica Sr & Sra Mesquita"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
              loading="eager"
            />
            <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-gold/30 bg-card/95 px-6 py-4 text-center shadow-xl backdrop-blur">
              <p className="font-serif text-lg text-foreground">Sr &amp; Sra Mesquita</p>
              <p className="text-[0.65rem] uppercase tracking-luxe text-gold">Beauty / Clinic</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
