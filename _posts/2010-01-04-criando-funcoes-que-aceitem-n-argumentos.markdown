---
layout: post
status: publish
published: true
title: Criando funções que aceitem N argumentos
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Descubra como é simples criar funções que podem receber um número indeterminado
  de argumentos e, como exemplo, crie uma função que calcula a média de N números.
wordpress_id: 668
wordpress_url: http://blog.thiagobelem.net/?p=668
date: '2010-01-04 11:57:35 -0200'
date_gmt: '2010-01-04 13:57:35 -0200'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Argumentos
- Funções
---
<p>Hoje vou mostrar pra vocês como é facil criar uma função que aceite um número indeterminado de argumentos, é o mesmo caso das funções <a href="http://www.php.net/manual/pt_BR/function.min.php" target="_blank">min()</a> e <a href="http://www.php.net/manual/pt_BR/function.max.php" target="_blank">max()</a>, onde você pode passar 1, 2 ou 200 argumentos e ela irá funcionar perfeitamente.</p>
<p>O ponto-chave desse tipo de função é o uso de duas outras funções nativas do PHP, são elas: <a href="http://www.php.net/manual/pt_BR/function.func-num-args.php" target="_blank">func_num_args()</a> e <a href="http://www.php.net/manual/pt_BR/function.func-get-args.php" target="_blank">func_get_args()</a>.</p>
<p>A função <strong>func_num_args()</strong> (quando usada dentro de uma outra função) retorna o número de argumentos que foram passados para essa função. E a função <strong>func_get_args()</strong> retorna uma lista (array) com os argumentos que foram passados para essa função.</p>
<p>Vamos criar uma função para calcular a média de uma quantiade qualquer de números:</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>/**<br />
 * Função que calcula a média de N números<br />
 */<br />
function media() {</p>
<p>}</p>
<p>?&gt;<br />
[/code]</p>
<p>Perceba que, na definição da função, não colocamos nada no lugar dos parâmetros/argumentos que ela necessita... Exatamente por que <strong>a quantidade de argumentos será variável</strong>.</p>
<p>Agora vamos pegar o total e a lista de argumentos passados para a função:</p>
<p>[code language="php" firstline="7"]<br />
	// Total de argumentos passados<br />
	$total = func_num_args();<br />
	// Array com cada um dos argumentos passados<br />
	$numeros = func_get_args();<br />
[/code]</p>
<p>Feito isso, vamos precisar fazer uma verificação, só por segurança, da quantidade de argumentos passados... Não há lógica em tentar calcular a média de 0 numeros, não é mesmo?</p>
<p>[code language="php" firstline="12"]<br />
	// Verifica se foi passado pelo menos 1 número<br />
	if ($total &lt; 1) {<br />
		trigger_error('Não é possível calcular a média de menos de 1 número!');<br />
		return 0;<br />
	}<br />
[/code]</p>
<p>E por final, caso tenha sido passado pelo menos um argumento, calculamos a somatória dos números e retornamos a média:</p>
<p>[code language="php" firstline="16"]<br />
	} else {<br />
		// Calcula a somatória de todos os números passados<br />
		$soma = array_sum($numeros);<br />
		// Retorna a média dos números<br />
		return ($soma / $total);<br />
	}<br />
[/code]</p>
<p>No final das contas, nossa função ficou assim:</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>/**<br />
 * Função que calcula a média de N números<br />
 * @author Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
 */<br />
function media() {<br />
	// Total de argumentos passados<br />
	$total = func_num_args();<br />
	// Array com cada um dos argumentos passados<br />
	$numeros = func_get_args();</p>
<p>	// Verifica se foi passado pelo menos 1 número<br />
	if ($total &lt; 1) {<br />
		trigger_error('Não é possível calcular a média de menos de 1 número!');<br />
		return 0;<br />
	} else {<br />
		// Calcula a somatória de todos os números passados<br />
		$soma = array_sum($numeros);<br />
		// Retorna a média dos números<br />
		return ($soma / $total);<br />
	}<br />
}</p>
<p>?&gt;<br />
[/code]</p>
<p>O uso dela é bem simples:<br />
[code language="php"]<br />
&lt;?php</p>
<p>echo media(2, 6, 10);<br />
// 6</p>
<p>echo media(1);<br />
// 1</p>
<p>echo media(1, 7, 2.1, 5.3214, 9, 10000);<br />
// 1670.7369</p>
<p>?&gt;<br />
[/code]</p>
<p>Espero que tenham gostado! Até a próxima! :]</p>
