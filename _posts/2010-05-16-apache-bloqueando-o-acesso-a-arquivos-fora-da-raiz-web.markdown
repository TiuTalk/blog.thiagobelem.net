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
<p>Fala pessoal!</p>
<p>Como estou sem muito tempo para escrever coisas aqui para o blog, passarei para vocês algumas dicas rápidas sobre Apache de um livro que tenho aqui em casa: <a title="Apache Cookbook, O'Reilly" href="http://oreilly.com/catalog/9780596001919">Apache Cookbook</a> do O'Reilly.</p>
<h3>O Problema</h3>
<p>Você deseja se certificar de que os arquivos fora do seu diretório WEB não sejam acessíveis através do site.</p>
<h3>A Solução</h3>
<p>Edite o arquivo <strong>httpd.conf</strong> do seu servidor, em servidores Linux ele provavelmente fica em <code>/usr/apache2/</code> e em servidores Windows o local pode ser em <code>C:/Arquivos de Programas/Apache Group/Apache/conf/</code>, se não encontrar, faça uma busca em <code>httpd.conf</code> que você encontrará. :)</p>
<p>Neste arquivo, adicione o seguinte bloco de código:</p>
<p><strong>Linux</strong></p>
<p>[code language="shell"]<br />
# Todo o servidor<br />
<Directory /><br />
	Order deny,allow<br />
	Deny from all<br />
	AllowOverride None<br />
	Options None<br />
</Directory></p>
<p># Raíz do servidor (opcional)<br />
<Directory /var/www/><br />
	Order allow,deny<br />
	Allow from all<br />
</Directory><br />
[/code]</p>
<p><strong>Windows</strong></p>
<p>[code language="shell"]<br />
# Todo o servidor<br />
<Directory C:/><br />
	Order deny,allow<br />
	Deny from all<br />
	AllowOverride None<br />
	Options None<br />
</Directory></p>
<p># Raíz do servidor (opcional)<br />
<Directory C:/webroot/><br />
	Order allow,deny<br />
	Allow from all<br />
</Directory><br />
[/code]</p>
<p>A segunda parte (raíz do servidor) é opcional... As chances de já existir um bloco desses no arquivo <code>httpd.conf</code> é muito grande. Coloquei-a ali em cima apenas para vocês poderem testar. E não se esqueça de mudar a letra do drive e o caminho da raíz do servidor se necessário.</p>
<h3>Saiba mais (documentação)</h3>
<ul>
<li><a title="Apache - mod_access" href="http://httpd.apache.org/docs/mod/mod_access.html">http://httpd.apache.org/docs/mod/mod_access.html</a></li>
<li><a title="Apache - Configuração" href="http://httpd.apache.org/docs/2.2/pt-br/configuring.html">http://httpd.apache.org/docs/2.2/pt-br/configuring.html</a></li>
</ul>
<p>Se existir algum assunto relacionado a configuração do Apache que você tem dúvida, deixe seu comentário e tentarei falar sobre nos próximos artigos.</p>
<p>Abraços e até a próxima!</p>
