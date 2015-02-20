---
layout: post
title: Login automático em PHP usando cURL
excerpt: Aprenda a fazer um login automático em outros sites usando a biblioteca cURL
  e ter acesso a dados restritos de forma dinamica.

date: '2009-05-04 02:18:17 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Essa não é uma tarefa muito comum... Mas as vezes precisamos fazer um login automático (usando PHP) em outro site para pegar algumas informações dinamicamente.

Você pode fazer essa "façanha" usando uma biblioteca do PHP chamada cURL ([veja mais sobre o cURL aqui](http://br2.php.net/manual/pt_BR/book.curl.php)), veja um exemplo devidamente comentado e explicado:


<div data-gist-id="81a32e8600a4eeaaf270" data-gist-show-loading="false"></div>

No fim da execução deste script você terá duas variáveis: a <span style="color: #008080;"><strong>$store</strong></span> contendo o HTML da página resultado (depois do submit do login) e a variável <span style="color: #008080;"><strong>$content</strong></span>, contendo o HTML da página chamada na segunda requisição.

O uso dele é bem simples, vale a pena tentar.

Há também, pra quem quiser, o site (não muito bonito) do cURL: [http://curl.haxx.se/](http://curl.haxx.se/)

Se alguém tiver alguma dúvida, é só falar!

Espero que tenham gostado :)

