---
layout: post
status: publish
published: true
title: Lendo um Feed RSS com PHP
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Com a classe SimpleXML você pode ler um Feeds RSS usando apenas três linhas
  de código... É tudo muito simples! Como o próprio nome da classe já diz.
wordpress_id: 464
wordpress_url: http://blog.thiagobelem.net/?p=464
date: '2009-05-08 22:52:15 -0300'
date_gmt: '2009-05-09 01:52:15 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Graças ao PHP 5 podemos ler XMLs com muita facilidade. Isso sempre foi possível, mas antes exigia mais códigos e mais trabalho... Mas hoje em dia, com a classe <strong>SimpleXML</strong>, ficou tudo incrivelmente mais simples.</p>
<p>Hoje vou mostrar, como é possível ler o conteúdo de um <abbr title="Really Simple Syndication"><em>Feed RSS</em></abbr> usando <strong>apenas</strong> três linhas de código!</p>
<p>Vamos ao código:</p>
<p>[code='php']<br />
< ?php<br />
$feed = file_get_contents('http://feeds2.feedburner.com/ThiagoBelem/Blog');<br />
$rss = new SimpleXmlElement($feed);</p>
<p>foreach($rss->channel->item as $entrada) {<br />
echo '
<p><a href="' . $entrada->link . '" title="' . $entrada->title . '">' . $entrada->title . '</a></p>
<p>';<br />
}<br />
?><br />
[/code]</p>
<p>Viram só?! Com isso criamos uma lista contendo links para todas as entradas de um Feed RSS. :D</p>
<ol>
<li>Pegamos o conteúdo (XML completo) do <em>Feed RSS</em> do meu blog...</li>
<li>Chamamos a classe <strong>SimpleXML</strong> do PHP</li>
<li>Criamos um loop (repetição) para cada <strong>&lt;item&gt;</strong> dentro do <strong>&lt;channel&gt;</strong>, o que representa cada notícia de um RSS</li>
</ol>
<p>Dentro do loop, teremos <span style="color: #99cc00;"><strong>$entrada</strong></span> (um objeto) que contém os dados de cada &lt;item&gt; do RSS: title, description, link, pubDate e etc.</p>
<p>Como diria o meu professor de física do colegial: "<em>Mel na chupeta!</em>"</p>
<p>Vamos aos links de referências, para aqueles que não são <a href="http://blog.thiagobelem.net/vida-pessoal/codificadores-e-programadores/" target="_parent">codificadores</a> e gostam de saber o porquê das coisas:</p>
<p>» <strong>SimpleXML (Documentação)</strong> - <a href="http://www.php.net/manual/pt_BR/book.simplexml.php" target="_blank">http://www.php.net/manual/pt_BR/book.simplexml.php</a><br />
» <strong>RSS (Wikipédia)</strong> - <a href="http://pt.wikipedia.org/wiki/RSS" target="_blank">http://pt.wikipedia.org/wiki/RSS<br />
</a>» <strong>Feed (Wikipédia) </strong>- <a href="http://pt.wikipedia.org/wiki/Feed" target="_blank">http://pt.wikipedia.org/wiki/Feed<br />
</a>» <strong>Validador de XMLs</strong> - <a href="http://validator.w3.org/feed/" target="_blank">http://validator.w3.org/feed/</a></p>
<p>Ah.. Detalhe: Você também pode criar XMLs (Feed RSS também) usando essa classe... E é tão fácil quanto ler. ;)</p>
<p>Abraços e até a próxima!</p>