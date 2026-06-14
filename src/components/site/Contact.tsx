import { MessageCircle, Instagram, Clock, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function Contact() {
  const { lang } = useI18n();
  const t = translations.contact;

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-primary px-7 py-14 text-center md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 0%, color-mix(in oklab, var(--gold) 30%, transparent) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
                {t.eyebrow[lang]}
              </p>
              <h2 className="text-3xl font-medium text-primary-foreground md:text-5xl">
                {t.title[lang]}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75 md:text-lg">
                {t.subtitle[lang]}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={whatsappLink(translations.whatsappMessages.general[lang])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-all hover:opacity-90 sm:w-auto"
                >
                  <MessageCircle size={18} />
                  {t.whatsappCta[lang]}
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:border-gold hover:text-gold sm:w-auto"
                >
                  <Instagram size={18} />
                  {t.instagramCta[lang]}
                </a>
              </div>

              <div className="mt-12 grid gap-6 border-t border-primary-foreground/15 pt-8 text-left sm:grid-cols-2">
                <div className="flex items-center gap-3 sm:justify-center">
                  <Clock size={20} className="text-gold" />
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-primary-foreground/60">
                      {t.hoursLabel[lang]}
                    </p>
                    <p className="text-primary-foreground">{siteConfig.hours[lang]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:justify-center">
                  <MapPin size={20} className="text-gold" />
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-primary-foreground/60">
                      {t.addressLabel[lang]}
                    </p>
                    <p className="text-primary-foreground">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
