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
Fala minha gente!

Hoje vou mostrar para vocês como usar a extensão [MySQLi](http://br.php.net/manual/pt_BR/book.mysqli.php) (<em>MySQL Improved</em> ou MySQL Melhorado) do MySQL.

Já falei um pouco sobre o MySQLi [nesse post](/guia-pratico-de-mysqli-no-php), mas foi sobre o método procedural, e hoje vamos falar sobre o método orientado a objetos.

Antes de mais nada: o MySQLi só está presente na <strong>versão 4.1.3+ do MySQL</strong> e na <strong>versão 5 do PHP</strong>, se você tem um servidor que não tenha alguma dessas versões, se mate. :)

E vejam que coisa interessante está escrita na [Overview do MySQLi](http://br.php.net/manual/pt_BR/mysqli.overview.php):

<blockquote><strong>Note:</strong> If you are using MySQL versions 4.1.3 or later it is strongly recommended that you use this extension.
</blockquote>
Que em tradução livre seria:

<blockquote><strong>Nota:</strong> Se você está usando a versão 4.1.3 ou superior do MySQL é altamente recomendável que você use essa extensão.
</blockquote>

<h3>Começando do começo: O velho modo</h3>
Acredito que todos vocês já viram uma conexão e consulta MySQL feita da seguinte forma:


{% highlight php linenos %}
<?php

// Conecta ao banco de dados
mysql_connect('127.0.0.1', 'usuario', 'senha');
mysql_select_db('meusite');

// "Hoje" em formato SQL
$data = date('Y-m-d');

// Monta e executa uma consulta SQL
$sql = "SELECT `id`, `titulo`, `link` FROM `noticias` WHERE `ativa` = 1 AND `data` <= '". $data ."'";
$query = mysql_query($sql);

// Para cada resultado encontrado...
while ($noticia = mysql_fetch_assoc($query)) {
  // Exibe um link com a notícia
  echo '['. $noticia['titulo'] .']('. $noticia['link'] .')';
  echo '';
} // fim while

// Total de notícias
echo 'Total de notícias: ' . mysql_num_rows($query);

?>
{% endhighlight %}
Não há nada de especial com esse código... Conectamos ao MySQL e depois procuramos todas as notícias ativas e anteriores ao dia de hoje (inclusive)... O código por si só não é feito nem "mal organizado", mas isso é por que vocês ainda não conhecem o <strong>MySQLi</strong>!


<h3>Orientação a Objetos: a beleza programação</h3>
Agora veja o código que faz a mesma coisa que o anterior, só que em sua versão MySQLi orientada a objetos:
{% highlight php linenos %}
<?php

// Conecta ao banco de dados
$mysqli = new mysqli('127.0.0.1', 'usuario', 'senha', 'meusite');

// Verifica se ocorreu algum erro
if (mysqli_connect_errno()) {
    die('Não foi possível conectar-se ao banco de dados: ' . mysqli_connect_error());
    exit();
}

// "Hoje" em formato SQL
$data = date('Y-m-d');

// Prepara uma consulta SQL
if ($sql = $mysqli->prepare("SELECT `id`, `titulo`, `link` FROM `noticias` WHERE `ativa` = 1 AND `data` <= ?")) {

  // Atribui valores às variáveis da consulta
  $sql->bind_param('s', $data); // Coloca o valor de $data no lugar da primeira interrogação (?)

  // Executa a consulta
  $sql->execute();

  // Atribui o resultado encontrado a variáveis
  $sql->bind_result($id, $titulo, $link);

  // Para cada resultado encontrado...
  while ($sql->fetch()) {
    // Exibe um link com a notícia
    echo '['. $titulo .']('. $link .')';
    echo '';
  } // fim while

  // Total de notícias
  echo 'Total de notícias: ' . $sql->num_rows;

  // Fecha a consulta
  $sql->close();
}

// Fecha a conexão com o banco de dados
$mysqli->close();

?>
{% endhighlight %}
De primeiro contato sei que muita gente vai achar que o MySQLi é mais complicado, é só ver o número de linhas: quase o dobro.. Mas o MySQLi tem uma vantagem indescutível em cima do MySQL normal: <strong style="color: #B40000">a segurança</strong>.

Primeiro nós <strong>PREPARAMOS</strong> uma consulta com um local para receber um valor variável... É aquela interrogação.

Depois nós dizemos que o local reservado receberá um conteúdo do tipo string (s) com valor $data.. Ou seja, se <strong>$data</strong> fosse um inteiro ou booleando a consulta daria um erro, ela só aceitará strings, e digo mais: strings que não modifiquem a consulta... se for uma [](/?s=SQL+Injection) o <strong>MySQLi</strong> irá escapá-la e ele [o ataque] não funcionará!

Depois é só executar, reservar variáveis para o resultado e usá-las com um <strong>fetch()</strong> normal.. ;)

Vejam um exemplo de consulta com três parâmetros: duas strings e um inteiro:


{% highlight php linenos %}
<?php

// "Hoje" em formato SQL
$data = date('Y-m-d');
// Nome do autor
$autor = 'Thiago Belem';

// Prepara uma consulta SQL
if ($sql = $mysqli->prepare("SELECT `id`, `titulo`, `link` FROM `noticias` WHERE (`data` <= ?) AND (`ativa` = ?) AND (`autor` = ?)")) {

  // Atribui valores às variáveis da consulta
  $sql->bind_param('sis', $data, 1, $autor);

  // Executa a consulta
  $sql->execute();

  // ... Todo o resto é igual
}
?>
{% endhighlight %}
Nessa consulta nós reservamos espaços para três variáveis... Depois nós passamos os seus tipos e valores usando o método <strong>bind_param()</strong>, o primeiro parâmetro traz os tipos dos valores, no exemplo foi usado "<strong>sis</strong>" que significa: uma <em><strong>s</strong>tring</em>, um <em><strong>i</strong>nteger</em> (inteiro) e uma <em><strong>s</strong>tring</em>... Depois nós passamos os valores normalmente.. :)

Os tipos de valores aceitos pelo MySQLi são:

<ul>
<li><strong style="color: #B40000">i</strong> para <em>integer</em> (inteiro)</li>
<li><strong style="color: #B40000">s</strong> para <em>string</em></li>
<li><strong style="color: #B40000">d</strong> para <em>double</em> (decimal)</li>
<li><strong style="color: #B40000">b</strong> para <em>blob</em></li>
</ul>
Quem quiser saber um pouco mais sobre MySQLi, é só checar a documentação no [php.net](http://php.net/), e não se esqueça de deixar o seu comentário agradecendo (ou reclamando o.O)!

Espero que tenham gostado! :)

