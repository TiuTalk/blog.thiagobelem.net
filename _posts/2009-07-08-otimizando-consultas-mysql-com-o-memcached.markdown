---
layout: post
title: Otimizando consultas MySQL com o Memcached
excerpt: Aprenda a usar o Memcached para otimizar as suas consultas ao MySQL e deixar
  o seu site muito mais rápido, usando a memória virtual do seu servidor para reduzir
  a sobre-carga no banco de dados.

date: '2009-07-08 01:26:15 -0300'
categories:
- PHP
- MySQL
- Otimização
tags:
- PHP
- MySQL
- Memcached
---
Reparei que muita gente tem procurado sobre <strong>otimização</strong> de sites e <strong>segurança</strong>, então vou tentar focar sobre esses dois assuntos essa semana.

Hoje falarei sobre o <strong>Memcached</strong>, um recurso indispensável para servidores que rodam sites pesados. A funcionalidade principal dele consiste em armazenar "qualquer coisa" na memória (RAM) do servidor para uso posterior. Segundo o site do próprio, ele é "um sistema distribuído de alto desempenho para o <strong>cacheamento</strong> (armazenamento) de objetos na memória, genérico por natureza, mas feito para aumentar a velocidade de sites dinâmicos, diminuindo a carga sobre o banco de dados".

<h3>Quando usar o Memcache?</h3>
Suponhamos que você tenha um site que faz várias e várias consultas ao MySQL para exibir uma página e, algumas delas, demoram mais de 1 seguro para ser executada... Isso significa que o seu site não está otimizado e, obviamente, está mais lento do que poderia ser.

A maioria dos servidores - de qualidade - hoje em dia, já vêm com ele instalado... Caso você precise instalar ele no seu, recomendo dar uma olhada no [site oficial](http://www.danga.com/memcached/) para maiores detalhes.

Vou mostrar pra vocês como armazenar uma consulta na memória e depois pegar esses dados, sem precisar executar a <em>query</em> novamente... Vale lembrar que só vale a pena usar o Memcached para consultas que pesam no seu sistema, pois foi pra esse propósito que ele foi feito.

<h3>Consulta simples</h3>
Normalmente você faria uma consulta assim:

<div data-gist-id="827ccb248a23eef5aeaf" data-gist-show-loading="false"></div>

É uma consulta normal que, nesse exemplo, não deve pesar muito... Mas imaginemos que essa consulta demore uns 2~3 segundos para ser executada.

<h3>Armazenando o resultado na memória com o Memcached</h3>
Este exemplo irá armazenar o resultado da consulta na memória, durante 1 hora... No próximo bloco mostrarei como verificar se há um resultado armazenado na memória antes de executar a consulta novamente.

<div data-gist-id="738493570ce4fb32b4d5" data-gist-show-loading="false"></div>

<h3>Consulta otimizada com o Memcached</h3>
Agora que já sabemos como armazenar o resultado na memória, podemos fazer uma verificação e só executar a consulta sempre que o resultado expirar ou não existir, dessa forma:

<div data-gist-id="e3a061bbe05ec7831c46" data-gist-show-loading="false"></div>


<h3>Função de atalho para o Memcache</h3>
Você ainda poderia fazer uma função para fazer todo esse trabalho por você... Ficaria mais ou menos assim:


<div data-gist-id="71e679ad7263d3abeddc" data-gist-show-loading="false"></div>

E agora, o exemplo anterior usando a função:

<div data-gist-id="9ce8b2471f5144267b11" data-gist-show-loading="false"></div>

--

Espero que tenham gostado! :)

