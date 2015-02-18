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
Quem atualizou o PHP para a versão 5.3.0 (<span class="removed_link" title="http://blog.thiagobelem.net/noticias/php-5-3-0-lancado/">lançada ontem</span>) pode ter encontrado inúmeros erros de funções que foram depreciadas (ou <em>deprecated</em>).

Essas funções são usadas para testar a presença de uma expressão regular dentro de uma string.

Vim falar sobre a função ereg e eregi que são muito usadas (pelo menos por mim) e que precisam ser trocadas por uma versão em Pearl.

Antigamente faríamos assim:


[code lang="php"]
&lt;?php

$palavra = '(casa|carro)';
$frase = 'Eu fui pra casa ontem!';

if (ereg($palavra, $frase)) {
	echo &quot;A palavra 'casa' ou 'carro' foi encontrada na frase&quot;;
} else {
	echo &quot;A palavra 'casa' ou 'carro' não foi encontrada na frase&quot;;
}

?&gt;
[/code]

Agora, com o PHP 5.3.0 precisamos usar a função <strong>preg_match()</strong>, dessa forma:


[code lang="php"]
&lt;?php

$palavra = '/(casa|carro)/';
$frase = 'Eu fui pra casa ontem!';

if (preg_match($palavra, $frase)) {
	echo &quot;A palavra 'casa' ou 'carro' foi encontrada na frase&quot;;
} else {
	echo &quot;A palavra 'casa' ou 'carro' não foi encontrada na frase&quot;;
}

?&gt;
[/code]

Repare que entrou uma barra (pra direita) antes e depois da expressão regular.

<h3>eregi()</h3>
E pra quem usava o eregi, é só adicionar um "i" no final da expressão regular, dessa forma:


[code lang="php"]
&lt;?php

$palavra = '/(casa|carro)/i';
$frase = 'Eu fui pra CasA ontem!';

if (preg_match($palavra, $frase)) {
	echo &quot;A palavra 'casa' ou 'carro' foi encontrada na frase&quot;;
} else {
	echo &quot;A palavra 'casa' ou 'carro' não foi encontrada na frase&quot;;
}

?&gt;
[/code]

--

Espero que tenham gostado desse pequeno "atalho" :P

