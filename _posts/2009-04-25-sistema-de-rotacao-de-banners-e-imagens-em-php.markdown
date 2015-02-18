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
Essa é uma dúvida comum entre os iniciantes e aqueles que não conhecem nenhum <em><abbr title="Gerenciador de Anúncios">ad manager</abbr></em> que nem o <a title="Google Ad Manager" href="https://www.google.com/dfp/login/pt_BR/index.html" target="_blank">Google Ad Manager</a>: como criar um sistema de rotação de banners (ou imagens) em PHP? Aquela funcionalidade que faz com que, cada vez que você carrague o site (<em>refresh</em>), apareça uma imagem diferente em um local.

Bom, existem dezenas de formas de fazer isso, mas eu vou tentar fazer da forma mais simples possível.

Vamos criar um arquivo chamado <span style="color: #ff6600;"><strong>banner_superior.php</strong></span> com o seguinte conteúdo:


[code language="php"]
<?php
unset($_ELEMENTOS);

$_ELEMENTOS[] = '<a href="http://site.com/"><img src="site.jpg" alt="" width="10" height="10" /></a>';
$_ELEMENTOS[] = '<a href="http://orkut.com/"><img src="orkut.jpg" alt="" width="10" height="10" /></a>';
$_ELEMENTOS[] = '<a href="http://forum.com/"><img src="forum.jpg" alt="" width="10" height="10" /></a>';

$total = count($_ELEMENTOS); // Calcula o total de elementos
$escolhido = rand(0, $total - 1); // Define um número aleatório

echo $_ELEMENTOS[$escolhido]; // Exibe o elemento

?>
[/code]

Depois é só incluir (com <strong>include()</strong>) o arquivo aonde você quer que o banner apareça.

--

O que o scrip faz é bem simples: Primeiro definimos um array contendo o código HTML (imagem e link no caso) de cada banner que poderá ser exibido, depois descobrimos quantos elementos foram definidos e, por fim, exibimos um elemento aleatório.

Se você quiser, pode definir quantos $_ELEMENTO quiser e pode usar o mesmo arquivo em vários lugares ou copiar o arquivo e usar outro nome que irá funcionar direitinho.

Você também pode colocar apenas imagens, links textuais e até outros HTMLs em cada elemento sem problema.

<blockquote><span style="color: #ff0000;"><strong>Atenção:</strong></span> Quando definimos uma string no PHP (usando aspas simples como delimitadores), e queremos que essa mesma string tenha uma aspa simples DENTRO dela, precisamos escapar a aspa dessa forma:

$nome = 'Quer um copo d\'agua?';

Ou mudamos as aspas delimitadoras:

$nome = "Quer um copo d'agua?";

O mesmo acontece para aspas duplas.
</blockquote>
Espero que tenham entendido e gostado desse script! :)

Abraços

