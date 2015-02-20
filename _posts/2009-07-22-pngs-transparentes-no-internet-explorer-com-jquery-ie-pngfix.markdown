---
layout: post
title: PNG's transparentes no Internet Explorer com jQuery (IE PNGFix)
excerpt: Aprenda a instalar o <strong>jQuery pngFix</strong> no seu site e deixe todos
  os PNGs com fundo transparente funcionando em todos os navegadores desde o IE 5.5
  usando apenas três linhas de código! :D

date: '2009-07-22 01:26:15 -0300'
categories:
- CSS
- Javascript
- Tutoriais
tags:
- HTML
- Javascript
- Internet Explorer
- IE
- PNG Fix
---
Hoje vou falar sobre outra forma de "IE PNGFix" (Exibição de PNGs transparentes no Internet Explorer 6 ou inferior)...

Existe um <em>plugin</em> de jQuery chamado <strong>jQuery PNG Fix</strong>, pra quem quiser ver/testar um exemplo dele, é só ir no [site do plugin](http://jquery.andreaseberhard.de/pngFix/).

A vantagem de usar esse script é que ele funciona com IE 5.5, 6 e 7, não atrapalha o uso de outros scripts (unobtrusive) e funciona com imagens linkadas, fundos em CSS e mantém todos os atributos e propriedades (alt, title, class, style e etc.) das imagens.

Para usá-lo no seu site, é muito simples... Primeiro insira o [script do pngFix](http://jquery.andreaseberhard.de/pngFix/jquery.pngFix.js) dentro do <head> do seu site:


<div data-gist-id="a94cda3d515496a7c782" data-gist-show-loading="false"></div>

E depois é só inserir um bloco de jQuery que fará a correção em todos os elementos do seu site:


<div data-gist-id="f302c846c41505f53b77" data-gist-show-loading="false"></div>

Pronto.. Já está tudo funcionando perfeitamente! :)

