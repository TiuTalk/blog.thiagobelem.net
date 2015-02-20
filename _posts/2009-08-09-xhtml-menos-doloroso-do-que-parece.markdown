---
layout: post
title: 'XHTML: Menos doloroso do que parece'
excerpt: O XHTML dita a nova regra de organização e desenvolvimento de código HTML,
  tornando o seu site muito mais organizado, leve e "cross-browser". :)

date: '2009-08-09 07:46:04 -0300'
categories:
- HTML
- Artigos
tags:
- HTML
- xHTML
---
Atualmente as pessoas parecem ter medo do XHTML, acham que sair do HTML e ir para o XHTML vai exigir tempo, sangue, suor e lágrimas... O que essas pessoas não percebem é que essa mudança é incrivelmente simples e torna o seu trabalho e a sua vida MUITO mais organizada.

Se isso parece errado para você:

<div data-gist-id="8a2fc08b66c271642f8c" data-gist-show-loading="false"></div>

Você provavelmente vai preferir isso:

<div data-gist-id="f5ed45fd779d075b90e4" data-gist-show-loading="false"></div>

Você já andou meio caminho... Essa é a regra principal do XHTML... Todos os elementos precisam ser fechados na ordem inversa a que foram abertos... Como assim? Se você abriu as tags 1, 2 e 3 vai precisar fechar 3, 2 e 1. :)

Por exemplo, esse código:

<div data-gist-id="ac3aa4fc7dadf98df27d" data-gist-show-loading="false"></div>

Segundo o XHTML ele deveria ser fechado dessa forma:

<div data-gist-id="70640ad11c7d17d8332a" data-gist-show-loading="false"></div>

Isso tudo é muito mais organizado e mais fácil de ler, concordam?

Mas existem outras tags que não são de marcação e por isso não tem uma segunda tag de fechamento, é o exemplo do BR, HR, IMG, INPUT... Essas tags também precisam ser fechadas! E você me pergunta, mas como eu faço isso?

E eu te mostro a resposta:

<div data-gist-id="b216c109098d4a07f670" data-gist-show-loading="false"></div>

Viram? É só colocar uma barra (pra direita) antes do > que termina a tag e pronto! :)

Existem ainda outras regras que ditam uma boa semântica e organização do codigo XHTML como "todas as tags devem ser em minúsculo" e outras que especificam uma lista de <strong>propriedades</strong> obrigatórias pra cada elemento como o <a> tem que ter title, e o <img> tem que ter src e alt.. :)

Um outro ponto importante do XHTML é o DOCTYPE que informa a definição do XHTML que se esta usando, são três tipos:


<div data-gist-id="8440ac9754e9cc1a605d" data-gist-show-loading="false"></div>

O <strong>DOCTYPE Strict</strong> deve ser usado quando se cumpre todas as especificações do XHTML e ele não validará enquanto TUDO não foi 100% correto e seguindo os [padrões](http://www.w3.org/TR/xhtml1/) definidos pelo W3C.

<div data-gist-id="f8de953ee6b7f13f7057" data-gist-show-loading="false"></div>

Já o <strong>DOCTYPE Transitional</strong> (que deve ser usado pela maioria dos sites) é quando você saiu do HTML e está em transição para o XHTML perfeito, permitindo que o seu site seja validado com menos exigências.

<div data-gist-id="2426d19fcec363b842a1" data-gist-show-loading="false"></div>

E tem o <strong>DOCTYPE Frameset</strong> que você vai usar quando seu site tiver frames e/ou iFrames (argh).

Até a próxima! :)

<p style="text-align: right; font-size: 10px">Fonte: [PHPBuilder.com](http://www.phpbuilder.com/columns/marc_plotz06302009.php3)

