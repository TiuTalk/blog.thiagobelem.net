---
layout: post
title: Formatando frações e casas decimais no PHP

date: '2009-04-23 22:42:25 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Essa é uma dúvida muito comum, pelo menos eu já tive esse problema várias vezes... Principalmente em sistemas financeiros.

Você já deve ter percebido que números reais (frações) usam ponto como separador de casa decimal.

A função <strong>number_format()</strong> serve exatamente para isso, veja exemplos:


[code='php']<?php

$numero = 1234.56;

// Formato brasileiro
echo number_format($numero, 2, ',', '.');
// 1.234,56

// Formato frances
echo number_format($numero, 2, ',', ' ');
// 1 234,56

$number = 1234.5678;

// Formato inglês sem separador de milhar
echo number_format($numero, 2, '.', '');
// 1234.57

?>[/code]

Podemos passar os seguintes argumentos pra ela:

<p style="padding-left: 30px;">1º - O número a ser formatado
2º - A precisão decimal (quantidade de casas decimais que serão exibidas)
3º - Separador de dezenas (opcional)
4º - Separador de milhar (opcional)

Vira como é facil?

Dêem uma olhada na <a href="http://www.php.net/manual/pt_BR/function.number-format.php" target="_blank">documentação oficial</a> para tirar qualquer dúvida e não se esqueçam de deixar o seu comentário.

