---
layout: post
status: publish
published: true
title: Criando um tema para WordPress – Parte 5
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 2147
wordpress_url: http://blog.thiagobelem.net/?p=2147
date: '2012-07-02 00:48:02 -0300'
date_gmt: '2012-07-02 03:48:02 -0300'
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
<p>Hoje vamos continuar com a parte 5 da série de posts onde mostro o passo-a-passo da criação de um tema pra WordPress.</p>
<p>Se você ainda não está acompanhando, veja as outras partes dessa sequência de artigos:</p>
<ul>
<li><a title="Criando um tema para WordPress – Parte 1" href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress/" target="_blank">Parte 1 - Estrutura inicial do tema</a></li>
<li><a title="Criando um tema para WordPress – Parte 2" href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-2/" target="_blank">Parte 2 - HTML5, Funções básicas do WordPress, Feed RSS e Atom</a></li>
<li><a title="Criando um tema para WordPress – Parte 3" href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-3/" target="_blank">Parte 3 - Topo e listagem de posts</a></li>
<li><a title="Criando um tema para WordPress – Parte 4" href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-4/">Parte 4 - Header, Footer e Sidebar</a></li>
</ul>
<h3>Página interna do post (single.php)</h3>
<p>Eu não sei exatamente por que chamo esse tipo de página de "interna do post" ou "interna da notícia", mas essa é a página que mostra todo o conteúdo do post em questão.</p>
<p>Segundo a <a href="http://codex.wordpress.org/Template_Hierarchy">hierarquia de templates</a> do WordPress,  ele irá mostrar o template criado nos seguintes arquivos (sempre o primeiro que ele achar):</p>
<ol>
<li><strong>single-<span style="color: #999999;">{post_type}</span>.php</strong> - Se o post que está sendo acessado é do post-type "<strong>produto</strong>", o WP iria procurar por um <strong>single-produto.php</strong></li>
<li><strong>single.php</strong></li>
<li><strong>index.php</strong></li>
</ol>
<p>Então, como nós queremos criar uma single para os posts normais, vamos criar o <strong>single.php</strong>, já que o <strong>index.php</strong> está sendo usado pela home do blog.</p>
<p>Podemos começar o <strong>single.php</strong> copiando todo o <strong>index.php</strong>, que ele já vai funcionar:</p>
<p>[gist id=3030780]</p>
<p>Porém, se for pra deixar ele exatamente igual ao index.php não precisaríamos criar o single.php, é só deixar que o WordPress use o index.php  (ultima opção na hierarquia de templates).</p>
<p>Então vamos fazer algumas mudanças..</p>
<h3>Listando as categorias e tags de um post</h3>
<p>Vamos criar um rodapé no post, dentro dele vamos mostrar a lista das categorias e tags (separadas por vírgulas):</p>
<p>[gist id=3030816]</p>
<p>Usamos agora duas novas funções:</p>
<ul>
<li><a href="http://codex.wordpress.org/Function_Reference/the_category">the_category( separador, parent, post_id )</a> - Lista as categorias de um post</li>
<li><a href="http://codex.wordpress.org/Function_Reference/the_tags">the_tags( antes, separador, depois )</a> - Lista as tags de um post</li>
</ul>
<p>Tirando a diferença nos parâmetros, ambas funções funcionam de forma bem parecida.</p>
<h3>Exibindo o thumbnail principal de um post</h3>
<p>Podemos também editar o cabeçalho do post e exibir seu thumbnail com a função <a href="http://codex.wordpress.org/Function_Reference/the_post_thumbnail">the_post_thumbnail( tamanho, atributos )</a>, assim:</p>
<p>[gist id=3030838]</p>
<p>Percebam que não usei nenhum dos parâmetros da função, pois quero justamente o tamanho padrão (configurado por dentro do painel de controle) e manter os atributos (alt, title) originais.</p>
<p>Mas agora tem uma pegadinha! Você precisa <strong>habilitar os thumbnails</strong> (no seu tema) caso queira que seus posts e páginas possam ter uma <strong>imagem destacada</strong>, no caso o thumbnail que estamos exibindo ali em cima.</p>
<h3>Habilitando thumbnails em um tema</h3>
<p>Para habilitar os thumbnails é só criar na raiz do seu tema (ou editar se ele já existir) o arquivo <strong>functions.php</strong>, que é - basicamente - o arquivo central do seu tema, onde você define todo tipo de configuração ligada ao tema:</p>
<p>[gist id=3030858]</p>
<p>Usamos a função <a href="http://codex.wordpress.org/Function_Reference/add_theme_support">add_theme_support( feature )</a> que serve pra habilitar uma feature no seu tema, as features que podem ser habilitadas são:</p>
<ul>
<li><strong>post-formats</strong> - Formatos diferentes de post, vide: <a href="http://codex.wordpress.org/Post_Formats">http://codex.wordpress.org/Post_Formats</a></li>
<li><strong>post-thumbnails</strong> - Thumbnails (imagens destacadas) para posts e páginas</li>
<li><strong>custom-background</strong> - Background customizável (imagem/cor) através do admin</li>
<li><strong>custom-header</strong> - Header customizável (imagem, logo, texto) através do admin</li>
<li><strong>automatic-feed-links</strong> - Links para feeds RSS e ATOM gerados automaticamente no <a href="http://codex.wordpress.org/Function_Reference/wp_head">wp_head()</a>, que eu não gosto de usar por alguns motivos</li>
</ul>
<h3>Finalizando</h3>
<p>Agora nosso template já tem a estrutura básica (e recomendada) de um template pro WordPress, incluindo a listagem e a página interna do post.</p>
<p>Aceito sugestões sobre o que abordar na próxima parte! :)</p>
<p>Acompanhe o template que estou criando pro meu blog, com mais algumas coisinhas (que não coloquei aqui), no GitHub: <a href="https://github.com/TiuTalk/blog.thiagobelem.net" target="_blank">https://github.com/TiuTalk/blog.thiagobelem.net</a></p>
<p>Gostou? Então comenta, compartilha e recomenda! <img src="http://blog.thiagobelem.net/wp-includes/images/smilies/icon_smile.gif" alt=":)" /></p>
<p>Abraços e até a próxima!</p>
