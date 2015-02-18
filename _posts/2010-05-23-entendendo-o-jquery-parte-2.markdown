---
layout: post
status: publish
published: true
title: Entendendo o jQuery – Parte 2
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Um tutorial explicando como o jQuery funciona e por que ele é tão simples
  de se trabalhar. Aprenda a criar um efeito de collapse (abrir e fechar) em uma caixa
  de links seguindo um passo-a-passo onde explico como funciona cada parte do código.
wordpress_id: 773
wordpress_url: http://blog.thiagobelem.net/?p=773
date: '2010-05-23 23:30:41 -0300'
date_gmt: '2010-05-24 02:30:41 -0300'
categories:
- Javascript
- jQuery
- Artigos
tags:
- jQuery
---
<p>A pedidos de <a href="http://twitter.com/sabriog">@sabriog</a>, <a href="http://twitter.com/djhonyy">@djhonyy</a>, <a href="http://twitter.com/tadeubrasil">@tadeubrasil</a> e do meu amigo <a href="http://twitter.com/thiagogonzalez">@thiagogonzalez</a> hoje vou falar um pouquinho mais sobre jQuery para iniciantes. :)</p>
<p>O jQuery é uma biblioteca/framework de Javascript <strong>orientado a objetos</strong> (OO)... O que significa que nele trabalhamos com objetos, atributos e métodos.. E não apenas com funções que é o que acontece na programação procedural comum. Todos nós começamos trabalhando com programação procedural e por isso o jQuery segue um "caminho" diferente do que estamos acostumados.</p>
<p>De primeiro contato o jQuery parece sim muito complicado... São vários códigos em uma só linha... Tudo dentro de <code>function()</code> sem nome e, com uma <a href="http://docs.jquery.com/">documentação</a> toda em inglês, as pessoas não tem muito por onde começar.</p>
<p>O que vocês precisam entender é que o jQuery é, quase que literalmente, <strong>uma conversa entre o desenvolvedor e o código</strong>. Se você souber inglês então, não há com o que se preocupar... Mas se você não sabe inglês, procure começar a jogar, ler ou ver filmes sem legenda... No mundo de hoje em dia <strong>não dá</strong> pra ser um bom desenvolvedor/programador só lendo artigos escritos em português... Mas isso vai ficar para um outro artigo.</p>
<p>A coisa que vocês mais vão ver no jQuery é a própria função <code>jQuery()</code>, que também é usada no formato <code>$()</code>. Esta função sempre irá retornar um objeto jQUery: <strong>um vetor (array) com todos os elementos encontrados</strong> pelo <strong>seletor</strong> passado como 1º parâmetro da função jQuery ou um <strong>novo elemento DOM</strong> (<em>Document Object Model</em>) criado caso o 1º parâmetro um elemento HTML.</p>
<p>Veja alguns exemplos:</p>
<p>[code language="javascript" light="true"]<br />
$('p'); // Retorna uma lista de todos os parágrafos na página<br />
$('a.azul'); // Retorna uma lista de todos os links com classe &quot;azul&quot;<br />
$('form input[type=&quot;text&quot;]'); // Retorna uma lista de todos os inputs (que sejam type=&quot;text&quot;) e estejam dentro de um formulário<br />
[/code]</p>
<p>Como vocês podem ver, os seletores de jQuery se assemelham muito aos seletores de CSS, e existem formas de você selecionar praticamente qualquer elemento de seu HTML... Lembra que eu disse que jQuery é como uma conversa? Suponhamos que você precise selecionar todos os <code>p</code>, que estão dentro e uma <code>div</code> com classe a "links", e que não possuam um link dentro desse <code>p</code>... O seletor ficaria assim:</p>
<p>[code language="javascript" light="true"]<br />
$('div.links p:not(:has(a))');<br />
[/code]</p>
<p>Mas você, a esse ponto, já deve ter se perguntado: de que adianta selecionar elementos se nada for feito com eles?</p>
<p>É ai que entram os métodos do jQuery! Sempre que você estiver usando jQuery, você irá trabalhar da seguinte forma:</p>
<ol>
<li>Selecione os elementos que você quer manipular/alterar/trabalhar;</li>
<li>Execute métodos nativos do jQuery (ou de um plugin de jQuery).</li>
</ol>
<p>Ou seja: primeiro selecionamos os elementos e depois executamos um (ou mais) métodos nos elementos encontrados.</p>
<h3>Um exemplo prático</h3>
<p>Vamos supor que vocês queiram criar aquele efeito legal de abrir e fechar um elemento com um <code>+</code> no cantinho. O nome desse efeito, em inglês, é <em>collapse</em>.</p>
<p>Vamos criar o seguinte HTML de exemplo:</p>
<p>[code language="html" light="true"]<br />
&lt;div class=&quot;box&quot;&gt;<br />
	&lt;h2&gt;Meus links&lt;/h2&gt;<br />
	&lt;a href=&quot;#&quot; title=&quot;Abrir ou fechar&quot; class=&quot;trocar&quot;&gt;abrir/fechar&lt;/a&gt;<br />
	&lt;ul class=&quot;conteudo&quot;&gt;<br />
		&lt;li&gt;&lt;a href=&quot;#&quot; title=&quot;Primeiro link&quot;&gt;Primeiro link&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;#&quot; title=&quot;Segundo link&quot;&gt;Segundo link&lt;/a&gt;&lt;/li&gt;<br />
		&lt;li&gt;&lt;a href=&quot;#&quot; title=&quot;Terceiro link&quot;&gt;Terceiro link&lt;/a&gt;&lt;/li&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;<br />
