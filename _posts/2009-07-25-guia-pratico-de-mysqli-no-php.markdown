---
layout: post
title: Guia prático de MySQLi no PHP
excerpt: Aprenda a usar a extensão MySQLi do PHP para ter acesso á funções avançadas
  do MySQL. Veja exemplos de uso de cada uma das operações básicas de fomra orientada
  a objetos e deixe seus scripts muito mais profissionais.

date: '2009-07-25 14:47:16 -0300'
categories:
- PHP
- MySQL
- Artigos
tags:
- PHP
- MySQL
- MySQLi
---
<p>Hoje vou falar um pouquinho sobre o <strong>MySQLi</strong> que é uma extensão do PHP feita para aproveitar os recursos mais avançados do MySQL. O legal do MySQLi é que ele pode ser usado de forma orientada a objetos. :)</p>
<p><strong style="color: red">Atenção:</strong> As funções MySQLi funcionam apenas com <strong>PHP 5</strong> (ou superior) e <strong>MySQL 4.1.3</strong> (ou superior).</p>
<p>Não se esqueça de antes de testar esses scripts verificar se o MySQLi está habilitado no seu PHP dando uma olhada no <strong>phpinfo()</strong>.</p>
<p>Veja um exemplo de scripts onde faremos todas as operações comuns do MySQL:</p>
<h3>Conectando-se ao MySQL</h3>
<p>[code language="php"]&lt;?php</p>
<p>$servidor = 'localhost';<br />
$usuario = 'root';<br />
$senha = '';<br />
$banco = 'mydb';</p>
<p>// Conecta-se ao banco de dados MySQL<br />
$mysqli = new mysqli($servidor, $usuario, $senha, $banco);</p>
<p>// Caso algo tenha dado errado, exibe uma mensagem de erro<br />
if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());</p>
<p>?&gt;[/code]</p>
<p></p>
<h3>Executando uma consulta do tipo SELECT</h3>
<p>[code language="php"]&lt;?php</p>
<p>// Aqui você se conecta ao banco<br />
$mysqli = new mysqli('localhost', 'root', '', 'mydb');</p>
<p>// Executa uma consulta que pega cinco notícias<br />
$sql = &quot;SELECT `id`, `titulo` FROM `noticias` LIMIT 5&quot;;<br />
$query = $mysqli-&gt;query($sql);<br />
while ($dados = $query-&gt;mysqli_fetch_array()) {<br />
	echo 'ID: ' . $dados['id'] . '&lt;br /&gt;';<br />
	echo 'Título: ' . $dados['titulo'] . '&lt;br /&gt;&lt;br /&gt;';<br />
}<br />
echo 'Registros encontrados: ' . $query-&gt;num_rows;</p>
<p>?&gt;[/code]</p>
<p></p>
<h3>Executando uma consulta simples, do tipo DELETE ou UPDATE</h3>
<p>[code language="php"]&lt;?php</p>
<p>// Aqui você se conecta ao banco<br />
$mysqli = new mysqli('localhost', 'root', '', 'mydb');</p>
<p>// Executa uma consulta que deleta uma notícia<br />
$sql = &quot;DELETE FROM FROM `noticias` WHERE `id` = 2&quot;;<br />
$query = $mysqli-&gt;query($sql);<br />
echo 'Registros afetados: ' . $query-&gt;affected_rows;</p>
<p>?&gt;[/code]</p>
<p>Como vocês podem ver a sintaxe dos comandos SQL não mudam em nada... O que muda são apenas as funções do PHP mesmo. ;)</p>
<p>Uma coisa que eu não falei aqui e que é o grande forte do MySQLi são os "<em>prepared statements</em>" que falarei em um artigo durante essa semana mesmo.</p>
<p>Quem quiser mais detalhes é só dar uma olhada na <a href="http://br2.php.net/manual/pt_BR/book.mysqli.php" target="_blank">documentação oficial</a>.</p>
<p>Espero que tenham gostado!</p>
