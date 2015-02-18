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
<p>Hoje vou falar sobre outra forma de "IE PNGFix" (Exibição de PNGs transparentes no Internet Explorer 6 ou inferior)...</p>
<p>Existe um <em>plugin</em> de jQuery chamado <strong>jQuery PNG Fix</strong>, pra quem quiser ver/testar um exemplo dele, é só ir no <a href="http://jquery.andreaseberhard.de/pngFix/" target="_blank">site do plugin</a>.</p>
<p>A vantagem de usar esse script é que ele funciona com IE 5.5, 6 e 7, não atrapalha o uso de outros scripts (unobtrusive) e funciona com imagens linkadas, fundos em CSS e mantém todos os atributos e propriedades (alt, title, class, style e etc.) das imagens.</p>
<p>Para usá-lo no seu site, é muito simples... Primeiro insira o <a href="http://jquery.andreaseberhard.de/pngFix/jquery.pngFix.js" target="_blank">script do pngFix</a> dentro do <head> do seu site:</p>
<p>[code language="html"]<head><br />
  <title>Meu Site</title><br />
  <script language="JavaScript" src="jquery.js" type="text/javascript"></script><br />
  <script language="JavaScript" src="jquery.pngFix.js" type="text/javascript"></script><br />
</head>[/code]</p>
<p>E depois é só inserir um bloco de jQuery que fará a correção em todos os elementos do seu site:</p>
<p>[code language="html"]<head><br />
  <title>Meu Site</title><br />
  <script language="JavaScript" src="jquery.js" type="text/javascript"></script><br />
  <script language="JavaScript" src="jquery.pngFix.js" type="text/javascript"></script></p>
<p>  <script language="JavaScript" type="text/javascript"><br />
	$(document).ready(function(){<br />
		$(document).pngFix(); // "Executa" o pngFix em todos os elementos do site<br />
	});<br />
  </script><br />
</head>[/code]</p>
<p>Pronto.. Já está tudo funcionando perfeitamente! :)</p>
