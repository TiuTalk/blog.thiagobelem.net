---
layout: post
title: Alert, confirmação e prompt no Javascript
excerpt: Neste artigo iremos aprender os diferentes tipos de alert em Javascript e
  conferir como inserir eles em nosso código, deixando nosso sistema/site com uma
  interação maior com o usuário.

date: '2012-10-26 15:50:39 -0200'
categories:
- Desenvolvimento
- Javascript
- Artigos
- Publieditorial
tags:
- alert
- confirm
- prompt
---
O alert é uma das mais simples caixas de diálogo, com uma aparência simples e intuitiva elas são muito usadas em validações de formulários e/ou bloqueio de ações do browser.

Sua principal função é mostrar ao usuário uma mensagem e um botão de confirmação de que o usuário tenha visto a mensagem. Para chamar essa função, basta utilizarmos o código <strong>alert()</strong>, que receberá uma string (mensagem que será exibida ao usuário).

<div data-gist-id="3959649" data-gist-show-loading="false"></div>

### Confirmações
A função de confirmação é um pouco diferente da função [alert em Javascript](http://www.linhadecodigo.com.br/artigo/3593/alert-em-javascript.aspx), dessa vez são exibidos dois botões, um de OK e outro de CANCELAR, separados por valores true(verdadeiro) e false(falso).

<div data-gist-id="3959658" data-gist-show-loading="false"></div>

### Prompt
O prompt é um pouco diferente do alert() e do confirm(), pois ele necessita que o usuário insira algum valor, ou seja, precisa de uma interação direta do usuário para que ele funcione.

Para chamarmos a função utilizamos o prompt(), o qual irá receber uma string(mensagem) que será exibida, normalmente em forma de pergunta, ao usuário.

<div data-gist-id="3959665" data-gist-show-loading="false"></div>

Você pode ver o código acima, funcionando aqui: [http://jsfiddle.net/58VBG/embedded/result/](http://jsfiddle.net/58VBG/embedded/result/)

<p style="text-align: center;">[](http://www.linhadecodigo.com.br/artigo/3593/alert-em-javascript.aspx)

