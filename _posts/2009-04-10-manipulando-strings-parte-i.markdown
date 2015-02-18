---
layout: post
title: Manipulando Strings – Parte I

date: '2009-04-10 12:13:13 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Eu diria que essa é uma das partes mais legais do PHP: brincar com as strings. São várias funções úteis para várias tarefas e por isso vou dividir a explicação delas em partes pra não ficar um post muito grande. :)</p>
<h4>Função substr()</h4>
<p>O <strong>substr()</strong> serve para você pegar apenas uma parte/pedaço/fatia da string.</p>
<p>Ele tem, normalmente, 3 argumentos: A string que será cortada (1), o início do corte (2) e o fim do corte (3).</p>
<p>Veja alguns exemplos de uso:</p>
<p>[code='php']
<?php</p>
<p>$frase = 'O rato roeu a roupa do Rei de Roma';</p>
<p>echo substr($frase, 0, 5); // 5 primeiros caracteres a partir do 0° caractere
// Retorno: O rato</p>
<p>echo substr($frase, 3, 16); // 16 primeiros caracteres a partir do 3° caractere
// Retorno: ato roeu a roupa</p>
<p>echo substr($frase, 0, -1); // Todos os caracteres, até o penúltimo, a partir do 0° caractere
// Retorno: O rato roeu a roupa do Rei de Rom</p>
<p>?>
[/code]</p>
<p>Veja a documentação oficial:
<a href="http://br.php.net/manual/pt_BR/function.substr.php" target="_blank">http://br.php.net/manual/pt_BR/function.substr.php</a></p>
<h4>Função strlen()</h4>
<p>O <strong>strlen()</strong> serve para você saber quantos caracteres uma string tem.</p>
<p>Ele só tem um argumento: A string a ser medida (1).</p>
<p>Veja alguns exemplos de uso:</p>
<p>[code='php']
<?php</p>
<p>$frase = 'O rato roeu a roupa do Rei de Roma';</p>
<p>echo strlen($frase);
// Retorno: 34</p>
<p>$frase = 'Thiago Belem';</p>
<p>echo strlen($frase);
// Retorno: 12</p>
<p>?>
[/code]</p>
<p>Veja a documentação oficial:
<a href="http://br.php.net/manual/pt_BR/function.strlen.php" target="_blank">http://br.php.net/manual/pt_BR/function.strlen.php</a></p>
<h4>Função strtolower()</h4>
<p>O <strong>strtolower()</strong> serve para você converter toda a string para caixa-baixa (minúsculas).</p>
<p>Ele só tem um argumento: A string que será convertida (1).</p>
<p>[code='php']
<?php</p>
<p>$frase = 'O RATo rOeu a rOuPa Do Rei de Roma';</p>
<p>echo strtolower($frase);
// Retorno: o rato roeu a roupa do rei de roma</p>
<p>?>
[/code]</p>
<p>Veja a documentação oficial:
<a href="http://br.php.net/manual/pt_BR/function.strtolower.php" target="_blank">http://br.php.net/manual/pt_BR/function.strtolower.php</a></p>
<h4>Função strtoupper()</h4>
<p>O <strong>strtoupper()</strong> serve para você converter toda a string para caixa-alta (maiúsculas).</p>
<p>Ele só tem um argumento: A string que será convertida (1).</p>
<p>[code='php']
<?php</p>
<p>$frase = 'O RATo rOeu a rOuPa Do Rei de Roma';</p>
<p>echo strtolower($frase);
// Retorno: O RATO ROEU A ROUPA DO REI DE ROMA</p>
<p>?>
[/code]</p>
<p>Veja a documentação oficial:
<a href="http://br.php.net/manual/pt_BR/function.strtoupper.php" target="_blank">http://br.php.net/manual/pt_BR/function.strtoupper.php</a></p>
<h4>Função ucwords()</h4>
<p>O <strong>ucwords()</strong> serve para você deixar a primeira letra de cada palavra da string em caixa-alta (maiúsculas).</p>
<p>Ele só tem um argumento: A string que será convertida (1).</p>
<p>[code='php']
<?php</p>
<p>$frase = 'jOsé da sILva fErReirA';</p>
<p>echo strtolower($frase);
// Retorno: JOsé Da SILva FErReirA</p>
<p>?>
[/code]</p>
<p>Veja a documentação oficial:
<a href="http://br.php.net/manual/pt_BR/function.ucwords.php" target="_blank">http://br.php.net/manual/pt_BR/function.ucwords.php</a></p>
<h4>Função ucfirst()</h4>
<p>O <strong>ucfirst()</strong> serve para você deixar a primeira letra de uma string em caixa-alta (maiúsculas).</p>
<p>Ele só tem um argumento: A string que será convertida (1).</p>
<p>[code='php']
<?php</p>
<p>$frase = 'jOsé da sILva fErReirA';</p>
<p>echo strtolower($frase);
// Retorno: JOsé da sILva fErReirA</p>
<p>?>
[/code]</p>
<p>Veja a documentação oficial:
<a href="http://br.php.net/manual/pt_BR/function.ucfirst.php" target="_blank">http://br.php.net/manual/pt_BR/function.ucfirst.php</a></p>
<h4>Função explode()</h4>
<p>O <strong>explode()</strong> serve para você dividir uma string, usando um separador, e criando um array com o resultado.</p>
<p>Geralmente ele tem dois argumentos: O separador (1) e a string que será convertida (2).</p>
<p>[code='php']
<?php</p>
<p>$separador = '@';</p>
<p>$frase = 'contato@thiagobelem.net';</p>
<p>$partes = explode($separador, $frase);
// $partes será um array com dois elementos:
// [0] => contato [1] => thiagobelem.net</p>
<p>// -----------------------</p>
<p>$separador = '/';</p>
<p>$frase = '10/04/2009';</p>
<p>$partes = explode($separador, $frase);
// $partes será um array com três elementos:
// [0] => 10 [1] => 04 [2] => 2009</p>
<p>// -----------------------</p>
<p>$separador = ' ';</p>
<p>$frase = 'olá mundo';</p>
<p>$partes = explode($separador, $frase);
// $partes será um array com dois elementos:
// [0] => olá [1] => mundo</p>
<p>?>
[/code]</p>
<p>Veja a documentação oficial:
<a href="http://br.php.net/manual/pt_BR/function.explode.php" target="_blank">http://br.php.net/manual/pt_BR/function.explode.php</a></p>
<h4>Função join()</h4>
<p>O <strong>join()</strong> serve para você juntar os elementos de um array usando uma string como cola/união. Ele faz o trabalho inverso do <strong>explode()</strong>.</p>
<p>Geralmente ele tem dois argumentos: A string de união (1) e o array que será unido (2).</p>
<p>[code='php']
<?php</p>
<p>$uniao = '@';</p>
<p>$partes = array('contato', 'thiagobelem.net');</p>
<p>echo join($uniao, $partes);
// Resultado: contato@thiagobelem.net</p>
<p>// -----------------------</p>
<p>$uniao = 'x';</p>
<p>$partes = array('10', '04', '2009');</p>
<p>echo join($uniao, $partes);
// Resultado: 10x04x2009</p>
<p>// -----------------------</p>
<p>$uniao = ' #@ ';</p>
<p>$partes = array('olá', 'mundo');</p>
<p>echo join($uniao, $partes);
// Resultado: olá #@ mundo</p>
<p>?>
[/code]</p>
<p>A função <strong>join()</strong> é um atalho da função <strong>implode()</strong>, ambas fazem a mesma coisa.</p>
<p>Veja a documentação oficial:
<a href="http://br.php.net/manual/pt_BR/function.implode.php" target="_blank">http://br.php.net/manual/pt_BR/function.implode.php</a></p>
<p>---</p>
<p>Espero que tenham gostado! Essas funções são muito úteis no dia-a-dia.</p>
