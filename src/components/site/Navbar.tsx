import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useI18n, translations } from "@/lib/i18n";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { procedures } from "@/lib/procedures";

const links = [
  { id: "servicos", key: "services" as const },
  { id: "procedimentos", key: "procedures" as const, hasMenu: true },
  { id: "resultados", key: "results" as const },
  { id: "processo", key: "process" as const },
  { id: "depoimentos", key: "testimonials" as const, external: siteConfig.googleMapsUrl },
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
          {links.map((l) =>
            l.hasMenu ? (
              <div key={l.id} className="group relative">
                <a
                  href={`/#${l.id}`}
                  className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
                >
                  {t(l.key)}
                  <ChevronDown size={12} className="transition-transform group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-border bg-background p-2 opacity-0 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {procedures.map((p) => (
                    <Link
                      key={p.slug}
                      to="/procedimentos/$slug"
                      params={{ slug: p.slug }}
                      className="block rounded-lg px-3 py-2 text-xs uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:bg-cream hover:text-gold"
                    >
                      {p.name[lang]}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={l.id}
                href={l.external || `/#${l.id}`}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
              >
                {t(l.key)}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
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
              <div key={l.id}>
                <a
                  href={l.external || `/#${l.id}`}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm uppercase tracking-[0.16em] text-foreground/80"
                >
                  {t(l.key)}
                </a>
                {l.hasMenu && (
                  <div className="ml-3 mb-2 flex flex-col gap-1 border-l border-border pl-3">
                    {procedures.map((p) => (
                      <Link
                        key={p.slug}
                        to="/procedimentos/$slug"
                        params={{ slug: p.slug }}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-xs uppercase tracking-[0.14em] text-foreground/70"
                      >
                        {p.name[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
