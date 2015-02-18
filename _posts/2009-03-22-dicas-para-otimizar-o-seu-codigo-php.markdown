---
layout: post
status: publish
published: true
title: Dicas para otimizar o seu código PHP
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 371
wordpress_url: http://blog.thiagobelem.net/?p=371
date: '2009-03-22 11:16:18 -0300'
date_gmt: '2009-03-22 14:16:18 -0300'
categories:
- PHP
- Artigos
- Otimização
tags: []
---
<p>Vou falar aqui sobre algumas pequenas dicas que você pode levar em conta na hora de escrever o seu script e que vão acabar deixando a sua aplicação <strong>um pouco</strong> mais rápida.</p>
<p>Vamos ao que interessa:</p>
<ul>
<li>Chamar um método (de um objeto) é mais rápido do que usar o "_call"</li>
<li>Chamar uma função é mais rápido do que chamar um método de um objeto</li>
<li>Acessar uma variável local é sempre mais rápido do que acessar uma variável global</li>
<li>Acessar uma variável global é sempre mais rápido do que acessar a propriedade de um objeto</li>
<li>Acessar uma variável definida é mais rápido do que acessar uma variável não definida</li>
<li>Usar caminhos absolutos no <strong>include()</strong> e <strong>require()</strong> é mais rápido do que caminhos relativos</li>
<li>Combinar vários scripts em um arquivo só e usar <strong>include()</strong> é mais rápido do que usar vários <strong>include()</strong></li>
<li>O <strong>switch()</strong> é mais rápido do que o <strong>if ... else if ... else if ... else</strong> em alguns casos</li>
<li>Não use expressão regular para processamento e validação de strings simples</li>
<li>Evite usar o <strong>@</strong> antes de uma função (supressor de erros)</li>
<li>Evite mensagens de erro <em>notices </em>e <em>warnings</em></li>
<li>Evite usar variáveis não definidas e parâmetros de métodos não utilizados</li>
<li>Definindo o tipo de variável da propriedade (do método) diminui o tempo de chamada</li>
<li>Destrua variáveis que contenham muitos dados usando o <strong>unset()</strong></li>
<li>A variável <strong>$_SERVER['REQUEST_TIME']</strong> contém o tempo de execução inicial do script</li>
<li>Cacheie o output para evitar consumo de recursos</li>
<li><strong>echo</strong> é mais rápido que <strong>print</strong></li>
<li>Strings entre aspas únicas ('...') são processadas mais rápidas que strings em aspas duplas ("...")</li>
<li>O pré-incremento (<strong>++$n</strong>) é mais rápido que o pós-incremento (<strong>$n++</strong>)</li>
<li>Usar o <strong>isset()</strong> é mais rápido que usar o <strong>array_key_exists()</strong></li>
<li>Um array é uma alternativa mais rápida para um método com vários parâmetros</li>
<li>O <strong>foreach()</strong> é mais rápido que o <strong>for()</strong> em vários casos</li>
<li>Não busque por colunas de tabelas que você não irá usar no seu script</li>
<li>Combine várias <em>queries</em> em um se o seu banco de dados suportar isso</li>
</ul>
<p>Se você usar essas dicas você pode ter certeza que está contribuindo para um bom funcionamento da sua aplicação... Mas vale lembrar que essas providências estão longe de tornar a sua aplicação extremamente rápida. Você precisará de outros recursos mais poderosos como cacheamento de alto nível e uma boa integração com os recursos físicos disponíveis para a aplicação.</p>
<p>Todas essas dicas se tornam inuteis se você não fez um bom planejamento antes de começar a trabalhar a sua aplicação. "Ir fazendo" nunca é melhor do que "Já saber o que precisa(rá) ser feito". Guardem essa dica!</p>
<p>Veja mais algumas várias dicas (em inglês) aqui: <a title="PHP Bench" href="http://www.phpbench.com/404/" target="_blank">http://www.phpbench.com/</a></p>
<p>Quem tiver alguma outra dica para deixar um script mais rápido e eficiente é só falar.</p>
<p>Por hoje, é só! ;)</p>
