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
<p>Fala gente,</p>
<p>Essa é a continuação de um tutorial da semana passada: <a href="http://blog.thiagobelem.net/php/buscando-a-latitude-e-longitude-de-um-endereco-google-maps-php-parte-1/" target="_blank">Buscando a Latitude e Longitude de um endereço – Google Maps + PHP – Parte 1</a></p>
<p>Hoje vou mostrar como você pode exibir um mapinha do <a href="http://maps.google.com/" target="_blank">Google Maps</a> no seu site, usando as informações encontradas com a <strong>Google Maps API</strong> (que usamos no outro artigo).</p>
<p>Se você ainda não tiver uma Google Maps API Key (ou GMAK) acesse esse endereço e pegue a sua: <a href="http://code.google.com/intl/pt-BR/apis/maps/signup.html" target="_blank">http://code.google.com/intl/pt-BR/apis/maps/signup.html</a></p>
<p>Agora, dentro do <strong><head></strong> do seu site, insira o seguinte código:</p>
<p>[code language="html" light="true"]<script src="http://maps.google.com/maps?file=api&v=2&key={GMAK}" type="text/javascript"></script>[/code]</p>
<p>Não se esqueça de substituir o <strong style="background: gray; color: orange">{GMAK}</strong> pela sua Google Maps API Key.</p>
<p>Agora você precisa criar um elemento HTML onde o mapa irá aparecer, exemplo:</p>
<p>[code language="html" light="true"]<div id="googleMap"></div>[/code]</p>
<p>Aí você pode definir a largura e altura dele no CSS do seu site ou até mesmo in-line... Não tem diferença.</p>
<p>Depois é só charmar esse código JavaScript, pode ser no fim da página, antes do body:</p>
<p>[code language="javascript"]	if (GBrowserIsCompatible()) {<br />
		var map = new GMap2(document.getElementById("googleMap"));<br />
		var lat = {LATITUDE}; // Latitude do marcador<br />
		var lon = {LONGITUDE}; // Longitude do marcador<br />
		var zoom = {ZOOM}; // Zoom</p>
<p>		map.addControl(new GMapTypeControl());<br />
		map.addControl(new GLargeMapControl());<br />
		map.setCenter(new GLatLng(lat, lon), zoom);</p>
<p>		var marker = new GMarker(new GLatLng(lat,lon));</p>
<p>		GEvent.addListener(marker, "click", function() {<br />
			marker.openInfoWindowHtml("<h2>Minha marca</h2><p>Meu texto!</p>");<br />
		});</p>
<p>		map.addOverlay(marker);<br />
		map.setCenter(point, zoom);<br />
	}[/code]</p>
<p>Agora é só substituir o <strong style="background: gray; color: orange">{LATITUDE}</strong>, <strong style="background: gray; color: orange">{LONGITUDE}</strong> e <strong style="background: gray; color: orange">{ZOOM}</strong> (nas linhas 3, 4 e 5) pelas informações que você conseguiu pegar usando o passo-a-passo do <a href="http://blog.thiagobelem.net/php/buscando-a-latitude-e-longitude-de-um-endereco-google-maps-php-parte-1/" target="_blank">outro artigo</a>.</p>
<p>Espero que tenham gostado! :)</p>
