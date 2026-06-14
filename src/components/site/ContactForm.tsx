import { useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { useI18n, translations } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site-config";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(8).max(20).regex(/^[0-9()+\-\s]+$/),
  email: z.string().trim().email().max(255),
  question: z.string().trim().min(3).max(1000),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, boolean>>;

const baseField =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold";

export function ContactForm() {
  const { lang } = useI18n();
  const t = translations.form;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, phone, email, question });
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as keyof FieldErrors] = true;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const d = result.data;
    const message = [
      t.waGreeting[lang],
      "",
      `${t.waName[lang]}: ${d.name}`,
      `${t.waPhone[lang]}: ${d.phone}`,
      `${t.waEmail[lang]}: ${d.email}`,
      "",
      `${t.waQuestion[lang]}: ${d.question}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="duvidas" className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5 md:px-10">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
              {t.eyebrow[lang]}
            </p>
            <h2 className="text-3xl font-medium text-foreground md:text-5xl">
              {t.title[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
              {t.subtitle[lang]}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 rounded-[2rem] border border-gold/30 bg-card p-6 md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-name" className="text-[0.7rem] font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.nameLabel[lang]}
                </label>
                <input
                  id="cf-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder[lang]}
                  maxLength={100}
                  className={baseField}
                />
                {errors.name && <span className="text-xs text-destructive">{t.errName[lang]}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-phone" className="text-[0.7rem] font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.phoneLabel[lang]}
                </label>
                <input
                  id="cf-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder[lang]}
                  maxLength={20}
                  className={baseField}
                />
                {errors.phone && <span className="text-xs text-destructive">{t.errPhone[lang]}</span>}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              <label htmlFor="cf-email" className="text-[0.7rem] font-semibold uppercase tracking-widest text-muted-foreground">
                {t.emailLabel[lang]}
              </label>
              <input
                id="cf-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder[lang]}
                maxLength={255}
                className={baseField}
              />
              {errors.email && <span className="text-xs text-destructive">{t.errEmail[lang]}</span>}
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              <label htmlFor="cf-question" className="text-[0.7rem] font-semibold uppercase tracking-widest text-muted-foreground">
                {t.questionLabel[lang]}
              </label>
              <textarea
                id="cf-question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder={t.questionPlaceholder[lang]}
                rows={4}
                maxLength={1000}
                className={`${baseField} resize-none`}
              />
              {errors.question && <span className="text-xs text-destructive">{t.errQuestion[lang]}</span>}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-all hover:opacity-90"
            >
              <Send size={17} />
              {t.submit[lang]}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
