---
layout: post
title: Criando um sistema de destaques – Parte 2
excerpt: Segunda parte do tutorial que ensina a criar um sistema de destaques para
  o seu site utilizando xHTML, CSS, jQuery e PHP.

date: '2010-03-06 23:02:57 -0300'
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
<p>Tá na hora de continuar com a segunda parte do tutorial de destaques... Muita gente pediu e eu não vou deixar vocês esperando! :)</p>
<p>Pra quem não lembra, na <a title="Criando um sistema de destaques - Parte 1" href="http://blog.thiagobelem.net/css/criando-um-sistema-de-destaques-parte-1/">Parte 1</a> criamos todo o HTML e CSS do destaque (o resultado ficou <a title="Criando um sistema de destaques - Exemplo da Parte 1" href="http://blog.thiagobelem.net/exemplos/destaque/parte1/">assim</a>) e hoje, como prometido, vamos criar o jQuery que dará o efeito de transição dos destaques.</p>
<h3>1. Inserindo o jQuery</h3>
<p>Se você já tem jQuery 1.4.2 (ou superior) inserido no seu site, pule essa parte... Caso você não tenha o jQuery ou seja uma versão antiga, recomendo que continue lendo.</p>
<p>Vá ao site do <a href="http://jquery.com/">jQuery</a> e baixe a última versão (até agora é a <a title="jQuery v1.4.2" href="http://code.jquery.com/jquery-1.4.2.min.js">1.4.2</a>) e coloque o arquivo com o nome de <strong>jquery-1.4.2.min.js</strong> em uma pasta no seu site.</p>
<p>Feito isso nós podemos inserir o jQuery no site utilizando a seguinte linha:</p>
<p>[code language="html"]<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>[/code]</p>
<p>Essa linha deve ser inserida dentro da tag <strong><head></strong> do seu site e o nome do arquivo ou a sua pasta não fazem a mínima diferença... Contanto que você acerte o arquivo, tá tudo certo.</p>
<h3>2. Inserindo o jQuery Cycle</h3>
<p>Agora nós iremos inserir o plugin de jQuery mais útil que existe, o <a title="jQuery Cycle" href="http://www.malsup.com/jquery/cycle/">jQuery Cycle</a>, que serve para realizar um efeito de transição entre elementos dentro de um mesmo container... Em outras palavras: você faz <em>slideshows</em> com ele. Já falei um pouco sobre ele em um outro tutorial sobre <a title="Galeria de fotos (slideshow) com jQuery" href="http://blog.thiagobelem.net/jquery/galeria-de-fotos-slideshow-com-jquery/">galerias de fotos (slideshow) com jQuery</a>).</p>
<p>Vá até o site do jQuery Cycle, baixe a última versão (até agora é a <a href="http://www.malsup.com/jquery/cycle/release/jquery.cycle.zip?v2.80">2.80</a>) e insira-a no seu da mesma forma que você fez com o jQuery, apenas mudando o nome do arquivo e, se necessário, a pasta.</p>
<p>Quando você fizer o download encontrará vários arquivos, mas você só precisa do <strong>jquery.cycle.all.min.js</strong>... Insira-o no <strong><head></strong> do seu site <strong style="color: red">APÓS o código do jQuery</strong>:</p>
<p>[code language="html"]<br />
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script><br />
<script type="text/javascript" src="js/jquery.cycle.all.min.js"></script><br />
[/code]</p>
<h3>3. Criando o seu jQuery de Destaques</h3>
<p>Agora vamos criar um arquivo chamado <strong>jquery.destaques.js</strong> que conterá o código para "rodar" o jQuery Cycle no bloco de destaques e fazer o efeito de transição entre os slides dele... Mais uma vez, o nome e a localização do arquivo, contanto que vocês saibam o que estão fazendo e insiram-o de forma correta no site, tá tudo bem.</p>
<p>Começaremos o arquivo com o seguinte código:</p>
<p>[code language="javascript"]/**<br />
 * Escopo de compatibilidade do jQuery<br />
 */<br />
