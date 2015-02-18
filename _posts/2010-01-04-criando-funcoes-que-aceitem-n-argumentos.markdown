---
layout: post
title: Criando funções que aceitem N argumentos
excerpt: Descubra como é simples criar funções que podem receber um número indeterminado
  de argumentos e, como exemplo, crie uma função que calcula a média de N números.

date: '2010-01-04 11:57:35 -0200'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Argumentos
- Funções
---
Hoje vou mostrar pra vocês como é facil criar uma função que aceite um número indeterminado de argumentos, é o mesmo caso das funções <a href="http://www.php.net/manual/pt_BR/function.min.php" target="_blank">min()</a> e <a href="http://www.php.net/manual/pt_BR/function.max.php" target="_blank">max()</a>, onde você pode passar 1, 2 ou 200 argumentos e ela irá funcionar perfeitamente.

O ponto-chave desse tipo de função é o uso de duas outras funções nativas do PHP, são elas: <a href="http://www.php.net/manual/pt_BR/function.func-num-args.php" target="_blank">func_num_args()</a> e <a href="http://www.php.net/manual/pt_BR/function.func-get-args.php" target="_blank">func_get_args()</a>.

A função <strong>func_num_args()</strong> (quando usada dentro de uma outra função) retorna o número de argumentos que foram passados para essa função. E a função <strong>func_get_args()</strong> retorna uma lista (array) com os argumentos que foram passados para essa função.

Vamos criar uma função para calcular a média de uma quantiade qualquer de números:


[code language="php"]
<?php

/**
 * Função que calcula a média de N números
 */
function media() {

}

?>
[/code]

Perceba que, na definição da função, não colocamos nada no lugar dos parâmetros/argumentos que ela necessita... Exatamente por que <strong>a quantidade de argumentos será variável</strong>.

Agora vamos pegar o total e a lista de argumentos passados para a função:


[code language="php"]
	// Total de argumentos passados
	$total = func_num_args();
	// Array com cada um dos argumentos passados
	$numeros = func_get_args();
[/code]

Feito isso, vamos precisar fazer uma verificação, só por segurança, da quantidade de argumentos passados... Não há lógica em tentar calcular a média de 0 numeros, não é mesmo?


[code language="php"]
	// Verifica se foi passado pelo menos 1 número
	if ($total < 1) {
		trigger_error('Não é possível calcular a média de menos de 1 número!');
		return 0;
	}
[/code]

E por final, caso tenha sido passado pelo menos um argumento, calculamos a somatória dos números e retornamos a média:


[code language="php"]
	} else {
		// Calcula a somatória de todos os números passados
		$soma = array_sum($numeros);
		// Retorna a média dos números
		return ($soma / $total);
	}
[/code]

No final das contas, nossa função ficou assim:


[code language="php"]
<?php

/**
 * Função que calcula a média de N números
 * @author Thiago Belem <contato@thiagobelem.net>
 */
function media() {
	// Total de argumentos passados
	$total = func_num_args();
	// Array com cada um dos argumentos passados
	$numeros = func_get_args();

	// Verifica se foi passado pelo menos 1 número
	if ($total < 1) {
		trigger_error('Não é possível calcular a média de menos de 1 número!');
		return 0;
	} else {
		// Calcula a somatória de todos os números passados
		$soma = array_sum($numeros);
		// Retorna a média dos números
		return ($soma / $total);
	}
}

?>
[/code]

O uso dela é bem simples:
[code language="php"]
<?php

echo media(2, 6, 10);
// 6

echo media(1);
// 1

echo media(1, 7, 2.1, 5.3214, 9, 10000);
// 1670.7369

?>
[/code]

Espero que tenham gostado! Até a próxima! :]

