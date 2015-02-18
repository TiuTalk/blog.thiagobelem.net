---
layout: post
title: Manipulando dados do MySQL com o PHP

date: '2009-03-20 16:25:51 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags: []
---
<img class="alignright size-full wp-image-360" style="margin-left: 10px; margin-right: 5px;" title="MySQL" src="http://blog.thiagobelem.net/arquivos/2009/03/mysql-167x86.png" alt="MySQL" width="150" />Este talvez seja o tópico mais importante (e longo) do blog... Aqui aprenderemos a inserir dados, alterar dados e deletar dados do MySQL.

É, sem dúvida, a tarefa mais executada em uma aplicação de médio/grande porte e você vai <strong>precisar</strong> dominar cada um desses passos da mesma forma que você domina o seu idioma nativo. Por isso, preste muita atenção.

Irei explicar de forma mais abrangente como ficam as operações que fazem a manipulação desses dados... Em outro tópico explicarei como fazer para pegar e manipular dados vindos de formulários HTML. Meu intuito é que você entenda como usar cada uma dessas operações da melhor forma possível pro seu sistema... por isso darei mais de um exemplo pra cada uma.

Pularei a parte que explica como fazer uma conexão ao banco de dados MySQL por que já fiz isso [nesse tópico](/conexao-mysql-servidor-local-e-externo). Farei a conexão com o servidor usando include no arquivo <span style="color: #99cc00;"><strong>conexao.php</strong></span> que - apenas - faz a conexão o MySQL.

Usarei como exemplo os dados <span class="removed_link" title="http://jbonline.terra.com.br/pextra/2009/03/16/e160323614.asp">dessa notícia</span>, publicada no site do Jornal do Brasil em 16/03/2009 as 23:26.

<h4>Tabela de exemplo</h4>
Usaremos a tabela 'noticias' nos exemplo desse tópico, ela é composta por uma tabela simples de quatro colunas: id, titulo, texto e cadastro. O campo id é numérico (inteiro), do tipo <strong>INT</strong> e possui <em>incremento automático</em>, e contem o índice de cada notícia na tabela, o campo titulo é alfa-numérico, do tipo <strong>VARCHAR</strong>, e pode ter até 255 caracteres, o campo texto, do tipo <strong>LONGTEXT</strong>, aceita qualquer valor existente em um texto e pode ter muitos (eu disse <strong>muitos</strong>) caracteres, o suficiente para algumas longas dezenas de páginas a4 se necessário... e por último, mas não menos importante, temos o campo cadastro que é do tipo <strong>DATETIME </strong>e guarda a data e hora de cadastro da notícia no sistema.

<span style="color: #993300;"><strong>Nota: </strong></span>não use espaços ou acentos nos nomes nas tabelas e bancos MySQL.

O código para a criação dessa tabela é o seguinte:


