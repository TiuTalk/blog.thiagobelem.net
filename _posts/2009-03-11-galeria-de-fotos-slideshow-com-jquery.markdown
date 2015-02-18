---
layout: post
title: Galeria de fotos (slideshow) com jQuery
excerpt: Aprenda a criar uma galeria de fotos (com efeito de Slideshow) usando apenas
  HTML e jQuery!

date: '2009-03-11 21:31:02 -0300'
categories:
- jQuery
- Artigos
tags: []
---
<p>Hoje vou ensinar a criar uma galeria de fotos (ou <em>slideshow</em>) usando o jQuery. Pra quem ainda não sabe: o jQuery é um <abbr title="Em desenvolvimento de software, um framework ou arcabouço é uma abstração que une códigos comuns entre vários projetos de software provendo uma funcionalidade genérica. Um framework pode atingir uma funcionalidade específica, por configuração, durante a programação de uma aplicação.">framework</abbr> de JavaScript desenvolvido para codificação rápida (leia-se <strong>relâmpago</strong>).</p>
<p>O lema do <a href="http://jquery.com/" target="_blank">jQuery</a> é <em>The Write Less, do More</em> que em bom português significa "Escreva menos, faça mais". E é exatamente isso que o jQ te proporciona: fazer muito mais funcionalidades e efeitos com muito menos código.</p>
<p><a href="http://blog.thiagobelem.net/exemplo1/" target="_blank">Veja um exemplo on-line do resultado desta aula.</a></p>
<p>Pra aula de hoje você vai precisar de - <strong>apenas</strong> - duas coisas:</p>
<ol>
<li>Última versão do <strong>jQuery</strong>: <a href="http://jquery.com/" target="_blank">http://jquery.com/</a> <span style="color: #999999;">- Clique no botão <em><strong>Download ( jQuery );</strong></em></span></li>
<li>Última versão do plugin <strong>jCycle</strong> para jQuery: <a href="http://malsup.com/jquery/cycle/" target="_blank">http://malsup.com/jquery/cycle/</a></li>
</ol>
<p>Depois de ter feito o download dos dois arquivos .js é só incluí-los no seu site assim:</p>
<p>[code language="html"]<br />
&lt;head&gt;<br />
&lt;script src=&quot;_pasta_/jquery.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;<br />
&lt;script src=&quot;_pasta_/jcycle.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;<br />
&lt;/head&gt;<br />
[/code]</p>
<p>Lembrando que esse código deve ir entre as TAGs &lt;head&gt; e &lt;/head&gt; do seu site.</p>
<p>Depois disso, você cria uma div com o id que quiser (vamos usar #slideshow como exemplo) e dentro dela coloca as fotos do seu slideshow, por exemplo:</p>
<p>[code language="html"]<br />
&lt;div id=&quot;slideShow&quot;&gt;<br />
&lt;img src=&quot;imagens/foto1.jpg&quot; alt=&quot;Primeira Foto&quot; width=&quot;300&quot; height=&quot;200&quot; /&gt;<br />
&lt;img src=&quot;imagens/foto2.jpg&quot; alt=&quot;Segunda Foto&quot; width=&quot;300&quot; height=&quot;200&quot; /&gt;<br />
&lt;img src=&quot;imagens/foto3.jpg&quot; alt=&quot;Terceira Foto&quot; width=&quot;300&quot; height=&quot;200&quot; /&gt;<br />
&lt;/div&gt;<br />
[/code]</p>
<p>Depois é só voltar lá dentro do &lt;head&gt; do seu site e colocar o seguinte bloco de javascript:</p>
<p>[code language="html"]<br />
&lt;script type=&quot;text/javascript&quot;&gt;<br />
&lt;!--<br />
$(function() {<br />
$('#slideShow').cycle({ fx: 'fade' });<br />
});<br />
// --&gt;<br />
&lt;/script&gt;<br />
[/code]</p>
<p>Com isso você definiu qual a div que contem o slideshow (repare que o ID da div vai ali no começo da terceira linha) e o jQuery inicia o efeito sozinho.</p>
<p>Mas só isso? Sim. Você já tem um slideshow, automático, com efeito de transição <em>fade</em> pronto pra ser usado!</p>
<p><a href="http://blog.thiagobelem.net/exemplo1/" target="_blank">Veja como ficou a galeria criada neste exemplo.</a></p>
<p>No site do jCycle você vai ver dezenas de outros exemplos de transições e opções que podem ser usadas na chamada do jCycle. Teste-os, você vai adorar!</p>
<p>Espero que tenham gostado.  :P</p>
