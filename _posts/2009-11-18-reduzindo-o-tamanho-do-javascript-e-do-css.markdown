---
layout: post
status: publish
published: true
title: Reduzindo o tamanho do JavaScript e do CSS
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Veja como usar o <strong>Yahoo YUI Compressor</strong> para reduzir o tamanho
  dos seus arquivos de JavaScript e CSS e fazer com que o seu site carregue muito
  mais rápido.
wordpress_id: 654
wordpress_url: http://blog.thiagobelem.net/?p=654
date: '2009-11-18 13:07:14 -0200'
date_gmt: '2009-11-18 15:07:14 -0200'
categories:
- CSS
- Javascript
- Artigos
- Otimização
tags:
- jQuery
- CSS
- Minify
- Javascript
- Otimização
---
<p>Fala gente,</p>
<p>Essa semana estou trabalhando em um site todo em JavaScript/Ajax (sem nenhum carregamento de página) e o resultado disso é um site que carrega cerca de 10 arquivos JavaScript, entre plugins do <strong>jQuery</strong> e códigos "pessoais".</p>
<p>Qualquer um que entenda um pouquinho mais de web vai concordar comigo quando digo que isso vai deixar o site um pouco mais pesado e lento quanto for ao ar... [Resumindo] Isso acontece pois, quando o visitante tentar entrar no site e o mesmo começar a receber o HTML da página, vai receber também uma fila de processamento de 10 arquivos Javascript e o site vai demorar muito mais pra carregar.</p>
<p>Uma vez falei aqui sobre como você poderia otimizar o carregamento do seu site, e nesse post falei sobre o Minify (<a href="http://blog.thiagobelem.net/otimizando-o-seu-site-carregamento/" target="_blank" title="Otimizando o seu site – Carregamento">Otimizando o seu site – Carregamento</a>) e hoje vou falar sobre o <strong>Yahoo YUI Compressor</strong>, que faz a mesma coisa que o Minify só que não é dinâmicamente.</p>
<h3>Yahoo YUI Compressor</h3>
<p>O <a href="http://developer.yahoo.com/yui/compressor/" target="_blank" title="Yahoo YUI Compressor">Yahoo YUI Compressor</a> é um compressor/ofuscador de código criado pela Yahoo para reduzir a quantidade de "lixo" (compressor) e embaralhar (ofuscador) um código, deixando ele consideravelmente mais leve e rápido.</p>
<p>Trago pra vocês o link do <strong>Yahoo YUI Online Compressor</strong>: <a href="http://www.refresh-sf.com/yui/" target="_blank" title="Yahoo YUI Online Compressor">http://www.refresh-sf.com/yui/</a></p>
<p>Com ele você faz o Upload dos seus JS ou CSS e ele junta todos os arquivos em um só, bem mais level e limpo... Aí é só trocar todas as chamadas dos arquivos pela chamada (HTML) ao arquivo que ele criou e pronto! Seu site tá mais leve! :)</p>
<p>Veja um exemplo da compressão que ele faz em um CSS:</p>
<p>Antes:<br />
[code language="css"]html {<br />
	background-color: #f7f6f1;<br />
}</p>
<p>* html input,<br />
* html .widget {<br />
    border-color: #8cbdd5;<br />
}</p>
<p>textarea,<br />
input,<br />
select {<br />
	border-color: #dfdfdf;<br />
}</p>
<p>kbd,<br />
code {<br />
	background: #eaeaea;<br />
}</p>
<p>input[readonly] {<br />
	background-color: #eee;<br />
}</p>
<p>.find-box-search {<br />
	border-color: #dfdfdf;<br />
	background-color: #f1f1f1;<br />
}[/code]</p>
<p>Depois:<br />
[code language="css"]html{background-color:#f7f6f1;}* html input,* html .widget{border-color:#8cbdd5;}textarea,input,select{border-color:#dfdfdf;}kbd,code{background:#eaeaea;}input[readonly]{background-color:#eee;}.find-box-search{border-color:#dfdfdf;background-color:#f1f1f1;}[/code]</p>
<p>Espero que tenham gostado! :)</p>
