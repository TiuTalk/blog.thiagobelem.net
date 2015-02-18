---
layout: post
title: Redimensionando imagens automaticamente com o PHP
excerpt: Vou mostrar aqui como usar a classe WideImage para redimensionar (resize)
  e cortar (crop) imagens automaticamente, gerando thumbnails para as suas imagens.
  Aprenda a fazer isso e torne o seu sistema muito mais amigável para o visitante!
  :)

date: '2009-05-09 21:54:11 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
As vezes, dependendo do site, precisamos que as imagens sejam redimensionadas automaticamente após o upload... E fique sabendo que essa é uma tarefa muito simples! :D

Mas porque perder tempo com isso? Não é melhor limitar o upload de imagens, permitindo apenas uma resolução? Sim.. É mais fácil pra você.. mas não pro <em><abbr title="Usuário final - Quem usará o site/sistema">end-user</abbr></em>. É melhor você perder uma ou duas horas e fazer um sistema muito mais fácil de ser usado e facilitar a vida do usuário... Vai ser melhor pra você e pra ele, acredite.

Existe uma classe pronta de PHP que eu gosto muito, chama [WideImage](http://wideimage.sourceforge.net/)... Vou mostrar aqui como usá-la para redimensionar (<em>resize</em>) e cortar (<em>crop</em>) imagens automaticamente, gerando (ou não) arquivos novos. Para um sistema que gera miniaturas (<em>thumbs</em>) isso é mais do que o suficiente.

<h3>Redimensionando imagens</h3>

{% highlight php linenos %}
<?php

// Chama o arquivo com a classe WideImage
require('/caminho/WideImage.inc.php');

// Carrega a imagem a ser manipulada
$image = wiImage::load('/caminho/foto.jpg');

// Redimensiona a imagem
$image = $image->resize(400, 300);

// Salva a imagem em um arquivo (novo ou não)
$image->saveToFile('/caminho/nova_foto.jpg');

?>
{% endhighlight %}

<h3>Cortando imagens</h3>

{% highlight php linenos %}
<?php

// Chama o arquivo com a classe WideImage
require('/caminho/WideImage.inc.php');

// Carrega a imagem a ser manipulada
$image = wiImage::load('/caminho/foto.jpg');

// Corta a imagem (Argumentos: X1, Y1, X2, Y2)
$image = $image->crop(10, 20, 110, 120);
// Faz um quadrado da posição [X1;Y1] até [X2;Y2]

// Salva a imagem em um arquivo (novo ou não)
$image->saveToFile('/caminho/nova_foto.jpg');

?>
{% endhighlight %}

<h3>Mudando a qualidade de imagens</h3>

{% highlight php linenos %}
<?php

// Chama o arquivo com a classe WideImage
require('/caminho/WideImage.inc.php');

// Carrega a imagem a ser manipulada
$image = wiImage::load('/caminho/foto.jpg');

// Salva a imagem em um arquivo com 80% de qualidade
$image->saveToFile('/caminho/nova_foto.jpg', null, 80);

?>
{% endhighlight %}

Estes foram apenas alguns exemplos... A classe pode fazer muito mais: tons de cinza, marca d'agua, rotacionar, flip, espelho, filtros PNG e muito mais... Acesse o [site da classe](http://wideimage.sourceforge.net/) para ver outros exemplos e a documentação dos métodos dela.

Espero que tenham gostado! ;)

