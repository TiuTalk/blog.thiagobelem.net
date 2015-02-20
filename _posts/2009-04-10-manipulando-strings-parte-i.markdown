---
layout: post
title: Manipulando Strings – Parte I

date: '2009-04-10 12:13:13 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Eu diria que essa é uma das partes mais legais do PHP: brincar com as strings. São várias funções úteis para várias tarefas e por isso vou dividir a explicação delas em partes pra não ficar um post muito grande. :)

<h4>Função substr()</h4>
O <strong>substr()</strong> serve para você pegar apenas uma parte/pedaço/fatia da string.

Ele tem, normalmente, 3 argumentos: A string que será cortada (1), o início do corte (2) e o fim do corte (3).

Veja alguns exemplos de uso:


<div data-gist-id="9417b1cf6744328fe589" data-gist-show-loading="false"></div>

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.substr.php](http://br.php.net/manual/pt_BR/function.substr.php)

<h4>Função strlen()</h4>
O <strong>strlen()</strong> serve para você saber quantos caracteres uma string tem.

Ele só tem um argumento: A string a ser medida (1).

Veja alguns exemplos de uso:


<div data-gist-id="b6e678fb8bbfca103fb2" data-gist-show-loading="false"></div>

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.strlen.php](http://br.php.net/manual/pt_BR/function.strlen.php)

<h4>Função strtolower()</h4>
O <strong>strtolower()</strong> serve para você converter toda a string para caixa-baixa (minúsculas).

Ele só tem um argumento: A string que será convertida (1).


<div data-gist-id="3bbd5eb227ae1a29961c" data-gist-show-loading="false"></div>

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.strtolower.php](http://br.php.net/manual/pt_BR/function.strtolower.php)

<h4>Função strtoupper()</h4>
O <strong>strtoupper()</strong> serve para você converter toda a string para caixa-alta (maiúsculas).

Ele só tem um argumento: A string que será convertida (1).


<div data-gist-id="5ef1abb9e2216f867c80" data-gist-show-loading="false"></div>

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.strtoupper.php](http://br.php.net/manual/pt_BR/function.strtoupper.php)

<h4>Função ucwords()</h4>
O <strong>ucwords()</strong> serve para você deixar a primeira letra de cada palavra da string em caixa-alta (maiúsculas).

Ele só tem um argumento: A string que será convertida (1).


<div data-gist-id="7b111b88d1f1f273210d" data-gist-show-loading="false"></div>

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.ucwords.php](http://br.php.net/manual/pt_BR/function.ucwords.php)

<h4>Função ucfirst()</h4>
O <strong>ucfirst()</strong> serve para você deixar a primeira letra de uma string em caixa-alta (maiúsculas).

Ele só tem um argumento: A string que será convertida (1).


<div data-gist-id="2654f5a7dbd4d0e6d6f9" data-gist-show-loading="false"></div>

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.ucfirst.php](http://br.php.net/manual/pt_BR/function.ucfirst.php)

<h4>Função explode()</h4>
O <strong>explode()</strong> serve para você dividir uma string, usando um separador, e criando um array com o resultado.

Geralmente ele tem dois argumentos: O separador (1) e a string que será convertida (2).


<div data-gist-id="d31fec1ae58ef3be3c65" data-gist-show-loading="false"></div>

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.explode.php](http://br.php.net/manual/pt_BR/function.explode.php)

<h4>Função join()</h4>
O <strong>join()</strong> serve para você juntar os elementos de um array usando uma string como cola/união. Ele faz o trabalho inverso do <strong>explode()</strong>.

Geralmente ele tem dois argumentos: A string de união (1) e o array que será unido (2).


<div data-gist-id="3e9c590c100a2138e720" data-gist-show-loading="false"></div>

A função <strong>join()</strong> é um atalho da função <strong>implode()</strong>, ambas fazem a mesma coisa.

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.implode.php](http://br.php.net/manual/pt_BR/function.implode.php)

---

Espero que tenham gostado! Essas funções são muito úteis no dia-a-dia.

