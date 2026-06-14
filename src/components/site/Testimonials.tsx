import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";

export function Testimonials() {
  const { lang } = useI18n();
  const t = translations.testimonials;

  const items = [
    { text: t.t1[lang], name: t.t1Name[lang] },
    { text: t.t2[lang], name: t.t2Name[lang] },
    { text: t.t3[lang], name: t.t3Name[lang] },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
            {t.eyebrow[lang]}
          </p>
          <h2 className="text-3xl font-medium text-foreground md:text-5xl">{t.title[lang]}</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 110}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-foreground">
                  “{item.text}”
                </blockquote>
                <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
