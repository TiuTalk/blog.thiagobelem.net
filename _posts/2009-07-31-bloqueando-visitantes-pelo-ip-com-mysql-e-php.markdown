---
layout: post
title: Bloqueando visitantes pelo IP com MySQL e PHP
excerpt: Aumente a proteção do seu sistema criando um script que poderá ser usado
  para banir e bloquear visitantes em função de seus IPs e tenta mais controle sobre
  quando e quem tem acesso ao seu sistema.

date: '2009-07-31 20:40:43 -0300'
categories:
- PHP
- MySQL
- Tutoriais
- Segurança
tags:
- PHP
- Segurança
- MySQL
- IP
---
Essa semana vou falar um pouquinho sobre cada técnica de segurança que falei no "[Criando Sistemas Seguros - Parte 1](/criando-sistemas-seguros-parte-1)" e hoje é a vez do "<strong>Banindo IPs por um bem maior</strong>"... Vamos lá:

Banir um visitante de vez, baseando-se no IP dele é, sem dúvida, uma das formas mais simples e eficazes (a curto prazo) de evitar que alguém fique brincando com o seu sistema... Claro que o visitante pode mudar o seu IP sem muito esforço, mas em 99% dos casos isso exigiria pelo menos 1 ou 2 minutos dele... E dependendo da rede e dos conhecimentos dele isso pode não ser possível...

Para salvar a lista de IPs banidos usaremos uma tabela no MySQL que pode ser criada com o seguinte código:


{% highlight sql linenos %}
CREATE TABLE `banidos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `ip` VARCHAR( 15 ) NOT NULL ,
  `inicio` DATETIME NOT NULL ,
  `fim` DATETIME NOT NULL ,
  INDEX ( `ip` )
) ENGINE = MYISAM
{% endhighlight %}

Já a parte em PHP do sistema vai funcionar da seguinte maneira... Quando o visitante tentar acessar o seu site é incluído um arquivo que busca no MySQL se esse IP está na lista de banidos, caso esteja o visitante é redirecionado para outro site/endereço.

Não vou falar como fazer uma conexão ao MySQL porque isso já foi dito N vezes aqui no blog e ocupa um espaço desnecessário na aula. ;)

Antes de verificar se um visitante está "banido" precisamos limpar da tabela os registros que já expiraram... Esse passo é opcional pois quando formos verificar se um usuário está banido vamos verificar também se o período é valido... Vamos lá:


{% highlight php linenos %}
<?php

// Inclui o arquivo que faz a conexão com o banco de dados
require_once('mysql.php');

// IP do visitante para uso futuro
$ip_visitante = $_SERVER['REMOTE_ADDR'];

// Deleta os registros que já expiraram, esse passo é opcional!
$sql = "DELETE FROM `banidos` WHERE ( `fim` <= NOW() )";
mysql_query($sql);

?>
{% endhighlight %}

Agora nós vamos verificar se o IP do visitante consta na lista dos que ainda estão banidos:


{% highlight php linenos %}
<?php

// Inclui o arquivo que faz a conexão com o banco de dados
require_once('mysql.php');

// IP do visitante para uso futuro
$ip_visitante = $_SERVER['REMOTE_ADDR'];

// Deleta os registros que já expiraram, esse passo é opcional!
$sql = "DELETE FROM `banidos` WHERE ( `fim` <= NOW() )";
mysql_query($sql);

// Verifica se o visitante está banido
$sql = "SELECT * FROM `banidos` WHERE ( `ip` = '". $ip_visitante ."' ) AND ( NOW() BETWEEN `inicio` AND `fim` )";
$query = mysql_query($sql);
if (mysql_num_rows($query) > 0) {
  // Pelo menos um resultado foi encontrado, o usuário está banido
}

?>
{% endhighlight %}

Agora é só redirecionar o visitante para outra página/endereço:


{% highlight php linenos %}
// Verifica se o visitante está banido
$sql = "SELECT * FROM `banidos` WHERE ( `ip` = '". $ip_visitante ."' ) AND ( NOW() BETWEEN `inicio` AND `fim` )";
$query = mysql_query($sql);
if (mysql_num_rows($query) > 0) {
  // Redireciona o visitante
  header("Location: http://www.pudim.com.br/");
  exit;
}
{% endhighlight %}

--

Agora nós vamos criar uma funçãozinha que você vai usar para banir o visitante durante X minutos... Vamos lá:


{% highlight php linenos %}
function banirVisitante($minutos, $ip = null) {
  // Define o IP que será banido
  $ip = (is_null($ip)) ? $_SERVER['REMOTE_ADDR'] : $ip;

  // Verifica se o usuário já está banido
  $sql = "SELECT * FROM `banidos` WHERE ( `ip` = '". $ip ."' ) AND ( NOW() BETWEEN `inicio` AND `fim` )";
  $query = mysql_query($sql);
  if (mysql_num_rows($query) > 0) {
    // Cria uma consulta que atualizará o registro do visitante
    $sql = "UPDATE `banidos` SET `fim` = DATE_ADD(NOW(), INTERVAL ".$minutos." MINUTE) WHERE  ( `ip` = '". $ip ."' ) AND ( NOW() BETWEEN `inicio` AND `fim` )";
  } else {
    // Cria uma consulta que insere o registro na tabela
    $sql = "INSERT INTO `banidos` VALUES ( NULL, '". $ip ."', NOW(), DATE_ADD(NOW(), INTERVAL ".$minutos." MINUTE) )";
  }
  // Executa a consulta criada dentro do IF/ELSE
  mysql_query($sql);

  // Redireciona o visitante
  if ($_SERVER['REMOTE_ADDR'] == $ip) {
    header("Location: http://www.pudim.com.br/");
    exit;
  }
}
{% endhighlight %}

Aí quando você quiser banir um visitante, seja qual for o motivo, é só usar a função criada:
{% highlight php linenos %}
// Banir visitante por 10 minutos
banirVisitante(10);

// Banir um IP específico por 3 dias
banirVisitante(60 * 24 * 3, '114.154.95.24');  {% endhighlight %}

--

Espero que tenham gostado! :)

