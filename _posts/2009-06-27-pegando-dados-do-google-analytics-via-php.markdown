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
<p>Hoje vou começar a falar um pouco sobre os APIs de informações do Google... Durante toda a semana que passou dei uma olhada rápida em todas as APIs deles e posso dizer: tem um mundo inexplorado ali... Pelo menos pros brasileiros. De hoje em diante vou focar aprender todas (eu disse TODAS) as APIs deles e sempre que eu me achar apto, vou passar algo aqui pra vocês.</p>
<h3>GAPI hein?</h3>
<p><strong>GAPI</strong> significa <em>Google Analytics PHP Interface</em> (ou Interface em PHP para Google Analytics) e é um projeto open-source criado por um cara chamado Stig Manning... Esse projeto foi criado para facilitar a sua (e a minha) vida na hora de buscar dados e gerar relatórios com os dados do Google Analytics para serem exibidos em outros sites... Espera um pouco, você não sabia que isso era possivel?! Viva la revolucion! :D</p>
<p>O GAPI é uma classe que te ajudará a fazer todo o trabalho de login, encontrar profile IDs, filtrar relatórios e tudo mais... Foi desenvolvido para ser usado com <strong>Frameworks</strong> (Symfony, CakePHP, Zend e etc.)... Mas pode ser usado perfeitamente por qualquer site com PHP 5 ou superior (e é isso que eu vou ensinar a fazer aqui hoje).</p>
<p>Com a API do Google Analytics você pode ter acesso a QUALQUER dado/relatório que teria acessando normalmente sua conta pelo site.</p>
<h3>Download e "Instalação"</h3>
<p>Para baixar o GAPI é simples.. Como diria meu professor de física do colegial: "é mel na chupeta!"... Acesse a <a href="http://code.google.com/p/gapi-google-analytics-php-interface/" title="Google Analytics PHP Interaface" target="_blank">página oficial do projeto</a> dentro do Google Code e (logo ali na lateral direita) faça o download da última versão.</p>
<p>Para poder usar a classe você só precisa ter o hárduo trabalho de incluir o arquivo <span style="color: orange"><strong>gapi.class.php</strong></span> no seu site.</p>
<h3>Exemplo de uso - Autenticação</h3>
<p>Da mesma forma que você precisa fazer o login com a sua conta Google para ter acesso aos perfis de sites, e posteriormente aos relatórios desses perfis, você também precisa fazer o login autenticando seus dados de acesso... Veja como é dificil fazer isso:
[code lang="php"]<?php
	require_once("gapi.class.php");</p>
<p>	// Autenticação
	$ga = new gapi('SEU E-MAIL', 'SUA SENHA');
?>[/code]</p>
<p>--</p>
<h3>Exemplo de uso - Listando os perfis de site</h3>
<p>Para listar todos os perfis de site que você tem na sua conta você pode fazer assim:
[code lang="php"]<?php
	require_once("gapi.class.php");</p>
<p>	// Autenticação
	$ga = new gapi('SEU E-MAIL', 'SUA SENHA');</p>
<p>	// Pega os dados da conta e perfis de site
	$ga->requestAccountData();</p>
<p>	// Pra cada resultado encontrado...
	foreach ($ga->getResults() as $perfil) {
		// Exibe os dados de cada um dos perfis de site
		echo $perfil . ' (' . $perfil->getProfileId() . ')';
	}
?>[/code]
O código acima irá exibir uma pequena lista dos sites que você tem na sua conta do Analytics... Usarei como exemplo o ID <strong>12345</strong> que é um ID fictício.</p>
<h3>Exemplo de uso - Pegando dados</h3>
<p>Agora você já fez o login e tem o ID do perfil do site que você quer pegar os resultados... Vamos fazer duas consultas de exemplo e pegar os dados necessários para fazer um relatório completo sobre as visitas e pageviews do mês passado:</p>
<p>[code lang="php"]<?php
	require_once("gapi.class.php");</p>
<p>	// Autenticação
	$ga = new gapi('SEU EMAIL', 'SUA SENHA');</p>
<p>	// ID do perfil do site
	$id = '12345';</p>
<p>	// Define o periodo do relatório
	$inicio = date('Y-m-01', strtotime('-1 month')); // 1° dia do mês passado
	$fim = date('Y-m-t', strtotime('-1 month')); // Último dia do mês passado</p>
<p>	// Busca os pageviews e visitas (total do mês passado)
	$ga->requestReportData($id, 'month', array('pageviews', 'visits'), null, null, $inicio, $fim);
	foreach ($ga->getResults() as $dados) {
		echo 'Mês ' . $dados . ': ' . $dados->getVisits() . ' Visita(s) e ' . $dados->getPageviews() . ' Pageview(s)';
	}</p>
<p>	echo '';</p>
<p>	// Busca os pageviews e visitas de cada dia do último mês
	$ga->requestReportData($id, 'day', array('pageviews', 'visits'), 'day', null, $inicio, $fim, 1, 50);
	foreach ($ga->getResults() as $dados) {
		echo 'Dia ' . $dados . ': ' . $dados->getVisits() . ' Visita(s) e ' . $dados->getPageviews() . ' Pageview(s)';
	}
?>[/code]
É claro que esse codigo parece um pouco complexo pra quem está começando.. Vou tentar explicar os argumentos do método requestReportData:</p>
<p>1 - Primeiro tempos o ID do perfil do site que você já pegou antes usando o requestAccountData()
2 - Aqui temos a lista de dimensões que estamos buscando. No primeiro exemplo usamos 'month' para pegar o total de cada mês do período especificado, e no segundo usamos 'day' para pegar o total referente a cada dia do período. Veja aqui a <a href="http://code.google.com/intl/pt-BR/apis/analytics/docs/gdata/gdataReferenceDimensionsMetrics.html" target="_blank">lista completa</a> de dimensões que podem ser usadas.
3 - No terceiro parâmetro temos as métricas, que são os valores que estamos buscando... Nos dois casos usamos 'pageviews' e 'visits'. Veja aqui uma <a href="http://code.google.com/intl/pt-BR/apis/analytics/docs/gdata/gdataReferenceDimensionsMetrics.html" target="_blank">lista completa</a> de métricas que podem ser usadas.
4 - O quarto parâmetro é a ordem dos resultados.
5 - O quinto parâmetro é o filtro. (Raramente usado)
6 e 7 - São os parâmetros que definem o período dos relatórios no formato AAAA-MM-DD.
8 - No oitavo parâmetro você define o n° do primeiro registro (usado para paginação de resultados).
9 - No nono (e último) parâmetro você define o n° do último registro (usado para paginação de resultados).</p>
<p>Os únicos argumentos obrigatórios são os três primeiros.</p>
<p>Sei que é muita coisa... Mas isso te permite um controle total dos relatórios que serão gerados.</p>
<p>--</p>
<p>Espero que tenham gostado... Essa classe é muito útil pra qualquer site e pra qualquer gerenciador de conteúdo que dê valor ao perfil do visitante. Seus clientes (e os visitantes deles) vão adorar ver um gráfico das últimas visitas do site, ou uma lista de em quais países o site tem mais impacto... O uso é infinito.</p>
<p>Abraços e até a próxima!</p>
