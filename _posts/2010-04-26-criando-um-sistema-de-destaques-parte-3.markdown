---
layout: post
status: publish
published: true
title: Criando um sistema de destaques – Parte 3
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Terceira e última parte do tutorial que te ensina a criar um sistema de destaques
  para o seu site ou blog utilizando PHP, MySQL, xHTML e CSS com efeitos de transição
  em jQuery.
wordpress_id: 737
wordpress_url: http://blog.thiagobelem.net/?p=737
date: '2010-04-26 22:30:35 -0300'
date_gmt: '2010-04-27 01:30:35 -0300'
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
<p>Hoje vamos fazer a terceira e última parte do nosso sistema de destaques.</p>
<p>Antes de mais nada, queria pedir desculpas pela demora... Minha vida está um pouco atrapalhada agora que estou começando a escrever artigos pra revistas (ha!)... Mas ontem decidi que iria dedicar no mínimo uma hora por dia para o blog, e lá vamos nós! :)</p>
<p>Nessa parte do tutorial nós iremos criar um arquivo PHP que irá fazer a conexão com o banco de dados (MySQL) e fazer a consulta que trará os dados de cada um dos destaques para "alimentarmos" nosso HTML.</p>
<p>Para o nosso banco de dados iremos utilizar a seguinte tabela:</p>
<p>[code language="sql"]<br />
CREATE TABLE IF NOT EXISTS `destaques` (<br />
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,<br />
  `titulo` VARCHAR(100) NOT NULL ,<br />
  `link` VARCHAR(150) NOT NULL ,<br />
  `imagem` VARCHAR(150) NOT NULL ,<br />
  `ativo` TINYINT(1)  NOT NULL DEFAULT 1 ,<br />
  PRIMARY KEY (`id`) )<br />
ENGINE = MyISAM;<br />
[/code]</p>
<h3>0. Transparência</h3>
<p>Antes da gente começar a codificar a parte três... Vamos colocar uma coisinha no CSS que faltou na Parte 2: a transparência do fundo preto da legenda... Edite o CSS dos destaques e coloque isso:</p>
<p>[code language="css"]<br />
#blocoDestaques ul li div.fundo {<br />
	opacity: 0.80;<br />
	-ms-filter: &quot;progid:DXImageTransform.Microsoft.Alpha(Opacity=80)&quot;;<br />
	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);<br />
}<br />
[/code]</p>
<p>Isso fará com que a div de fundo fique com 80% de opacidade.</p>
<h3>1. Configurações</h3>
<p>Vamos começar com um arquivo chamado <strong>mysql_destaques.php</strong> e nele colocar um bloco PHP vazio:</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>?&gt;<br />
[/code]</p>
<p>Agora nós iremos definir algumas variáveis de configuração:</p>
<p>[code language="php" firstline="3"]<br />
/*<br />
 * Configurações do sistema de destaques<br />
 */<br />
$destaques = array(<br />
	// Dados de conexão ao MySQL<br />
	'mysql' =&gt; array(<br />
		'servidor' =&gt; 'localhost',<br />
		'usuario' =&gt; 'root',<br />
		'senha' =&gt; '12345',<br />
		'banco' =&gt; 'meu_site'),</p>
<p>	// Nome da tabela com os destaques<br />
	'tabela' =&gt; 'destaques',</p>
<p>	// Limite máximo de destaques que serão exibidos<br />
	'limite' =&gt; 5<br />
);[/code]</p>
<h3>2. Conexão com o MySQL</h3>
<p>Se o seu site já se conecta ao banco de dados MySQL automaticamente, você pode apagar a parte da conexão ao MySQL e pular para o item três...</p>
<p>Fazemos a conexão com o banco de dados:</p>
<p>[code language="php" firstline="21"]<br />
/**<br />
 * Conexão com o MySQL<br />
 *<br />
 * Atenção: Comente as próximas linhas se o seu site já se<br />
 *  conectar com o MySQL fora desse script<br />
 */<br />
