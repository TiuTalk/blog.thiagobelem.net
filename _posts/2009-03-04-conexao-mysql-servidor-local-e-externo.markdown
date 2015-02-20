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

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>[Arrays](http://www.php.net/manual/pt_BR/function.array.php)</strong> » Cria um array (matriz com vários elementos)</li>
<li><strong>Função [strpos()](http://us3.php.net/strpos)</strong> » Encontra a primeira ocorrencia de uma string em outra string</li>
<li><strong>Função [mysql_connect()](http://us3.php.net/mysql_connect)</strong> » Abre uma conexão com o servidor MySQL</li>
<li><strong>Função [mysql_pconnect()](http://us.php.net/mysql_pconnect)</strong> » Abre uma conexão <strong>persistente</strong> com o servidor MySQL</li>
<li><strong>Função [mysql_select_db()](http://us.php.net/mysql_select_db)</strong> » Conecta-se a um banco de dados disponível no servidor MySQL</li>
</ul>
