---
layout: post
status: publish
published: true
title: PHP e MySQL para iniciantes – Consulta Simples
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aprenda a fazer consultas simples utilizando PHP para acessar dados salvos
  no MySQL
wordpress_id: 822
wordpress_url: http://blog.thiagobelem.net/?p=822
date: '2010-07-20 16:38:15 -0300'
date_gmt: '2010-07-20 19:38:15 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags:
- PHP
- MySQL
- Query
---
<p>Fala minha gente!</p>
<p>Hoje consegui um tempinho para voltar a postar no blog e resolvi voltar um com uma sequencia de tutorias básicos sobre MySQL + PHP para iniciantes.</p>
<p>Nessa primeira parte vamos criar um script que irá resgatar as notícias de um banco de dados e fazer mais alguns procedimentos.</p>
<div style="background: #FFF7D9; border: 1px dashed #FFE294; padding: 5px; margin-bottom: 10px;">Vamos usar <a href="http://www.php.net/manual/pt_BR/book.mysqli.php">MySQLi</a> ao invés de MySQL. Mesmo sendo um recurso <em>avançado</em> para alguns, é bom ensinar uma forma correta e segura de trabalhar pra quem tá começando. :)</p>
<p style="margin-bottom: 0px;">• Saiba mais sobre o MySQLi <a title="Usando o MySQLi Orientado a Objetos" href="http://blog.thiagobelem.net/mysql/usando-o-mysqli-orientado-a-objetos/">aqui</a> e <a title="Guia prático de MySQLi no PHP" href="http://blog.thiagobelem.net/mysql/guia-pratico-de-mysqli-no-php/">aqui</a></p>
<p style="margin-bottom: 0px;">• Os recursos utilizando aqui (MySQLi) só funcionam em <strong>PHP 5+</strong> e <strong>MySQL 4.1+</strong></p>
</div>
<p>Essas serão as tabelas que iremos utilizar nesse e nos próximos tutoriais:</p>
<p><img class="aligncenter size-full wp-image-850" title="Banco de Dados" src="http://blog.thiagobelem.net/arquivos/2010/07/database1.png" alt="Tabelas notícias e categorias" width="340" height="232" /></p>
<p>Iremos usar essas tabelas para armazenar notícias que estarão ligadas à categorias.</p>
<ul>
<li>Cada <strong>notícia</strong> pertence a uma <strong>categoria</strong></li>
<li>Cada <strong>categoria</strong> contém zero ou mais <strong>notícias</strong></li>
</ul>
<div style="background: #FFF7D9; border: 1px dashed #FFE294; padding: 5px; margin-bottom: 10px;">
<p style="margin-bottom: 0px;">A imagem acima foi criada utilizando o <a href="http://wb.mysql.com/">MySQL Workbench</a>, uma ótima ferramenta de <a title="modelagem de banco de dados" href="http://blog.thiagobelem.net/mysql/modelagem-de-banco-de-dados/">modelagem de banco de dados</a>.</p>
</div>
<p>Para criar essas tabelas em seu banco de dados, execute esse código SQL:</p>
<p>[code language="sql"]<br />
-- -----------------------------------------------------<br />
-- Table `categorias`<br />
-- -----------------------------------------------------<br />
DROP TABLE IF EXISTS `categorias` ;</p>
<p>CREATE  TABLE IF NOT EXISTS `categorias` (<br />
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,<br />
  `nome` VARCHAR(50) NOT NULL ,<br />
  PRIMARY KEY (`id`) )<br />
ENGINE = MyISAM;</p>
<p>-- -----------------------------------------------------<br />
-- Table `noticias`<br />
-- -----------------------------------------------------<br />
DROP TABLE IF EXISTS `noticias` ;</p>
<p>CREATE  TABLE IF NOT EXISTS `noticias` (<br />
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,<br />
  `categoria_id` INT UNSIGNED NOT NULL ,<br />
  `titulo` VARCHAR(100) NOT NULL ,<br />
  `descricao` TEXT NOT NULL ,<br />
  `texto` LONGTEXT NOT NULL ,<br />
  `ativa` TINYINT(1)  NOT NULL DEFAULT 1 ,<br />
  `cadastro` DATETIME NOT NULL ,<br />
  PRIMARY KEY (`id`) ,<br />
  INDEX `CATEGORIA` (`categoria_id` ASC) ,<br />
  CONSTRAINT `FK_CATEGORIA`<br />
    FOREIGN KEY (`categoria_id` )<br />
    REFERENCES `categorias` (`id` )<br />
    ON DELETE NO ACTION<br />
    ON UPDATE NO ACTION)<br />
