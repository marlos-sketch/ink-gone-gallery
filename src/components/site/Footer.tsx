import { Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n, translations } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { lang } = useI18n();
  const t = translations.footer;

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:px-10">
        <Logo className="h-16 w-auto" />
        <p className="max-w-md text-sm text-muted-foreground">{t.tagline[lang]}</p>

        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-gold"
        >
          <Instagram size={18} />@{siteConfig.instagramHandle}
        </a>

        <div className="mt-2 h-px w-24 bg-gold/40" />

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sr &amp; Sra Mesquita. {t.rights[lang]}
        </p>
      </div>
    </footer>
  );
}
