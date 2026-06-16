=== Mesquita Beauty Clinic ===

Tema WordPress personalizado para a Sr & Sra Mesquita Beauty Clinic.

== Instalação ==

1. Copie a pasta `mesquita-beauty/` inteira para: wp-content/themes/
   Caminho final: wp-content/themes/mesquita-beauty/

2. No painel do WordPress:
   - Vá em Aparência > Temas
   - Ative o tema "Mesquita Beauty Clinic"

3. Configure a página inicial:
   - Crie uma página chamada "Início" (deixe o conteúdo vazio)
   - Vá em Configurações > Leitura
   - Em "A página inicial exibe", escolha "Uma página estática"
   - Selecione "Início" como Página inicial
   - O template front-page.php será carregado automaticamente

4. Configure o menu:
   - Aparência > Menus
   - Crie um menu, adicione os links que quiser
   - Atribua ao local "Menu Principal"

5. Edite as informações de contato:
   - Abra functions.php
   - Localize a função `mesquita_contact()`
   - Altere os valores (WhatsApp, Instagram, endereço, Google Place ID)

== Estrutura ==

mesquita-beauty/
├── style.css          (obrigatório — cabeçalho do tema + CSS)
├── functions.php      (configurações, menus, contato centralizado)
├── header.php         (cabeçalho HTML + navbar)
├── footer.php         (rodapé + WhatsApp flutuante)
├── front-page.php     (página inicial / landing)
├── index.php          (fallback obrigatório — lista de posts)
├── page.php           (template de páginas)
├── single.php         (template de post individual)
├── 404.php            (página de erro)
├── README.txt
└── assets/
    └── js/
        └── main.js

== Personalização ==

- Cores e fontes: edite as variáveis CSS no topo de style.css (:root)
- Logo: Aparência > Personalizar > Identidade do Site
- Conteúdo da landing: edite front-page.php
- Texto dos botões/links: edite as strings em front-page.php e footer.php

== Plugins recomendados (opcionais) ==

- Polylang ou WPML — para versão bilíngue PT/EN
- Yoast SEO ou Rank Math — para SEO
- WP Super Cache — para performance

== Licença ==

GPL v2 ou posterior.