ENGINE = MyISAM;<br />
[/code]</p>
<p>Vamos iniciar o nosso script criando um pequeno script de conexão ao banco de dados:</p>
<p>[code language="php" highlight="21"]<br />
&lt;?php<br />
/**<br />
 * PHP e MySQL para iniciantes<br />
 *<br />
 * Arquivo que faz a conexão com o banco de dados utilizando MySQLi<br />
 *<br />
 * PHP 5+, MySQL 4.1+<br />
 *<br />
 * @author Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
 * @link http://blog.thiagobelem.net/mysql/php-e-mysql-para-iniciantes-consulta-simples/<br />
 */</p>
<p>// Dados de acesso ao servidor MySQL<br />
$MySQL = array(<br />
	'servidor' =&gt; '127.0.0.1',	// Endereço do servidor<br />
	'usuario' =&gt; 'root',		// Usuário<br />
	'senha' =&gt; '',				// Senha<br />
	'banco' =&gt; 'meu_site'		// Nome do banco de dados<br />
);</p>
<p>$MySQLi = new MySQLi($MySQL['servidor'], $MySQL['usuario'], $MySQL['senha'], $MySQL['banco']);</p>
<p>// Verifica se ocorreu um erro e exibe a mensagem de erro<br />
if (mysqli_connect_errno())<br />
    trigger_error(mysqli_connect_error(), E_USER_ERROR);</p>
<p>?&gt;<br />
[/code]</p>
<p>Na linha 21 nós criamos uma instância do MySQLi passando os dados de conexão com o servidor e, logo depois, verificamos se houve algum erro durante a conexão e exibimos a mensagem de erro.</p>
<p>Salve esse script com o nome de <code>mysqli.php</code> em uma pasta chamada <code>includes</code>.</p>
<p>O próximo passo será criar um script que faz uma consulta SQL, vamos começar o arquivo PHP com os comentários de créditos e o <code><a href="http://php.net/manual/en/function.require-once.php">require</a></code> para chamar o arquivo de conexão ao banco de dados:</p>
<p>[code language="php"]<br />
&lt;?php<br />
/**<br />
 * PHP e MySQL para iniciantes<br />
 *<br />
 * Arquivo com um exemplo de consulta ao banco de dados MySQL<br />
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
<p>Agora vamos montar uma consulta SQL simples para buscar as 10 últimas notícias ativas:</p>
<p>[code language="php" firstline="17"]<br />
// Monta a consulta SQL para trazer as últimas 10 notícias ativas<br />
$sql = 'SELECT *<br />
		FROM `noticias` AS Noticia<br />
		WHERE Noticia.`ativa` = 1<br />
		ORDER BY Noticia.`cadastro` DESC<br />
		LIMIT 10';<br />
[/code]</p>
<p>A consulta montada poderia ser traduzida por:</p>
<blockquote><p>SELECIONE todas as colunas<br />
DA TABELA `noticias`<br />
ONDE `ativa` for igual a 1<br />
ORDENANDO PELO `cadastro` DECRESCENTEMENTE<br />
LIMITADO A 10 resultados</p></blockquote>
<p>Agora precisamos executar a consulta utilizando o método <code><a href="http://www.php.net/manual/pt_BR/mysqli.query.php">query</a></code> do MySQLi:</p>
<p>[code language="php" firstline="24"]<br />
// Executa a consulta OU mostra uma mensagem de erro<br />
$resultado = $MySQLi-&gt;query($sql) OR trigger_error($MySQLi-&gt;error, E_USER_ERROR);<br />
[/code]</p>
<p>E agora só precisamos rodar um loop, e em cada iteração (passada no loop) iremos exibir a notícia encontrada, montando um bloco HTML:</p>
<p>[code language="php" firstline="27"]<br />
// Faz um loop, passando por todos os resultados encontrados<br />
while ($noticia = $resultado-&gt;fetch_object()) {<br />
	// Exibe a notícia dentro de um bloco HTML<br />
	?&gt;</p>
<p>	&lt;h2&gt;&lt;?php echo $noticia-&gt;titulo; ?&gt;&lt;/h2&gt;<br />
	&lt;p&gt;&lt;?php echo $noticia-&gt;descricao; ?&gt;&lt;/p&gt;<br />
	&lt;p&gt;&lt;a href=&quot;noticia.php?id=&lt;?php echo $noticia-&gt;id; ?&gt;&quot; title=&quot;Continue lendo essa notícia&quot;&gt;Leia mais &amp;raquo;&lt;/a&gt;&lt;/p&gt;</p>
<p>	&lt;?php<br />
} // while ($noticia = $resultado-&gt;fetch_object())<br />
[/code]</p>
<p>Fazendo isso, para cada notícia encontrada pela consulta, será criado o seguinte bloco HTML:</p>
<p>[code language="html"]<br />
&lt;h2&gt;Titulo da notícia&lt;/h2&gt;<br />
&lt;p&gt;Descrição da notícia&lt;/p&gt;<br />
&lt;p&gt;&lt;a href=&quot;noticia.php?id=2&quot; title=&quot;Continue lendo essa notícia&quot;&gt;Leia mais &amp;raquo;&lt;/a&gt;&lt;/p&gt;<br />
[/code]</p>
<p>Depois disso, podemos colocar mais um pequeno bloco de código que irá mostrar o total de registros encontrados com a consulta:</p>
<p>[code language="php" firstline="39"]<br />
// Exibe o total de registros encontrados<br />
echo &quot;&lt;p&gt;Registros encontrados: {$resultado-&gt;num_rows}&lt;/p&gt;&quot;;<br />
[/code]</p>
<p>E no final de tudo precisamos - <strong>SEMPRE</strong> - liberar o resultado da consulta, limpando espaço na memória e deixando tudo mais organizado:</p>
<p>[code language="php" firstline="42"]<br />
// Libera o resultado para liberar memória<br />
$resultado-&gt;free();<br />
[/code]</p>
<p>O arquivo <code>consulta.php</code> ficou assim:</p>
<p>[code language="php"]<br />
&lt;?php<br />
/**<br />
 * PHP e MySQL para iniciantes<br />
 *<br />
 * Arquivo com um exemplo de consulta ao banco de dados MySQL<br />
 *<br />
 * PHP 5+, MySQL 4.1+<br />
 *<br />
 * @author Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
 * @link http://blog.thiagobelem.net/mysql/php-e-mysql-para-iniciantes-consulta-simples/<br />
 */</p>
