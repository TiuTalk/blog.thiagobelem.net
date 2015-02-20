---
layout: post
title: Traduzindo arquivos POT com o PoEdit
excerpt: 'O PoEdit é um ótimo programa para traduzir arquivos PO
  e POT, usados pelo gettext: o melhor sistema de tradução de softwares, sites e sistemas
  atualmente.'

date: '2011-02-17 13:10:58 -0200'
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
Hoje vou fazer um pequeno tutorial explicando como traduzir arquivos **.pot** utilizando um programa chamado [PoEdit](http://www.poedit.net/).

Os arquivos **.po** e **.pot** são arquivos utilizados em um sistema de tradução chamado [gettext](http://en.wikipedia.org/wiki/GNU_gettext), sobre o qual falarei em um próximo post.

### Download e Instalação
Faça o [download](http://www.poedit.net/download.php) do programa correto para o seu sistema operacional e instale-o.

No Linux você pode instalar o pacote [poedit](apt:poedit) (clicando nesse link).

Quando você abrir o PoEdit pela primeira vez ele pedirá o seu nome e e-mail, esses dados serão inseridos nos arquivos gerados por ele no final do processo.

### Carregando um arquivo POT

* Clique em **Arquivo > Novo catálogo de arquvo POT** e escolha um arquivo pot para ser traduzido.
* Preencha apenas os três campos mais importantes: **Nome do projeto**, **Linguagem** e **País**
* Se você vai traduzir o seu site/sistema para francês, no campo linguagem escolha "French" e no campo país escolha "France".. Esses dados são sempre referentes ao idioma da nova tradução, não o idioma de origem.
* Para a tradução de arquivos POT você pode deixar os outros campos vazios e não mudar nada nas outras abas (Caminhos e Palavras-Chave)
* Quando você der OK ele irá pedir um lugar para salvar o arquivo **.po** que ele irá gerar, escolha a mesma pasta onde está o arquivo **.pot**.

### Interface de tradução
A interface do PoEdit é bem simples... Você verá uma lista de <em>strings</em> (frases) a esquerda que são as frases no idioma original... A direita vão aparecer as traduções de cada uma dessas frases.

Quando você clica sobre uma frase, ela irá aparecer na primeira caixa de texto da parte inferior da tela, na segunda caixa de texto você vai inserir a tradução daquela frase.

Na parte mais inferior da tela (status bar) você pode ver o progresso da tradução: quantas frases foram traduzidas, quantas ainda não foram traduzidas e etc.

### Finalizando
Feito isso é só você salvar o catálogo (arquivo **.po**) e, caso precise mudar alguma coisa, fazer alguma correção, ou continuar a tradução... É só abrir esse arquivo **.po** novamente! :)

Espero que tenham gostado! :)

