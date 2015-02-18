---
layout: post
title: Usando o MySQLi Orientado a Objetos
excerpt: O <strong>MySQLi</strong> (<em>MySQL Improved</em> ou MySQL Melhorado) é
  uma extensão mais segura do MySQL que permite a execução de consultas SQL de forma
  segurada e sistematizada, preparando a consulta antes e passando as "variáveis"
  depois... Sem contar que a orientação a objetos transforma o uso dessa técnica num
  oceano de possibilidades.

date: '2010-01-20 00:54:00 -0200'
categories:
- PHP
- MySQL
- Artigos
- Orientação a objetos
tags:
- PHP
- MySQL
- MySQLi
---
<p>Fala minha gente!</p>
<p>Hoje vou mostrar para vocês como usar a extensão <a href="http://br.php.net/manual/pt_BR/book.mysqli.php" title="MySQLi">MySQLi</a> (<em>MySQL Improved</em> ou MySQL Melhorado) do MySQL.</p>
<p>Já falei um pouco sobre o MySQLi <a href="http://blog.thiagobelem.net/mysql/guia-pratico-de-mysqli-no-php/" title="Guia pr&Atilde;&iexcl;tico de MySQLi no PHP">nesse post</a>, mas foi sobre o método procedural, e hoje vamos falar sobre o método orientado a objetos.</p>
<p>Antes de mais nada: o MySQLi só está presente na <strong>versão 4.1.3+ do MySQL</strong> e na <strong>versão 5 do PHP</strong>, se você tem um servidor que não tenha alguma dessas versões, se mate. :)</p>
<p>E vejam que coisa interessante está escrita na <a href="http://br.php.net/manual/pt_BR/mysqli.overview.php" title="MySQLi overview">Overview do MySQLi</a>:</p>
<blockquote><p><strong>Note:</strong> If you are using MySQL versions 4.1.3 or later it is strongly recommended that you use this extension. </p></blockquote>
<p>Que em tradução livre seria:</p>
<blockquote><p><strong>Nota:</strong> Se você está usando a versão 4.1.3 ou superior do MySQL é altamente recomendável que você use essa extensão. </p></blockquote>
<p>
<h3>Começando do começo: O velho modo</h3>
<p>Acredito que todos vocês já viram uma conexão e consulta MySQL feita da seguinte forma:</p>
<p>[code language="php"]&lt;?php</p>
<p>// Conecta ao banco de dados<br />
mysql_connect('127.0.0.1', 'usuario', 'senha');<br />
mysql_select_db('meusite');</p>
<p>// &quot;Hoje&quot; em formato SQL<br />
$data = date('Y-m-d');</p>
<p>// Monta e executa uma consulta SQL<br />
$sql = &quot;SELECT `id`, `titulo`, `link` FROM `noticias` WHERE `ativa` = 1 AND `data` &lt;= '&quot;. $data .&quot;'&quot;;<br />
$query = mysql_query($sql);</p>
<p>// Para cada resultado encontrado...<br />
while ($noticia = mysql_fetch_assoc($query)) {<br />
	// Exibe um link com a notícia<br />
	echo '&lt;a href=&quot;'. $noticia['link'] .'&quot; title=&quot;'. $noticia['titulo'] .'&quot;&gt;'. $noticia['titulo'] .'&lt;/a&gt;';<br />
	echo '&lt;br /&gt;';<br />
} // fim while</p>
<p>// Total de notícias<br />
echo '&lt;br /&gt;Total de notícias: ' . mysql_num_rows($query);</p>
<p>?&gt;[/code]<br />
Não há nada de especial com esse código... Conectamos ao MySQL e depois procuramos todas as notícias ativas e anteriores ao dia de hoje (inclusive)... O código por si só não é feito nem "mal organizado", mas isso é por que vocês ainda não conhecem o <strong>MySQLi</strong>!</p>
<p>
<h3>Orientação a Objetos: a beleza programação</h3>
<p>Agora veja o código que faz a mesma coisa que o anterior, só que em sua versão MySQLi orientada a objetos:<br />
[code language="php"]&lt;?php</p>
<p>// Conecta ao banco de dados<br />
$mysqli = new mysqli('127.0.0.1', 'usuario', 'senha', 'meusite');</p>
<p>// Verifica se ocorreu algum erro<br />
if (mysqli_connect_errno()) {<br />
    die('Não foi possível conectar-se ao banco de dados: ' . mysqli_connect_error());<br />
    exit();<br />
}</p>
<p>// &quot;Hoje&quot; em formato SQL<br />
$data = date('Y-m-d');</p>
<p>// Prepara uma consulta SQL<br />
if ($sql = $mysqli-&gt;prepare(&quot;SELECT `id`, `titulo`, `link` FROM `noticias` WHERE `ativa` = 1 AND `data` &lt;= ?&quot;)) {</p>
<p>	// Atribui valores às variáveis da consulta<br />
	$sql-&gt;bind_param('s', $data); // Coloca o valor de $data no lugar da primeira interrogação (?)</p>
<p>	// Executa a consulta<br />
	$sql-&gt;execute();</p>
<p>	// Atribui o resultado encontrado a variáveis<br />
	$sql-&gt;bind_result($id, $titulo, $link);</p>
<p>	// Para cada resultado encontrado...<br />
	while ($sql-&gt;fetch()) {<br />
		// Exibe um link com a notícia<br />
		echo '&lt;a href=&quot;'. $link .'&quot; title=&quot;'. $titulo .'&quot;&gt;'. $titulo .'&lt;/a&gt;';<br />
		echo '&lt;br /&gt;';<br />
	} // fim while</p>
<p>	// Total de notícias<br />
	echo '&lt;br /&gt;Total de notícias: ' . $sql-&gt;num_rows;</p>
<p>	// Fecha a consulta<br />
	$sql-&gt;close();<br />
}</p>
<p>// Fecha a conexão com o banco de dados<br />
$mysqli-&gt;close();</p>
<p>?&gt;[/code]<br />
De primeiro contato sei que muita gente vai achar que o MySQLi é mais complicado, é só ver o número de linhas: quase o dobro.. Mas o MySQLi tem uma vantagem indescutível em cima do MySQL normal: <strong style="color: #B40000">a segurança</strong>.</p>
<p>Primeiro nós <strong>PREPARAMOS</strong> uma consulta com um local para receber um valor variável... É aquela interrogação.</p>
<p>Depois nós dizemos que o local reservado receberá um conteúdo do tipo string (s) com valor $data.. Ou seja, se <strong>$data</strong> fosse um inteiro ou booleando a consulta daria um erro, ela só aceitará strings, e digo mais: strings que não modifiquem a consulta... se for uma <a href="http://blog.thiagobelem.net/?s=SQL+Injection" title="SQL Injection"><em>SQL Injection</em></a> o <strong>MySQLi</strong> irá escapá-la e ele [o ataque] não funcionará!</p>
<p>Depois é só executar, reservar variáveis para o resultado e usá-las com um <strong>fetch()</strong> normal.. ;)</p>
<p>Vejam um exemplo de consulta com três parâmetros: duas strings e um inteiro:</p>
<p>[code language="php"]&lt;?php</p>
<p>// &quot;Hoje&quot; em formato SQL<br />
$data = date('Y-m-d');<br />
// Nome do autor<br />
$autor = 'Thiago Belem';</p>
<p>// Prepara uma consulta SQL<br />
if ($sql = $mysqli-&gt;prepare(&quot;SELECT `id`, `titulo`, `link` FROM `noticias` WHERE (`data` &lt;= ?) AND (`ativa` = ?) AND (`autor` = ?)&quot;)) {</p>
<p>	// Atribui valores às variáveis da consulta<br />
	$sql-&gt;bind_param('sis', $data, 1, $autor);</p>
<p>	// Executa a consulta<br />
	$sql-&gt;execute();</p>
<p>	// ... Todo o resto é igual<br />
}<br />
?&gt;[/code]<br />
Nessa consulta nós reservamos espaços para três variáveis... Depois nós passamos os seus tipos e valores usando o método <strong>bind_param()</strong>, o primeiro parâmetro traz os tipos dos valores, no exemplo foi usado "<strong>sis</strong>" que significa: uma <em><strong>s</strong>tring</em>, um <em><strong>i</strong>nteger</em> (inteiro) e uma <em><strong>s</strong>tring</em>... Depois nós passamos os valores normalmente.. :)</p>
<p>Os tipos de valores aceitos pelo MySQLi são:</p>
<ul>
<li><strong style="color: #B40000">i</strong> para <em>integer</em> (inteiro)</li>
<li><strong style="color: #B40000">s</strong> para <em>string</em></li>
<li><strong style="color: #B40000">d</strong> para <em>double</em> (decimal)</li>
<li><strong style="color: #B40000">b</strong> para <em>blob</em></li>
</ul>
<p>Quem quiser saber um pouco mais sobre MySQLi, é só checar a documentação no <a href="http://php.net/">php.net</a>, e não se esqueça de deixar o seu comentário agradecendo (ou reclamando o.O)!</p>
<p>Espero que tenham gostado! :)</p>
