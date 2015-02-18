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
<p>Fala gente!</p>
<p>Tenho recebido vários e-mails pedindo um tutorial ensinando a criar um sistema de destaques como esse que fiz na <a href="/" title="Thiago Belem / Blog">home do blog</a>.</p>
<p>O sistema de destaques que iremos criar não é específico para o WordPress e sim para qualquer site... Por isso não iremos criar um plugin de WordPress ou usar as funções do mesmo, faremos tudo com código puro.</p>
<p>O sistema de destaques que iremos criar terá a seguinte aparência:
<a href="/arquivos/2010/02/destaque.jpg"><img src="http://blog.thiagobelem.net/arquivos/2010/02/destaque-300x114.jpg" alt="" title="Sistema de Destaques" width="300" height="114" class="aligncenter size-medium wp-image-709" /></a></p>
<h3>A marcação XHTML</h3>
<p>Antes de mais nada, precisamos criar o HTML do nosso bloco de destaque... Começamos com uma div e dentro dela criaremos uma lista (UL) com três itens (LI):</p>
<p>[code language="html"]
<!-- destaques -->
<div id="blocoDestaques">
	<ul>
		<li>...</li>
		<li>...</li>
		<li>...</li>
	</ul>
</div>
<!-- /destaques -->
[/code]</p>
<p>Agora, dentro de cada item, vamos adicionar uma imagem (IMG) com um link (A):</p>
<p>[code language="html" firstline="4"]
		<li>
			<a href="#" title="Destaque 1">
				<img src="img/destaque1.jpg" alt="Destaque 1" />
			</a>
		</li></p>
<p>		<li>
			<a href="#" title="Destaque 2">
				<img src="img/destaque2.jpg" alt="Destaque 2" />
			</a>
		</li></p>
<p>		<li>
			<a href="#" title="Destaque 3">
				<img src="img/destaque3.jpg" alt="Destaque 3" />
			</a>
		</li>
[/code]</p>
<p>Agora vamos inserir, após as imagens com links, parágrafos (P) contendo a descrição (ou titulo) do destaque e que também estão com link (A) para o destaque:</p>
<p>[code language="html" firstline="4"]
		<li>
			<a href="#" title="Destaque 1">
				<img src="img/destaque1.jpg" alt="Destaque 1" />
			</a>
			<div class="fundo"><!--  --></div>
			<p><a href="#" title="Destaque 1">Destaque 1 - Muita coisa boa!</a></p>
		</li></p>
<p>		<li>
			<a href="#" title="Destaque 2">
				<img src="img/destaque2.jpg" alt="Destaque 2" />
			</a>
			<div class="fundo"><!--  --></div>
			<p><a href="#" title="Destaque 2">Destaque 2 - Nem tão bom assim...</a></p>
		</li></p>
<p>		<li>
			<a href="#" title="Destaque 3">
				<img src="img/destaque3.jpg" alt="Destaque 3" />
			</a>
			<div class="fundo"><!--  --></div>
			<p><a href="#" title="Destaque 3">Destaque 3 - Agora sim... bem melhor!</a></p>
		</li>
[/code]</p>
<p>Algumas pessoas podem ter pensado que errei ao criar dois links ao invés de inserir o parágrafo (P) dentro do primeiro link, após a imagem... Mas isso seria errado pois o link é um elemento de linha (<em>in-line</em>) e o parágrafo é um elemento de bloco (<em>block</em>) e nunca devemos inserir um elemento <em>block</em> dentro de um <em>in-line</em>.</p>
<p>Criamos também, antes de cada parágrafo, uma <strong>div.fundo</strong> vazia que será o fundo preto transparente da descrição/titulo de cada item.</p>
<p>Até agora nosso sistema de destaques ficou assim:
<a href="/arquivos/2010/02/destaque1.jpg"><img src="http://blog.thiagobelem.net/arquivos/2010/02/destaque1-230x300.jpg" alt="" title="Sistema de Destaques - 1ª Prévia" width="230" height="300" class="aligncenter size-medium wp-image-710" /></a></p>
<p>Por fim, nós vamos inserir mais um link, dessa vez vazio, antes da lista (UL)... Esse link será a faixa [Destaques] que teremos sobre a imagem e a nossa marcação HTML está pronta:</p>
<p>[code language="html"]
<!-- destaques -->
<div id="blocoDestaques"></p>
<p>	<a class="faixa" href="#" title=""><!-- --></a></p>
<p>	<ul>
		<li>
			<a href="#" title="Destaque 1">
				<img src="img/destaque1.jpg" alt="Destaque 1" />
			</a>
			<div class="fundo"><!--  --></div>
			<p><a href="#" title="Destaque 1">Destaque 1 - Muita coisa boa!</a></p>
		</li></p>
