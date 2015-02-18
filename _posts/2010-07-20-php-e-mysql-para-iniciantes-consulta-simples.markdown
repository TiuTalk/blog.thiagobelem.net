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

<div style="background: #FFF7D9; border: 1px dashed #FFE294; padding: 5px; margin-bottom: 10px;">Vamos usar <a href="http://www.php.net/manual/pt_BR/book.mysqli.php">MySQLi</a> ao invés de MySQL. Mesmo sendo um recurso <em>avançado</em> para alguns, é bom ensinar uma forma correta e segura de trabalhar pra quem tá começando. :)

<p style="margin-bottom: 0px;">• Saiba mais sobre o MySQLi <a title="Usando o MySQLi Orientado a Objetos" href="/usando-o-mysqli-orientado-a-objetos">aqui</a> e <a title="Guia prático de MySQLi no PHP" href="/guia-pratico-de-mysqli-no-php">aqui</a>

<p style="margin-bottom: 0px;">• Os recursos utilizando aqui (MySQLi) só funcionam em <strong>PHP 5+</strong> e <strong>MySQL 4.1+</strong>

</div>
Essas serão as tabelas que iremos utilizar nesse e nos próximos tutoriais:

<img class="aligncenter size-full wp-image-850" title="Banco de Dados" src="http://blog.thiagobelem.net/arquivos/2010/07/database1.png" alt="Tabelas notícias e categorias" width="340" height="232" />

Iremos usar essas tabelas para armazenar notícias que estarão ligadas à categorias.

<ul>
<li>Cada <strong>notícia</strong> pertence a uma <strong>categoria</strong></li>
<li>Cada <strong>categoria</strong> contém zero ou mais <strong>notícias</strong></li>
</ul>
<div style="background: #FFF7D9; border: 1px dashed #FFE294; padding: 5px; margin-bottom: 10px;">
<p style="margin-bottom: 0px;">A imagem acima foi criada utilizando o <a href="http://wb.mysql.com/">MySQL Workbench</a>, uma ótima ferramenta de <a title="modelagem de banco de dados" href="/modelagem-de-banco-de-dados">modelagem de banco de dados</a>.

</div>
Para criar essas tabelas em seu banco de dados, execute esse código SQL:


[code language="sql"]
-- -----------------------------------------------------
-- Table `categorias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `categorias` ;

CREATE  TABLE IF NOT EXISTS `categorias` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(50) NOT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = MyISAM;

-- -----------------------------------------------------
-- Table `noticias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `noticias` ;

CREATE  TABLE IF NOT EXISTS `noticias` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `categoria_id` INT UNSIGNED NOT NULL ,
  `titulo` VARCHAR(100) NOT NULL ,
  `descricao` TEXT NOT NULL ,
  `texto` LONGTEXT NOT NULL ,
  `ativa` TINYINT(1)  NOT NULL DEFAULT 1 ,
  `cadastro` DATETIME NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `CATEGORIA` (`categoria_id` ASC) ,
  CONSTRAINT `FK_CATEGORIA`
    FOREIGN KEY (`categoria_id` )
    REFERENCES `categorias` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = MyISAM;
[/code]

Vamos iniciar o nosso script criando um pequeno script de conexão ao banco de dados:


[code language="php"]
<?php
/**
 * PHP e MySQL para iniciantes
 *
 * Arquivo que faz a conexão com o banco de dados utilizando MySQLi
 *
 * PHP 5+, MySQL 4.1+
 *
 * @author Thiago Belem <contato@thiagobelem.net>
 * @link http://blog.thiagobelem.net/mysql/php-e-mysql-para-iniciantes-consulta-simples/
 */

// Dados de acesso ao servidor MySQL
$MySQL = array(
	'servidor' => '127.0.0.1',	// Endereço do servidor
	'usuario' => 'root',		// Usuário
	'senha' => '',				// Senha
	'banco' => 'meu_site'		// Nome do banco de dados
);

$MySQLi = new MySQLi($MySQL['servidor'], $MySQL['usuario'], $MySQL['senha'], $MySQL['banco']);

// Verifica se ocorreu um erro e exibe a mensagem de erro
if (mysqli_connect_errno())
    trigger_error(mysqli_connect_error(), E_USER_ERROR);

?>
[/code]

Na linha 21 nós criamos uma instância do MySQLi passando os dados de conexão com o servidor e, logo depois, verificamos se houve algum erro durante a conexão e exibimos a mensagem de erro.

Salve esse script com o nome de <code>mysqli.php</code> em uma pasta chamada <code>includes</code>.

O próximo passo será criar um script que faz uma consulta SQL, vamos começar o arquivo PHP com os comentários de créditos e o <code><a href="http://php.net/manual/en/function.require-once.php">require</a></code> para chamar o arquivo de conexão ao banco de dados:


