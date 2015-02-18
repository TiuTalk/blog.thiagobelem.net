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
<p><a href="http://blog.thiagobelem.net/exemplo3/" target="_blank">Veja aqui um exemplo de como vai ficar o menu.</a></p>
<p>Bom... vamos lá!</p>
<h3>Código (X)HTML do menu</h3>
<p>[code lang="html"]<ul id="menu"><br />
	<li class="header">Menu</li><br />
	<li><a href="#" title="">Página inicial</a></li><br />
	<li><a href="#" title="">Notícias</a></li><br />
	<li class="parent"><a href="#" title="">Produtos</a><br />
		<ul class="sub-menu"><br />
			<li><a href="#" title="">Camisetas</a></li><br />
			<li><a href="#" title="">Calças</a></li><br />
			<li><a href="#" title="">Livros</a></li><br />
		</ul><br />
	</li><br />
	<li><a href="#" title="">Quem somos nós</a></li><br />
	<li><a href="#" title="">Contato</a></li><br />
</ul>[/code]</p>
<p>Vejam que o sub-menu (que irá aparecer) fica dentro do <li> e fora do <a>.</p>
<h3>Código CSS do menu</h3>
<p>[code lang="css"]* {<br />
	margin: 0px;<br />
	padding: 0px;<br />
}</p>
<p>body {<br />
	font-family: Verdana, Arial, sans-serif;<br />
	font-size: 11px;<br />
	margin: 20px;<br />
}</p>
<p>ul {<br />
	list-style: none;<br />
}</p>
<p>ul#menu {<br />
	width: 170px;<br />
	border: 1px solid silver;<br />
	margin-top: 20px;<br />
}</p>
<p>ul#menu li {<br />
	color: black;<br />
	line-height: 19px;<br />
	background: #F4F4F4;<br />
}</p>
<p>ul#menu li.header {<br />
	background: #DFDFDF;<br />
	font-weight: bolder;<br />
	padding: 0px 3px;<br />
	font-size: 12px;<br />
}</p>
<p>ul#menu li a {<br />
	color: black;<br />
	text-decoration: none;<br />
	display: block;<br />
	padding: 0px 3px;<br />
	outline: none;<br />
}</p>
<p>ul#menu li.parent > a {<br />
	background: transparent url('../img/down.gif') right center no-repeat;<br />
}</p>
<p>ul#menu li.aberto > a {<br />
	background: transparent url('../img/up.gif') right center no-repeat;<br />
}</p>
<p>ul#menu li a:hover {<br />
	background-color: #EAEEFF;<br />
}</p>
<p>ul#menu li ul.sub-menu {<br />
  	display: none;<br />
}</p>
<p>ul#menu li ul.sub-menu li a {<br />
	padding-left: 15px;<br />
	color: maroon;<br />
}[/code]</p>
<h3>Bloco de código do efeito (jQuery)</h3>
<p>[code lang="javascript"]$(function() {<br />
	// Evento de clique do elemento: ul#menu li.parent > a<br />
	$('ul#menu li.parent > a').click(function() {<br />
		// Expande ou retrai o elemento ul.sub-menu dentro do elemento pai (ul#menu li.parent)<br />
		$('ul.sub-menu', $(this).parent()).slideToggle('fast', function() {<br />
			// Depois de expandir ou retrair, troca a classe 'aberto' do <a> clicado<br />
			$(this).parent().toggleClass('aberto');<br />
		});<br />
		return false;<br />
	});<br />
});[/code]</p>
<p>--</p>
<p>É só juntar todas as peças (como foi feito no exemplo) e o seu menu irá funcionar que é uma maravilha! :D</p>
<p>O código do efeito pode parecer um pouco complicado pra quem tá começando com jQuery, mas é só ler os comentários e procurar um pouco sobre cada função (<strong>slideToggle</strong>, <strong>toggleClass</strong>, <strong>click</strong>) na documentação que, com os exemplos de lá vai ficar tudo claro.</p>
<p><a href="http://blog.thiagobelem.net/arquivos/2009/06/menu.rar" target="_blank">Faça aqui o download do arquivo .rar com os arquivos dessa aula.</a></p>
<p>Espero que tenham gostado, qualquer dúvida é só falar.</p>
