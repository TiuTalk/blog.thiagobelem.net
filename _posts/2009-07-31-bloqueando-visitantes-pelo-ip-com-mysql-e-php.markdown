---
layout: post
status: publish
published: true
title: Bloqueando visitantes pelo IP com MySQL e PHP
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aumente a proteção do seu sistema criando um script que poderá ser usado
  para banir e bloquear visitantes em função de seus IPs e tenta mais controle sobre
  quando e quem tem acesso ao seu sistema.
wordpress_id: 600
wordpress_url: http://blog.thiagobelem.net/?p=600
date: '2009-07-31 20:40:43 -0300'
date_gmt: '2009-07-31 23:40:43 -0300'
categories:
- PHP
- MySQL
- Tutoriais
- Segurança
tags:
- PHP
- Segurança
- MySQL
- IP
---
<p>Essa semana vou falar um pouquinho sobre cada técnica de segurança que falei no "<a href="http://blog.thiagobelem.net/mysql/criando-sistemas-seguros-parte-1/" target="blank">Criando Sistemas Seguros - Parte 1</a>" e hoje é a vez do "<strong>Banindo IPs por um bem maior</strong>"... Vamos lá:</p>
<p>Banir um visitante de vez, baseando-se no IP dele é, sem dúvida, uma das formas mais simples e eficazes (a curto prazo) de evitar que alguém fique brincando com o seu sistema... Claro que o visitante pode mudar o seu IP sem muito esforço, mas em 99% dos casos isso exigiria pelo menos 1 ou 2 minutos dele... E dependendo da rede e dos conhecimentos dele isso pode não ser possível...</p>
<p>Para salvar a lista de IPs banidos usaremos uma tabela no MySQL que pode ser criada com o seguinte código:</p>
<p>[code language="sql"]CREATE TABLE `banidos` (<br />
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ,<br />
	`ip` VARCHAR( 15 ) NOT NULL ,<br />
	`inicio` DATETIME NOT NULL ,<br />
	`fim` DATETIME NOT NULL ,<br />
	INDEX ( `ip` )<br />
) ENGINE = MYISAM[/code]</p>
<p>Já a parte em PHP do sistema vai funcionar da seguinte maneira... Quando o visitante tentar acessar o seu site é incluído um arquivo que busca no MySQL se esse IP está na lista de banidos, caso esteja o visitante é redirecionado para outro site/endereço.</p>
<p>Não vou falar como fazer uma conexão ao MySQL porque isso já foi dito N vezes aqui no blog e ocupa um espaço desnecessário na aula. ;)</p>
<p>Antes de verificar se um visitante está "banido" precisamos limpar da tabela os registros que já expiraram... Esse passo é opcional pois quando formos verificar se um usuário está banido vamos verificar também se o período é valido... Vamos lá:</p>
<p>[code language="php"]&lt;?php</p>
<p>// Inclui o arquivo que faz a conexão com o banco de dados<br />
require_once('mysql.php');</p>
<p>// IP do visitante para uso futuro<br />
$ip_visitante = $_SERVER['REMOTE_ADDR'];</p>
<p>// Deleta os registros que já expiraram, esse passo é opcional!<br />
$sql = &quot;DELETE FROM `banidos` WHERE ( `fim` &lt;= NOW() )&quot;;<br />
mysql_query($sql);</p>
<p>?&gt;[/code]</p>
<p>Agora nós vamos verificar se o IP do visitante consta na lista dos que ainda estão banidos:</p>
<p>[code language="php"]&lt;?php</p>
<p>// Inclui o arquivo que faz a conexão com o banco de dados<br />
require_once('mysql.php');</p>
<p>// IP do visitante para uso futuro<br />
$ip_visitante = $_SERVER['REMOTE_ADDR'];</p>
<p>// Deleta os registros que já expiraram, esse passo é opcional!<br />
$sql = &quot;DELETE FROM `banidos` WHERE ( `fim` &lt;= NOW() )&quot;;<br />
mysql_query($sql);</p>
<p>// Verifica se o visitante está banido<br />
$sql = &quot;SELECT * FROM `banidos` WHERE ( `ip` = '&quot;. $ip_visitante .&quot;' ) AND ( NOW() BETWEEN `inicio` AND `fim` )&quot;;<br />
$query = mysql_query($sql);<br />
if (mysql_num_rows($query) &gt; 0) {<br />
	// Pelo menos um resultado foi encontrado, o usuário está banido<br />
}</p>
<p>?&gt;[/code]</p>
<p>Agora é só redirecionar o visitante para outra página/endereço:</p>
<p>[code language="php" firstline="13" highlight="18"]// Verifica se o visitante está banido<br />
$sql = &quot;SELECT * FROM `banidos` WHERE ( `ip` = '&quot;. $ip_visitante .&quot;' ) AND ( NOW() BETWEEN `inicio` AND `fim` )&quot;;<br />
$query = mysql_query($sql);<br />
if (mysql_num_rows($query) &gt; 0) {<br />
	// Redireciona o visitante<br />
	header(&quot;Location: http://www.pudim.com.br/&quot;);<br />
	exit;<br />
}[/code]</p>
<p>--</p>
<p>Agora nós vamos criar uma funçãozinha que você vai usar para banir o visitante durante X minutos... Vamos lá:</p>
<p>[code language="php"]function banirVisitante($minutos, $ip = null) {<br />
	// Define o IP que será banido<br />
	$ip = (is_null($ip)) ? $_SERVER['REMOTE_ADDR'] : $ip;</p>
<p>	// Verifica se o usuário já está banido<br />
	$sql = &quot;SELECT * FROM `banidos` WHERE ( `ip` = '&quot;. $ip .&quot;' ) AND ( NOW() BETWEEN `inicio` AND `fim` )&quot;;<br />
	$query = mysql_query($sql);<br />
	if (mysql_num_rows($query) &gt; 0) {<br />
		// Cria uma consulta que atualizará o registro do visitante<br />
		$sql = &quot;UPDATE `banidos` SET `fim` = DATE_ADD(NOW(), INTERVAL &quot;.$minutos.&quot; MINUTE) WHERE  ( `ip` = '&quot;. $ip .&quot;' ) AND ( NOW() BETWEEN `inicio` AND `fim` )&quot;;<br />
	} else {<br />
		// Cria uma consulta que insere o registro na tabela<br />
		$sql = &quot;INSERT INTO `banidos` VALUES ( NULL, '&quot;. $ip .&quot;', NOW(), DATE_ADD(NOW(), INTERVAL &quot;.$minutos.&quot; MINUTE) )&quot;;<br />
	}<br />
	// Executa a consulta criada dentro do IF/ELSE<br />
	mysql_query($sql);</p>
<p>	// Redireciona o visitante<br />
	if ($_SERVER['REMOTE_ADDR'] == $ip) {<br />
		header(&quot;Location: http://www.pudim.com.br/&quot;);<br />
		exit;<br />
	}<br />
}[/code]</p>
<p>Aí quando você quiser banir um visitante, seja qual for o motivo, é só usar a função criada:<br />
[code language="php"]// Banir visitante por 10 minutos<br />
banirVisitante(10);</p>
<p>// Banir um IP específico por 3 dias<br />
banirVisitante(60 * 24 * 3, '114.154.95.24');  [/code]</p>
<p>--</p>
<p>Espero que tenham gostado! :)</p>
