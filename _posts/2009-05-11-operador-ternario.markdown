---
layout: post
title: Operador Ternário
excerpt: 'O operador ternário é uma versão resumida do IF onde definimos tudo na mesma
  linha: a condição, instruções para true e instruções para false. O seu uso é recomendado
  em casos de otimização de código e economia de linhas.'

date: '2009-05-11 01:15:20 -0300'
categories:
- PHP
- Artigos
tags: []
---
<p>Existe uma forma diferente de se trabalhar com condições no PHP... Se chama <strong>Operador Ternário</strong> e ele deixa o código mais resumido, e mais otimizado.</p>
<p>O seu uso consiste em agrupar, na mesma linha, a condição, os comandos para true (verdadeiro) e os comandos para false (falso).</p>
<p>Vamos ao velho exemplo de condições (if) que todo mundo já viu:</p>

[code='php']
<?php</p>
<p>$nota = 4;</p>
<p>if ($nota >= 7) {
echo "Você passou!";
} else {
echo "Você não passou!";
}</p>
<p>?>
[/code]

<p>Agora veja a versão ternária desse mesmo código:</p>

[code='php']
<?php</p>
<p>$nota = 4;</p>
<p>echo ($nota >= 7) ? "Você passou!" : "Você não passou!";</p>
<p>?>
[/code]

<p>A sintaxe do operador ternário é a seguinte:</p>
<p><span style="color: #000000;">(</span><span style="color: #ff6600;"><condição></span><span style="color: #000000;">) ? </span><span style="color: #0000ff;"><instruções para <strong>verdadeiro</strong>></span><span style="color: #000000;"> : </span><span style="color: #ff0000;"><instruções para <strong>falso</strong>></span><span style="color: #000000;">;</span></p>
<p>Veja outro exemplo de uso do operador ternário:</p>

[code='php']
<?php</p>
<p>// Atribuição de um valor padrão a uma variável</p>
<p>// Versão "padrão"
if (!isset($variavel)) {
$variavel = 'valor padrão';
} else {
$variavel = $variavel;
}</p>
<p>// Versão usando operador ternário
$variavel = (!isset($variavel)) ? 'valor padrão' : $variavel;</p>
<p>?>
[/code]

<p>Não se esqueçam de ver a <a href="http://br2.php.net/manual/pt_BR/language.operators.comparison.php" target="_blank">documentação oficial sobre operadores de comparação</a>, dentre os quais está o operador ternário.</p>
<p>Espero que tenham gostado! :)</p>
