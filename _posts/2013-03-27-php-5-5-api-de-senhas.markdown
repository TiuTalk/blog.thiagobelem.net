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
A [novidades do PHP 5.5](/php-5-5-novidades-e-novas-funcionalidades).

O objetivo principal dessa API é padronizar/facilitar o trabalho de [crypt](http://php.net/crypt).

Com essa nova api, foram criadas quatro novas funções:

* [password get info](http://php.net/password_get_info)
* [password hash](http://php.net/password_hash)
* [password needs rehash](http://php.net/password_needs_rehash)
* [password verify](http://php.net/password_verify)

Vamos ver o uso das duas funções mais importantes (e úteis) dessa API..

### password_hash

O método [algoritmo](http://www.php.net/manual/en/password.constants.php) (constante) e uma lista opções (opcional).

Por exemplo:

<div data-gist-id="5254534" data-gist-show-loading="false"></div>

A vantagem de usar esse método é que você não precisa montar o salt como acontecia no [bcrypt](/criptografando-senhas-no-php-usando-bcrypt-blowfish).

É esse valor retornado pelo <strong>password_hash</strong> que você deverá salvar no banco de dados.

### password_verify

Uma vez que você já tem o hash da senha do seu usuário salvo no banco, você precisa de uma forma de - no futuro - verificar se a senha que ele digitou (texto plano) <strong>combina</strong> com a o hash no seu banco de dados, e você fará isso usando o método [password_verify](http://php.net/password_verify).

Ele recebe dois parâmetros: a senha em texto plano e o hash da senha à ser comparada.

<div data-gist-id="5254589" data-gist-show-loading="false"></div>

## Conclusão

Essa nova API de senhas do PHP veio pra ficar, e já consigo ver vários frameworks adotando seu uso como padrão... talvez o único empecilho seja que é uma versão muito recente, e isso deve demorar um pouco.

De qualquer forma, se você já poder usar o <strong>PHP 5.5</strong>, não há por que não usar essas funções para garantir a segurança dos dados de seus usuários. :)

