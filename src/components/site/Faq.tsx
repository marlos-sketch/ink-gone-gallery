import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";

export function Faq() {
  const { lang } = useI18n();
  const t = translations.faq;
  const [open, setOpen] = useState<number | null>(0);

  const items = [
    { q: t.q1[lang], a: t.a1[lang] },
    { q: t.q2[lang], a: t.a2[lang] },
    { q: t.q3[lang], a: t.a3[lang] },
    { q: t.q4[lang], a: t.a4[lang] },
  ];

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <Reveal className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
            {t.eyebrow[lang]}
          </p>
          <h2 className="text-3xl font-medium text-foreground md:text-5xl">{t.title[lang]}</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg text-foreground md:text-xl">{item.q}</span>
                  <span className="flex-shrink-0 text-gold">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 220 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-5 leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
