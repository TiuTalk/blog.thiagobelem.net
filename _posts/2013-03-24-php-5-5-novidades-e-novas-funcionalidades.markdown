---
layout: post
status: publish
published: true
title: PHP 5.5 - Novidades e novas funcionalidades
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 3191
wordpress_url: http://blog.thiagobelem.net/?p=3191
date: '2013-03-24 15:34:24 -0300'
date_gmt: '2013-03-24 18:34:24 -0300'
categories:
- Desenvolvimento
- PHP
- Artigos
- APIs
tags:
- PHP
- generators
- dereferencing
- password api
- yeld
---
<p>O <strong>PHP 5.5</strong> entrou em <a href="http://php.net/archive/2013.php#id2013-03-21-1">estado beta</a> no dia 21 desse mês, e deve ser lançada nos próximos dias.</p>
<p>Vamos à um resumão das mais interessantes <a href="http://www.php.net/manual/en/migration55.new-features.php">novas funcionalidades</a> que virão com essa atualização.</p>
<p>Todas essa novidades vão permitir a criação de sistemas e frameworks mais simples e eficientes, pois recursos desse tipo contribuem e muito para um código mais limpo e inteligente! :)</p>
<h2>Generators (ou geradores)</h2>
<p><a href="http://www.php.net/manual/en/language.generators.overview.php">Generators</a> são bem comuns em outras linguagens (como Python), eles básicamente te permitem iterar em uma lista que não precisa ser alocada previamente.</p>
<p>Por exemplo: você precisa listar todos os números primos de 1 até 1.000.000, uma forma mais simples seria criar uma lista com todos sesses números e depois ir iterando nela, fazendo verificações se esses números são primos e imprimindo-os.. O problema aqui é que você terá uma lista de 1.000.000 de números em memória, o que pode ser custoso pra alguns sistemas.</p>
<p>Com generators você conseguiria fazer exatamente a mesma coisa, mas sem precisar armazenar essa lista em memoria... pra cada iteração ele "encontra" o próximo numero da lista... a lista vai sendo gerada número a número enquanto você está usando, ficando com apenas um número na memória.</p>
<p>Veja um exemplo disso funcionando:</p>
<p>[gist id=5232890]</p>
<p>Pra cada iteração o número "da vez" será entregue pelo <strong>yeld</strong>... No exemplo acima o "generator" é a função criada com o nome de <strong>xrange</strong>.</p>
<h2>Foreach com suporte ao método list</h2>
<p>Agora a função <a href="http://www.php.net/manual/en/control-structures.foreach.php">foreach</a> tem suporte à "desempacotamento" através da função list, veja um exemplo:</p>
<p>[gist id=5232923]</p>
<h2>Dereferencing de arrays e strings literais</h2>
<p>Agora é possível indexar arrays e strings literais, por exemplo:</p>
<p>[gist id=5232943]</p>
<h2>API oficial de senhas</h2>
<p>E por último mas não menos importante, a nova e inédia <a href="http://blog.thiagobelem.net/php-5-5-api-de-senhas/">API de hashing de senhas</a>, algo bem interessante e que irá "padronizar" de uma vez por todas a questão de hashing/segurança de senhas... E por isso ela merece <a href="http://blog.thiagobelem.net/php-5-5-api-de-senhas/">um artigo</a> só pra ela.</p>
