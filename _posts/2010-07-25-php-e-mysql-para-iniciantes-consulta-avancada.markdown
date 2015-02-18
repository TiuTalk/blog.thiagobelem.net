---
layout: post
status: publish
published: true
title: PHP e MySQL para iniciantes – Consulta Avançada
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Continuação do tutorial que ensina iniciantes a trabalharem com PHP e MySQL.
  Nessa parte você aprenderá a fazer consultas avançadas utilizando PHP para acessar
  dados salvos no MySQL, unindo resultados de duas tabelas
wordpress_id: 875
wordpress_url: http://blog.thiagobelem.net/?p=875
date: '2010-07-25 17:48:35 -0300'
date_gmt: '2010-07-25 20:48:35 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags:
- PHP
- MySQL
- Query
---
<p>Hoje vamos continuar a nossa pequena seqüencia de tutoriais ensinando o básico do trabalho com PHP e MySQL.</p>
<p>Na parte anterior, ensinei a fazer uma consulta simples no MySQL, a consulta utilizada buscava as últimas 10 notícias da tabela de notícias e exibia-as seqüencialmente, da mais recente para a mais antiga.</p>
<p>Hoje vamos fazer uma consulta semelhante, mas iremos fazer o relacionamento entre as duas tabelas (<code>noticias</code> e <code>categorias</code>) para buscar apenas as notícias de uma categoria.</p>
<p>Começaremos o arquivo <code>consulta-avancada.php</code> da mesma forma que iniciamos o anterior, com um bloco de comentários que explica o arquivo e inclui o arquivo que cria a instância do MySQLi que será usada nesse novo arquivo.</p>
<p>[code language="php"]<br />
&lt;?php<br />
/**<br />
 * PHP e MySQL para iniciantes<br />
 *<br />
 * Arquivo com um exemplo de consulta avançada ao banco de dados MySQL<br />
 *<br />
 * PHP 5+, MySQL 4.1+<br />
 *<br />
 * @author Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
 * @link http://blog.thiagobelem.net/mysql/php-e-mysql-para-iniciantes-consulta-simples/<br />
 */</p>
<p>// Inclui o arquivo que faz a conexão ao banco de dados<br />
require_once('includes/mysqli.php');</p>
<p>?&gt;<br />
[/code]</p>
<p>Agora iremos definir uma variável contendo o nome da categoria que iremos usar para filtrar as notícias... O conteúdo dessa variável está "<em>hard coded</em>" no arquivo, mas poderia ser dinâmico e vir da uma variável <code>$_GET</code>, por exemplo.</p>
<p>[code language="php" firstline="16"]<br />
// Iremos buscar apenas as notícias da categoria &quot;Esportes&quot;<br />
$categoria = &quot;Esportes&quot;; // Essa variável poderia ter vindo, por exemplo, do $_GET<br />
[/code]</p>
<p>Feito isso, montaremos a consulta que será executada no banco de dados:</p>
<p>[code language="php" firstline="22"]<br />
// Monta a consulta SQL para trazer as últimas 10 notícias ativas e que pertençam à categoria específica<br />
$sql = &quot;SELECT<br />
			Noticia.id, Noticia.titulo, Noticia.descricao,<br />
			Categoria.nome AS categoria<br />
		FROM `noticias` AS Noticia<br />
			INNER JOIN `categorias` AS Categoria<br />
				ON Categoria.`id` = Noticia.`categoria_id`<br />
		WHERE<br />
			Noticia.`ativa` = 1<br />
			AND<br />
			Categoria.`nome` = '{$categoria}'<br />
		ORDER BY Noticia.`cadastro` DESC<br />
		LIMIT 10&quot;;<br />
[/code]</p>
<p>O interessante dessa consulta é que ela busca os registros da tabela <code>noticia</code> que possuam um relacionamento com os registros da tabela <code>categorias</code> e, o registro correspondente na tabela <code>categorias</code> deve possuir o valor da variável <code>$categoria</code> no campo <code>nome</code>.</p>
<p>Para quem não entendeu a explicação acima, vale a pena a leitura do meu artigo <a title="Relacionamento de Tabelas no MySQL" href="http://blog.thiagobelem.net/mysql/relacionamento-de-tabelas-no-mysql/">Relacionamento de Tabelas no MySQL</a>.</p>
<p>Continuando o script, rodamos a consulta e exibimos o resultado:</p>
<p>[code language="php" firstline="36"]<br />
// Prepara a consulta OU mostra uma mensagem de erro<br />
$resultado = $MySQLi-&gt;query($sql) OR trigger_error($MySQLi-&gt;error, E_USER_ERROR);</p>
<p>// Faz um loop, passando por todos os resultados encontrados<br />
while ($noticia = $resultado-&gt;fetch_object()) {<br />
	// Exibe a notícia dentro de um bloco HTML<br />
	?&gt;</p>
<p>	&lt;h2&gt;&lt;?php echo $noticia-&gt;categoria; ?&gt; - &lt;?php echo $noticia-&gt;titulo; ?&gt;&lt;/h2&gt;<br />
	&lt;p&gt;&lt;?php echo $noticia-&gt;descricao; ?&gt;&lt;/p&gt;<br />
	&lt;p&gt;&lt;a href=&quot;noticia.php?id=&lt;?php echo $noticia-&gt;id; ?&gt;&quot; title=&quot;Continue lendo essa notícia&quot;&gt;Leia mais &amp;raquo;&lt;/a&gt;&lt;/p&gt;</p>
<p>	&lt;?php<br />
} // while ($noticia = $resultado-&gt;fetch_object())<br />
[/code]</p>
<p>E, para finalizar, exibimos o total de resultados encontrados e limpamos a consulta da memória do PHP:</p>
<p>[code language="php" firstline="51"]<br />
// Exibe o total de registros encontrados<br />
echo &quot;&lt;p&gt;Registros encontrados: {$resultado-&gt;num_rows}&lt;/p&gt;&quot;;</p>
<p>// Libera o resultado para liberar memória<br />
$resultado-&gt;free();<br />
[/code]</p>
<p>E vocês acabaram de ver um exemplo de consulta complexa usando MySQLi! :)</p>
<p>Faça o download dos arquivos desse tutorial aqui: <a href="http://blog.thiagobelem.net/arquivos/2010/07/PHP-e-MySQL-Consulta-Avançada.zip">PHP-e-MySQL-Consulta-Avançada.zip</a></p>
<p>Abraços e até a próxima!</p>
