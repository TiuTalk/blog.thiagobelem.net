---
layout: post
title: Lendo um Feed RSS com PHP
excerpt: Com a classe SimpleXML você pode ler um Feeds RSS usando apenas três linhas
  de código... É tudo muito simples! Como o próprio nome da classe já diz.

date: '2009-05-08 22:52:15 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Graças ao PHP 5 podemos ler XMLs com muita facilidade. Isso sempre foi possível, mas antes exigia mais códigos e mais trabalho... Mas hoje em dia, com a classe <strong>SimpleXML</strong>, ficou tudo incrivelmente mais simples.

Hoje vou mostrar, como é possível ler o conteúdo de um <abbr title="Really Simple Syndication"><em>Feed RSS</em></abbr> usando <strong>apenas</strong> três linhas de código!

Vamos ao código:


{% highlight text linenos %}
< ?php
$feed = file_get_contents('http://feeds2.feedburner.com/ThiagoBelem/Blog');
$rss = new SimpleXmlElement($feed);

foreach($rss->channel->item as $entrada) {
echo '
[title . '](' . $entrada->link . ')

';
}
?>
{% endhighlight %}

Viram só?! Com isso criamos uma lista contendo links para todas as entradas de um Feed RSS. :D

<ol>
<li>Pegamos o conteúdo (XML completo) do <em>Feed RSS</em> do meu blog...</li>
<li>Chamamos a classe <strong>SimpleXML</strong> do PHP</li>
<li>Criamos um loop (repetição) para cada <strong><item></strong> dentro do <strong><channel></strong>, o que representa cada notícia de um RSS</li>
</ol>
Dentro do loop, teremos <span style="color: #99cc00;"><strong>$entrada</strong></span> (um objeto) que contém os dados de cada <item> do RSS: title, description, link, pubDate e etc.

Como diria o meu professor de física do colegial: "<em>Mel na chupeta!</em>"

Vamos aos links de referências, para aqueles que não são [codificadores](/codificadores-e-programadores) e gostam de saber o porquê das coisas:

» <strong>SimpleXML (Documentação)</strong> - [http://www.php.net/manual/pt_BR/book.simplexml.php](http://www.php.net/manual/pt_BR/book.simplexml.php)
» <strong>RSS (Wikipédia)</strong> - <a href="http://pt.wikipedia.org/wiki/RSS" target="_blank">http://pt.wikipedia.org/wiki/RSS
</a>» <strong>Feed (Wikipédia) </strong>- <a href="http://pt.wikipedia.org/wiki/Feed" target="_blank">http://pt.wikipedia.org/wiki/Feed
</a>» <strong>Validador de XMLs</strong> - [http://validator.w3.org/feed/](http://validator.w3.org/feed/)

Ah.. Detalhe: Você também pode criar XMLs (Feed RSS também) usando essa classe... E é tão fácil quanto ler. ;)

Abraços e até a próxima!

