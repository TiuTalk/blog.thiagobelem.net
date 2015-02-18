---
layout: post
title: PHP 5.4 - Servidor interno

date: '2012-11-06 23:09:30 -0200'
categories:
- Desenvolvimento
- PHP
- Artigos
- Servidores
tags:
- PHP 5.4
- servidor interno
---
<p>Uma das <a title="PHP 5.4 – Novidades e novas funcionalidades" href="http://blog.thiagobelem.net/php-5-4-novas-funcionalidades/">funcionalidades implementadas do PHP 5.4</a> é o servidor interno, que permite que você teste e desenvolva sites localmente sem a necessidade de servidores como <strong>Apache</strong> ou <strong>Nginx</strong>.</p>
<p>Este é um recurso que eu já havia visto em linguagens como <strong>Python</strong> e <strong>Ruby</strong>, mas (até onde eu sei) nunca haviam criado algo do tipo para PHP.</p>
<p>A sintaxe padrão do comando é a seguinte:</p>
<div data-gist-id="4028578" data-gist-show-loading="false"></div>
<p>Então se quisermos abrir um servidor na porta 8080 local, seria assim:</p>
<div data-gist-id="4028583" data-gist-show-loading="false"></div>
<p>Esse comando <strong>vai abrir um servidor com raíz na pasta atual</strong>, então você pode executar um site/script que esteja em qualquer lugar da sua máquina, e não apenas dentro da raíz pré-definida como acontecia com o Apache ou Nginx.</p>
<p><img class="aligncenter size-full wp-image-2865" title="php-cli-webserver-492x400" src="http://blog.thiagobelem.net/wp-content/uploads/2012/11/php-cli-webserver-492x400.png" alt="" width="492" height="400" /></p>
<h3>Arquivo de entrada e rotas (ou entry-point)</h3>
<p>Esse servidor embutido do PHP <strong>não suporta aquivos .htaccess</strong>, então você precisará trabalhar a reescrita de URL através de um arquivo comumente chamado de <strong>entry-point</strong>:</p>
<div data-gist-id="4028593" data-gist-show-loading="false"></div>
<p>Isso fará com que todas as requisições sejam redirecionadas para o arquivo <strong>index.php</strong> (na pasta onde o comando foi executado), e dentro desse arquivo você faz o controle/redirecionamento da requisição, por exemplo:</p>
<div data-gist-id="4029806" data-gist-show-loading="false"></div>
<p>Espero que vocês tenham gostado (e façam um bom uso) dessa nova funcionalidade que o <strong>PHP 5.4</strong> nos trouxe. :)</p>
<p>Não se esqueça de ler a documentação oficial: <a href="http://php.net/manual/features.commandline.webserver.php" target="_blank">http://php.net/manual/features.commandline.webserver.php</a></p>
<h2>Não use em produção!</h2>
<blockquote><p>This web server is designed for developmental purposes only, and should not be used in production.</p></blockquote>
<p>Este servidor foi projeto apenas para desenvolvimento, e não deve ser usado em produção.</p>
<h3>PHP 5.4.6</h3>
<p><strong>Atenção:</strong> Este artigo foi escrito baseado na <strong>versão 5.4.6</strong> do PHP, em versões futuras esse comportamento pode mudar.</p>
<div data-gist-id="4028719" data-gist-show-loading="false"></div>
