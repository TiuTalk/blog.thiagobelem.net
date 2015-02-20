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
No artigo de hoje iremos ver o que é e como funciona o jQuery, a ferramenta que veio pra ficar e, arrisco dizer, "só jQuery expulsa o Flash das pessoas!".

### Mas hein?! jQuery? Que bicho é esse?
Pra quem ainda não conhece, o [jQuery](http://jquery.com/) é um framework de Javascript.

Um <strong>framework</strong>, de forma bem resumida, é uma coleção de funções e métodos prontos para serem utilizados, amplamente testados e que devem ser usados de forma pré-definida para tudo correr bem.

Em alguns casos um framework chega a ser um estilo completamente novo de programar em certa linguagem, no caso do Javascript, o jQuery é, sem dúvida, um estilo novo, atrativo, fácil e interessantíssimo de programar.

Existem inúmeros outros frameworks de Javascript como o [ExtJS](http://www.extjs.com/) mas eu sempre vou puxar a sardinha pro lado do jQuery por que ele realmente merece!

O jQuery foi criado sob o mantra do "<strong>Write less, do more</strong>" (Escreva menos, faça mais) e é exatamente por causa disso que ele é tão surpreendente, com algumas poucas linhas de código você consegue fazer os mais variados efeitos que antes custavam dezenas de linhas de código com Javascript puro ou algumas horas de trabalho em Flash.

### E onde eu uso isso?
Você pode usar o jQuery para fazer praticamente qualquer efeito legal, ou requisições em AJAX ou até mudanças na página após o seu carregamento.

Para poder utlizar o jQuery você precisa sempre inserí-lo no seu HTML, você pode fazer o [versão hospedada pelo Google](http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js).

Em ambos os casos você precisa inserir o script dentro do <code><head></code> do seu site ou logo antes do <strong></body></strong>, veja a seguir a linha que insere o script pra cada um dos casos:

<h4>Inserindo o jQuery local (salvo no seu site)</h4>

<div data-gist-id="bb02afc0940407950585" data-gist-show-loading="false"></div>

<h4>Inserindo o jQuery hospedado no Google</h4>

<div data-gist-id="26224c2e2d905f2aaa14" data-gist-show-loading="false"></div>

Vamos ver alguns exemplos básicos de como é fácil e simples usar essa ferramenta:

<h4>Efeito de foco em uma lista de imagens</h4>
Suponhamos que você tenha uma lista de imagens com o seguinte HTML:


<div data-gist-id="b8017b228e78a32e6644" data-gist-show-loading="false"></div>

E você queira fazer com que, ao passar o mouse sobre uma das imagens, as outras se apagem um pouco, deixando apenas a que está com o cursor em cima, acesa.

Antes de começar o seu script, você precisa criar um passo-a-passo de como o seu efeito irá funcionar, isso te ajuda a entender o jQuery de forma mais fácil:

<ul>
<li>Ao passar o mouse em cima de uma imagem (evento que irá disparar o efeito)</li>
<li>Todas as imagens se apagam, exceto a imagem que estamos com o mouse em cima</li>
<li>Ao tirar o mouse de cima da imagem</li>
<li>Todas as imagens se acendem voltando ao estado original</li>
</ul>
O jQuery funciona todo baseado em eventos, você determina um evento e, assim que ele for lançado, um certo script é executado.

A maioria dos scripts de jQuery são executados após o carregamento do site, o que também é um evento. De forma geral, após o carregamento do site nós criamos gatilhos em alguns elementos (HTML) da página e assim que esses eventos forem ativados os efeitos vão acontecendo em paralo.

Crie um arquivo <code>jquery.init.js</code> (o nome do arquivo não é obrigatório) e insira-o no seu site logo após o jQuery:


<div data-gist-id="93f57d06d74ff2f8c850" data-gist-show-loading="false"></div>

Agora dentro dele coloque o seguinte código:


<div data-gist-id="ac8a609074c377143372" data-gist-show-loading="false"></div>

Este é um template padrão que você deve usar sempre que for criar um arquivo para jQuery. Com esse template você evita problema de compatiblidade entre o jQuery e outros frameworks que usam a função <code>$</code> para executar seus códigos. Considere esse template como uma lâmpada ou computador: você não precisa entender como funciona pra depender, usar e achar que não vive sem.

Agora vamos criar o código que criará o evento de "quando o site terminar de carregar":


<div data-gist-id="315f46d1788118b5b044" data-gist-show-loading="false"></div>

Este evento é quase sempre necessário pois o jQuery trabalha com os elementos HTML da página, e se você inserir o script no <code><head></code> e sair rodando jQuery nos elementos, receberá mensagens de erro pois o jQuery não irá encontrar os elementos que ainda não foram carregados.

Criado o nosso evento, podemos começar a desenvolver o nosso efeito de foco na lista de imagens, voltando a nossa lista de passos, começaremos pelo começo:

<blockquote>Ao passar o mouse em cima de uma imagem (evento que irá disparar o efeito)
</blockquote>
Precisamos então, criar um um evento de hover nas imagens:


<div data-gist-id="87b43216b6f1c3d477b8" data-gist-show-loading="false"></div>

Vamos parar aqui para entender aquela primeira linha separando-a em partes:

<code><span style="background: cyan;">$(<span style="background: yellow;">'ul.lista-imagens li img'</span>)</span>.<span style="background: orange;">hover(<span style="background: lime;">function() { ... }</span>)</span>;</code>

Na parte em <span style="background: cyan;">azul</span> temos uma chamada à função <code>$()</code> que é um atalho da <strong>função principal jQuery</strong>. Praticamente toda linha de jQuery começa dessa mesma forma.

Na parte em <span style="background: yellow;">amarela</span> temos o seletor, que segue o mesmo padão de seletores CSS e serve para nos ajudar a localizar o evento ao qual aplicaremos o efeito, evento ou método. Nesse caso, estamos procurando as os elementos <code>img</code> que estejam dentro de um <code>li</code>, que por sua vez estejam dentro de uma <code>ul</code> com classe <code>lista-imagens</code>, o que no CSS seria exatamente o seletor que usamos: <code style="background: yellow;">ul.lista-imagens li img</code>.

Na parte em <span style="background: orange;">laranja</span> temos uma chamada ao método <code>hover()</code> este método é ativado sempre que passamos o mouse sobre o elemento identificado no seletor (parte amarela). O método [.hover()](http://api.jquery.com/hover/) possui dois parâmetros: primeiro o que será executado quando o mouse "entrar" no elemento e o segundo quando o mouse "sair" do elemento.

E por fim, na parte em <span style="background: lime;">verde</span>, temos o primeiro parâmetro do método <code>hover()</code>... Tudo que estiver dentro dessa parte será executado ao passar o mouse no elemento identificado pelo seletor.

<blockquote>Todas as imagens se apagam...
</blockquote>
Continuando o nosso código, vamos inserir a linha que irá escurecer (apagar / diminuir a opacidade / esmaecer) todas as imagens da lista... Para isso usaremos o método [.fadeTo()](http://api.jquery.com/fadeTo/) do jQuery.


<div data-gist-id="0813faee2ec019f22a5f" data-gist-show-loading="false"></div>

O método <code>.fadeTo()</code> possui dois parâmetros obrigatórios: primeiro a velocidade de transição em milisegundos (onde 'fast' significa cerca de 1/3 de segundo) e o segundo parâmetro é a opacidade de destino que vai de 0 até 1.

Com esse efeito, todas as imagens da lista ficarão com 30% de opacidade (70% transparentes). Perceba que escurecemos também a imagem que estamos com o mouse em cima.

<blockquote>... exceto a imagem que estamos com o mouse em cima
</blockquote>
Agora precisamos "filtrar" esse efeito de escurecer e fazer com que ele afete todas as imagens <strong>exceto a imagem que estamos com o mouse em cima</strong>:


<div data-gist-id="2034c27a54867a9362d0" data-gist-show-loading="false"></div>

Perceba que inserimos o <code>.not(this)</code>, esse método [.not()](http://api.jquery.com/not/) faz com que, [nesse caso] depois de selecionar todas as imagens da lista, nós excluímos o <code>this</code> que faz referência ao elemento que ativou o efeito.

Se você [testar o script](http://jsbin.com/odaga3/2/) que fizemos até agora, perceberá que as imagens estão apagando corretamente, mas não estão acendendo novamente quando tiramos o mouse de uma das imagens.

<blockquote>Ao tirar o mouse de cima da imagem
</blockquote>
Precisamos adicionar o segundo parâmetro do <code>.hover()</code>, este segundo parâmetro é executado quando tiramos o mouse do elemento que ativou o efeito.


<div data-gist-id="c7cb0eaf1c5527bf8780" data-gist-show-loading="false"></div>

<blockquote>Todas as imagens se acendem voltando ao estado original
</blockquote>
Agora só precisamos inserir o mesmo código que usamos para escurecer as imagens, sem precisar filtar o <code>this</code>, e mudando a opacidade para 1:


<div data-gist-id="e5464553ec32a469b82d" data-gist-show-loading="false"></div>

Com esse código o nosso efeito já está pronto, [veja aqui ele funcionando](http://jsbin.com/odaga3/3/).

Você provavelmente vai notar que o efeito fica "enfileirado", ou seja, se passarmos o mouse sobre várias imagens rapidamente o efeito vai ficar acontecendo um depois do outro como se o código estivesse agindo sozinho.

Sabendo disso, precisamos fazer todos os efeitos "pararem" antes de começar um novo, isso vai fazer com que, cada vez que passarmos o mouse sobre uma imagem, o efeito seja executado imediatamente e, se houverem outros efeitos na fila, eles sejam sobrepostos... Fazemos isso usando o método [.stop()](http://api.jquery.com/stop/) antes do <code>.fadeTo()</code>:


<div data-gist-id="4d58cb191f0b51b661c2" data-gist-show-loading="false"></div>

Agora sim nosso efeito ficou [completo](http://jsbin.com/odaga3/4/) e, pasmem, com apenas cinco linhas:


<div data-gist-id="a0cabc02b5aa977faecd" data-gist-show-loading="false"></div>

Este é apenas um pequeno exemplo do poder do jQuery, amanhã irei escrever mais sobre ele, com outros efeitos legais e tão simples quanto esse que você viu aqui. :)

Espero que você tenha gostado! Deixe seu comentário com sua dúvida ou elogio. E não deixe de [me seguir no Twitter](http://twitter.com/tiutalk) para ficar sabendo dos artigos aqui do blog em tempo real!

### Quer ver o passo-a-passo do seu efeito em jQuery?
É simples: [Siga-me no Twitter](http://twitter.com/tiutalk), dê um RT (retweet) com um link para este artigo e descreva o seu efeito em um comentário nesse artigo. :)

