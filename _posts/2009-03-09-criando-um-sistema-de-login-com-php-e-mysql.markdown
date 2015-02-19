---
layout: post
title: Criando um sistema de login com PHP e MySQL
excerpt: Exemplo de script “pronto para uso” de um sistema de login completo para
  você usar no seu site, totalmente cofigurável!
image: /assets/images/login-php.jpeg
date: '2009-03-09 06:01:23 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags: []
---
Hoje vou ensinar a criar um sistema de login **simples** usando PHP e MySQL.

É recomendável que você já tenha um conhecimento prévio de HTML e, se possível, PHP e MySQL para tornar as coisas mais fáceis.

Nosso sistema será bem simples: um arquivo chamado `seguranca.php`, que deverá ser incluído no topo do seu site (em todas as páginas) e que faz a conexão com o banco de dados e que possui algumas funções usadas para redirecionar o visitante para o formulário de login (`login.php`) caso ele não esteja logado.

Vamos ao trabalho:

O que iremos definir primeiro é a tabela usada para armazenar os usuários do sistema:

<div data-gist-id="8b777d1e1bb1757b2839" data-gist-show-loading="false"></div>

Execute esse bloco SQL no seu banco de dados para criar a tabela usada pelo sistema.

Depois disso, vamos ao formulário de login que você colocará dentro de um arquivo chamado `login.php`:

<div data-gist-id="e1fe06e92040a664cc84" data-gist-show-loading="false"></div>

Esse formulário, com apenas dois campos, manda pra página `valida.php`, que é um pequeno PHP que receberá os dados enviados pelo formulário, fará a validação deles e mandará o visitante ou pra página interna (`index.php`) ou de volta pra página de login (`login.php`).

Esse é o codigo fonte do arquivo `valida.php`:

<div data-gist-id="4951b195d2d842458b4f" data-gist-show-loading="false"></div>

A estrutura do seu site, até esse ponto, deve estar dessa forma:

* `../pasta_do_seu_site/index.php` » Página intera a ser protegida
* `../pasta_do_seu_site/login.php` » Página com o formulário de login
* `../pasta_do_seu_site/valida.php` » Página que faz a validação dos dados do formulário

Agora vamos criar o arquivo `seguranca.php` na mesma pasta dos demais arquivos:

<div data-gist-id="3a893313bbdf0dafba4c" data-gist-show-loading="false"></div>

Não vou poder explicar todas as funções do arquivo pq é muita coisa.. Mas todas elas estão devidamente comentadas e documentadas... É só olhar.

Com esse arquivos nós já nos conectamos automaticamente ao servidor MySQL, então se você usar outra forma pra fazer a conexão, vá na parte de configurações do `seguranca.php` e defina a variável `$_SG['conectaServidor']` pra falso (<em>false</em>). O mesmo acontece pra sessão com a variável `$_SG['abreSessao']`.

Agora é só incluir essas linhas no topo de cada arquivo que deverá ter o acesso restrito:

<div data-gist-id="250cd6636b8dedcedf97" data-gist-show-loading="false"></div>

Quando vocês quiserem exibir o nome do usuário logado, é só fazer isso:

<div data-gist-id="d2e34c4cb210014ca972" data-gist-show-loading="false"></div>

Veja mais sobre escrever e pegar valores da sessão (coisa que acontece muito nesse sistema de login) no tópico [Aprendendo a usar sessões no PHP](/aprendendo-a-usar-sessoes-no-php).

Viram como é fácil?

Pra quem quiser um tutorial mais explicado e detalhado recomendo: [Como criar um Sistema de Login com Níveis de Permissão](/como-criar-um-sistema-de-login-com-niveis-de-permissao) (passo-a-passo).

> **Nota:** Alguns de vocês devem ter notado que durante essa semana, no post [Criando Sistemas Seguros](/criando-sistemas-seguros-parte-1), falei sobre **não usar** nomes óbvios para tabelas de usuários. Mas esse exemplo é apenas explicativo, você pode mudar o nome da tabela de usuários se preferir e depois é só alterar a variável no bloco de configurações dentro do `seguranca.php`.

--

Veja [aqui](/criando-um-sistema-de-logins-com-classe-no-php-parte-1) como criar um **sistema de login usando classes** (Orientação a Objetos) e que funciona no PHP 4 e PHP 5.