[/code]</p>
<p>O efeito que nós queremos é: ao clicar no link com classe "trocar" (<code>a.trocar</code>) que estiver dentro de uma div com classe "box" (<code>div.box a.trocar</code>), a lista desordenada com classe "conteudo" (<code>ul.conteudo</code>) que estiver logo após esse link (que recebeu o clique) irá deslizar, fechando e abrindo a cada clique.</p>
<p>Uma das primeiras coisas que se aprende no jQuery é que ele trabalha com os elementos HTML da página, e para poder acessar esses elementos ele precisa ser executado depois que a página carregou. Isso não é obrigatório, mas por motivos didáticos, vamos seguir essa regra.</p>
<p>Para isso, precisamos colocar em nosso código javascript um código que permita executar outros códigos (jQuery ou não) após o carregamento do site... Lembram do "onload" do <code>body</code>? É praticamente a mesma coisa:</p>
<p>[code language="javascript"]<br />
$(document).ready(function() {<br />
	// O que estiver aqui será executado após o carregamento do site<br />
});<br />
[/code]</p>
<p>Com o código acima criamos um evento <em>ready</em> (pronto) no documento (todo o site) que executará uma <code>function()</code> quando o site estiver carregado (método <code>ready()</code>).</p>
<p>Documentação do método <code>ready()</code>: <a href="http://api.jquery.com/ready/" target="_blank">http://api.jquery.com/ready/</a></p>
<p>Faça o seguinte teste para entender melhor:</p>
<p>[code language="javascript"]<br />
$(document).ready(function() {<br />
	alert('O site terminou de carregar!');<br />
});<br />
[/code]</p>
<p>Veja um exemplo do código acima funcionando: <a href="http://jsbin.com/upuxa3/" target="_blank">http://jsbin.com/upuxa3/</a></p>
<p>Agora vamos continuar e voltar ao nosso exemplo de collapse: precisamos criar um evento de clique (método <code>click()</code>) no link que tem a classe "trocar", fazemos isso da seguinte forma:</p>
<p>[code language="javascript"]<br />
$(document).ready(function() {<br />
	$('div.box a.trocar').click();<br />
});<br />
[/code]</p>
<p>Com o código acima criamos um evento vazio que na verdade irá "clicar" no link... Precisamos colocar uma função como parâmetro desse método <code>click()</code> para que, ao invés de clicar no link, um outro código seja executado.</p>
<p>Documentação do método <code>click()</code>: <a href="http://api.jquery.com/click/" target="_blank">http://api.jquery.com/click/</a></p>
<p>Vamos a um pequeno exemplo que irá disparar um alerta ao clicar no link:</p>
<p>[code language="javascript"]<br />
$(document).ready(function() {<br />
	$('div.box a.trocar').click(function() {<br />
		alert('Você clicou no link...');<br />
	});<br />
});<br />
[/code]</p>
<p>Veja um exemplo do código acima funcionando: <a href="http://jsbin.com/upuxa3/2/" target="_blank">http://jsbin.com/upuxa3/2/</a></p>
<p>Antes de continuar com o nosso exemplo, precisamos notar que, estamos adicionando um evento de clique a um link que, por padrão, já é um elemento que possui clique, certo? Todo link é "clicável", mesmo que seu endereço leve a lugar nenhum.</p>
<p>Mas o jQuery não é esperto (ou seria maleducado?) o suficiente para substituir o comportamento padrão de clique naquele link... Ao adicionarmos o evento <code>click()</code> no link o jQuery é executado antes, mas quando termina o comportamento padrão acontece... Então se o <code>href</code> (endereço) do link apontasse para "http://thiagobelem.net" vocês iriam ver o meu site depois de receber o alerta.</p>
<p>Existem duas formas de evitar o comportamento padrão de um clique em um link quando se trabalha com o método <code>click()</code>: no mais deselegante é retornado <em>false</em> (falso) na função que está no clique. A outra forma, mais correta e elegante, é assim:</p>
<p>[code language="javascript" highlight="3"]<br />
$(document).ready(function() {<br />
	$('div.box a.trocar').click(function(evento) {<br />
		evento.preventDefault();<br />
		alert('Você clicou no link...');<br />
	});<br />
});<br />
[/code]</p>
<p>É só adicionar um argumento (com o nome que você quiser) à função que é executada no evento <code>click()</code> do link e, dentro da função, usar o método <code>preventDefault()</code> nesse argumento, evitando assim o comportamento padrão do navegador, que seria mandan o visitante para o endereço link após o evento do jQuery ser executado.</p>
<p>Veja um exemplo do código acima funcionando: <a href="http://jsbin.com/upuxa3/3/" target="_blank">http://jsbin.com/upuxa3/3/</a></p>
<p>Agora nós podemos continuar nosso exemplo selecionando a lista de links com classe "conteudo" (<code>ul.conteudo</code>) que esta logo após o link que foi clicado:</p>
<p>[code language="javascript" highlight="4"]<br />
$(document).ready(function() {<br />
	$('div.box a.trocar').click(function(evento) {<br />
		evento.preventDefault();<br />
		$(this).next('ul.conteudo');<br />
	});<br />
});<br />
[/code]</p>
<p>Partimos do link que recebeu o clique <code>$(this)</code> e procuramos uma <code>ul.conteudo</code> que esteja logo em seguida usando o método <code>next()</code>.</p>
<p>Percebam que dessa vez, usamos a função jQuery no <code>this</code>, que retorna o elemento que ativou o evento de clique, e depois "caminhamos" até o próximo elemento que satisfaça o seletor <code>ul.conteudo</code>. Esse "caminhar" é, em inglês, chamado de <a href="http://api.jquery.com/category/traversing/tree-traversal/">traversal</a> e nos ajuda a, partindo de um elemento, encontrar outros elementos que tenham algum tipo de relação com o elemento no qual "estamos".</p>
<p>Documentação do método <code>next()</code>: <a href="http://api.jquery.com/next/" target="_blank">http://api.jquery.com/next/</a></p>
<p>Mas, como foi dito anteriormente, não adianta nada selecionar um elemento se não fizermos nada com ele... Já conseguimos encontrar a lista de links e agora precisamos fazer ela aparecer e sumir a cada clique... Fazemos isso dessa forma:</p>
<p>[code language="javascript" highlight="4"]<br />
$(document).ready(function() {<br />
	$('div.box a.trocar').click(function(evento) {<br />
		evento.preventDefault();<br />
		$(this).next('ul.conteudo').slideToggle();<br />
	});<br />
});<br />
[/code]</p>
<p>Com o método <code>slideToggle()</code> faz com que o elemento feche quando estiver aberto, e abra quando estiver fechado. Ou seja, cada vez que clicarmos no link de "abrir/fechar" o jQuery irá verificar se a lista de links está aberta ou não e irá trocar o seu estado, abrindo-a ou fechando-a.</p>
<p>Veja um exemplo do código acima funcionando: <a href="http://jsbin.com/anafo3/" target="_blank">http://jsbin.com/anafo3/</a></p>
<p>Poderíamos parar por aqui... Mas se você for um usuário chato, vai clicar 300 vezes no link rapidamente e vai perceber que, depois de alguns cliques seguidos (e muito rápidos) a lista para de abrir e fechar e "buga".</p>
<p>Para evitar esse tipo de comportamento precisamos filtrar o seletor e evitar rodar o <code>slideToggle()</code> enquanto ainda esteja acontecendo uma animação... Ou seja: executamos o método <code>slideToggle()</code> apenas na lista que não (<em>not</em>) estiver animada (<em>animated</em>):</p>
<p>[code language="javascript" highlight="4"]<br />
$(document).ready(function() {<br />
	$('div.box a.trocar').click(function(evento) {<br />
		evento.preventDefault();<br />
		$(this).next('ul.conteudo:not(:animated)').slideToggle();<br />
	});<br />
});<br />
[/code]</p>
<p>Documentação do seletor <code>:not()</code>: <a href="http://api.jquery.com/not-selector/" target="_blank">http://api.jquery.com/not-selector/</a></p>
<p>Viram que simples?! Com exatamente quatro linhas, eu disse QUATRO LINHAS, criamos um efeito super "maneiro" que você pode usar em praticamente qualquer HTML de qualquer site! O jQuery é ou não é uma maravilha?</p>
<p>Veja um exemplo do código acima funcionando: <a href="http://jsbin.com/anafo3/2/" target="_blank">http://jsbin.com/anafo3/2/</a></p>
<p>E o nosso exemplo longo mas prático está pronto. :)</p>
<p>Olha como isso tudo é uma conversa com o código:</p>
<blockquote><p>Quando o documento carregar crie um evento de clique no a com classe "trocar" (e que estiver dentro de uma div com classe "box") e, quando esse evento for chamado, previna o comportamento padrão do navegador, vá até a lista com classe "conteudo" links que estiver logo após esse link e, se ele não estiver no meio de uma animação, troque o seu estado fechando-a ou abrindo-a</p></blockquote>
<p>Espero que vocês tenham gostado! Até a próxima. E não deixem de fazer o seu pedido via comentário ou <a href="http://twitter.com/tiutalk">Twitter</a>, terei prazer em atendê-lo.</p>