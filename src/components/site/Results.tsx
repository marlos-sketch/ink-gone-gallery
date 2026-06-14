import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";
import tattoo from "@/assets/resultado-tatuagem.jpg.asset.json";
import sobrancelha from "@/assets/resultado-sobrancelha.jpg.asset.json";

export function Results() {
  const { lang } = useI18n();
  const t = translations.results;

  const items = [
    { img: tattoo.url, caption: t.tattooCaption[lang], tag: t.tattooTag[lang], ratio: "aspect-square" },
    { img: sobrancelha.url, caption: t.microCaption[lang], tag: t.microTag[lang], ratio: "aspect-square" },
  ];

  return (
    <section id="resultados" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
            {t.eyebrow[lang]}
          </p>
          <h2 className="text-3xl font-medium text-foreground md:text-5xl">{t.title[lang]}</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{t.subtitle[lang]}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.caption} delay={i * 130}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-36px_rgba(0,0,0,0.3)]">
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.caption}
                    loading="lazy"
                    className={`${item.ratio} w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]`}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <figcaption className="flex items-center justify-between px-6 py-5">
                  <span className="text-foreground">{item.caption}</span>
                  <span className="text-xs uppercase tracking-luxe text-gold">Antes / Depois</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-xs italic text-muted-foreground">{t.disclaimer[lang]}</p>
        </Reveal>
      </div>
    </section>
  );
}
