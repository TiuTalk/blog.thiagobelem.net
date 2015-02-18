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
<p>Tenho recebido vários e-mails pedindo um tutorial ensinando a criar um sistema de destaques como esse que fiz na <a href="http://blog.thiagobelem.net/" title="Thiago Belem / Blog">home do blog</a>.</p>
<p>O sistema de destaques que iremos criar não é específico para o WordPress e sim para qualquer site... Por isso não iremos criar um plugin de WordPress ou usar as funções do mesmo, faremos tudo com código puro.</p>
<p>O sistema de destaques que iremos criar terá a seguinte aparência:<br />
<a href="http://blog.thiagobelem.net/arquivos/2010/02/destaque.jpg"><img src="http://blog.thiagobelem.net/arquivos/2010/02/destaque-300x114.jpg" alt="" title="Sistema de Destaques" width="300" height="114" class="aligncenter size-medium wp-image-709" /></a></p>
<h3>A marcação XHTML</h3>
<p>Antes de mais nada, precisamos criar o HTML do nosso bloco de destaque... Começamos com uma div e dentro dela criaremos uma lista (UL) com três itens (LI):</p>
<p>[code language="html"]<br />
&lt;!-- destaques --&gt;<br />
&lt;div id=&quot;blocoDestaques&quot;&gt;<br />
	&lt;ul&gt;<br />
		&lt;li&gt;...&lt;/li&gt;<br />
		&lt;li&gt;...&lt;/li&gt;<br />
		&lt;li&gt;...&lt;/li&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;<br />
&lt;!-- /destaques --&gt;<br />
[/code]</p>
<p>Agora, dentro de cada item, vamos adicionar uma imagem (IMG) com um link (A):</p>
<p>[code language="html" firstline="4"]<br />
		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 1&quot;&gt;<br />
				&lt;img src=&quot;img/destaque1.jpg&quot; alt=&quot;Destaque 1&quot; /&gt;<br />
			&lt;/a&gt;<br />
		&lt;/li&gt;</p>
<p>		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 2&quot;&gt;<br />
				&lt;img src=&quot;img/destaque2.jpg&quot; alt=&quot;Destaque 2&quot; /&gt;<br />
			&lt;/a&gt;<br />
		&lt;/li&gt;</p>
<p>		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 3&quot;&gt;<br />
				&lt;img src=&quot;img/destaque3.jpg&quot; alt=&quot;Destaque 3&quot; /&gt;<br />
			&lt;/a&gt;<br />
		&lt;/li&gt;<br />
[/code]</p>
<p>Agora vamos inserir, após as imagens com links, parágrafos (P) contendo a descrição (ou titulo) do destaque e que também estão com link (A) para o destaque:</p>
<p>[code language="html" firstline="4"]<br />
		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 1&quot;&gt;<br />
				&lt;img src=&quot;img/destaque1.jpg&quot; alt=&quot;Destaque 1&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 1&quot;&gt;Destaque 1 - Muita coisa boa!&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;</p>
<p>		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 2&quot;&gt;<br />
				&lt;img src=&quot;img/destaque2.jpg&quot; alt=&quot;Destaque 2&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 2&quot;&gt;Destaque 2 - Nem tão bom assim...&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;</p>
<p>		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 3&quot;&gt;<br />
				&lt;img src=&quot;img/destaque3.jpg&quot; alt=&quot;Destaque 3&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 3&quot;&gt;Destaque 3 - Agora sim... bem melhor!&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;<br />
[/code]</p>
<p>Algumas pessoas podem ter pensado que errei ao criar dois links ao invés de inserir o parágrafo (P) dentro do primeiro link, após a imagem... Mas isso seria errado pois o link é um elemento de linha (<em>in-line</em>) e o parágrafo é um elemento de bloco (<em>block</em>) e nunca devemos inserir um elemento <em>block</em> dentro de um <em>in-line</em>.</p>
<p>Criamos também, antes de cada parágrafo, uma <strong>div.fundo</strong> vazia que será o fundo preto transparente da descrição/titulo de cada item.</p>
<p>Até agora nosso sistema de destaques ficou assim:<br />
<a href="http://blog.thiagobelem.net/arquivos/2010/02/destaque1.jpg"><img src="http://blog.thiagobelem.net/arquivos/2010/02/destaque1-230x300.jpg" alt="" title="Sistema de Destaques - 1ª Prévia" width="230" height="300" class="aligncenter size-medium wp-image-710" /></a></p>
<p>Por fim, nós vamos inserir mais um link, dessa vez vazio, antes da lista (UL)... Esse link será a faixa [Destaques] que teremos sobre a imagem e a nossa marcação HTML está pronta:</p>
<p>[code language="html"]<br />
&lt;!-- destaques --&gt;<br />
&lt;div id=&quot;blocoDestaques&quot;&gt;</p>
<p>	&lt;a class=&quot;faixa&quot; href=&quot;#&quot; title=&quot;&quot;&gt;&lt;!-- --&gt;&lt;/a&gt;</p>
<p>	&lt;ul&gt;<br />
		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 1&quot;&gt;<br />
				&lt;img src=&quot;img/destaque1.jpg&quot; alt=&quot;Destaque 1&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 1&quot;&gt;Destaque 1 - Muita coisa boa!&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;</p>
