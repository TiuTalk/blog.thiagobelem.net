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


<div data-gist-id="c9337c488d2e3ca4d5a6" data-gist-show-loading="false"></div>

O uso dela é ridiculamente simples:


<div data-gist-id="5056a2be01ff08b26a23" data-gist-show-loading="false"></div>

Com isso já temos todas as informações necessárias para exibir um mapinha do GoogleMaps com o endereço marcado, o que faremos no [próximo tutorial](/exibindo-mapas-no-seu-site-google-maps-php-parte-2). :)

<strong style="color: blue">Parte 2:</strong> [Exibindo mapas no seu site – Google Maps + PHP – Parte 2](/exibindo-mapas-no-seu-site-google-maps-php-parte-2)

Um grande abraço a todos!

