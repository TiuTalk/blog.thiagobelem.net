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
Hoje vou ensinar a criar uma galeria de fotos (ou <em>slideshow</em>) usando o jQuery. Pra quem ainda não sabe: o jQuery é um <abbr title="Em desenvolvimento de software, um framework ou arcabouço é uma abstração que une códigos comuns entre vários projetos de software provendo uma funcionalidade genérica. Um framework pode atingir uma funcionalidade específica, por configuração, durante a programação de uma aplicação.">framework</abbr> de JavaScript desenvolvido para codificação rápida (leia-se <strong>relâmpago</strong>).

O lema do [jQuery](http://jquery.com/) é <em>The Write Less, do More</em> que em bom português significa "Escreva menos, faça mais". E é exatamente isso que o jQ te proporciona: fazer muito mais funcionalidades e efeitos com muito menos código.

[Veja um exemplo on-line do resultado desta aula.](/exemplo1)

Pra aula de hoje você vai precisar de - <strong>apenas</strong> - duas coisas:

<ol>
<li>Última versão do <strong>jQuery</strong>: [http://jquery.com/](http://jquery.com/) <span style="color: #999999;">- Clique no botão <em><strong>Download ( jQuery );</strong></em></span></li>
<li>Última versão do plugin <strong>jCycle</strong> para jQuery: [http://malsup.com/jquery/cycle/](http://malsup.com/jquery/cycle/)</li>
</ol>
Depois de ter feito o download dos dois arquivos .js é só incluí-los no seu site assim:


<div data-gist-id="22636b891f3e6995edda" data-gist-show-loading="false"></div>

Lembrando que esse código deve ir entre as TAGs <head> e </head> do seu site.

Depois disso, você cria uma div com o id que quiser (vamos usar #slideshow como exemplo) e dentro dela coloca as fotos do seu slideshow, por exemplo:


<div data-gist-id="3b9133643501c8bb8347" data-gist-show-loading="false"></div>

Depois é só voltar lá dentro do <head> do seu site e colocar o seguinte bloco de javascript:


<div data-gist-id="8e97d19e71d4e021e69f" data-gist-show-loading="false"></div>

Com isso você definiu qual a div que contem o slideshow (repare que o ID da div vai ali no começo da terceira linha) e o jQuery inicia o efeito sozinho.

Mas só isso? Sim. Você já tem um slideshow, automático, com efeito de transição <em>fade</em> pronto pra ser usado!

[Veja como ficou a galeria criada neste exemplo.](/exemplo1)

No site do jCycle você vai ver dezenas de outros exemplos de transições e opções que podem ser usadas na chamada do jCycle. Teste-os, você vai adorar!

Espero que tenham gostado.  :P

