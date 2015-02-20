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

<div data-gist-id="de5259e13a2e9c42528e" data-gist-show-loading="false"></div>

<h3>Exemplo de uso <span style="color: #c0c0c0;">(se é que precisa..)</span></h3>

<div data-gist-id="3ee6e5a670ac1b3473e8" data-gist-show-loading="false"></div>

Espero que tenham gostado! :)

