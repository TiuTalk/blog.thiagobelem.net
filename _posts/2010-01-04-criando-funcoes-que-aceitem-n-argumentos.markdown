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
Hoje vou mostrar pra vocês como é facil criar uma função que aceite um número indeterminado de argumentos, é o mesmo caso das funções [max()](http://www.php.net/manual/pt_BR/function.max.php), onde você pode passar 1, 2 ou 200 argumentos e ela irá funcionar perfeitamente.

O ponto-chave desse tipo de função é o uso de duas outras funções nativas do PHP, são elas: [func_get_args()](http://www.php.net/manual/pt_BR/function.func-get-args.php).

A função <strong>func_num_args()</strong> (quando usada dentro de uma outra função) retorna o número de argumentos que foram passados para essa função. E a função <strong>func_get_args()</strong> retorna uma lista (array) com os argumentos que foram passados para essa função.

Vamos criar uma função para calcular a média de uma quantiade qualquer de números:


{% highlight php linenos %}
<?php

/**
 * Função que calcula a média de N números
 */
function media() {

}

?>
{% endhighlight %}

Perceba que, na definição da função, não colocamos nada no lugar dos parâmetros/argumentos que ela necessita... Exatamente por que <strong>a quantidade de argumentos será variável</strong>.

Agora vamos pegar o total e a lista de argumentos passados para a função:


{% highlight php linenos %}
	// Total de argumentos passados
	$total = func_num_args();
	// Array com cada um dos argumentos passados
	$numeros = func_get_args();
{% endhighlight %}

Feito isso, vamos precisar fazer uma verificação, só por segurança, da quantidade de argumentos passados... Não há lógica em tentar calcular a média de 0 numeros, não é mesmo?


{% highlight php linenos %}
	// Verifica se foi passado pelo menos 1 número
	if ($total < 1) {
		trigger_error('Não é possível calcular a média de menos de 1 número!');
		return 0;
	}
{% endhighlight %}

E por final, caso tenha sido passado pelo menos um argumento, calculamos a somatória dos números e retornamos a média:


{% highlight php linenos %}
	} else {
		// Calcula a somatória de todos os números passados
		$soma = array_sum($numeros);
		// Retorna a média dos números
		return ($soma / $total);
	}
{% endhighlight %}

No final das contas, nossa função ficou assim:


{% highlight php linenos %}
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
{% endhighlight %}

O uso dela é bem simples:
{% highlight php linenos %}
<?php

echo media(2, 6, 10);
// 6

echo media(1);
// 1

echo media(1, 7, 2.1, 5.3214, 9, 10000);
// 1670.7369

?>
{% endhighlight %}

Espero que tenham gostado! Até a próxima! :]

