---
layout: post
status: publish
published: true
title: Criando um tema para WordPress – Parte 3
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Na terceira parte da nossa sequencia de posts, onde documento a criação de
  um novo tema de WordPress pro meu blog, iremos ver as funções usadas para exibir
  dados do post e como funciona o The Loop, a estrutura principal do WordPress.
wordpress_id: 1913
wordpress_url: http://blog.thiagobelem.net/?p=1913
date: '2011-12-23 12:59:09 -0200'
date_gmt: '2011-12-23 14:59:09 -0200'
categories:
- Desenvolvimento
- PHP
- HTML
- WordPress
- Artigos
tags:
- PHP
- WordPress
- Desenvolvimento
- tema
- theme
- wp
- the loop
- post
---
<p>No <a href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-2/" title="Criando um tema para WordPress – Parte 2" target="_blank">último artigo</a> nós começamos a criar o HTML da página inicial, e agora vamos continuar o trabalho criando o topo do site e listando os posts.</p>
<h3>Deixando o título mais... dinâmico</h3>
<p>Uma boa prática é mostrar o título do post dentro da tag <strong>title</strong>, no <strong>head</strong> do site... Pra isso vamos usar a função <a href="http://codex.wordpress.org/Function_Reference/wp_title" target="_blank">wp_title()</a> e fazer a seguinte mudança:</p>
<p>[gist id=1514337]</p>
<p>Com isso, sempre que estivermos dentro de um post ou página, o <strong>título do post</strong> - <a href="http://codex.wordpress.org/Function_Reference/wp_title" target="_blank">wp_title()</a> virá antes do <strong>título do site</strong>  - <a href="http://codex.wordpress.org/Function_Reference/bloginfo" target="_blank">bloginfo()</a>, separado por um hífen. :)</p>
<h3>Montando o topo do site</h3>
<p>Não vou fazer nada mirabolante nem inserir um menu ainda, vamos só colocar o título e o subtítulo do site... Além disso, usaremos a função <a href="http://codex.wordpress.org/Function_Reference/body_class" target="_blank">body_class()</a> na tab body para inserir algumas classes que o WordPress gera automaticamente.</p>
<p>[gist id=1514349]</p>
<p>Se você estiver acessando a home do blog, a função <a href="http://codex.wordpress.org/Function_Reference/body_class" target="_blank">body_class()</a> irá gerar as seguintes classes: <code>&lt;body class="home blog"&gt;</code>, mas se você estiver visualizando um post ela trará muito mais informações como o ID do post ou nome da categoria: <code>&lt;body class="page page-id-2 page-template page-template-default logged-in"&gt;</code>. Você pode usar essas classes para estilizar (CSS) as diferentes áreas/páginas/posts do seu blog.</p>
<h3>Listando os posts</h3>
<p>Para listar os posts usaremos as seguintes funções que são chamadas de "<a href="http://codex.wordpress.org/The_Loop" target="_blank">The Loop</a>":</p>
<ul>
<li><a href="http://codex.wordpress.org/The_Loop" target="_blank">have_posts()</a> - Determina se existem posts à serem exibidos</li>
<li><a href="http://codex.wordpress.org/The_Loop" target="_blank">the_post()</a> - Carrega um post da lista à ser exibida</li>
</ul>
<p>A forma mais minimalista do <strong>The Loop</strong> funciona de forma bem simples:</p>
<p>[gist id=1514368]</p>
<p>Então.. enquanto (while) existirem posts (have_posts) à serem exibidos, carrega o post e exibe as informações do mesmo.</p>
<h3>Exibindo dados do post</h3>
<p>Agora vamos começar a mostrar os dados do post, para isso usaremos as seguintes funções:</p>
<ul>
<li><a href="http://codex.wordpress.org/Function_Reference/the_ID" target="_blank">the_ID()</a> - Imprime o ID do post</li>
<li><a href="http://codex.wordpress.org/Function_Reference/post_class" target="_blank">post_class()</a> - Imprime classes do post, bem parecido com o <a href="http://codex.wordpress.org/Function_Reference/body_class" target="_blank">body_class()</a></li>
<li><a href="http://codex.wordpress.org/Function_Reference/the_permalink" target="_blank">the_permalink()</a> - Imprime o permalink (url completa) do post</li>
<li><a href="http://codex.wordpress.org/Function_Reference/the_title" target="_blank">the_title()</a> - Imprime o título do post</li>
<li><a href="http://codex.wordpress.org/Function_Reference/the_time" target="_blank">the_time()</a> - Imprime a data/hora do post</li>
<li><a href="http://codex.wordpress.org/Function_Reference/the_content" target="_blank">the_content()</a> - Imprime o conteúdo (texto) do post</li>
</ul>
<p><strong>Atenção:</strong> Essas funções só vão funcionar corretamente se você carregar o post antes, com o <a href="http://codex.wordpress.org/The_Loop" target="_blank">the_post()</a>, por isso usamos isso tudo dentro do <a href="http://codex.wordpress.org/The_Loop" target="_blank">The Loop</a>.</p>
<p>Vamos juntar tudo e exibir todos os dados do post, <em>like a boss</em>:</p>
<p>[gist id=1514391]</p>
<p>O resultado do código acima vai ser mais ou menos esse:</p>
<p>[gist id=1514395]</p>
<h3>Finalizando</h3>
<p>Nosso blog está tomando forma, na próxima parte iremos começar a falar do <strong>single.php</strong> (o template pra mostrar um post) e - talvez - vamos ver sobre menus dinâmicos.</p>
<p>Acompanhe o template que estou criando pro meu blog, com mais algumas coisinhas (que não coloco aqui), no GitHub: <a href="https://github.com/TiuTalk/blog.thiagobelem.net" target="_blank">https://github.com/TiuTalk/blog.thiagobelem.net</a></p>
<p>Gostou? Então comenta, compartilha e recomenda! :)</p>
<p>Abraços e até a próxima!</p>