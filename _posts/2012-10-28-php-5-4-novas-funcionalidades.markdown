---
layout: post
title: PHP 5.4 - Novidades e novas funcionalidades
excerpt: O PHP 5.4 traz vários novos recursos, funcionalidades e  melhorias de sintaxe.
  Saiba o que há de novo!

date: '2012-10-28 21:07:18 -0200'
categories:
- Desenvolvimento
- PHP
- Artigos
- Orientação a objetos
tags:
- PHP 5.4
---
Eu sei que o assunto não é novo, já que o [PHP 5.4](http://php.net/releases/5_4_0.php) foi lançado <strong>01 de março de 2012</strong> (já já vai fazer um ano!), mas muita gente ainda não sabe o que há de novo e - talvez por isso - ainda não instalou a versão mais recente.

Por isso nesse post resolvi mostrar um pouco de cada uma das <strong>novidades da versão 5.4</strong>.

Lista oficial de novidades: [http://www.php.net/manual/en/migration54.new-features.php](http://www.php.net/manual/en/migration54.new-features.php)

## O que há de novo? Por que eu deveria atualizar?
Antes de citar qualquer motivo específico, digo o motivo mais óbvio de todos: segurança e performance!

#### Segurança e Performance
Toda nova versão (seja ela do WordPress, Java ou PHP) traz melhorias significativas à segurança e performance do seu sistema/aplicativo... só isso deveria ser motivo pra você se dar ao trabalho de <strong>manter tudo atualizado na última versão, sempre</strong>. Não atualizar significa assinar o <em>mea culpa</em> caso seu sistema seja invadido.

## Traits (ou características)
Traits são mecanismos que ajudam (e muito) a <strong>reutilização de código</strong>, e servem perfeitamente para resolver o problema da falta de <strong>herança múltipla</strong>.

Veja mais sobre Traits num outro artigo meu, aqui: [/php-5-4-traits/](/php-5-4-traits)

## Nova sintaxe para arrays
Antigamente você criava arrays assim:

<div data-gist-id="3970221" data-gist-show-loading="false"></div>

Agora você pode criá-los com uma sintaxe bem mais limpa:

<div data-gist-id="3970226" data-gist-show-loading="false"></div>

O comportamento é exatamente o mesmo... E se você é como eu, pode ficar tranquilo que a sintaxe antiga continua funcionando. :)

## Function array dereferencing
Se você tem uma função/método que retora um array, você precisava colocar o resultado numa variável para poder acessar o índice:

<div data-gist-id="3970242" data-gist-show-loading="false"></div>

Agora você pode acessar o índice diretamente na chamada da função:

<div data-gist-id="3970245" data-gist-show-loading="false"></div>

Isso vale pra qualquer método ou função que retorne arrays!

## <?="Sempre disponível"?>
Se você não conhece, essa é a uma forma encurtada de imprimir algo em PHP:

<div data-gist-id="3970264" data-gist-show-loading="false"></div>

Porém essa sintaxe só funcionava (até antes da versão 5.4) caso a opção [short_open_tags](http://www.php.net/manual/en/ini.core.php#ini.short-open-tag) estivesse habilitada no php.ini, agora essa sintaxe estará disponível independente das suas configurações no php.ini.

## Acesso durante o instanciamento
Muito parecido com o acesso à índices de arrays, esse novo recurso permite que você acesse atributos e métodos de objetos que estão sendo instanciados, durante o instanciamento:

<div data-gist-id="3970279" data-gist-show-loading="false"></div>

## Servidor [de desenvolviemento] embutido
E por último, mas não menos importante, o PHP 5.4 nos permite usar um servidor embutido para teste e desenvolvimento local, não há mais a necessidade de usar o Apache!

Em breve, farei um artigo falando apenas sobre esse recurso, aguarde.

## Conclusão
Espero que vocês tenham gostado dessa lista de novidades que você encontra no PHP 5.4... E se você ainda não atualizou seu(s) servidor(es), o que está esperando!? :)

