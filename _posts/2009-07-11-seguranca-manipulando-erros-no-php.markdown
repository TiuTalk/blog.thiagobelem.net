---
layout: post
title: Segurança – Manipulando erros no PHP
excerpt: Aprenda a construir o seu próprio <strong>manipulador de erros</strong> do
  PHP para receber e-mails quando o seu site der "xabu" e deixe o seu site, além de
  mais bonito, mais seguro.

date: '2009-07-11 11:04:50 -0300'
categories:
- PHP
- Artigos
- Segurança
tags:
- PHP
- Erros
---
<p>Hoje vou mostrar pra vocês como usar um "manipulador de erros" (Error Handler) no PHP.</p>
<h3>Por que manipular os erros?</h3>
<p>Quase se trata de segurança, os erros do PHP são como uma janela aberta... Eles não permitem que um atacante consiga invadir/derrubar o seu site, mas permitem que o atacante conheça um pouco mais sobre o que é e como funciona o seu site.</p>
<p>Manipular os erros de forma correta, além de deixar o site mais "bonito" faz com que você saiba, em <strong>tempo real</strong>, o que acontece com aquele seu site de 4 anos atrás que você nem monitora mais, pois ele te envia um e-mail dizendo o nome do site, o arquivo e a linha que deu erro.</p>
<h3>Arquivo para a manipulação de erros</h3>
<p>Para iniciar a manipular os seus erros é só dar um include/require nesse arquivo logo no começo do seu site. E não se esqueça de mudar as configurações entre as linhas 8 e 14.</p>

[code language="php"]<?php
/**
 *  Arquivo para manipulação de erros de forma segura:
 *   envia um e-mail para o administrador com as informações sobre o erro
 */</p>