(function($){</p>
<p>})(jQuery);[/code]</p>
<p>Continuaremos o nosso código na linha 5, mas parem um pouco para observar esse código... Ele fará com que o código que estiver ali dentro e usar a função jQuery (através do sifrão $) não entre em conflito com outras bibliotecas (Prototype, Moo-Tools e etc.)... Apenas essas duas linhas resolvem um problema de incompatibilidade que atrapalha MUITA gente por aí.</p>
<p>Agora nós iremos inserir o código que faz o jQuery Cycle agir sobre a lista de slides (destaques) que temos:</p>
<p>[code language="javascript" firstline="6"]<br />
	$(document).ready(function() {</p>
<p>		/**<br />
		 * Roda o jQuery Cycle na lista (ul) que está<br />
		 * dentro do bloco de destaques (#blocoDestaques)<br />
		 */<br />
		$('#blocoDestaques ul').cycle();</p>
<p>	});<br />
[/code]<br />
Rode o seu site e veja a mágica acontecer... Já está 99% pronto! :D</p>
<p>Esse código que tem ao redor da linha que roda o jQuery Cycle é um código que você usará sempre que trabalhar com jQuery... Ele faz com o que o código que estiver dentro dele seja executado apenas quando o site (document) estiver pronto (ready) ou seja, depois que o HTML foi todo carregado.. Isso é necessário pois o jQuery trabalha diretamente com os elementos do HTML :)</p>
<p>Agora vamos ao 1% faltante que são três tarefas bastante simples:</p>
<ul>
<li>Colocar os paginadores (os números no canto) que permitem uma troca direta de slides</li>
<li>Aplicar o efeito que faz a barrinha de descrição (com fundo preto) sumir e aparecer em cada troca de slides</li>
<li>Inserir o código que trocará o link da etiqueta [Destaques] que fica sobre o slideshow, usando sempre o link do destaque que está aparecendo</li>
</ul>
<h3>3.1 - Inserindo paginadores no seu slideshow</h3>
<p>Para inserir os paginadores precisaremos antes criar um container para recebê-los, fazemos isso com esse código:</p>
<p>[code language="javascript" firstline="8"]<br />
	// Cria uma div.paginas que receberá os paginadores<br />
	var div = $('<div></div>').addClass('paginas');<br />
	// Insere a div criada antes da lista de destaques<br />
	$('#blocoDestaques ul').before(div);<br />
[/code]</p>
<p>Deveremos inserir esse código dentro do document.ready mas antes do código que chama o jQuery Cycle pois essa div criada será usada pelo Cycle.</p>
<p>Com esse código inserido o nosso document.ready() ficará assim:</p>
<p>[code language="javascript" firstline="6"]<br />
	$(document).ready(function() {</p>
<p>		// Cria uma div.paginas que receberá os paginadores<br />
		var div = $('<div></div>').addClass('paginas');<br />
		// Insere a div criada antes da lista de destaques<br />
		$('#blocoDestaques ul').before(div);</p>
<p>		/**<br />
		 * Roda o jQuery Cycle na lista (ul) que está<br />
		 * dentro do bloco de destaques (#blocoDestaques)<br />
		 */<br />
		$('#blocoDestaques ul').cycle({</p>
<p>		});</p>
<p>	});<br />
[/code]</p>
<p>Perceba que colocamos também um par de chaves dentro da chamada do jQuery Cycle... Ali dentro nós iremos definir as <a href="http://www.malsup.com/jquery/cycle/options.html" title="jQuery Cycle - Opções">opções</a> para modificar e interagir com o jQuery Cycle (veja mais a diante).</p>
<p>Agora nós já temos o container que receberá os paginadores, vamos inserir o código que criará os links de cada página, já funcionando:</p>
<p>[code language="javascript" firstline="17"]<br />
		$('#blocoDestaques ul').cycle({<br />
			pager: 'div.paginas', // Paginadores<br />
		});<br />
[/code]</p>
<p>Com apenas essa linha os nossos links de paginação já estão aparecendo e funcionando! Não é uma maravilha?!</p>
<p>Vamos agora criar, rapidamente, o CSS para eles ficarem aparecendo sobre os slides, como quadradinhos bonitinhos:</p>
<p>[code language="css"]<br />
#blocoDestaques div.paginas {<br />
	position: absolute;<br />
	top: 5px;<br />
	right: 5px;</p>
<p>	z-index: 100;<br />
}</p>
<p>#blocoDestaques div.paginas a {<br />
	height: 20px;<br />
	width: 20px;</p>
<p>	display: block;<br />
	float: left;<br />
	margin-left: 2px;</p>
<p>	color: white;<br />
	font-size: 10px;<br />
	font-family: Verdana, Arial, sans-serif;<br />
	text-decoration: none;<br />
	text-align: center;<br />
	line-height: 20px;<br />
	outline: none;</p>
<p>	background: black;<br />
}</p>
<p>#blocoDestaques div.paginas a:hover,<br />
#blocoDestaques div.paginas a.activeSlide {<br />
	background: #9FAA27;<br />
	font-weight: bold;<br />
}</p>
<p>#blocoDestaques ul li p,<br />
#blocoDestaques ul li div.fundo { display: none; }<br />
[/code]</p>
<p>Esse CSS pode ser inserido no arquivo estilo.css (criado lá na Parte 1)... No fim dele nós inserimos uma regra que esconderá a barra de titulo... Vocês entenderão o motivo mais a frente.</p>
<p>Nossos paginadores estão prontos! :D</p>
<p>Vamos inserir mais duas opções que farão o slideshow pausar a transição se você estiver com o mouse sobre ele:</p>
<p>[code language="javascript" firstline="17"]<br />
		$('#blocoDestaques ul').cycle({<br />
			pager: 'div.paginas', // Paginadores<br />
			pause: true, // Pausa ao passar o mouse sobre ele?<br />
			pauseOnPagerHover: true // Pausa ao passar o mouse sobre as páginas?<br />
		});<br />
