---
layout: post
title: Contador de visitas usando o MySQL

date: '2009-03-08 05:14:22 -0300'
categories:
- MySQL
- Tutoriais
tags: []
---
Hoje vou mostrar pra vocês como funciona um contador de visitas bem simples usando MySQL.

Esse contador salva no banco de dados as visitas únicas (<em>uniques</em>) e as visualizações de páginas (<em>pageviews</em>) de cada dia. No script também vem uma função que você pode usar para pegar os totais de cada tipo de visitas filtrando por períodos!

Antes de tudo, rode esse código SQL no banco de dados do seu site para criar a tabela que o sistema usa:


{% highlight sql linenos %}
DROP TABLE IF EXISTS `visitas`;
CREATE TABLE IF NOT EXISTS `visitas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `data` date NOT NULL,
  `uniques` int(10) unsigned NOT NULL DEFAULT '0',
  `pageviews` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `data` (`data`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
{% endhighlight %}

Agora copie o código desse script PHP e salve-o como <strong>contadorVisitas.php</strong> em algum diretório do seu site:


{% highlight php linenos %}
/**
 * Sistema de contador de visitas
 *
 * Usado para fazer a contagem de visitas únicas e pageviews diários do site
 *
 * Método de utilização:
 *  Apenas inclua este arquivo no começo do seu site.
 *
 * @author Thiago Belem <contato@thiagobelem.net>
 * @link http://thiagobelem.net/
 *
 * @version 1.0
 * @package ContadorVisitas
 */

 //  Configurações do Script
 // ==============================
 $_CV['registraAuto'] = true;       // Registra as visitas automaticamente?

 $_CV['conectaMySQL'] = true;       // Abre uma conexão com o servidor MySQL?
 $_CV['iniciaSessao'] = true;       // Inicia a sessão com um session_start()?

 $_CV['servidor'] = 'localhost';    // Servidor MySQL
 $_CV['usuario'] = 'root';          // Usuário MySQL
 $_CV['senha'] = '';                // Senha MySQL
 $_CV['banco'] = 'test';            // Banco de dados MySQL

 $_CV['tabela'] = 'visitas';        // Nome da tabela onde os dados são salvos
 // ==============================

 // ======================================
 //   ~ Não edite a partir deste ponto ~
 // ======================================

 // Verifica se precisa fazer a conexão com o MySQL
 if ($_CV['conectaMySQL'] == true) {
    $_CV['link'] = mysql_connect($_CV['servidor'], $_CV['usuario'], $_CV['senha']) or die("MySQL: Não foi possível conectar-se ao servidor [".$_CV['servidor']."].");
    mysql_select_db($_CV['banco'], $_CV['link']) or die("MySQL: Não foi possível conectar-se ao banco de dados [".$_CV['banco']."].");
 }

 // Verifica se precisa iniciar a sessão
 if ($_CV['iniciaSessao'] == true) {
    session_start();
 }

/**
 * Registra uma visita e/ou pageview para o visitante
 */
 function registraVisita() {
    global $_CV;

    $sql = "SELECT COUNT(*) FROM `".$_CV['tabela']."` WHERE `data` = CURDATE()";
    $query = mysql_query($sql);
    $resultado = mysql_fetch_row($query);

    // Verifica se é uma visita (do visitante)
    $nova = (!isset($_SESSION['ContadorVisitas'])) ? true : false;

    // Verifica se já existe registro para o dia
    if ($resultado[0] == 0) {
        $sql = "INSERT INTO `".$_CV['tabela']."` VALUES (NULL, CURDATE(), 1, 1)";
    } else {
        if ($nova == true) {
            $sql = "UPDATE `".$_CV['tabela']."` SET `uniques` = (`uniques` + 1), `pageviews` = (`pageviews` + 1) WHERE `data` = CURDATE()";
        } else {
            $sql = "UPDATE `".$_CV['tabela']."` SET `pageviews` = (`pageviews` + 1) WHERE `data` = CURDATE()";
        }
    }
    // Registra a visita
    mysql_query($sql);

    // Cria uma variavel na sessão
    $_SESSION['ContadorVisitas'] = md5(time());
 }

/**
 * Função que retorna o total de visitas
 *
 * @param string $tipo - O tipo de visitas a se pegar: (uniques|pageviews)
 * @param string $periodo - O período das visitas: (hoje|mes|ano)
 *
 * @return int - Total de visitas do tipo no período
 */
 function pegaVisitas($tipo = 'uniques', $periodo = 'hoje') {
    global $_CV;

    switch($tipo) {
        default:
        case 'uniques':
            $campo = 'uniques';
            break;
        case 'pageviews':
            $campo = 'pageviews';
            break;
    }

    switch($periodo) {
        default:
        case 'hoje':
            $busca = "`data` = CURDATE()";
            break;
        case 'mes':
            $busca = "`data` BETWEEN DATE_FORMAT(CURDATE(), '%Y-%m-01') AND LAST_DAY(CURDATE())";
            break;
        case 'ano':
            $busca = "`data` BETWEEN DATE_FORMAT(CURDATE(), '%Y-01-01') AND DATE_FORMAT(CURDATE(), '%Y-12-31')";
            break;
    }

    // Faz a consulta no MySQL em função dos argumentos
    $sql = "SELECT SUM(`".$campo."`) FROM `".$_CV['tabela']."` WHERE ".$busca;
    $query = mysql_query($sql);
    $resultado = mysql_fetch_row($query);

    // Retorna o valor encontrado ou zero
    return (!empty($resultado)) ? (int)$resultado[0] : 0;
 }

 if ($_CV['registraAuto'] == true) { registraVisita(); }
{% endhighlight %}

Pronto, você já tem a tabela no banco e o script dentro do site, agora é só abrir o script e configurar a conexão do MySQL e/ou desativá-la se necessário. Todas as opções estão com comentários explicativos... Depois disso é só incluir o script no topo do seu site (antes de tudo) que ele já vai começar a contar as visitas pra você.

Quando você quiser pegar o total de visitas é só usar um desses exemplos:


{% highlight php linenos %}
    // Pega o total de visitas únicas de hoje
    $total = pegaVisitas();

    // Pega o total de visitas únicas desde o começo do mês
    $total = pegaVisitas('uniques', 'mes');

    // Pega o total de visitas únicas desde o começo do ano
    $total = pegaVisitas('uniques', 'ano');

    // Pega o total de pageviews de hoje
    $total = pegaVisitas('pageviews');

    // Pega o total de pageviews desde o começo do mês
    $total = pegaVisitas('pageviews', 'mes');

    // Pega o total de pageviews desde o começo do ano
    $total = pegaVisitas('pageviews', 'ano');
{% endhighlight %}

Espero que tenham gostado!

:)

