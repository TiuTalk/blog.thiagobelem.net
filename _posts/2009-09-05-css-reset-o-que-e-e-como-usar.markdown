---
layout: post
title: CSS Reset – O que é e como usar?
excerpt: Aprenda como funciona, como usar, pra que serve e o que é o CSS Reset, uma
  ótima artimanha para ser usada em todos os seus sites e garantir o básico para um
  site que seja igual em todos os navegadores.

date: '2009-09-05 00:03:57 -0300'
categories:
- CSS
- Artigos
- Otimização
tags:
- CSS
- CSS Reset
---
Hoje vou falar sobre uma coisa simples, rápida e MUUITO útil... o <strong>CSS Reset</strong> ou <strong>CSS Reseter</strong>.

Há um grande problema quando implementamos um layout em HTML e CSS e vamos testar em outros browsers como o Internet Explorer ou Safari... Alguns elementos não se comportam da mesma forma, mesmo que esse comportamento não tenha sido definido/sobrescrito por você... por exemplo o H1, H2 e H3... Eles têm tamanhos diferentes em cada browser, mesmo usando a mesma fonte eles vão aparecer - se você não definir esse tamanho - com tamanhos diferentes.

### O que é?
O CSS Reset é - basicamente - um arquivo que "limpa" os estilos padrões de todos os elementos HTML que já possuem uma formatação padrão. Ele tira cores, tamanhos de fonte, <em>margins</em>, <em>paddins</em>, efeitos e decorações... Quase tudo de quase todos os elementos vira "padrão", como um texto sem formatação/alteração nenhuma.

### Como usar?
Da forma mais simples do mundo: inserindo o arquivo no seu site como um CSS normal, antes de qualquer outro CSS que seu site usar.

Se você inserir em um site pronto você pode ver seu site se desfigurar todo, isso vai significar que você se baseou em estilos padrões de alguns elementos, o que é errado... Já que esse estilo pode mudar entre navegadores/futuras versões.

É altamente recomendável que você insira/use esse arquivo sempre que for começar a implementar um site. :)

### E como é esse arquivo?
Existem vários <strong>CSS Reset</strong> rolando pela Internet... Todos funcionam da mesma forma mas alguns atingem mais elementos que outros... Mas teoricamente não há diferença.

Esse aqui é o que eu uso no meu [site pessoal](http://thiagobelem.net/):


<div data-gist-id="22fbd29a86b3380189f2" data-gist-show-loading="false"></div>

Se você preferir, existe um CSS da Yahoo mesmo, chamado de YUI CSS Reset:
[http://yui.yahooapis.com/2.7.0/build/reset/reset-min.css](http://yui.yahooapis.com/2.7.0/build/reset/reset-min.css)


<div data-gist-id="fcef3c2d1f02dc8b380f" data-gist-show-loading="false"></div>

E existe um <strong>CSS Reset Reloaded</strong> criado por [Eric Meyer](http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/):

<div data-gist-id="2560c87d05fb3c96a538" data-gist-show-loading="false"></div>

Espero que tenham gostado! :)

