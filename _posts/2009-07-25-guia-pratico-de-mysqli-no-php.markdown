---
layout: post
title: Guia prático de MySQLi no PHP
excerpt: Aprenda a usar a extensão MySQLi do PHP para ter acesso á funções avançadas
  do MySQL. Veja exemplos de uso de cada uma das operações básicas de fomra orientada
  a objetos e deixe seus scripts muito mais profissionais.

date: '2009-07-25 14:47:16 -0300'
categories:
- PHP
- MySQL
- Artigos
tags:
- PHP
- MySQL
- MySQLi
---
Hoje vou falar um pouquinho sobre o <strong>MySQLi</strong> que é uma extensão do PHP feita para aproveitar os recursos mais avançados do MySQL. O legal do MySQLi é que ele pode ser usado de forma orientada a objetos. :)

<strong style="color: red">Atenção:</strong> As funções MySQLi funcionam apenas com <strong>PHP 5</strong> (ou superior) e <strong>MySQL 4.1.3</strong> (ou superior).

Não se esqueça de antes de testar esses scripts verificar se o MySQLi está habilitado no seu PHP dando uma olhada no <strong>phpinfo()</strong>.

Veja um exemplo de scripts onde faremos todas as operações comuns do MySQL:

<h3>Conectando-se ao MySQL</h3>

<div data-gist-id="40615383d6cee8d31ac2" data-gist-show-loading="false"></div>



<h3>Executando uma consulta do tipo SELECT</h3>

<div data-gist-id="15ea4b3149e040c6af1e" data-gist-show-loading="false"></div>



<h3>Executando uma consulta simples, do tipo DELETE ou UPDATE</h3>

<div data-gist-id="e8d8b6a2ade6b4b9a511" data-gist-show-loading="false"></div>

Como vocês podem ver a sintaxe dos comandos SQL não mudam em nada... O que muda são apenas as funções do PHP mesmo. ;)

Uma coisa que eu não falei aqui e que é o grande forte do MySQLi são os "<em>prepared statements</em>" que falarei em um artigo durante essa semana mesmo.

Quem quiser mais detalhes é só dar uma olhada na [documentação oficial](http://br2.php.net/manual/pt_BR/book.mysqli.php).

Espero que tenham gostado!

