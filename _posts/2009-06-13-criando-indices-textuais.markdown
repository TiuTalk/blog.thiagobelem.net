---
layout: post
title: Criando índices textuais
excerpt: Aprenda a trocar índices numéricos (IDs) por índices textuais e deixe o as
  URLs do seu site muito mais amigáveis e seguras com esse recurso.

date: '2009-06-13 03:17:33 -0300'
categories:
- PHP
- Artigos
- Otimização
- Segurança
tags:
- PHP
- "Índices Textuais"
---
Sabe quando estamos vendo um vídeo no YouTube e olhamos o ID do vídeo no link e não vemos um ID numérico, mas vemos um id textual (feito com letras e números), mas ou menos assim: <strong><span style="color: #3366ff;">KGjTdt2AeGA</span></strong>?

Esse tipo de índice é muito mais amigável, pois quando temos muitos registros no banco de dados fica "feio" mostrar <strong>18713543</strong> na URL.

Existe uma função pronta <span style="color: #808080;">(que encontrei [aqui](http://kevin.vanzonneveld.net/techblog/article/create_short_ids_with_php_like_youtube_or_tinyurl/), criada pelo Kevin Zonneveld)</span> e que usa técnicas de encriptação para fazer o trabalho de converter números em letras e vice-e-versa.

<h3>Código da função</h3>
Vamos ao código da função e depois eu explico como usá-la:


[code language="php"]
<?php
/**
* Traduz números para texto e vice-e-versa
*
* Traduz qualquer número (até 9007199254740992)
* para uma versão menor, usando letras:
* 9007199254740989 --> PpQXn7COf
*
* Especificando o segundo parâmetro como true temos:
* PpQXn7COf --> 9007199254740989
*
* @author    Kevin van Zonneveld <kevin@vanzonneveld.net>
* @copyright 2008 Kevin van Zonneveld (http://kevin.vanzonneveld.net)
* @license   http://www.opensource.org/licenses/bsd-license.php New BSD Licence
* @version   SVN: Release: $Id: alphaID.inc.php 344 2009-06-10 17:43:59Z kevin $
*
* @param mixed   $in     String or long input to translate
* @param boolean $to_num Reverses translation when true
* @param mixed   $pad_up Number or boolean padds the result up to a specified length
*
* @return mixed string or long
*/

function alphaID($in, $to_num = false, $pad_up = false) {
// Letras que serão usadas no índice textual
$index = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
$base  = strlen($index);

if ($to_num) {
// Tradução de texto para número
$in  = strrev($in);
$out = 0;
$len = strlen($in) - 1;
for ($t = 0; $t <= $len; $t++) {
$bcpow = bcpow($base, $len - $t);
$out   = $out + strpos($index, substr($in, $t, 1)) * $bcpow;
}

if (is_numeric($pad_up)) {
$pad_up--;
if ($pad_up > 0) {
$out -= pow($base, $pad_up);
}
}
} else {
// Tradução de número para texto
if (is_numeric($pad_up)) {
$pad_up--;
if ($pad_up > 0) {
$in += pow($base, $pad_up);
}
}

$out = "";
for ($t = floor(log10($in) / log10($base)); $t >= 0; $t--) {
$a   = floor($in / bcpow($base, $t));
$out = $out . substr($index, $a, 1);
$in  = $in - ($a * bcpow($base, $t));
}
$out = strrev($out);
}

return $out;
}
?>
[/code]

Se você quiser, pode fazer o [download do arquivo (.txt) com a função](/arquivos/2009/06/idtextual.txt) (com a indentação correta).

<h3>Usando a função</h3>
Para usar a função é bem simples, veja a conversão de número em texto:


[code language="php"]
<?php
echo alphaID(9007199254740989);
// Retorno: PpQXn7COf
?>
[/code]

E se usarmos o texto como argumento, definindo o segundo parâmetro como true, teremos o ID novamente:


[code language="php"]
<?php
echo alphaID('PpQXn7COf', true);
// Retorno: 9007199254740989
?>
[/code]

--

Essa função é bem legal pois além de deixar o sistema mais <strong>seguro</strong> (não é só mudar de 58 pra 57 na URL pra tentar acessar outro registro do banco) deixa o sistema mais <strong>profissional</strong> (não é todo mundo que mostra IDs textuais por aí). ;)

Espero que tenham gostado!

Não se esqueçam de assinar o [Twitter](http://twitter.com/tiutalk) para ter acesso à todas as novidades em tempo real.

