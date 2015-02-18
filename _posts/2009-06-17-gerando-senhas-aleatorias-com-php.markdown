---
layout: post
title: Gerando senhas aleatórias com PHP
excerpt: Aprenda o passo-a-passo para criar uma função que gera senhas aleatórias
  contendo (opcionalmente) números, letras maiúsculas e minúsculas e simbolos... Do
  tamanho que você desejar. :)

date: '2009-06-17 14:39:02 -0300'
categories:
- PHP
- Tutoriais
- Segurança
tags:
- PHP
- Senhas
- Random Password
- Senhas Aleatórias
---
Hoje vou falar de um script com uma função simples, mas <strong>muito útil</strong>: gerar senhas aleatórias.

Você vai poder usar ele, por exemplo, para gerar uma senha nova quando o usuário esqueceu sua senha, ou simplesmente gerar uma senha para um cadastro onde o usuário não define a sua senha.

Vou explicar o passo-a-passo pra criar a função que permitirá uma criação personalizada de senhas contendo números, letras (minúsculas e maiúscuslas) e símbolos... Todos opcionais.

Primeiro, definimos uma função vazia com alguns parâmetros (e seus valores padrões):


[code='php']<?php

function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)
{

}

?>[/code]

Como pode ver, por padrão a senha gerada terá 8 caracteres, letras (minúsculas e maiúsculas) e números... Mas repito: todos esses parâmetros poderão ser modificados e manipulados (veremos isso depois).

Agora definimos algumas variáveis que serão usadas pela função:


[code='php']<?php

function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)
{
// Caracteres de cada tipo
$lmin = 'abcdefghijklmnopqrstuvwxyz';
$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
$num = '1234567890';
$simb = '!@#$%*-';

// Variaveis internas
$retorno = '';
$caracteres = '';
}

?>[/code]

Agora começa a brincadeira.. Vamos alimentar a variável $caracteres com todos os caracteres que poderão ser usados na senha:


[code='php']<?php

function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)
{
// Caracteres de cada tipo
$lmin = 'abcdefghijklmnopqrstuvwxyz';
$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
$num = '1234567890';
$simb = '!@#$%*-';

// Variáveis internas
$retorno = '';
$caracteres = '';

// Agrupamos todos os caracteres que poderão ser utilizados
$caracteres .= $lmin;
if ($maiusculas) $caracteres .= $lmai;
if ($numeros) $caracteres .= $num;
if ($simbolos) $caracteres .= $simb;
}

?>[/code]

Agora, pra finalizar, contamos com quantos caracteres a variável $caracteres ficou e usamos uma estrutura de repetição (<em>loop</em>) que se repetirá pra cada um dos caracteres finais da senha (variável $tamanho).

Depois é só retornar a variável contendo a senha criada:


[code='php']<?php

function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)
{
// Caracteres de cada tipo
$lmin = 'abcdefghijklmnopqrstuvwxyz';
$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
$num = '1234567890';
$simb = '!@#$%*-';

// Variáveis internas
$retorno = '';
$caracteres = '';

// Agrupamos todos os caracteres que poderão ser utilizados
$caracteres .= $lmin;
if ($maiusculas) $caracteres .= $lmai;
if ($numeros) $caracteres .= $num;
if ($simbolos) $caracteres .= $simb;

// Calculamos o total de caracteres possíveis
$len = strlen($caracteres);

for ($n = 1; $n <= $tamanho; $n++) {
// Criamos um número aleatório de 1 até $len para pegar um dos caracteres
$rand = mt_rand(1, $len);
// Concatenamos um dos caracteres na variável $retorno
$retorno .= $caracteres[$rand-1];
}

return $retorno;
}

?>[/code]

O código acima já é a função completa e pronta pra usar! :D

Veja exemplos de uso no fim do artigo.

<h3>Código final da função</h3>
Fiz também uma versão mais compacta, sem comentários e com créditos:


[code='php']<?php

/**
* Função para gerar senhas aleatórias
*
* @author    Thiago Belem <contato@thiagobelem.net>
*
* @param integer $tamanho Tamanho da senha a ser gerada
* @param boolean $maiusculas Se terá letras maiúsculas
* @param boolean $numeros Se terá números
* @param boolean $simbolos Se terá símbolos
*
* @return string A senha gerada
*/
function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)
{
$lmin = 'abcdefghijklmnopqrstuvwxyz';
$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
$num = '1234567890';
$simb = '!@#$%*-';
$retorno = '';
$caracteres = '';

$caracteres .= $lmin;
if ($maiusculas) $caracteres .= $lmai;
if ($numeros) $caracteres .= $num;
if ($simbolos) $caracteres .= $simb;

$len = strlen($caracteres);
for ($n = 1; $n <= $tamanho; $n++) {
$rand = mt_rand(1, $len);
$retorno .= $caracteres[$rand-1];
}
return $retorno;
}

?>[/code]

--

<h3>Exemplos de uso</h3>

[code='php']<?php
// Gera uma senha com 10 carecteres: letras (min e mai), números
$senha = geraSenha(10);
// gfUgF3e5m7

// Gera uma senha com 9 carecteres: letras (min e mai)
$senha = geraSenha(9, true, false);
// BJnCYupsN

// Gera uma senha com 6 carecteres: letras minúsculas e números
$senha = geraSenha(6, false, true);
// sowz0g

// Gera uma senha com 15 carecteres de números, letras e símbolos
$senha = geraSenha(15, true, true, true);
// fnwX@dGO7P0!iWM
?>[/code]

--

Essa função pode ser usada em vários tipos e sistemas e em vários casos... Se você quiser, pode modificar as variáveis que definem os caracteres de cada tipo, tirando o zero (0) e o "o" (letra), um (1) e o l (L minúsculo) e etc. para evitar conflitos visuais.

Um grande abraço e todos vocês e espero que tenham gostado! :)