mysql_connect($destaques['mysql']['servidor'], $destaques['mysql']['usuario'], $destaques['mysql']['senha']) OR trigger_error('ERRO: ' . mysql_error());<br />
mysql_select_db($destaques['mysql']['banco']) OR trigger_error('ERRO: ' . mysql_error());<br />
[/code]</p>
<h3>3. Buscando os dados</h3>
<p>Agora vai começar a brincadeira... Vamos criar e executar uma consulta para trazer três colunas da tabela <code>`destaques`</code>:<br />
[code language="php" firstline="30"]<br />
/*<br />
 * Busca os dados na tabela de destaques<br />
 */<br />
$sql = &quot;SELECT `titulo`, `link`, `imagem`<br />
		FROM `{$destaques['tabela']}`<br />
		WHERE `ativo` = 1<br />
		ORDER BY `id` DESC<br />
		LIMIT {$destaques['limite']}&quot;;<br />
$query = mysql_query($sql) OR trigger_error('ERRO: ' . mysql_error());<br />
[/code]</p>
<p>Nós já executamos a consulta e já temos o <em>Resource MySQL</em> (ou resultado)... Precisamos apenas rodar um loop e passar esses dados para um array que será usado mais a diante para montar o nosso HTML.</p>
<p>[code language="php" firstline="40"]<br />
/**<br />
 * Loop que traz os dados do MySQL e armazena-os em um array $lista_destaques<br />
 */<br />
$lista_destaques = array();<br />
while ($registro = mysql_fetch_object($query)) {<br />
	$lista_destaques[] = $registro;<br />
}<br />
[/code]</p>
<p>Pronto... Nosso arquivo está pronto! Veja <a href="http://blog.thiagobelem.net/exemplos/destaque/mysql_destaques.phps">aqui</a> como ele ficou.</p>
<p>Agora vamos voltar ao HTML do nosso sistema de destaques que até hoje está assim:</p>
<p>[code language="html"]<br />
&lt;!-- destaques --&gt;<br />
&lt;div id=&quot;blocoDestaques&quot;&gt;</p>
<p>	&lt;a class=&quot;faixa&quot; href=&quot;#&quot; title=&quot;&quot;&gt;&lt;!-- --&gt;&lt;/a&gt;</p>
<p>	&lt;ul&gt;<br />
		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 1&quot;&gt;<br />
				&lt;img src=&quot;img/destaque1.jpg&quot; alt=&quot;Destaque 1&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 1&quot;&gt;Destaque 1 - Muita coisa boa!&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;</p>
<p>		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 2&quot;&gt;<br />
				&lt;img src=&quot;img/destaque2.jpg&quot; alt=&quot;Destaque 2&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 2&quot;&gt;Destaque 2 - Nem tão bom assim...&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;</p>
<p>		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 3&quot;&gt;<br />
				&lt;img src=&quot;img/destaque3.jpg&quot; alt=&quot;Destaque 3&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 3&quot;&gt;Destaque 3 - Agora sim... bem melhor!&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;<br />
&lt;!-- /destaques --&gt;<br />
[/code]</p>
<p>Vamos fazer algumas modificações no nosso HTML... Vamos começar incluindo o arquivo PHP que acabamos de criar logo antes da div#blocoDestaques e remover os LIs deixando apenas um:</p>
<p>[code language="php"]<br />
&lt;!-- destaques --&gt;<br />
&lt;?php require_once('mysql_destaques.php'); ?&gt;<br />
&lt;div id=&quot;blocoDestaques&quot;&gt;</p>
<p>	&lt;a class=&quot;faixa&quot; href=&quot;#&quot; title=&quot;&quot;&gt;&lt;!-- --&gt;&lt;/a&gt;</p>
<p>	&lt;ul&gt;<br />
		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 1&quot;&gt;<br />
				&lt;img src=&quot;img/destaque1.jpg&quot; alt=&quot;Destaque 1&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 1&quot;&gt;Destaque 1 - Muita coisa boa!&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;<br />
