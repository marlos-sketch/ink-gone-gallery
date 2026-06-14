import { Sparkles, Eraser, ClipboardCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site-config";

export function Services() {
  const { lang } = useI18n();
  const t = translations.services;

  const items = [
    {
      icon: Eraser,
      title: t.tattooTitle[lang],
      desc: t.tattooDesc[lang],
      msg: translations.whatsappMessages.tattoo[lang],
    },
    {
      icon: Sparkles,
      title: t.microTitle[lang],
      desc: t.microDesc[lang],
      msg: translations.whatsappMessages.micro[lang],
    },
    {
      icon: ClipboardCheck,
      title: t.evalTitle[lang],
      desc: t.evalDesc[lang],
      msg: translations.whatsappMessages.general[lang],
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
            {t.eyebrow[lang]}
          </p>
          <h2 className="text-3xl font-medium text-foreground md:text-5xl">{t.title[lang]}</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{t.subtitle[lang]}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 110}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-2xl text-foreground">{item.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{item.desc}</p>
                <a
                  href={whatsappLink(item.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-gold"
                >
                  {t.learnMore[lang]}
                  <span aria-hidden>→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
