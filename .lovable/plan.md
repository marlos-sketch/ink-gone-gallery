# Landing Page — Sr & Sra Mesquita Beauty/Clinic

Landing page de página única para uma clínica de **remoção de tatuagem** e **remoção de micropigmentação** (sobrancelhas). Visual elegante claro com toques de dourado, inspirado na recepção da clínica e na logo serifada. Bilíngue (Português/Inglês) com troca de idioma, e CTA principal via WhatsApp. O site de exemplo (GLOW + CO) serve apenas como referência de layout/UI.

## Identidade visual
- **Paleta:** off-white/creme de fundo, texto preto/grafite (como a logo), acentos em dourado champanhe; madeira quente como detalhe secundário.
- **Tipografia:** serifada elegante para títulos (combinando com a logo "Sr & Sra Mesquita"), sans-serif leve com tracking amplo para textos e rótulos (estilo "BEAUTY / CLINIC").
- **Logo:** a logo enviada (PNG com fundo transparente) em destaque no topo / hero e no rodapé.
- Microanimações suaves (fade/slide ao rolar), respeitando o estilo sofisticado.

## Idiomas (PT/EN)
- Botão de troca de idioma no menu (PT | EN), padrão Português.
- Todo o conteúdo textual mantido num dicionário de traduções; troca instantânea sem recarregar.

## Estrutura da página (seções)
1. **Navbar fixa** — logo à esquerda, links de âncora (Início, Serviços, Resultados, Sobre, Contato), seletor de idioma e botão "Agendar no WhatsApp".
2. **Hero** — logo em destaque, headline (ex.: "Sua pele renovada. Resultados que se veem."), subtítulo sobre remoção segura de tatuagem e micropigmentação, CTA WhatsApp + CTA "Ver resultados".
3. **Serviços** — cards: Remoção de Tatuagem, Remoção de Micropigmentação (sobrancelha/lábios/couro cabeludo), Avaliação personalizada. Cada card com ícone, descrição curta e benefícios.
4. **Resultados (Antes & Depois)** — galeria usando as fotos enviadas: remoção de tatuagem no braço e correção/remoção de micropigmentação de sobrancelha. Apresentadas em destaque com legenda.
5. **Como funciona** — passo a passo (Avaliação → Sessões → Cicatrização → Resultado), texto educativo sobre o processo de remoção a laser/método.
6. **Por que a Sr & Sra Mesquita** — diferenciais (ambiente premium, profissionais especializados, segurança/higiene, atendimento personalizado), com foto da recepção da clínica.
7. **Depoimentos** — placeholders de avaliações (5 estrelas) prontos para o cliente substituir.
8. **FAQ** — dúvidas comuns (dói? quantas sessões? cuidados pós?).
9. **Contato / Agendamento** — bloco com CTA WhatsApp grande, Instagram e espaço para endereço/horário (placeholders editáveis).
10. **Rodapé** — logo, navegação, redes sociais, direitos autorais.

## Imagens
- Logo e as 3 fotos enviadas serão hospedadas via Lovable Assets (CDN) e referenciadas no código.
  - `Cópia_de_Sr_-removebg-preview.png` → logo (hero, navbar, footer).
  - `photo_5005846884312091906_y.jpg` → resultado remoção de tatuagem.
  - `photo_5005846884312091905_y.jpg` → resultado micropigmentação de sobrancelha.
  - `photo_5005846884312091912_y.jpg` → foto da clínica (seção "Por que nós").

## Contato (placeholders)
Como não há dados oficiais confirmados, usarei placeholders claramente editáveis para número de WhatsApp, Instagram, endereço e horário, concentrados num único arquivo de configuração para fácil edição depois.

## SEO
- Title/description bilíngues focados em "remoção de tatuagem e micropigmentação — Sr & Sra Mesquita".
- H1 único, HTML semântico, alt text nas imagens, meta OG/Twitter e JSON-LD (LocalBusiness / HealthAndBeautyBusiness).

## Detalhes técnicos
- TanStack Start + Tailwind; tokens de cor/tipografia definidos em `src/styles.css` (sem cores hardcoded nos componentes).
- Página única em `src/routes/index.tsx`, dividida em componentes (`Navbar`, `Hero`, `Services`, `Results`, `Process`, `WhyUs`, `Testimonials`, `Faq`, `Contact`, `Footer`).
- Dicionário de tradução PT/EN + contexto/estado simples de idioma; sem backend necessário (CTA WhatsApp via link `wa.me`).
- Conteúdo e contatos centralizados em um arquivo de config para edição rápida.

Sem necessidade de Lovable Cloud nesta etapa (sem formulário/banco). Caso depois você queira formulário de contato com armazenamento, isso exigiria ativar o backend.