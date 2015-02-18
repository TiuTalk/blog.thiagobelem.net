---
layout: post
title: Como criar um Sistema de Login com Níveis de Permissão
excerpt: Aprenda como é a criação de um sistema de login com níveis de acesso e entenda
  como tudo funciona desde a criação do banco de dados até a proteção das páginas
  individualmente.

date: '2009-07-24 10:14:29 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags:
- PHP
- MySQL
- Login
---
Fala pessoal!

Hoje acordei cedo e resolvi criar um novo artigo explicando como se faz um sistema de login passo-a-passo, que nem eu fiz o tutorial sobre <a href="/upload-de-arquivos-como-tudo-funciona">como funciona o upload e validação de arquivos</a> no PHP.

O meu intuito nesse artigo não é entregar um script pronto mas sim te mostrar o "caminho das pedras" enquanto <strong>você</strong> é quem criará o seu próprio sistema.

Versões utilizadas nesse artigo: <strong>PHP 5.2.9</strong> e <strong>MySQL 5.0.5</strong>.

O nosso sistema consistirá em um login simples, validado por usuário e senha (encriptada) contra uma tabela no banco de dados e armazenando os dados na sessão. Haverão dois níveis de acesso para os nossos usuários: normal (1) e administrador (2).

<h3>Criando a Tabela MySQL</h3>
Você pode executar esse código MySQL para criar a nossa tabela de usuários que tem 7 campos: id, nome, usuario, senha, niveis, ativo e cadastro:
[code language="sql"]
CREATE TABLE IF NOT EXISTS `usuarios` (
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR( 50 ) NOT NULL ,
	`usuario` VARCHAR( 25 ) NOT NULL ,
	`senha` VARCHAR( 40 ) NOT NULL ,
	`email` VARCHAR( 100 ) NOT NULL ,
	`nivel` INT(1) UNSIGNED NOT NULL DEFAULT '1',
	`ativo` BOOL NOT NULL DEFAULT '1',
	`cadastro` DATETIME NOT NULL ,
	PRIMARY KEY (`id`),
	UNIQUE KEY `usuario` (`usuario`),
	KEY `nivel` (`nivel`)
) ENGINE=MyISAM ;
[/code]

Com isso você já tem uma tabela pronta para o nosso tutorial... Rode esse script se quiser alimentar a tabela com alguns usuários de teste:
[code language="sql"]
INSERT INTO `usuarios` VALUES (NULL, 'Usuário Teste', 'demo', SHA1( 'demo' ), 'usuario@demo.com.br', 1, 1, NOW( ));
INSERT INTO `usuarios` VALUES (NULL, 'Administrador Teste', 'admin', SHA1( 'admin' ), 'admin@demo.com.br', 2, 1, NOW( ));
[/code]

Como vocês podem perceber, o nosso campo de senha tem 40 caracteres e quando cadastramos os usuários testes usamos <strong style="color: white; background: gray">SHA1('{senha}')</strong> isso significa que usaremos uma senha encriptada... Se você quiser saber mais sobre sha1 veja esse artigo: <a href="/criptografia-no-php-usando-md5-sha1-e-base64" target="_blank">Criptografia no PHP usando md5, sha1 e base64</a>.



<h3>O formulário de Login em XHTML</h3>
Vamos criar agora o nosso formulário que será onde o visitante entrará com os dados e será mandado para a pagina validacao.php onde os dados serão validados (ohh).


[code language="html"]
<!-- Formulário de Login -->
<form action="validacao.php" method="post">
<fieldset>
<legend>Dados de Login</legend>
	<label for="txUsuario">Usuário</label>
	<input type="text" name="usuario" id="txUsuario" maxlength="25" />
	<label for="txSenha">Senha</label>
	<input type="password" name="senha" id="txSenha" />

	<input type="submit" value="Entrar" />
</fieldset>
</form>
[/code]
Como esse artigo não é uma aula sobre formulários e método POST eu vou pular a parte que fala sobre os names desses inputs e a relação deles com o PHP em si.



