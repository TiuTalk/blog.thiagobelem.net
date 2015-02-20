---
layout: post
title: Cadastrando múltiplos registros no MySQL ao mesmo tempo
excerpt: Aprenda a otimizar a inserção de dados em pacote/malote/grupo no MySQL...
  Veja como é mais simples rodar apenas um INSERT para todos os registros ao invés
  de rodar um INSERT para caaaaada registro e sobrecarregar o seu MySQL.

date: '2009-07-28 09:02:58 -0300'
categories:
- MySQL
- Tutoriais
- Otimização
tags:
- MySQL
- Otimização
---
Hoje vou falar sobre uma pequena mudança de código que pode significar megas e megas de dados e, conseqüentemente, de performance! :D

Suponhamos que você tenha um script que receba dados de sei lá onde e cadastre-os no MySQL, seria mais ou menos assim:


<div data-gist-id="ecf19a5651d48d36da6c" data-gist-show-loading="false"></div>

As consultas passadas para o MySQL ficariam mais ou menos assim:

<div data-gist-id="543a34cb51326f46fd83" data-gist-show-loading="false"></div>

Não tem nada de errado com o código.. Funciona perfeitamente... Faz o contador direitinho.. Mas imagine se você tem 4000 registros pra inserir na tabela... Você vai rodar 4000 <strong>mysql_query()</strong> e vai deixar o seu MySQL maluquinho!

Não seria muito melhor fazer assim:

<div data-gist-id="21c526ecee220411461c" data-gist-show-loading="false"></div>

A nossa consulta ficaria mais ou menos assim:

<div data-gist-id="c66bf703eb1e77644263" data-gist-show-loading="false"></div>

Você pode fazer isso sem problema nenhum e com apenas uma "execução de consulta" você insere os três registros de uma só vez... Não é uma maravilha? :D

