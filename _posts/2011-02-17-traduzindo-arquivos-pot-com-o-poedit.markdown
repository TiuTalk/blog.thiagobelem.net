---
layout: post
status: publish
published: true
title: Traduzindo arquivos POT com o PoEdit
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: 'O <strong>PoEdit</strong> é um ótimo programa para traduzir arquivos PO
  e POT, usados pelo gettext: o melhor sistema de tradução de softwares, sites e sistemas
  atualmente.'
wordpress_id: 1418
wordpress_url: http://blog.thiagobelem.net/?p=1418
date: '2011-02-17 13:10:58 -0200'
date_gmt: '2011-02-17 15:10:58 -0200'
categories:
- Desenvolvimento
- Artigos
tags:
- po
- pot
- poedit
- tradução
- translation
---
<p>Hoje vou fazer um pequeno tutorial explicando como traduzir arquivos <strong>.pot</strong> utilizando um programa chamado <a href="http://www.poedit.net/">PoEdit</a>.</p>
<p>Os arquivos <strong>.po</strong> e <strong>.pot</strong> são arquivos utilizados em um sistema de tradução chamado <a href="http://en.wikipedia.org/wiki/GNU_gettext">gettext</a>, sobre o qual falarei em um próximo post.</p>
<h3>Download e Instalação</h3>
<p>Faça o <a href="http://www.poedit.net/download.php">download</a> do programa correto para o seu sistema operacional e instale-o.</p>
<p>No Linux você pode instalar o pacote <a href="apt:poedit">poedit</a> (clicando nesse link).</p>
<p>Quando você abrir o PoEdit pela primeira vez ele pedirá o seu nome e e-mail, esses dados serão inseridos nos arquivos gerados por ele no final do processo.</p>
<h3>Carregando um arquivo POT</h3>
<ol>
<li>Clique em <strong>Arquivo &gt; Novo catálogo de arquvo POT</strong> e escolha um arquivo pot para ser traduzido.</li>
<li>Preencha apenas os três campos mais importantes: <strong>Nome do projeto</strong>, <strong>Linguagem</strong> e <strong>País</strong>
<ul>
<li>Se você vai traduzir o seu site/sistema para francês, no campo linguagem escolha "French" e no campo país escolha "France".. Esses dados são sempre referentes ao idioma da nova tradução, não o idioma de origem.</li>
<li>Para a tradução de arquivos POT você pode deixar os outros campos vazios e não mudar nada nas outras abas (Caminhos e Palavras-Chave)</li>
</ul>
</li>
<li>Quando você der OK ele irá pedir um lugar para salvar o arquivo <strong>.po</strong> que ele irá gerar, escolha a mesma pasta onde está o arquivo <strong>.pot</strong>.</li>
</ol>
<h3>Interface de tradução</h3>
<p>[caption id="attachment_1421" align="alignright" width="259" caption="Interface do PoEdit"]<a href="http://blog.thiagobelem.net/wp-content/uploads/2011/02/poedit.png"><img class="size-medium wp-image-1421" title="PoEdit" src="http://blog.thiagobelem.net/wp-content/uploads/2011/02/poedit.png" alt="" width="259" /></a>[/caption]</p>
<p>A interface do PoEdit é bem simples... Você verá uma lista de <em>strings</em> (frases) a esquerda que são as frases no idioma original... A direita vão aparecer as traduções de cada uma dessas frases.</p>
<p>Quando você clica sobre uma frase, ela irá aparecer na primeira caixa de texto da parte inferior da tela, na segunda caixa de texto você vai inserir a tradução daquela frase.</p>
<p>Na parte mais inferior da tela (status bar) você pode ver o progresso da tradução: quantas frases foram traduzidas, quantas ainda não foram traduzidas e etc.</p>
<h3>Finalizando</h3>
<p>Feito isso é só você salvar o catálogo (arquivo <strong>.po</strong>) e, caso precise mudar alguma coisa, fazer alguma correção, ou continuar a tradução... É só abrir esse arquivo <strong>.po</strong> novamente! :)</p>
<p>Espero que tenham gostado! :)</p>