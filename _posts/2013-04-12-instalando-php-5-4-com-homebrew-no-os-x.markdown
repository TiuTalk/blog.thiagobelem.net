---
layout: post
status: publish
published: true
title: Instalando PHP 5.4 com Homebrew no OS X
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 3685
wordpress_url: http://blog.thiagobelem.net/?p=3685
date: '2013-04-12 14:16:12 -0300'
date_gmt: '2013-04-12 17:16:12 -0300'
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
<p>Atualmente estou usando Mac durante alguns dias da semana, e como pretendo voltar a escrever artigos para o blog, precisei instalar o <a title="PHP 5.4 – Novidades e novas funcionalidades" href="http://blog.thiagobelem.net/php-5-4-novas-funcionalidades/">PHP 5.4</a> no OS X mas não queria usar nenhum pacotão como o <a href="http://www.mamp.info/">Mamp</a>.</p>
<p>Como estou usando o <a href="http://mxcl.github.io/homebrew/">Brew</a> para gerenciamento e instalação de pacotes, preferi não <a title="Instalando o PHP 5.3+ no Ubuntu" href="http://blog.thiagobelem.net/instalando-o-php-5-3-3-no-ubuntu-10-10-maverick/">compilar o PHP</a> (manualmente) e busquei um solução que fizesse uso dele.</p>
<p>Outro ponto é que não queria instalar o Apache pois o PHP 5.4 já tem um <a title="PHP 5.4 – Servidor interno" href="http://blog.thiagobelem.net/php-5-4-servidor-interno/">servidor interno</a> que serve muito bem para o meu propósito.</p>
<p>Curiosamente, a solução que encontrei faz uso do repositório <a href="https://github.com/josegonzalez/homebrew-php">homebrew-php</a>, de um dos mantenedores do <strong>CakePHP</strong> :)</p>
<h2>Instalando o PHP 5.4 com Homebrew</h2>
<p>[gist id=5373512]</p>
<p>E isso é tudo que você precisa.. depois de instalado você pode instalar alguns outros pacotes interessantes:</p>
<p>[gist id=5373526]</p>
<p>Depois disso já tenho a versão mais recente do PHP funcionando:</p>
<p>[gist id=5373586]</p>
<p>Espero que tenha ajudado! :)</p>
