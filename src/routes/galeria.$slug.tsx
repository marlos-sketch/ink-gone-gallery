import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Play } from "lucide-react";
import { I18nProvider, useI18n, translations } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Reveal } from "@/components/site/Reveal";
import { getGallery } from "@/lib/galleries";
import { whatsappLink } from "@/lib/site-config";

export const Route = createFileRoute("/galeria/$slug")({
  beforeLoad: ({ params }) => {
    if (!getGallery(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const g = getGallery(params.slug);
    if (!g) {
      return { meta: [{ title: "Galeria não encontrada — Sr & Sra Mesquita" }] };
    }
    const title = `${g.name.pt} — Galeria — Sr & Sra Mesquita`;
    const desc = g.intro.pt;
    const firstImage = g.media.find((m) => m.type === "image");
    const firstVideo = g.media.find((m) => m.type === "video");
    const cover =
      firstImage?.src ?? (firstVideo && firstVideo.type === "video" ? firstVideo.poster : undefined);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        ...(cover ? [{ property: "og:image", content: cover }] : []),
        ...(cover ? [{ name: "twitter:image", content: cover }] : []),
      ],
      links: [{ rel: "canonical", href: `/galeria/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <I18nProvider>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-32 text-center md:px-10">
        <h1 className="text-3xl font-medium text-foreground md:text-5xl">
          Galeria não encontrada
        </h1>
        <Link
          to="/"
          className="mt-8 inline-block text-sm uppercase tracking-[0.16em] text-gold"
        >
          ← Voltar para o início
        </Link>
      </main>
      <Footer />
    </I18nProvider>
  ),
  errorComponent: ({ error }) => (
    <I18nProvider>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-32 text-center md:px-10">
        <h1 className="text-3xl font-medium text-foreground md:text-5xl">
          Algo deu errado
        </h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
      </main>
      <Footer />
    </I18nProvider>
  ),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="pt-20">
        <GalleryContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </I18nProvider>
  );
}

function GalleryContent() {
  const { slug } = Route.useParams();
  const { lang } = useI18n();
  const t = translations.gallery;
  const g = getGallery(slug);
  if (!g) return null;

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-gold"
            >
              <ArrowLeft size={14} />
              {t.backHome[lang]}
            </Link>
          </Reveal>

          <Reveal>
            <p className="mt-8 text-xs font-semibold uppercase tracking-luxe text-gold">
              {t.eyebrow[lang]}
            </p>
            <h1 className="mt-3 text-4xl font-medium text-foreground md:text-6xl">
              {g.name[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {g.intro[lang]}
            </p>
            <a
              href={whatsappLink(g.whatsappMessage[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:bg-primary/90"
            >
              <MessageCircle size={16} />
              {t.cta[lang]}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Mídia */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {g.media.map((m, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className="group overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                    {m.type === "image" ? (
                      <img
                        src={m.src}
                        alt={m.caption[lang]}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <video
                        src={m.src}
                        poster={m.poster}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    )}
                    {m.type === "video" && (
                      <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur">
                        <Play size={11} strokeWidth={2.5} />
                        {t.videoTag[lang]}
                      </span>
                    )}
                  </div>
                  <figcaption className="px-5 py-4 text-sm text-muted-foreground">
                    {m.caption[lang]}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
              {t.disclaimer[lang]}
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-14 rounded-2xl border border-gold/40 bg-cream p-8 text-center md:p-10">
              <h2 className="text-2xl font-medium text-foreground md:text-3xl">
                {t.bookTitle[lang]}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                {t.bookSubtitle[lang]}
              </p>
              <a
                href={whatsappLink(g.whatsappMessage[lang])}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-all hover:opacity-90"
              >
                <MessageCircle size={16} />
                {t.cta[lang]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
