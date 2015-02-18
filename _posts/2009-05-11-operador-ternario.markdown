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
Existe uma forma diferente de se trabalhar com condições no PHP... Se chama <strong>Operador Ternário</strong> e ele deixa o código mais resumido, e mais otimizado.

O seu uso consiste em agrupar, na mesma linha, a condição, os comandos para true (verdadeiro) e os comandos para false (falso).

Vamos ao velho exemplo de condições (if) que todo mundo já viu:


[code language="php"]
<?php

$nota = 4;

if ($nota >= 7) {
echo "Você passou!";
} else {
echo "Você não passou!";
}

?>
[/code]

Agora veja a versão ternária desse mesmo código:


[code language="php"]
<?php

$nota = 4;

echo ($nota >= 7) ? "Você passou!" : "Você não passou!";

?>
[/code]

A sintaxe do operador ternário é a seguinte:

<span style="color: #000000;">(</span><span style="color: #ff6600;"><condição></span><span style="color: #000000;">) ? </span><span style="color: #0000ff;"><instruções para <strong>verdadeiro</strong>></span><span style="color: #000000;"> : </span><span style="color: #ff0000;"><instruções para <strong>falso</strong>></span><span style="color: #000000;">;</span>

Veja outro exemplo de uso do operador ternário:


[code language="php"]
<?php

// Atribuição de um valor padrão a uma variável

// Versão "padrão"
if (!isset($variavel)) {
$variavel = 'valor padrão';
} else {
$variavel = $variavel;
}

// Versão usando operador ternário
$variavel = (!isset($variavel)) ? 'valor padrão' : $variavel;

?>
[/code]

Não se esqueçam de ver a [documentação oficial sobre operadores de comparação](http://br2.php.net/manual/pt_BR/language.operators.comparison.php), dentre os quais está o operador ternário.

Espero que tenham gostado! :)

