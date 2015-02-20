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


<div data-gist-id="9c3c9f2ae617b7156ca7" data-gist-show-loading="false"></div>

Agora, dentro de cada item, vamos adicionar uma imagem (IMG) com um link (A):


<div data-gist-id="df5d4c363cec60213159" data-gist-show-loading="false"></div>

Agora vamos inserir, após as imagens com links, parágrafos (P) contendo a descrição (ou titulo) do destaque e que também estão com link (A) para o destaque:


<div data-gist-id="9e65d2398b9208768000" data-gist-show-loading="false"></div>

Algumas pessoas podem ter pensado que errei ao criar dois links ao invés de inserir o parágrafo (P) dentro do primeiro link, após a imagem... Mas isso seria errado pois o link é um elemento de linha (<em>in-line</em>) e o parágrafo é um elemento de bloco (<em>block</em>) e nunca devemos inserir um elemento <em>block</em> dentro de um <em>in-line</em>.

Criamos também, antes de cada parágrafo, uma <strong>div.fundo</strong> vazia que será o fundo preto transparente da descrição/titulo de cada item.

Até agora nosso sistema de destaques ficou assim:
[](/arquivos/2010/02/destaque1.jpg)

Por fim, nós vamos inserir mais um link, dessa vez vazio, antes da lista (UL)... Esse link será a faixa [Destaques] que teremos sobre a imagem e a nossa marcação HTML está pronta:


<div data-gist-id="9e938cee3f1fb0209d96" data-gist-show-loading="false"></div>

<h3>Melhorando a aparência (CSS)</h3>
Começaremos criando um arquivo CSS e nele definiremos que a lista (UL), os seus itens (LI) e as imagens não terão estilo, margem ou espaçamento:


<div data-gist-id="5b78f22fd179b4caa846" data-gist-show-loading="false"></div>

Agora nós definiremos a altura e largura de todos os elementos usados no destaque:


<div data-gist-id="2ee5d7838c0bf43b0974" data-gist-show-loading="false"></div>

Agora nós definimos o posicionamento de todos os elementos, o estilo dos elementos que compoem a descrição de cada item e o fundo da faixa [Desaques] que ficará sobre as imagens:


<div data-gist-id="2b9e271f89ee70fd6540" data-gist-show-loading="false"></div>

Por enquanto vamos ficar por aqui... O HTML e o CSS do sistema de destaques está pronto... Na [Parte 2](/criando-um-sistema-de-destaques-parte-2) falaremos sobre o efeito em jQuery que fará a transição dos slides e colocaremos o paginador.

Quer ver como ficou o sistema de destaques até agora? Veja [RAR](/exemplos/destaque/parte1.rar) com os arquivos.

Espero que tenham gostado! :)