&lt;!-- /destaques --&gt;<br />
[/code]</p>
<p>Agora é só criar um loop utilizando o <code>foreach()</code> para gerar um LI para cada destaque que foi encontrado no banco de dados... Vamos também substituir os valores "enchedores de linguiça" por valores dinâmicos:</p>
<p>[code language="php"]<br />
&lt;!-- destaques --&gt;<br />
&lt;?php require_once('mysql_destaques.php'); ?&gt;<br />
&lt;div id=&quot;blocoDestaques&quot;&gt;</p>
<p>	&lt;a class=&quot;faixa&quot; href=&quot;#&quot; title=&quot;&quot;&gt;&lt;!-- --&gt;&lt;/a&gt;</p>
<p>	&lt;ul&gt;<br />
		&lt;?php foreach ($lista_destaques AS $destaque) { ?&gt;<br />
		&lt;li&gt;<br />
			&lt;a href=&quot;&lt;?php echo $destaque-&gt;link; ?&gt;&quot; title=&quot;&lt;?php echo $destaque-&gt;titulo; ?&gt;&quot;&gt;<br />
				&lt;img src=&quot;&lt;?php echo $destaque-&gt;imagem; ?&gt;&quot; alt=&quot;&lt;?php echo $destaque-&gt;titulo; ?&gt;&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;&lt;?php echo $destaque-&gt;link; ?&gt;&quot; title=&quot;&lt;?php echo $destaque-&gt;titulo; ?&gt;&quot;&gt;&lt;?php echo $destaque-&gt;titulo; ?&gt;&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;<br />
		&lt;?php } ?&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;<br />
&lt;!-- /destaques --&gt;<br />
[/code]</p>
<p>Podemos ainda adicionar uma condição ao redor da div#blocoDestaques para ter certeza que nosso script irá funcionar e não vai deixar nenhum buraco no site:</p>
<p>[code language="php"]<br />
&lt;!-- destaques --&gt;<br />
&lt;?php require_once('mysql_destaques.php'); ?&gt;<br />
&lt;?php if (isset($lista_destaques) AND !empty($lista_destaques)) { ?&gt;<br />
&lt;div id=&quot;blocoDestaques&quot;&gt;</p>
<p>	&lt;a class=&quot;faixa&quot; href=&quot;#&quot; title=&quot;&quot;&gt;&lt;!-- --&gt;&lt;/a&gt;</p>
<p>	&lt;ul&gt;<br />
		&lt;?php foreach ($lista_destaques AS $destaque) { ?&gt;<br />
		&lt;li&gt;<br />
			&lt;a href=&quot;&lt;?php echo $destaque-&gt;link; ?&gt;&quot; title=&quot;&lt;?php echo $destaque-&gt;titulo; ?&gt;&quot;&gt;<br />
				&lt;img src=&quot;&lt;?php echo $destaque-&gt;imagem; ?&gt;&quot; alt=&quot;&lt;?php echo $destaque-&gt;titulo; ?&gt;&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;&lt;?php echo $destaque-&gt;link; ?&gt;&quot; title=&quot;&lt;?php echo $destaque-&gt;titulo; ?&gt;&quot;&gt;&lt;?php echo $destaque-&gt;titulo; ?&gt;&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;<br />
		&lt;?php } ?&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;<br />
&lt;?php } ?&gt;<br />
&lt;!-- /destaques --&gt;<br />
[/code]</p>
<p>Com essa condição, se por algum acaso do destino o array <code>$lista_destaques</code> não existir ou for vazio (nenhum destaque encontrado), nós não exibimos nenhum HTML do bloco de destaques, deixando assim o site com um elemento a menos, mas funcionando.</p>
<p>E o nosso sistema de destaques está pronto!</p>
<p>Espero que tenham gostado!</p>
