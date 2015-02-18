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
<p>Recentemente escrevi um pequeno artigo falando sobre as <a title="Criptografando senhas no PHP usando bcrypt (Blowfish)" href="/criptografando-senhas-no-php-usando-bcrypt-blowfish">vantagens e utilização do bcrypt</a> em projetos PHP.</p>
<p>E agora gostaria de mostrar pra vocês como é fácil hashear senhas usando o <strong>bcrypt</strong> dentro do <a href="/cakephp">CakePHP</a>.</p>
<h2>Versão 2.3+</h2>
<p>O <a href="https://github.com/cakephp/cakephp/blob/2.3/lib/Cake/Controller/Component/Auth/BlowfishAuthenticate.php" target="_blank">BlowfishAuthenticate</a> é um "objeto" de autenticação que está disponível apenas a partir da <a href="https://github.com/cakephp/cakephp/tree/2.3" target="_blank">versão 2.3 do CakePHP</a>, que hoje (20/11) ainda está em desenvolvimento.</p>
<h2>Habilitando e configurando o AuthComponent</h2>
<p>A primeira coisa que você precisa fazer, é configurar o <a href="http://book.cakephp.org/2.0/en/core-libraries/components/authentication.html" target="_blank">AuthComponent</a> pra usar o seu model de usuários e o <strong>BlowfishAuthenticate</strong> (ao invés do FormAuthenticate):</p>
<div data-gist-id="4119002" data-gist-show-loading="false"></div>
<p>Feito isso, o <strong>AuthComponent</strong> já vai <em>hashaear</em> a senha do usuário automáticamente usando <strong>bcrypt</strong> (baseado no algoritmo blowfish, por isso o nome).</p>
<p>Precisamos apenas mudar o nosso model de usuários para hashear a senha (também com bcrypt) antes de salvar a senha no banco:</p>
<div data-gist-id="4119081" data-gist-show-loading="false"></div>
<p>E está tudo pronto! Seu mecanismo de login está pronto pra ser usado.. :)</p>
<p>Não se esqueça de definir o tipo do seu campo de senha como <strong>CHAR(60)</strong>, pois esse é o tamanho do hash gerado pelo <strong>bcrypt</strong>.</p>
