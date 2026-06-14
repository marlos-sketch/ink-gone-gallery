import { ShieldCheck, UserCheck, Gem, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";
import clinica from "@/assets/clinica-recepcao.jpg.asset.json";

export function WhyUs() {
  const { lang } = useI18n();
  const t = translations.why;

  const features = [
    { icon: UserCheck, title: t.f1Title[lang], desc: t.f1Desc[lang] },
    { icon: ShieldCheck, title: t.f2Title[lang], desc: t.f2Desc[lang] },
    { icon: Gem, title: t.f3Title[lang], desc: t.f3Desc[lang] },
    { icon: HeartHandshake, title: t.f4Title[lang], desc: t.f4Desc[lang] },
  ];

  return (
    <section id="sobre" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
            {t.eyebrow[lang]}
          </p>
          <h2 className="text-3xl font-medium text-foreground md:text-5xl">{t.title[lang]}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t.p1[lang]}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                  <f.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 lg:order-2">
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/15 blur-2xl" />
            <img
              src={clinica.url}
              alt="Ambiente da clínica Sr & Sra Mesquita"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
