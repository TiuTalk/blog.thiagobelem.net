---
layout: post
title: Formatando frações e casas decimais no PHP

date: '2009-04-23 22:42:25 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Essa é uma dúvida muito comum, pelo menos eu já tive esse problema várias vezes... Principalmente em sistemas financeiros.</p>
<p>Você já deve ter percebido que números reais (frações) usam ponto como separador de casa decimal.</p>
<p>A função <strong>number_format()</strong> serve exatamente para isso, veja exemplos:</p>
<p>[code='php']<?php</p>
<p>$numero = 1234.56;</p>
<p>// Formato brasileiro
echo number_format($numero, 2, ',', '.');
// 1.234,56</p>
<p>// Formato frances
echo number_format($numero, 2, ',', ' ');
// 1 234,56</p>
<p>$number = 1234.5678;</p>
<p>// Formato inglês sem separador de milhar
echo number_format($numero, 2, '.', '');
// 1234.57</p>
<p>?>[/code]</p>
<p>Podemos passar os seguintes argumentos pra ela:</p>
<p style="padding-left: 30px;">1º - O número a ser formatado
2º - A precisão decimal (quantidade de casas decimais que serão exibidas)
3º - Separador de dezenas (opcional)
4º - Separador de milhar (opcional)</p>
<p>Vira como é facil?</p>
<p>Dêem uma olhada na <a href="http://www.php.net/manual/pt_BR/function.number-format.php" target="_blank">documentação oficial</a> para tirar qualquer dúvida e não se esqueçam de deixar o seu comentário.</p>
