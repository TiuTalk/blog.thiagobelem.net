---
layout: post
title: Removendo acentos de uma string – URLs amigáveis
excerpt: Veja o código de uma função que te ajudará a remover todos os acentos de
  uma string, podendo ser usada para gerar o slug em uma URL amigável. A função se
  baseia no código ASCII de cada caractere e por isso funciona em qualquer ambiente.

date: '2009-09-18 12:48:09 -0300'
categories:
- PHP
- Tutoriais
- SEO
tags:
- PHP
- SEO
- URLs Amigáveis
- Friendly URLs
- Slug
---
Hoje vou mostrar um código bem simples de uma função que eu criei para remover acentos de uma string...

Essa função é muito útil quando queremos trabalhar com URLs amigáveis e precisamos passar o <em><strong>slug</strong></em> (versão sem acento, espaço e caracteres especiais de uma string) para uma URL.

Veja como é simples usar a função:


<div data-gist-id="fa6e128d1bd5399f785c" data-gist-show-loading="false"></div>


<div data-gist-id="c413a5a08d9796147798" data-gist-show-loading="false"></div>

O segundo parâmetro da função é o caractere que será usado no slug substituindo espaços e caracteres especiais.

Vamos ao código da função:


<div data-gist-id="ddacd9c3889c78ff6014" data-gist-show-loading="false"></div>

Como vocês podem ver, no começo da função, entre as linhas 9 e 21 é onde definimos os códigos ASCII de cada acento/caractere especial que será convertido por sua letra... Depois nós rodamos um foreach e montamos as ERs (expressões regulares) para a substituição e fazemos toda a troca.

A vantagem de usar o código ASCII de cada caractere é que não importa em qual codificação seu arquivo está salvo, ela vai funcionar!

Caso você queira fazer a substituição em strings com mais de uma linha você precisa trocar onde tem "/i" por "/mi" nas linhas 26, 34 e 36.

Espero que tenham gostado! :)

<strong style="background: gray; color: yellow">Update:</strong> Se a sua string estiver codificada em UTF-8 você precisa usar a <strong>utf8_decode()</strong> antes de passar a string pra função.

