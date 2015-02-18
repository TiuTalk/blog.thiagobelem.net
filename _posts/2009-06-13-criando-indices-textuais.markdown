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
<p>Sabe quando estamos vendo um vídeo no YouTube e olhamos o ID do vídeo no link e não vemos um ID numérico, mas vemos um id textual (feito com letras e números), mas ou menos assim: <strong><span style="color: #3366ff;">KGjTdt2AeGA</span></strong>?</p>
<p>Esse tipo de índice é muito mais amigável, pois quando temos muitos registros no banco de dados fica "feio" mostrar <strong>18713543</strong> na URL.</p>
<p>Existe uma função pronta <span style="color: #808080;">(que encontrei <a rel="nofollow" href="http://kevin.vanzonneveld.net/techblog/article/create_short_ids_with_php_like_youtube_or_tinyurl/" target="_blank">aqui</a>, criada pelo Kevin Zonneveld)</span> e que usa técnicas de encriptação para fazer o trabalho de converter números em letras e vice-e-versa.</p>
<h3>Código da função</h3>
<p>Vamos ao código da função e depois eu explico como usá-la:</p>
<p>[code='php']<br />
<?php<br />
/**<br />
* Traduz números para texto e vice-e-versa<br />
*<br />
* Traduz qualquer número (até 9007199254740992)<br />
* para uma versão menor, usando letras:<br />
* 9007199254740989 --> PpQXn7COf<br />
*<br />
* Especificando o segundo parâmetro como true temos:<br />
* PpQXn7COf --> 9007199254740989<br />
*<br />
* @author    Kevin van Zonneveld <kevin@vanzonneveld.net><br />
* @copyright 2008 Kevin van Zonneveld (http://kevin.vanzonneveld.net)<br />
* @license   http://www.opensource.org/licenses/bsd-license.php New BSD Licence<br />
* @version   SVN: Release: $Id: alphaID.inc.php 344 2009-06-10 17:43:59Z kevin $<br />
*<br />
* @param mixed   $in     String or long input to translate<br />
* @param boolean $to_num Reverses translation when true<br />
* @param mixed   $pad_up Number or boolean padds the result up to a specified length<br />
*<br />
* @return mixed string or long<br />
*/</p>
<p>function alphaID($in, $to_num = false, $pad_up = false) {<br />
// Letras que serão usadas no índice textual<br />
$index = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";<br />
$base  = strlen($index);</p>
<p>if ($to_num) {<br />
// Tradução de texto para número<br />
$in  = strrev($in);<br />
$out = 0;<br />
$len = strlen($in) - 1;<br />
for ($t = 0; $t <= $len; $t++) {<br />
$bcpow = bcpow($base, $len - $t);<br />
$out   = $out + strpos($index, substr($in, $t, 1)) * $bcpow;<br />
}</p>
<p>if (is_numeric($pad_up)) {<br />
$pad_up--;<br />
if ($pad_up > 0) {<br />
$out -= pow($base, $pad_up);<br />
}<br />
}<br />
} else {<br />
// Tradução de número para texto<br />
if (is_numeric($pad_up)) {<br />
$pad_up--;<br />
if ($pad_up > 0) {<br />
$in += pow($base, $pad_up);<br />
}<br />
}</p>
<p>$out = "";<br />
for ($t = floor(log10($in) / log10($base)); $t >= 0; $t--) {<br />
$a   = floor($in / bcpow($base, $t));<br />
$out = $out . substr($index, $a, 1);<br />
$in  = $in - ($a * bcpow($base, $t));<br />
}<br />
$out = strrev($out);<br />
}</p>
<p>return $out;<br />
}<br />
?>[/code]</p>
<p>Se você quiser, pode fazer o <a title="Download do arquivo" href="http://blog.thiagobelem.net/arquivos/2009/06/idtextual.txt" target="_blank">download do arquivo (.txt) com a função</a> (com a indentação correta).</p>
<h3>Usando a função</h3>
<p>Para usar a função é bem simples, veja a conversão de número em texto:</p>
<p>[code='php']<?php<br />
echo alphaID(9007199254740989);<br />
// Retorno: PpQXn7COf<br />
?>[/code]</p>
<p>E se usarmos o texto como argumento, definindo o segundo parâmetro como true, teremos o ID novamente:</p>
<p>[code='php']<?php<br />
echo alphaID('PpQXn7COf', true);<br />
// Retorno: 9007199254740989<br />
?>[/code]</p>
<p>--</p>
<p>Essa função é bem legal pois além de deixar o sistema mais <strong>seguro</strong> (não é só mudar de 58 pra 57 na URL pra tentar acessar outro registro do banco) deixa o sistema mais <strong>profissional</strong> (não é todo mundo que mostra IDs textuais por aí). ;)</p>
<p>Espero que tenham gostado!</p>
<p>Não se esqueçam de assinar o <a title="RSS do Blog" href="http://feeds2.feedburner.com/ThiagoBelem/Blog" target="_blank">RSS do Blog</a> e/ou me seguirem no <a title="TiuTalk Twitter" href="http://twitter.com/tiutalk" target="_blank">Twitter</a> para ter acesso à todas as novidades em tempo real.</p>
