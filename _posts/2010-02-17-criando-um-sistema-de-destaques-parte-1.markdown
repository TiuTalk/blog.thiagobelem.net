---
layout: post
title: Criando um sistema de destaques – Parte 1
excerpt: Aprenda a criar um sistema de destaques, como esse usado aqui no blog, para
  o seu site. Na Parte 1 te ajudarei a montar o HTML/CSS do bloco de destaques.

date: '2010-02-17 17:03:20 -0200'
categories:
- HTML
- CSS
- Javascript
- jQuery
- Tutoriais
tags:
- jQuery
- jCycle
- HTML
- CSS
---
Fala gente!

Tenho recebido vários e-mails pedindo um tutorial ensinando a criar um sistema de destaques como esse que fiz na [home do blog](/).

O sistema de destaques que iremos criar não é específico para o WordPress e sim para qualquer site... Por isso não iremos criar um plugin de WordPress ou usar as funções do mesmo, faremos tudo com código puro.

O sistema de destaques que iremos criar terá a seguinte aparência:
[](/arquivos/2010/02/destaque.jpg)

<h3>A marcação XHTML</h3>
Antes de mais nada, precisamos criar o HTML do nosso bloco de destaque... Começamos com uma div e dentro dela criaremos uma lista (UL) com três itens (LI):


{% highlight html linenos %}
<!-- destaques -->
<div id="blocoDestaques">
	<ul>
		<li>...</li>
		<li>...</li>
		<li>...</li>
	</ul>
</div>
<!-- /destaques -->
{% endhighlight %}

Agora, dentro de cada item, vamos adicionar uma imagem (IMG) com um link (A):


{% highlight html linenos %}
		<li>
			<a href="#" title="Destaque 1">
				<img src="img/destaque1.jpg" alt="Destaque 1" />
			</a>
		</li>

		<li>
			<a href="#" title="Destaque 2">
				<img src="img/destaque2.jpg" alt="Destaque 2" />
			</a>
		</li>

		<li>
			<a href="#" title="Destaque 3">
				<img src="img/destaque3.jpg" alt="Destaque 3" />
			</a>
		</li>
{% endhighlight %}

Agora vamos inserir, após as imagens com links, parágrafos (P) contendo a descrição (ou titulo) do destaque e que também estão com link (A) para o destaque:


{% highlight html linenos %}
		<li>
			<a href="#" title="Destaque 1">
				<img src="img/destaque1.jpg" alt="Destaque 1" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 1 - Muita coisa boa!](#)

		</li>

		<li>
			<a href="#" title="Destaque 2">
				<img src="img/destaque2.jpg" alt="Destaque 2" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 2 - Nem tão bom assim...](#)

		</li>

		<li>
			<a href="#" title="Destaque 3">
				<img src="img/destaque3.jpg" alt="Destaque 3" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 3 - Agora sim... bem melhor!](#)

		</li>
{% endhighlight %}

Algumas pessoas podem ter pensado que errei ao criar dois links ao invés de inserir o parágrafo (P) dentro do primeiro link, após a imagem... Mas isso seria errado pois o link é um elemento de linha (<em>in-line</em>) e o parágrafo é um elemento de bloco (<em>block</em>) e nunca devemos inserir um elemento <em>block</em> dentro de um <em>in-line</em>.

Criamos também, antes de cada parágrafo, uma <strong>div.fundo</strong> vazia que será o fundo preto transparente da descrição/titulo de cada item.

Até agora nosso sistema de destaques ficou assim:
[](/arquivos/2010/02/destaque1.jpg)

Por fim, nós vamos inserir mais um link, dessa vez vazio, antes da lista (UL)... Esse link será a faixa [Destaques] que teremos sobre a imagem e a nossa marcação HTML está pronta:


{% highlight html linenos %}
<!-- destaques -->
<div id="blocoDestaques">

	[](#)

	<ul>
		<li>
			<a href="#" title="Destaque 1">
				<img src="img/destaque1.jpg" alt="Destaque 1" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 1 - Muita coisa boa!](#)

		</li>

		<li>
			<a href="#" title="Destaque 2">
				<img src="img/destaque2.jpg" alt="Destaque 2" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 2 - Nem tão bom assim...](#)

		</li>

		<li>
			<a href="#" title="Destaque 3">
				<img src="img/destaque3.jpg" alt="Destaque 3" />
			</a>
			<div class="fundo"><!--  --></div>
			[Destaque 3 - Agora sim... bem melhor!](#)

		</li>
	</ul>
</div>
<!-- /destaques -->
{% endhighlight %}

<h3>Melhorando a aparência (CSS)</h3>
Começaremos criando um arquivo CSS e nele definiremos que a lista (UL), os seus itens (LI) e as imagens não terão estilo, margem ou espaçamento:


{% highlight css linenos %}
#blocoDestaques ul,
#blocoDestaques ul li {
	list-style: none;
}

#blocoDestaques,
#blocoDestaques ul,
#blocoDestaques ul li,
#blocoDestaques ul li img {
	margin: 0px;
	padding: 0px;
}
{% endhighlight %}

Agora nós definiremos a altura e largura de todos os elementos usados no destaque:


{% highlight css linenos %}
#blocoDestaques ul,
#blocoDestaques ul li {
	list-style: none;
}

#blocoDestaques,
#blocoDestaques ul,
#blocoDestaques ul li,
#blocoDestaques ul li img {
	margin: 0px;
	padding: 0px;

	width: 600px;
	height: 215px;
}

#blocoDestaques ul li div.fundo {
	width: 600px;
	height: 40px;
}

#blocoDestaques a.faixa {
	width: 100px;
	height: 100px;
}
{% endhighlight %}

Agora nós definimos o posicionamento de todos os elementos, o estilo dos elementos que compoem a descrição de cada item e o fundo da faixa [Desaques] que ficará sobre as imagens:


{% highlight css linenos %}
#blocoDestaques {
	position: relative;
}

#blocoDestaques ul,
#blocoDestaques ul li {
	list-style: none;
}

#blocoDestaques,
#blocoDestaques ul,
#blocoDestaques ul li,
#blocoDestaques ul li img {
	margin: 0px;
	padding: 0px;

	width: 600px;
	height: 215px;
}

#blocoDestaques ul li {
	position: relative;
}

#blocoDestaques ul li div.fundo {
	width: 600px;
	height: 40px;

	position: absolute;
	bottom: 0px;
	left: 0px;

	background: black;
}

#blocoDestaques ul li p {
	margin: 0px;
	padding: 10px 15px;

	position: absolute;
	bottom: 0px;
	left: 0px;

	line-height: 20px;
	font-family: Verdana, Arial, sans-serif;
	font-size: 14px;
}

#blocoDestaques ul li p a {
	color: white;
	text-decoration: none;
}

#blocoDestaques a.faixa {
	width: 100px;
	height: 100px;

	position: absolute;
	top: -5px;
	left: -5px;
	z-index: 100;

	background: transparent url('../img/faixa.png') 0 0 no-repeat;
}
{% endhighlight %}

Por enquanto vamos ficar por aqui... O HTML e o CSS do sistema de destaques está pronto... Na [Parte 2](/criando-um-sistema-de-destaques-parte-2) falaremos sobre o efeito em jQuery que fará a transição dos slides e colocaremos o paginador.

Quer ver como ficou o sistema de destaques até agora? Veja [RAR](/exemplos/destaque/parte1.rar) com os arquivos.

Espero que tenham gostado! :)

