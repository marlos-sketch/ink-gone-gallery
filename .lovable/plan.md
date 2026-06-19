## Contexto

Atualmente o link "Depoimentos" no navbar está apontando para `siteConfig.googleMapsUrl`, que abre o Google Maps. O usuário quer que ele abra as avaliações/reviews dos clientes no Google.

## Alterações propostas

### 1. `src/lib/site-config.ts`

Adicionar uma nova propriedade `googleReviewsUrl` construída a partir do `googleMapsUrl` existente (extraíndo o Place ID) ou do Place ID já conhecido (`ChIJB2YvNDv3zpQRScehZSCb9CA`), apontando para:

```
https://search.google.com/local/reviews?placeid=ChIJB2YvNDv3zpQRScehZSCb9CA
```

### 2. `src/components/site/Navbar.tsx`

Alterar o link "Depoimentos" (`depoimentos`) para usar a nova `googleReviewsUrl` no lugar de `googleMapsUrl`. Manter o comportamento de abrir em nova aba (`target="_blank"`, `rel="noopener noreferrer"`).

### 3. `src/components/site/Testimonials.tsx` (verificar)

Se houver algum CTA dentro da seção interna de depoimentos que atualmente leva ao Google Maps, considerar também redirecioná-lo para a URL de reviews para consistência.

## Resultado 

Clicar em "Depoimentos" no menu (desktop e mobile) abre diretamente a página de avaliações do Google da clínica em uma nova aba.