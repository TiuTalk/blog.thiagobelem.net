---
layout: post
title: Sistema de rotação de banners e imagens em PHP
excerpt: Como criar um sistema de rotação de banners (ou imagens) em PHP

date: '2009-04-25 23:37:51 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Essa é uma dúvida comum entre os iniciantes e aqueles que não conhecem nenhum <em><abbr title="Gerenciador de Anúncios">ad manager</abbr></em> que nem o <a title="Google Ad Manager" href="https://www.google.com/dfp/login/pt_BR/index.html" target="_blank">Google Ad Manager</a>: como criar um sistema de rotação de banners (ou imagens) em PHP? Aquela funcionalidade que faz com que, cada vez que você carrague o site (<em>refresh</em>), apareça uma imagem diferente em um local.</p>
<p>Bom, existem dezenas de formas de fazer isso, mas eu vou tentar fazer da forma mais simples possível.</p>
<p>Vamos criar um arquivo chamado <span style="color: #ff6600;"><strong>banner_superior.php</strong></span> com o seguinte conteúdo:</p>
<p>[code language="php"]<br />
&lt;?php<br />
unset($_ELEMENTOS);</p>
<p>$_ELEMENTOS[] = '&lt;a href=&quot;http://site.com/&quot;&gt;&lt;img src=&quot;site.jpg&quot; alt=&quot;&quot; width=&quot;10&quot; height=&quot;10&quot; /&gt;&lt;/a&gt;';<br />
$_ELEMENTOS[] = '&lt;a href=&quot;http://orkut.com/&quot;&gt;&lt;img src=&quot;orkut.jpg&quot; alt=&quot;&quot; width=&quot;10&quot; height=&quot;10&quot; /&gt;&lt;/a&gt;';<br />
$_ELEMENTOS[] = '&lt;a href=&quot;http://forum.com/&quot;&gt;&lt;img src=&quot;forum.jpg&quot; alt=&quot;&quot; width=&quot;10&quot; height=&quot;10&quot; /&gt;&lt;/a&gt;';</p>
<p>$total = count($_ELEMENTOS); // Calcula o total de elementos<br />
$escolhido = rand(0, $total - 1); // Define um número aleatório</p>
<p>echo $_ELEMENTOS[$escolhido]; // Exibe o elemento</p>
<p>?&gt;<br />
[/code]</p>
<p>Depois é só incluir (com <strong>include()</strong>) o arquivo aonde você quer que o banner apareça.</p>
<p>--</p>
<p>O que o scrip faz é bem simples: Primeiro definimos um array contendo o código HTML (imagem e link no caso) de cada banner que poderá ser exibido, depois descobrimos quantos elementos foram definidos e, por fim, exibimos um elemento aleatório.</p>
<p>Se você quiser, pode definir quantos $_ELEMENTO quiser e pode usar o mesmo arquivo em vários lugares ou copiar o arquivo e usar outro nome que irá funcionar direitinho.</p>
<p>Você também pode colocar apenas imagens, links textuais e até outros HTMLs em cada elemento sem problema.</p>
<blockquote><p><span style="color: #ff0000;"><strong>Atenção:</strong></span> Quando definimos uma string no PHP (usando aspas simples como delimitadores), e queremos que essa mesma string tenha uma aspa simples DENTRO dela, precisamos escapar a aspa dessa forma:</p>
<p>$nome = 'Quer um copo d\'agua?';</p>
<p>Ou mudamos as aspas delimitadoras:</p>
<p>$nome = "Quer um copo d'agua?";</p>
<p>O mesmo acontece para aspas duplas.</p></blockquote>
<p>Espero que tenham entendido e gostado desse script! :)</p>
<p>Abraços</p>
