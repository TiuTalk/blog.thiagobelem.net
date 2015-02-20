---
layout: post
title: Criando um tema para WordPress – Parte 2
excerpt: Na segunda parte começamos a utilizar algumas funções do WordPress para alimentar
  o nosso HTML com informações sobre o blog, feed RSS e etc.

date: '2011-12-22 10:04:21 -0200'
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
Na [Parte 1](/criando-um-tema-para-wordpress) começamos a criar o tema, e agora nós vamos começar a criar o HTML da home do novo tema do meu blog. :)

Por enquanto não tenho nenhum layout à seguir, então vou tentar criar o "HTML ideal" com o máximo de semântica possível e vamos ver o que vai sair disso...

<h3>Passo 3 - Estrutura inicial de uma página HTML5</h3>
Pra começar, abrimos o <code>index.php</code> que até então está vazio e adicionamos a estrutura básica do HTML5:

<div data-gist-id="1507375" data-gist-show-loading="false"></div>

Como vocês podem ver, não há nada demais aí.. vamos começar a usar algumas funções do WordPress pra facilitar a nossa vida.

<h3>Passo 4 - Funções básicas de tema no WordPress</h3>
Agora iremos usar as seguintes funções:


* [language_attributes()](http://codex.wordpress.org/Function_Reference/language_attributes) - Exibe os atributos de idioma para o elemento <strong>html</strong>
* [bloginfo()](http://codex.wordpress.org/Function_Reference/bloginfo) - Exibe informações sobre o blog, como título, descrição, url e etc.

Aplicando essas funções ao nosso <code>index.php</code>, vamos ficar com o seguinte:

<div data-gist-id="1507389" data-gist-show-loading="false"></div>

Aproveitei pra usar a função [bloginfo()](http://codex.wordpress.org/Function_Reference/bloginfo) pra pegar a url completa do tema e inserir o nosso estilo.css (que eu ainda nem criei, mas isso não é um problema)...

Caso você use a [bloginfo()](http://codex.wordpress.org/Function_Reference/bloginfo) sem passar nenhum parâmetro, ela irá retornar o título do blog, que é que fizemos dentro da tag <strong>title</strong>.

Como resultado, acessando o blog teremos o seguinte código fonte:

<div data-gist-id="1507401" data-gist-show-loading="false"></div>

<h3>Passo 5 - Feed RSS e Atom</h3>
Já que estamos criando um tema para blog, nada melhor do que aproveitar que estamos editando o elemento <strong>head</strong> e adicionar os links dos mesmos:

<div data-gist-id="1507445" data-gist-show-loading="false"></div>

<h3>Finalizando</h3>
Espero que tenham gostado... no [próximo artigo](/criando-um-tema-para-wordpress-parte-3) iremos começar a montar o HTML do topo e do conteúdo da página, onde iremos listar os posts. :)

Gostou? Então comente! Caso contrário eu posso ficar desmotivado e a terceira parte não vai sair...

