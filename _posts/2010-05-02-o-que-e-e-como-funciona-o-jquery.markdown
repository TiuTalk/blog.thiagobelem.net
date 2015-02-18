---
layout: post
title: O que é e como funciona o jQuery
excerpt: Aprenda o que é e como funciona essa incrível ferramenta que é o jQuery,
  um framework de Javascript criado para produzir efeitos espetaculares usando apenas
  algumas linhas de código. Este é o primeiro de vários artigos voltados para iniciantes
  no assunto.

date: '2010-05-02 00:01:13 -0300'
categories:
- Javascript
- jQuery
- Artigos
tags:
- jQuery
---
<p>No artigo de hoje iremos ver o que é e como funciona o jQuery, a ferramenta que veio pra ficar e, arrisco dizer, "só jQuery expulsa o Flash das pessoas!".</p>
<h3>Mas hein?! jQuery? Que bicho é esse?</h3>
<p>Pra quem ainda não conhece, o <a title="Site oficial do jQuery" href="http://jquery.com/">jQuery</a> é um framework de Javascript.</p>
<p>Um <strong>framework</strong>, de forma bem resumida, é uma coleção de funções e métodos prontos para serem utilizados, amplamente testados e que devem ser usados de forma pré-definida para tudo correr bem.</p>
<p>Em alguns casos um framework chega a ser um estilo completamente novo de programar em certa linguagem, no caso do Javascript, o jQuery é, sem dúvida, um estilo novo, atrativo, fácil e interessantíssimo de programar.</p>
<p>Existem inúmeros outros frameworks de Javascript como o <a title="MooTools" href="http://mootools.net/">MooTools</a> ou <a title="ExtJS" href="http://www.extjs.com/">ExtJS</a> mas eu sempre vou puxar a sardinha pro lado do jQuery por que ele realmente merece!</p>
<p>O jQuery foi criado sob o mantra do "<strong>Write less, do more</strong>" (Escreva menos, faça mais) e é exatamente por causa disso que ele é tão surpreendente, com algumas poucas linhas de código você consegue fazer os mais variados efeitos que antes custavam dezenas de linhas de código com Javascript puro ou algumas horas de trabalho em Flash.</p>
<h3>E onde eu uso isso?</h3>
<p>Você pode usar o jQuery para fazer praticamente qualquer efeito legal, ou requisições em AJAX ou até mudanças na página após o seu carregamento.</p>
<p>Para poder utlizar o jQuery você precisa sempre inserí-lo no seu HTML, você pode fazer o <a title="download do arquivo .js no site oficial" href="http://code.jquery.com/jquery-1.4.2.min.js">download do arquivo .js no site oficial</a> e chama-lo no seu HTML ou usar uma <a href="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js">versão hospedada pelo Google</a>.</p>
<p>Em ambos os casos você precisa inserir o script dentro do <code><head></code> do seu site ou logo antes do <strong></body></strong>, veja a seguir a linha que insere o script pra cada um dos casos:</p>
<h4>Inserindo o jQuery local (salvo no seu site)</h4>
<p>[code language="html" light="true"]<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>[/code]</p>
<h4>Inserindo o jQuery hospedado no Google</h4>
<p>[code language="html" light="true"]<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>[/code]</p>
<p>Vamos ver alguns exemplos básicos de como é fácil e simples usar essa ferramenta:</p>
<h4>Efeito de foco em uma lista de imagens</h4>
<p>Suponhamos que você tenha uma lista de imagens com o seguinte HTML:</p>
<p>[code language="html"]<br />
<ul class="lista-imagens"><br />
	<li><img src="img/imagem1.jpg" alt="Imagem 1" width="200" height="200" /></li><br />
	<li><img src="img/imagem2.jpg" alt="Imagem 2" width="200" height="200" /></li><br />
	<li><img src="img/imagem3.jpg" alt="Imagem 3" width="200" height="200" /></li><br />
	<li><img src="img/imagem4.jpg" alt="Imagem 4" width="200" height="200" /></li><br />
