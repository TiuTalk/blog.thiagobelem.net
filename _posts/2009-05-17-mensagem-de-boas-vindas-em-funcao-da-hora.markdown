---
layout: post
title: Mensagem de boas-vindas em função da hora
excerpt: 'Aprenda a fazer uma mensagem de boas-vindas que muda em função da hora:
  "Bom dia", "Boa tarde", "Boa noite" e "Boa madrugada" :)'

date: '2009-05-17 23:59:58 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Semana passada algumas pessoas me perguntaram no MSN como poderiam fazer uma mensagem de boas-vindas em função da hora...

Isso é muito simples, veja um exemplo:


<div data-gist-id="fad33a3927104fe7aa85" data-gist-show-loading="false"></div>

Viram?

Reparem que no último caso não precisei colocar <strong><span style="color: #000000;">} else if (($hora >= 18) AND ($hora <= 24)) {</span></strong> pois, se o valor não validou nenhuma das outras condições (que foram testadas antes) essa ultima condição está implícita... Seria desperdício de código e recursos fazer mais uma verificação.

Com uma pequena seqüência de if/else if/else você consegue mudar o valor de uma variável em função da hora atual do servidor e exibir a sua mensagem de boas-vindas!

Esse também é um bom exemplo de condições múltiplas.

Espero que tenham gostado :)

