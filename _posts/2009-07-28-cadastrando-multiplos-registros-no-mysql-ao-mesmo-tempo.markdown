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
<p>Hoje vou falar sobre uma pequena mudança de código que pode significar megas e megas de dados e, conseqüentemente, de performance! :D</p>
<p>Suponhamos que você tenha um script que receba dados de sei lá onde e cadastre-os no MySQL, seria mais ou menos assim:</p>
<p>[code language="php"]&lt;?php</p>
<p>$usuarios = array();<br />
$usuarios[] = array('nome' =&gt; 'Thiago', 'email' =&gt; 'contato@thiagobelem.net');<br />
$usuarios[] = array('nome' =&gt; 'Fulano da Silva', 'email' =&gt; 'fulano@email.com');<br />
$usuarios[] = array('nome' =&gt; 'Ciclano', 'email' =&gt; 'ciclano@uol.com.br');</p>
<p>// Inicia a variável<br />
$cadastrados = 0;</p>
<p>// Para cada elemento de $usuários, faça:<br />
foreach ($usuarios as $usuario) {<br />
	$nome = $usuario['nome'];<br />
	$email = $usuario['email'];</p>
<p>	// Monta a consulta<br />
	$sql = &quot;INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, '{$nome}', '{$email}');&quot;;</p>
<p>	// Executa a consulta verificando se foi inserido com sucesso<br />
	if (mysql_query($sql)) {<br />
		// Incrementa o contador<br />
		$cadastrados++;<br />
	}<br />
}</p>
<p>echo 'Usuários cadastrados: ' . $cadastrados;</p>
<p>?&gt;[/code]</p>
<p>As consultas passadas para o MySQL ficariam mais ou menos assim:<br />
[code language="sql" light="true"]INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, 'Thiago', 'contato@thiagobelem.net');<br />
INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, 'Fulano da Silva', 'fulano@email.com');<br />
INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, 'Ciclano', 'ciclano@uol.com.br');[/code]</p>
<p>Não tem nada de errado com o código.. Funciona perfeitamente... Faz o contador direitinho.. Mas imagine se você tem 4000 registros pra inserir na tabela... Você vai rodar 4000 <strong>mysql_query()</strong> e vai deixar o seu MySQL maluquinho!</p>
<p>Não seria muito melhor fazer assim:<br />
[code language="php"]&lt;?php</p>
<p>$usuarios = array();<br />
$usuarios[] = array('nome' =&gt; 'Thiago', 'email' =&gt; 'contato@thiagobelem.net');<br />
$usuarios[] = array('nome' =&gt; 'Fulano da Silva', 'email' =&gt; 'fulano@email.com');<br />
$usuarios[] = array('nome' =&gt; 'Ciclano', 'email' =&gt; 'ciclano@uol.com.br');</p>
<p>// Início da consulta<br />
$sql = &quot;INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES&quot;;</p>
<p>// Para cada elemento de $usuários, faça:<br />
foreach ($usuarios as $usuario) {<br />
	$nome = $usuario['nome'];<br />
	$email = $usuario['email'];</p>
<p>	// Monta a parte consulta de cada usuário<br />
	$sql .= &quot; (NULL, '{$nome}', '{$email}'),&quot;;<br />
}</p>
<p>// Tira o último caractere (vírgula extra)<br />
$sql = substr($sql, 0, -1);</p>
<p>// Executa a consulta<br />
mysql_query($sql);</p>
<p>// Pega o número de registros inseridos<br />
$cadastrados = mysql_affected_rows();</p>
<p>echo 'Usuários cadastrados: ' . $cadastrados;</p>
<p>?&gt;[/code]</p>
<p>A nossa consulta ficaria mais ou menos assim:<br />
[code language="sql" light="true"]INSERT INTO `usuarios` (`id`, `nome`, `email`) VALUES (NULL, 'Thiago', 'contato@thiagobelem.net'), (NULL, 'Fulano da Silva', 'fulano@email.com'), (NULL, 'Ciclano', 'ciclano@uol.com.br')[/code]</p>
<p>Você pode fazer isso sem problema nenhum e com apenas uma "execução de consulta" você insere os três registros de uma só vez... Não é uma maravilha? :D</p>
