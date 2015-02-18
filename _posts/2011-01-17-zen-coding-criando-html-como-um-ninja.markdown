---
layout: post
title: Zen-Coding – Criando HTML como um ninja!
excerpt: Com o Zen-Coding você pode criar blocos de dezenas de linhas de HTML rapidamente!
  Digite algo parecido com uma expressão CSS e saia com um HTML pronto para usar.

date: '2011-01-17 22:24:58 -0200'
categories:
- HTML
- Artigos
- Otimização
tags:
- featured
- HTML
- Zen-Coding
- XML
---
<p>Fala pessoal! Finalmente de volta com o blog. :)</p>
<p>Hoje trago até vocês uma coisinha muito da legal: o <a href="http://code.google.com/p/zen-coding/" target="_blank">Zen-Coding</a>, apresentado à mim pelo meu amigo implementador <a title="Implementador, HTML e CSS" href="http://www.bernarddeluna.com/" target="_blank">Bernard de Luna</a>.</p>
<h3>O que é o Zen-Coding?</h3>
<p>Segundo o próprio site:</p>
<blockquote><p>Zen Coding é um plugin de editores para codificar e editar HTML, XML, XSL (or any other structured code format) em alta velocidade. O "núcleo" dessa ferramenta é um sistema de abreviação poderoso que te permite expandir expressões (parecidas com a de CSS) em HTML válido e organizado.</p></blockquote>
<blockquote><p><em>Zen Coding is an editor plugin for high-speed  HTML, XML, XSL (or any  other structured code format) coding and  editing. The core of this  plugin is a powerful abbreviation engine  which allows you to expand  expressions—similar to CSS selectors—into  HTML code.</em></p></blockquote>
<h3>Como assim? O que ele faz?</h3>
<p>Com o Zen-Coding você digita isso no seu editor:<br />
[code language="html"]div#page>div.logo+ul#navigation>li*5>a[/code]<br />
... aperta uma combinação de teclas, normalmente CTRL+E, e isso é <strong>automaticamente</strong> transformado em:<br />
[code language="html"]<div id="page"><br />
	<div class="logo"></div><br />
	<ul id="navigation"><br />
		<li><a href=""></a></li><br />
		<li><a href=""></a></li><br />
		<li><a href=""></a></li><br />
		<li><a href=""></a></li><br />
		<li><a href=""></a></li><br />
	</ul><br />
</div>[/code]</p>
<h3>Editores com suporte ao Zen-Coding</h3>
<p>Você pode baixar o plugin do Zen-Coding no <a href="http://code.google.com/p/zen-coding/" target="_blank">site oficial</a> para os seguintes editores:</p>
<blockquote><p>Aptana/Eclipse, TextMate (Mac), Coda (Mac), Espresso (Mac), Komodo Edit/IDE, Notepad++ (Windows), PSPad (Windows), <textarea> (browser), editArea (browser), CodeMirror (browser), Dreamweaver (Windows, Mac), Sublime Text (Windows), UltraEdit (Windows), TopStyle (Windows), GEdit, BBEdit/TextWrangler (Mac), Visual Studio (Windows), EmEditor (Windows), Sakura Editor (Windows), NetBeans, IntelliJ IDEA/WebStorm/PHPStorm, Emacs, Vim e Visual Studio</p></blockquote>
<p>Nem todos são plugins oficiais, mas a maioria sim. :)</p>
<h3>O que mais ele faz?</h3>
<p>Vejam um exemplo que criei para vocês...</p>
<p>Você pode expandir a seguinte linha:<br />
[code language="html"]html>(head>title+meta[name="description" content]+meta[name="keywords" content])+(body>(header+(#body>#content+aside#sidebar))+footer)[/code]<br />
Em um template de site completo:<br />
[code language="html"]<html><br />
	<head><br />
		<title></title><br />
		<meta name="description" content="" /><br />
		<meta name="keywords" content="" /><br />
	</head><br />
	<body><br />
		<header></header><br />
		<div id="body"><br />
			<div id="content"></div><br />
			<aside id="sidebar"></aside><br />
		</div><br />
		<footer></footer><br />
	</body><br />
</html>[/code]</p>
<p>Esse é um bom exemplo do que ele é capaz de fazer... Mas não é um uso comum dele... A idéia é você fazer HTML muito rápido, por exemplo quando você digita <code>#menu>ul>li*5>a</code> e "expande", você ganha tempo por não ter que escrever (e organizar/identar), isso tudo:<br />
[code language="html"]<div id="menu"><br />
	<ul><br />
		<li><a href=""></a></li><br />
		<li><a href=""></a></li><br />
		<li><a href=""></a></li><br />
		<li><a href=""></a></li><br />
		<li><a href=""></a></li><br />
	</ul><br />
</div>[/code]</p>
<hr />
<p>Espero que vocês tenham gostado dessa ferramenta! Ela não é novidade, mas sei que nem todo mundo conhece. ;)</p>
<p>Lembre-se, quanto menos tempo você gastar fazendo as tarefas que vive fazendo, mais tempo você terá pra ganhar mais dinheiro!</p>
