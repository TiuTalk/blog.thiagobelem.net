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
<p>Normalmente você faria uma consulta assim:<br />
[code language="php"]&lt;?php</p>
<p>$sql = &quot;SELECT * FROM `noticias` WHERE `ativa` = 1 ORDER BY `data` DESC LIMIT 0, 20&quot;;<br />
$query = mysql_query($sql);<br />
while ($dados = mysql_fetch_assoc($query)) {<br />
	// Aqui você faz a exibição de cada notícia<br />
}</p>
<p>?&gt;[/code]<br />
É uma consulta normal que, nesse exemplo, não deve pesar muito... Mas imaginemos que essa consulta demore uns 2~3 segundos para ser executada.</p>
<h3>Armazenando o resultado na memória com o Memcached</h3>
<p>Este exemplo irá armazenar o resultado da consulta na memória, durante 1 hora... No próximo bloco mostrarei como verificar se há um resultado armazenado na memória antes de executar a consulta novamente.<br />
[code language="php"]&lt;?php</p>
<p>// Inicia o Memcache<br />
$mem = new Memcache;<br />
// Define qual o servidor que se está usando<br />
$mem-&gt;addServer($_SERVER['HTTP_HOST']);</p>
<p>$sql = &quot;SELECT * FROM `noticias` WHERE `ativa` = 1 ORDER BY `data` DESC&quot;;<br />
$query = mysql_query($sql);</p>
<p>// Criamos uma chave para a consulta, baseada no MD5 dela<br />
$chave = md5($sql);<br />
// A consulta ficará armazenada por 1 hora<br />
$tempo = 60 * 60; // 3600s<br />
// Salvamos o resultado na memória<br />
$mem-&gt;set($chave, $query, 0, $tempo);</p>
<p>// Exibição dos dados<br />
while ($dados = mysql_fetch_assoc($query)) {<br />
	// Aqui você faz a exibição de cada notícia<br />
}</p>
<p>?&gt;[/code]<br />
<br />
<h3>Consulta otimizada com o Memcached</h3>
<p>Agora que já sabemos como armazenar o resultado na memória, podemos fazer uma verificação e só executar a consulta sempre que o resultado expirar ou não existir, dessa forma:<br />
[code language="php"]&lt;?php</p>
<p>$mem = new Memcache;<br />
$mem-&gt;addServer($_SERVER['HTTP_HOST']);</p>
<p>$sql = &quot;SELECT * FROM `noticias` WHERE `ativa` = 1 ORDER BY `data` DESC&quot;;<br />
$chave = md5($sql);</p>
<p>// Buscamos o resultado na memória<br />
$cache = $mem-&gt;get($chave);</p>
<p>// Verifica se o resultado não existe ou expirou<br />
if ($cache === false) {<br />
	// Executa a consulta novamente<br />
	$query = mysql_query($sql);</p>
<p>	$tempo = 60 * 60; // 3600s<br />
	$mem-&gt;set($chave, $query, 0, $tempo);<br />
} else {<br />
	// A consulta está salva na memória ainda, então pegamos o resultado:<br />
	$query = $cache;<br />
}</p>
<p>// Exibição dos dados<br />
while ($dados = mysql_fetch_assoc($query)) {<br />
	// Aqui você faz a exibição de cada notícia<br />
}<br />
?&gt;[/code]</p>
<p>
<h3>Função de atalho para o Memcache</h3>
<p>Você ainda poderia fazer uma função para fazer todo esse trabalho por você... Ficaria mais ou menos assim:</p>
<p>[code language="php"]function mysql_queryCache($consulta, $tempo = 3600) {<br />
	$chave = md5($consulta);</p>
<p>	$mem = new Memcache;<br />
	$mem-&gt;addServer($_SERVER['HTTP_HOST']);</p>
<p>	$query = $mem-&gt;get($chave);<br />
	if ($query === false) {<br />
		$query = mysql_query($consulta);<br />
		$mem-&gt;set($chave, $query, 0, $tempo);<br />
	}</p>
<p>	return $query;<br />
}[/code]<br />
E agora, o exemplo anterior usando a função:<br />
[code language="php"]&lt;?php</p>
<p>$sql = &quot;SELECT * FROM `noticias` WHERE `ativa` = 1 ORDER BY `data` DESC&quot;;<br />
$query = mysql_queryCache($sql);</p>
<p>// Exibição dos dados<br />
while ($dados = mysql_fetch_assoc($query)) {<br />
	// Aqui você faz a exibição de cada notícia<br />
}<br />
?&gt;[/code]</p>
<p>--</p>
<p>Espero que tenham gostado! :)</p>
