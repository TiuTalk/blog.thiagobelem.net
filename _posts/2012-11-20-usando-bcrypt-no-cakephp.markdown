---
layout: post
title: Usando bcrypt no CakePHP

date: '2012-11-20 14:43:21 -0200'
categories:
- Desenvolvimento
- PHP
- CakePHP
- Artigos
- Segurança
tags:
- CakePHP
- blowfish
- bcrypt
- auth
---
Recentemente escrevi um pequeno artigo falando sobre as [vantagens e utilização do bcrypt](/criptografando-senhas-no-php-usando-bcrypt-blowfish) em projetos PHP.

E agora gostaria de mostrar pra vocês como é fácil hashear senhas usando o <strong>bcrypt</strong> dentro do [CakePHP](/cakephp).

## Versão 2.3+
O [versão 2.3 do CakePHP](https://github.com/cakephp/cakephp/tree/2.3.0), que hoje (20/11) ainda está em desenvolvimento.

## Habilitando e configurando o AuthComponent
A primeira coisa que você precisa fazer, é configurar o [AuthComponent](http://book.cakephp.org/2.0/en/core-libraries/components/authentication.html) pra usar o seu model de usuários e o <strong>BlowfishAuthenticate</strong> (ao invés do FormAuthenticate):

<div data-gist-id="4119002" data-gist-show-loading="false"></div>

Feito isso, o <strong>AuthComponent</strong> já vai <em>hashaear</em> a senha do usuário automáticamente usando <strong>bcrypt</strong> (baseado no algoritmo blowfish, por isso o nome).

Precisamos apenas mudar o nosso model de usuários para hashear a senha (também com bcrypt) antes de salvar a senha no banco:

<div data-gist-id="4119081" data-gist-show-loading="false"></div>

E está tudo pronto! Seu mecanismo de login está pronto pra ser usado.. :)

Não se esqueça de definir o tipo do seu campo de senha como <strong>CHAR(60)</strong>, pois esse é o tamanho do hash gerado pelo <strong>bcrypt</strong>.

