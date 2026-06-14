import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";

export function Process() {
  const { lang } = useI18n();
  const t = translations.process;

  const steps = [
    { n: "01", title: t.step1Title[lang], desc: t.step1Desc[lang] },
    { n: "02", title: t.step2Title[lang], desc: t.step2Desc[lang] },
    { n: "03", title: t.step3Title[lang], desc: t.step3Desc[lang] },
    { n: "04", title: t.step4Title[lang], desc: t.step4Desc[lang] },
  ];

  return (
    <section id="processo" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
            {t.eyebrow[lang]}
          </p>
          <h2 className="text-3xl font-medium text-foreground md:text-5xl">{t.title[lang]}</h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="relative">
                <span className="font-serif text-5xl text-gold/35 md:text-6xl">{s.n}</span>
                <div className="mt-3 h-px w-12 bg-gold" />
                <h3 className="mt-5 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
