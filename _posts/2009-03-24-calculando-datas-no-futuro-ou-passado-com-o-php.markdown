---
layout: post
title: Calculando datas no futuro ou passado com o PHP

date: '2009-03-24 05:16:31 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Eu estava lendo o meu último post que fala [como calcular a diferença (em dias) entre duas datas](/calculando-a-diferenca-em-dias-entre-duas-datas) e lembrei que outra coisa muito necessitada por ai é calcular uma data <strong>no futuro</strong> (ou passado) em função de um número X de dias, horas ou meses por exemplo.

Suponhamos que você queira saber com precisão que dia será daqui... 28 dias. Você pode usar a poderosa função srttotime() do PHP e conseguir fazer isso com facilidade, veja:


<div data-gist-id="665356a0b90f76252b31" data-gist-show-loading="false"></div>

Nesse exemplo todas as datas serão calculadas a partir da data atual... Mas e se você quiser fazer esse calculo baseado em uma data do banco de dados (no formato MySQL)? Você pode fazer assim:


<div data-gist-id="a5affc015ed042edad13" data-gist-show-loading="false"></div>

Dessa forma você também pode calcular datas no passado só trocando o sinal de <strong>mais </strong>por <strong>menos</strong>.

Espero que tenham gostado e que usem o que aprenderam aqui.

Até mais ver! :)

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função [strtotime()](http://br.php.net/strtotime)</strong> » Calcula um timestamp baseando-se em uma string</li>
</ul>
