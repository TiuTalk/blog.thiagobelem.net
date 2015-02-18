---
layout: post
title: Relacionamento de Tabelas no MySQL
excerpt: O relacionamento de tabelas ajuda a buscar informações em mais de uma tabela,
  em apenas uma consulta... Aprenda como funciona e como fazer o relacionamento de
  duas ou mais tabelas no MySQL.

date: '2009-08-15 19:29:17 -0300'
categories:
- PHP
- MySQL
- Artigos
- Otimização
tags:
- PHP
- MySQL
- Relacionamento
- JOIN
---
Opa opa! Hoje vamos a mais um tutorial "<em>step by step</em>" onde vou falar e mostrar como fazer relacionamento entre tabelas no MySQL.

O relacionamento de tabelas é necessário quando temos mais de uma tabela com informações que podem e precisam ser cruzadas, por exemplo: categorias e produtos... Cada registro na tabela produtos estará ligado a um registro da tabela categorias.

Só pra vocês saberem, existem três níveis de relacionamento: nosso exemplo será um relação de <strong style="color: red">1:N</strong> (fala-se "um pra N" ou "um para muitos") onde cada categoria (1) contém um ou mais produtos (N)... Há também o <strong style="color: red">1:1</strong> onde cada registro de uma tabela (1) está ligado a um e somente um registro de outra tabela (1)... E há outro nível de relacionamento, mais complexo, que é o <strong style="color: red">N:N</strong> onde um ou mais registros de uma tabela (N) estão relacionados a um ou mais registros de outra tabela (N), que seria o exemplo de duas tabelas "produtos" e "tags" onde um produto tem várias tags e vários produtos pertencem a uma tag.

Não vou me aprofundar muito no assunto... Vou falar apenas da relação mais comum (<strong>1:N</strong>) e dar exemplos de como trabalhar com elas.

Para o nosso exemplo de hoje usaremos duas tabelas, chamadas "categorias" e "produtos":


[code language="sql"]
CREATE TABLE `categorias` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
	`nome` VARCHAR( 255 ) NOT NULL
) ENGINE = MYISAM;

CREATE TABLE `produtos` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
	`categoria_id` INT NOT NULL ,
	`nome` VARCHAR( 255 ) NOT NULL ,
	`preco` DECIMAL( 10,2 ) NOT NULL
) ENGINE = MYISAM;
[/code]

E vamos inserir alguns dados para exemplo:


[code language="sql"]
-- Extraindo dados da tabela `categorias`
INSERT INTO `categorias` VALUES(1, 'Camisetas');
INSERT INTO `categorias` VALUES(2, 'Canecas');

-- Extraindo dados da tabela `produtos`
INSERT INTO `produtos` VALUES(1, 1, 'Camiseta Social', 15.00);
INSERT INTO `produtos` VALUES(2, 1, 'Camiseta Regata', 11.99);
INSERT INTO `produtos` VALUES(3, 2, 'Caneca Grande', 12.00);
[/code]

Reparem que na tabela produtos temos uma coluna "especial", que é a "categoria_id" (INT)... Ela é quem ajudará a fazer a relação das duas tabelas... Nessa coluna entrará o ID da categoria a qual o produto pertence... Ou seja: as duas camisetas pertencem a categoria "Camisetas" (ID 1) e o terceiro produto (a Caneca Grande) pertence a categoria "Canecas" (ID 2) e é na coluna "categoria_id" que armazenamos esses IDs que identificam as categorias.

Esse campo responsável pela relação é normalmente chamado de "<em>foreing key</em>" (fk) ou "chave estrangeira".

<h3>Mas qual a utilidade dessa tal "relação"?</h3>
Sem usar o relacionamento você poderia pegar todos os produtos e depois pegar as informações das categorias com uma segunda consulta, assim:
[code language="php"]
<?php

// Consulta que pega todos os produtos
$sql = "SELECT * FROM `produtos` ORDER BY `nome` ASC";
$query = mysql_query($sql);
while ($produto = mysql_fetch_assoc($query)) {
	// Aqui temos o array $produto com todos os valores do produto

	// Consulta para pegar os dados da categoria:
	$sqlC = "SELECT * FROM `categorias` WHERE `id` = " . $produto['categoria_id'];
	$queryC = mysql_query($sqlC);
	$categoria = mysql_fetch_assoc($queryC);

	echo 'Titulo: ' . $produto['nome'] . '';
	echo 'Preço: ' . $produto['preco'] . '';
	echo 'Categoria: ' . $categoria['nome']. '';
	echo '<hr />';
}

