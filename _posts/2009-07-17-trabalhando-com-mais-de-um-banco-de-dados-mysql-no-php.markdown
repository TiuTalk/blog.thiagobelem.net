---
layout: post
title: Trabalhando com mais de um banco de dados (MySQL) no PHP
excerpt: Aprenda a fazer uma conexão simultânea a mais de um banco de dados do MySQL
  sem o uso de classes ou funções complicadas, apenas com o que você já está acostumado
  a usar.

date: '2009-07-17 11:13:25 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags:
- PHP
- MySQL
---
<p>Hoje vi que há pouco material sobre como fazer o PHP conectar-se a dois servidores/bancos diferentes do MySQL... Então vamos direto ao ponto:</p>
<p>[code language="php"]&lt;?php<br />
	// Primeiro servidor<br />
	$banco1 = mysql_connect('127.0.0.1', 'root', '');<br />
	mysql_select_db('banco', $banco1);</p>
<p>	// Segundo servidor<br />
	$banco2 = mysql_connect('127.0.0.2', 'root', '');<br />
	mysql_select_db('banco', $banco2);</p>
<p>	// Terceiro servidor<br />
	$banco3 = mysql_connect('127.0.0.3', 'root', '');<br />
	mysql_select_db('banco', $banco3);</p>
<p>	// ...</p>
<p>	// Consulta no 1° banco<br />
	$sql1 = mysql_query('SELECT * FROM `noticias`', $banco1);<br />
	// ... processa os dados ...</p>
<p>	// Consulta no 2° banco<br />
	$sql2 = mysql_query('SELECT * FROM `noticias`', $banco2);<br />
	// ... processa os dados ...</p>
<p>	// Consulta no 3° banco<br />
	$sql3 = mysql_query('SELECT * FROM `noticias`', $banco3);<br />
	// ... processa os dados ...<br />
?&gt;[/code]</p>
<p>Espero que tenham gostado! :)</p>
