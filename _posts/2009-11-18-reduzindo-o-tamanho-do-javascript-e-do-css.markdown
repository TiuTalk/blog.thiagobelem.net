---
layout: post
title: Reduzindo o tamanho do JavaScript e do CSS
excerpt: Veja como usar o <strong>Yahoo YUI Compressor</strong> para reduzir o tamanho
  dos seus arquivos de JavaScript e CSS e fazer com que o seu site carregue muito
  mais rápido.

date: '2009-11-18 13:07:14 -0200'
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
Fala gente,

Essa semana estou trabalhando em um site todo em JavaScript/Ajax (sem nenhum carregamento de página) e o resultado disso é um site que carrega cerca de 10 arquivos JavaScript, entre plugins do <strong>jQuery</strong> e códigos "pessoais".

Qualquer um que entenda um pouquinho mais de web vai concordar comigo quando digo que isso vai deixar o site um pouco mais pesado e lento quanto for ao ar... [Resumindo] Isso acontece pois, quando o visitante tentar entrar no site e o mesmo começar a receber o HTML da página, vai receber também uma fila de processamento de 10 arquivos Javascript e o site vai demorar muito mais pra carregar.

Uma vez falei aqui sobre como você poderia otimizar o carregamento do seu site, e nesse post falei sobre o Minify ([Otimizando o seu site – Carregamento](/otimizando-o-seu-site-carregamento)) e hoje vou falar sobre o <strong>Yahoo YUI Compressor</strong>, que faz a mesma coisa que o Minify só que não é dinâmicamente.

<h3>Yahoo YUI Compressor</h3>
O [Yahoo YUI Compressor](http://developer.yahoo.com/yui/compressor/) é um compressor/ofuscador de código criado pela Yahoo para reduzir a quantidade de "lixo" (compressor) e embaralhar (ofuscador) um código, deixando ele consideravelmente mais leve e rápido.

Trago pra vocês o link do <strong>Yahoo YUI Online Compressor</strong>: [http://www.refresh-sf.com/yui/](http://www.refresh-sf.com/yui/)

Com ele você faz o Upload dos seus JS ou CSS e ele junta todos os arquivos em um só, bem mais level e limpo... Aí é só trocar todas as chamadas dos arquivos pela chamada (HTML) ao arquivo que ele criou e pronto! Seu site tá mais leve! :)

Veja um exemplo da compressão que ele faz em um CSS:

Antes:
{% highlight css linenos %}
html {
	background-color: #f7f6f1;
}

* html input,
* html .widget {
    border-color: #8cbdd5;
}

textarea,
input,
select {
	border-color: #dfdfdf;
}

kbd,
code {
	background: #eaeaea;
}

input[readonly] {
	background-color: #eee;
}

.find-box-search {
	border-color: #dfdfdf;
	background-color: #f1f1f1;
}
{% endhighlight %}

Depois:
{% highlight css linenos %}
html{background-color:#f7f6f1;}* html input,* html .widget{border-color:#8cbdd5;}textarea,input,select{border-color:#dfdfdf;}kbd,code{background:#eaeaea;}input[readonly]{background-color:#eee;}.find-box-search{border-color:#dfdfdf;background-color:#f1f1f1;}
{% endhighlight %}

Espero que tenham gostado! :)