?>
[/code]
Até aí tudo bem... Não tem nenhum pecado nisso... Mas imagine que você tem uma loja com 1000 produtos (o que não é muito), seria executada 1 consulta para todos os produtos e, dentro do loop (while) seriam executadas outras 1000 consultas para pegar o nome da categoria a qual o produto pertence... Ou seja, 1001 consultas, o que é um absurdo.

<h3>A mágica da relação</h3>
Agora vamos montar uma consulta que <strong>DE UMA SÓ VEZ</strong> irá pegar os dados de cada produto e também o nome da categoria... Com isso reduziremos nossas 1001 consultas pra... uma só! Sem mistérios, sem sub-consultas, nem consultas dentro do <strong>while()</strong>! :D

Mas antes de mostrar o script vou ajudar a vocês entenderem como a relação é feita... Antes a nossa consulta que pega apenas os produtos era assim:


[code language="sql" light="true"]
SELECT * FROM `produtos` ORDER BY `nome` ASC
[/code]
Sua tradução seria: <strong style="color: navy">SELECIONAR todas as colunas da TABELA `produtos` ORDENADO PELO `nome` ASCENDETEMENTE</strong>
<center><img src="http://blog.thiagobelem.net/arquivos/2009/08/relacionamento1.jpg" alt="" style="border: 1px solid silver; margin-bottom: 5px" /></center>

Agora usaremos uma nova "palavra" do MySQL que é o <strong style="background: gray; color: white">JOIN</strong> (tradução: "unir") e serve para unir resultados de duas tabelas.. ;)

Existem três tipos de JOIN mas não vou falar dos outros dois pois eles são MUITO pouco usados... Falaremos do "<strong style="background: gray; color: white">INNER JOIN</strong>" que exige que haja um registro que corresponda a relação nas duas tabelas, ou seja: se houver um produto sem categoria ou a categoria não existir na tabela categorias esse produto é omitido dos resultados.

A nossa consulta ficará assim:
[code language="sql" light="true"]
SELECT `produtos`.* FROM `produtos` INNER JOIN `categorias` ON `produtos`.`categoria_id` = `categorias`.`id` ORDER BY `produtos`.`nome` ASC
[/code]
Sua tradução seria: <strong style="color: navy">SELECIONAR todas as colunas [da tabela produtos] da TABELA `produtos` UNINDO A TABELA `categorias` ONDE a coluna `categoria_id` [da tabela produtos] É IGUAL a coluna `id` [da tabela categorias] ORDENADO PELO `nome` [da tabela produtos] ASCENDETEMENTE</strong>
<center><img src="http://blog.thiagobelem.net/arquivos/2009/08/relacionamento1.jpg" alt="" style="border: 1px solid silver; margin-bottom: 5px" /></center>

A nossa "regra de relação" acontece ali entre o ON e o ORDER BY, dizemos que a relação entre as tabelas usará como referencia a coluna "categoria_id" da tabela "produtos" sendo igual a coluna "id" da tabela "categorias"... Se você fosse usar algum WHERE ele entraria depois do ON e antes do ORDER BY.

Pra quem ainda não entendeu, o ON é como o WHERE de uma consulta normal... É a regra da relação.

Repare que agora precisamos usar um formato diferente para identificar as colunas usando: <strong style="color: red">`tabela`.`coluna`</strong>... Isso é necessário pois agora estamos trabalhando com duas tabelas.

Da forma que a nossa consulta está ainda não estamos pegando o nome da categoria... fazemos isso adicionando mais um campo na parte do SELECT, assim:
[code language="sql" light="true"]
SELECT `produtos`.*, `categorias`.`nome` FROM `produtos` INNER JOIN `categorias` ON `produtos`.`categoria_id` = `categorias`.`id` ORDER BY `produtos`.`nome` ASC
[/code]
Agora estamos pegando também o valor da coluna <strong>"nome"</strong> do registro encontrado (pela relação) na tabela <strong>"categorias"</strong>.
<center><img src="http://blog.thiagobelem.net/arquivos/2009/08/relacionamento2.jpg" alt="" style="border: 1px solid silver; margin-bottom: 5px" /></center>

