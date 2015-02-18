---
layout: post
title: Calculando datas no futuro ou passado com o PHP

date: '2009-03-24 05:16:31 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Eu estava lendo o meu último post que fala <a href="http://blog.thiagobelem.net/php/calculando-a-diferenca-em-dias-entre-duas-datas/" target="_parent">como calcular a diferença (em dias) entre duas datas</a> e lembrei que outra coisa muito necessitada por ai é calcular uma data <strong>no futuro</strong> (ou passado) em função de um número X de dias, horas ou meses por exemplo.</p>
<p>Suponhamos que você queira saber com precisão que dia será daqui... 28 dias. Você pode usar a poderosa função srttotime() do PHP e conseguir fazer isso com facilidade, veja:</p>
<p>[code language="php"]<br />
<?php<br />
/*<br />
* Calculando datas no futuro com o PHP<br />
* http://blog.thiagobelem.net/<br />
*/</p>
<p>// Calcula a data daqui 3 dias<br />
$timestamp = strtotime("+3 days");<br />
// Exibe o resultado<br />
echo date('d/m/Y H:i', $timestamp); // 27/03/2009 05:02</p>
<p>echo "<br />";</p>
<p>// Calcula uma data daqui 8 dias e 1 mês<br />
$timestamp = strtotime("+1 month 8 days");<br />
// Exibe o resultado<br />
echo date('d/m/Y H:i', $timestamp); // 04/05/2009 05:02</p>
<p>echo "<br />";</p>
<p>// Calcula uma data daqui 1 hora<br />
$timestamp = strtotime("+1 hour");<br />
// Exibe o resultado<br />
echo date('d/m/Y H:i', $timestamp); // 24/03/2009 06:02</p>
<p>?><br />
[/code]</p>
<p>Nesse exemplo todas as datas serão calculadas a partir da data atual... Mas e se você quiser fazer esse calculo baseado em uma data do banco de dados (no formato MySQL)? Você pode fazer assim:</p>
<p>[code language="php"]<br />
<?php<br />
/*<br />
* Calculando datas no futuro com o PHP a partir de datas definidas<br />
* http://blog.thiagobelem.net/<br />
*/</p>
<p>// Pega a data que está salva no banco de dados<br />
$data = '2009-05-20 06:34:00';</p>
<p>// Calcula a data daqui 3 dias<br />
$timestamp = strtotime($data . "+3 days");<br />
 // O valor passado para o strtotime() seria: 2009-05-20 06:34:00 +3 days</p>
<p>// Exibe o resultado<br />
echo date('d/m/Y H:i', $timestamp); // 23/05/2009 06:34</p>
<p>echo "<br />";</p>
<p>// Calcula uma data daqui 2 dias e 2 mêses<br />
$timestamp = strtotime($data . "+2 months 2 days");<br />
// Exibe o resultado<br />
echo date('d/m/Y H:i', $timestamp); // 22/07/2009 06:34</p>
<p>echo "<br />";</p>
<p>// Calcula uma data daqui 1 hora<br />
$timestamp = strtotime($data . "+1 hour");<br />
// Exibe o resultado<br />
echo date('d/m/Y H:i', $timestamp); // 20/05/2009 07:34</p>
<p>?><br />
[/code]</p>
<p>Dessa forma você também pode calcular datas no passado só trocando o sinal de <strong>mais </strong>por <strong>menos</strong>.</p>
<p>Espero que tenham gostado e que usem o que aprenderam aqui.</p>
<p>Até mais ver! :)</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função <a href="http://br.php.net/strtotime" target="_blank">strtotime()</a></strong> » Calcula um timestamp baseando-se em uma string</li>
</ul>
