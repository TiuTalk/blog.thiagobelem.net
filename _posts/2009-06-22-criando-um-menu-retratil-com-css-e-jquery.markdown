---
layout: post
title: Criando um menu retrátil com CSS e jQuery
excerpt: Aprenda a fazer um menu que se expande/retrai usando apenas (X)HTML, CSS
  e jQuery. Código do efeito em si tem apenas 11 linhas! Crie menus animados usando
  no estilo expand / collapse.

date: '2009-06-22 09:06:00 -0300'
categories:
- HTML
- CSS
- jQuery
- Tutoriais
tags:
- jQuery
- HTML
- CSS
- Javascript
- Menu Retrátil
---
<p>Hoje vou ensinar como criar um menu usando listas (ol) e que tem o efeito de expandir/retrair feito com jQuery.</p>
<p>O efeito em sí é bem simples e fácil de ser modificado... O meu foi feito usando HTML puro e uma folha de estilos (CSS) pequena. No final do tutorial você vai encontrar o link pra download do arquivo .rar com o exemplo dessa aula.</p>
<p><a href="/exemplo3" target="_blank">Veja aqui um exemplo de como vai ficar o menu.</a></p>
<p>Bom... vamos lá!</p>
<h3>Código (X)HTML do menu</h3>

[code lang="html"]<ul id="menu">
	<li class="header">Menu</li>
	<li><a href="#" title="">Página inicial</a></li>
	<li><a href="#" title="">Notícias</a></li>
	<li class="parent"><a href="#" title="">Produtos</a>
		<ul class="sub-menu">
			<li><a href="#" title="">Camisetas</a></li>
			<li><a href="#" title="">Calças</a></li>
			<li><a href="#" title="">Livros</a></li>
		</ul>
	</li>
	<li><a href="#" title="">Quem somos nós</a></li>
	<li><a href="#" title="">Contato</a></li>
</ul>[/code]

<p>Vejam que o sub-menu (que irá aparecer) fica dentro do <li> e fora do <a>.</p>
<h3>Código CSS do menu</h3>

[code lang="css"]* {
	margin: 0px;
	padding: 0px;
}</p>
<p>body {
	font-family: Verdana, Arial, sans-serif;
	font-size: 11px;
	margin: 20px;
}</p>
<p>ul {
	list-style: none;
}</p>
<p>ul#menu {
	width: 170px;
	border: 1px solid silver;
	margin-top: 20px;
}</p>
<p>ul#menu li {
	color: black;
	line-height: 19px;
	background: #F4F4F4;
}</p>
<p>ul#menu li.header {
	background: #DFDFDF;
	font-weight: bolder;
	padding: 0px 3px;
	font-size: 12px;
}</p>
<p>ul#menu li a {
	color: black;
	text-decoration: none;
	display: block;
	padding: 0px 3px;
	outline: none;
}</p>
<p>ul#menu li.parent > a {
	background: transparent url('../img/down.gif') right center no-repeat;
}</p>
<p>ul#menu li.aberto > a {
	background: transparent url('../img/up.gif') right center no-repeat;
}</p>
<p>ul#menu li a:hover {
	background-color: #EAEEFF;
}</p>
<p>ul#menu li ul.sub-menu {
  	display: none;
}</p>
<p>ul#menu li ul.sub-menu li a {
	padding-left: 15px;
	color: maroon;
}[/code]

<h3>Bloco de código do efeito (jQuery)</h3>

[code lang="javascript"]$(function() {
	// Evento de clique do elemento: ul#menu li.parent > a
	$('ul#menu li.parent > a').click(function() {
		// Expande ou retrai o elemento ul.sub-menu dentro do elemento pai (ul#menu li.parent)
		$('ul.sub-menu', $(this).parent()).slideToggle('fast', function() {
			// Depois de expandir ou retrair, troca a classe 'aberto' do <a> clicado
			$(this).parent().toggleClass('aberto');
		});
		return false;
	});
});[/code]

<p>--</p>
<p>É só juntar todas as peças (como foi feito no exemplo) e o seu menu irá funcionar que é uma maravilha! :D</p>
<p>O código do efeito pode parecer um pouco complicado pra quem tá começando com jQuery, mas é só ler os comentários e procurar um pouco sobre cada função (<strong>slideToggle</strong>, <strong>toggleClass</strong>, <strong>click</strong>) na documentação que, com os exemplos de lá vai ficar tudo claro.</p>
<p><a href="/arquivos/2009/06/menu.rar" target="_blank">Faça aqui o download do arquivo .rar com os arquivos dessa aula.</a></p>
<p>Espero que tenham gostado, qualquer dúvida é só falar.</p>
