---
layout: post
title: Apredendo a usar as funções empty e isset
excerpt: Aprenda a usar as funções isset() e empty() do PHP e deixe o seu sistema
  mais seguro e organizado, sabendo quando verificar se uma variável existe e quando
  verificar se ela tem valor.

date: '2009-12-30 14:19:28 -0200'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Funções
---
Fala pessoal!

Mais uma vez, queria pedir desculpas pela minha ausência... Tenho trabalhado além do normal aqui no Jornal e em casa, nas minhas "horas vagas".

Hoje vim mostrar pra vocês duas funções [do PHP] múito úteis... São elas: <strong>empty()</strong> e a <strong>isset()</strong>... Ambas servem, praticamente, para a mesma coisa, mas quando usadas em conjunto são MUITO eficientes.

<h3>A função <span style="color: orange;">empty()</span></h3>
Ela serve para saber se uma variável é vazia... Ela retornará <em>true</em> (verdadeiro) quando uma variável for vazia e, óbviamente, retorna <em>false</em> (falso) quando uma variável não for vazia... Mas ai você se pergunta: o que é uma "variável vazia"?

Essa função retornará true para os seguintes casos:

<ul>
<li>$var = ""; (uma string vazia)</li>
<li>$var = 0; (um inteiro valendo zero)</li>
<li>$var = "0"; (uma string contendo zero)</li>
<li>$var = NULL; (variáveis nulas)</li>
<li>$var = FALSE; (variáveis falsas)</li>
<li>$var = array(); (um array vazio)</li>
<li>var $var; (uma variável declarada, sem valor, dentro de uma classe)</li>
</ul>
Agora vamos ver um exemplo prático de uso do empty():

<div data-gist-id="01273ad36cad3e594767" data-gist-show-loading="false"></div>


<h3>A função <span style="color: orange;">isset()</span></h3>
Ela serve para saber se uma variável existe... Ela retornará true (verdadeiro) quando uma variável existir e false (falso) quando uma variável não existir... Mas ai você se pergunta: quando uma variável existe?

Veja os exemplos de variáveis vazias no item anterior... Todos eles fazem com que a variável ($var) passe a existir... Para uma variável "não existir" ela não pode ter sido usada/definida em nenhum momento [anterior] do script... Veja um exemplo onde usamos o isset() em conjunto com o empty() e melhoramos o exemplo do item anterior:


<div data-gist-id="f43f7a3611c2d287378e" data-gist-show-loading="false"></div>

Espero que tenham gostado! :)

