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
<p>Hoje vou falar um pouco sobre as funções para manipulação (no PHP) do protocolo FTP, que permite o envio de arquivos entre servidores.</p>
<p>Falarei sobre quatro cinco tarefas básicas: abrir a conexão, fazer o login, enviar um arquivo, receber um arquivo e desconectar o FTP.</p>
<p>Faremos um arquivo que conterá todas essas tarefas, então vai ficar fácil entender como tudo funciona.</p>
<h2>> Conectando-se ao FTP</h2>
<p>Para se conectar a um servidor FTP você deve usar a função <strong>ftp_connect()</strong>, que tem três possíveis argumentos:</p>
<ol>
<li>O servidor ao qual estamos tentando conexão (geralmente um ip ou domínio)</li>
<li>A porta por onde será tentada a conexão, por padrão o PHP já usa a porta 21. <span style="color: #888888;">(opcional)</span></li>
<li>O <em>timeout</em>, que é o tempo máximo para tentar a conexão <span style="color: #888888;">(opcional)</span></li>
</ol>
<p>Então, começaremos o nosso arquivo:</p>
<p>[code='php']
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/</p>
<p>// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço</p>
<p>// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false
?>
[/code]</p>
<p>Até aqui, nada de misterioso... Vamos continuar.</p>
<p>» <strong>Veja também:</strong> <a href="http://br2.php.net/manual/pt_BR/function.ftp-connect.php" target="_blank">Documentação da função ftp_connect()</a></p>
<h2>> Fazendo login no FTP</h2>
<p>Para fazer o login você vai usar a função <strong>ftp_login()</strong>, que tem três argumentos obrigatórios:</p>
<ol>
<li>O identificador da conexão, definido no uso do ftp_connect()</li>
<li>Usuário</li>
<li>Senha</li>
</ol>
<p>Então, fazendo algumas alterações no nosso arquivo:</p>
<p>[code='php']
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/</p>
<p>// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço
$usuario = 'usuario'; // Usuário
$senha = 'senha'; // Senha</p>
<p>// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false</p>
<p>// Faz o login no servidor FTP
$login = ftp_login($ftp, $usuario, $senha); // Retorno: true ou false
?>
[/code]</p>
<p>Vale lembrar que não estou criando nenhuma rotina de debug ou de manipulação de erros, estou partindo da premissa que os dados estão corretos e o servidor FTP está rodando, no ar.</p>
<p>A partir deste ponto já estamos conectados e logados no servidor FTP e podemos começar a pegar e enviar arquivos.</p>
<p>» <strong>Veja também:</strong> <a href="http://br2.php.net/manual/pt_BR/function.ftp-login.php" target="_blank">Documentação da função ftp_login()</a></p>
<h2>> Enviando arquivos para o FTP (upload)</h2>
<p>Para fazer upload de arquivos você vai usar a função <strong>ftp_put()</strong>, que tem quatro argumentos obrigatórios:</p>
<ol>
<li>O identificador da conexão, definido no uso do ftp_connect()</li>
<li>Onde e com qual nome o arquivo será salvo no FTP</li>
<li>O arquivo que será enviado (local)</li>
<li>O modo de envio, pode ser <strong>FTP_ASCII</strong> ou <strong>FTP_BINARY</strong></li>
</ol>
<p>Então, fazendo algumas alterações no nosso arquivo:</p>
<p>[code='php']
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/</p>
<p>// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço
$usuario = 'usuario'; // Usuário
$senha = 'senha'; // Senha</p>
<p>// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false</p>
<p>// Faz o login no servidor FTP
$login = ftp_login($ftp, $usuario, $senha); // Retorno: true ou false</p>
<p>// Define variáveis para o envio de arquivo
$local_arquivo = './arquivos/documento.doc'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'documento.doc'; // Nome do arquivo (externo)</p>
<p>// Envia o arquivo pelo FTP em modo ASCII
$envio = ftp_put($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false</p>
<p>?>
[/code]</p>
<p>Com isso você já vai poder conectar-se a um FTP e enviar arquivos dinamicamente, o que é muito útil.</p>
<p>» <strong>Veja também:</strong> <a href="http://br2.php.net/manual/pt_BR/function.ftp-put.php" target="_blank">Documentação da função ftp_put()</a></p>
<h2>> Recebendo arquivos pelo FTP (download)</h2>
<p>Para fazer download de arquivos você vai usar a função <strong>ftp_get()</strong>, que tem quatro argumentos obrigatórios, os mesmos do <strong>ftp_put()</strong>:</p>
<ol>
<li>O identificador da conexão, definido no uso do ftp_connect()</li>
<li>Onde e com qual nome o arquivo está salvo no FTP</li>
<li>Onde o arquivo que será salvo (local)</li>
<li>O modo de envio, pode ser <strong>FTP_ASCII</strong> ou <strong>FTP_BINARY</strong></li>
</ol>
<p>Então, fazendo algumas alterações no nosso arquivo:</p>
<p>[code='php']
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/</p>
<p>// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço
$usuario = 'usuario'; // Usuário
$senha = 'senha'; // Senha</p>
<p>// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false</p>
<p>// Faz o login no servidor FTP
$login = ftp_login($ftp, $usuario, $senha); // Retorno: true ou false</p>
<p>// ======</p>
<p>// Define variáveis para o envio de arquivo
$local_arquivo = './arquivos/documento.doc'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'documento.doc'; // Nome do arquivo (externo)</p>
<p>// Envia o arquivo pelo FTP em modo ASCII
$envia = ftp_put($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false</p>
<p>// ======</p>
<p>// Define variáveis para o recebimento de arquivo
$local_arquivo = './arquivos/planilha.xls'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'planilha.xls'; // Nome do arquivo (externo)</p>
<p>// Recebe o arquivo pelo FTP em modo ASCII
$recebe = ftp_get($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false</p>
<p>?>
[/code]</p>
<p>» <strong>Veja também:</strong> <a href="http://br2.php.net/manual/pt_BR/function.ftp-get.php" target="_blank">Documentação da função ftp_get()</a></p>
<h2>> Desconectando-se do FTP</h2>
<p>Para se desconectar (faça isso, sempre) você vai usar a função <strong>ftp_close()</strong>, que tem apenas um argumento: o identificador da conexão.</p>
<p>Então, finalizando o no nosso arquivo:</p>
<p>[code='php']
< ?php
/**
* Conexão via FTP com o PHP
* 05 de maio de 2009
* Thiago Belem ~ http://blog.thiagobelem.net/
*/</p>
<p>// Dados do servidor
$servidor = 'thiagobelem.net'; // Endereço
$usuario = 'usuario'; // Usuário
$senha = 'senha'; // Senha</p>
<p>// Abre a conexão com o servidor FTP
$ftp = ftp_connect($servidor); // Retorno: true ou false</p>
<p>// Faz o login no servidor FTP
$login = ftp_login($ftp, $usuario, $senha); // Retorno: true ou false</p>
<p>// ======</p>
<p>// Define variáveis para o envio de arquivo
$local_arquivo = './arquivos/documento.doc'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'documento.doc'; // Nome do arquivo (externo)</p>
<p>// Envia o arquivo pelo FTP em modo ASCII
$envia = ftp_put($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false</p>
<p>// ======</p>
<p>// Define variáveis para o recebimento de arquivo
$local_arquivo = './arquivos/planilha.xls'; // Localização (local)
$ftp_pasta = '/public_html/arquivos/'; // Pasta (externa)
$ftp_arquivo = 'planilha.xls'; // Nome do arquivo (externo)</p>
<p>// Recebe o arquivo pelo FTP em modo ASCII
$recebe = ftp_get($ftp, $ftp_pasta.$ftp_arquivo, $local_arquivo, FTP_ASCII); // Retorno: true / false</p>
<p>// Encerra a conexão ftp
ftp_close($ftp);</p>
<p>?>
[/code]</p>
<p>Com esse arquivo você tem exemplos simples de como usar as tarefas básicas de uma conexão via protocolo FTP. É claro que existem várias outras funções relacionadas ao tamanho de arquivos, CHMOD (permissões), pastas e etc... Por isso vale a pena dar uma olhada na lista de funções FTP do PHP.</p>
<p>» <strong>Veja também:</strong> <a href="http://br2.php.net/manual/pt_BR/ref.ftp.php" target="_blank">Lista de funções FTP</a></p>
