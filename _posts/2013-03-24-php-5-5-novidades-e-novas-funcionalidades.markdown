---
layout: post
title: PHP 5.5 - Novidades e novas funcionalidades

date: '2013-03-24 15:34:24 -0300'
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
O <strong>PHP 5.5</strong> entrou em <a href="http://php.net/archive/2013.php#id2013-03-21-1">estado beta</a> no dia 21 desse mês, e deve ser lançada nos próximos dias.

Vamos à um resumão das mais interessantes <a href="http://www.php.net/manual/en/migration55.new-features.php">novas funcionalidades</a> que virão com essa atualização.

Todas essa novidades vão permitir a criação de sistemas e frameworks mais simples e eficientes, pois recursos desse tipo contribuem e muito para um código mais limpo e inteligente! :)

<h2>Generators (ou geradores)</h2>
<a href="http://www.php.net/manual/en/language.generators.overview.php">Generators</a> são bem comuns em outras linguagens (como Python), eles básicamente te permitem iterar em uma lista que não precisa ser alocada previamente.

Por exemplo: você precisa listar todos os números primos de 1 até 1.000.000, uma forma mais simples seria criar uma lista com todos sesses números e depois ir iterando nela, fazendo verificações se esses números são primos e imprimindo-os.. O problema aqui é que você terá uma lista de 1.000.000 de números em memória, o que pode ser custoso pra alguns sistemas.

Com generators você conseguiria fazer exatamente a mesma coisa, mas sem precisar armazenar essa lista em memoria... pra cada iteração ele "encontra" o próximo numero da lista... a lista vai sendo gerada número a número enquanto você está usando, ficando com apenas um número na memória.

Veja um exemplo disso funcionando:

<div data-gist-id="5232890" data-gist-show-loading="false"></div>
Pra cada iteração o número "da vez" será entregue pelo <strong>yeld</strong>... No exemplo acima o "generator" é a função criada com o nome de <strong>xrange</strong>.

<h2>Foreach com suporte ao método list</h2>
Agora a função <a href="http://www.php.net/manual/en/control-structures.foreach.php">foreach</a> tem suporte à "desempacotamento" através da função list, veja um exemplo:

<div data-gist-id="5232923" data-gist-show-loading="false"></div>
<h2>Dereferencing de arrays e strings literais</h2>
Agora é possível indexar arrays e strings literais, por exemplo:

<div data-gist-id="5232943" data-gist-show-loading="false"></div>
<h2>API oficial de senhas</h2>
E por último mas não menos importante, a nova e inédia <a href="/php-5-5-api-de-senhas">API de hashing de senhas</a>, algo bem interessante e que irá "padronizar" de uma vez por todas a questão de hashing/segurança de senhas... E por isso ela merece <a href="/php-5-5-api-de-senhas">um artigo</a> só pra ela.