<p>		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 2&quot;&gt;<br />
				&lt;img src=&quot;img/destaque2.jpg&quot; alt=&quot;Destaque 2&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 2&quot;&gt;Destaque 2 - Nem tão bom assim...&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;</p>
<p>		&lt;li&gt;<br />
			&lt;a href=&quot;#&quot; title=&quot;Destaque 3&quot;&gt;<br />
				&lt;img src=&quot;img/destaque3.jpg&quot; alt=&quot;Destaque 3&quot; /&gt;<br />
			&lt;/a&gt;<br />
			&lt;div class=&quot;fundo&quot;&gt;&lt;!--  --&gt;&lt;/div&gt;<br />
			&lt;p&gt;&lt;a href=&quot;#&quot; title=&quot;Destaque 3&quot;&gt;Destaque 3 - Agora sim... bem melhor!&lt;/a&gt;&lt;/p&gt;<br />
		&lt;/li&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;<br />
&lt;!-- /destaques --&gt;<br />
[/code]</p>
<h3>Melhorando a aparência (CSS)</h3>
<p>Começaremos criando um arquivo CSS e nele definiremos que a lista (UL), os seus itens (LI) e as imagens não terão estilo, margem ou espaçamento:</p>
<p>[code language="css"]<br />
#blocoDestaques ul,<br />
#blocoDestaques ul li {<br />
	list-style: none;<br />
}</p>
<p>#blocoDestaques,<br />
#blocoDestaques ul,<br />
#blocoDestaques ul li,<br />
#blocoDestaques ul li img {<br />
	margin: 0px;<br />
	padding: 0px;<br />
}<br />
[/code]</p>
<p>Agora nós definiremos a altura e largura de todos os elementos usados no destaque:</p>
<p>[code language="css"]<br />
#blocoDestaques ul,<br />
#blocoDestaques ul li {<br />
	list-style: none;<br />
}</p>
<p>#blocoDestaques,<br />
#blocoDestaques ul,<br />
#blocoDestaques ul li,<br />
#blocoDestaques ul li img {<br />
	margin: 0px;<br />
	padding: 0px;</p>
<p>	width: 600px;<br />
	height: 215px;<br />
}</p>
<p>#blocoDestaques ul li div.fundo {<br />
	width: 600px;<br />
	height: 40px;<br />
}</p>
<p>#blocoDestaques a.faixa {<br />
	width: 100px;<br />
	height: 100px;<br />
}<br />
[/code]</p>
<p>Agora nós definimos o posicionamento de todos os elementos, o estilo dos elementos que compoem a descrição de cada item e o fundo da faixa [Desaques] que ficará sobre as imagens:</p>
<p>[code language="css"]<br />
#blocoDestaques {<br />
	position: relative;<br />
}</p>
<p>#blocoDestaques ul,<br />
#blocoDestaques ul li {<br />
	list-style: none;<br />
}</p>
<p>#blocoDestaques,<br />
#blocoDestaques ul,<br />
#blocoDestaques ul li,<br />
#blocoDestaques ul li img {<br />
	margin: 0px;<br />
	padding: 0px;</p>
<p>	width: 600px;<br />
	height: 215px;<br />
}</p>
<p>#blocoDestaques ul li {<br />
	position: relative;<br />
}</p>
<p>#blocoDestaques ul li div.fundo {<br />
	width: 600px;<br />
	height: 40px;</p>
<p>	position: absolute;<br />
	bottom: 0px;<br />
	left: 0px;</p>
<p>	background: black;<br />
}</p>
<p>#blocoDestaques ul li p {<br />
	margin: 0px;<br />
	padding: 10px 15px;</p>
<p>	position: absolute;<br />
	bottom: 0px;<br />
	left: 0px;</p>
<p>	line-height: 20px;<br />
	font-family: Verdana, Arial, sans-serif;<br />
	font-size: 14px;<br />
}</p>
<p>#blocoDestaques ul li p a {<br />
	color: white;<br />
	text-decoration: none;<br />
}</p>
<p>#blocoDestaques a.faixa {<br />
	width: 100px;<br />
	height: 100px;</p>
<p>	position: absolute;<br />
	top: -5px;<br />
	left: -5px;<br />
	z-index: 100;</p>
<p>	background: transparent url('../img/faixa.png') 0 0 no-repeat;<br />
}<br />
[/code]</p>
<p>Por enquanto vamos ficar por aqui... O HTML e o CSS do sistema de destaques está pronto... Na <a href="http://blog.thiagobelem.net/css/criando-um-sistema-de-destaques-parte-2/" title="Criando um sistema de destaques - Parte 2">Parte 2</a> falaremos sobre o efeito em jQuery que fará a transição dos slides e colocaremos o paginador.</p>
<p>Quer ver como ficou o sistema de destaques até agora? Veja <a href="http://blog.thiagobelem.net/exemplos/destaque/parte1/" title="Sistema de Destaques - Parte 1" target="_blank">online</a> ou faça download do <a href="http://blog.thiagobelem.net/exemplos/destaque/parte1.rar" title="Sistema de Destaques - Parte 1" target="_blank">RAR</a> com os arquivos.</p>
<p>Espero que tenham gostado! :)</p>