<p>		<li>
			<a href="#" title="Destaque 2">
				<img src="img/destaque2.jpg" alt="Destaque 2" />
			</a>
			<div class="fundo"><!--  --></div>
			<p><a href="#" title="Destaque 2">Destaque 2 - Nem tão bom assim...</a></p>
		</li></p>
<p>		<li>
			<a href="#" title="Destaque 3">
				<img src="img/destaque3.jpg" alt="Destaque 3" />
			</a>
			<div class="fundo"><!--  --></div>
			<p><a href="#" title="Destaque 3">Destaque 3 - Agora sim... bem melhor!</a></p>
		</li>
	</ul>
</div>
<!-- /destaques -->
[/code]</p>
<h3>Melhorando a aparência (CSS)</h3>
<p>Começaremos criando um arquivo CSS e nele definiremos que a lista (UL), os seus itens (LI) e as imagens não terão estilo, margem ou espaçamento:</p>
<p>[code language="css"]
#blocoDestaques ul,
#blocoDestaques ul li {
	list-style: none;
}</p>
<p>#blocoDestaques,
#blocoDestaques ul,
#blocoDestaques ul li,
#blocoDestaques ul li img {
	margin: 0px;
	padding: 0px;
}
[/code]</p>
<p>Agora nós definiremos a altura e largura de todos os elementos usados no destaque:</p>
<p>[code language="css"]
#blocoDestaques ul,
#blocoDestaques ul li {
	list-style: none;
}</p>
<p>#blocoDestaques,
#blocoDestaques ul,
#blocoDestaques ul li,
#blocoDestaques ul li img {
	margin: 0px;
	padding: 0px;</p>
<p>	width: 600px;
	height: 215px;
}</p>
<p>#blocoDestaques ul li div.fundo {
	width: 600px;
	height: 40px;
}</p>
<p>#blocoDestaques a.faixa {
	width: 100px;
	height: 100px;
}
[/code]</p>
<p>Agora nós definimos o posicionamento de todos os elementos, o estilo dos elementos que compoem a descrição de cada item e o fundo da faixa [Desaques] que ficará sobre as imagens:</p>
<p>[code language="css"]
#blocoDestaques {
	position: relative;
}</p>
<p>#blocoDestaques ul,
#blocoDestaques ul li {
	list-style: none;
}</p>
<p>#blocoDestaques,
#blocoDestaques ul,
#blocoDestaques ul li,
#blocoDestaques ul li img {
	margin: 0px;
	padding: 0px;</p>
<p>	width: 600px;
	height: 215px;
}</p>
<p>#blocoDestaques ul li {
	position: relative;
}</p>
<p>#blocoDestaques ul li div.fundo {
	width: 600px;
	height: 40px;</p>
<p>	position: absolute;
	bottom: 0px;
	left: 0px;</p>
<p>	background: black;
}</p>
<p>#blocoDestaques ul li p {
	margin: 0px;
	padding: 10px 15px;</p>
<p>	position: absolute;
	bottom: 0px;
	left: 0px;</p>
<p>	line-height: 20px;
	font-family: Verdana, Arial, sans-serif;
	font-size: 14px;
}</p>
<p>#blocoDestaques ul li p a {
	color: white;
	text-decoration: none;
}</p>
<p>#blocoDestaques a.faixa {
	width: 100px;
	height: 100px;</p>
<p>	position: absolute;
	top: -5px;
	left: -5px;
	z-index: 100;</p>
<p>	background: transparent url('../img/faixa.png') 0 0 no-repeat;
}
[/code]</p>
<p>Por enquanto vamos ficar por aqui... O HTML e o CSS do sistema de destaques está pronto... Na <a href="/criando-um-sistema-de-destaques-parte-2" title="Criando um sistema de destaques - Parte 2">Parte 2</a> falaremos sobre o efeito em jQuery que fará a transição dos slides e colocaremos o paginador.</p>
<p>Quer ver como ficou o sistema de destaques até agora? Veja <a href="/exemplos/destaque/parte1/" title="Sistema de Destaques - Parte 1" target="_blank">online</a> ou faça download do <a href="/exemplos/destaque/parte1.rar" title="Sistema de Destaques - Parte 1" target="_blank">RAR</a> com os arquivos.</p>
<p>Espero que tenham gostado! :)</p>
