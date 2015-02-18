---
layout: post
title: Sistema de busca em PHP e MySQL com paginação
excerpt: Aprenda a criar um sistema simples de busca usando PHP e MySQL com paginação
  e exibição de resultados parecida com a do Google.

date: '2009-05-12 20:59:37 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags: []
---
<p>Hoje vou demonstrar como podemos criar um sistema de busca simples para o seu site.</p>
<p>O sistema de busca aqui explicado consiste em duas coisas: o formulário de busca, que pode ir em qualquer lugar do seu site (topo/lateral) e a página de resultados da busca, que exibirá um resultado parecido com o do Google.</p>
<p>A busca será feita no <strong>título</strong> e no <strong>conteúdo</strong> das notícias cadastradas no banco de dados, em uma tabela chamada <strong>notícias</strong>.</p>
<p>Veja <a href="http://blog.thiagobelem.net/arquivos/2009/05/busca.jpg" target="_blank">um exemplo</a> (imagem) de como ficará o resultado da busca sem CSS.</p>
<p>Veja o código de criação da tabela:</p>
<p>[code language="sql"]<br />
CREATE TABLE `noticias` (<br />
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,<br />
`titulo` VARCHAR( 255 ) NOT NULL ,<br />
`texto` LONGTEXT NOT NULL ,<br />
`ativa` BOOL NOT NULL ,<br />
`cadastro` DATETIME NOT NULL ,<br />
INDEX ( `ativa` )<br />
) ENGINE = MYISAM[/code]</p>
<p>As colunas da tabela serão: <strong>id</strong>, <strong>titulo</strong>, <strong>texto</strong>, <strong>ativa</strong><span style="color: #999999;"> (1 ou 0)</span>, e <strong>cadastro</strong> <span style="color: #999999;">(AAAA-MM-DD HH:MM:SS)</span>.</p>
<p>Esta é uma estrutura simples de uma tabela de notícias, e você vai precisar adaptar o script para a sua tabela caso queira usar uma pronta.</p>
<p>Vamos ao formulário de busca:</p>
<p>[code language="html"]<br />
&lt;form method=&quot;GET&quot; action=&quot;http://www.meusite.com.br/busca.php&quot;&gt;<br />
&lt;fieldset&gt;<br />
&lt;label for=&quot;consulta&quot;&gt;Buscar:&lt;/label&gt;<br />
&lt;input type=&quot;text&quot; id=&quot;consulta&quot; name=&quot;consulta&quot; maxlength=&quot;255&quot; /&gt;<br />
&lt;input type=&quot;submit&quot; value=&quot;OK&quot; /&gt;<br />
&lt;/fieldset&gt;<br />
&lt;/form&gt;<br />
[/code]</p>
<p>Não se esqueça de alterar o action para o endereço certo do seu site... Se você preferir, pode definir o action usando caminho relativo, não há diferença.</p>
<p>Passaremos a busca por método GET para ficar mais parecido com o Google. :)</p>
<p>E agora o arquivo (<span style="color: #ff6600;"><strong>busca.php</strong></span>) que recebe os dados do formulário, faz a conexão ao banco de dados, processa a busca e exibe o resultado (sem paginação):</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>// Conexão com o MySQL<br />
// ========================<br />
$_BS['MySQL']['servidor'] = 'localhost';<br />
$_BS['MySQL']['usuario'] = 'usuario';<br />
$_BS['MySQL']['senha'] = 'senha';<br />
$_BS['MySQL']['banco'] = 'meubanco';<br />
mysql_connect($_BS['MySQL']['servidor'], $_BS['MySQL']['usuario'], $_BS['MySQL']['senha']);<br />
mysql_select_db($_BS['MySQL']['banco']);<br />
// ====(Fim da conexão)====</p>
<p>// Verifica se foi feita alguma busca<br />
// Caso contrario, redireciona o visitante<br />
if (!isset($_GET['consulta'])) {<br />
header(&quot;Location: http://www.meusite.com.br/&quot;);<br />
exit;<br />
}<br />
// Se houve busca, continue o script:</p>
<p>// Salva o que foi buscado em uma variável<br />
$busca = $_GET['consulta'];<br />
// Usa a função mysql_real_escape_string() para evitar erros no MySQL<br />
$busca = mysql_real_escape_string($busca);</p>
<p>// ============================================</p>
<p>// Monta outra consulta MySQL para a busca<br />
$sql = &quot;SELECT * FROM `noticias` WHERE (`ativa` = 1) AND ((`titulo` LIKE '%&quot;.$busca.&quot;%') OR ('%&quot;.$busca.&quot;%')) ORDER BY `cadastro` DESC&quot;;<br />
// Executa a consulta<br />
$query = mysql_query($sql);</p>
<p>// ============================================</p>
<p>// Começa a exibição dos resultados<br />
echo &quot;&lt;ul&gt;&quot;;<br />
while ($resultado = mysql_fetch_assoc($query)) {<br />
$titulo = $resultado['titulo'];<br />
$texto = $resultado['texto'];<br />
$link = 'http://www.meusite.com.br/noticia.php?id=' . $resultado['id'];<br />
echo &quot;&lt;li&gt;&quot;;<br />
echo '&lt;a href=&quot;'.$link.'&quot; title=&quot;'.$titulo.'&quot;&gt;'.$titulo.'&lt;/a&gt;&lt;br /&gt;';<br />
echo date('d/m/Y H:i', strtotime($resultado['cadastro']));<br />
echo '&lt;p&gt;'.$texto.'&lt;/p&gt;';<br />
echo '&lt;a href=&quot;'.$link.'&quot; title=&quot;'.$titulo.'&quot;&gt;'.$link.'&lt;/a&gt;';<br />
echo &quot;&lt;/li&gt;&quot;;<br />
}<br />
echo &quot;&lt;/ul&gt;&quot;;<br />
?&gt;<br />
[/code]</p>
<p>Não se esqueça de mudar, dentro da exibição dos resultados, como é definida a variável $link para o formato que o seu site usa ;)</p>
<p><strong>-----</strong></p>
<p>E pra quem quiser o mesmo script com paginação:</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>// Configuração do script<br />
// ========================<br />
$_BS['PorPagina'] = 20; // Número de registros por página</p>
<p>// Conexão com o MySQL<br />
// ========================<br />
$_BS['MySQL']['servidor'] = 'localhost';<br />
$_BS['MySQL']['usuario'] = 'usuario';<br />
$_BS['MySQL']['senha'] = 'senha';<br />
$_BS['MySQL']['banco'] = 'meubanco';<br />
mysql_connect($_BS['MySQL']['servidor'], $_BS['MySQL']['usuario'], $_BS['MySQL']['senha']);<br />
mysql_select_db($_BS['MySQL']['banco']);<br />
// ====(Fim da conexão)====</p>
<p>// Verifica se foi feita alguma busca<br />
// Caso contrario, redireciona o visitante<br />
if (!isset($_GET['consulta'])) {<br />
header(&quot;Location: http://www.meusite.com.br/&quot;);<br />
exit;<br />
}<br />
// Se houve busca, continue o script:</p>
<p>// Salva o que foi buscado em uma variável<br />
$busca = $_GET['consulta'];<br />
// Usa a função mysql_real_escape_string() para evitar erros no MySQL<br />
$busca = mysql_real_escape_string($busca);</p>
<p>// ============================================</p>
<p>// Monta a consulta MySQL para saber quantos registros serão encontrados<br />
$sql = &quot;SELECT COUNT(*) AS total FROM `noticias` WHERE (`ativa` = 1) AND ((`titulo` LIKE '%&quot;.$busca.&quot;%') OR ('%&quot;.$busca.&quot;%'))&quot;;<br />
// Executa a consulta<br />
$query = mysql_query($sql);<br />
// Salva o valor da coluna 'total', do primeiro registro encontrado pela consulta<br />
$total = mysql_result($query, 0, 'total');<br />
// Calcula o máximo de paginas<br />
$paginas =  (($total % $_BS['PorPagina']) &gt; 0) ? (int)($total / $_BS['PorPagina']) + 1 : ($total / $_BS['PorPagina']);</p>
<p>// ============================================</p>
<p>// Sistema simples de paginação, verifica se há algum argumento 'pagina' na URL<br />
if (isset($_GET['pagina'])) {<br />
$pagina = (int)$_GET['pagina'];<br />
} else {<br />
$pagina = 1;<br />
}<br />
$pagina = max(min($paginas, $pagina), 1);<br />
$inicio = ($pagina - 1) * $_BS['PorPagina'];</p>
<p>// ============================================</p>
<p>// Monta outra consulta MySQL, agora a que fará a busca com paginação<br />
$sql = &quot;SELECT * FROM `noticias` WHERE (`ativa` = 1) AND ((`titulo` LIKE '%&quot;.$busca.&quot;%') OR ('%&quot;.$busca.&quot;%')) ORDER BY `cadastro` DESC LIMIT &quot;.$inicio.&quot;, &quot;.$_BS['PorPagina'];<br />
// Executa a consulta<br />
$query = mysql_query($sql);</p>
<p>// ============================================</p>
<p>// Começa a exibição dos resultados<br />
echo &quot;&lt;p&gt;Resultados &quot;.min($total, ($inicio + 1)).&quot; - &quot;.min($total, ($inicio + $_BS['PorPagina'])).&quot; de &quot;.$total.&quot; resultados encontrados para '&quot;.$_GET['consulta'].&quot;'&lt;/p&gt;&quot;;<br />
// &lt;p&gt;Resultados 1 - 20 de 138 resultados encontrados para 'minha busca'&lt;/p&gt;</p>
<p>echo &quot;&lt;ul&gt;&quot;;<br />
while ($resultado = mysql_fetch_assoc($query)) {<br />
$titulo = $resultado['titulo'];<br />
$texto = $resultado['texto'];<br />
$link = 'http://www.meusite.com.br/noticia.php?id=' . $resultado['id'];<br />
echo &quot;&lt;li&gt;&quot;;<br />
echo '&lt;a href=&quot;'.$link.'&quot; title=&quot;'.$titulo.'&quot;&gt;'.$titulo.'&lt;/a&gt;&lt;br /&gt;';<br />
echo date('d/m/Y H:i', strtotime($resultado['cadastro']));<br />
echo '&lt;p&gt;'.$texto.'&lt;/p&gt;';<br />
echo '&lt;a href=&quot;'.$link.'&quot; title=&quot;'.$titulo.'&quot;&gt;'.$link.'&lt;/a&gt;';<br />
echo &quot;&lt;/li&gt;&quot;;<br />
}<br />
echo &quot;&lt;/ul&gt;&quot;;</p>
<p>// ============================================</p>
<p>// Começa a exibição dos paginadores<br />
if ($total &gt; 0) {<br />
for($n = 1; $n &lt;= $paginas; $n++) {<br />
echo '&lt;a href=&quot;?consulta='.$_GET['consulta'].'&amp;pagina='.$n.'&quot;&gt;'.$n.'&lt;/a&gt;&amp;nbsp;&amp;nbsp;';<br />
}<br />
}</p>
<p>?&gt;<br />
[/code]</p>
<p>Reconheço que o script poderia ser mais simples, mas seu uso ficaria muito limitado (e o código ficaria enorme)... E com paginação fica muito mais legal, além de ser o que todo mundo acaba procurando.</p>
<p>---</p>
<p>Vocês perceberão que não há formatação e estilização (CSS) nenhuma... Esse sistema de busca foi feito para você usar de base e criar o seu próprio sistema.</p>
<p>Espero que tenham gostado! :)</p>
<p>Qualquer dúvida, é só falar.</p>
