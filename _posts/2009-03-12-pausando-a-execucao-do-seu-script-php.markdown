---
layout: post
title: Pausando a execução do seu script PHP

date: '2009-03-12 00:14:05 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
As vezes o que queremos é que o PHP espere algum tempo antes de continuar... Pode ser medida de segurança (evitar um ataque <abbr title="Em ciência da computação, força bruta (ou busca exaustiva) é uma algoritmo trivial mas de uso muito geral que consiste em enumerar todos os possíveis candidatos de uma solução e verificar se cada um satisfaz o problema.">bruteforce</abbr>) ou criar um delay entre o envio de vários e-mails. As utilizações são várias.

Você pode criar essa pausa no script da seguinte forma:

<div data-gist-id="01ee1dbbe8509564820f" data-gist-show-loading="false"></div>

Com o usleep() você define uma pausa em milhonésimos de segundos (calcule multiplicando o nº de segundos por 1.000.000).


<div data-gist-id="29267829d1ce85a22dc2" data-gist-show-loading="false"></div>

Este é um recurso pouco conhecido do PHP mas que tem o seu valor.

Até a próxima. ;-)

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função [sleep()](http://br.php.net/sleep)</strong> » Pausa o script em segundos</li>
<li><strong>Função [usleep()](http://br.php.net/usleep)</strong> » Pausa o script em milhonésimos de segundos</li>
</ul>