<h3>A validação dos dados</h3>
Já temos o banco de dados e o formulário de login... Agora vamos começar a fazer a validação. Os próximos códigos deverão ser colocados dentro do <strong style="color: white; background: gray">validacao.php</strong> que irá tratar os dados recebidos do formulário:

Primeiro de tudo nós precisamos verificar se o usuário de fato preencheu algo no formulário, caso contrário mandamos ele de volta para o <strong style="color: white; background: gray">index.php</strong>:


[code language="php"]
<?php

// Verifica se houve POST e se o usuário ou a senha é(são) vazio(s)
if (!empty($_POST) AND (empty($_POST['usuario']) OR empty($_POST['senha']))) {
	header("Location: index.php"); exit;
}

?>
[/code]

Com isso, todo código que vier depois desse if estará seguro de que os dados foram preenchidos no formulário.

Agora nós iremos abrir uma conexão com o MySQL mas essa conexão pode ser feita de outra forma, até antes do if se você preferir... Depois de abrir a conexão nós iremos transmitir os dois valores inseridos pelo visitante (usuário e senha) para novas variáveis e usaremos o <strong style="color: orange; background: gray">mysql_real_escape_string()</strong> para evitar erros no MySQL.


[code language="php"]
<?php

// Verifica se houve POST e se o usuário ou a senha é(são) vazio(s)
if (!empty($_POST) AND (empty($_POST['usuario']) OR empty($_POST['senha']))) {
	header("Location: index.php"); exit;
}

// Tenta se conectar ao servidor MySQL
mysql_connect('localhost', 'root', '') or trigger_error(mysql_error());
// Tenta se conectar a um banco de dados MySQL
mysql_select_db('usuarios') or trigger_error(mysql_error());

$usuario = mysql_real_escape_string($_POST['usuario']);
$senha = mysql_real_escape_string($_POST['senha']);

?>
[/code]

Agora é hora de validar os dados contra a tabela de usuários:


[code language="php"]
<?php

// Verifica se houve POST e se o usuário ou a senha é(são) vazio(s)
if (!empty($_POST) AND (empty($_POST['usuario']) OR empty($_POST['senha']))) {
	header("Location: index.php"); exit;
}

// Tenta se conectar ao servidor MySQL
mysql_connect('localhost', 'root', '') or trigger_error(mysql_error());
// Tenta se conectar a um banco de dados MySQL
mysql_select_db('usuarios') or trigger_error(mysql_error());

$usuario = mysql_real_escape_string($_POST['usuario']);
$senha = mysql_real_escape_string($_POST['senha']);

// Validação do usuário/senha digitados
$sql = "SELECT `id`, `nome`, `nivel` FROM `usuarios` WHERE (`usuario` = '". $usuario ."') AND (`senha` = '". sha1($senha) ."') AND (`ativo` = 1) LIMIT 1";
$query = mysql_query($sql);
if (mysql_num_rows($query) != 1) {
	// Mensagem de erro quando os dados são inválidos e/ou o usuário não foi encontrado
	echo "Login inválido!"; exit;
} else {
	// Salva os dados encontados na variável $resultado
	$resultado = mysql_fetch_assoc($query);
}

?>
[/code]

Repare que estamos buscando registros que tenham o usuário igual ao digitado pelo visitante e que tenham uma senha igual a versão SHA1 da senha digitada pelo visitante... Também buscamos apenas por registros de usuários que estejam ativos, assim quando você precisar remover um usuário do sistema, mas não pode simplesmente excluir o registro é só trocar o valor da coluna ativo pra zero. ;)

A consulta gerada fica mais ou menos assim:
[code language="sql"]
SELECT `id`, `nome`, `nivel` FROM `usuarios` WHERE (`usuario` = 'a') AND (`senha` = 'e9d71f5ee7c92d6dc9e92ffdad17b8bd49418f98') AND (`ativo` = 1) LIMIT 1
[/code]

Depois de rodar a consulta (query) nós verificamos se o número de resultados encontrados (ou não) é diferente de um, caso seja é exibida uma mensagem de erro acompanhada de um exit que finaliza o script... Caso ele encontre apenas um resultado nós temos o nosso usuário e já puxamos o seu ID, nome e nível de acesso do banco de dados.



