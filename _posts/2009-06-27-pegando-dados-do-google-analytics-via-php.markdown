---
layout: post
title: Pegando dados do Google Analytics via PHP
excerpt: Aprenda a usar o GAPI (Google Analytics PHP Interface) para gerar relatórios
  com os dados do Google Analytics de todos os sites da sua conta Google e exiba as
  informações e gráficos dentro do seu próprio site!

date: '2009-06-27 11:48:43 -0300'
categories:
- PHP
- Artigos
- APIs
tags:
- PHP
- Google
- API
- Google Analytics API
---
Hoje vou começar a falar um pouco sobre os APIs de informações do Google... Durante toda a semana que passou dei uma olhada rápida em todas as APIs deles e posso dizer: tem um mundo inexplorado ali... Pelo menos pros brasileiros. De hoje em diante vou focar aprender todas (eu disse TODAS) as APIs deles e sempre que eu me achar apto, vou passar algo aqui pra vocês.

<h3>GAPI hein?</h3>
<strong>GAPI</strong> significa <em>Google Analytics PHP Interface</em> (ou Interface em PHP para Google Analytics) e é um projeto open-source criado por um cara chamado Stig Manning... Esse projeto foi criado para facilitar a sua (e a minha) vida na hora de buscar dados e gerar relatórios com os dados do Google Analytics para serem exibidos em outros sites... Espera um pouco, você não sabia que isso era possivel?! Viva la revolucion! :D

O GAPI é uma classe que te ajudará a fazer todo o trabalho de login, encontrar profile IDs, filtrar relatórios e tudo mais... Foi desenvolvido para ser usado com <strong>Frameworks</strong> (Symfony, CakePHP, Zend e etc.)... Mas pode ser usado perfeitamente por qualquer site com PHP 5 ou superior (e é isso que eu vou ensinar a fazer aqui hoje).

Com a API do Google Analytics você pode ter acesso a QUALQUER dado/relatório que teria acessando normalmente sua conta pelo site.

<h3>Download e "Instalação"</h3>
Para baixar o GAPI é simples.. Como diria meu professor de física do colegial: "é mel na chupeta!"... Acesse a [página oficial do projeto](http://code.google.com/p/gapi-google-analytics-php-interface/) dentro do Google Code e (logo ali na lateral direita) faça o download da última versão.

Para poder usar a classe você só precisa ter o hárduo trabalho de incluir o arquivo <span style="color: orange"><strong>gapi.class.php</strong></span> no seu site.

<h3>Exemplo de uso - Autenticação</h3>
Da mesma forma que você precisa fazer o login com a sua conta Google para ter acesso aos perfis de sites, e posteriormente aos relatórios desses perfis, você também precisa fazer o login autenticando seus dados de acesso... Veja como é dificil fazer isso:

<div data-gist-id="c12b2ea621a3d25eb0e2" data-gist-show-loading="false"></div>

--

<h3>Exemplo de uso - Listando os perfis de site</h3>
Para listar todos os perfis de site que você tem na sua conta você pode fazer assim:

<div data-gist-id="ce28ccf429a7726ad06c" data-gist-show-loading="false"></div>

O código acima irá exibir uma pequena lista dos sites que você tem na sua conta do Analytics... Usarei como exemplo o ID <strong>12345</strong> que é um ID fictício.

<h3>Exemplo de uso - Pegando dados</h3>
Agora você já fez o login e tem o ID do perfil do site que você quer pegar os resultados... Vamos fazer duas consultas de exemplo e pegar os dados necessários para fazer um relatório completo sobre as visitas e pageviews do mês passado:


<div data-gist-id="fe97201f8cde541f9bea" data-gist-show-loading="false"></div>

É claro que esse codigo parece um pouco complexo pra quem está começando.. Vou tentar explicar os argumentos do método requestReportData:

1 - Primeiro tempos o ID do perfil do site que você já pegou antes usando o requestAccountData()
2 - Aqui temos a lista de dimensões que estamos buscando. No primeiro exemplo usamos 'month' para pegar o total de cada mês do período especificado, e no segundo usamos 'day' para pegar o total referente a cada dia do período. Veja aqui a [lista completa](https://developers.google.com/analytics/devguides/reporting/core/dimsmets) de dimensões que podem ser usadas.
3 - No terceiro parâmetro temos as métricas, que são os valores que estamos buscando... Nos dois casos usamos 'pageviews' e 'visits'. Veja aqui uma [lista completa](https://developers.google.com/analytics/devguides/reporting/core/dimsmets) de métricas que podem ser usadas.
4 - O quarto parâmetro é a ordem dos resultados.
5 - O quinto parâmetro é o filtro. (Raramente usado)
6 e 7 - São os parâmetros que definem o período dos relatórios no formato AAAA-MM-DD.
8 - No oitavo parâmetro você define o n° do primeiro registro (usado para paginação de resultados).
9 - No nono (e último) parâmetro você define o n° do último registro (usado para paginação de resultados).

Os únicos argumentos obrigatórios são os três primeiros.

Sei que é muita coisa... Mas isso te permite um controle total dos relatórios que serão gerados.

--

Espero que tenham gostado... Essa classe é muito útil pra qualquer site e pra qualquer gerenciador de conteúdo que dê valor ao perfil do visitante. Seus clientes (e os visitantes deles) vão adorar ver um gráfico das últimas visitas do site, ou uma lista de em quais países o site tem mais impacto... O uso é infinito.

Abraços e até a próxima!

