---
layout: post
status: publish
published: true
title: Problema com a função ereg(i) – PHP 5.3.0
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aprenda a converter ereg e eregi em sua versão Perl (usando o preg_match)
  e evite erros de função depreciada no PHP 5.3.0
wordpress_id: 557
wordpress_url: http://blog.thiagobelem.net/?p=557
date: '2009-07-01 11:54:54 -0300'
date_gmt: '2009-07-01 14:54:54 -0300'
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
<p>[code lang="php"]&amp;lt;?php</p>
<p>$palavra = '(casa|carro)';<br />
$frase = 'Eu fui pra casa ontem!';</p>
<p>if (ereg($palavra, $frase)) {<br />
	echo &amp;quot;A palavra 'casa' ou 'carro' foi encontrada na frase&amp;quot;;<br />
} else {<br />
	echo &amp;quot;A palavra 'casa' ou 'carro' não foi encontrada na frase&amp;quot;;<br />
}</p>
<p>?&amp;gt;[/code]</p>
<p>Agora, com o PHP 5.3.0 precisamos usar a função <strong>preg_match()</strong>, dessa forma:</p>
<p>[code lang="php"]&amp;lt;?php</p>
<p>$palavra = '/(casa|carro)/';<br />
$frase = 'Eu fui pra casa ontem!';</p>
<p>if (preg_match($palavra, $frase)) {<br />
	echo &amp;quot;A palavra 'casa' ou 'carro' foi encontrada na frase&amp;quot;;<br />
} else {<br />
	echo &amp;quot;A palavra 'casa' ou 'carro' não foi encontrada na frase&amp;quot;;<br />
}</p>
<p>?&amp;gt;[/code]</p>
<p>Repare que entrou uma barra (pra direita) antes e depois da expressão regular.</p>
<h3>eregi()</h3>
<p>E pra quem usava o eregi, é só adicionar um "i" no final da expressão regular, dessa forma:</p>
<p>[code lang="php"]&amp;lt;?php</p>
<p>$palavra = '/(casa|carro)/i';<br />
$frase = 'Eu fui pra CasA ontem!';</p>
<p>if (preg_match($palavra, $frase)) {<br />
	echo &amp;quot;A palavra 'casa' ou 'carro' foi encontrada na frase&amp;quot;;<br />
} else {<br />
	echo &amp;quot;A palavra 'casa' ou 'carro' não foi encontrada na frase&amp;quot;;<br />
}</p>
<p>?&amp;gt;[/code]</p>
<p>--</p>
<p>Espero que tenham gostado desse pequeno "atalho" :P</p>
