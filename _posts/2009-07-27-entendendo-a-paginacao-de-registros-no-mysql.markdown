---
layout: post
title: Entendendo a paginação de registros no MySQL
excerpt: Aprenda como funciona a paginação de resultados do MySQL e descubra como
  é fácil criar o seu próprio sistema de paginação independente da linguagem de programação
  que você use.

date: '2009-07-27 04:02:49 -0300'
categories:
- PHP
- MySQL
- Artigos
tags:
- PHP
- MySQL
- Paginação
---
Hoje resolvi fazer um artigo rápido que explica como funciona a paginação de resultados no MySQL.

Não vim mostrar nenhum script pronto... Vou apenas falar como é a "lógica de negócio" da paginação para que fique mais fácil para vocês entenderem e poderem desenvolver seus próprios sistemas. :)

Suponhamos que você tenha uma tabela de notícias e quer colocar uma paginação na listagem de notícias.

Normalmente a sua consulta seria assim:

<div data-gist-id="ea4707761cbac264293c" data-gist-show-loading="false"></div>

Agora vamos definir a regra da sua paginação.. Vamos exibir apenas 15 resultados "por página", então a consulta para pegar a primeira página de resultados seria assim:

<div data-gist-id="fee66402f75ee6037c71" data-gist-show-loading="false"></div>

Perceba que adicionamos um <strong style="background: gray; color: white">LIMIT 0, 15</strong> no final, isso significa que começaremos na <strong>posição 0</strong> (que é antes do 1° registro) e apanharemos os próximos 15 registros... Sabendo disso nós podemos criar a consulta (<em>query</em>) para a segunda e terceira páginas:

<div data-gist-id="b6340288edd46529a7d8" data-gist-show-loading="false"></div>


<div data-gist-id="f2ae7ff767303588649d" data-gist-show-loading="false"></div>

O primeiro valor do LIMIT pode ser definido por <strong style="background: gray; color: white">(Página - 1) x Registros_por_página</strong>... Se você quer exibir 23 registros por página e está exibindo a 5ª página então o você terá um <strong>LIMIT 92, 23</strong> no fim da sua <em>query</em>.

O melhor de tudo é que você não precisa se preocupar com o seu número de registros na tabela... Se você só tem 15 registros e fez uma consulta com <strong>LIMIT 10, 20</strong> ele vai pegar apenas os últimos 5 registros e nada vai dar errado.

:)

