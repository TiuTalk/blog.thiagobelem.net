---
layout: post
title: Entendendo os seletores do jQuery
excerpt: Veja exemplos simples e práticos de uso dos seletores do jQuery. Entenda
  como eles funcionam e pra que servem.

date: '2009-08-07 19:41:39 -0300'
categories:
- Javascript
- jQuery
- Artigos
tags:
- jQuery
- Seletores
---
Hoje vou falar sobre uma parte bem simples mas de enorme importância no uso do jQuery: os <a href="http://api.jquery.com/category/selectors/" target="_blank">seletores</a>.

Através dos seletores você escolhe com qual elemento do HTML irá trabalhar e/ou interagir.

Os seletores do jQuery são muito parecidos com os seletores do CSS onde você identifica cada elemento usando uma sintaxe em particular... Pra quem entende de CSS vai ser bem simples.

Suponhamos que você tenha três DIVs em seqüência e queira colocar uma borda apenas na div com classe "carros", exemplo:


[code language="html"]<div>Olá mundo!</div>
<div class="carros">Olá mundo!</div>
<div class="naves">Olá mundo!</div>[/code]

Nossa linha do jQuery que coloca uma borda ficaria assim:
[code language="javascript"]// Assim:
$("div.carros").css('border', '1px solid red');

// Ou assim:
$(".carros").css('border', '1px solid red');
[/code]

Percebam que a segunda regra vai afetar TODOS os elementos que tenham a class "carros". :)

Agora vamos mudar a linha de ação um pouco e afetar todas as DIVs exceto a que tenha a classe "naves"... Para isso vamos usar o seletor "div" e excluir o elemento que tenha class "naves", assim:
[code language="javascript"]
$("div[class!='naves']").css('border', '1px solid red');[/code]

Agora suponhamos que você queira fazer três ações sobre o mesmo elemento, você pode fazer isso de três formas:
[code language="javascript"]// Assim:
$("div.carros").css('border', '1px solid red');
$("div.carros").css('color', 'blue');

// Ou assim:
$("div.carros").css('border', '1px solid red').css('color', 'blue');

// Ou assim:
var elemento = $("div.carros");
elemento.css('border', '1px solid red');
elemento.css('color', 'blue');

// E até assim:
var elemento = $("div.carros");
elemento.css('border', '1px solid red').css('color', 'blue');
[/code]

Existem várias outras formas e atalhos legais para se usar nos seletores... Para selecionar dois (ou mais) elementos você poderia fazer assim:
[code language="javascript"]$("div.carros, div.naves, div#topo").css('border', '1px solid red');[/code]
Sabe aquele efeito legal de zebra nas tabelas? O famoso "cor sim, cor não, cor sim, cor não"? Você pode ter esse efeito usando apenas uma linha de jQuery sem definir nenhuma classe ou rodar nenhum codigo dentro da criação da sua tabela, assim:
[code language="javascript"]$("tr:odd td").css('background', '#008800');[/code]
Isso vai afetar todos os <td> que estão dentro dos <strong><tr> ímpares</strong> (por causa do <strong>odd</strong>), ou seja: 1°, 3°, 5° e por aí vai! Legal não? :)

Percebam que o único exemplo de função/método que eu usei foi o css(), mas existem dezenas e dezenas de outras funções legais no jQuery e a maioria deve estar associada a um seletor.

Espero que tenham gostado e não deixem de ler a <a href="http://api.jquery.com/category/selectors/" target="_blank">documentação oficial sobre os seletores</a>!