<p>// Nome do site?
$_CONFIG['errorHandler']['siteName'] = 'Meu site';
// De onde virá o e-mail?
$_CONFIG['errorHandler']['from'] = 'seu@email.com.br';
$_CONFIG['errorHandler']['fromName'] = 'seu nome';
// Para onde vai o e-mail?
$_CONFIG['errorHandler']['to'] = 'seu@email.com.br';
$_CONFIG['errorHandler']['toName'] = 'seu nome';</p>
<p>function manipuladorErros($errno, $errstr='', $errfile='', $errline='')
{
	if (error_reporting() == 0) return;</p>
<p>	global $_CONFIG;</p>
<p>	// Verifica se não foi chamada por uma 'exception'
	if(func_num_args() == 5) {
		$exception = null;
		list($errno, $errstr, $errfile, $errline) = func_get_args();
		//$backtrace = array_reverse(debug_backtrace());
	} else {
		$exc = func_get_arg(0);
		$errno = $exc->getCode(); // Nome do erro
		$errstr = $exc->getMessage(); // Descrição do erro
		$errfile = $exc->getFile(); // Arquivo
		$errline = $exc->getLine(); // Linha
		//$backtrace = $exc->getTrace();
	}
	// A variável $backtrace pode ser usada para fazer um Back Trace do erro</p>
<p>	// "Nome" de cada tipo de erro
	$errorType = array (
		E_ERROR => 'ERROR',
		E_WARNING => 'WARNING',
		E_PARSE => 'PARSING ERROR',
		E_NOTICE => 'NOTICE',
		E_CORE_ERROR => 'CORE ERROR',
		E_CORE_WARNING => 'CORE WARNING',
		E_COMPILE_ERROR => 'COMPILE ERROR',
		E_COMPILE_WARNING => 'COMPILE WARNING',
		E_USER_ERROR => 'USER ERROR',
		E_USER_WARNING => 'USER WARNING',
		E_USER_NOTICE => 'USER NOTICE',
		E_STRICT => 'STRICT NOTICE',
		E_RECOVERABLE_ERROR => 'RECOVERABLE ERROR'
	);</p>
<p>	// Define o "nome" do erro atual
	if (array_key_exists($errno, $errorType)) {
		$err = $errorType[$errno];
	} else {
		$err = 'CAUGHT EXCEPTION';
	}</p>
<p>	// Se está ativo o LOG de erros, salva uma mensagem no log, usando o formato padrão
    if (ini_get('log_errors'))
        error_log(sprintf("PHP %s:  %s in %s on line %d", $err, $errstr, $errfile, $errline));</p>
<p>	// Mensagem para o email
	$mensagem = '';
	$mensagem .= '[ ERRO NO PHP ]' . "\r\n";
	$mensagem .= 'Site: ' . $_CONFIG['errorHandler']['siteName'] . "\r\n";
	$mensagem .= 'Tipo de erro: ' . $err . "\r\n";
	$mensagem .= 'Arquivo: ' . $errfile . "\r\n";
	$mensagem .= 'Linha: ' . $errline . "\r\n";
	$mensagem .= 'Descrição: ' . $errstr . "\r\n";
	if (isset($_SERVER['REMOTE_ADDR'])) {
		$mensagem .= "\r\n";
		$mensagem .= '[ DADOS DO VISITANTE ]' . "\r\n";
		$mensagem .= 'IP: ' . $_SERVER['REMOTE_ADDR'] . "\r\n";
		$mensagem .= 'User Agent: ' . $_SERVER['HTTP_USER_AGENT'] . "\r\n";
	}
	if (isset($_SERVER['REQUEST_URI'])) {
		$url = (preg_match('/HTTPS/i', $_SERVER["SERVER_PROTOCOL"])) ? 'https' : 'http';
		$url .= '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
		$mensagem .= "\r\n";
		$mensagem .= 'URL: ' . $url . "\r\n";
	}
	if (isset($_SERVER['HTTP_REFERER'])) {
		$mensagem .= 'Referer: ' . $_SERVER['HTTP_REFERER'] . "\r\n";
	}
	$mensagem .= "\r\n";
	$mensagem .= 'Data: ' . date('d/m/Y H:i:s'). "\r\n";</p>
<p>	// Mensagem simples
	$mensagemSimples .= $err . ': ' . $errstr . ' no arquivo ' . $errfile . ' (Linha ' . $errline . ')';</p>
<p>	// Começa a definição do e-mail
	$assunto = '[' . $err . '] ' . $_CONFIG['errorHandler']['siteName'] . ' - ' . date('d/m/y H:i:s');</p>
<p>	$headers = '';
	$headers .= 'From: ' . $_CONFIG['errorHandler']['fromName'] . ' <' . $_CONFIG['errorHandler']['from'] . '>' . "\r\n";
	$headers .= 'To: ' . $_CONFIG['errorHandler']['toName'] . ' <' . $_CONFIG['errorHandler']['to'] . '>' . "\r\n";
	$headers .= 'Reply-To: ' . $_CONFIG['errorHandler']['fromName'] . ' <' . $_CONFIG['errorHandler']['from'] . '>' . "\r\n";
	$headers .= 'Return-Path: ' . $_CONFIG['errorHandler']['fromName'] . ' <' . $_CONFIG['errorHandler']['from'] . '>' . "\r\n";
	$headers .= 'X-Mailer: PHP/' . phpversion();</p>
<p>	// Faz um envio simples
	$enviado = @mail($_CONFIG['errorHandler']['to'], $assunto, $mensagem, $headers);</p>
<p>	// Verifica se foi possível enviar o email, caso contrário exibe-o na tela
	if ($enviado)
		return true;
	else
		echo $mensagemSimples;
}</p>
<p>// Define o seu novo manipulador de erros
set_error_handler('manipuladorErros');</p>
<p>echo $n;
?>[/code]

<p>Caso você precise mudar a forma com qual o email é enviado, é só alterar ali em cima, entre as linhas 65 e 105.</p>
<h3>Causando um erro</h3>
<p>Ao executar o seguinte script (exibir uma variável que não existe):</p>

[code language="php" light="true"]<?php echo $n; ?> [/code]

<p>Termos a seguinte resposta por email:</p>

[code language="plain" light="true"][ ERRO NO PHP ]
Site: Meu site
Tipo de erro: NOTICE
Arquivo: C:\apache\htdocs\erro.php
Linha: 1
Descrição: Undefined variable: n</p>
<p>[ DADOS DO VISITANTE ]
IP: 127.0.0.1
User Agent: Mozilla/5.0 (Windows; U; Windows NT 5.2; pt-BR; rv:1.9.1) Gecko/20090624 Firefox/3.5 (.NET CLR 3.5.30729)</p>
<p>URL: http://127.0.0.1/erro.php
Referer: http://127.0.0.1/</p>
<p>Data: 11/07/2009 10:40:29[/code]

<p>E o assunto do e-mail recebido será:</p>

[code language="plain" light="true"][NOTICE] Meu site - 11/07/2009 10:40:29[/code]

<p>Gostaram né? :D</p>
<p>Mesmo que esse formato de manipulação funcione, peço que não considerem essa versão do arquivo como a final e editem-no  da forma que acharem melhor para adequá-lo às suas necessidades.</p>
<p>Um grande abraço e até a próxima!</p>
