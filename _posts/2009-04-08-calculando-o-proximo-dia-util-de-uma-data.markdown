---
layout: post
title: Calculando o próximo dia útil de uma data

date: '2009-04-08 20:30:40 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Opa opa!

Hoje vou ajudar vocês a criar uma funçãozinha que calcula o próximo dia útil de uma data caso ela caia em um fim de semana...

A lógica do algoritmo dessa função é bem simples:

<p style="padding-left: 30px;"><span style="color: #000000;"><strong>Algoritmo de calculo do próximo dia útil de uma data</strong>
Recebe a data;
Se (a data for sábado ou domingo) então
</span><span style="color: #ffffff;">......</span><span style="color: #000000;">Retorne a próxima segunda-feira;
Senão
</span><span style="color: #ffffff;">......</span><span style="color: #000000;">Retorne a data;
FimSe
Fim</span>

Quando passamos isso pro PHP podemos fazer de uma forma bem simples:


{% highlight php linenos %}
<?php

/**
* Função para calcular o próximo dia útil de uma data
* Formato de entrada da $data: AAAA-MM-DD
*/
function proximoDiaUtil($data, $saida = 'd/m/Y') {
// Converte $data em um UNIX TIMESTAMP
$timestamp = strtotime($data);

// Calcula qual o dia da semana de $data
// O resultado será um valor numérico:
// 1 -> Segunda ... 7 -> Domingo
$dia = date('N', $timestamp);

// Se for sábado (6) ou domingo (7), calcula a próxima segunda-feira
if ($dia >= 6) {
$timestamp_final = $timestamp + ((8 - $dia) * 3600 * 24);
} else {
// Não é sábado nem domingo, mantém a data de entrada
$timestamp_final = $timestamp;
}

return date($saida, $timestamp_final);
}

?>
{% endhighlight %}

Com essa função você tem um meio rápido de calcular o próximo dia útil de uma data no formato AAAA-MM-DD  (primeiro argumento) e retorná-la no formato que preferir (segundo argumento).

Você poderia usá-la da seguinte forma:


{% highlight php linenos %}
<?php
// Dia 05 de abril de 2009 é um domingo
$data = '2009-04-05';

// Calcula o próximo dia útil
$data_final = proximoDiaUtil($data);
// Resultado: 06/04/2009

// Calcula o próximo dia útil usando uma formatação de saída
$data_final = proximoDiaUtil($data, 'Y-m-d');
// Resultado: 2009-04-06

// Dia 08 de abril de 2009 é uma quarta-feira
$data = '2009-04-08';

// Calcula o próximo dia útil
$data_final = proximoDiaUtil($data);
// Resultado: 08/04/2009
?>
{% endhighlight %}

Com isso você pode fazer aquele sistema financeiro funcionar melhor e não sair cobrando as pessoas em pleno sabadão. :)

Até a próxima!

