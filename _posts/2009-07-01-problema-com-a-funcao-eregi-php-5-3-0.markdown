---
layout: post
title: Problema com a função ereg(i) – PHP 5.3.0
excerpt: Aprenda a converter ereg e eregi em sua versão Perl (usando o preg_match)
  e evite erros de função depreciada no PHP 5.3.0

date: '2009-07-01 11:54:54 -0300'
categories:
- PHP
- Artigos
- Segurança
tags:
- PHP
- PHP 5.3
- ereg
- preg
- Erro
---
Quem atualizou o PHP para a versão 5.3.0 (<span class="removed_link" title="/noticias/php-5-3-0-lancado/">lançada ontem</span>) pode ter encontrado inúmeros erros de funções que foram depreciadas (ou <em>deprecated</em>).

Essas funções são usadas para testar a presença de uma expressão regular dentro de uma string.

Vim falar sobre a função ereg e eregi que são muito usadas (pelo menos por mim) e que precisam ser trocadas por uma versão em Pearl.

Antigamente faríamos assim:


<div data-gist-id="9f9701b4afb4135e4ba1" data-gist-show-loading="false"></div>

Agora, com o PHP 5.3.0 precisamos usar a função <strong>preg_match()</strong>, dessa forma:


<div data-gist-id="4e6c7ffdb553c418ebf1" data-gist-show-loading="false"></div>

Repare que entrou uma barra (pra direita) antes e depois da expressão regular.

### eregi()
E pra quem usava o eregi, é só adicionar um "i" no final da expressão regular, dessa forma:


<div data-gist-id="aa6695df88c53771e26e" data-gist-show-loading="false"></div>

--

Espero que tenham gostado desse pequeno "atalho" :P

