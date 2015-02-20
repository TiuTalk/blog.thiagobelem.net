---
layout: post
title: Criando um tema para WordPress – Parte 5

date: '2012-07-02 00:48:02 -0300'
categories:
- Desenvolvimento
- PHP
- HTML
- WordPress
- Artigos
- Tutoriais
tags:
- WordPress
- tema
- theme
- template
- post
- single
---
Hoje vamos continuar com a parte 5 da série de posts onde mostro o passo-a-passo da criação de um tema pra WordPress.

Se você ainda não está acompanhando, veja as outras partes dessa sequência de artigos:

<ul>
<li>[Parte 1 - Estrutura inicial do tema](/criando-um-tema-para-wordpress)</li>
<li>[Parte 2 - HTML5, Funções básicas do WordPress, Feed RSS e Atom](/criando-um-tema-para-wordpress-parte-2)</li>
<li>[Parte 3 - Topo e listagem de posts](/criando-um-tema-para-wordpress-parte-3)</li>
<li>[Parte 4 - Header, Footer e Sidebar](/criando-um-tema-para-wordpress-parte-4)</li>
</ul>
<h3>Página interna do post (single.php)</h3>
Eu não sei exatamente por que chamo esse tipo de página de "interna do post" ou "interna da notícia", mas essa é a página que mostra todo o conteúdo do post em questão.

Segundo a [hierarquia de templates](http://codex.wordpress.org/Template_Hierarchy) do WordPress,  ele irá mostrar o template criado nos seguintes arquivos (sempre o primeiro que ele achar):

<ol>
<li><strong>single-<span style="color: #999999;">{post_type}</span>.php</strong> - Se o post que está sendo acessado é do post-type "<strong>produto</strong>", o WP iria procurar por um <strong>single-produto.php</strong></li>
<li><strong>single.php</strong></li>
<li><strong>index.php</strong></li>
</ol>
Então, como nós queremos criar uma single para os posts normais, vamos criar o <strong>single.php</strong>, já que o <strong>index.php</strong> está sendo usado pela home do blog.

Podemos começar o <strong>single.php</strong> copiando todo o <strong>index.php</strong>, que ele já vai funcionar:

<div data-gist-id="3030780" data-gist-show-loading="false"></div>

Porém, se for pra deixar ele exatamente igual ao index.php não precisaríamos criar o single.php, é só deixar que o WordPress use o index.php  (ultima opção na hierarquia de templates).

Então vamos fazer algumas mudanças..

<h3>Listando as categorias e tags de um post</h3>
Vamos criar um rodapé no post, dentro dele vamos mostrar a lista das categorias e tags (separadas por vírgulas):

<div data-gist-id="3030816" data-gist-show-loading="false"></div>

Usamos agora duas novas funções:

<ul>
<li>[the_category( separador, parent, post_id )](http://codex.wordpress.org/Function_Reference/the_category) - Lista as categorias de um post</li>
<li>[the_tags( antes, separador, depois )](http://codex.wordpress.org/Function_Reference/the_tags) - Lista as tags de um post</li>
</ul>
Tirando a diferença nos parâmetros, ambas funções funcionam de forma bem parecida.

<h3>Exibindo o thumbnail principal de um post</h3>
Podemos também editar o cabeçalho do post e exibir seu thumbnail com a função [the_post_thumbnail( tamanho, atributos )](http://codex.wordpress.org/Function_Reference/the_post_thumbnail), assim:

<div data-gist-id="3030838" data-gist-show-loading="false"></div>

Percebam que não usei nenhum dos parâmetros da função, pois quero justamente o tamanho padrão (configurado por dentro do painel de controle) e manter os atributos (alt, title) originais.

Mas agora tem uma pegadinha! Você precisa <strong>habilitar os thumbnails</strong> (no seu tema) caso queira que seus posts e páginas possam ter uma <strong>imagem destacada</strong>, no caso o thumbnail que estamos exibindo ali em cima.

<h3>Habilitando thumbnails em um tema</h3>
Para habilitar os thumbnails é só criar na raiz do seu tema (ou editar se ele já existir) o arquivo <strong>functions.php</strong>, que é - basicamente - o arquivo central do seu tema, onde você define todo tipo de configuração ligada ao tema:

<div data-gist-id="3030858" data-gist-show-loading="false"></div>

Usamos a função [add_theme_support( feature )](http://codex.wordpress.org/Function_Reference/add_theme_support) que serve pra habilitar uma feature no seu tema, as features que podem ser habilitadas são:

<ul>
<li><strong>post-formats</strong> - Formatos diferentes de post, vide: [http://codex.wordpress.org/Post_Formats](http://codex.wordpress.org/Post_Formats)</li>
<li><strong>post-thumbnails</strong> - Thumbnails (imagens destacadas) para posts e páginas</li>
<li><strong>custom-background</strong> - Background customizável (imagem/cor) através do admin</li>
<li><strong>custom-header</strong> - Header customizável (imagem, logo, texto) através do admin</li>
<li><strong>automatic-feed-links</strong> - Links para feeds RSS e ATOM gerados automaticamente no [wp_head()](http://codex.wordpress.org/Function_Reference/wp_head), que eu não gosto de usar por alguns motivos</li>
</ul>
<h3>Finalizando</h3>
Agora nosso template já tem a estrutura básica (e recomendada) de um template pro WordPress, incluindo a listagem e a página interna do post.

Aceito sugestões sobre o que abordar na próxima parte! :)

Acompanhe o template que estou criando pro meu blog, com mais algumas coisinhas (que não coloquei aqui), no GitHub: [https://github.com/TiuTalk/blog.thiagobelem.net](https://github.com/TiuTalk/blog.thiagobelem.net)

Gostou? Então comenta, compartilha e recomenda! <img src="/wp-includes/images/smilies/icon_smile.gif" alt=":)" />

Abraços e até a próxima!

