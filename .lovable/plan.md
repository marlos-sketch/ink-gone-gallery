## Objetivo
Transformar os cards da seção "O que dizem nossos clientes" em elementos clicáveis que direcionem para as avaliações do Google, mantendo o estilo atual de depoimentos reais.

## Análise técnica
A API do Google Places não retorna um URL individual por review. Portanto, cada card abrirá a página geral de reviews do estabelecimento (`siteConfig.googleReviewsUrl`).

## Alterações propostas

### 1. `src/lib/reviews.functions.ts`
Adicionar `authorUrl` (quando disponível) ao tipo `GoogleReview`. A API Places às vezes retorna `author_url` no review; se presente, usamos ele. Caso contrário, fallback para `googleReviewsUrl`.

### 2. `src/components/site/Testimonials.tsx`
- Envolver cada `<figure>` (card de depoimento) em uma tag `<a>` quando houver um link válido.
- Manter o visual atual: borda, fundo `bg-card`, tipografia, foto do autor e estrelas.
- Adicionar feedback visual de interatividade:
  - `cursor-pointer`
  - Leve elevação ao passar o mouse (`hover:shadow-lg hover:-translate-y-0.5 transition-all`)
- Para os depoimentos fallback (sem link individual), o card também será clicável e apontará para `siteConfig.googleReviewsUrl`.
- Aplicar `target="_blank" rel="noopener noreferrer"` em todos os links.

### 3. `src/lib/site-config.ts`
Verificar se `googleReviewsUrl` está definido (já está) — nenhuma alteração necessária.

## Detalhes técnicos
- Cards reais do Google: link direto quando `author_url` existir; senão, link para a página geral de reviews.
- Cards fallback (placeholder): link para a página geral de reviews.
- Acessibilidade: a tag `<a>` envolve o `<figure>` inteiro; o texto do card continua legível por leitores de tela.
- O link "Ver todas as avaliações no Google" no final da seção permanece inalterado.

## Resultado esperado
Cada card da seção "O que dizem nossos clientes" será clicável, abrindo as avaliações do Google em uma nova aba, com leve animação de hover para indicar interatividade.