[code language="sql"]
CREATE TABLE IF NOT EXISTS `noticias` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`titulo` varchar(255) NOT NULL,
`texto` longtext NOT NULL,
`cadastro` datetime NOT NULL,
PRIMARY KEY (`id`),
KEY `titulo` (`titulo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
[/code]

<h4>Inserindo dados</h4>
Para inserir dados no MySQL você precisa montar uma consulta SQL (também chamada de <em>query</em>) usando o comando INSERT do MySQL, vejamos o exemplo de como inserir uma notícia na nossa tabela de notícias:


[code language="php"]
<?php
// Inclui o arquivo que faz a conexão ao MySQL
include("conexao.php");

// Definição das variáveis para montar a query
$titulo = 'Vandalismo mata 10 mil árvores por ano no Rio';
$texto = 'Não fosse privilegiada pela natureza, com a vasta extensão da Mata Atlântica, a paisagem do Rio seria desértica.
';
$cadastro = date('Y-m-d H:i:s'); // Formato de data padrão do MySQL
// ~~~~~~~~~~~~~~~~~~~~~~~~~~

// Manipulamos as variáveis para evitar problemas com aspas e outros caracteres protegidos do MySQL
$titulo = mysql_escape_string($titulo);
$texto = mysql_escape_string($texto);

// Montamos a consulta SQL
$query = "INSERT INTO `noticias` (`titulo`, `texto`, `cadastro`) VALUES ('".$titulo."', '".$texto."', '".$cadastro."')";

// Executa a query
$inserir = mysql_query($query);

if ($inserir) {
echo "Notícia inserida com sucesso!";
} else {
echo "Não foi possível inserir a notícia, tente novamente.";
// Exibe dados sobre o erro:
echo "Dados sobre o erro:" . mysql_error();
}
?>
[/code]

A função <strong>mysql_query()</strong> é responsável por executar uma consulta no servidor MySQL e, no caso do comando INSERT, ela retorna true ou false informando se o registro foi ou não inserido.

A sintaxe padrão do INSERT no MySQL é mais ou menos a seguinte:

<strong>INSERT INTO <span style="color: #ff9900;">%tabela%</span> (<span style="color: #99cc00;">%colunas%</span>) VALUES (<span style="color: #3366ff;">%valores%</span>)</strong>

Com essa sintaxe, você define em quais colunas você está inserindo valores... No nosso exemplo não incluímos a coluna ID na lista pois queremos que o MySQL use o seu valor padrão.

<span style="color: #993300;"><strong>Nota: </strong></span>Pra cada coluna listada em <span style="color: #99cc00;"><strong>%colunas%</strong></span> deve existir um valor, <strong>na mesma posição</strong>, listado em <span style="color: #3366ff;"><strong>%valores%</strong></span>.

Você também tem uma segunda opção de sintaxe para o INSERT:

<strong>INSERT INTO <span style="color: #ff9900;">%tabela%</span> VALUES (<span style="color: #3366ff;">%valores%</span>)</strong>

Se você preferir por esse formato vai precisar definir os valores de TODAS as colunas da tabela, ficando dessa forma:


[code language="php"]
// Montamos a consulta SQL
$query = "INSERT INTO `noticias` VALUES (NULL, '".$titulo."', '".$texto."', '".$cadastro."')";
[/code]

A desvantagem desse formato (diferente do primeiro) é que você precisa dizer o valor de cada uma das colunas da tabela ordenadamente para o PHP. Mas eu particularmente prefiro esse segundo formato de INSERT, ainda mais quando temos mais de 10 colunas em uma tabela fica muito ruim escrever o nome de todas elas e depois os valores de cada uma.

Usamos <strong>NULL</strong> (repare a falta de aspas) no valor da coluna ID por que queremos que o MySQL use o seu <strong>incremento automático</strong> para gerar o ID do próximo registro da tabela de forma natural. Exemplo: se o ID da última notícia cadastrada é 5 e inserirmos uma nova notícia usando NULL, ela terá 6 como ID. <strong>Convenciona-se</strong> que toda tabela MySQL deva ter uma coluna ID com auto incremento.

Mas fica a seu critério qual formato de INSERT usar.

<h4>Deletando dados</h4>
Se você quiser deletar dados armazenados no MySQL você pode usar o comando DELETE dentro da consulta SQL. A sua sintaxe é bem simples e a deleção se baseia em uma condição, vejamos dois exemplos:


[code language="php"]
<?php
// Inclui o arquivo que faz a conexão ao MySQL
include("conexao.php");

// Montamos a consulta SQL para deletar a(s) notícia(s) com ID maior ou igual a três
$query = "DELETE FROM `noticias` WHERE (`id` >= 3)";

// Executa a query
$deletar = mysql_query($query);

if ($deletar) {
echo "As notícias foram deletadas com sucesso!";
} else {
echo "Não foi possível deletar as notícia, tente novamente.";
// Exibe dados sobre o erro:
echo "Dados sobre o erro:" . mysql_error();
}
?>
[/code]

Nesse exemplo condicionamos a deleção apenas dos registros que tiverem o valor da coluna `id` maior ou igual a três.


[code language="php"]
<?php
// Inclui o arquivo que faz a conexão ao MySQL
include("conexao.php");

// Montamos a consulta SQL para deletar notícias que não sejam desse ano
$query = "DELETE FROM `noticias` WHERE (`cadastro` < '2009-01-01 00:00:00') OR (`cadastro` > '2009-12-31 23:23:59')";

// Executa a query
$deletar = mysql_query($query);

if ($deletar) {
echo "As notícias de outros anos foram deletadas com sucesso!";
} else {
echo "Não foi possível deletar as notícia, tente novamente.";
// Exibe dados sobre o erro:
echo "Dados sobre o erro:" . mysql_error();
}
?>
[/code]

Nesse exemplo usamos duas condições ao mesmo tempo e buscamos registros em função da sua data de cadastro no sistema.

Podemos resumir a sintaxe da <em>query </em>de deleção da seguinte forma:

<strong>DELETE FROM <span style="color: #ff9900;">%tabela%</span> WHERE <span style="color: #33cccc;">%condições%</span></strong>

<span style="color: #ff0000;"><strong>Atenção:</strong></span> Suponhamos que você tenha quatro notícias com IDs iguais a 1, 2, 3 e 4 e deleta a notícia que tenha id igual a 4. Quando você adicionar um novo registro a tabela, usando o <strong>incremento automático</strong>, o ID dele vai ser 5 e não 4. Sendo assim os IDs vão ficar da seguinte forma: 1, 2, 3 e 5.

<h4>Atualizando dados em registros</h4>
Você já tem a sua tabela cheia de notícias e sabe inserir e deletar as notícias... Mas você repara que uma delas tem aquele erro boçal de ortografia no titulo da notícia. O que você faz? Você pode dar uma de português e deletar a notícia e cadastrar outra notícia com o formato correto... OU você pode simplesmente editar o titulo da notícia!  :-D

Ai você descobre que existe o UPDATE do MySQL, que serve exatamente para isso! Vamos ao exemplo:


[code language="php"]
<?php
// Inclui o arquivo que faz a conexão ao MySQL
include("conexao.php");

// Id da notícia a ser editada
$id = 3;

// Novo título da notícia
$titulo = 'Vandalismo mata 10 mil árvores por ano no Rio de Janeiro';
$cadastro = date('Y-m-d H:i:s'); // Formato de data padrão do MySQL

// Manipulamos as variáveis para evitar problemas com aspas e outros caracteres protegidos do MySQL
$titulo = mysql_escape_string($titulo);

// Montamos a consulta SQL para deletar a(s) notícia(s) com ID maior ou igual a três
$query = "UPDATE `noticias` SET `titulo` = '".$titulo."', `cadastro` = '".$cadastro."' WHERE (`id` = ".$id.")";

// Executa a query
$atualiza = mysql_query($query);

if ($atualiza) {
echo "A notícia foi atualizada com sucesso!";
} else {
echo "Não foi possível atualizar as notícia, tente novamente.";
// Exibe dados sobre o erro:
echo "Dados sobre o erro:" . mysql_error();
}
?>
[/code]

Repare que no exemplo, além de atualizar o titulo da notícia, atualizamos também a sua "data de cadastro" para ela ser considerada uma notícia que foi alterada recentemente. Você pode usar o UPDATE em quantas colunas do registro você preferir e também pode brincar com a condição depois do WHERE da forma que achar melhor.

A sintaxe <em>normal </em>do UPDATE é a seguinte:

<strong>UPDATE <span style="color: #ff9900;">%tabela%</span> SET <span style="color: #99cc00;">%alteraçoes%</span> WHERE <span style="color: #33cccc;">%condições%</span></strong>

O formato das alterações é esse: <strong>`coluna` = <valor>, `coluna` = <valor>, `coluna` = <valor></strong>

--

Eu também iria falar sobre como buscar dados no MySQL mas acho que, de tão grande que é, esse assunto merece um post só dele... Então, até a próxima! :)

