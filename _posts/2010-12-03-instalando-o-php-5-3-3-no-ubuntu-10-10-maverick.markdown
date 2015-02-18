---
layout: post
title: Instalando o PHP 5.3+ no Ubuntu
excerpt: Aprenda a instalar o Apache 2, MySQL 5.1, PostgreSQL 8.4 e PHP 5.3.3 no Ubuntu
  10.10. Desde o download até a compilação! E, de bônus, aprenda a instalar o PHPUnit,
  uma ótima ferramenta para teste unitário de código

date: '2010-12-03 15:23:05 -0200'
categories:
- PHP
- Tutoriais
- Linux
tags:
- PHP
- PHP 5.3
- Ubuntu
- Ubuntu 10.10 Maverick
---
<p>Atenção... Este artigo é bem antigo, hoje em dia (2012+)<strong> não precisamos mais compilar o PHP</strong>, podemos instalar tudo via pacotes:</p>
<p>[gist id=3139795]</p>
<p>E pronto! :)</p>
<p>Agora segue o artigo original:</p>
<p>--------</p>
<p>Meses atrás fiz um artigo ensinando a <span class="removed_link" title="http://blog.thiagobelem.net/mysql/instalando-o-php-5-3-0-no-ubuntu/">instalar o PHP 5.3.0 no Ubuntu Jaunty (9.04)</span> e hoje ensinarei a compilar e instalar o <strong>PHP 5.3.3</strong> no <strong>Ubuntu Maverick</strong> (10.10) recém-instalado.</p>
<p><a id="more"></a><a id="more-1007"></a></p>
<p>A instalação é dividada em quatro passos, sendo o último um bônus:</p>
<ol>
<li><a title="Instalação do Apache" href="#apache">Instalação do <strong>Apache 2</strong></a> - Servidor</li>
<li><a title="Instalação do MySQL e PostgreSQL" href="#database">Instalação do <strong>MySQL</strong> e <strong>PostgreSQL</strong></a> - Bancos de dados</li>
<li><a title="Download e compilação do PHP" href="#php">Download e compilação do <strong>PHP 5.3.3</strong></a></li>
<li><a title="Instalação do PHPUnit" href="#phpunit">Instalação do <strong>PHPUnit</strong></a> - Ferramenta de teste de código</li>
</ol>
<h2 id="apache">Primeiro passo - Instalação do <strong>Apache 2</strong></h2>
<p>Para instalar o <strong>Apache 2</strong> vamos rodar o seguinte comando no terminal:</p>
<p>[shell]$ sudo aptitude install apache2 apache2-mpm-prefork apache2-prefork-dev apache2-utils apache2.2-common[/shell]</p>
<p>Essa comando vai fazer um download de cerca de 16MB e instalar o <strong>Apache 2</strong> no seu computador.</p>
<p>Feito isso você já pode abrir seu navegador e acessar o endereço <a href="http://127.0.0.1/">http://127.0.0.1/</a> e verá a tela do "<strong>It works!</strong>" que informa que o Apache foi instalado com sucesso.</p>
<h2 id="database">Segundo passo - Instalação do <strong>MySQL</strong> e <strong>PostgreSQL</strong></h2>
<p>Primeiro instalamos o <strong>PostgreSQL 8.4</strong> com o seguinte comando, que vai fazer um download de 5MB:</p>
<p>[shell]$ sudo aptitude install postgresql-8.4 postgresql-client-8.4 postgresql-client-common postgresql-common postgresql-server-dev-8.4[/shell]</p>
<p>Depois disso instalamos o <strong>MySQL 5.1</strong> com o seguinte comando, que irá fazer um download de 20MB:</p>
<p>[shell]$ sudo aptitude install mysql-client mysql-client-5.1 mysql-common mysql-server mysql-server-5.1 mysql-server-core-5.1[/shell]</p>
<p>Durante o final da instalação uma janela aparecerá perguntando a senha padrão do MySQL:</p>
<p>[caption id="attachment_1023" align="aligncenter" width="632"]<img class="size-full wp-image-1023  " title="Configuração de senha do MySQL 5.1" src="http://blog.thiagobelem.net/arquivos/2010/12/mysql.png" alt="" width="632" height="266" /> Configuração de senha do MySQL 5.1[/caption]</p>
<h2 id="php">Terceiro passo - Download e compilação do <strong>PHP 5.3.3</strong></h2>
<h3>Bibliotecas necessárias</h3>
<p>Para conseguir compilar o PHP precisaremos que algumas bibliotecas estejam instaladas, insale-as com esse comando:</p>
<p>[shell]$ sudo aptitude install libtidy-dev curl libcurl4-openssl-dev libcurl3 libcurl3-gnutls zlib1g zlib1g-dev libxslt1-dev libzip-dev libzip1 libxml2 libsnmp-base libsnmp15 libxml2-dev libsnmp-dev libjpeg62 libjpeg62-dev libpng12-0 libpng12-dev zlib1g zlib1g-dev libfreetype6 libfreetype6-dev libbz2-dev libmcrypt-dev libxmp-dev libmcrypt4 libltdl-dev[/shell]</p>
<p>Após os 10MB de download você já pode partir para o download do código-fonte do PHP.</p>
<h3>Download do código-fonte do PHP</h3>
<p>Para fazer o download (13MB) e descompactar o código-fonte do PHP 5.3.3, execute os seguintes comandos:</p>
<p>[shell]$ cd ~<br />
$ wget http://br.php.net/distributions/php-5.3.3.tar.gz<br />
$ tar xvfz php-5.3.3.tar.gz[/shell]</p>
<p>Feito isso você já tem o código fonte do PHP e é hora de configurar o compilador.</p>
<h3>Compilando o código-fonte do PHP</h3>
<p>[shell]$ ./configure -with-apxs2=/usr/bin/apxs2 -with-mysql=/usr -with-mysqli=/usr/bin/mysql_config -with-pgsql=/usr -with-tidy=/usr -with-curl=/usr/bin -with-curlwrappers -with-openssl-dir=/usr -with-zlib-dir=/usr -enable-mbstring -with-xpm-dir=/usr -with-pdo-pgsql=/usr -with-pdo-mysql=/usr -with-xsl=/usr -with-ldap -with-xmlrpc -with-iconv-dir=/usr -with-snmp=/usr -enable-exif -enable-calendar -with-bz2=/usr -with-mcrypt=/usr -with-gd -with-jpeg-dir=/usr -with-png-dir=/usr -with-zlib-dir=/usr -with-freetype-dir=/usr -enable-mbstring -enable-zip -with-pear --with-config-file-path=/usr/local/lib[/shell]</p>
<p>Não se assuste, vão aparecer MUITAS coisas na tela... Mas no final, se tudo deu certo, você receberá a seguinte mensagem:</p>
<pre>+--------------------------------------------------------------------+
| License:                                                           |
| This software is subject to the PHP License, available in this     |
| distribution in the file LICENSE.  By continuing this installation |
| process, you are bound by the terms of this license agreement.     |
| If you do not agree with the terms of this license, you must abort |
| the installation process at this point.                            |
+--------------------------------------------------------------------+

