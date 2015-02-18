---
layout: post
status: publish
published: true
title: Criando um tema para WordPress – Parte 2
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Na segunda parte começamos a utilizar algumas funções do WordPress para alimentar
  o nosso HTML com informações sobre o blog, feed RSS e etc.
wordpress_id: 1901
wordpress_url: http://blog.thiagobelem.net/?p=1901
date: '2011-12-22 10:04:21 -0200'
date_gmt: '2011-12-22 12:04:21 -0200'
categories:
- Desenvolvimento
- PHP
- HTML
- WordPress
- Artigos
tags:
- PHP
- HTML
- WordPress
- Desenvolvimento
- tema
- theme
- wp
- template
---
<p>Na <a href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress/" target="_blank">Parte 1</a> começamos a criar o tema, e agora nós vamos começar a criar o HTML da home do novo tema do meu blog. :)</p>
<p>Por enquanto não tenho nenhum layout à seguir, então vou tentar criar o "HTML ideal" com o máximo de semântica possível e vamos ver o que vai sair disso...</p>
<h3>Passo 3 - Estrutura inicial de uma página HTML5</h3>
<p>Pra começar, abrimos o <code>index.php</code> que até então está vazio e adicionamos a estrutura básica do HTML5:</p>
<p>[gist id=1507375]</p>
<p>Como vocês podem ver, não há nada demais aí.. vamos começar a usar algumas funções do WordPress pra facilitar a nossa vida.</p>
<h3>Passo 4 - Funções básicas de tema no WordPress</h3>
<p>Agora iremos usar as seguintes funções:</p>
<ul>
<li><a href="http://codex.wordpress.org/Function_Reference/language_attributes" target="_blank">language_attributes()</a> - Exibe os atributos de idioma para o elemento <strong>html</strong></li>
<li><a href="http://codex.wordpress.org/Function_Reference/bloginfo" target="_blank">bloginfo()</a> - Exibe informações sobre o blog, como título, descrição, url e etc.</li>
</ul>
<p>Aplicando essas funções ao nosso <code>index.php</code>, vamos ficar com o seguinte:</p>
<p>[gist id=1507389]</p>
<p>Aproveitei pra usar a função <a href="http://codex.wordpress.org/Function_Reference/bloginfo" target="_blank">bloginfo()</a> pra pegar a url completa do tema e inserir o nosso estilo.css (que eu ainda nem criei, mas isso não é um problema)...</p>
<p>Caso você use a <a href="http://codex.wordpress.org/Function_Reference/bloginfo" target="_blank">bloginfo()</a> sem passar nenhum parâmetro, ela irá retornar o título do blog, que é que fizemos dentro da tag <strong>title</strong>.</p>
<p>Como resultado, acessando o blog teremos o seguinte código fonte:</p>
<p>[gist id=1507401]</p>
<h3>Passo 5 - Feed RSS e Atom</h3>
<p>Já que estamos criando um tema para blog, nada melhor do que aproveitar que estamos editando o elemento <strong>head</strong> e adicionar os links dos mesmos:</p>
<p>[gist id=1507445]</p>
<h3>Finalizando</h3>
<p>Espero que tenham gostado... no <a href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-3/" title="Criando um tema para WordPress – Parte 3" target="_blank">próximo artigo</a> iremos começar a montar o HTML do topo e do conteúdo da página, onde iremos listar os posts. :)</p>
<p>Gostou? Então comente! Caso contrário eu posso ficar desmotivado e a terceira parte não vai sair...</p>
