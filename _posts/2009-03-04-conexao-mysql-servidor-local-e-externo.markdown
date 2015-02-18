---
layout: post
title: Conexão MySQL – Servidor Local e Externo

date: '2009-03-04 10:28:01 -0300'
categories:
- MySQL
- Artigos
tags: []
---
Fala pessoal,

Um probleminha muito comum que me atrapalhava quando eu não usava frameworks é ficar configurando o arquivo de conexão do MySQL pra servidor local e externo... Ao longo dos anos vim criando métodos mais eficazes e esse aqui eu criei hoje.

Esse script tem uma vantagem enorme: ele decide qual configuração de conexão usar em função do domínio que está sendo utilizado pra acessar o site!

Por exemplo: Se você estiver acessando o site pelo 127.0.0.1 ele usa a configuração de conexão local, se estiver acessando por um domínio escolhido, thiagobelem.net por exemplo, ele usa outra configuração... Não tem limite de configurações, você pode definir quantas quiser.

Vamos ao script:


{% highlight php linenos %}
/**
*  Arquivo de conexão ao MySQL usando servidor local e externo
*/
$n = -1;

// Define os servidores e configurações de cada conexão

$n++;
$MySQL[$n]['dominios']  = array('127.0.0.1', 'localhost'); // Possíveis dominios
$MySQL[$n]['servidor']  = '127.0.0.1'; // Servidor MySQL
$MySQL[$n]['usuario']   = 'root'; // Usuário MySQL
$MySQL[$n]['senha']     = ''; // Senha MySQL
$MySQL[$n]['banco']     = 'meu_banco'; // Banco de dados
$MySQL[$n]['persis']    = false; // Conexão persistente?

$n++;
$MySQL[$n]['dominios']  = array('thiagobelem.net', 'thiagobelem.com.br');
$MySQL[$n]['servidor']  = '127.0.0.1'; // Servidor MySQL
$MySQL[$n]['usuario']   = 'meu_usuario'; // Usuário MySQL
$MySQL[$n]['senha']     = 'minha_senha'; // Senha MySQL
$MySQL[$n]['banco']     = 'meu_banco'; // Banco de dados
$MySQL[$n]['persis']    = false; // Conexão persistente?

// Decide qual conexão usar
foreach ($MySQL as $key=>$servidor) {
    if (!isset($_SERVER['HTTP_HOST'])) {
        $usar = $key;
        break;
    } else {
        $encontrado = false;
        foreach ($servidor['dominios'] as $dominio) {
            if (strpos($_SERVER['HTTP_HOST'], $dominio) !== false) {
              $usar = $key;
              $encontrado = true;
              break;
            }
        }
        if ($encontrado)
            break;
    }
}

// Decide o tipo de conexão
$MySQL['conexao'] = ($MySQL[$usar]['persis']) ? 'mysql_pconnect' : 'mysql_connect';

// Conecta-se ao servidor usando o tipo de conexão definido
$MySQL['link'] = $MySQL['conexao']($MySQL[$usar]['servidor'], $MySQL[$usar]['usuario'], $MySQL[$usar]['senha']) or die("Não foi possível se conectar ao servidor MySQL no endereço [".$MySQL[$usar]['servidor']."]");

// Conecta-se ao banco de dados
mysql_select_db($MySQL[$usar]['banco'], $MySQL['link']) or die("Não foi possível conectar-se ao banco de dados [".$MySQL[$usar]['banco']."] no servidor [".$MySQL[$usar]['servidor']."]");
{% endhighlight %}

Pra criar mais uma configuração de conexão é só duplicar esse bloco:


{% highlight php linenos %}
$n++;
$MySQL[$n]['dominios']  = array('thiagobelem.net', 'thiagobelem.com.br');
$MySQL[$n]['servidor']  = '127.0.0.1'; // Servidor MySQL
$MySQL[$n]['usuario']   = 'meu_usuario'; // Usuário MySQL
$MySQL[$n]['senha']     = 'minha_senha'; // Senha MySQL
$MySQL[$n]['banco']     = 'meu_banco'; // Banco de dados
$MySQL[$n]['persis']    = false; // Conexão persistente?
{% endhighlight %}

Gostaram? Ele tá todo comentado.. Qualquer dúvida é só comentar! =)

Abraços

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>[Arrays](http://www.php.net/manual/pt_BR/function.array.php)</strong> » Cria um array (matriz com vários elementos)</li>
<li><strong>Função [strpos()](http://us3.php.net/strpos)</strong> » Encontra a primeira ocorrencia de uma string em outra string</li>
<li><strong>Função [mysql_connect()](http://us3.php.net/mysql_connect)</strong> » Abre uma conexão com o servidor MySQL</li>
<li><strong>Função [mysql_pconnect()](http://us.php.net/mysql_pconnect)</strong> » Abre uma conexão <strong>persistente</strong> com o servidor MySQL</li>
<li><strong>Função [mysql_select_db()](http://us.php.net/mysql_select_db)</strong> » Conecta-se a um banco de dados disponível no servidor MySQL</li>
</ul>
