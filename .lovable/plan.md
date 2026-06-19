## Configurar Google Ads Tag (gtag.js)

### Objetivo
Adicionar a tag de conversão do Google Ads (gtag.js) ao site, conforme o código fornecido pelo usuário, com o ID `AW-18142049321`.

### O que será feito
1. **Local de inserção**: Inserir os dois blocos de script (`gtag.js` e `config`) dentro do `<head>` do layout raiz do site (`src/routes/__root.tsx`).
2. **Abordagem**: Como o TanStack Start gerencia o `<head>` via `HeadContent`, o script será colocado diretamente no `RootShell`, antes do `<HeadContent />`, garantindo que carregue no `<head>` do HTML em todas as páginas.
3. **Script inline**: O script de carregamento (`async`) e o script de configuração (`window.dataLayer`, `gtag`) serão inseridos como tags `<script>` nativas no JSX do `RootShell`.

### Resultado esperado
- A tag gtag do Google Ads será executada em todas as páginas do site.
- Dados de conversão começarão a ser enviados para a conta `AW-18142049321`.

Nenhuma mudança de backend ou nova dependência é necessária.