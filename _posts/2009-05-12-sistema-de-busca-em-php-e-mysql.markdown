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
Hoje vou demonstrar como podemos criar um sistema de busca simples para o seu site.

O sistema de busca aqui explicado consiste em duas coisas: o formulário de busca, que pode ir em qualquer lugar do seu site (topo/lateral) e a página de resultados da busca, que exibirá um resultado parecido com o do Google.

A busca será feita no <strong>título</strong> e no <strong>conteúdo</strong> das notícias cadastradas no banco de dados, em uma tabela chamada <strong>notícias</strong>.

Veja [um exemplo](/arquivos/2009/05/busca.jpg) (imagem) de como ficará o resultado da busca sem CSS.

Veja o código de criação da tabela:


{% highlight text linenos %}
CREATE TABLE `noticias` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`titulo` VARCHAR( 255 ) NOT NULL ,
`texto` LONGTEXT NOT NULL ,
`ativa` BOOL NOT NULL ,
`cadastro` DATETIME NOT NULL ,
INDEX ( `ativa` )
) ENGINE = MYISAM
{% endhighlight %}

As colunas da tabela serão: <strong>id</strong>, <strong>titulo</strong>, <strong>texto</strong>, <strong>ativa</strong><span style="color: #999999;"> (1 ou 0)</span>, e <strong>cadastro</strong> <span style="color: #999999;">(AAAA-MM-DD HH:MM:SS)</span>.

Esta é uma estrutura simples de uma tabela de notícias, e você vai precisar adaptar o script para a sua tabela caso queira usar uma pronta.

Vamos ao formulário de busca:


{% highlight text linenos %}
<form method="GET" action="http://www.meusite.com.br/busca.php">
<fieldset>
<label for="consulta">Buscar:</label>
<input type="text" id="consulta" name="consulta" maxlength="255" />
<input type="submit" value="OK" />
</fieldset>
</form>
{% endhighlight %}

Não se esqueça de alterar o action para o endereço certo do seu site... Se você preferir, pode definir o action usando caminho relativo, não há diferença.

Passaremos a busca por método GET para ficar mais parecido com o Google. :)

E agora o arquivo (<span style="color: #ff6600;"><strong>busca.php</strong></span>) que recebe os dados do formulário, faz a conexão ao banco de dados, processa a busca e exibe o resultado (sem paginação):


{% highlight text linenos %}
<?php

// Conexão com o MySQL
// ========================
$_BS['MySQL']['servidor'] = 'localhost';
$_BS['MySQL']['usuario'] = 'usuario';
$_BS['MySQL']['senha'] = 'senha';
$_BS['MySQL']['banco'] = 'meubanco';
mysql_connect($_BS['MySQL']['servidor'], $_BS['MySQL']['usuario'], $_BS['MySQL']['senha']);
mysql_select_db($_BS['MySQL']['banco']);
// ====(Fim da conexão)====

// Verifica se foi feita alguma busca
// Caso contrario, redireciona o visitante
if (!isset($_GET['consulta'])) {
header("Location: http://www.meusite.com.br/");
exit;
}
// Se houve busca, continue o script:

// Salva o que foi buscado em uma variável
$busca = $_GET['consulta'];
// Usa a função mysql_real_escape_string() para evitar erros no MySQL
$busca = mysql_real_escape_string($busca);

// ============================================

// Monta outra consulta MySQL para a busca
$sql = "SELECT * FROM `noticias` WHERE (`ativa` = 1) AND ((`titulo` LIKE '%".$busca."%') OR ('%".$busca."%')) ORDER BY `cadastro` DESC";
// Executa a consulta
$query = mysql_query($sql);

// ============================================

// Começa a exibição dos resultados
echo "<ul>";
while ($resultado = mysql_fetch_assoc($query)) {
$titulo = $resultado['titulo'];
$texto = $resultado['texto'];
$link = 'http://www.meusite.com.br/noticia.php?id=' . $resultado['id'];
echo "<li>";
echo '['.$titulo.']('.$link.')';
echo date('d/m/Y H:i', strtotime($resultado['cadastro']));
echo ''.$texto.'
';
echo '['.$link.']('.$link.')';
echo "</li>";
}
echo "</ul>";
?>
{% endhighlight %}