Só que agora temos um novo problema... Nas duas tabelas existe uma coluna chamada "nome", e quando estivermos lá no PHP, dentro do while, não teríamos como identificar de qual tabela pegamos as informações (veja a próxima imagem), pois as duas seriam <strong>$produto['nome']</strong>... Precisamos então renomear esse novo campo que adicionamos a busca, assim:
[code language="sql" light="true"]
SELECT `produtos`.*, `categorias`.`nome` AS categoria FROM `produtos` INNER JOIN `categorias` ON `produtos`.`categoria_id` = `categorias`.`id` ORDER BY `produtos`.`nome` ASC
[/code]
Agora o resultado de `categorias`.`nome` estará presente nos resultados como "categoria" e não "nome"... Sei que parece complicado de início mas vocês vão entender já já.

E por fim, faremos mais uma modificação, pra evitar ficar usando `tabela`.`coluna` também podemos renomear as tabelas, e com isso diminuir otamanho da consulta:
[code language="sql" light="true"]
SELECT p.*, c.`nome` AS categoria FROM `produtos` AS p INNER JOIN `categorias` AS c ON p.`categoria_id` = c.`id` ORDER BY p.`nome` ASC
[/code]
Nesse caso <strong>p</strong> representará a tabela "produtos" e <strong>c</strong> representará a "categorias".
<center><img src="http://blog.thiagobelem.net/arquivos/2009/08/relacionamento3.jpg" alt="" style="border: 1px solid silver; margin-bottom: 5px" /></center>

Sei que parece uma consulta maior e mais complicada... Mas você fará o MySQL trabalhar <u>muito menos</u> se fizer assim, com JOINS, do que fazer uma 2ª consulta dentro do while... Essa é a forma mais correta de fazer consultas quando precisamos de informações vindas de mais de uma tabela.

Agora vamos ao nosso novo script de PHP que, sem dúvidas, é bem mais prático e eficiente:
[code language="php" highlight="4,10"]
<?php

// Consulta que pega todos os produtos e o nome da categoria de cada um
$sql = "SELECT p.*, c.`nome` AS categoria FROM `produtos` AS p INNER JOIN `categorias` AS c ON p.`categoria_id` = c.`id` ORDER BY p.`nome` ASC";
$query = mysql_query($sql);
while ($produto = mysql_fetch_assoc($query)) {
	// Aqui temos o array $produto com todos os dados encontrados
	echo 'Titulo: ' . $produto['nome'] . '';
	echo 'Preço: ' . $produto['preco'] . '';
	echo 'Categoria: ' . $produto['categoria']. '';
	echo '<hr />';
}

?>
[/code]

<h3>Os outros tipos de JOINs</h3>
Existem também outros dois tipos de JOIN: o <strong>LEFT JOIN</strong> e o <strong>RIGHT JOIN</strong>:

Se usássemos o <strong>LEFT JOIN</strong> seriam retornados todos os produtos, independente se eles estão ligados a uma categoria (na tabela categorias) existente ou não.

Já o <strong>RIGHT JOIN</strong> seria exatamente o contrário: seriam retornados todos os produtos que pertencem categorias existentes e também o nome das outras categorias que não tem ligação com nenhum produto.

O uso desses outros tipos de JOIN é muito raro e acho que não vale a pena ficar filosofando sobre eles enquanto se aprende sobre relacionamentos.

<h3>E a relação com mais de duas tabelas?</h3>
Só pra exemplo, essa seria a consulta que pega os produtos, as categorias e o nome do usuário que cadastrou o produto e filtrando apenas pelos produtos ativos:
[code language="sql" light="true"]
SELECT p.*, c.`nome` AS categoria, u.`nome` AS usuario FROM `produtos` AS p INNER JOIN `categorias` AS c ON p.`categoria_id` = c.`id` INNER JOIN `usuarios` AS u ON p.`usuario_id` = u.`id` WHERE (p.`ativo` = 1) ORDER BY p.`nome` ASC
[/code]
<center><img src="http://blog.thiagobelem.net/arquivos/2009/08/relacionamento4.jpg" alt="" style="border: 1px solid silver; margin-bottom: 5px" /></center>

Sim.. eu adoro consultas gigantescas. :D



