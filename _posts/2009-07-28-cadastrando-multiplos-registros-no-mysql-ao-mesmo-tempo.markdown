---
layout: post
title: Cadastrando múltiplos registros no MySQL ao mesmo tempo
excerpt: Aprenda a otimizar a inserção de dados em pacote/malote/grupo no MySQL...
  Veja como é mais simples rodar apenas um INSERT para todos os registros ao invés
  de rodar um INSERT para caaaaada registro e sobrecarregar o seu MySQL.

date: '2009-07-28 09:02:58 -0300'
categories:
- MySQL
- Tutoriais
- Otimização
tags:
- MySQL
- Otimização
---
Hoje vou falar sobre uma pequena mudança de código que pode significar megas e megas de dados e, conseqüentemente, de performance! :D

Suponhamos que você tenha um script que receba dados de sei lá onde e cadastre-os no MySQL, seria mais ou menos assim:


{% highlight php linenos %}
<?php

$usuarios = array();
$usuarios[] = array('nome' => 'Thiago', 'email' => 'contato@thiagobelem.net');
$usuarios[] = array('nome' => 'Fulano da Silva', 'email' => 'fulano@email.com');
$usuarios[] = array('nome' => 'Ciclano', 'email' => 'ciclano@uol.com.br');

// Inicia a variável
$cadastrados = 0;

// Para cada elemento de $usuários, faça:
foreach ($usuarios as $usuario) {
	$nome = $usuario['nome'];
	$email = $usuario['email'];

	// Monta a consulta
	$sql = "INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, '{$nome}', '{$email}');";

	// Executa a consulta verificando se foi inserido com sucesso
	if (mysql_query($sql)) {
		// Incrementa o contador
		$cadastrados++;
	}
}

echo 'Usuários cadastrados: ' . $cadastrados;

?>
{% endhighlight %}

As consultas passadas para o MySQL ficariam mais ou menos assim:
{% highlight sql linenos %}
INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, 'Thiago', 'contato@thiagobelem.net');
INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, 'Fulano da Silva', 'fulano@email.com');
INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, 'Ciclano', 'ciclano@uol.com.br');
{% endhighlight %}

Não tem nada de errado com o código.. Funciona perfeitamente... Faz o contador direitinho.. Mas imagine se você tem 4000 registros pra inserir na tabela... Você vai rodar 4000 <strong>mysql_query()</strong> e vai deixar o seu MySQL maluquinho!

Não seria muito melhor fazer assim:
{% highlight php linenos %}
<?php

$usuarios = array();
$usuarios[] = array('nome' => 'Thiago', 'email' => 'contato@thiagobelem.net');
$usuarios[] = array('nome' => 'Fulano da Silva', 'email' => 'fulano@email.com');
$usuarios[] = array('nome' => 'Ciclano', 'email' => 'ciclano@uol.com.br');

// Início da consulta
$sql = "INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES";

// Para cada elemento de $usuários, faça:
foreach ($usuarios as $usuario) {
	$nome = $usuario['nome'];
	$email = $usuario['email'];

	// Monta a parte consulta de cada usuário
	$sql .= " (NULL, '{$nome}', '{$email}'),";
}

// Tira o último caractere (vírgula extra)
$sql = substr($sql, 0, -1);

// Executa a consulta
mysql_query($sql);

// Pega o número de registros inseridos
$cadastrados = mysql_affected_rows();

echo 'Usuários cadastrados: ' . $cadastrados;

?>
{% endhighlight %}

A nossa consulta ficaria mais ou menos assim:
{% highlight sql linenos %}
INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, 'Thiago', 'contato@thiagobelem.net'), (NULL, 'Fulano da Silva', 'fulano@email.com'), (NULL, 'Ciclano', 'ciclano@uol.com.br')
{% endhighlight %}

Você pode fazer isso sem problema nenhum e com apenas uma "execução de consulta" você insere os três registros de uma só vez... Não é uma maravilha? :D

