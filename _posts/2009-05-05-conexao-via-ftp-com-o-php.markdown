---
layout: post
title: Conexão via FTP com o PHP
excerpt: Aprenda a usar o PHP para enviar e receber arquivos via protocolo FTP tornando
  a sua aplicação muito mais robusta e eficiente. São apenas cinco funções, de uso
  simples... Tudo resumido e explicado pra você.

date: '2009-05-05 14:34:35 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Hoje vou falar um pouco sobre as funções para manipulação (no PHP) do protocolo FTP, que permite o envio de arquivos entre servidores.

Falarei sobre quatro cinco tarefas básicas: abrir a conexão, fazer o login, enviar um arquivo, receber um arquivo e desconectar o FTP.

Faremos um arquivo que conterá todas essas tarefas, então vai ficar fácil entender como tudo funciona.

<h2>> Conectando-se ao FTP</h2>
Para se conectar a um servidor FTP você deve usar a função <strong>ftp_connect()</strong>, que tem três possíveis argumentos:

<ol>
<li>O servidor ao qual estamos tentando conexão (geralmente um ip ou domínio)</li>
<li>A porta por onde será tentada a conexão, por padrão o PHP já usa a porta 21. <span style="color: #888888;">(opcional)</span></li>
<li>O <em>timeout</em>, que é o tempo máximo para tentar a conexão <span style="color: #888888;">(opcional)</span></li>
</ol>
Então, começaremos o nosso arquivo:


[code language="php"]
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/

// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço

// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false
?>
[/code]

Até aqui, nada de misterioso... Vamos continuar.

» <strong>Veja também:</strong> [Documentação da função ftp_connect()](http://br2.php.net/manual/pt_BR/function.ftp-connect.php)

<h2>> Fazendo login no FTP</h2>
Para fazer o login você vai usar a função <strong>ftp_login()</strong>, que tem três argumentos obrigatórios:

<ol>
<li>O identificador da conexão, definido no uso do ftp_connect()</li>
<li>Usuário</li>
<li>Senha</li>
</ol>
Então, fazendo algumas alterações no nosso arquivo:


[code language="php"]
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/

// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço
$usuario = 'usuario'; // Usuário
$senha = 'senha'; // Senha

// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false

// Faz o login no servidor FTP
$login = ftp_login($ftp, $usuario, $senha); // Retorno: true ou false
?>
[/code]

Vale lembrar que não estou criando nenhuma rotina de debug ou de manipulação de erros, estou partindo da premissa que os dados estão corretos e o servidor FTP está rodando, no ar.

A partir deste ponto já estamos conectados e logados no servidor FTP e podemos começar a pegar e enviar arquivos.

» <strong>Veja também:</strong> [Documentação da função ftp_login()](http://br2.php.net/manual/pt_BR/function.ftp-login.php)

<h2>> Enviando arquivos para o FTP (upload)</h2>
Para fazer upload de arquivos você vai usar a função <strong>ftp_put()</strong>, que tem quatro argumentos obrigatórios:

<ol>
<li>O identificador da conexão, definido no uso do ftp_connect()</li>
<li>Onde e com qual nome o arquivo será salvo no FTP</li>
<li>O arquivo que será enviado (local)</li>
<li>O modo de envio, pode ser <strong>FTP_ASCII</strong> ou <strong>FTP_BINARY</strong></li>
</ol>
Então, fazendo algumas alterações no nosso arquivo:


[code language="php"]
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/

// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço
$usuario = 'usuario'; // Usuário
$senha = 'senha'; // Senha

// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false

// Faz o login no servidor FTP
$login = ftp_login($ftp, $usuario, $senha); // Retorno: true ou false

// Define variáveis para o envio de arquivo
$local_arquivo = './arquivos/documento.doc'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'documento.doc'; // Nome do arquivo (externo)

// Envia o arquivo pelo FTP em modo ASCII
$envio = ftp_put($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false

?>
[/code]

Com isso você já vai poder conectar-se a um FTP e enviar arquivos dinamicamente, o que é muito útil.

» <strong>Veja também:</strong> [Documentação da função ftp_put()](http://br2.php.net/manual/pt_BR/function.ftp-put.php)

<h2>> Recebendo arquivos pelo FTP (download)</h2>
Para fazer download de arquivos você vai usar a função <strong>ftp_get()</strong>, que tem quatro argumentos obrigatórios, os mesmos do <strong>ftp_put()</strong>:

<ol>
<li>O identificador da conexão, definido no uso do ftp_connect()</li>
<li>Onde e com qual nome o arquivo está salvo no FTP</li>
<li>Onde o arquivo que será salvo (local)</li>
<li>O modo de envio, pode ser <strong>FTP_ASCII</strong> ou <strong>FTP_BINARY</strong></li>
</ol>
Então, fazendo algumas alterações no nosso arquivo:


[code language="php"]
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/

// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço
$usuario = 'usuario'; // Usuário
$senha = 'senha'; // Senha

// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false

// Faz o login no servidor FTP
$login = ftp_login($ftp, $usuario, $senha); // Retorno: true ou false

// ======

// Define variáveis para o envio de arquivo
$local_arquivo = './arquivos/documento.doc'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'documento.doc'; // Nome do arquivo (externo)

// Envia o arquivo pelo FTP em modo ASCII
$envia = ftp_put($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false

// ======

// Define variáveis para o recebimento de arquivo
$local_arquivo = './arquivos/planilha.xls'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'planilha.xls'; // Nome do arquivo (externo)

// Recebe o arquivo pelo FTP em modo ASCII
$recebe = ftp_get($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false

?>
[/code]

» <strong>Veja também:</strong> [Documentação da função ftp_get()](http://br2.php.net/manual/pt_BR/function.ftp-get.php)

<h2>> Desconectando-se do FTP</h2>
Para se desconectar (faça isso, sempre) você vai usar a função <strong>ftp_close()</strong>, que tem apenas um argumento: o identificador da conexão.

Então, finalizando o no nosso arquivo:


[code language="php"]
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/

// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço
$usuario = 'usuario'; // Usuário
$senha = 'senha'; // Senha

// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false

// Faz o login no servidor FTP
$login = ftp_login($ftp, $usuario, $senha); // Retorno: true ou false

// ======

// Define variáveis para o envio de arquivo
$local_arquivo = './arquivos/documento.doc'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'documento.doc'; // Nome do arquivo (externo)

// Envia o arquivo pelo FTP em modo ASCII
$envia = ftp_put($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false

// ======

// Define variáveis para o recebimento de arquivo
$local_arquivo = './arquivos/planilha.xls'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'planilha.xls'; // Nome do arquivo (externo)

// Recebe o arquivo pelo FTP em modo ASCII
$recebe = ftp_get($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false

// Encerra a conexão ftp
ftp_close($ftp);

?>
[/code]

Com esse arquivo você tem exemplos simples de como usar as tarefas básicas de uma conexão via protocolo FTP. É claro que existem várias outras funções relacionadas ao tamanho de arquivos, CHMOD (permissões), pastas e etc... Por isso vale a pena dar uma olhada na lista de funções FTP do PHP.

» <strong>Veja também:</strong> [Lista de funções FTP](http://br2.php.net/manual/pt_BR/ref.ftp.php)

