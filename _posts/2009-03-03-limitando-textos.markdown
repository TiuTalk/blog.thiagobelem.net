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

Hoje, nesse post de abertura vou mostrar pra vocês como fazer um script que limita textos, muito usado quando você precisa exibir até X caracteres de uma frase e colocar um <span style="color: #ff6600;"><strong>...</strong></span> depois.

Vamos ao script:

<div data-gist-id="5189beb43df6ab9615c3" data-gist-show-loading="false"></div>

E aí? O que me dizem? Bem legal né?

Pra usar essa função é bem simples, você só precisa definir dois dos três argumentos dela:

<div data-gist-id="68f3c83b4338aba3442e" data-gist-show-loading="false"></div>

O código está todo comentado, quem tiver alguma dúvida é só comentar e responderei assim que possível.

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função [strlen()](http://us2.php.net/strlen)</strong> » Mede quantos caracteres tem uma string</li>
<li><strong>Função [trim()](http://us2.php.net/trim)</strong> » Retira os espaços a esquerda e a direita de uma string</li>
<li><strong>Função [substr()](http://us.php.net/substr)</strong> » Corta uma string de X caracteres</li>
<li><strong>Função [strrpos()](http://us.php.net/strrpos)</strong> » Encontra a última posição (a partir do início da string) de um(ns) caractere(s) na string</li>
</ul>
