---
layout: post
title: Instalando o PHPIDS no seu site
excerpt: O PHPIDS ajuda a proteger o seu site de ataques como XSS, SQL Injection,
  RFE/LFI, DoS entre outros... Aprenda a instalar essa maravilhosa ferramenta que
  ajudará (e muito) na segurança do seu site/sistema.

date: '2009-06-01 20:54:49 -0300'
categories:
- PHP
- Tutoriais
- Segurança
tags: []
---
<p>Algum tempo atrás falei aqui sobre o <a href="http://phpids.org/" target="_blank">PHPIDS</a>, que é uma classe/sistema muito bom para a segurança do site. A sua função se resume em vasculhar todas as possíveis entradas de informações do site ($_POST, $_GET, $_COOKIE e etc.) em busca de algo que possa ser uma tentativa de ataque e/ou invasão. Ele foi criado para a proteção de sites que usam e abusam das "funcionalidades" da WEB 2.0.</p>
<p>Se alguém inserir, por exemplo, um código SQL para tentar um SQL Injection no seu site, o PHPIDS vai pegar, vai avisar (ou não) sobre a tentativa de ataque, vai evitar o estrago e ainda te avisa (ou não) por e-mail. No total ele te protege dos seguintes tipos de ataque: <strong>XSS</strong>, <strong>SQL Injection</strong>, <strong>header injection</strong>, <strong>directory traversal</strong>, <strong>RFE/LFI</strong>, <strong>DoS</strong> e <strong>LDAP</strong>.</p>
<p>Para instalar ele no seu site é bem fácil:</p>
<p>1 - Faça o download dele no <a href="http://phpids.org/downloads/" target="_blank">site oficial</a>.</p>
<p>2 - Descompacte a pasta <strong>../libs/IDS</strong> na raiz (<em>root</em>) seu site (mantendo a pasta IDS).</p>
<p>3 - Insira o seguinte bloco de código no começo do seu site:</p>
<p>[code language="php"]// Inclui o arquivo do PHPIDS<br />
require_once 'IDS/Init.php';<br />
$request = array(<br />
'REQUEST' =&amp;amp;gt; $_REQUEST,<br />
'GET' =&amp;amp;gt; $_GET,<br />
'POST' =&amp;amp;gt; $_POST,<br />
'COOKIE' =&amp;amp;gt; $_COOKIE<br />
);<br />
// Inicia o PHPIDS<br />
$init = IDS_Init::init('IDS/Config/Config.ini');<br />
$ids = new IDS_Monitor($request, $init);<br />
$result = $ids-&amp;amp;gt;run();</p>
<p>if (!$result-&amp;amp;gt;isEmpty()) {<br />
// Exibe resultados caso sejam encontrados<br />
echo $result;<br />
}[/code]</p>
<p>Com isso ele já vai passar a funcionar... Vale lembrar que esse exemplo apenas avisa (mostra) que algo foi encontrado e bloqueia... Você vai  precisar adaptá-lo as suas necessidades.</p>
<p>Para configurar suas funções e usá-lo da melhor forma, recomendo que você dê uma olhada no arquivo Config.ini e/ou veja a <span class="removed_link" title="http://php-ids.org/faq/">página de FAQs</span>.</p>
<p>Espero que tenham gostado! :)</p>
