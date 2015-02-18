---
layout: post
title: Criando LOGs com PHP e MySQL

date: '2009-03-12 22:33:57 -0300'
categories:
- PHP
- MySQL
- Tutoriais
- Segurança
tags: []
---
<p>Fala gente,</p>
<p>Um recurso muito bom de segurança é a criação de <abbr title="Em computação, Log de dados é o termo utilizado para descrever o processo de registro de eventos relevantes num sistema computacional.">LOGs</abbr> que são registro de atividades. Você pode criar registro de todos os tipo de atividades: visitas, cadastros, tentativas de acesso, erros do PHP e muito mais.</p>
<p>O que você vai precisar pra criar um sisteminha simples de LOGs pro seu site é de apenas uma tabela no banco de dados MySQL:</p>
<p>[code='sql']
DROP TABLE IF EXISTS `logs`;
CREATE TABLE IF NOT EXISTS `logs` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`hora` datetime NOT NULL,
`ip` varchar(15) NOT NULL,
`mensagem` text COLLATE latin1_general_ci NOT NULL,
PRIMARY KEY (`id`),
KEY `hora` (`hora`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=1 ;
[/code]</p>
<p>Vale ressaltar que você não precisa gravar os LOGs especificamente no banco de dados, você pode criar arquivos e pastas pra isso também. Falarei sobre como criar arquivos e pastas dinamicamente (pelo PHP) em outro tópico.</p>
<p>Tendo a tabela já criada no seu banco de dados, você só precisa criar uma função para agilizar as coisas:</p>
<p>[code='php']
<?php</p>
<p>/**
* Função para salvar mensagens de LOG no MySQL
*
* @param string $mensagem - A mensagem a ser salva
*
* @return bool - Se a mensagem foi salva ou não (true/false)
*/
function salvaLog($mensagem) {
$ip = $_SERVER['REMOTE_ADDR']; // Salva o IP do visitante
$hora = date('Y-m-d H:i:s'); // Salva a data e hora atual (formato MySQL)</p>
<p>// Usamos o mysql_escape_string() para poder inserir a mensagem no banco
//   sem ter problemas com aspas e outros caracteres
$mensagem = mysql_escape_string($mensagem);</p>
<p>// Monta a query para inserir o log no sistema
$sql = "INSERT INTO `logs` VALUES (NULL, '".$hora."', '".$ip."', '".$mensagem."')";</p>
<p>if (mysql_query($sql)) {
return true;
} else {
return false;
}
}</p>
<p>?>
[/code]</p>
<p>Com essa função você pode registrar qualquer tipo de evento no seu MySQL e depois, organizando-os por data e/ou IP saber exatamente o que aconteceu no seu sistema, vindo de onde, e como aconteceu.</p>
<p>Para usar a função e salvar uma mensagem de LOG, é só fazer assim:</p>
<p>[code='php']
<?php</p>
<p>$mensagem= "Nova visita no site";
salvaLog($mensagem);</p>
<p>?>
[/code]</p>
<p>Vale lembrar que o script acima só vai funcionar se você abrir uma conexão com o MySQL e o banco de dados antes de tentar salvar uma mensagem de LOG.</p>
<p>A função criada também retorna true ou false (verdadeiro ou falso) para caso você precise fazer uma verificação se o LOG foi salvo com sucesso:</p>
<p>[code='php']
<?php</p>
<p>$mensagem = "Nova visita no site";
if (salvaLog($mensagem)) {
echo "O LOG foi salvo com sucesso!";
} else {
echo "Não foi possível salvar o LOG!";
}</p>
<p>?>
[/code]</p>
<p>Sugiro que salvem LOGs - principalmente - de todas as tentativas de login. Salve LOGs também das alterações, cadastros e deleções de registros do sistema (produtos/categorias/lojas/notícias e etc.). Isso vai tornar a sua aplicação mais segura e quando algo der errado você vai poder encontrar "o pai da criança" com mais facilidade.</p>
<p>Se você já tiver feito um sistema de login no seu site (se não, <a href="/criando-um-sistema-de-login-com-php-e-mysql" target="_blank">veja aqui como fazer um</a>), salve também o usuário atual, como por exemplo:</p>
<p style="text-align: center;"><span style="color: #000000;">"<strong>[ Usuário: Fulano ] Cadastrou uma notícia</strong>"</span></p>
<p>Com isso, você tem o nome do usuário usado, o IP e a data e hora de onde/quando/como foi executada a ação de cadastro. Muito útil, não?</p>
<p>Até a próxima!</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função <a href="http://br2.php.net/manual/en/function.date.php" target="_blank">date()</a></strong> » Função para formatar datas</li>
<li><strong>Função <a href="http://br.php.net/mysql_escape_string" target="_blank">mysql_escape_string()</a></strong> » Prepara uma string para o MySQL</li>
<li><strong>Função <a href="http://br.php.net/mysql_query" target="_blank">mysql_query()</a></strong> » Executa uma query (consulta SQL)</li>
</ul>
