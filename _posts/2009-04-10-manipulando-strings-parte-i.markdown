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


{% highlight text linenos %}
<?php

$frase = 'O rato roeu a roupa do Rei de Roma';

echo substr($frase, 0, 5); // 5 primeiros caracteres a partir do 0° caractere
// Retorno: O rato

echo substr($frase, 3, 16); // 16 primeiros caracteres a partir do 3° caractere
// Retorno: ato roeu a roupa

echo substr($frase, 0, -1); // Todos os caracteres, até o penúltimo, a partir do 0° caractere
// Retorno: O rato roeu a roupa do Rei de Rom

?>
{% endhighlight %}

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.substr.php](http://br.php.net/manual/pt_BR/function.substr.php)

<h4>Função strlen()</h4>
O <strong>strlen()</strong> serve para você saber quantos caracteres uma string tem.

Ele só tem um argumento: A string a ser medida (1).

Veja alguns exemplos de uso:


{% highlight text linenos %}
<?php

$frase = 'O rato roeu a roupa do Rei de Roma';

echo strlen($frase);
// Retorno: 34

$frase = 'Thiago Belem';

echo strlen($frase);
// Retorno: 12

?>
{% endhighlight %}

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.strlen.php](http://br.php.net/manual/pt_BR/function.strlen.php)

<h4>Função strtolower()</h4>
O <strong>strtolower()</strong> serve para você converter toda a string para caixa-baixa (minúsculas).

Ele só tem um argumento: A string que será convertida (1).


{% highlight text linenos %}
<?php

$frase = 'O RATo rOeu a rOuPa Do Rei de Roma';

echo strtolower($frase);
// Retorno: o rato roeu a roupa do rei de roma

?>
{% endhighlight %}

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.strtolower.php](http://br.php.net/manual/pt_BR/function.strtolower.php)

<h4>Função strtoupper()</h4>
O <strong>strtoupper()</strong> serve para você converter toda a string para caixa-alta (maiúsculas).

Ele só tem um argumento: A string que será convertida (1).


{% highlight text linenos %}
<?php

$frase = 'O RATo rOeu a rOuPa Do Rei de Roma';

echo strtolower($frase);
// Retorno: O RATO ROEU A ROUPA DO REI DE ROMA

?>
{% endhighlight %}

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.strtoupper.php](http://br.php.net/manual/pt_BR/function.strtoupper.php)

<h4>Função ucwords()</h4>
O <strong>ucwords()</strong> serve para você deixar a primeira letra de cada palavra da string em caixa-alta (maiúsculas).

Ele só tem um argumento: A string que será convertida (1).


{% highlight text linenos %}
<?php

$frase = 'jOsé da sILva fErReirA';

echo strtolower($frase);
// Retorno: JOsé Da SILva FErReirA

?>
{% endhighlight %}

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.ucwords.php](http://br.php.net/manual/pt_BR/function.ucwords.php)

<h4>Função ucfirst()</h4>
O <strong>ucfirst()</strong> serve para você deixar a primeira letra de uma string em caixa-alta (maiúsculas).

Ele só tem um argumento: A string que será convertida (1).


{% highlight text linenos %}
<?php

$frase = 'jOsé da sILva fErReirA';

echo strtolower($frase);
// Retorno: JOsé da sILva fErReirA

?>
{% endhighlight %}

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.ucfirst.php](http://br.php.net/manual/pt_BR/function.ucfirst.php)

<h4>Função explode()</h4>
O <strong>explode()</strong> serve para você dividir uma string, usando um separador, e criando um array com o resultado.

Geralmente ele tem dois argumentos: O separador (1) e a string que será convertida (2).


{% highlight text linenos %}
<?php

$separador = '@';

$frase = 'contato@thiagobelem.net';

$partes = explode($separador, $frase);
// $partes será um array com dois elementos:
// [0] => contato [1] => thiagobelem.net

// -----------------------

$separador = '/';

$frase = '10/04/2009';

$partes = explode($separador, $frase);
// $partes será um array com três elementos:
// [0] => 10 [1] => 04 [2] => 2009

// -----------------------

$separador = ' ';

$frase = 'olá mundo';

$partes = explode($separador, $frase);
// $partes será um array com dois elementos:
// [0] => olá [1] => mundo

?>
{% endhighlight %}

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.explode.php](http://br.php.net/manual/pt_BR/function.explode.php)

<h4>Função join()</h4>
O <strong>join()</strong> serve para você juntar os elementos de um array usando uma string como cola/união. Ele faz o trabalho inverso do <strong>explode()</strong>.

Geralmente ele tem dois argumentos: A string de união (1) e o array que será unido (2).


{% highlight text linenos %}
<?php

$uniao = '@';

$partes = array('contato', 'thiagobelem.net');

echo join($uniao, $partes);
// Resultado: contato@thiagobelem.net

// -----------------------

$uniao = 'x';

$partes = array('10', '04', '2009');

echo join($uniao, $partes);
// Resultado: 10x04x2009

// -----------------------

$uniao = ' #@ ';

$partes = array('olá', 'mundo');

echo join($uniao, $partes);
// Resultado: olá #@ mundo

?>
{% endhighlight %}

A função <strong>join()</strong> é um atalho da função <strong>implode()</strong>, ambas fazem a mesma coisa.

Veja a documentação oficial:
[http://br.php.net/manual/pt_BR/function.implode.php](http://br.php.net/manual/pt_BR/function.implode.php)

---

Espero que tenham gostado! Essas funções são muito úteis no dia-a-dia.

