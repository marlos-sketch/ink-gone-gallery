import { MessageCircle } from "lucide-react";
import { useI18n, translations } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site-config";

export function WhatsAppFloat() {
  const { lang } = useI18n();
  return (
    <a
      href={whatsappLink(translations.whatsappMessages.general[lang])}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)] transition-transform hover:scale-110"
    >
      <MessageCircle size={26} />
    </a>
  );
}
