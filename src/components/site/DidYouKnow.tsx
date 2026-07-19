import { Reveal } from "./Reveal";
import video from "@/assets/voce-sabia/voce-sabia-tatuagem.mp4.asset.json";

export function DidYouKnow() {
  return (
    <section
      id="voce-sabia"
      className="relative overflow-hidden bg-foreground py-20 text-background md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, var(--gold-soft) 0%, transparent 55%), radial-gradient(50% 40% at 90% 90%, var(--gold-soft) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">
            Você sabia?
          </p>
          <h2 className="text-3xl font-medium leading-[1.1] md:text-5xl">
            Seu corpo nunca parou de tentar remover a sua tatuagem.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-background/80 md:text-lg">
            <p>
              Quando a agulha deposita o pigmento na derme, o sistema imunológico
              interpreta a tinta como um invasor. Células de defesa chamadas
              <span className="text-gold"> macrófagos</span> cercam as partículas
              e tentam eliminá-las — mas elas são grandes demais para serem
              destruídas.
            </p>
            <p>
              O que acontece é um revezamento silencioso: cada macrófago segura
              o pigmento até morrer e, ao se romper, entrega a tinta ao próximo.
              Por isso a tatuagem permanece visível — não é a mesma célula que a
              sustenta, é uma fila infinita delas.
            </p>
            <p>
              O <span className="text-gold">laser Q-Switched</span> não
              "apaga" a tinta. Ele fragmenta o pigmento em partículas pequenas o
              suficiente para que o próprio corpo — depois de anos tentando —
              finalmente conclua o trabalho com segurança e sem agredir a pele.
            </p>
          </div>
          <p className="mt-8 text-xs uppercase tracking-luxe text-gold/90">
            Ciência a favor da sua pele — Sr &amp; Sra Mesquita Beauty / Clinic
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/25 blur-2xl"
            />
            <video
              src={video.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-[9/16] w-full rounded-[1.75rem] object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
