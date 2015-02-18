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

{% highlight php linenos %}
// Exibe a hora atual
echo date('H:i:s'); // 16:12:16

// Pausa o script por três segundos:
sleep(3);

// Exibe a hora atual
echo date('H:i:s'); // 16:12:19
{% endhighlight %}

Com o usleep() você define uma pausa em milhonésimos de segundos (calcule multiplicando o nº de segundos por 1.000.000).


{% highlight php linenos %}
// Exibe a hora atual
echo date('H:i:s'); // 16:13:16

// Pausa o script por cinco segundos usando o usleep:
usleep(5000000);

// Exibe a hora atual
echo date('H:i:s'); // 16:13:21
{% endhighlight %}

Este é um recurso pouco conhecido do PHP mas que tem o seu valor.

Até a próxima. ;-)

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função [sleep()](http://br.php.net/sleep)</strong> » Pausa o script em segundos</li>
<li><strong>Função [usleep()](http://br.php.net/usleep)</strong> » Pausa o script em milhonésimos de segundos</li>
</ul>
