---
layout: post
title: Lua é brazuca!
excerpt: Lua foi criada por desenvolvedores do Tecgraf da PUC-Rio para ser usada em
  um projeto da Petrobras. Devido à sua eficiência, clareza e facilidade de aprendizado,
  passou a ser usada em diversos ramos da programação, como no desenvolvimento de
  jogos.

date: '2009-05-15 01:04:20 -0300'
categories:
- Artigos
tags: []
---
Eu sei.. É uma vergonha eu assumir isso publicamente.. Mas descobri essa semana que a linguagem de progração [Lua](http://lua.org) é brasileira! :D

Ela foi criada na PUC-Rio pra um projeto da Petrobras... Mas por que eu to falando isso aqui? Ah.. Pq eu conheço um pouquinho de Lua e é uma linguagem muito amigável... E agora sabendo que ela é brasileira, e tendo que aprender por causa de um certo projeto pessoal, vai ser tudo mais legal.. Quem sabe em breve eu não começo a falar de Lua aqui tbm?

Um exemplo de código em Lua:

<pre class="source-lua" style="padding-left: 30px;"><span style="font-size: small;"><span class="kw1">-- Calculo fatorial
function</span> fact<span class="br0">(</span>n<span class="br0">)</span>
   <span class="kw1">if</span> n == <span class="nu0">0</span> <span class="kw1">then</span>
      <span class="kw1">return</span> <span class="nu0">1</span>
   <span class="kw1">else</span>
      <span class="kw1">return</span> n * fact<span class="br0">(</span>n - <span class="nu0">1</span><span class="br0">)</span>
   <span class="kw1">end</span>
<span class="kw1">end</span></span></pre>
--

[ <strong>Wikipédia</strong> ]

Lua foi criada por um time de desenvolvedores do <span class="removed_link" title="http://www.tecgraf.puc-rio.br/">Tecgraf</span> da [Lucas Arts](http://www.lucasarts.com/), por exemplo, usou a linguagem no jogo Escape from Monkey Island), controle de robôs, processamento de texto, etc. Também é freqüentemente usada como uma linguagem de propósito geral.

Lua combina programação procedural com poderosas construções para descrição de dados, baseadas em tabelas associativas e semântica extensível. É tipada dinamicamente, interpretada a partir de [bytecodes](http://pt.wikipedia.org/wiki/Bytecode), e tem gerenciamento automático de memória com coleta de lixo. Essas características fazem de Lua uma linguagem ideal para configuração, automação (scripting) e prototipagem rápida.

(...)

Lua é normalmente descrito como uma linguagem de múltiplos paradigmas, oferecendo um pequeno conjunto de características gerais que podem ser estendidas para encaixar diferentes tipos de problemas, em vez de fornecer uma especificação mais complexa e rígida para combinar com um único paradigma. Lua, por exemplo, não contém apoio explícito à herança, mas permite que ela seja executada com relativa facilidade com metatables. Do mesmo modo, Lua permite que programadores quando implementam nomes, classes, e outras funções, o emprego de poderosas técnicas de programação funcional e completos escopos lexicais.

Lua é uma linguagem que suporta apenas um pequeno número de estruturas, tais como dados atômicos, valores booleanos, números (dupla precisão em ponto flutuante por padrão), e strings. As estruturas de dados comuns, tais como matrizes, conjuntos, tabelas, listas, e registros podem ser representados por meio da Lua. Lua não foi construída com suporte para programação orientada a objeto.

[http://pt.wikipedia.org/wiki/Lua_(linguagem_de_programação)](http://pt.wikipedia.org/wiki/Lua_(linguagem_de_programa%C3%A7%C3%A3o))