Não se esqueça de mudar, dentro da exibição dos resultados, como é definida a variável $link para o formato que o seu site usa ;)

<strong>-----</strong>

E pra quem quiser o mesmo script com paginação:


{% highlight text linenos %}
<?php

// Configuração do script
// ========================
$_BS['PorPagina'] = 20; // Número de registros por página

// Conexão com o MySQL
// ========================
$_BS['MySQL']['servidor'] = 'localhost';
$_BS['MySQL']['usuario'] = 'usuario';
$_BS['MySQL']['senha'] = 'senha';
$_BS['MySQL']['banco'] = 'meubanco';
mysql_connect($_BS['MySQL']['servidor'], $_BS['MySQL']['usuario'], $_BS['MySQL']['senha']);
mysql_select_db($_BS['MySQL']['banco']);
// ====(Fim da conexão)====

// Verifica se foi feita alguma busca
// Caso contrario, redireciona o visitante
if (!isset($_GET['consulta'])) {
header("Location: http://www.meusite.com.br/");
exit;
}
// Se houve busca, continue o script:

// Salva o que foi buscado em uma variável
$busca = $_GET['consulta'];
// Usa a função mysql_real_escape_string() para evitar erros no MySQL
$busca = mysql_real_escape_string($busca);

// ============================================

// Monta a consulta MySQL para saber quantos registros serão encontrados
$sql = "SELECT COUNT(*) AS total FROM `noticias` WHERE (`ativa` = 1) AND ((`titulo` LIKE '%".$busca."%') OR ('%".$busca."%'))";
// Executa a consulta
$query = mysql_query($sql);
// Salva o valor da coluna 'total', do primeiro registro encontrado pela consulta
$total = mysql_result($query, 0, 'total');
// Calcula o máximo de paginas
$paginas =  (($total % $_BS['PorPagina']) > 0) ? (int)($total / $_BS['PorPagina']) + 1 : ($total / $_BS['PorPagina']);

// ============================================

// Sistema simples de paginação, verifica se há algum argumento 'pagina' na URL
if (isset($_GET['pagina'])) {
$pagina = (int)$_GET['pagina'];
} else {
$pagina = 1;
}
$pagina = max(min($paginas, $pagina), 1);
$inicio = ($pagina - 1) * $_BS['PorPagina'];

// ============================================

// Monta outra consulta MySQL, agora a que fará a busca com paginação
$sql = "SELECT * FROM `noticias` WHERE (`ativa` = 1) AND ((`titulo` LIKE '%".$busca."%') OR ('%".$busca."%')) ORDER BY `cadastro` DESC LIMIT ".$inicio.", ".$_BS['PorPagina'];
// Executa a consulta
$query = mysql_query($sql);

// ============================================

// Começa a exibição dos resultados
echo "Resultados ".min($total, ($inicio + 1))." - ".min($total, ($inicio + $_BS['PorPagina']))." de ".$total." resultados encontrados para '".$_GET['consulta']."'
";
// Resultados 1 - 20 de 138 resultados encontrados para 'minha busca'


echo "<ul>";
while ($resultado = mysql_fetch_assoc($query)) {
$titulo = $resultado['titulo'];
$texto = $resultado['texto'];
$link = 'http://www.meusite.com.br/noticia.php?id=' . $resultado['id'];
echo "<li>";
echo '['.$titulo.']('.$link.')';
echo date('d/m/Y H:i', strtotime($resultado['cadastro']));
echo ''.$texto.'
';
echo '['.$link.']('.$link.')';
echo "</li>";
}
echo "</ul>";

// ============================================

// Começa a exibição dos paginadores
if ($total > 0) {
for($n = 1; $n <= $paginas; $n++) {
echo '['.$n.'](?consulta='.$_GET['consulta'].'&pagina='.$n.')&nbsp;&nbsp;';
}
}

?>
{% endhighlight %}

Reconheço que o script poderia ser mais simples, mas seu uso ficaria muito limitado (e o código ficaria enorme)... E com paginação fica muito mais legal, além de ser o que todo mundo acaba procurando.

---

Vocês perceberão que não há formatação e estilização (CSS) nenhuma... Esse sistema de busca foi feito para você usar de base e criar o seu próprio sistema.

Espero que tenham gostado! :)

Qualquer dúvida, é só falar.

