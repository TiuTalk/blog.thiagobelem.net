---
layout: post
title: PHP e MySQL para iniciantes – Consulta Simples
excerpt: Aprenda a fazer consultas simples utilizando PHP para acessar dados salvos
  no MySQL

date: '2010-07-20 16:38:15 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags:
- PHP
- MySQL
- Query
---
Fala minha gente!

Hoje consegui um tempinho para voltar a postar no blog e resolvi voltar um com uma sequencia de tutorias básicos sobre MySQL + PHP para iniciantes.

Nessa primeira parte vamos criar um script que irá resgatar as notícias de um banco de dados e fazer mais alguns procedimentos.

<div style="background: #FFF7D9; border: 1px dashed #FFE294; padding: 5px; margin-bottom: 10px;">Vamos usar [MySQLi](http://www.php.net/manual/pt_BR/book.mysqli.php) ao invés de MySQL. Mesmo sendo um recurso <em>avançado</em> para alguns, é bom ensinar uma forma correta e segura de trabalhar pra quem tá começando. :)

<p style="margin-bottom: 0px;">• Saiba mais sobre o MySQLi [aqui](/guia-pratico-de-mysqli-no-php)

<p style="margin-bottom: 0px;">• Os recursos utilizando aqui (MySQLi) só funcionam em <strong>PHP 5+</strong> e <strong>MySQL 4.1+</strong>

</div>
Essas serão as tabelas que iremos utilizar nesse e nos próximos tutoriais:

<img class="aligncenter size-full wp-image-850" title="Banco de Dados" src="/arquivos/2010/07/database1.png" alt="Tabelas notícias e categorias" width="340" height="232" />

Iremos usar essas tabelas para armazenar notícias que estarão ligadas à categorias.

<ul>
<li>Cada <strong>notícia</strong> pertence a uma <strong>categoria</strong></li>
<li>Cada <strong>categoria</strong> contém zero ou mais <strong>notícias</strong></li>
</ul>
<div style="background: #FFF7D9; border: 1px dashed #FFE294; padding: 5px; margin-bottom: 10px;">
<p style="margin-bottom: 0px;">A imagem acima foi criada utilizando o [modelagem de banco de dados](/modelagem-de-banco-de-dados).

</div>
Para criar essas tabelas em seu banco de dados, execute esse código SQL:


<div data-gist-id="3afa46d58456aff44502" data-gist-show-loading="false"></div>

Vamos iniciar o nosso script criando um pequeno script de conexão ao banco de dados:


<div data-gist-id="4f1a66c5f12d6b96ae71" data-gist-show-loading="false"></div>

Na linha 21 nós criamos uma instância do MySQLi passando os dados de conexão com o servidor e, logo depois, verificamos se houve algum erro durante a conexão e exibimos a mensagem de erro.

Salve esse script com o nome de <code>mysqli.php</code> em uma pasta chamada <code>includes</code>.

O próximo passo será criar um script que faz uma consulta SQL, vamos começar o arquivo PHP com os comentários de créditos e o <code>[require](http://php.net/manual/en/function.require-once.php)</code> para chamar o arquivo de conexão ao banco de dados:


<div data-gist-id="d74ddbb860f20e8231fd" data-gist-show-loading="false"></div>

Agora vamos montar uma consulta SQL simples para buscar as 10 últimas notícias ativas:


<div data-gist-id="1e19345c904406aa26c3" data-gist-show-loading="false"></div>

A consulta montada poderia ser traduzida por:

<blockquote>SELECIONE todas as colunas
DA TABELA `noticias`
ONDE `ativa` for igual a 1
ORDENANDO PELO `cadastro` DECRESCENTEMENTE
LIMITADO A 10 resultados
</blockquote>
Agora precisamos executar a consulta utilizando o método <code>[query](http://www.php.net/manual/pt_BR/mysqli.query.php)</code> do MySQLi:


<div data-gist-id="dbdc6f141714783a6136" data-gist-show-loading="false"></div>

E agora só precisamos rodar um loop, e em cada iteração (passada no loop) iremos exibir a notícia encontrada, montando um bloco HTML:


<div data-gist-id="c6e881b2381f2766935d" data-gist-show-loading="false"></div>

Fazendo isso, para cada notícia encontrada pela consulta, será criado o seguinte bloco HTML:


<div data-gist-id="d94ba710b35991558586" data-gist-show-loading="false"></div>

Depois disso, podemos colocar mais um pequeno bloco de código que irá mostrar o total de registros encontrados com a consulta:


<div data-gist-id="0abd0bffa551dc651387" data-gist-show-loading="false"></div>

E no final de tudo precisamos - <strong>SEMPRE</strong> - liberar o resultado da consulta, limpando espaço na memória e deixando tudo mais organizado:


<div data-gist-id="c34308a8054ce74e5ca8" data-gist-show-loading="false"></div>

O arquivo <code>consulta.php</code> ficou assim:


<div data-gist-id="adfa1533df15ac96ec12" data-gist-show-loading="false"></div>

Por hoje é só! :)

Faça o download de todos os arquivos desse tutorial: [PHP-e-MySQL-Consulta-Simples.zip](/arquivos/2010/07/PHP-e-MySQL-Consulta-Simples.zip)

Nas próximas partes desse tutorial iremos ver uma consulta mais complexa (ligando as duas tabelas) e outros scripts para cadastrar e editar notícias.

Um grade abraço e até a próxima!

