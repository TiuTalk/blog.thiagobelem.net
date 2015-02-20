---
layout: post
title: for, foreach e while – Repetições e Laços no PHP

date: '2009-03-30 10:58:09 -0300'
categories:
- PHP
- Artigos
tags: []
---
Hoje vou falar sobre algumas funções muito utilizadas no PHP: repetições e laços (<em>loops</em>). Falarei sobre o <strong>for()</strong>, <strong>foreach()</strong> e <strong>while()</strong>.

#### Usando o for()
Com o for você pode, por exemplo, repetir um ou mais comandos durante X vezes.. Por exemplo:


<div data-gist-id="dc3eec2720068d236fcf" data-gist-show-loading="false"></div>

Com isso eu irei enumerar todos os números de <strong>1</strong> ($n) até <strong>10</strong> ($limite).

O <strong>for()</strong> é formado por três partes: <strong>a declaração</strong> ($n = 1) onde definimos uma variável para ser usada na repetição; depois temos <strong>a condição</strong> ($n <= $limite) onde definimos uma condição que, enquanto verdadeira, a repetição acontecerá; e por último definimos a alteração ou <strong>incremento</strong> ($n++) que será executado após cada repetição.

Ou seja, definimos $n e enquanto $n for menor ou igual a $limite exibimos $n (echo), depois incrementamos $n.

Durante a execução de qualquer repetição você pode usar o comando<strong> <span style="color: #ff6600;">break;</span> </strong>para encerrar o bloco de repetição/loop e continuar o script. Há também o comando <strong><span style="color: #ff6600;">continue;</span></strong> que pula para próxima execução da repetição.

O <strong>for()</strong> pode ser usado, por exemplo, para montar a exibição de um calendário.

Veja mais: [Documentação do for()](http://br2.php.net/manual/pt_BR/control-structures.for.php)

#### Usando o foreach()
O <strong>foreach()</strong> é extremamente útil, pois com ele você executa um grupo de comandos para cada elemento de um array:


<div data-gist-id="4f9b2767e99a6c930d6e" data-gist-show-loading="false"></div>

Uma tradução simples para o foreach() é "<em>para cada elemento do array X execute...</em>".

No começo de cada execução do loop duas variáveis serão definidas: $indice que conterá o índice/chave do elemento (0, 1, 2 e etc.) e $valor que conterá o valor do elemento (Thiago, João, Ricardo e etc.).


<div data-gist-id="6b7cb1658cf33078f745" data-gist-show-loading="false"></div>

O exemplo acima irá "pular" o elemento que tiver o valor igual a "João", exibindo apenas Thiago, Ricardo e Paula.

Veja mais: [Documentação do foreach()](http://br2.php.net/manual/pt_BR/control-structures.foreach.php)

#### Usando o while()
O while() pode ser usado (ou não) da mesma forma que o for()... A diferença é que nele só é especificado a condição, veja um exemplo:


<div data-gist-id="11dfd420600e8ec3a30c" data-gist-show-loading="false"></div>

Esse exemplo de <strong>while()</strong> resulta na mesma exibição do exemplo usado no <strong>for()</strong>.

<blockquote><strong>Descrição na documentação:</strong>
O comando <em>while </em>pede que o PHP execute os comandos aninhados repetidamente, enquanto     a expressão do <em>while</em> é avaliada como     <strong><tt class="constant">TRUE</tt></strong>. O valor da expressão é verificada     cada vez que se passa no começo do 'loop', desta forma, mesmo que este valor     mude durante a execução do(s) comando(s) aninhado(s), a execução     não parará até que o fim da iteração (cada vez que o PHP executa     os comandos dentro do 'loop' é uma iteração). Às vezes, se a     expressão <em>while</em> é avaliada como     <strong><tt class="constant">FALSE</tt></strong> logo no início, o(s) comando(s)     aninhado(s) não será(ão) rodado(s) nem uma vez sequer.
</blockquote>
O while também é amplamente usado quando estamos retornando uma busca (SELECT) no MySQL:


<div data-gist-id="8363c713e5b3e9a50bc8" data-gist-show-loading="false"></div>

Veja mais: [Documentação do while()](http://br2.php.net/manual/pt_BR/control-structures.while.php)

--

Espero que tenham gostado e qualquer dúvida é só comentar!

