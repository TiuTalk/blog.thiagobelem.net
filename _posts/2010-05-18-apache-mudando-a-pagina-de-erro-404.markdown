---
layout: post
status: publish
published: true
title: Apache – Mudando a página de erro 404
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aprenda a modificar a página de erro "Arquivo não encontrado" (404) do seu
  servidor e redirecione seus visitantes para páginas mais úteis, com conteúdo relevante
  ou até mesmo a página inicial do seu site.
wordpress_id: 760
wordpress_url: http://blog.thiagobelem.net/?p=760
date: '2010-05-18 09:16:49 -0300'
date_gmt: '2010-05-18 12:16:49 -0300'
categories:
- Tutoriais
- Apache
tags:
- Apache
- Erro 404
---
<p>Bom dia pessoal!</p>
<p>Continuando com algumas dicas tiradas do <a title="Apache Cookbook, O'Reilly" href="http://oreilly.com/catalog/9780596001919">Apache Cookbook</a> do O'Reilly, hoje vou ensinar como mudar a página de erro "Não encontrado" (404) do seu servidor.</p>
<h3>O Problema</h3>
<p>Seus visitantes quando tentam acessar um endereço ou arquivo que não exista recebem a página de erro "feia" e padrão do Apache e você quer que eles sejam redirecionados para uma outra página, onde poderão continuar navegando no seu site.</p>
<h3>A Solução</h3>
<p>Edite o arquivo o arquivo <strong>.htaccess</strong> na raíz do seu site ou o arquivo <strong>httpd.conf</strong> do seu servidor, em servidores Linux ele provavelmente fica em <code>/usr/apache2/</code> e em servidores Windows o local pode ser em <code>C:/Arquivos de Programas/Apache Group/Apache/conf/</code>, se não encontrar, faça uma busca em <code>httpd.conf</code> que você encontrará.</p>
<p>Em um desses dois arquivos, coloque a seguinte linha de código:</p>
<p>[code language="shell"]<br />
# Muda o arquivo de erro 404<br />
ErrorDocument 404 /erro404.php<br />
[/code]</p>
<p>Isso fará com que o Apache use o arquivo <strong>erro404.php</strong> para lidar com a mensagem de erro. Você pode usar arquivos HTML também, não tem problema.</p>
<p>Uma boa idéia é mandar para a página inicial do seu site. :)</p>
<h3>Saiba mais (documentação)</h3>
<ul>
<li><a title="Apache - Error Document" href="http://httpd.apache.org/docs/2.2/mod/core.html#errordocument">http://httpd.apache.org/docs/2.2/mod/core.html#errordocument</a></li>
<li><a title="Apache - mod_dir" href="http://httpd.apache.org/docs/2.2/mod/mod_dir.html">http://httpd.apache.org/docs/2.2/mod/mod_dir.html</a></li>
</ul>
<p>Se existir algum assunto relacionado a configuração do Apache que você tem dúvida, deixe seu comentário e tentarei falar sobre nos próximos artigos.</p>
<p>Abraços e até a próxima!</p>