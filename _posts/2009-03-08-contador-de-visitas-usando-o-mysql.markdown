---
layout: post
status: publish
published: true
title: Contador de visitas usando o MySQL
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 310
wordpress_url: http://blog.thiagobelem.net/?p=310
date: '2009-03-08 05:14:22 -0300'
date_gmt: '2009-03-08 08:14:22 -0300'
categories:
- MySQL
- Tutoriais
tags: []
---
<p>Hoje vou mostrar pra vocês como funciona um contador de visitas bem simples usando MySQL.</p>
<p>Esse contador salva no banco de dados as visitas únicas (<em>uniques</em>) e as visualizações de páginas (<em>pageviews</em>) de cada dia. No script também vem uma função que você pode usar para pegar os totais de cada tipo de visitas filtrando por períodos!</p>
<p>Antes de tudo, rode esse código SQL no banco de dados do seu site para criar a tabela que o sistema usa:</p>
<p>[code='sql']<br />
DROP TABLE IF EXISTS `visitas`;<br />
CREATE TABLE IF NOT EXISTS `visitas` (<br />
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,<br />
  `data` date NOT NULL,<br />
  `uniques` int(10) unsigned NOT NULL DEFAULT '0',<br />
  `pageviews` int(10) unsigned NOT NULL DEFAULT '0',<br />
  PRIMARY KEY (`id`),<br />
  UNIQUE KEY `data` (`data`)<br />
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;<br />
[/code]</p>
<p>Agora copie o código desse script PHP e salve-o como <strong>contadorVisitas.php</strong> em algum diretório do seu site:</p>
<p>[code='php']<br />
/**<br />
 * Sistema de contador de visitas<br />
 *<br />
 * Usado para fazer a contagem de visitas únicas e pageviews diários do site<br />
 *<br />
 * Método de utilização:<br />
 *  Apenas inclua este arquivo no começo do seu site.<br />
 *<br />
 * @author Thiago Belem <contato@thiagobelem.net><br />
 * @link http://thiagobelem.net/<br />
 *<br />
 * @version 1.0<br />
 * @package ContadorVisitas<br />
 */</p>
<p> //  Configurações do Script<br />
 // ==============================<br />
 $_CV['registraAuto'] = true;       // Registra as visitas automaticamente?</p>
<p> $_CV['conectaMySQL'] = true;       // Abre uma conexão com o servidor MySQL?<br />
 $_CV['iniciaSessao'] = true;       // Inicia a sessão com um session_start()?</p>
<p> $_CV['servidor'] = 'localhost';    // Servidor MySQL<br />
 $_CV['usuario'] = 'root';          // Usuário MySQL<br />
 $_CV['senha'] = '';                // Senha MySQL<br />
 $_CV['banco'] = 'test';            // Banco de dados MySQL</p>
<p> $_CV['tabela'] = 'visitas';        // Nome da tabela onde os dados são salvos<br />
 // ==============================</p>
<p> // ======================================<br />
 //   ~ Não edite a partir deste ponto ~<br />
 // ======================================</p>
<p> // Verifica se precisa fazer a conexão com o MySQL<br />
 if ($_CV['conectaMySQL'] == true) {<br />
    $_CV['link'] = mysql_connect($_CV['servidor'], $_CV['usuario'], $_CV['senha']) or die("MySQL: Não foi possível conectar-se ao servidor [".$_CV['servidor']."].");<br />
    mysql_select_db($_CV['banco'], $_CV['link']) or die("MySQL: Não foi possível conectar-se ao banco de dados [".$_CV['banco']."].");<br />
 }</p>
<p> // Verifica se precisa iniciar a sessão<br />
 if ($_CV['iniciaSessao'] == true) {<br />
    session_start();<br />
 }</p>
<p>/**<br />
 * Registra uma visita e/ou pageview para o visitante<br />
 */<br />
 function registraVisita() {<br />
    global $_CV;</p>
<p>    $sql = "SELECT COUNT(*) FROM `".$_CV['tabela']."` WHERE `data` = CURDATE()";<br />
    $query = mysql_query($sql);<br />
    $resultado = mysql_fetch_row($query);</p>
<p>    // Verifica se é uma visita (do visitante)<br />
    $nova = (!isset($_SESSION['ContadorVisitas'])) ? true : false;</p>
<p>    // Verifica se já existe registro para o dia<br />
    if ($resultado[0] == 0) {<br />
        $sql = "INSERT INTO `".$_CV['tabela']."` VALUES (NULL, CURDATE(), 1, 1)";<br />
    } else {<br />
        if ($nova == true) {<br />
            $sql = "UPDATE `".$_CV['tabela']."` SET `uniques` = (`uniques` + 1), `pageviews` = (`pageviews` + 1) WHERE `data` = CURDATE()";<br />
        } else {<br />
            $sql = "UPDATE `".$_CV['tabela']."` SET `pageviews` = (`pageviews` + 1) WHERE `data` = CURDATE()";<br />
        }<br />
    }<br />
    // Registra a visita<br />
    mysql_query($sql);</p>
<p>    // Cria uma variavel na sessão<br />
    $_SESSION['ContadorVisitas'] = md5(time());<br />
 }</p>
<p>/**<br />
 * Função que retorna o total de visitas<br />
 *<br />
 * @param string $tipo - O tipo de visitas a se pegar: (uniques|pageviews)<br />
 * @param string $periodo - O período das visitas: (hoje|mes|ano)<br />
 *<br />
 * @return int - Total de visitas do tipo no período<br />
 */<br />
 function pegaVisitas($tipo = 'uniques', $periodo = 'hoje') {<br />
    global $_CV;</p>
<p>    switch($tipo) {<br />
        default:<br />
        case 'uniques':<br />
            $campo = 'uniques';<br />
            break;<br />
        case 'pageviews':<br />
            $campo = 'pageviews';<br />
            break;<br />
    }</p>
<p>    switch($periodo) {<br />
        default:<br />
        case 'hoje':<br />
            $busca = "`data` = CURDATE()";<br />
            break;<br />
        case 'mes':<br />
            $busca = "`data` BETWEEN DATE_FORMAT(CURDATE(), '%Y-%m-01') AND LAST_DAY(CURDATE())";<br />
            break;<br />
        case 'ano':<br />
            $busca = "`data` BETWEEN DATE_FORMAT(CURDATE(), '%Y-01-01') AND DATE_FORMAT(CURDATE(), '%Y-12-31')";<br />
            break;<br />
    }</p>
<p>    // Faz a consulta no MySQL em função dos argumentos<br />
    $sql = "SELECT SUM(`".$campo."`) FROM `".$_CV['tabela']."` WHERE ".$busca;<br />
    $query = mysql_query($sql);<br />
    $resultado = mysql_fetch_row($query);</p>
<p>    // Retorna o valor encontrado ou zero<br />
    return (!empty($resultado)) ? (int)$resultado[0] : 0;<br />
 }</p>
<p> if ($_CV['registraAuto'] == true) { registraVisita(); }<br />
[/code]</p>
<p>Pronto, você já tem a tabela no banco e o script dentro do site, agora é só abrir o script e configurar a conexão do MySQL e/ou desativá-la se necessário. Todas as opções estão com comentários explicativos... Depois disso é só incluir o script no topo do seu site (antes de tudo) que ele já vai começar a contar as visitas pra você.</p>
<p>Quando você quiser pegar o total de visitas é só usar um desses exemplos:</p>
<p>[code='php']<br />
    // Pega o total de visitas únicas de hoje<br />
    $total = pegaVisitas();</p>
<p>    // Pega o total de visitas únicas desde o começo do mês<br />
    $total = pegaVisitas('uniques', 'mes');</p>
<p>    // Pega o total de visitas únicas desde o começo do ano<br />
    $total = pegaVisitas('uniques', 'ano');</p>
<p>    // Pega o total de pageviews de hoje<br />
    $total = pegaVisitas('pageviews');</p>
<p>    // Pega o total de pageviews desde o começo do mês<br />
    $total = pegaVisitas('pageviews', 'mes');</p>
<p>    // Pega o total de pageviews desde o começo do ano<br />
    $total = pegaVisitas('pageviews', 'ano');<br />
[/code]</p>
<p>Espero que tenham gostado!</p>
<p>:)</p>
