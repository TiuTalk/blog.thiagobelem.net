---
layout: post
title: Contador de visitantes online em PHP e MySQL

date: '2009-04-19 03:37:04 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags: []
---
Hoje vou ensinar vocês a criarem um pequeno sistema de contador dos visitantes que estão online no seu site.

Tudo se resume a criar uma entrada única no banco para cada visitante e apagá-la depois de 20 minutos de inatividade (nenhum carregamento de página). Também criaremos uma função para você inserir onde quiser exibir o número de visitantes que apareceram no seu site nesses ultimos 20 minutos e outra função para informar os recordes de visitas. Vamos ao que interessa:

Primeiro, criamos as tabelas no MySQL para armazenamento dos dados, são duas tabelas: uma para os visitantes onlines e outra para registro dos recordes... Veja os códigos:


{% highlight text linenos %}
CREATE TABLE IF NOT EXISTS `visitas_online` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(15) NOT NULL,
  `identificador` varchar(40) NOT NULL,
  `hora` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `identificador` (`identificador`)
) ENGINE=MyISAM ;

CREATE TABLE IF NOT EXISTS `visitas_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` datetime NOT NULL,
  `visitantes` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM ;
{% endhighlight %}

Depois criamos um arquivo chamado <span style="color: #ff6600;"><strong>visitantes-online.php</strong></span> com o seguinte conteúdo:


{% highlight text linenos %}
<?php
/**
* Sistema de contador de visitantes online
*
* @author Thiago Belem <contato@thiagobelem.net>
* @link http://thiagobelem.net/
*
* @version 1.0
* @package VisitantesOnline
*/

//  Configurações do Script
// ==============================
$_VO['registraAuto'] = true;       // Registra os visitantes automaticamente?
$_VO['conectaMySQL'] = true;       // Abre uma conexão com o servidor MySQL?

$_VO['cookieTempo'] = 20;          // Quantos minutos a visita dura
$_VO['cookieNome'] = 'VisOnline';  // Nome do cookie usado para identificar o visitante

$_VO['servidor'] = 'localhost';    // Servidor MySQL
$_VO['usuario'] = 'root';          // Usuário MySQL
$_VO['senha'] = '';                // Senha MySQL
$_VO['banco'] = 'test';            // Banco de dados MySQL

$_VO['tabela_v'] = 'visitas_online'; // Tabela onde os visitantes online serão salvos
$_VO['tabela_r'] = 'visitas_record'; // Tabela onde os recordes de visitas serão salvos
// ==============================

// ======================================
//   ~ Não edite a partir deste ponto ~
// ======================================

// Verifica se precisa fazer a conexão com o MySQL
if ($_VO['conectaMySQL'] == true) {
  $_VO['link'] = mysql_connect($_VO['servidor'], $_VO['usuario'], $_VO['senha']) or die("MySQL: Não foi possível conectar-se ao servidor [".$_VO['servidor']."].");
  mysql_select_db($_VO['banco'], $_VO['link']) or die("MySQL: Não foi possível conectar-se ao banco de dados [".$_VO['banco']."].");
}

/**
* Gera o identificador do visitante baseado no IP e na hora
*/
function geraIdentificador() {
  global $_VO;

  return sha1($_VO['cookieNome'].$_SERVER["REMOTE_ADDR"].microtime());
}

/**
* Registra uma visita e/ou pageview para o visitante
*  Esta funçaõ será chamada automaticamente dependendo de $_VO['registraAuto']
*/
function registraVisita() {
  global $_VO;

  // Verifica se os headers já foram enviados. Caso tenham, é gerada uma mensagem de erro
  if (headers_sent()) {
    trigger_error("[VisitantesOnline] Por favor, insira o arquivo antes de qualquer HTML", E_USER_ERROR);
    return false;
  }

  // Verifica se é um visitante que já está no site (se o Cookie existe)
  if (isset($_COOKIE[$_VO['cookieNome']])) {
    $novo = false;
    $identificador = $_COOKIE[$_VO['cookieNome']];
  } else {
    $novo = true;
    $identificador = geraIdentificador();
  }

  // Se o visitante não é novo, tenta atualizar o registro dele na tabela
  if (!$novo) {
    $query = "UPDATE `".$_VO['tabela_v']."` SET `hora` = NOW() WHERE `identificador` = '".$identificador."' LIMIT 1";
    $resultado = mysql_query($query);
    $atualizado = (bool)(mysql_affected_rows($resultado) == 1);
  }

  // Se o visitante é novo OU se o registro dele ele não foi atualizado, insere um novo registro na tabela
  if ($novo OR !$atualizado) {
    $query = "INSERT INTO `".$_VO['tabela_v']."` VALUES (NULL, '".$_SERVER["REMOTE_ADDR"]."', '".$identificador."', NOW())";
    mysql_query($query);
  }

  // Deleta todos os visitantes com mais de 20min no site, exceto o atual
  $query = "DELETE FROM `".$_VO['tabela_v']."` WHERE (`hora` <= (NOW() - INTERVAL ".$_VO['cookieTempo']." MINUTE)) AND `identificador` != '".$identificador."'";
  mysql_query($query);

  // Verifica se é preciso atualizar o recorde de visitas
  $recorde = visitantesRecorde(); // Pega o recorde de visitantes
  $online = visitantesOnline(); // Pega o n° de visitantes atual
  if ($recorde[1] < $online) {
    $query = "REPLACE INTO `".$_VO['tabela_r']."` SET `data` = NOW(), `visitantes` = ".$online;
    mysql_query($query);
  }

  // Atualiza o cookie com o identificador do visitante
  setcookie($_VO['cookieNome'], $identificador, time() + ($_VO['cookieTempo'] * 60), '');
  return true;
}

