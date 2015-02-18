---
layout: post
title: Exibindo mapas no seu site – Google Maps + PHP – Parte 2
excerpt: Aprenda como é simples e rápido exibir um mapinha do Google Maps no seu site
  usando informações vindas da Google Maps API.

date: '2009-09-17 12:04:02 -0300'
categories:
- PHP
- Tutoriais
- APIs
tags:
- PHP
- API
- Google Maps
---
Fala gente,

Essa é a continuação de um tutorial da semana passada: [Buscando a Latitude e Longitude de um endereço – Google Maps + PHP – Parte 1](/buscando-a-latitude-e-longitude-de-um-endereco-google-maps-php-parte-1)

Hoje vou mostrar como você pode exibir um mapinha do [Google Maps](http://maps.google.com/) no seu site, usando as informações encontradas com a <strong>Google Maps API</strong> (que usamos no outro artigo).

Se você ainda não tiver uma Google Maps API Key (ou GMAK) acesse esse endereço e pegue a sua: [http://code.google.com/intl/pt-BR/apis/maps/signup.html](http://code.google.com/intl/pt-BR/apis/maps/signup.html)

Agora, dentro do <strong><head></strong> do seu site, insira o seguinte código:


{% highlight html linenos %}
<script src="http://maps.google.com/maps?file=api&v=2&key={GMAK}" type="text/javascript"></script>
{% endhighlight %}

Não se esqueça de substituir o <strong style="background: gray; color: orange">{GMAK}</strong> pela sua Google Maps API Key.

Agora você precisa criar um elemento HTML onde o mapa irá aparecer, exemplo:


{% highlight html linenos %}
<div id="googleMap"></div>
{% endhighlight %}

Aí você pode definir a largura e altura dele no CSS do seu site ou até mesmo in-line... Não tem diferença.

Depois é só charmar esse código JavaScript, pode ser no fim da página, antes do body:


{% highlight javascript linenos %}
	if (GBrowserIsCompatible()) {
		var map = new GMap2(document.getElementById("googleMap"));
		var lat = {LATITUDE}; // Latitude do marcador
		var lon = {LONGITUDE}; // Longitude do marcador
		var zoom = {ZOOM}; // Zoom

		map.addControl(new GMapTypeControl());
		map.addControl(new GLargeMapControl());
		map.setCenter(new GLatLng(lat, lon), zoom);

		var marker = new GMarker(new GLatLng(lat,lon));

		GEvent.addListener(marker, "click", function() {
			marker.openInfoWindowHtml("<h2>Minha marca</h2>Meu texto!
");
		});

		map.addOverlay(marker);
		map.setCenter(point, zoom);
	}
{% endhighlight %}

Agora é só substituir o <strong style="background: gray; color: orange">{LATITUDE}</strong>, <strong style="background: gray; color: orange">{LONGITUDE}</strong> e <strong style="background: gray; color: orange">{ZOOM}</strong> (nas linhas 3, 4 e 5) pelas informações que você conseguiu pegar usando o passo-a-passo do [outro artigo](/buscando-a-latitude-e-longitude-de-um-endereco-google-maps-php-parte-1).

Espero que tenham gostado! :)

