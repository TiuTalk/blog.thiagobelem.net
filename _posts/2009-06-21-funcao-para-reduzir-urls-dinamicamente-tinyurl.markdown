---
layout: post
title: Função para reduzir URLs dinamicamente – TinyURL
excerpt: Aprenda a reduzir as suas URLs dinâmicamente usando uma função que, automaticamente,
  faz uma requisição ao API do TinyURL e te retorna uma URL reduzida com, mais ou
  menos, 25 caracteres!

date: '2009-06-21 19:26:10 -0300'
categories:
- PHP
- Tutoriais
- APIs
tags:
- PHP
- TinyURL API
---
Hoje estava eu aqui, sem fazer nada, e resolvi criar uma funçãozinha muito da legal que usa o API do <strong>TinyURL</strong> para converter as suas URLs.

O TinyURL faz o serviço de converter URLs gigantescas (não importa o seu tamanho) em URLs menores, de 20~25 caracteres (incluindo o http)

Ela é bem simples e a única coisa que você precisa fazer é passar a sua URL pra ela que ela vai te retornar a URL reduzida.

A vantagem de usar essa função (e não as que eu achei por aí, buscando no Google) é que ela identifica qual é o melhor método pra fazer a requisição à essa API, usando a biblioteca <strong>cURL</strong>, <strong>file_get_contents()</strong> ou <strong>fopen()</strong>+<strong>fgets()</strong>. ;D

<h3>Código da Função</h3>

{% highlight php linenos %}
<?php

/**
* Função para criar versões reduzidas das URLs
*
* @author    Thiago Belem <contato@thiagobelem.net>
*
* @param string $url O endereço a ser reduzido
* @return string A nova URL (usando o TinyURL)
*/
function tinyURL($url)
{
	define('TINYURL_API', 'http://tinyurl.com/api-create.php?url=%s');
	$requestURL = sprintf(TINYURL_API, $url);

	// Checa a existência da biblioteca cURL
	$curl = (bool) function_exists('curl_init');
	// Checa a variável allow_url_fopen no php.ini
	$allow_url = (bool) ini_get('allow_url_fopen');

	// Verifica se a biblioteca cURL existe e se não é possível usar URLs no fopen
	if ($curl AND !$allow_url) {
		// Caso exista, usa o cURL para fazer a requisição
		$ch = curl_init($requestURL);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$resultado = curl_exec($ch);
		curl_close($ch);
	// Caso não possa usar o cURL ou possa usar URLs no fopen
	} else if ($allow_url) {
		// Tenta usar o file_get_contents
		$resultado = file_get_contents($requestURL);
		// Se algo der errado, tenta com o fopen
		if (!$resultado) {
			$handle = @fopen($requestURL, "r");
			$resultado = '';
			if ($handle) while (!feof($handle)) $resultado .= fgets($handle, 4096);
		}
	// Caso não possa usar nenhum dos dois
	} else {
		// Exibe uma mensagem de erro
		trigger_error('tinyURL: Não é possível usar o cURL nem URLs com fopen!', E_USER_ERROR);
	}
	// Retorna o resultado sem espaços adicionais ou a URL original caso algo tenha dado errado
	return ((isset($resultado) AND !empty($resultado)) ? trim($resultado) : $url);
}

?>
{% endhighlight %}

<h3>Exemplo de uso <span style="color: #c0c0c0;">(se é que precisa..)</span></h3>

{% highlight php linenos %}
<?php
	echo tinyURL('http://blog.thiagobelem.net/');
	// http://tinyurl.com/kwzg4w
?>
{% endhighlight %}

Espero que tenham gostado! :)

