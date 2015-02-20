---
layout: post
title: Apache – Bloqueando o acesso a arquivos fora da raíz WEB
excerpt: Aprenda a configurar o Apache para evitar que visitantes do seu site consigam
  acessar arquivos fora da raíz do seu servidor WEB.

date: '2010-05-16 17:54:26 -0300'
categories:
- Tutoriais
- Apache
- Segurança
tags:
- Apache
- WEB Root
- Raíz WEB
---
Fala pessoal!

Como estou sem muito tempo para escrever coisas aqui para o blog, passarei para vocês algumas dicas rápidas sobre Apache de um livro que tenho aqui em casa: [Apache Cookbook](http://oreilly.com/catalog/9780596001919) do O'Reilly.

### O Problema
Você deseja se certificar de que os arquivos fora do seu diretório WEB não sejam acessíveis através do site.

### A Solução
Edite o arquivo <strong>httpd.conf</strong> do seu servidor, em servidores Linux ele provavelmente fica em <code>/usr/apache2/</code> e em servidores Windows o local pode ser em <code>C:/Arquivos de Programas/Apache Group/Apache/conf/</code>, se não encontrar, faça uma busca em <code>httpd.conf</code> que você encontrará. :)

Neste arquivo, adicione o seguinte bloco de código:

<strong>Linux</strong>


<div data-gist-id="0c7727edfbf7ecc547d7" data-gist-show-loading="false"></div>

<strong>Windows</strong>


<div data-gist-id="c4c26eec40fa04d1fea1" data-gist-show-loading="false"></div>

A segunda parte (raíz do servidor) é opcional... As chances de já existir um bloco desses no arquivo <code>httpd.conf</code> é muito grande. Coloquei-a ali em cima apenas para vocês poderem testar. E não se esqueça de mudar a letra do drive e o caminho da raíz do servidor se necessário.

### Saiba mais (documentação)
<ul>
<li>[http://httpd.apache.org/docs/mod/mod_access.html](http://httpd.apache.org/docs/mod/mod_access.html)</li>
<li>[http://httpd.apache.org/docs/2.2/pt-br/configuring.html](http://httpd.apache.org/docs/2.2/pt-br/configuring.html)</li>
</ul>
Se existir algum assunto relacionado a configuração do Apache que você tem dúvida, deixe seu comentário e tentarei falar sobre nos próximos artigos.

Abraços e até a próxima!

