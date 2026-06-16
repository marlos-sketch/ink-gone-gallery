## Objetivo
Na galeria "Remoção de Tatuagem" (`src/lib/galleries.ts`), remover apenas as fotos/vídeo de despigmentação de sobrancelha (assets `micro-*`) e substituir pelos novos arquivos enviados. Os itens de tatuagem a laser (`tatuagem-*`) permanecem.

## Passos

1. **Upload dos novos assets** (CDN via `lovable-assets`) a partir de `/mnt/user-uploads/`:
   - `IMG_6368.MOV` → `src/assets/galeria/sobrancelha-despigmentacao.mp4.asset.json`
   - `photo_5012721679549009096_y.jpg` → `src/assets/galeria/sobrancelha-antes-depois-1.jpg.asset.json`
   - `photo_5012721679549009099_y.jpg` → `src/assets/galeria/sobrancelha-antes-depois-2.jpg.asset.json`
   - `photo_5012721679549009100_y.jpg` → `src/assets/galeria/sobrancelha-antes-depois-3.jpg.asset.json`
   - `photo_5012721679549009101_y.jpg` → `src/assets/galeria/sobrancelha-antes-depois-4.jpg.asset.json`

2. **Remover assets antigos** de despigmentação de sobrancelha via `delete_asset`:
   - `micro-laser.mp4.asset.json`
   - `micro-antes-a.jpg.asset.json`
   - `micro-progresso-a.jpg.asset.json`
   - `micro-antes-et.jpg.asset.json`
   - `micro-progresso-et.jpg.asset.json`
   - `micro-final-et.jpg.asset.json`

3. **Atualizar `src/lib/galleries.ts`**:
   - Trocar imports `micro*` pelos novos `sobrancelha*`
   - Manter os 2 itens de tatuagem (vídeo + foto `tatuagem-*`) no topo
   - Substituir os 6 itens `micro*` por: 1 vídeo novo + 4 fotos novas com legendas PT/EN apropriadas (ex.: "Antes e depois — despigmentação de sobrancelha")

Nenhuma alteração em rotas, sitemap, componentes ou i18n.
