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

<h3>O que é?</h3>
O CSS Reset é - basicamente - um arquivo que "limpa" os estilos padrões de todos os elementos HTML que já possuem uma formatação padrão. Ele tira cores, tamanhos de fonte, <em>margins</em>, <em>paddins</em>, efeitos e decorações... Quase tudo de quase todos os elementos vira "padrão", como um texto sem formatação/alteração nenhuma.

<h3>Como usar?</h3>
Da forma mais simples do mundo: inserindo o arquivo no seu site como um CSS normal, antes de qualquer outro CSS que seu site usar.

Se você inserir em um site pronto você pode ver seu site se desfigurar todo, isso vai significar que você se baseou em estilos padrões de alguns elementos, o que é errado... Já que esse estilo pode mudar entre navegadores/futuras versões.

É altamente recomendável que você insira/use esse arquivo sempre que for começar a implementar um site. :)

<h3>E como é esse arquivo?</h3>
Existem vários <strong>CSS Reset</strong> rolando pela Internet... Todos funcionam da mesma forma mas alguns atingem mais elementos que outros... Mas teoricamente não há diferença.

Esse aqui é o que eu uso no meu <a href="http://thiagobelem.net/" target="_blank">site pessoal</a>:


[code language="css"]
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

:focus {
	outline: 0;
}

ins {
	text-decoration: none;
}
del {
	text-decoration: line-through;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
[/code]

Se você preferir, existe um CSS da Yahoo mesmo, chamado de YUI CSS Reset:
<a href="http://yui.yahooapis.com/2.7.0/build/reset/reset-min.css" target="_blank">http://yui.yahooapis.com/2.7.0/build/reset/reset-min.css</a>


[code language="css"]
/*
Copyright (c) 2009, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 2.7.0
*/
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea ,p,blockquote,th,td {
	margin:0;
	padding:0;
}
table {
	border-collapse:collapse;
	border-spacing:0;
}
fieldset,img {
	border:0;
}
address,caption,cite,code,dfn,em,strong,th,var {
	font-style:normal;
	font-weight:normal;
}
ol,ul {
	list-style:none;
}
caption,th {
	text-align:left;
}
h1,h2,h3,h4,h5,h6 {
	font-size:100%;
	font-weight:normal;
}
q:before,q:after {
	content:'';
}
abbr,acronym {
	border:0;
}
[/code]

E existe um <strong>CSS Reset Reloaded</strong> criado por <a href="http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/" target="_blank">Eric Meyer</a>:
[code language="css"]
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-weight: inherit;
	font-style: inherit;
	font-size: 100%;
	font-family: inherit;
	vertical-align: baseline;
}
/* remember to define focus styles! */
:focus {
	outline: 0;
}
body {
	line-height: 1;
	color: black;
	background: white;
}
ol, ul {
	list-style: none;
}
/* tables still need 'cellspacing="0"' in the markup */
table {
	border-collapse: separate;
	border-spacing: 0;
}
caption, th, td {
	text-align: left;
	font-weight: normal;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: "";
}
blockquote, q {
	quotes: "" "";
}
[/code]

Espero que tenham gostado! :)

