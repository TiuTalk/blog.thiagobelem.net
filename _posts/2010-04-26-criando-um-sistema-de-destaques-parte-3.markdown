---
layout: post
title: Criando um sistema de destaques – Parte 3
excerpt: Terceira e última parte do tutorial que te ensina a criar um sistema de destaques
  para o seu site ou blog utilizando PHP, MySQL, xHTML e CSS com efeitos de transição
  em jQuery.

date: '2010-04-26 22:30:35 -0300'
categories:
- HTML
- CSS
- Javascript
- jQuery
- Tutoriais
tags:
- jQuery
- jCycle
- HTML
- CSS
---
Hoje vamos fazer a terceira e última parte do nosso sistema de destaques.

Antes de mais nada, queria pedir desculpas pela demora... Minha vida está um pouco atrapalhada agora que estou começando a escrever artigos pra revistas (ha!)... Mas ontem decidi que iria dedicar no mínimo uma hora por dia para o blog, e lá vamos nós! :)

Nessa parte do tutorial nós iremos criar um arquivo PHP que irá fazer a conexão com o banco de dados (MySQL) e fazer a consulta que trará os dados de cada um dos destaques para "alimentarmos" nosso HTML.

Para o nosso banco de dados iremos utilizar a seguinte tabela:


<div data-gist-id="f760f3e992ae7060475c" data-gist-show-loading="false"></div>

<h3>0. Transparência</h3>
Antes da gente começar a codificar a parte três... Vamos colocar uma coisinha no CSS que faltou na Parte 2: a transparência do fundo preto da legenda... Edite o CSS dos destaques e coloque isso:


<div data-gist-id="80b593321a4e1e9287a4" data-gist-show-loading="false"></div>

Isso fará com que a div de fundo fique com 80% de opacidade.

<h3>1. Configurações</h3>
Vamos começar com um arquivo chamado <strong>mysql_destaques.php</strong> e nele colocar um bloco PHP vazio:


<div data-gist-id="76282b82e6202af893a7" data-gist-show-loading="false"></div>

Agora nós iremos definir algumas variáveis de configuração:


<div data-gist-id="f9e8f2f57611e6d0ba70" data-gist-show-loading="false"></div>

<h3>2. Conexão com o MySQL</h3>
Se o seu site já se conecta ao banco de dados MySQL automaticamente, você pode apagar a parte da conexão ao MySQL e pular para o item três...

Fazemos a conexão com o banco de dados:


<div data-gist-id="3e7cb12d769c1e920513" data-gist-show-loading="false"></div>

<h3>3. Buscando os dados</h3>
Agora vai começar a brincadeira... Vamos criar e executar uma consulta para trazer três colunas da tabela <code>`destaques`</code>:

<div data-gist-id="8b090d13ea2a262f4bd0" data-gist-show-loading="false"></div>

Nós já executamos a consulta e já temos o <em>Resource MySQL</em> (ou resultado)... Precisamos apenas rodar um loop e passar esses dados para um array que será usado mais a diante para montar o nosso HTML.


<div data-gist-id="545a526f56bedae3d4f7" data-gist-show-loading="false"></div>

Pronto... Nosso arquivo está pronto! Veja [aqui](/exemplos/destaque/mysql_destaques.phps) como ele ficou.

Agora vamos voltar ao HTML do nosso sistema de destaques que até hoje está assim:


<div data-gist-id="52c6bc715e28cd880084" data-gist-show-loading="false"></div>

Vamos fazer algumas modificações no nosso HTML... Vamos começar incluindo o arquivo PHP que acabamos de criar logo antes da div#blocoDestaques e remover os LIs deixando apenas um:


<div data-gist-id="3853873da0a8277a8cce" data-gist-show-loading="false"></div>

Agora é só criar um loop utilizando o <code>foreach()</code> para gerar um LI para cada destaque que foi encontrado no banco de dados... Vamos também substituir os valores "enchedores de linguiça" por valores dinâmicos:


<div data-gist-id="8f284e7eb7a92835b214" data-gist-show-loading="false"></div>

Podemos ainda adicionar uma condição ao redor da div#blocoDestaques para ter certeza que nosso script irá funcionar e não vai deixar nenhum buraco no site:


<div data-gist-id="c72033e8ab448e74ff52" data-gist-show-loading="false"></div>

Com essa condição, se por algum acaso do destino o array <code>$lista_destaques</code> não existir ou for vazio (nenhum destaque encontrado), nós não exibimos nenhum HTML do bloco de destaques, deixando assim o site com um elemento a menos, mas funcionando.

E o nosso sistema de destaques está pronto!

Espero que tenham gostado!

