---
layout: post
title: Problema com a função ereg(i) – PHP 5.3.0
excerpt: Aprenda a converter ereg e eregi em sua versão Perl (usando o preg_match)
  e evite erros de função depreciada no PHP 5.3.0

date: '2009-07-01 11:54:54 -0300'
categories:
- PHP
- Artigos
- Segurança
tags:
- PHP
- PHP 5.3
- ereg
- preg
- Erro
---
<p>Quem atualizou o PHP para a versão 5.3.0 (<span class="removed_link" title="http://blog.thiagobelem.net/noticias/php-5-3-0-lancado/">lançada ontem</span>) pode ter encontrado inúmeros erros de funções que foram depreciadas (ou <em>deprecated</em>).</p>
<p>Essas funções são usadas para testar a presença de uma expressão regular dentro de uma string.</p>
<p>Vim falar sobre a função ereg e eregi que são muito usadas (pelo menos por mim) e que precisam ser trocadas por uma versão em Pearl.</p>
<p>Antigamente faríamos assim:</p>

[code lang="php"]&lt;?php</p>
<p>$palavra = '(casa|carro)';
$frase = 'Eu fui pra casa ontem!';</p>
<p>if (ereg($palavra, $frase)) {
	echo &quot;A palavra 'casa' ou 'carro' foi encontrada na frase&quot;;
} else {
	echo &quot;A palavra 'casa' ou 'carro' não foi encontrada na frase&quot;;
}</p>
<p>?&gt;[/code]

<p>Agora, com o PHP 5.3.0 precisamos usar a função <strong>preg_match()</strong>, dessa forma:</p>

[code lang="php"]&lt;?php</p>
<p>$palavra = '/(casa|carro)/';
$frase = 'Eu fui pra casa ontem!';</p>
<p>if (preg_match($palavra, $frase)) {
	echo &quot;A palavra 'casa' ou 'carro' foi encontrada na frase&quot;;
} else {
	echo &quot;A palavra 'casa' ou 'carro' não foi encontrada na frase&quot;;
}</p>
<p>?&gt;[/code]

<p>Repare que entrou uma barra (pra direita) antes e depois da expressão regular.</p>
<h3>eregi()</h3>
<p>E pra quem usava o eregi, é só adicionar um "i" no final da expressão regular, dessa forma:</p>

[code lang="php"]&lt;?php</p>
<p>$palavra = '/(casa|carro)/i';
$frase = 'Eu fui pra CasA ontem!';</p>
<p>if (preg_match($palavra, $frase)) {
	echo &quot;A palavra 'casa' ou 'carro' foi encontrada na frase&quot;;
} else {
	echo &quot;A palavra 'casa' ou 'carro' não foi encontrada na frase&quot;;
}</p>
<p>?&gt;[/code]

<p>--</p>
<p>Espero que tenham gostado desse pequeno "atalho" :P</p>
