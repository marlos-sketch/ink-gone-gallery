import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n, translations } from "@/lib/i18n";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const links = [
  { id: "servicos", key: "services" as const },
  { id: "resultados", key: "results" as const },
  { id: "processo", key: "process" as const },
  { id: "sobre", key: "about" as const },
  { id: "contato", key: "contact" as const },
];

export function Navbar() {
  const { lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = (k: keyof typeof translations.nav) => translations.nav[k][lang];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[0_1px_24px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#inicio" className="flex items-center" aria-label="Sr & Sra Mesquita">
          <Logo className="h-12 w-auto md:h-14" />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
            >
              {t(l.key)}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggle}
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-foreground/70 transition-colors hover:text-foreground"
            aria-label="Trocar idioma"
          >
            <span className={lang === "pt" ? "text-gold" : ""}>PT</span>
            <span className="text-border">/</span>
            <span className={lang === "en" ? "text-gold" : ""}>EN</span>
          </button>

          <a
            href={whatsappLink(translations.whatsappMessages.general[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-all hover:bg-primary/90 md:inline-block"
          >
            {t("book")}
          </a>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm uppercase tracking-[0.16em] text-foreground/80"
              >
                {t(l.key)}
              </a>
            ))}
            <a
              href={whatsappLink(translations.whatsappMessages.general[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-primary px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground"
            >
              {t("book")}
            </a>
            <p className="mt-3 text-xs text-muted-foreground">{siteConfig.hours[lang]}</p>
          </div>
        </div>
      )}
    </header>
  );
}
