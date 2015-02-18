---
layout: post
status: publish
published: true
title: Função para reduzir URLs dinamicamente – TinyURL
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aprenda a reduzir as suas URLs dinâmicamente usando uma função que, automaticamente,
  faz uma requisição ao API do TinyURL e te retorna uma URL reduzida com, mais ou
  menos, 25 caracteres!
wordpress_id: 539
wordpress_url: http://blog.thiagobelem.net/?p=539
date: '2009-06-21 19:26:10 -0300'
date_gmt: '2009-06-21 22:26:10 -0300'
categories:
- PHP
- Tutoriais
- APIs
tags:
- PHP
- TinyURL API
---
<p>Hoje estava eu aqui, sem fazer nada, e resolvi criar uma funçãozinha muito da legal que usa o API do <strong>TinyURL</strong> para converter as suas URLs.</p>
<p>O TinyURL faz o serviço de converter URLs gigantescas (não importa o seu tamanho) em URLs menores, de 20~25 caracteres (incluindo o http)</p>
<p>Ela é bem simples e a única coisa que você precisa fazer é passar a sua URL pra ela que ela vai te retornar a URL reduzida.</p>
<p>A vantagem de usar essa função (e não as que eu achei por aí, buscando no Google) é que ela identifica qual é o melhor método pra fazer a requisição à essa API, usando a biblioteca <strong>cURL</strong>, <strong>file_get_contents()</strong> ou <strong>fopen()</strong>+<strong>fgets()</strong>. ;D</p>
<h3>Código da Função</h3>
<p>[code lang="php"]&lt;?php</p>
<p>/**<br />
* Função para criar versões reduzidas das URLs<br />
*<br />
* @author    Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
*<br />
* @param string $url O endereço a ser reduzido<br />
* @return string A nova URL (usando o TinyURL)<br />
*/<br />
function tinyURL($url)<br />
{<br />
	define('TINYURL_API', 'http://tinyurl.com/api-create.php?url=%s');<br />
	$requestURL = sprintf(TINYURL_API, $url);</p>
<p>	// Checa a existência da biblioteca cURL<br />
	$curl = (bool) function_exists('curl_init');<br />
	// Checa a variável allow_url_fopen no php.ini<br />
	$allow_url = (bool) ini_get('allow_url_fopen');</p>
<p>	// Verifica se a biblioteca cURL existe e se não é possível usar URLs no fopen<br />
	if ($curl AND !$allow_url) {<br />
		// Caso exista, usa o cURL para fazer a requisição<br />
		$ch = curl_init($requestURL);<br />
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);<br />
		$resultado = curl_exec($ch);<br />
		curl_close($ch);<br />
	// Caso não possa usar o cURL ou possa usar URLs no fopen<br />
	} else if ($allow_url) {<br />
		// Tenta usar o file_get_contents<br />
		$resultado = file_get_contents($requestURL);<br />
		// Se algo der errado, tenta com o fopen<br />
		if (!$resultado) {<br />
			$handle = @fopen($requestURL, &quot;r&quot;);<br />
			$resultado = '';<br />
			if ($handle) while (!feof($handle)) $resultado .= fgets($handle, 4096);<br />
		}<br />
	// Caso não possa usar nenhum dos dois<br />
	} else {<br />
		// Exibe uma mensagem de erro<br />
		trigger_error('tinyURL: Não é possível usar o cURL nem URLs com fopen!', E_USER_ERROR);<br />
	}<br />
	// Retorna o resultado sem espaços adicionais ou a URL original caso algo tenha dado errado<br />
	return ((isset($resultado) AND !empty($resultado)) ? trim($resultado) : $url);<br />
}</p>
<p>?&gt;[/code]</p>
<h3>Exemplo de uso <span style="color: #c0c0c0;">(se é que precisa..)</span></h3>
<p>[code lang="php"]<br />
&lt;?php<br />
	echo tinyURL('http://blog.thiagobelem.net/');<br />
	// http://tinyurl.com/kwzg4w<br />
?&gt;<br />
[/code]</p>
<p>Espero que tenham gostado! :)</p>
