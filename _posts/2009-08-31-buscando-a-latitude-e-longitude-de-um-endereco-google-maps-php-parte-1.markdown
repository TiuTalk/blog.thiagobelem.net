---
layout: post
title: Buscando a Latitude e Longitude de um endereço – Google Maps + PHP – Parte
  1
excerpt: Veja o código de uma classe que pode ser usada para encontrar os dados de
  latitude, longitude e nível zoom de um endereço qualquer usando a API de informações
  do Google Maps! É muito simples!

date: '2009-08-31 20:27:48 -0300'
categories:
- PHP
- Tutoriais
- APIs
tags:
- PHP
- API
- Google Maps
---
Fala pessoal, hoje eu vou falar sobre uma funcionalidade que sempre tive interesse em desenvolver mas nunca parei para estudar sobre: <strong>Google Maps + PHP</strong>.

Vamos fazer um código que usa as <strong>APIs</strong> do Google Maps para buscar a latitude e longitude de um endereço qualquer, por exemplo: "<strong><em>Av. Brasil, 3014 - Rio de Janeiro, RJ</em></strong>".

É necessário saber a latitude e longitude de um endereço para exibir um mapinha do Google Maps no seu site... O que será ensinado na parte 2 desse artigo.

<h3>Começando pelo começo</h3>
Antes de mais nada você, meu amigo desenvolvedor, precisa de uma <strong>Google Maps API Key</strong> (<em>GMAK</em>) que é um código que te permite usar as APIs do Google Maps e te identifica perante ao Google. Para criar a sua GMAK é só entrar [nesse endereço](https://developers.google.com/maps/signup?hl=pt-br) e preencher o formulário.

Tendo sua GMAK em mãos, vamos ver a classe que usaremos para esse e os próximos tutoriais:


{% highlight php linenos %}
/**
 * gMaps Class
 *
 * Pega as informações de latitude, longitude e zoom de um endereço usando a API do Google Maps
 *
 * @author Thiago Belem <contato@thiagobelem.net>
 */
class gMaps {
  // Host do GoogleMaps
  private $mapsHost = 'maps.google.com';
  // Sua Google Maps API Key
  public $mapsKey = '';

  function __construct($key = null) {
    if (!is_null($key)) {
      $this->mapsKey = $key;
    }
  }

  function carregaUrl($url) {
    if (function_exists('curl_init')) {
      $cURL = curl_init($url);
      curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($cURL, CURLOPT_FOLLOWLOCATION, true);
      $resultado = curl_exec($cURL);
      curl_close($cURL);
    } else {
      $resultado = file_get_contents($url);
    }

    if (!$resultado) {
      return false;
      //trigger_error('Não foi possível carregar o endereço: <strong>' . $url . '</strong>');
    } else {
      return $resultado;
    }
  }

  function geoLocal($endereco) {
    $url = 'http://'. $this->mapsHost .'/maps/geo?output=csv&key='. $this->mapsKey .'&q='. urlencode($endereco);
    $dados = $this->carregaUrl($url);
    list($status, $zoom, $latitude, $longitude) = explode(',', $dados);
    if ($status != 200) {
      return false;
      //trigger_error('Não foi possível carregar o endereço <strong>"'.$endereco.'"</strong>, código de resposta: ' . $status);
    }
    return array('lat' => $latitude, 'lon' => $longitude, 'zoom' => $zoom, 'endereco' => $endereco);
  }
}
{% endhighlight %}

O uso dela é ridiculamente simples:


{% highlight php linenos %}
<?php
// Instancia a classe
$gmaps = new gMaps('SUA GMAK AQUI');

// Pega os dados (latitude, longitude e zoom) do endereço:
$endereco = 'Av. Brasil, 1453, Rio de Janeiro, RJ';
$dados = $gmaps->geolocal($endereco);

// Exibe os dados encontrados:
print_r($dados);
?>
{% endhighlight %}

Com isso já temos todas as informações necessárias para exibir um mapinha do GoogleMaps com o endereço marcado, o que faremos no [próximo tutorial](/exibindo-mapas-no-seu-site-google-maps-php-parte-2). :)

<strong style="color: blue">Parte 2:</strong> [Exibindo mapas no seu site – Google Maps + PHP – Parte 2](/exibindo-mapas-no-seu-site-google-maps-php-parte-2)

Um grande abraço a todos!