Thank you for using PHP.</pre>
<p>E agora é hora de compilar, utilize os seguintes comandos:</p>
<p>[shell]$ sudo make<br />
$ sudo make -i install[/shell]</p>
<p>A compilação demora mas é necessária... É isso que vai fazer o PHP funcionar no seu computador.</p>
<p>Quando tudo terminar, você pode digitar o comando <code>php -v</code> para ver a versão atual do PHP instalado no computador:</p>
<p>[shell]$ php -v<br />
PHP 5.3.3 (cli) (built: Dec  3 2010 16:08:11)<br />
Copyright (c) 1997-2010 The PHP Group<br />
Zend Engine v2.3.0, Copyright (c) 1998-2010 Zend Technologies[/shell]</p>
<p>Pronto! Seu PHP foi instalado com sucesso! :)</p>
<p>Não se esqueça de copiar o php.ini de desenvolvimento para a pasta do PHP:</p>
<p>[shell]$ sudo cp php.ini-development /usr/local/lib/php.ini[/shell]</p>
<h3>Fazendo o Apache rodar o PHP corretamente</h3>
<p>O PHP precisa ser um módulo do seu servidor WEB para tudo correr bem… Normalmente você não precisaria fazer isso, mas devido ao motivo de uso da flag -i no passo anterior, nós precisamos fazer isso manualmente… Primeiro, mude o diretório:</p>
<p>[shell]$ cd /etc/apache2/mods-available[/shell]</p>
<p>Agora crie um arquivo chamado <strong>php5.load</strong> e coloque isso dentro dele:</p>
<p>[shell]LoadModule php5_module /usr/lib/apache2/modules/libphp5.so[/shell]</p>
<p>Salve o arquivo <strong>php5.load</strong> e crie outro arquivo, agora chamado <strong>php5.conf</strong>, com o seguinte conteúdo:</p>
<p>[shell]AddType application/x-httpd-php .php .phtml .php3<br />
AddType application/x-httpd-php-source .phps[/shell]</p>
<p>Pronto… Terminamos… Só precisamos habilitar o módulo PHP no Apache e reiniciar o servidor, usaremos esses dois comandos:</p>
<p>[shell]$ sudo a2enmod php5<br />
$ sudo /etc/init.d/apache2 restart[/shell]</p>
<h2 id="phpunit">Bônus - Instalação do <strong>PHPUnit</strong></h2>
<p>O <a title="PHPUnit" href="http://www.phpunit.de/" target="_blank">PHPUnit</a> é uma ótima ferramenta de teste unitário que ajuda muito no desenvolvimento, mas isso é assunto para outro artigo. Vamos usar o <strong>Pear</strong>, que foi instalado junto com o PHP, par instalá-lo da seguinte maneira:</p>
<p>[shell]$ sudo pear channel-discover pear.phpunit.de<br />
$ sudo pear channel-discover components.ez.no<br />
$ sudo pear channel-discover pear.symfony-project.com<br />
$ sudo pear install phpunit/PHPUnit[/shell]</p>
<p>Com isso você instalou o <strong>PHPUnit</strong> com sucesso e já pode passar a usá-lo. Caso você ainda não conheça a ferramenta, aguarde alguns dias que postarei um tutorial sobre o PHPUnit.</p>
<p>Um grande abraço a todos! :)</p>
