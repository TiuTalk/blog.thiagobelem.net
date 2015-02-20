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


<div data-gist-id="b4527966c38e70ea0e4f" data-gist-show-loading="false"></div>

Com essa função você tem um meio rápido de calcular o próximo dia útil de uma data no formato AAAA-MM-DD  (primeiro argumento) e retorná-la no formato que preferir (segundo argumento).

Você poderia usá-la da seguinte forma:


<div data-gist-id="88b94a17492d8e84c970" data-gist-show-loading="false"></div>

Com isso você pode fazer aquele sistema financeiro funcionar melhor e não sair cobrando as pessoas em pleno sabadão. :)

Até a próxima!

