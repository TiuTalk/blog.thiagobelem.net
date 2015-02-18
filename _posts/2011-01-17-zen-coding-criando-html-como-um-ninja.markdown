---
layout: post
status: publish
published: true
title: Zen-Coding – Criando HTML como um ninja!
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Com o Zen-Coding você pode criar blocos de dezenas de linhas de HTML rapidamente!
  Digite algo parecido com uma expressão CSS e saia com um HTML pronto para usar.
wordpress_id: 1345
wordpress_url: http://blog.thiagobelem.net/?p=1345
date: '2011-01-17 22:24:58 -0200'
date_gmt: '2011-01-18 00:24:58 -0200'
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
[code language="html"]div#page&gt;div.logo+ul#navigation&gt;li*5&gt;a[/code]<br />
... aperta uma combinação de teclas, normalmente CTRL+E, e isso é <strong>automaticamente</strong> transformado em:<br />
[code language="html"]&lt;div id=&quot;page&quot;&gt;<br />
	&lt;div class=&quot;logo&quot;&gt;&lt;/div&gt;<br />
	&lt;ul id=&quot;navigation&quot;&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;[/code]</p>
<h3>Editores com suporte ao Zen-Coding</h3>
<p>Você pode baixar o plugin do Zen-Coding no <a href="http://code.google.com/p/zen-coding/" target="_blank">site oficial</a> para os seguintes editores:</p>
<blockquote><p>Aptana/Eclipse, TextMate (Mac), Coda (Mac), Espresso (Mac), Komodo Edit/IDE, Notepad++ (Windows), PSPad (Windows), &lt;textarea> (browser), editArea (browser), CodeMirror (browser), Dreamweaver (Windows, Mac), Sublime Text (Windows), UltraEdit (Windows), TopStyle (Windows), GEdit, BBEdit/TextWrangler (Mac), Visual Studio (Windows), EmEditor (Windows), Sakura Editor (Windows), NetBeans, IntelliJ IDEA/WebStorm/PHPStorm, Emacs, Vim e Visual Studio</p></blockquote>
<p>Nem todos são plugins oficiais, mas a maioria sim. :)</p>
<h3>O que mais ele faz?</h3>
<p>Vejam um exemplo que criei para vocês...</p>
<p>Você pode expandir a seguinte linha:<br />
[code language="html"]html&gt;(head&gt;title+meta[name=&quot;description&quot; content]+meta[name=&quot;keywords&quot; content])+(body&gt;(header+(#body&gt;#content+aside#sidebar))+footer)[/code]<br />
Em um template de site completo:<br />
[code language="html"]&lt;html&gt;<br />
	&lt;head&gt;<br />
		&lt;title&gt;&lt;/title&gt;<br />
		&lt;meta name=&quot;description&quot; content=&quot;&quot; /&gt;<br />
		&lt;meta name=&quot;keywords&quot; content=&quot;&quot; /&gt;<br />
	&lt;/head&gt;<br />
	&lt;body&gt;<br />
		&lt;header&gt;&lt;/header&gt;<br />
		&lt;div id=&quot;body&quot;&gt;<br />
			&lt;div id=&quot;content&quot;&gt;&lt;/div&gt;<br />
			&lt;aside id=&quot;sidebar&quot;&gt;&lt;/aside&gt;<br />
		&lt;/div&gt;<br />
		&lt;footer&gt;&lt;/footer&gt;<br />
	&lt;/body&gt;<br />
&lt;/html&gt;[/code]</p>
<p>Esse é um bom exemplo do que ele é capaz de fazer... Mas não é um uso comum dele... A idéia é você fazer HTML muito rápido, por exemplo quando você digita <code>#menu>ul>li*5>a</code> e "expande", você ganha tempo por não ter que escrever (e organizar/identar), isso tudo:<br />
[code language="html"]&lt;div id=&quot;menu&quot;&gt;<br />
	&lt;ul&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;[/code]</p>
<hr />
<p>Espero que vocês tenham gostado dessa ferramenta! Ela não é novidade, mas sei que nem todo mundo conhece. ;)</p>
<p>Lembre-se, quanto menos tempo você gastar fazendo as tarefas que vive fazendo, mais tempo você terá pra ganhar mais dinheiro!</p>
