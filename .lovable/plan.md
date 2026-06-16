## Objetivo

Tornar os 3 ícones da seção **"Nossos Serviços"** clicáveis. Ao clicar, o usuário vai para uma página de galeria dedicada ao serviço, com as fotos e vídeos enviados.

## Mapeamento dos arquivos enviados

| Serviço | Mídia |
|---|---|
| Remoção de Tatuagem | `IMAGE_2026-06-16_17_51_39.jpg` (sessão de laser em andamento) + `IMG_0107.MP4` (vídeo do procedimento) |
| Remoção de Micropigmentação | 4 fotos da evolução do "A" e do "et" (antes/durante/depois) + `FILE_2026-06-16_17_57_31.mp4` |
| Avaliação Personalizada | Sem mídia nova — o botão rola até a seção de Contato (formulário/WhatsApp) |

> Se você preferir distribuir os 2 vídeos de outra forma ou adicionar mais arquivos, é só dizer depois — a estrutura suporta facilmente.

## Mudanças

### 1. Upload das mídias
Subir os 5 arquivos via `lovable-assets` para a CDN e gerar pointers em `src/assets/galeria/*.asset.json`.

### 2. Nova rota `/galeria/$slug`
Arquivo `src/routes/galeria.$slug.tsx` com:
- Catálogo bilíngue PT/EN (`src/lib/galleries.ts`) contendo `remocao-tatuagem` e `remocao-micropigmentacao` — título, descrição curta, lista de imagens e vídeos.
- Layout consistente com o resto do site (Navbar, Hero claro com título dourado, grid responsivo de imagens com lightbox simples, players de vídeo nativos `<video controls playsInline>`, CTA WhatsApp ao final, Footer + WhatsAppFloat).
- `head()` com title/description/og próprios + canonical.
- `notFoundComponent` e `errorComponent` (padrão das outras rotas).
- Entrada nova no `sitemap.xml.ts` para os 2 slugs.

### 3. Ícones clicáveis em `src/components/site/Services.tsx`
- Trocar a `<div>` do ícone por um `<Link>` (ou `<a href="#contato">` para o caso "Avaliação") com aria-label, foco visível e hover dourado.
- Cada item passa a ter um campo `href` (rota interna ou âncora).
- Manter o link "Saber mais →" no rodapé do card apontando para a mesma galeria (mais descobrível que só o ícone).

### 4. i18n
Adicionar chaves novas em `src/lib/i18n.tsx` em `translations.gallery` (eyebrow, intros, "Veja em vídeo", "Antes / Depois", CTA, etc.) em PT e EN.

## Detalhes técnicos

- Rota nova respeita as regras do TanStack Start (flat naming, `createFileRoute`, sem editar `routeTree.gen.ts` — o plugin regenera).
- Imagens carregadas com `loading="lazy"` e `decoding="async"`; vídeos com `preload="metadata"` e `poster` (usando 1 imagem do conjunto).
- Sem hardcode de cores — uso dos tokens existentes (`gold`, `cream`, `border`, `muted-foreground`).
- Sem alterações em backend, auth ou dados.

## Arquivos afetados

- Novo: `src/lib/galleries.ts`
- Novo: `src/routes/galeria.$slug.tsx`
- Novo: `src/assets/galeria/*.asset.json` (5 pointers)
- Editado: `src/components/site/Services.tsx`
- Editado: `src/lib/i18n.tsx`
- Editado: `src/routes/sitemap[.]xml.ts`
