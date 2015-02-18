---
layout: post
status: publish
published: true
title: for, foreach e while – Repetições e Laços no PHP
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 393
wordpress_url: http://blog.thiagobelem.net/?p=393
date: '2009-03-30 10:58:09 -0300'
date_gmt: '2009-03-30 13:58:09 -0300'
categories:
- PHP
- Artigos
tags: []
---
<p>Hoje vou falar sobre algumas funções muito utilizadas no PHP: repetições e laços (<em>loops</em>). Falarei sobre o <strong>for()</strong>, <strong>foreach()</strong> e <strong>while()</strong>.</p>
<h4>Usando o for()</h4>
<p>Com o for você pode, por exemplo, repetir um ou mais comandos durante X vezes.. Por exemplo:</p>
<p>[code='php']<br />
<?php<br />
$limite = 10;<br />
for ($n = 1; $n <= $limite; $n++) {<br />
echo $n . "<br />";<br />
}<br />
?><br />
[/code]</p>
<p>Com isso eu irei enumerar todos os números de <strong>1</strong> ($n) até <strong>10</strong> ($limite).</p>
<p>O <strong>for()</strong> é formado por três partes: <strong>a declaração</strong> ($n = 1) onde definimos uma variável para ser usada na repetição; depois temos <strong>a condição</strong> ($n &lt;= $limite) onde definimos uma condição que, enquanto verdadeira, a repetição acontecerá; e por último definimos a alteração ou <strong>incremento</strong> ($n++) que será executado após cada repetição.</p>
<p>Ou seja, definimos $n e enquanto $n for menor ou igual a $limite exibimos $n (echo), depois incrementamos $n.</p>
<p>Durante a execução de qualquer repetição você pode usar o comando<strong> <span style="color: #ff6600;">break;</span> </strong>para encerrar o bloco de repetição/loop e continuar o script. Há também o comando <strong><span style="color: #ff6600;">continue;</span></strong> que pula para próxima execução da repetição.</p>
<p>O <strong>for()</strong> pode ser usado, por exemplo, para montar a exibição de um calendário.</p>
<p>Veja mais: <a href="http://br2.php.net/manual/pt_BR/control-structures.for.php" target="_blank">Documentação do for()</a></p>
<h4>Usando o foreach()</h4>
<p>O <strong>foreach()</strong> é extremamente útil, pois com ele você executa um grupo de comandos para cada elemento de um array:</p>
<p>[code='php']<br />
<?php<br />
$nomes = array('Thiago', 'João', 'Ricardo', 'Paula');<br />
foreach ($nomes as $indice => $valor) {<br />
echo $indice . " - ";<br />
echo $valor . "<br />";<br />
}<br />
?><br />
[/code]</p>
<p>Uma tradução simples para o foreach() é "<em>para cada elemento do array X execute...</em>".</p>
<p>No começo de cada execução do loop duas variáveis serão definidas: $indice que conterá o índice/chave do elemento (0, 1, 2 e etc.) e $valor que conterá o valor do elemento (Thiago, João, Ricardo e etc.).</p>
<p>[code='php']<br />
<?php<br />
$nomes = array('Thiago', 'João', 'Ricardo', 'Paula');<br />
foreach ($nomes as $indice => $valor) {<br />
if ($valor == 'João') continue;<br />
echo $indice . " - ";<br />
echo $valor . "<br />";<br />
}<br />
?><br />
[/code]</p>
<p>O exemplo acima irá "pular" o elemento que tiver o valor igual a "João", exibindo apenas Thiago, Ricardo e Paula.</p>
<p>Veja mais: <a href="http://br2.php.net/manual/pt_BR/control-structures.foreach.php" target="_blank">Documentação do foreach()</a></p>
<h4>Usando o while()</h4>
<p>O while() pode ser usado (ou não) da mesma forma que o for()... A diferença é que nele só é especificado a condição, veja um exemplo:</p>
<p>[code='php']<br />
<?php<br />
$n = 1;<br />
$limite = 10;<br />
while ($n <= $limite) {<br />
echo $n . "<br />";<br />
$n++;<br />
}<br />
?><br />
[/code]</p>
<p>Esse exemplo de <strong>while()</strong> resulta na mesma exibição do exemplo usado no <strong>for()</strong>.</p>
<blockquote><p><strong>Descrição na documentação:</strong><br />
O comando <em>while </em>pede que o PHP execute os comandos aninhados repetidamente, enquanto     a expressão do <em>while</em> é avaliada como     <strong><tt class="constant">TRUE</tt></strong>. O valor da expressão é verificada     cada vez que se passa no começo do 'loop', desta forma, mesmo que este valor     mude durante a execução do(s) comando(s) aninhado(s), a execução     não parará até que o fim da iteração (cada vez que o PHP executa     os comandos dentro do 'loop' é uma iteração). Às vezes, se a     expressão <em>while</em> é avaliada como     <strong><tt class="constant">FALSE</tt></strong> logo no início, o(s) comando(s)     aninhado(s) não será(ão) rodado(s) nem uma vez sequer.</p></blockquote>
<p>O while também é amplamente usado quando estamos retornando uma busca (SELECT) no MySQL:</p>
<p>[code='php']<br />
<?php<br />
// Define a consulta MySQL<br />
$busca = "SELECT `nome`, `preco` FROM `produtos` LIMIT 10";<br />
// Executa a consulta (query)<br />
$query = mysql_query($busca);<br />
// Inicia um loop para cada resultado encontrado<br />
while ($dados = mysql_fetch_assoc($query)) {<br />
echo $dados['nome']."<br />"; // Exibe o valor da coluna `nome`<br />
}<br />
?><br />
[/code]</p>
<p>Veja mais: <a href="http://br2.php.net/manual/pt_BR/control-structures.while.php" target="_blank">Documentação do while()</a></p>
<p>--</p>
<p>Espero que tenham gostado e qualquer dúvida é só comentar!</p>
