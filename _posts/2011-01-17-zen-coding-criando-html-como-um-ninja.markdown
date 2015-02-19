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
- HTML
- Zen-Coding
- XML
---
Fala pessoal! Finalmente de volta com o blog. :)

Hoje trago até vocês uma coisinha muito da legal: o [Bernard de Luna](http://www.bernarddeluna.com/).

<h3>O que é o Zen-Coding?</h3>
Segundo o próprio site:

<blockquote>Zen Coding é um plugin de editores para codificar e editar HTML, XML, XSL (or any other structured code format) em alta velocidade. O "núcleo" dessa ferramenta é um sistema de abreviação poderoso que te permite expandir expressões (parecidas com a de CSS) em HTML válido e organizado.
</blockquote>
<blockquote><em>Zen Coding is an editor plugin for high-speed  HTML, XML, XSL (or any  other structured code format) coding and  editing. The core of this  plugin is a powerful abbreviation engine  which allows you to expand  expressions—similar to CSS selectors—into  HTML code.</em>
</blockquote>
<h3>Como assim? O que ele faz?</h3>
Com o Zen-Coding você digita isso no seu editor:
{% highlight html linenos %}
div#page>div.logo+ul#navigation>li*5>a
{% endhighlight %}
... aperta uma combinação de teclas, normalmente CTRL+E, e isso é <strong>automaticamente</strong> transformado em:
{% highlight html linenos %}
<div id="page">
  <div class="logo"></div>
  <ul id="navigation">
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
</div>
{% endhighlight %}

<h3>Editores com suporte ao Zen-Coding</h3>
Você pode baixar o plugin do Zen-Coding no [site oficial](http://code.google.com/p/zen-coding/) para os seguintes editores:

<blockquote>Aptana/Eclipse, TextMate (Mac), Coda (Mac), Espresso (Mac), Komodo Edit/IDE, Notepad++ (Windows), PSPad (Windows), <textarea> (browser), editArea (browser), CodeMirror (browser), Dreamweaver (Windows, Mac), Sublime Text (Windows), UltraEdit (Windows), TopStyle (Windows), GEdit, BBEdit/TextWrangler (Mac), Visual Studio (Windows), EmEditor (Windows), Sakura Editor (Windows), NetBeans, IntelliJ IDEA/WebStorm/PHPStorm, Emacs, Vim e Visual Studio
</blockquote>
Nem todos são plugins oficiais, mas a maioria sim. :)

<h3>O que mais ele faz?</h3>
Vejam um exemplo que criei para vocês...

Você pode expandir a seguinte linha:
{% highlight html linenos %}
html>(head>title+meta[name="description" content]+meta[name="keywords" content])+(body>(header+(#body>#content+aside#sidebar))+footer)
{% endhighlight %}
Em um template de site completo:
{% highlight html linenos %}
<html>
  <head>
    <title></title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
  </head>
  <body>
    <header></header>
    <div id="body">
      <div id="content"></div>
      <aside id="sidebar"></aside>
    </div>
    <footer></footer>
  </body>
</html>
{% endhighlight %}

Esse é um bom exemplo do que ele é capaz de fazer... Mas não é um uso comum dele... A idéia é você fazer HTML muito rápido, por exemplo quando você digita <code>#menu>ul>li*5>a</code> e "expande", você ganha tempo por não ter que escrever (e organizar/identar), isso tudo:
{% highlight html linenos %}
<div id="menu">
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
</div>
{% endhighlight %}

<hr />
Espero que vocês tenham gostado dessa ferramenta! Ela não é novidade, mas sei que nem todo mundo conhece. ;)

Lembre-se, quanto menos tempo você gastar fazendo as tarefas que vive fazendo, mais tempo você terá pra ganhar mais dinheiro!

