---
layout: post
title: Apache – Mudando a página de erro 404
excerpt: Aprenda a modificar a página de erro "Arquivo não encontrado" (404) do seu
  servidor e redirecione seus visitantes para páginas mais úteis, com conteúdo relevante
  ou até mesmo a página inicial do seu site.

date: '2010-05-18 09:16:49 -0300'
categories:
- Tutoriais
- Apache
tags:
- Apache
- Erro 404
---
Bom dia pessoal!

Continuando com algumas dicas tiradas do [Apache Cookbook](http://oreilly.com/catalog/9780596001919) do O'Reilly, hoje vou ensinar como mudar a página de erro "Não encontrado" (404) do seu servidor.

<h3>O Problema</h3>
Seus visitantes quando tentam acessar um endereço ou arquivo que não exista recebem a página de erro "feia" e padrão do Apache e você quer que eles sejam redirecionados para uma outra página, onde poderão continuar navegando no seu site.

<h3>A Solução</h3>
Edite o arquivo o arquivo <strong>.htaccess</strong> na raíz do seu site ou o arquivo <strong>httpd.conf</strong> do seu servidor, em servidores Linux ele provavelmente fica em <code>/usr/apache2/</code> e em servidores Windows o local pode ser em <code>C:/Arquivos de Programas/Apache Group/Apache/conf/</code>, se não encontrar, faça uma busca em <code>httpd.conf</code> que você encontrará.

Em um desses dois arquivos, coloque a seguinte linha de código:


[code language="shell"]
# Muda o arquivo de erro 404
ErrorDocument 404 /erro404.php
[/code]

Isso fará com que o Apache use o arquivo <strong>erro404.php</strong> para lidar com a mensagem de erro. Você pode usar arquivos HTML também, não tem problema.

Uma boa idéia é mandar para a página inicial do seu site. :)

<h3>Saiba mais (documentação)</h3>
<ul>
<li>[http://httpd.apache.org/docs/2.2/mod/core.html#errordocument](http://httpd.apache.org/docs/2.2/mod/core.html#errordocument)</li>
<li>[http://httpd.apache.org/docs/2.2/mod/mod_dir.html](http://httpd.apache.org/docs/2.2/mod/mod_dir.html)</li>
</ul>
Se existir algum assunto relacionado a configuração do Apache que você tem dúvida, deixe seu comentário e tentarei falar sobre nos próximos artigos.

Abraços e até a próxima!

