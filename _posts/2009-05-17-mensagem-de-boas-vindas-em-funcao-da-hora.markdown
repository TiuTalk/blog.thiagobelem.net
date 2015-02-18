---
layout: post
status: publish
published: true
title: Mensagem de boas-vindas em função da hora
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: 'Aprenda a fazer uma mensagem de boas-vindas que muda em função da hora:
  "Bom dia", "Boa tarde", "Boa noite" e "Boa madrugada" :)'
wordpress_id: 490
wordpress_url: http://blog.thiagobelem.net/?p=490
date: '2009-05-17 23:59:58 -0300'
date_gmt: '2009-05-18 02:59:58 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Semana passada algumas pessoas me perguntaram no MSN como poderiam fazer uma mensagem de boas-vindas em função da hora...</p>
<p>Isso é muito simples, veja um exemplo:</p>
<p>[code='php']<?php</p>
<p>// Formato 24 horas (de 1 a 24)<br />
$hora = date('G');</p>
<p>if (($hora >= 0) AND ($hora < 6)) {<br />
$mensagem = "Boa madrugada";<br />
} else if (($hora >= 6) AND ($hora < 12)) {<br />
$mensagem = "Bom dia";<br />
} else if (($hora >= 12) AND ($hora < 18)) {<br />
$mensagem = "Boa tarde";<br />
} else {<br />
$mensagem = "Boa noite";<br />
}</p>
<p>echo $mensagem;</p>
<p>?>[/code]</p>
<p>Viram?</p>
<p>Reparem que no último caso não precisei colocar <strong><span style="color: #000000;">} else if (($hora &gt;= 18) AND ($hora &lt;= 24)) {</span></strong> pois, se o valor não validou nenhuma das outras condições (que foram testadas antes) essa ultima condição está implícita... Seria desperdício de código e recursos fazer mais uma verificação.</p>
<p>Com uma pequena seqüência de if/else if/else você consegue mudar o valor de uma variável em função da hora atual do servidor e exibir a sua mensagem de boas-vindas!</p>
<p>Esse também é um bom exemplo de condições múltiplas.</p>
<p>Espero que tenham gostado :)</p>