<p>// Inclui o arquivo que faz a conexão ao banco de dados<br />
require_once('includes/mysqli.php');</p>
<p>// Monta a consulta SQL para trazer as últimas 10 notícias ativas<br />
$sql = 'SELECT *<br />
		FROM `noticias` AS Noticia<br />
		WHERE Noticia.`ativa` = 1<br />
		ORDER BY Noticia.`cadastro` DESC<br />
		LIMIT 10';</p>
<p>// Executa a consulta OU mostra uma mensagem de erro<br />
$resultado = $MySQLi-&gt;query($sql) OR trigger_error($MySQLi-&gt;error, E_USER_ERROR);</p>
<p>// Faz um loop, passando por todos os resultados encontrados<br />
while ($noticia = $resultado-&gt;fetch_object()) {<br />
	// Exibe a notícia dentro de um bloco HTML<br />
	?&gt;</p>
<p>	&lt;h2&gt;&lt;?php echo $noticia-&gt;titulo; ?&gt;&lt;/h2&gt;<br />
	&lt;p&gt;&lt;?php echo $noticia-&gt;descricao; ?&gt;&lt;/p&gt;<br />
	&lt;p&gt;&lt;a href=&quot;noticia.php?id=&lt;?php echo $noticia-&gt;id; ?&gt;&quot; title=&quot;Continue lendo essa notícia&quot;&gt;Leia mais &amp;raquo;&lt;/a&gt;&lt;/p&gt;</p>
<p>	&lt;?php<br />
} // while ($noticia = $resultado-&gt;fetch_object())</p>
<p>// Exibe o total de registros encontrados<br />
echo &quot;&lt;p&gt;Registros encontrados: {$resultado-&gt;num_rows}&lt;/p&gt;&quot;;</p>
<p>// Libera o resultado para liberar memória<br />
$resultado-&gt;free();</p>
<p>?&gt;<br />
[/code]</p>
<p>Por hoje é só! :)</p>
<p>Faça o download de todos os arquivos desse tutorial: <a href="http://blog.thiagobelem.net/arquivos/2010/07/PHP-e-MySQL-Consulta-Simples.zip">PHP-e-MySQL-Consulta-Simples.zip</a></p>
<p>Nas próximas partes desse tutorial iremos ver uma consulta mais complexa (ligando as duas tabelas) e outros scripts para cadastrar e editar notícias.</p>
<p>Um grade abraço e até a próxima!</p>
