---
layout: post
title: PHP 5.5 - API de senhas

date: '2013-03-27 11:34:44 -0300'
categories:
- Desenvolvimento
- PHP
- Artigos
- APIs
- Segurança
tags:
- PHP
- bcrypt
- password
- hash
- php 5.5
---
A <a href="http://www.php.net/manual/en/book.password.php">nova API de senhas</a> do PHP foi lançada junto com outras <a href="/php-5-5-novidades-e-novas-funcionalidades">novidades do PHP 5.5</a>.

O objetivo principal dessa API é padronizar/facilitar o trabalho de <a title="Criptografando senhas no PHP usando bcrypt (Blowfish)" href="/criptografando-senhas-no-php-usando-bcrypt-blowfish">hashing de senhas</a>... Ela funciona como um <em>wrapper</em> pra função <a href="http://php.net/crypt">crypt</a>.

Com essa nova api, foram criadas quatro novas funções:

<ul>
<li><a href="http://php.net/password_get_info"><span style="line-height: 14px;">password_get_info</span></a></li>
<li><a href="http://php.net/password_hash">password_hash</a></li>
<li><a href="http://php.net/password_needs_rehash">password_needs_rehash</a></li>
<li><a href="http://php.net/password_verify">password_verify</a></li>
</ul>
Vamos ver o uso das duas funções mais importantes (e úteis) dessa API..

<h2>password_hash</h2>
O método <a href="http://php.net/password_hash">password_hash</a> é o que você usará para fazer o hash de senhas, ele recebe três parâmetros: a senha (string), o <a href="http://www.php.net/manual/en/password.constants.php">algoritmo</a> (constante) e uma lista opções (opcional).

Por exemplo:

<div data-gist-id="5254534" data-gist-show-loading="false"></div>
A vantagem de usar esse método é que você não precisa montar o salt como acontecia no <a href="http://php.net/crypt">crypt</a>... Ele mesmo gera um salt "correto" para o algoritmo escolhido, que por padrão será o <a title="Criptografando senhas no PHP usando bcrypt (Blowfish)" href="/criptografando-senhas-no-php-usando-bcrypt-blowfish">bcrypt</a>.

É esse valor retornado pelo <strong>password_hash</strong> que você deverá salvar no banco de dados.

<h2>password_verify</h2>
Uma vez que você já tem o hash da senha do seu usuário salvo no banco, você precisa de uma forma de - no futuro - verificar se a senha que ele digitou (texto plano) <strong>combina</strong> com a o hash no seu banco de dados, e você fará isso usando o método <a href="http://php.net/password_verify">password_verify</a>.

Ele recebe dois parâmetros: a senha em texto plano e o hash da senha à ser comparada.

<div data-gist-id="5254589" data-gist-show-loading="false"></div>
<h2>Conclusão</h2>
Essa nova API de senhas do PHP veio pra ficar, e já consigo ver vários frameworks adotando seu uso como padrão... talvez o único empecilho seja que é uma versão muito recente, e isso deve demorar um pouco.

De qualquer forma, se você já poder usar o <strong>PHP 5.5</strong>, não há por que não usar essas funções para garantir a segurança dos dados de seus usuários. :)

