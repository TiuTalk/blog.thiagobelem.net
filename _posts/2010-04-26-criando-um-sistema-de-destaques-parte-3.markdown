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


{% highlight sql linenos %}
CREATE TABLE IF NOT EXISTS `destaques` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `titulo` VARCHAR(100) NOT NULL ,
  `link` VARCHAR(150) NOT NULL ,
  `imagem` VARCHAR(150) NOT NULL ,
  `ativo` TINYINT(1)  NOT NULL DEFAULT 1 ,
  PRIMARY KEY (`id`) )
ENGINE = MyISAM;
{% endhighlight %}

<h3>0. Transparência</h3>
Antes da gente começar a codificar a parte três... Vamos colocar uma coisinha no CSS que faltou na Parte 2: a transparência do fundo preto da legenda... Edite o CSS dos destaques e coloque isso:


{% highlight css linenos %}
#blocoDestaques ul li div.fundo {
	opacity: 0.80;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
}
{% endhighlight %}

Isso fará com que a div de fundo fique com 80% de opacidade.

<h3>1. Configurações</h3>
Vamos começar com um arquivo chamado <strong>mysql_destaques.php</strong> e nele colocar um bloco PHP vazio:


{% highlight php linenos %}
<?php

?>
{% endhighlight %}

Agora nós iremos definir algumas variáveis de configuração:


{% highlight php linenos %}
/*
 * Configurações do sistema de destaques
 */
$destaques = array(
	// Dados de conexão ao MySQL
	'mysql' => array(
		'servidor' => 'localhost',
		'usuario' => 'root',
		'senha' => '12345',
		'banco' => 'meu_site'),

	// Nome da tabela com os destaques
	'tabela' => 'destaques',

	// Limite máximo de destaques que serão exibidos
	'limite' => 5
);
{% endhighlight %}

<h3>2. Conexão com o MySQL</h3>
Se o seu site já se conecta ao banco de dados MySQL automaticamente, você pode apagar a parte da conexão ao MySQL e pular para o item três...

Fazemos a conexão com o banco de dados:


{% highlight php linenos %}
/**
 * Conexão com o MySQL
 *
 * Atenção: Comente as próximas linhas se o seu site já se
 *  conectar com o MySQL fora desse script
 */
mysql_connect($destaques['mysql']['servidor'], $destaques['mysql']['usuario'], $destaques['mysql']['senha']) OR trigger_error('ERRO: ' . mysql_error());
mysql_select_db($destaques['mysql']['banco']) OR trigger_error('ERRO: ' . mysql_error());
{% endhighlight %}

<h3>3. Buscando os dados</h3>
Agora vai começar a brincadeira... Vamos criar e executar uma consulta para trazer três colunas da tabela <code>`destaques`</code>:
{% highlight php linenos %}
/*
 * Busca os dados na tabela de destaques
 */
$sql = "SELECT `titulo`, `link`, `imagem`
		FROM `{$destaques['tabela']}`
		WHERE `ativo` = 1
		ORDER BY `id` DESC
		LIMIT {$destaques['limite']}";
$query = mysql_query($sql) OR trigger_error('ERRO: ' . mysql_error());
{% endhighlight %}

Nós já executamos a consulta e já temos o <em>Resource MySQL</em> (ou resultado)... Precisamos apenas rodar um loop e passar esses dados para um array que será usado mais a diante para montar o nosso HTML.


{% highlight php linenos %}
/**
 * Loop que traz os dados do MySQL e armazena-os em um array $lista_destaques
 */
$lista_destaques = array();
while ($registro = mysql_fetch_object($query)) {
	$lista_destaques[] = $registro;
}
{% endhighlight %}

Pronto... Nosso arquivo está pronto! Veja [aqui](/exemplos/destaque/mysql_destaques.phps) como ele ficou.

Agora vamos voltar ao HTML do nosso sistema de destaques que até hoje está assim:


{% highlight html linenos %}
<!-- destaques -->
<div id="blocoDestaques">

	[](#)

	<ul>
		<li>
			<a href="#" title="Destaque 1">
				<img src="img/destaque1.jpg" alt="Destaque 1" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 1 - Muita coisa boa!](#)

		</li>

		<li>
			<a href="#" title="Destaque 2">
				<img src="img/destaque2.jpg" alt="Destaque 2" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 2 - Nem tão bom assim...](#)

		</li>

		<li>
			<a href="#" title="Destaque 3">
				<img src="img/destaque3.jpg" alt="Destaque 3" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 3 - Agora sim... bem melhor!](#)

		</li>
	</ul>
</div>
<!-- /destaques -->
{% endhighlight %}

Vamos fazer algumas modificações no nosso HTML... Vamos começar incluindo o arquivo PHP que acabamos de criar logo antes da div#blocoDestaques e remover os LIs deixando apenas um:


{% highlight php linenos %}
<!-- destaques -->
<?php require_once('mysql_destaques.php'); ?>
<div id="blocoDestaques">

	[](#)

	<ul>
		<li>
			<a href="#" title="Destaque 1">
				<img src="img/destaque1.jpg" alt="Destaque 1" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 1 - Muita coisa boa!](#)

		</li>
	</ul>
</div>
<!-- /destaques -->
{% endhighlight %}

Agora é só criar um loop utilizando o <code>foreach()</code> para gerar um LI para cada destaque que foi encontrado no banco de dados... Vamos também substituir os valores "enchedores de linguiça" por valores dinâmicos:


{% highlight php linenos %}
<!-- destaques -->
<?php require_once('mysql_destaques.php'); ?>
<div id="blocoDestaques">

	[](#)

	<ul>
		<?php foreach ($lista_destaques AS $destaque) { ?>
		<li>
			<a href="<?php echo $destaque->link; ?>" title="<?php echo $destaque->titulo; ?>">
				<img src="<?php echo $destaque->imagem; ?>" alt="<?php echo $destaque->titulo; ?>" />
			</a>
			<div class="fundo"><!--  --></div>
			[](<?php echo $destaque->link; ?>)

		</li>
		<?php } ?>
	</ul>
</div>
<!-- /destaques -->
{% endhighlight %}

Podemos ainda adicionar uma condição ao redor da div#blocoDestaques para ter certeza que nosso script irá funcionar e não vai deixar nenhum buraco no site:


{% highlight php linenos %}
<!-- destaques -->
<?php require_once('mysql_destaques.php'); ?>
<?php if (isset($lista_destaques) AND !empty($lista_destaques)) { ?>
<div id="blocoDestaques">

	[](#)

	<ul>
		<?php foreach ($lista_destaques AS $destaque) { ?>
		<li>
			<a href="<?php echo $destaque->link; ?>" title="<?php echo $destaque->titulo; ?>">
				<img src="<?php echo $destaque->imagem; ?>" alt="<?php echo $destaque->titulo; ?>" />
			</a>
			<div class="fundo"><!--  --></div>
			[](<?php echo $destaque->link; ?>)

		</li>
		<?php } ?>
	</ul>
</div>
<?php } ?>
<!-- /destaques -->
{% endhighlight %}

Com essa condição, se por algum acaso do destino o array <code>$lista_destaques</code> não existir ou for vazio (nenhum destaque encontrado), nós não exibimos nenhum HTML do bloco de destaques, deixando assim o site com um elemento a menos, mas funcionando.

E o nosso sistema de destaques está pronto!

Espero que tenham gostado!