</ul><br />
[/code]</p>
<p>E você queira fazer com que, ao passar o mouse sobre uma das imagens, as outras se apagem um pouco, deixando apenas a que está com o cursor em cima, acesa.</p>
<p>Antes de começar o seu script, você precisa criar um passo-a-passo de como o seu efeito irá funcionar, isso te ajuda a entender o jQuery de forma mais fácil:</p>
<ul>
<li>Ao passar o mouse em cima de uma imagem (evento que irá disparar o efeito)</li>
<li>Todas as imagens se apagam, exceto a imagem que estamos com o mouse em cima</li>
<li>Ao tirar o mouse de cima da imagem</li>
<li>Todas as imagens se acendem voltando ao estado original</li>
</ul>
<p>O jQuery funciona todo baseado em eventos, você determina um evento e, assim que ele for lançado, um certo script é executado.</p>
<p>A maioria dos scripts de jQuery são executados após o carregamento do site, o que também é um evento. De forma geral, após o carregamento do site nós criamos gatilhos em alguns elementos (HTML) da página e assim que esses eventos forem ativados os efeitos vão acontecendo em paralo.</p>
<p>Crie um arquivo <code>jquery.init.js</code> (o nome do arquivo não é obrigatório) e insira-o no seu site logo após o jQuery:</p>
<p>[code language="html" light="true"]<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script><br />
<script type="text/javascript" src="js/jquery.init.js"></script>[/code]</p>
<p>Agora dentro dele coloque o seguinte código:</p>
<p>[code language="javascript"]<br />
(function($) {</p>
<p>})(jQuery);<br />
[/code]</p>
<p>Este é um template padrão que você deve usar sempre que for criar um arquivo para jQuery. Com esse template você evita problema de compatiblidade entre o jQuery e outros frameworks que usam a função <code>$</code> para executar seus códigos. Considere esse template como uma lâmpada ou computador: você não precisa entender como funciona pra depender, usar e achar que não vive sem.</p>
<p>Agora vamos criar o código que criará o evento de "quando o site terminar de carregar":</p>
<p>[code language="javascript"]<br />
(function($) {</p>
<p>	// Quando o site terminar de carregar...<br />
	$(document).ready(function() {</p>
<p>	});</p>
<p>})(jQuery);<br />
[/code]</p>
<p>Este evento é quase sempre necessário pois o jQuery trabalha com os elementos HTML da página, e se você inserir o script no <code><head></code> e sair rodando jQuery nos elementos, receberá mensagens de erro pois o jQuery não irá encontrar os elementos que ainda não foram carregados.</p>
<p>Criado o nosso evento, podemos começar a desenvolver o nosso efeito de foco na lista de imagens, voltando a nossa lista de passos, começaremos pelo começo:</p>
<blockquote><p>Ao passar o mouse em cima de uma imagem (evento que irá disparar o efeito)</p></blockquote>
<p>Precisamos então, criar um um evento de hover nas imagens:</p>
<p>[code language="javascript" firstline="6"]<br />
// Quando passarmos o mouse me cima das imagens<br />
$('ul.lista-imagens li img').hover(function() {</p>
<p>});<br />
[/code]</p>
<p>Vamos parar aqui para entender aquela primeira linha separando-a em partes:</p>
<p><code><span style="background: cyan;">$(<span style="background: yellow;">'ul.lista-imagens li img'</span>)</span>.<span style="background: orange;">hover(<span style="background: lime;">function() { ... }</span>)</span>;</code></p>
<p>Na parte em <span style="background: cyan;">azul</span> temos uma chamada à função <code>$()</code> que é um atalho da <strong>função principal jQuery</strong>. Praticamente toda linha de jQuery começa dessa mesma forma.</p>
<p>Na parte em <span style="background: yellow;">amarela</span> temos o seletor, que segue o mesmo padão de seletores CSS e serve para nos ajudar a localizar o evento ao qual aplicaremos o efeito, evento ou método. Nesse caso, estamos procurando as os elementos <code>img</code> que estejam dentro de um <code>li</code>, que por sua vez estejam dentro de uma <code>ul</code> com classe <code>lista-imagens</code>, o que no CSS seria exatamente o seletor que usamos: <code style="background: yellow;">ul.lista-imagens li img</code>.</p>
<p>Na parte em <span style="background: orange;">laranja</span> temos uma chamada ao método <code>hover()</code> este método é ativado sempre que passamos o mouse sobre o elemento identificado no seletor (parte amarela). O método <a href="http://api.jquery.com/hover/">.hover()</a> possui dois parâmetros: primeiro o que será executado quando o mouse "entrar" no elemento e o segundo quando o mouse "sair" do elemento.</p>
<p>E por fim, na parte em <span style="background: lime;">verde</span>, temos o primeiro parâmetro do método <code>hover()</code>... Tudo que estiver dentro dessa parte será executado ao passar o mouse no elemento identificado pelo seletor.</p>
<blockquote><p>Todas as imagens se apagam...</p></blockquote>
<p>Continuando o nosso código, vamos inserir a linha que irá escurecer (apagar / diminuir a opacidade / esmaecer) todas as imagens da lista... Para isso usaremos o método <a href="http://api.jquery.com/fadeTo/">.fadeTo()</a> do jQuery.</p>
<p>[code language="javascript" firstline="6"]<br />
// Quando passarmos o mouse me cima das imagens<br />
$('ul.lista-imagens li img').hover(function() {</p>
<p>	// Escurecemos todas as imagens da lista<br />
	$('ul.lista-imagens li img').fadeTo('fast', 0.3);</p>
<p>});<br />
[/code]</p>
<p>O método <code>.fadeTo()</code> possui dois parâmetros obrigatórios: primeiro a velocidade de transição em milisegundos (onde 'fast' significa cerca de 1/3 de segundo) e o segundo parâmetro é a opacidade de destino que vai de 0 até 1.</p>
<p>Com esse efeito, todas as imagens da lista ficarão com 30% de opacidade (70% transparentes). Perceba que escurecemos também a imagem que estamos com o mouse em cima.</p>
<blockquote><p>... exceto a imagem que estamos com o mouse em cima</p></blockquote>
<p>Agora precisamos "filtrar" esse efeito de escurecer e fazer com que ele afete todas as imagens <strong>exceto a imagem que estamos com o mouse em cima</strong>:</p>
<p>[code language="javascript" firstline="9"]<br />
// Escurecemos todas as OUTRAS imagens da lista<br />
$('ul.lista-imagens li img').not(this).fadeTo('fast', 0.3);<br />
[/code]</p>
<p>Perceba que inserimos o <code>.not(this)</code>, esse método <a href="http://api.jquery.com/not/">.not()</a> faz com que, [nesse caso] depois de selecionar todas as imagens da lista, nós excluímos o <code>this</code> que faz referência ao elemento que ativou o efeito.</p>
<p>Se você <a href="http://jsbin.com/odaga3/2/">testar o script</a> que fizemos até agora, perceberá que as imagens estão apagando corretamente, mas não estão acendendo novamente quando tiramos o mouse de uma das imagens.</p>
<blockquote><p>Ao tirar o mouse de cima da imagem</p></blockquote>
<p>Precisamos adicionar o segundo parâmetro do <code>.hover()</code>, este segundo parâmetro é executado quando tiramos o mouse do elemento que ativou o efeito.</p>
<p>[code language="javascript" firstline="6"]<br />
// Quando passarmos o mouse me cima das imagens<br />
$('ul.lista-imagens li img').hover(function() {</p>
<p>	// Escurecemos todas as OUTRAS imagens da lista<br />
	$('ul.lista-imagens li img').not(this).fadeTo('fast', 0.3);</p>
<p>}, function() {</p>
<p>	// Aqui teremos o código que será executado quando tirarmos o mouse da imagem</p>
<p>});<br />
[/code]</p>
<blockquote><p>Todas as imagens se acendem voltando ao estado original</p></blockquote>
<p>Agora só precisamos inserir o mesmo código que usamos para escurecer as imagens, sem precisar filtar o <code>this</code>, e mudando a opacidade para 1:</p>
<p>[code language="javascript" firstline="6"]<br />
// Quando passarmos o mouse me cima das imagens<br />
$('ul.lista-imagens li img').hover(function() {</p>
<p>	// Escurecemos todas as OUTRAS imagens da lista<br />
	$('ul.lista-imagens li img').not(this).fadeTo('fast', 0.3);</p>
<p>}, function() {</p>
<p>	// Todas as imagens se acendem voltando ao estado original<br />
	$('ul.lista-imagens li img').fadeTo('fast', 1.0);</p>
<p>});<br />
[/code]</p>
<p>Com esse código o nosso efeito já está pronto, <a href="http://jsbin.com/odaga3/3/">veja aqui ele funcionando</a>.</p>
<p>Você provavelmente vai notar que o efeito fica "enfileirado", ou seja, se passarmos o mouse sobre várias imagens rapidamente o efeito vai ficar acontecendo um depois do outro como se o código estivesse agindo sozinho.</p>
<p>Sabendo disso, precisamos fazer todos os efeitos "pararem" antes de começar um novo, isso vai fazer com que, cada vez que passarmos o mouse sobre uma imagem, o efeito seja executado imediatamente e, se houverem outros efeitos na fila, eles sejam sobrepostos... Fazemos isso usando o método <a href="http://api.jquery.com/stop/">.stop()</a> antes do <code>.fadeTo()</code>:</p>
<p>[code language="javascript" firstline="6"]<br />
// Quando passarmos o mouse me cima das imagens<br />
$('ul.lista-imagens li img').hover(function() {</p>
<p>	// Escurecemos todas as OUTRAS imagens da lista<br />
	$('ul.lista-imagens li img').not(this).stop().fadeTo('fast', 0.3);</p>
<p>}, function() {</p>
<p>	// Todas as imagens se acendem voltando ao estado original<br />
	$('ul.lista-imagens li img').stop().fadeTo('fast', 1.0);</p>
<p>});<br />
[/code]</p>
<p>Agora sim nosso efeito ficou <a href="http://jsbin.com/odaga3/4/">completo</a> e, pasmem, com apenas cinco linhas:</p>
<p>[code language="javascript"]<br />
$('ul.lista-imagens li img').hover(function() {<br />
	$('ul.lista-imagens li img').not(this).stop().fadeTo('fast', 0.3);<br />
}, function() {<br />
	$('ul.lista-imagens li img').stop().fadeTo('fast', 1.0);<br />
});<br />
[/code]</p>
<p>Este é apenas um pequeno exemplo do poder do jQuery, amanhã irei escrever mais sobre ele, com outros efeitos legais e tão simples quanto esse que você viu aqui. :)</p>
<p>Espero que você tenha gostado! Deixe seu comentário com sua dúvida ou elogio. E não deixe de <a title="@tiutalk" href="http://twitter.com/tiutalk">me seguir no Twitter</a> para ficar sabendo dos artigos aqui do blog em tempo real!</p>
<h3>Quer ver o passo-a-passo do seu efeito em jQuery?</h3>
<p>É simples: <a title="@tiutalk" href="http://twitter.com/tiutalk">Siga-me no Twitter</a>, dê um RT (retweet) com um link para este artigo e descreva o seu efeito em um comentário nesse artigo. :)</p>