[/code]</p>
<h3>3.2 - Efeito de transição: escondendo e mostrando a barrinha de titulo</h3>
<p>Agora nós vamos inserir uma opção que tem comportamento de <em>callback</em>, que são funções/métodos que são chamados logo após outras ações... Um bom exemplo de <em>callback</em> seria um redirecionamento após um login bem sucedido... Vamos inserir o código de <em>callback</em> que executará uma função antes de cada troca de slide:</p>
<p>[code language="javascript" firstline="22"]<br />
			// Executa uma função antes de cada troca de slide<br />
			before: function(atual, proximo, opcoes, avancando) {</p>
<p>			}<br />
[/code]</p>
<p>Você não precisa se preocupar com o formato usado na declaração dessa função, ele já é pré-definido pelo jQuery Cycle... Você só precisa se dedicar ao que vai colocar dentro dela.</p>
<p>E dentro dela vamos colocar o código que esconde a barrinha preta de titulo do slide atual antes de trocar para o próximo slide:</p>
<p>[code language="javascript" firstline="24"]<br />
				/**<br />
				 * Esconde o parágrafo E a div.fundo que estão dentro do slide atual<br />
				 */<br />
				$('p, div.fundo', atual).slideUp('fast');<br />
[/code]</p>
<p>A nossa função de <em>callback</em> ficará assim:</p>
<p>[code language="javascript" firstline="22"]<br />
			// Executa uma função antes de cada troca de slide<br />
			before: function(atual, proximo, opcoes, avancando) {<br />
				/**<br />
				 * Esconde o parágrafo E a div.fundo que estão dentro do slide atual<br />
				 */<br />
				$('p, div.fundo', atual).slideUp('fast');<br />
			}<br />
[/code]</p>
<p>Vamos também criar o <em>callback</em> que será chamado após a troca de slides:</p>
<p>[code language="javascript" firstline="30"]<br />
			// Executa uma função depois de cada troca de slide<br />
			after: function(atual, proximo, opcoes, avancando) {<br />
				/**<br />
				 * Mostra o parágrafo E a div.fundo que estão dentro do slide atual<br />
				 */<br />
				$('p, div.fundo', proximo).slideDown('fast');<br />
			}<br />
[/code]</p>
<p>E agora a nossa barrinha de destaques está subindo e descendo como o planejado! :D Só falta trocar o link da etiqueta [Destaques] para o link exato de cada destaque.</p>
<h3>3.3 - Trocando o link da etiqueta [Destaques]</h3>
<p>O link da etiqueta deverá ser atualizado logo após a troca de slides, então vamos modificar o callback after para isso:</p>
<p>[code language="javascript" firstline="30"]<br />
			// Executa uma função depois de cada troca de slide<br />
			after: function(atual, proximo, opcoes, avancando) {<br />
				/**<br />
				 * Altera dois atributos da etiqueta [Destaques] para<br />
				 * ela ter o mesmo titulo e link do destaque mostrado<br />
				 */<br />
				$('a.faixa', '#blocoDestaques').attr({<br />
					title: $('a', proximo).attr('title'),<br />
					href: $('a', proximo).attr('href')<br />
				});</p>
<p>				/**<br />
				 * Mostra o parágrafo E a div.fundo que estão dentro do slide atual<br />
				 */<br />
				$('p, div.fundo', proximo).slideDown('fast');<br />
			}<br />
[/code]</p>
<p>Pra quem quiser dar uma olhada no jquery.destaques.js completo: <a href="http://pastie.org/857733" target="_blank">Pastie</a></p>
<p>Pronto! Terminamos o nosso sistema de destaques! :D</p>
<p>Muita gente pode parar por aqui e ir fazer o seu sistema de destaques, mas sei que muitos de você, como eu, vão preferir que esse seja um bloco de destaques dinâmico, vindo direto do banco de dados... Então aguardem mais um pouco pela <a href="http://blog.thiagobelem.net/css/criando-um-sistema-de-destaques-parte-3/" title="Criando um sistema de destaques – Parte 3"><strong>Parte 3</strong></a>, onde criaremos o arquivo PHP que fará a conexão com o banco de dados e trará os dados (titulo e link) de uma tabela do MySQL. :)</p>
<p>Quer ver como ficou o sistema de destaques até agora? Veja <a target="_blank" title="Sistema de Destaques - Parte 2" href="http://blog.thiagobelem.net/exemplos/destaque/parte2/">online</a> ou faça download do <a target="_blank" title="Sistema de Destaques - Parte 2 (RAR)" href="http://blog.thiagobelem.net/exemplos/destaque/parte2.rar">RAR</a> com os arquivos.</p>
<p>Abraços e até a próxima!</p>
