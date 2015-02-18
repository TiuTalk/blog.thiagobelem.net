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
Hoje vi que há pouco material sobre como fazer o PHP conectar-se a dois servidores/bancos diferentes do MySQL... Então vamos direto ao ponto:


{% highlight php linenos %}
<?php
	// Primeiro servidor
	$banco1 = mysql_connect('127.0.0.1', 'root', '');
	mysql_select_db('banco', $banco1);

	// Segundo servidor
	$banco2 = mysql_connect('127.0.0.2', 'root', '');
	mysql_select_db('banco', $banco2);

	// Terceiro servidor
	$banco3 = mysql_connect('127.0.0.3', 'root', '');
	mysql_select_db('banco', $banco3);

	// ...

	// Consulta no 1° banco
	$sql1 = mysql_query('SELECT * FROM `noticias`', $banco1);
	// ... processa os dados ...

	// Consulta no 2° banco
	$sql2 = mysql_query('SELECT * FROM `noticias`', $banco2);
	// ... processa os dados ...

	// Consulta no 3° banco
	$sql3 = mysql_query('SELECT * FROM `noticias`', $banco3);
	// ... processa os dados ...
?>
{% endhighlight %}

Espero que tenham gostado! :)

