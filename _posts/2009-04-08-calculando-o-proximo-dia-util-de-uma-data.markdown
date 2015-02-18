---
layout: post
title: Calculando o próximo dia útil de uma data

date: '2009-04-08 20:30:40 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Opa opa!</p>
<p>Hoje vou ajudar vocês a criar uma funçãozinha que calcula o próximo dia útil de uma data caso ela caia em um fim de semana...</p>
<p>A lógica do algoritmo dessa função é bem simples:</p>
<p style="padding-left: 30px;"><span style="color: #000000;"><strong>Algoritmo de calculo do próximo dia útil de uma data</strong><br />
Recebe a data;<br />
Se (a data for sábado ou domingo) então<br />
</span><span style="color: #ffffff;">......</span><span style="color: #000000;">Retorne a próxima segunda-feira;<br />
Senão<br />
</span><span style="color: #ffffff;">......</span><span style="color: #000000;">Retorne a data;<br />
FimSe<br />
Fim</span></p>
<p>Quando passamos isso pro PHP podemos fazer de uma forma bem simples:</p>
<p>[code='php']<br />
<?php</p>
<p>/**<br />
* Função para calcular o próximo dia útil de uma data<br />
* Formato de entrada da $data: AAAA-MM-DD<br />
*/<br />
function proximoDiaUtil($data, $saida = 'd/m/Y') {<br />
// Converte $data em um UNIX TIMESTAMP<br />
$timestamp = strtotime($data);</p>
<p>// Calcula qual o dia da semana de $data<br />
// O resultado será um valor numérico:<br />
// 1 -> Segunda ... 7 -> Domingo<br />
$dia = date('N', $timestamp);</p>
<p>// Se for sábado (6) ou domingo (7), calcula a próxima segunda-feira<br />
if ($dia >= 6) {<br />
$timestamp_final = $timestamp + ((8 - $dia) * 3600 * 24);<br />
} else {<br />
// Não é sábado nem domingo, mantém a data de entrada<br />
$timestamp_final = $timestamp;<br />
}</p>
<p>return date($saida, $timestamp_final);<br />
}</p>
<p>?><br />
[/code]</p>
<p>Com essa função você tem um meio rápido de calcular o próximo dia útil de uma data no formato AAAA-MM-DD  (primeiro argumento) e retorná-la no formato que preferir (segundo argumento).</p>
<p>Você poderia usá-la da seguinte forma:</p>
<p>[code='php']<br />
<?php<br />
// Dia 05 de abril de 2009 é um domingo<br />
$data = '2009-04-05';</p>
<p>// Calcula o próximo dia útil<br />
$data_final = proximoDiaUtil($data);<br />
// Resultado: 06/04/2009</p>
<p>// Calcula o próximo dia útil usando uma formatação de saída<br />
$data_final = proximoDiaUtil($data, 'Y-m-d');<br />
// Resultado: 2009-04-06</p>
<p>// Dia 08 de abril de 2009 é uma quarta-feira<br />
$data = '2009-04-08';</p>
<p>// Calcula o próximo dia útil<br />
$data_final = proximoDiaUtil($data);<br />
// Resultado: 08/04/2009<br />
?><br />
[/code]</p>
<p>Com isso você pode fazer aquele sistema financeiro funcionar melhor e não sair cobrando as pessoas em pleno sabadão. :)</p>
<p>Até a próxima!</p>
