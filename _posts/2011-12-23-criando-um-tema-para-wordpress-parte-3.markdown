---
layout: post
title: Criando um tema para WordPress – Parte 3
excerpt: Na terceira parte da nossa sequencia de posts, onde documento a criação de
  um novo tema de WordPress pro meu blog, iremos ver as funções usadas para exibir
  dados do post e como funciona o The Loop, a estrutura principal do WordPress.

date: '2011-12-23 12:59:09 -0200'
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
No [último artigo](/criando-um-tema-para-wordpress-parte-2) nós começamos a criar o HTML da página inicial, e agora vamos continuar o trabalho criando o topo do site e listando os posts.

<h3>Deixando o título mais... dinâmico</h3>
Uma boa prática é mostrar o título do post dentro da tag <strong>title</strong>, no <strong>head</strong> do site... Pra isso vamos usar a função [wp_title()](http://codex.wordpress.org/Function_Reference/wp_title) e fazer a seguinte mudança:

<div data-gist-id="1514337" data-gist-show-loading="false"></div>

Com isso, sempre que estivermos dentro de um post ou página, o <strong>título do post</strong> - [bloginfo()](http://codex.wordpress.org/Function_Reference/bloginfo), separado por um hífen. :)

<h3>Montando o topo do site</h3>
Não vou fazer nada mirabolante nem inserir um menu ainda, vamos só colocar o título e o subtítulo do site... Além disso, usaremos a função [body_class()](http://codex.wordpress.org/Function_Reference/body_class) na tab body para inserir algumas classes que o WordPress gera automaticamente.

<div data-gist-id="1514349" data-gist-show-loading="false"></div>

Se você estiver acessando a home do blog, a função [body_class()](http://codex.wordpress.org/Function_Reference/body_class) irá gerar as seguintes classes: <code><body class="home blog"></code>, mas se você estiver visualizando um post ela trará muito mais informações como o ID do post ou nome da categoria: <code><body class="page page-id-2 page-template page-template-default logged-in"></code>. Você pode usar essas classes para estilizar (CSS) as diferentes áreas/páginas/posts do seu blog.

<h3>Listando os posts</h3>
Para listar os posts usaremos as seguintes funções que são chamadas de "[The Loop](http://codex.wordpress.org/The_Loop)":

<ul>
<li>[have_posts()](http://codex.wordpress.org/The_Loop) - Determina se existem posts à serem exibidos</li>
<li>[the_post()](http://codex.wordpress.org/The_Loop) - Carrega um post da lista à ser exibida</li>
</ul>
A forma mais minimalista do <strong>The Loop</strong> funciona de forma bem simples:

<div data-gist-id="1514368" data-gist-show-loading="false"></div>

Então.. enquanto (while) existirem posts (have_posts) à serem exibidos, carrega o post e exibe as informações do mesmo.

<h3>Exibindo dados do post</h3>
Agora vamos começar a mostrar os dados do post, para isso usaremos as seguintes funções:

<ul>
<li>[the_ID()](http://codex.wordpress.org/Function_Reference/the_ID) - Imprime o ID do post</li>
<li>[body_class()](http://codex.wordpress.org/Function_Reference/body_class)</li>
<li>[the_permalink()](http://codex.wordpress.org/Function_Reference/the_permalink) - Imprime o permalink (url completa) do post</li>
<li>[the_title()](http://codex.wordpress.org/Function_Reference/the_title) - Imprime o título do post</li>
<li>[the_time()](http://codex.wordpress.org/Function_Reference/the_time) - Imprime a data/hora do post</li>
<li>[the_content()](http://codex.wordpress.org/Function_Reference/the_content) - Imprime o conteúdo (texto) do post</li>
</ul>
<strong>Atenção:</strong> Essas funções só vão funcionar corretamente se você carregar o post antes, com o [The Loop](http://codex.wordpress.org/The_Loop).

Vamos juntar tudo e exibir todos os dados do post, <em>like a boss</em>:

<div data-gist-id="1514391" data-gist-show-loading="false"></div>

O resultado do código acima vai ser mais ou menos esse:

<div data-gist-id="1514395" data-gist-show-loading="false"></div>

<h3>Finalizando</h3>
Nosso blog está tomando forma, na próxima parte iremos começar a falar do <strong>single.php</strong> (o template pra mostrar um post) e - talvez - vamos ver sobre menus dinâmicos.

Acompanhe o template que estou criando pro meu blog, com mais algumas coisinhas (que não coloco aqui), no GitHub: [https://github.com/TiuTalk/blog.thiagobelem.net](https://github.com/TiuTalk/blog.thiagobelem.net)

Gostou? Então comenta, compartilha e recomenda! :)

Abraços e até a próxima!

