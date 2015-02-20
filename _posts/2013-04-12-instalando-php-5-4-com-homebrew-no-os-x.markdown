---
layout: post
title: Instalando PHP 5.4 com Homebrew no OS X

date: '2013-04-12 14:16:12 -0300'
categories:
- Desenvolvimento
- PHP
- Tutoriais
- Servidores
tags:
- PHP
- instalação
- PHP 5.4
- mac
- os x
- homebrew
---
Atualmente estou usando Mac durante alguns dias da semana, e como pretendo voltar a escrever artigos para o blog, precisei instalar o [Mamp](http://www.mamp.info/).

Como estou usando o [compilar o PHP](/instalando-o-php-5-3-3-no-ubuntu-10-10-maverick) (manualmente) e busquei um solução que fizesse uso dele.

Outro ponto é que não queria instalar o Apache pois o PHP 5.4 já tem um [servidor interno](/php-5-4-servidor-interno) que serve muito bem para o meu propósito.

Curiosamente, a solução que encontrei faz uso do repositório [homebrew-php](https://github.com/josegonzalez/homebrew-php), de um dos mantenedores do <strong>CakePHP</strong> :)

## Instalando o PHP 5.4 com Homebrew

<div data-gist-id="5373512" data-gist-show-loading="false"></div>

E isso é tudo que você precisa.. depois de instalado você pode instalar alguns outros pacotes interessantes:

<div data-gist-id="5373526" data-gist-show-loading="false"></div>

Depois disso já tenho a versão mais recente do PHP funcionando:

<div data-gist-id="5373586" data-gist-show-loading="false"></div>

Espero que tenha ajudado! :)

