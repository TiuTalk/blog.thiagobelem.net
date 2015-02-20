---
layout: post
title: Paginação no CakePHP
excerpt: Você vai que precisamos de exatamente <strong>duas linhas</strong> pra fazer
  uma consulta paginada no CakePHP, e mais duas linhas pra mostrar os links de "pŕoximo"
  e "anterior". :)

date: '2011-07-21 23:05:57 -0300'
categories:
- Desenvolvimento
- PHP
- Frameworks
- CakePHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- CakePHP
- Paginação
- Desenvolvimento
- curso cakephp
- controller
- model
- assando sites
- curso online cakephp
- pagination
- paginator
- paginatorhelper
- helper
---
Opa opa! Estou de volta :)

Tenho recebido algumas dúvidas sobre como usar/fazer [paginação no CakePHP](http://book.cakephp.org/2.0/en/core-libraries/components/pagination.html), e resolvi ensinar pra vocês como eu resolvo esse problema...

Você vai que precisamos de exatamente <strong>duas linhas</strong> pra fazer uma consulta paginada no CakePHP, e mais duas linhas pra mostrar os links de "pŕoximo" e "anterior". :)

<h3>Você vai precisar de</h3>
<ol>
<li><del>CakePHP instalado e configurado</del> (duh)</li>
<li><del>Um model com alguns dados cadastrados no banco de dados</del> (duh²)</li>
<li>Boa vontade</li>
<li>5 minutos <em>(ou menos)</em></li>
</ol>
<h3>Começando pelo Controller</h3>
<div>O trabalho da paginação começa no <strong>Controller</strong>... Defina os parâmetros de busca (find) normalmente, como você sempre fez:</div>

<div data-gist-id="12230f0229f4d6490740" data-gist-show-loading="false"></div>

Definido os parâmetros de busca, podemos atribuí-los ao atributo <strong>paginate</strong> do <strong>Controller</strong> e rodar a consulta no model <strong>Noticia</strong>:


<div data-gist-id="2fbedc9981b4295dce93" data-gist-show-loading="false"></div>

E tá tudo pronto.. agora é só ir pra view mostrar essas notícias e colocar os links de paginação! :)

<h3>Paginação na View</h3>
Um exemplo básico (usando a tag <em>article</em> do <strong>HTML5</strong>) da listagem de notícias:


<div data-gist-id="bebfd7e73ae3bae6d7af" data-gist-show-loading="false"></div>

E por ultimo, a listagem dos links de paginação:


<div data-gist-id="1667689b758f7c46034c" data-gist-show-loading="false"></div>

Na linha 1 e 3 nós mostramos os links para a <strong>próxima página</strong> e para a <strong>página anterior</strong>. Já na linha 2 nós mostramos aquela lista de números das páginas:<strong> 1, 2, 3, 4</strong> cada uma com um link!

O <strong>PaginatorHelper</strong> tem muitas outras opções e customizações, não deixe de consultar a [documentação](http://book.cakephp.org/2.0/en/core-libraries/helpers/paginator.html).

<h3>Quer saber mais sobre o CakePHP?</h3>
[](http://assando-sites.com.br/)

Inscreva-se no meu <strong>curso online</strong> de CakePHP, o [Assando Sites](http://assando-sites.com.br)!

Você aprende sem sair de casa, aos domingos ou quando preferir assistir os vídeos gravados em aula. :)

Para saber mais informações sobre o curso, [este post aqui no blog](/curso-online-de-cakephp).

Um grande abraço e até a próxima!

