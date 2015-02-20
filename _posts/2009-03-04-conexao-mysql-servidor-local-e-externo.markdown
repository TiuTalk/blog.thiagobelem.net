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


<div data-gist-id="ece1cdbb1f8f2972b744" data-gist-show-loading="false"></div>

Pra criar mais uma configuração de conexão é só duplicar esse bloco:


<div data-gist-id="211198228260f3b31985" data-gist-show-loading="false"></div>

Gostaram? Ele tá todo comentado.. Qualquer dúvida é só comentar! =)

Abraços

#### Documentação Oficial
* [Arrays](http://br.php.net/manual/pt_BR/function.array.php) » Cria um array (matriz com vários elementos)
* [strpos()](http://br.php.net/strpos) » Encontra a primeira ocorrencia de uma string em outra string
* [mysql_connect()](http://br.php.net/mysql_connect) » Abre uma conexão com o servidor MySQL
* [mysql_pconnect()](http://br.php.net/mysql_pconnect) » Abre uma conexão <strong>persistente com o servidor MySQL
* [mysql_select_db()](http://br.php.net/mysql_select_db) » Conecta-se a um banco de dados disponível no servidor MySQL
