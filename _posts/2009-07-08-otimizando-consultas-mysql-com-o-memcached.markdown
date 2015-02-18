---
layout: post
title: Otimizando consultas MySQL com o Memcached
excerpt: Aprenda a usar o Memcached para otimizar as suas consultas ao MySQL e deixar
  o seu site muito mais rápido, usando a memória virtual do seu servidor para reduzir
  a sobre-carga no banco de dados.

date: '2009-07-08 01:26:15 -0300'
categories:
- PHP
- MySQL
- Otimização
tags:
- PHP
- MySQL
- Memcached
---
<p>Reparei que muita gente tem procurado sobre <strong>otimização</strong> de sites e <strong>segurança</strong>, então vou tentar focar sobre esses dois assuntos essa semana.</p>
<p>Hoje falarei sobre o <strong>Memcached</strong>, um recurso indispensável para servidores que rodam sites pesados. A funcionalidade principal dele consiste em armazenar "qualquer coisa" na memória (RAM) do servidor para uso posterior. Segundo o site do próprio, ele é "um sistema distribuído de alto desempenho para o <strong>cacheamento</strong> (armazenamento) de objetos na memória, genérico por natureza, mas feito para aumentar a velocidade de sites dinâmicos, diminuindo a carga sobre o banco de dados".</p>
<h3>Quando usar o Memcache?</h3>
<p>Suponhamos que você tenha um site que faz várias e várias consultas ao MySQL para exibir uma página e, algumas delas, demoram mais de 1 seguro para ser executada... Isso significa que o seu site não está otimizado e, obviamente, está mais lento do que poderia ser.</p>
<p>A maioria dos servidores - de qualidade - hoje em dia, já vêm com ele instalado... Caso você precise instalar ele no seu, recomendo dar uma olhada no <a href="http://www.danga.com/memcached/" target="_blank">site oficial</a> para maiores detalhes.</p>
<p>Vou mostrar pra vocês como armazenar uma consulta na memória e depois pegar esses dados, sem precisar executar a <em>query</em> novamente... Vale lembrar que só vale a pena usar o Memcached para consultas que pesam no seu sistema, pois foi pra esse propósito que ele foi feito.</p>
<h3>Consulta simples</h3>
<p>Normalmente você faria uma consulta assim:
[code language="php"]<?php</p>
<p>$sql = "SELECT * FROM `noticias` WHERE `ativa` = 1 ORDER BY `data` DESC LIMIT 0, 20";
$query = mysql_query($sql);
while ($dados = mysql_fetch_assoc($query)) {
	// Aqui você faz a exibição de cada notícia
}</p>
<p>?>[/code]
É uma consulta normal que, nesse exemplo, não deve pesar muito... Mas imaginemos que essa consulta demore uns 2~3 segundos para ser executada.</p>
<h3>Armazenando o resultado na memória com o Memcached</h3>
<p>Este exemplo irá armazenar o resultado da consulta na memória, durante 1 hora... No próximo bloco mostrarei como verificar se há um resultado armazenado na memória antes de executar a consulta novamente.
[code language="php"]<?php</p>
<p>// Inicia o Memcache
$mem = new Memcache;
// Define qual o servidor que se está usando
$mem->addServer($_SERVER['HTTP_HOST']);</p>
<p>$sql = "SELECT * FROM `noticias` WHERE `ativa` = 1 ORDER BY `data` DESC";
$query = mysql_query($sql);</p>
<p>// Criamos uma chave para a consulta, baseada no MD5 dela
$chave = md5($sql);
// A consulta ficará armazenada por 1 hora
$tempo = 60 * 60; // 3600s
// Salvamos o resultado na memória
$mem->set($chave, $query, 0, $tempo);</p>
<p>// Exibição dos dados
while ($dados = mysql_fetch_assoc($query)) {
	// Aqui você faz a exibição de cada notícia
}</p>
<p>?>[/code]

<h3>Consulta otimizada com o Memcached</h3>
<p>Agora que já sabemos como armazenar o resultado na memória, podemos fazer uma verificação e só executar a consulta sempre que o resultado expirar ou não existir, dessa forma:
[code language="php"]<?php</p>
<p>$mem = new Memcache;
$mem->addServer($_SERVER['HTTP_HOST']);</p>
<p>$sql = "SELECT * FROM `noticias` WHERE `ativa` = 1 ORDER BY `data` DESC";
$chave = md5($sql);</p>
<p>// Buscamos o resultado na memória
$cache = $mem->get($chave);</p>
<p>// Verifica se o resultado não existe ou expirou
if ($cache === false) {
	// Executa a consulta novamente
	$query = mysql_query($sql);</p>
<p>	$tempo = 60 * 60; // 3600s
	$mem->set($chave, $query, 0, $tempo);
} else {
	// A consulta está salva na memória ainda, então pegamos o resultado:
	$query = $cache;
}</p>
<p>// Exibição dos dados
while ($dados = mysql_fetch_assoc($query)) {
	// Aqui você faz a exibição de cada notícia
}
?>[/code]</p>
<p>
<h3>Função de atalho para o Memcache</h3>
<p>Você ainda poderia fazer uma função para fazer todo esse trabalho por você... Ficaria mais ou menos assim:</p>
<p>[code language="php"]function mysql_queryCache($consulta, $tempo = 3600) {
	$chave = md5($consulta);</p>
<p>	$mem = new Memcache;
	$mem->addServer($_SERVER['HTTP_HOST']);</p>
<p>	$query = $mem->get($chave);
	if ($query === false) {
		$query = mysql_query($consulta);
		$mem->set($chave, $query, 0, $tempo);
	}</p>
<p>	return $query;
}[/code]
E agora, o exemplo anterior usando a função:
[code language="php"]<?php</p>
<p>$sql = "SELECT * FROM `noticias` WHERE `ativa` = 1 ORDER BY `data` DESC";
$query = mysql_queryCache($sql);</p>
<p>// Exibição dos dados
while ($dados = mysql_fetch_assoc($query)) {
	// Aqui você faz a exibição de cada notícia
}
?>[/code]</p>
<p>--</p>
<p>Espero que tenham gostado! :)</p>
