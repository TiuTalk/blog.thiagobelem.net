---
layout: post
title: 'CSS dinâmico: Inserindo PHP no CSS'
excerpt: Aprenda a misturar PHP e CSS e criar arquivos CSS dinâmicos que podem trazer
  informações de cores, fontes e caminhos de imagens direto do banco de dados ou de
  outra "fonte" de informações. ;)

date: '2009-04-13 19:42:10 -0300'
categories:
- PHP
- CSS
- Tutoriais
tags: []
---
Com esse recurso você vai poder transformar códigos de cores, caminho de imagens e qualquer parte de um arquivo CSS em variáveis e scripts PHP tornando o trabalho bem mais fácil.

Há duas formas de se alcançar esse objetivo:

A primeira, um pouco mais complicada, é fazendo o <em>parser</em> (interpretador) do PHP ler os arquivos .css antes de enviá-los para o visitante. Você pode fazê-lo da seguinte forma: crie/edite um arquivo chamado .htaccess dentro do root (raiz) do seu servidor e insira essa linha nele:


<div data-gist-id="80cd114d1a681f59d9e7" data-gist-show-loading="false"></div>

Depois é só editar o seu arquivo .css e inserir códigos PHP da forma que bem entender... Lembrando apenas de que o retorno (via echo) deve ser a mesma formatação de um CSS... Exemplo:


<div data-gist-id="82b0e23a3f1b255ba438" data-gist-show-loading="false"></div>

--

A outra forma eu considero um pouco mais simples: Você renomeará o seu arquivo <strong>.css</strong> trocando a extensão para <strong>.php</strong> e adicionará apenas uma linha logo no começo:


<div data-gist-id="493b096f686b3fd4e784" data-gist-show-loading="false"></div>

Não esqueça também de mudar o HTML que inclui a folha de estilos:


<div data-gist-id="bd0d10653ef998326c32" data-gist-show-loading="false"></div>

--

Viram como é fácil? Com isso você vai poder usar sessões, fazer conexões a banco de dados, interpretar arquivos XML com informações e etc na hora de montar o CSS do seu site! Os exemplos de uso são inifinitos. E o melhor: não vai precisar ficar entupindo o HTML seu site de <strong>style=""</strong> pra todo lado.

Vale lembrar que esse recurso vai valer se você quiser inserir PHP dentro de qualquer tipo de arquivo que normalmente não seja interpretado pelo PHP (e por nenhum outro interpretador), como por exemplo: XML, JS, HTML ou uma extensão que você mesmo inventar.

Abraços e até a próxima! ;)