<h3>Salvando os dados na sessão</h3>
Agora nós precisamos salvar os dados encontrados na sessão pois eles serão utilizados mais tarde, em outras páginas e eles precisam "persistir" até lá... Depois de salvar os dados na sessão nós iremos redirecionar o visitante para uma página restrita:


[code language="php"]
if (mysql_num_rows($query) != 1) {
	// Mensagem de erro quando os dados são inválidos e/ou o usuário não foi encontrado
	echo "Login inválido!"; exit;
} else {
	// Salva os dados encontados na variável $resultado
	$resultado = mysql_fetch_assoc($query);

	// Se a sessão não existir, inicia uma
	if (!isset($_SESSION)) session_start();

	// Salva os dados encontrados na sessão
	$_SESSION['UsuarioID'] = $resultado['id'];
	$_SESSION['UsuarioNome'] = $resultado['nome'];
	$_SESSION['UsuarioNivel'] = $resultado['nivel'];

	// Redireciona o visitante
	header("Location: restrito.php"); exit;
}

[/code]



<h3>Verificando se o usuário está logado</h3>
Nosso sistema de login está quase completo! Agora só precisamos verificar se o usuário está logado no sistema e se o seu o nível de acesso condiz com o da página... Vamos agora escrever um pequeno bloco de PHP no início do arquivo <strong style="color: white; background: gray">restrito.php</strong> (que só deve ser acessado por usuários logados):


[code language="php"]
<?php

// A sessão precisa ser iniciada em cada página diferente
if (!isset($_SESSION)) session_start();

// Verifica se não há a variável da sessão que identifica o usuário
if (!isset($_SESSION['UsuarioID'])) {
	// Destrói a sessão por segurança
	session_destroy();
	// Redireciona o visitante de volta pro login
	header("Location: index.php"); exit;
}

?>

<h1>Página restrita</h1>
Olá, <?php echo $_SESSION['UsuarioNome']; ?>!
[/code]

Pronto meu amigo! O seu sistema de login está pronto para funcionar... Só vamos fazer alguns incrementos para ele ficar mais "usável"... Agora você vai ver como fazer a verificação de usuário logado e de nível de acesso, por exemplo para uma página onde apenas os administradores possam ter acesso:


[code language="php"]
<?php

// A sessão precisa ser iniciada em cada página diferente
if (!isset($_SESSION)) session_start();

$nivel_necessario = 2;

// Verifica se não há a variável da sessão que identifica o usuário
if (!isset($_SESSION['UsuarioID']) OR ($_SESSION['UsuarioNivel'] < $nivel_necessario)) {
	// Destrói a sessão por segurança
	session_destroy();
	// Redireciona o visitante de volta pro login
	header("Location: index.php"); exit;
}

?>
[/code]



<h3>Código de Logout</h3>
O arquivo <strong style="color: white; background: gray">logout.php</strong> é tão simples que pode ter uma linha só:
[code language="php"]
<?php session_start(); session_destroy(); header("Location: index.php"); exit; ?>
[/code]
Ou se você preferir, uma versão mais extensa:
[code language="php"]
<?php
	session_start(); // Inicia a sessão
	session_destroy(); // Destrói a sessão limpando todos os valores salvos
	header("Location: index.php"); exit; // Redireciona o visitante
?>
[/code]

--

Quem não conseguir fazer um sistema de login depois dessa aula não vai ganhar batata frita no fim do dia! :D

Pra quem quiser, aqui tem um <a href="/arquivos/2009/07/login20090724.rar" target="_blank">RAR para download</a> com os arquivos desse artigo.

--

Veja <a href="/criando-um-sistema-de-logins-com-classe-no-php-parte-1" title="Criando um sistema de logins com classe no PHP" target="_blank">aqui</a> como criar um <strong>sistema de login usando classes</strong> (Orientação a Objetos) e que funciona no PHP 4 e PHP 5.

