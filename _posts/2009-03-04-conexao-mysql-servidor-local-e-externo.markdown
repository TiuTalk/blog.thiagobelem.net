---
layout: post
status: publish
published: true
title: Conexão MySQL – Servidor Local e Externo
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 199
wordpress_url: http://blog.thiagobelem.net/?p=199
date: '2009-03-04 10:28:01 -0300'
date_gmt: '2009-03-04 13:28:01 -0300'
categories:
- MySQL
- Artigos
tags: []
---
<p>Fala pessoal,</p>
<p>Um probleminha muito comum que me atrapalhava quando eu não usava frameworks é ficar configurando o arquivo de conexão do MySQL pra servidor local e externo... Ao longo dos anos vim criando métodos mais eficazes e esse aqui eu criei hoje.</p>
<p>Esse script tem uma vantagem enorme: ele decide qual configuração de conexão usar em função do domínio que está sendo utilizado pra acessar o site!</p>
<p>Por exemplo: Se você estiver acessando o site pelo 127.0.0.1 ele usa a configuração de conexão local, se estiver acessando por um domínio escolhido, thiagobelem.net por exemplo, ele usa outra configuração... Não tem limite de configurações, você pode definir quantas quiser.</p>
<p>Vamos ao script:</p>
<p>[code='php']<br />
/**<br />
*  Arquivo de conexão ao MySQL usando servidor local e externo<br />
*/<br />
$n = -1;</p>
<p>// Define os servidores e configurações de cada conexão</p>
<p>$n++;<br />
$MySQL[$n]['dominios']  = array('127.0.0.1', 'localhost'); // Possíveis dominios<br />
$MySQL[$n]['servidor']  = '127.0.0.1'; // Servidor MySQL<br />
$MySQL[$n]['usuario']   = 'root'; // Usuário MySQL<br />
$MySQL[$n]['senha']     = ''; // Senha MySQL<br />
$MySQL[$n]['banco']     = 'meu_banco'; // Banco de dados<br />
$MySQL[$n]['persis']    = false; // Conexão persistente?</p>
<p>$n++;<br />
$MySQL[$n]['dominios']  = array('thiagobelem.net', 'thiagobelem.com.br');<br />
$MySQL[$n]['servidor']  = '127.0.0.1'; // Servidor MySQL<br />
$MySQL[$n]['usuario']   = 'meu_usuario'; // Usuário MySQL<br />
$MySQL[$n]['senha']     = 'minha_senha'; // Senha MySQL<br />
$MySQL[$n]['banco']     = 'meu_banco'; // Banco de dados<br />
$MySQL[$n]['persis']    = false; // Conexão persistente?</p>
<p>// Decide qual conexão usar<br />
foreach ($MySQL as $key=>$servidor) {<br />
    if (!isset($_SERVER['HTTP_HOST'])) {<br />
        $usar = $key;<br />
        break;<br />
    } else {<br />
        $encontrado = false;<br />
        foreach ($servidor['dominios'] as $dominio) {<br />
            if (strpos($_SERVER['HTTP_HOST'], $dominio) !== false) {<br />
              $usar = $key;<br />
              $encontrado = true;<br />
              break;<br />
            }<br />
        }<br />
        if ($encontrado)<br />
            break;<br />
    }<br />
}</p>
<p>// Decide o tipo de conexão<br />
$MySQL['conexao'] = ($MySQL[$usar]['persis']) ? 'mysql_pconnect' : 'mysql_connect';</p>
<p>// Conecta-se ao servidor usando o tipo de conexão definido<br />
$MySQL['link'] = $MySQL['conexao']($MySQL[$usar]['servidor'], $MySQL[$usar]['usuario'], $MySQL[$usar]['senha']) or die("Não foi possível se conectar ao servidor MySQL no endereço [".$MySQL[$usar]['servidor']."]");</p>
<p>// Conecta-se ao banco de dados<br />
mysql_select_db($MySQL[$usar]['banco'], $MySQL['link']) or die("Não foi possível conectar-se ao banco de dados [".$MySQL[$usar]['banco']."] no servidor [".$MySQL[$usar]['servidor']."]");<br />
[/code]</p>
<p>Pra criar mais uma configuração de conexão é só duplicar esse bloco:</p>
<p>[code='php']<br />
$n++;<br />
$MySQL[$n]['dominios']  = array('thiagobelem.net', 'thiagobelem.com.br');<br />
$MySQL[$n]['servidor']  = '127.0.0.1'; // Servidor MySQL<br />
$MySQL[$n]['usuario']   = 'meu_usuario'; // Usuário MySQL<br />
$MySQL[$n]['senha']     = 'minha_senha'; // Senha MySQL<br />
$MySQL[$n]['banco']     = 'meu_banco'; // Banco de dados<br />
$MySQL[$n]['persis']    = false; // Conexão persistente?<br />
[/code]</p>
<p>Gostaram? Ele tá todo comentado.. Qualquer dúvida é só comentar! =)</p>
<p>Abraços</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong><a href="http://www.php.net/manual/pt_BR/function.array.php" target="_blank">Arrays</a></strong> » Cria um array (matriz com vários elementos)</li>
<li><strong>Função <a href="http://us3.php.net/strpos" target="_blank">strpos()</a></strong> » Encontra a primeira ocorrencia de uma string em outra string</li>
<li><strong>Função <a href="http://us3.php.net/mysql_connect" target="_blank">mysql_connect()</a></strong> » Abre uma conexão com o servidor MySQL</li>
<li><strong>Função <a href="http://us.php.net/mysql_pconnect" target="_blank">mysql_pconnect()</a></strong> » Abre uma conexão <strong>persistente</strong> com o servidor MySQL</li>
<li><strong>Função <a href="http://us.php.net/mysql_select_db" target="_blank">mysql_select_db()</a></strong> » Conecta-se a um banco de dados disponível no servidor MySQL</li>
</ul>