/**
* Função que retorna o total de visitantes online
*/
function visitantesOnline() {
  global $_VO;

  // Faz a consulta no MySQL em função dos argumentos
  $sql = "SELECT COUNT(*) FROM `".$_VO['tabela_v']."`";
  $query = mysql_query($sql);
  $resultado = mysql_fetch_row($query);

  // Retorna o valor encontrado ou zero
  return (!empty($resultado)) ? (int)$resultado[0] : 0;
}

/**
* Função que retorna a data e o recorde de visitantes online
*/
function visitantesRecorde($formato = 'd/m/Y') {
  global $_VO;

  // Faz a consulta no MySQL em função dos argumentos
  $sql = "SELECT `data`, `visitantes` FROM `".$_VO['tabela_r']."` LIMIT 1";
  $query = mysql_query($sql);
  $resultado = mysql_fetch_row($query);

  // Retorna o valor encontrado ou zero
  return (!empty($resultado)) ? array(date($formato, strtotime($resultado[1])), (int)$resultado[1]) : array(date($formato), 0);
}

if ($_VO['registraAuto'] == true) { registraVisita(); }
?>
{% endhighlight %}

Você só precisa inserir esse arquivo no <span style="text-decoration: underline;">começo</span> do seu site, antes de enviar qualquer HTML para o visitante. Veja a baixo as funções que você irá usar para contabilizar os visitantes online e os recordes de visitas:

Nesse arquivo criamos quatro funções que vão fazer o seguinte:

<strong>geraIdentificador()</strong>

Esta função vai criar um identificador único, usada no sistema quando temos um visitante novo e ela gera uma seqüência de números e letras únicas para identificar o visitante que será salvo no banco de dados e via cookies.

Você não precisa chamá-la em lugar nenhum do seu site.

<strong>registraVisita()</strong>

Função que irá registrar o visitante no banco de dados, atualizando o registro dele, excluindo os visitantes antigos, atualizando os recordes de visitas e, por fim, definindo um cookie no computador do visitante com o identificador gerado anteriormente.

Você não precisa chamá-la em lugar nenhum do seu site pois ela já é chamada automaticamente quando você inclui o arquivo no site.

<strong>visitantesOnline()</strong>

Esta função vai te retornar um valor numérico inteiro contendo o número de visitantes online no seu site nos últimos 20 minutos.

Para usá-la, é só inserir um bloco de php onde você deseja que o número apareça, assim:


{% highlight text linenos %}
Visitantes online: <?php echo visitantesOnline(); ?>!
{% endhighlight %}

<strong>visitantesRecorde($formato)</strong>

Com essa função você vai receber um array, contendo dois elementos: primeiro a data do recorde, depois o recorde de visitas. Você pode, se quiser, formatar a data retornada (seguindo os parâmetros da função [date()](http://br2.php.net/manual/pt_BR/function.date.php)).

Para usá-la você precisará fazer da seguinte forma:


{% highlight text linenos %}
<?php $dados = visitantesRecorde(); ?>
O máximo de visitantes online foi em <?php echo $dados[0]; ?>, com <?php echo $dados[1]; ?> visitantes.

{% endhighlight %}

Se quiser formatar a data é só fazer, por exemplo, assim:
$dados = visitantesRecorde('d/m/Y H:i');

Espero que tenham gostado! E não se esqueçam de olhar a parte de configurações do script para um bom uso dele.

Abraços! :D

