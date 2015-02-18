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
<p>Hoje vou falar sobre uma coisa simples, rápida e MUUITO útil... o <strong>CSS Reset</strong> ou <strong>CSS Reseter</strong>.</p>
<p>Há um grande problema quando implementamos um layout em HTML e CSS e vamos testar em outros browsers como o Internet Explorer ou Safari... Alguns elementos não se comportam da mesma forma, mesmo que esse comportamento não tenha sido definido/sobrescrito por você... por exemplo o H1, H2 e H3... Eles têm tamanhos diferentes em cada browser, mesmo usando a mesma fonte eles vão aparecer - se você não definir esse tamanho - com tamanhos diferentes.</p>
<h3>O que é?</h3>
<p>O CSS Reset é - basicamente - um arquivo que "limpa" os estilos padrões de todos os elementos HTML que já possuem uma formatação padrão. Ele tira cores, tamanhos de fonte, <em>margins</em>, <em>paddins</em>, efeitos e decorações... Quase tudo de quase todos os elementos vira "padrão", como um texto sem formatação/alteração nenhuma.</p>
<h3>Como usar?</h3>
<p>Da forma mais simples do mundo: inserindo o arquivo no seu site como um CSS normal, antes de qualquer outro CSS que seu site usar.</p>
<p>Se você inserir em um site pronto você pode ver seu site se desfigurar todo, isso vai significar que você se baseou em estilos padrões de alguns elementos, o que é errado... Já que esse estilo pode mudar entre navegadores/futuras versões.</p>
<p>É altamente recomendável que você insira/use esse arquivo sempre que for começar a implementar um site. :)</p>
<h3>E como é esse arquivo?</h3>
<p>Existem vários <strong>CSS Reset</strong> rolando pela Internet... Todos funcionam da mesma forma mas alguns atingem mais elementos que outros... Mas teoricamente não há diferença.</p>
<p>Esse aqui é o que eu uso no meu <a href="http://thiagobelem.net/" target="_blank">site pessoal</a>:</p>
<p>[code language="css"]html, body, div, span, applet, object, iframe,<br />
h1, h2, h3, h4, h5, h6, p, blockquote, pre,<br />
a, abbr, acronym, address, big, cite, code,<br />
del, dfn, em, font, img, ins, kbd, q, s, samp,<br />
small, strike, strong, sub, sup, tt, var,<br />
b, u, i, center,<br />
dl, dt, dd, ol, ul, li,<br />
fieldset, form, label, legend,<br />
table, caption, tbody, tfoot, thead, tr, th, td {<br />
	margin: 0;<br />
	padding: 0;<br />
	border: 0;<br />
	outline: 0;<br />
	font-size: 100%;<br />
	vertical-align: baseline;<br />
	background: transparent;<br />
}<br />
body {<br />
	line-height: 1;<br />
}<br />
ol, ul {<br />
	list-style: none;<br />
}<br />
blockquote, q {<br />
	quotes: none;<br />
}<br />
blockquote:before, blockquote:after,<br />
q:before, q:after {<br />
	content: '';<br />
	content: none;<br />
}</p>
<p>:focus {<br />
	outline: 0;<br />
}</p>
<p>ins {<br />
	text-decoration: none;<br />
}<br />
del {<br />
	text-decoration: line-through;<br />
}</p>
<p>table {<br />
	border-collapse: collapse;<br />
	border-spacing: 0;<br />
}[/code]<br />
<br />
Se você preferir, existe um CSS da Yahoo mesmo, chamado de YUI CSS Reset:<br />
<a href="http://yui.yahooapis.com/2.7.0/build/reset/reset-min.css" target="_blank">http://yui.yahooapis.com/2.7.0/build/reset/reset-min.css</a></p>
<p>[code language="css"]/*<br />
Copyright (c) 2009, Yahoo! Inc. All rights reserved.<br />
Code licensed under the BSD License:<br />
http://developer.yahoo.net/yui/license.txt<br />
version: 2.7.0<br />
*/<br />
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea ,p,blockquote,th,td {<br />
	margin:0;<br />
	padding:0;<br />
}<br />
table {<br />
	border-collapse:collapse;<br />
	border-spacing:0;<br />
}<br />
fieldset,img {<br />
	border:0;<br />
}<br />
address,caption,cite,code,dfn,em,strong,th,var {<br />
	font-style:normal;<br />
	font-weight:normal;<br />
}<br />
ol,ul {<br />
	list-style:none;<br />
}<br />
caption,th {<br />
	text-align:left;<br />
}<br />
h1,h2,h3,h4,h5,h6 {<br />
	font-size:100%;<br />
	font-weight:normal;<br />
}<br />
q:before,q:after {<br />
	content:'';<br />
}<br />
abbr,acronym {<br />
	border:0;<br />
}<br />
[/code]</p>
<p>E existe um <strong>CSS Reset Reloaded</strong> criado por <a href="http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/" target="_blank">Eric Meyer</a>:<br />
[code language="css"]html, body, div, span, applet, object, iframe,<br />
h1, h2, h3, h4, h5, h6, p, blockquote, pre,<br />
a, abbr, acronym, address, big, cite, code,<br />
del, dfn, em, font, img, ins, kbd, q, s, samp,<br />
small, strike, strong, sub, sup, tt, var,<br />
dl, dt, dd, ol, ul, li,<br />
fieldset, form, label, legend,<br />
table, caption, tbody, tfoot, thead, tr, th, td {<br />
	margin: 0;<br />
	padding: 0;<br />
	border: 0;<br />
	outline: 0;<br />
	font-weight: inherit;<br />
	font-style: inherit;<br />
	font-size: 100%;<br />
	font-family: inherit;<br />
	vertical-align: baseline;<br />
}<br />
/* remember to define focus styles! */<br />
:focus {<br />
	outline: 0;<br />
}<br />
body {<br />
	line-height: 1;<br />
	color: black;<br />
	background: white;<br />
}<br />
ol, ul {<br />
	list-style: none;<br />
}<br />
/* tables still need 'cellspacing=&quot;0&quot;' in the markup */<br />
table {<br />
	border-collapse: separate;<br />
	border-spacing: 0;<br />
}<br />
caption, th, td {<br />
	text-align: left;<br />
	font-weight: normal;<br />
}<br />
blockquote:before, blockquote:after,<br />
q:before, q:after {<br />
	content: &quot;&quot;;<br />
}<br />
blockquote, q {<br />
	quotes: &quot;&quot; &quot;&quot;;<br />
}[/code]</p>
<p>Espero que tenham gostado! :)</p>
