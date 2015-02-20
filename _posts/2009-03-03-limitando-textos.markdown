---
layout: post
title: Limitando textos
wordpress_url: http://127.0.0.1/pessoal/blog/?p=7
date: '2009-03-03 02:18:15 -0300'
categories:
- PHP
- Artigos
tags: []
---
Espero que tenham gostado da nova aparência blog... Nesse novo blog eu vou postar alguns scripts prontos de PHP para vocês conhecerem novas formas de resolver os problemas do dia-a-adia.

Hoje, nesse post de abertura vou mostrar pra vocês como fazer um script que limita textos, muito usado quando você precisa exibir até X caracteres de uma frase e colocar um <span style="color: #ff6600;"><strong>...</span> depois.

Vamos ao script:

<div data-gist-id="5189beb43df6ab9615c3" data-gist-show-loading="false"></div>

E aí? O que me dizem? Bem legal né?

Pra usar essa função é bem simples, você só precisa definir dois dos três argumentos dela:

<div data-gist-id="68f3c83b4338aba3442e" data-gist-show-loading="false"></div>

O código está todo comentado, quem tiver alguma dúvida é só comentar e responderei assim que possível.

#### Documentação Oficial
* [strlen()](http://br.php.net/strlen) » Mede quantos caracteres tem uma string
* [trim()](http://br.php.net/trim) » Retira os espaços a esquerda e a direita de uma string
* [substr()](http://br.php.net/substr) » Corta uma string de X caracteres
* [strrpos()](http://br.php.net/strrpos) » Encontra a última posição (a partir do início da string) de um(ns) caractere(s) na string
