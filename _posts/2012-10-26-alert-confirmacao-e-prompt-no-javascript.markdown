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
<p>O alert é uma das mais simples caixas de diálogo, com uma aparência simples e intuitiva elas são muito usadas em validações de formulários e/ou bloqueio de ações do browser.</p>
<p>Sua principal função é mostrar ao usuário uma mensagem e um botão de confirmação de que o usuário tenha visto a mensagem. Para chamar essa função, basta utilizarmos o código <strong>alert()</strong>, que receberá uma string (mensagem que será exibida ao usuário).</p>
<p>[gist id=3959649]</p>
<h3>Confirmações</h3>
<p>A função de confirmação é um pouco diferente da função <a href="http://www.linhadecodigo.com.br/artigo/3593/alert-em-javascript.aspx" target="_blank">alert em Javascript</a>, dessa vez são exibidos dois botões, um de OK e outro de CANCELAR, separados por valores true(verdadeiro) e false(falso).</p>
<p>[gist id=3959658]</p>
<h3>Prompt</h3>
<p>O prompt é um pouco diferente do alert() e do confirm(), pois ele necessita que o usuário insira algum valor, ou seja, precisa de uma interação direta do usuário para que ele funcione.</p>
<p>Para chamarmos a função utilizamos o prompt(), o qual irá receber uma string(mensagem) que será exibida, normalmente em forma de pergunta, ao usuário.</p>
<p>[gist id=3959665]</p>
<p>Você pode ver o código acima, funcionando aqui: <a href="http://jsfiddle.net/58VBG/embedded/result/" target="_blank">http://jsfiddle.net/58VBG/embedded/result/</a></p>
<p style="text-align: center;"><a title="Alert em Javascript" href="http://www.linhadecodigo.com.br/artigo/3593/alert-em-javascript.aspx" target="_blank"><img class="aligncenter" style="box-shadow: none; margin-bottom: 40px;" title="Artigo original - Linha de Código" alt="" src="http://www.linhadecodigo.com.br/img/logolc.png" width="261" height="47" /></a></p>
