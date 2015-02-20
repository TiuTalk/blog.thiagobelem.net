---
layout: post
title: PHP e MySQL para iniciantes – Consulta Avançada
excerpt: Continuação do tutorial que ensina iniciantes a trabalharem com PHP e MySQL.
  Nessa parte você aprenderá a fazer consultas avançadas utilizando PHP para acessar
  dados salvos no MySQL, unindo resultados de duas tabelas

date: '2010-07-25 17:48:35 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags:
- PHP
- MySQL
- Query
---
Hoje vamos continuar a nossa pequena seqüencia de tutoriais ensinando o básico do trabalho com PHP e MySQL.

Na parte anterior, ensinei a fazer uma consulta simples no MySQL, a consulta utilizada buscava as últimas 10 notícias da tabela de notícias e exibia-as seqüencialmente, da mais recente para a mais antiga.

Hoje vamos fazer uma consulta semelhante, mas iremos fazer o relacionamento entre as duas tabelas (<code>noticias</code> e <code>categorias</code>) para buscar apenas as notícias de uma categoria.

Começaremos o arquivo <code>consulta-avancada.php</code> da mesma forma que iniciamos o anterior, com um bloco de comentários que explica o arquivo e inclui o arquivo que cria a instância do MySQLi que será usada nesse novo arquivo.


<div data-gist-id="4bd2f6ffbb484387492b" data-gist-show-loading="false"></div>

Agora iremos definir uma variável contendo o nome da categoria que iremos usar para filtrar as notícias... O conteúdo dessa variável está "<em>hard coded</em>" no arquivo, mas poderia ser dinâmico e vir da uma variável <code>$_GET</code>, por exemplo.


<div data-gist-id="e42c430d71b4c895a530" data-gist-show-loading="false"></div>

Feito isso, montaremos a consulta que será executada no banco de dados:


<div data-gist-id="974d1538a07b00c61625" data-gist-show-loading="false"></div>

O interessante dessa consulta é que ela busca os registros da tabela <code>noticia</code> que possuam um relacionamento com os registros da tabela <code>categorias</code> e, o registro correspondente na tabela <code>categorias</code> deve possuir o valor da variável <code>$categoria</code> no campo <code>nome</code>.

Para quem não entendeu a explicação acima, vale a pena a leitura do meu artigo [Relacionamento de Tabelas no MySQL](/relacionamento-de-tabelas-no-mysql).

Continuando o script, rodamos a consulta e exibimos o resultado:


<div data-gist-id="726ba5b02d2df50388b0" data-gist-show-loading="false"></div>

E, para finalizar, exibimos o total de resultados encontrados e limpamos a consulta da memória do PHP:


<div data-gist-id="418683641f90f69d2b65" data-gist-show-loading="false"></div>

E vocês acabaram de ver um exemplo de consulta complexa usando MySQLi! :)

Faça o download dos arquivos desse tutorial aqui: [PHP-e-MySQL-Consulta-Avançada.zip](/arquivos/2010/07/PHP-e-MySQL-Consulta-Avançada.zip)

Abraços e até a próxima!

