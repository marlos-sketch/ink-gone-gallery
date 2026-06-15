## Plano de implementação

### 1. Nova seção "Nossos Procedimentos" + páginas dedicadas

A seção atual "Nossos Serviços" (Remoção de Tatuagem / Micropigmentação / Avaliação) é o **core do negócio** e fica como está. Criamos uma seção nova logo abaixo, chamada **"Procedimentos Estéticos"**, com 6 cards. Cada card vira uma página própria com SEO individual.

**Novo componente** `src/components/site/Procedures.tsx`:
- Grid de 6 cards (3x2 desktop, 1 col mobile)
- Cada card: ícone, nome do procedimento, descrição curta, link "Saiba mais →" para a página dedicada + botão "Falar no WhatsApp"
- Mesmo estilo visual (border-gold/hover, fonte serif, tokens existentes)

**6 novas rotas** em `src/routes/procedimentos.*.tsx`:
- `/procedimentos/botox`
- `/procedimentos/micropigmentacao-sobrancelha`
- `/procedimentos/micropigmentacao-labial`
- `/procedimentos/preenchimento-labial`
- `/procedimentos/harmonizacao-facial`
- `/procedimentos/bioestimulador-colageno`

Cada página tem:
- `head()` próprio (title, description, og:title, og:description, canonical) — SEO único por procedimento
- Hero com nome do procedimento + descrição
- Seção "Benefícios" (lista visual com ícones)
- Seção "Como funciona" (3-4 passos curtos)
- CTA WhatsApp com mensagem pré-preenchida específica
- Navbar + Footer compartilhados

**Conteúdo (bilíngue PT/EN)** centralizado em `src/lib/i18n.tsx` num novo bloco `procedures` com: name, shortDesc, longDesc, benefits[], howItWorks[] para cada um dos 6.

Conteúdo inicial técnico (botox = relaxa rugas dinâmicas; bioestimulador = estimula colágeno natural; harmonização = equilíbrio facial; preenchimento labial = volume e contorno; micro labial = cor natural duradoura; micro sobrancelha = design fio a fio) — você poderá refinar depois editando o i18n.

**Navbar:** adicionar link "Procedimentos" que abre dropdown com os 6 (desktop) / lista expansível (mobile).

### 2. Avaliações Google Meu Negócio (Google Places API)

Substituir os 3 depoimentos hardcoded em `Testimonials.tsx` pelas reviews reais do Google.

**Fluxo:**
1. Habilitar **Lovable Cloud** (necessário para guardar a API key e proxy server-side — não dá pra expor a Google API key no client)
2. Salvar dois secrets: `GOOGLE_PLACES_API_KEY` e `GOOGLE_PLACE_ID` (eu te explico onde obter)
3. Criar server function `src/lib/reviews.functions.ts` (`getGoogleReviews`) que chama `https://maps.googleapis.com/maps/api/place/details/json?place_id=...&fields=reviews,rating,user_ratings_total&key=...`
4. Cache em memória de 1h (reviews mudam pouco; evita estourar quota Google)
5. `Testimonials.tsx` passa a usar TanStack Query (`useSuspenseQuery` via loader na rota `/`) — exibe foto do autor, nome, estrelas, texto, data relativa, "ver no Google"
6. Fallback gracioso: se API falhar ou key faltar, renderiza os 3 depoimentos placeholder atuais (não quebra o site)
7. Adiciona link "Ver todas as avaliações no Google" abaixo

### 3. Formulário "Faça sua pergunta" — responsivo + banco + WhatsApp

O `ContactForm.tsx` atual já abre WhatsApp via `wa.me`. Melhorias:

**Responsividade (revisão):**
- Padding e gap ajustados para mobile (`px-4` em telas <640px)
- Inputs full-width em mobile, grid 2-col só ≥640px (já tá assim, vou conferir e ajustar)
- Botão submit altura mínima 48px (touch target)
- Textarea altura adaptativa
- Mensagens de erro com aria-live para acessibilidade

**Salvar no banco:**
- Tabela `contact_questions` (id, name, phone, email, question, lang, created_at)
- RLS: insert público (qualquer um do site), select só `service_role` (privacidade — não retornar dados)
- GRANTs explícitos
- Server function `saveContactQuestion` chamada no submit ANTES de abrir o WhatsApp
- Se o insert falhar, mesmo assim abre o WhatsApp (não bloqueia o cliente)
- Toast de sucesso ("Pergunta enviada!") + redireciona pro WhatsApp

### Detalhes técnicos

- **Stack:** TanStack Start, createServerFn para Google Places e save, server fns em `src/lib/*.functions.ts`
- **Lovable Cloud:** ativada na implementação; necessária para item 2 e 3
- **Secrets a pedir após confirmação:** `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`
- **Design tokens:** zero hardcode de cor — tudo via tokens existentes em `src/styles.css`
- **i18n:** todos textos novos em `src/lib/i18n.tsx`
- **WhatsApp:** sempre via `whatsappLink()` de `site-config.ts`
- **SEO:** cada `/procedimentos/*` com head() único; sitemap não é gerado neste template (rotas estáticas já são crawláveis)
- **Páginas de procedimento:** rotas públicas, SSR padrão, sem autenticação

### Arquivos criados/modificados

```text
NOVOS:
  src/components/site/Procedures.tsx
  src/components/site/ProcedurePage.tsx        (template compartilhado)
  src/routes/procedimentos.botox.tsx
  src/routes/procedimentos.micropigmentacao-sobrancelha.tsx
  src/routes/procedimentos.micropigmentacao-labial.tsx
  src/routes/procedimentos.preenchimento-labial.tsx
  src/routes/procedimentos.harmonizacao-facial.tsx
  src/routes/procedimentos.bioestimulador-colageno.tsx
  src/lib/reviews.functions.ts
  src/lib/contact.functions.ts
  supabase/migrations/<timestamp>_contact_questions.sql

MODIFICADOS:
  src/lib/i18n.tsx                  (blocos procedures, reviews, form)
  src/routes/index.tsx              (inclui <Procedures />, loader p/ reviews)
  src/components/site/Navbar.tsx    (dropdown Procedimentos)
  src/components/site/Testimonials.tsx
  src/components/site/ContactForm.tsx
```

### Ordem de execução

1. Ativar Lovable Cloud
2. Migration `contact_questions` + GRANTs + RLS
3. i18n: adicionar bloco `procedures` (PT/EN) com conteúdo inicial
4. Componente `Procedures.tsx` + integração no index
5. Template `ProcedurePage.tsx` + 6 rotas
6. Navbar com dropdown Procedimentos
7. `contact.functions.ts` + atualizar `ContactForm` (save + responsivo)
8. Pedir secrets Google → `reviews.functions.ts` → atualizar `Testimonials`
9. Verificar build + visual

Após aprovar, começo pelos passos 1–7 (não dependem dos secrets do Google) e no passo 8 te peço a API key e o Place ID com instruções.