[code language="php"]
<?php
/**
 * PHP e MySQL para iniciantes
 *
 * Arquivo com um exemplo de consulta ao banco de dados MySQL
 *
 * PHP 5+, MySQL 4.1+
 *
 * @author Thiago Belem <contato@thiagobelem.net>
 * @link http://blog.thiagobelem.net/mysql/php-e-mysql-para-iniciantes-consulta-simples/
 */

// Inclui o arquivo que faz a conexão ao banco de dados
require_once('includes/mysqli.php');

?>
[/code]

Agora vamos montar uma consulta SQL simples para buscar as 10 últimas notícias ativas:


[code language="php"]
// Monta a consulta SQL para trazer as últimas 10 notícias ativas
$sql = 'SELECT *
		FROM `noticias` AS Noticia
		WHERE Noticia.`ativa` = 1
		ORDER BY Noticia.`cadastro` DESC
		LIMIT 10';
[/code]

A consulta montada poderia ser traduzida por:

<blockquote>SELECIONE todas as colunas
DA TABELA `noticias`
ONDE `ativa` for igual a 1
ORDENANDO PELO `cadastro` DECRESCENTEMENTE
LIMITADO A 10 resultados
</blockquote>
Agora precisamos executar a consulta utilizando o método <code><a href="http://www.php.net/manual/pt_BR/mysqli.query.php">query</a></code> do MySQLi:


[code language="php"]
// Executa a consulta OU mostra uma mensagem de erro
$resultado = $MySQLi->query($sql) OR trigger_error($MySQLi->error, E_USER_ERROR);
[/code]

E agora só precisamos rodar um loop, e em cada iteração (passada no loop) iremos exibir a notícia encontrada, montando um bloco HTML:


[code language="php"]
// Faz um loop, passando por todos os resultados encontrados
while ($noticia = $resultado->fetch_object()) {
	// Exibe a notícia dentro de um bloco HTML
	?>

	<h2><?php echo $noticia->titulo; ?></h2>
	<?php echo $noticia->descricao; ?>

	<a href="noticia.php?id=<?php echo $noticia->id; ?>" title="Continue lendo essa notícia">Leia mais &raquo;</a>


	<?php
} // while ($noticia = $resultado->fetch_object())
[/code]

Fazendo isso, para cada notícia encontrada pela consulta, será criado o seguinte bloco HTML:


[code language="html"]
<h2>Titulo da notícia</h2>
Descrição da notícia

<a href="noticia.php?id=2" title="Continue lendo essa notícia">Leia mais &raquo;</a>

[/code]

Depois disso, podemos colocar mais um pequeno bloco de código que irá mostrar o total de registros encontrados com a consulta:


[code language="php"]
// Exibe o total de registros encontrados
echo "Registros encontrados: {$resultado->num_rows}
";
[/code]

E no final de tudo precisamos - <strong>SEMPRE</strong> - liberar o resultado da consulta, limpando espaço na memória e deixando tudo mais organizado:


[code language="php"]
// Libera o resultado para liberar memória
$resultado->free();
[/code]

O arquivo <code>consulta.php</code> ficou assim:


[code language="php"]
<?php
/**
 * PHP e MySQL para iniciantes
 *
 * Arquivo com um exemplo de consulta ao banco de dados MySQL
 *
 * PHP 5+, MySQL 4.1+
 *
 * @author Thiago Belem <contato@thiagobelem.net>
 * @link http://blog.thiagobelem.net/mysql/php-e-mysql-para-iniciantes-consulta-simples/
 */

// Inclui o arquivo que faz a conexão ao banco de dados
require_once('includes/mysqli.php');

// Monta a consulta SQL para trazer as últimas 10 notícias ativas
$sql = 'SELECT *
		FROM `noticias` AS Noticia
		WHERE Noticia.`ativa` = 1
		ORDER BY Noticia.`cadastro` DESC
		LIMIT 10';

// Executa a consulta OU mostra uma mensagem de erro
$resultado = $MySQLi->query($sql) OR trigger_error($MySQLi->error, E_USER_ERROR);

// Faz um loop, passando por todos os resultados encontrados
while ($noticia = $resultado->fetch_object()) {
	// Exibe a notícia dentro de um bloco HTML
	?>

	<h2><?php echo $noticia->titulo; ?></h2>
	<?php echo $noticia->descricao; ?>

	<a href="noticia.php?id=<?php echo $noticia->id; ?>" title="Continue lendo essa notícia">Leia mais &raquo;</a>


	<?php
} // while ($noticia = $resultado->fetch_object())

// Exibe o total de registros encontrados
echo "Registros encontrados: {$resultado->num_rows}
";

// Libera o resultado para liberar memória
$resultado->free();

?>
[/code]

Por hoje é só! :)

Faça o download de todos os arquivos desse tutorial: <a href="/arquivos/2010/07/PHP-e-MySQL-Consulta-Simples.zip">PHP-e-MySQL-Consulta-Simples.zip</a>

Nas próximas partes desse tutorial iremos ver uma consulta mais complexa (ligando as duas tabelas) e outros scripts para cadastrar e editar notícias.

Um grade abraço e até a próxima!

