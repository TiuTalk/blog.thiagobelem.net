---
layout: post
title: Contador de visitantes online em PHP e MySQL

date: '2009-04-19 03:37:04 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags: []
---
<p>Hoje vou ensinar vocês a criarem um pequeno sistema de contador dos visitantes que estão online no seu site.</p>
<p>Tudo se resume a criar uma entrada única no banco para cada visitante e apagá-la depois de 20 minutos de inatividade (nenhum carregamento de página). Também criaremos uma função para você inserir onde quiser exibir o número de visitantes que apareceram no seu site nesses ultimos 20 minutos e outra função para informar os recordes de visitas. Vamos ao que interessa:</p>
<p>Primeiro, criamos as tabelas no MySQL para armazenamento dos dados, são duas tabelas: uma para os visitantes onlines e outra para registro dos recordes... Veja os códigos:</p>
<p>[code language="sql"]<br />
CREATE TABLE IF NOT EXISTS `visitas_online` (<br />
	`id` int(11) NOT NULL AUTO_INCREMENT,<br />
	`ip` varchar(15) NOT NULL,<br />
	`identificador` varchar(40) NOT NULL,<br />
	`hora` datetime NOT NULL,<br />
	PRIMARY KEY (`id`),<br />
	UNIQUE KEY `identificador` (`identificador`)<br />
) ENGINE=MyISAM ;</p>
<p>CREATE TABLE IF NOT EXISTS `visitas_record` (<br />
	`id` int(11) NOT NULL AUTO_INCREMENT,<br />
	`data` datetime NOT NULL,<br />
	`visitantes` int(11) NOT NULL,<br />
	PRIMARY KEY (`id`)<br />
) ENGINE=MyISAM ;<br />
[/code]</p>
<p>Depois criamos um arquivo chamado <span style="color: #ff6600;"><strong>visitantes-online.php</strong></span> com o seguinte conteúdo:</p>
<p>[code language="php"]<br />
<?php<br />
/**<br />
* Sistema de contador de visitantes online<br />
*<br />
* @author Thiago Belem <contato@thiagobelem.net><br />
* @link http://thiagobelem.net/<br />
*<br />
* @version 1.0<br />
* @package VisitantesOnline<br />
*/</p>
<p>//  Configurações do Script<br />
// ==============================<br />
$_VO['registraAuto'] = true;       // Registra os visitantes automaticamente?<br />
$_VO['conectaMySQL'] = true;       // Abre uma conexão com o servidor MySQL?</p>
<p>$_VO['cookieTempo'] = 20;          // Quantos minutos a visita dura<br />
$_VO['cookieNome'] = 'VisOnline';  // Nome do cookie usado para identificar o visitante</p>
<p>$_VO['servidor'] = 'localhost';    // Servidor MySQL<br />
$_VO['usuario'] = 'root';          // Usuário MySQL<br />
$_VO['senha'] = '';                // Senha MySQL<br />
$_VO['banco'] = 'test';            // Banco de dados MySQL</p>
<p>$_VO['tabela_v'] = 'visitas_online'; // Tabela onde os visitantes online serão salvos<br />
$_VO['tabela_r'] = 'visitas_record'; // Tabela onde os recordes de visitas serão salvos<br />
// ==============================</p>
<p>// ======================================<br />
//   ~ Não edite a partir deste ponto ~<br />
// ======================================</p>
<p>// Verifica se precisa fazer a conexão com o MySQL<br />
if ($_VO['conectaMySQL'] == true) {<br />
	$_VO['link'] = mysql_connect($_VO['servidor'], $_VO['usuario'], $_VO['senha']) or die("MySQL: Não foi possível conectar-se ao servidor [".$_VO['servidor']."].");<br />
	mysql_select_db($_VO['banco'], $_VO['link']) or die("MySQL: Não foi possível conectar-se ao banco de dados [".$_VO['banco']."].");<br />
}</p>
<p>/**<br />
* Gera o identificador do visitante baseado no IP e na hora<br />
*/<br />
function geraIdentificador() {<br />
	global $_VO;</p>
<p>	return sha1($_VO['cookieNome'].$_SERVER["REMOTE_ADDR"].microtime());<br />
}</p>
<p>/**<br />
* Registra uma visita e/ou pageview para o visitante<br />
*  Esta funçaõ será chamada automaticamente dependendo de $_VO['registraAuto']<br />
*/<br />
function registraVisita() {<br />
	global $_VO;</p>
<p>	// Verifica se os headers já foram enviados. Caso tenham, é gerada uma mensagem de erro<br />
	if (headers_sent()) {<br />
		trigger_error("[VisitantesOnline] Por favor, insira o arquivo antes de qualquer HTML", E_USER_ERROR);<br />
		return false;<br />
	}</p>
<p>	// Verifica se é um visitante que já está no site (se o Cookie existe)<br />
	if (isset($_COOKIE[$_VO['cookieNome']])) {<br />
		$novo = false;<br />
		$identificador = $_COOKIE[$_VO['cookieNome']];<br />
	} else {<br />
		$novo = true;<br />
		$identificador = geraIdentificador();<br />
	}</p>
<p>	// Se o visitante não é novo, tenta atualizar o registro dele na tabela<br />
	if (!$novo) {<br />
		$query = "UPDATE `".$_VO['tabela_v']."` SET `hora` = NOW() WHERE `identificador` = '".$identificador."' LIMIT 1";<br />
		$resultado = mysql_query($query);<br />
		$atualizado = (bool)(mysql_affected_rows($resultado) == 1);<br />
	}</p>
<p>	// Se o visitante é novo OU se o registro dele ele não foi atualizado, insere um novo registro na tabela<br />
	if ($novo OR !$atualizado) {<br />
		$query = "INSERT INTO `".$_VO['tabela_v']."` VALUES (NULL, '".$_SERVER["REMOTE_ADDR"]."', '".$identificador."', NOW())";<br />
		mysql_query($query);<br />
	}</p>
<p>	// Deleta todos os visitantes com mais de 20min no site, exceto o atual<br />
	$query = "DELETE FROM `".$_VO['tabela_v']."` WHERE (`hora` <= (NOW() - INTERVAL ".$_VO['cookieTempo']." MINUTE)) AND `identificador` != '".$identificador."'";<br />
	mysql_query($query);</p>
<p>	// Verifica se é preciso atualizar o recorde de visitas<br />
	$recorde = visitantesRecorde(); // Pega o recorde de visitantes<br />
	$online = visitantesOnline(); // Pega o n° de visitantes atual<br />
	if ($recorde[1] < $online) {<br />
		$query = "REPLACE INTO `".$_VO['tabela_r']."` SET `data` = NOW(), `visitantes` = ".$online;<br />
		mysql_query($query);<br />
	}</p>
<p>	// Atualiza o cookie com o identificador do visitante<br />
	setcookie($_VO['cookieNome'], $identificador, time() + ($_VO['cookieTempo'] * 60), '');<br />
	return true;<br />
}</p>
<p>/**<br />
* Função que retorna o total de visitantes online<br />
*/<br />
function visitantesOnline() {<br />
	global $_VO;</p>
<p>	// Faz a consulta no MySQL em função dos argumentos<br />
	$sql = "SELECT COUNT(*) FROM `".$_VO['tabela_v']."`";<br />
	$query = mysql_query($sql);<br />
	$resultado = mysql_fetch_row($query);</p>
<p>	// Retorna o valor encontrado ou zero<br />
	return (!empty($resultado)) ? (int)$resultado[0] : 0;<br />
}</p>
<p>/**<br />
* Função que retorna a data e o recorde de visitantes online<br />
*/<br />
function visitantesRecorde($formato = 'd/m/Y') {<br />
	global $_VO;</p>
<p>	// Faz a consulta no MySQL em função dos argumentos<br />
	$sql = "SELECT `data`, `visitantes` FROM `".$_VO['tabela_r']."` LIMIT 1";<br />
	$query = mysql_query($sql);<br />
	$resultado = mysql_fetch_row($query);</p>
<p>	// Retorna o valor encontrado ou zero<br />
	return (!empty($resultado)) ? array(date($formato, strtotime($resultado[1])), (int)$resultado[1]) : array(date($formato), 0);<br />
}</p>
<p>if ($_VO['registraAuto'] == true) { registraVisita(); }<br />
?><br />
[/code]</p>
<p>Você só precisa inserir esse arquivo no <span style="text-decoration: underline;">começo</span> do seu site, antes de enviar qualquer HTML para o visitante. Veja a baixo as funções que você irá usar para contabilizar os visitantes online e os recordes de visitas:</p>
<p>Nesse arquivo criamos quatro funções que vão fazer o seguinte:</p>
<p><strong>geraIdentificador()</strong></p>
<p>Esta função vai criar um identificador único, usada no sistema quando temos um visitante novo e ela gera uma seqüência de números e letras únicas para identificar o visitante que será salvo no banco de dados e via cookies.</p>
<p>Você não precisa chamá-la em lugar nenhum do seu site.</p>
<p><strong>registraVisita()</strong></p>
<p>Função que irá registrar o visitante no banco de dados, atualizando o registro dele, excluindo os visitantes antigos, atualizando os recordes de visitas e, por fim, definindo um cookie no computador do visitante com o identificador gerado anteriormente.</p>
<p>Você não precisa chamá-la em lugar nenhum do seu site pois ela já é chamada automaticamente quando você inclui o arquivo no site.</p>
<p><strong>visitantesOnline()</strong></p>
<p>Esta função vai te retornar um valor numérico inteiro contendo o número de visitantes online no seu site nos últimos 20 minutos.</p>
<p>Para usá-la, é só inserir um bloco de php onde você deseja que o número apareça, assim:</p>
<p>[code language="php"]<p>Visitantes online: <?php echo visitantesOnline(); ?>!</p>[/code]</p>
<p><strong>visitantesRecorde($formato)</strong></p>
<p>Com essa função você vai receber um array, contendo dois elementos: primeiro a data do recorde, depois o recorde de visitas. Você pode, se quiser, formatar a data retornada (seguindo os parâmetros da função <a href="http://br2.php.net/manual/pt_BR/function.date.php" target="_blank">date()</a>).</p>
<p>Para usá-la você precisará fazer da seguinte forma:</p>
<p>[code language="php"]<br />
<?php $dados = visitantesRecorde(); ?><br />
<p>O máximo de visitantes online foi em <?php echo $dados[0]; ?>, com <?php echo $dados[1]; ?> visitantes.</p><br />
[/code]</p>
<p>Se quiser formatar a data é só fazer, por exemplo, assim:<br />
$dados = visitantesRecorde('d/m/Y H:i');</p>
<p>Espero que tenham gostado! E não se esqueçam de olhar a parte de configurações do script para um bom uso dele.</p>
<p>Abraços! :D</p>
