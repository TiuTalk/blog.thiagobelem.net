---
layout: post
status: publish
published: true
title: Buscando a Latitude e Longitude de um endereço – Google Maps + PHP – Parte
  1
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Veja o código de uma classe que pode ser usada para encontrar os dados de
  latitude, longitude e nível zoom de um endereço qualquer usando a API de informações
  do Google Maps! É muito simples!
wordpress_id: 548
wordpress_url: http://blog.thiagobelem.net/?p=548
date: '2009-08-31 20:27:48 -0300'
date_gmt: '2009-08-31 23:27:48 -0300'
categories:
- PHP
- Tutoriais
- APIs
tags:
- PHP
- API
- Google Maps
---
<p>Fala pessoal, hoje eu vou falar sobre uma funcionalidade que sempre tive interesse em desenvolver mas nunca parei para estudar sobre: <strong>Google Maps + PHP</strong>.</p>
<p>Vamos fazer um código que usa as <strong>APIs</strong> do Google Maps para buscar a latitude e longitude de um endereço qualquer, por exemplo: "<strong><em>Av. Brasil, 3014 - Rio de Janeiro, RJ</em></strong>".</p>
<p>É necessário saber a latitude e longitude de um endereço para exibir um mapinha do Google Maps no seu site... O que será ensinado na parte 2 desse artigo.</p>
<h3>Começando pelo começo</h3>
<p>Antes de mais nada você, meu amigo desenvolvedor, precisa de uma <strong>Google Maps API Key</strong> (<em>GMAK</em>) que é um código que te permite usar as APIs do Google Maps e te identifica perante ao Google. Para criar a sua GMAK é só entrar <a href="http://code.google.com/intl/pt-BR/apis/maps/signup.html" target="_blank">nesse endereço</a> e preencher o formulário.</p>
<p>Tendo sua GMAK em mãos, vamos ver a classe que usaremos para esse e os próximos tutoriais:</p>
<p>[code language="php"]/**<br />
 * gMaps Class<br />
 *<br />
 * Pega as informações de latitude, longitude e zoom de um endereço usando a API do Google Maps<br />
 *<br />
 * @author Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
 */<br />
class gMaps {<br />
	// Host do GoogleMaps<br />
	private $mapsHost = 'maps.google.com';<br />
	// Sua Google Maps API Key<br />
	public $mapsKey = '';</p>
<p>	function __construct($key = null) {<br />
		if (!is_null($key)) {<br />
			$this-&gt;mapsKey = $key;<br />
		}<br />
	}</p>
<p>	function carregaUrl($url) {<br />
		if (function_exists('curl_init')) {<br />
			$cURL = curl_init($url);<br />
			curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);<br />
			curl_setopt($cURL, CURLOPT_FOLLOWLOCATION, true);<br />
			$resultado = curl_exec($cURL);<br />
			curl_close($cURL);<br />
		} else {<br />
			$resultado = file_get_contents($url);<br />
		}</p>
<p>		if (!$resultado) {<br />
			return false;<br />
			//trigger_error('Não foi possível carregar o endereço: &lt;strong&gt;' . $url . '&lt;/strong&gt;');<br />
		} else {<br />
			return $resultado;<br />
		}<br />
	}</p>
<p>	function geoLocal($endereco) {<br />
		$url = 'http://'. $this-&gt;mapsHost .'/maps/geo?output=csv&amp;key='. $this-&gt;mapsKey .'&amp;q='. urlencode($endereco);<br />
		$dados = $this-&gt;carregaUrl($url);<br />
		list($status, $zoom, $latitude, $longitude) = explode(',', $dados);<br />
		if ($status != 200) {<br />
			return false;<br />
			//trigger_error('Não foi possível carregar o endereço &lt;strong&gt;&quot;'.$endereco.'&quot;&lt;/strong&gt;, código de resposta: ' . $status);<br />
		}<br />
		return array('lat' =&gt; $latitude, 'lon' =&gt; $longitude, 'zoom' =&gt; $zoom, 'endereco' =&gt; $endereco);<br />
	}<br />
}[/code]</p>
<p>O uso dela é ridiculamente simples:</p>
<p>[code language="php"]&lt;?php<br />
// Instancia a classe<br />
$gmaps = new gMaps('SUA GMAK AQUI');</p>
<p>// Pega os dados (latitude, longitude e zoom) do endereço:<br />
$endereco = 'Av. Brasil, 1453, Rio de Janeiro, RJ';<br />
$dados = $gmaps-&gt;geolocal($endereco);</p>
<p>// Exibe os dados encontrados:<br />
print_r($dados);<br />
?&gt;[/code]</p>
<p>Com isso já temos todas as informações necessárias para exibir um mapinha do GoogleMaps com o endereço marcado, o que faremos no <a href="http://blog.thiagobelem.net/html/exibindo-mapas-no-seu-site-google-maps-php-parte-2/" target="_blank">próximo tutorial</a>. :)</p>
<p><strong style="color: blue">Parte 2:</strong> <a href="http://blog.thiagobelem.net/html/exibindo-mapas-no-seu-site-google-maps-php-parte-2/" target="_blank">Exibindo mapas no seu site – Google Maps + PHP – Parte 2</a></p>
<p>Um grande abraço a todos!</p>
