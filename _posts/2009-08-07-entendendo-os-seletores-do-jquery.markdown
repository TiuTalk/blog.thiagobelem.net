---
layout: post
status: publish
published: true
title: Entendendo os seletores do jQuery
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Veja exemplos simples e práticos de uso dos seletores do jQuery. Entenda
  como eles funcionam e pra que servem.
wordpress_id: 612
wordpress_url: http://blog.thiagobelem.net/?p=612
date: '2009-08-07 19:41:39 -0300'
date_gmt: '2009-08-07 22:41:39 -0300'
categories:
- Javascript
- jQuery
- Artigos
tags:
- jQuery
- Seletores
---
<p>Hoje vou falar sobre uma parte bem simples mas de enorme importância no uso do jQuery: os <a href="http://api.jquery.com/category/selectors/" target="_blank">seletores</a>.</p>
<p>Através dos seletores você escolhe com qual elemento do HTML irá trabalhar e/ou interagir.</p>
<p>Os seletores do jQuery são muito parecidos com os seletores do CSS onde você identifica cada elemento usando uma sintaxe em particular... Pra quem entende de CSS vai ser bem simples.</p>
<p>Suponhamos que você tenha três DIVs em seqüência e queira colocar uma borda apenas na div com classe "carros", exemplo:</p>
<p>[code language="html"]&lt;div&gt;Olá mundo!&lt;/div&gt;<br />
&lt;div class=&quot;carros&quot;&gt;Olá mundo!&lt;/div&gt;<br />
&lt;div class=&quot;naves&quot;&gt;Olá mundo!&lt;/div&gt;[/code]</p>
<p>Nossa linha do jQuery que coloca uma borda ficaria assim:<br />
[code language="javascript"]// Assim:<br />
$(&quot;div.carros&quot;).css('border', '1px solid red');</p>
<p>// Ou assim:<br />
$(&quot;.carros&quot;).css('border', '1px solid red');<br />
[/code]</p>
<p>Percebam que a segunda regra vai afetar TODOS os elementos que tenham a class "carros". :)</p>
<p>Agora vamos mudar a linha de ação um pouco e afetar todas as DIVs exceto a que tenha a classe "naves"... Para isso vamos usar o seletor "div" e excluir o elemento que tenha class "naves", assim:<br />
[code language="javascript"]<br />
$(&quot;div[class!='naves']&quot;).css('border', '1px solid red');[/code]</p>
<p>Agora suponhamos que você queira fazer três ações sobre o mesmo elemento, você pode fazer isso de três formas:<br />
[code language="javascript"]// Assim:<br />
$(&quot;div.carros&quot;).css('border', '1px solid red');<br />
$(&quot;div.carros&quot;).css('color', 'blue');</p>
<p>// Ou assim:<br />
$(&quot;div.carros&quot;).css('border', '1px solid red').css('color', 'blue');</p>
<p>// Ou assim:<br />
var elemento = $(&quot;div.carros&quot;);<br />
elemento.css('border', '1px solid red');<br />
elemento.css('color', 'blue');</p>
<p>// E até assim:<br />
var elemento = $(&quot;div.carros&quot;);<br />
elemento.css('border', '1px solid red').css('color', 'blue');<br />
[/code]</p>
<p>Existem várias outras formas e atalhos legais para se usar nos seletores... Para selecionar dois (ou mais) elementos você poderia fazer assim:<br />
[code language="javascript"]$(&quot;div.carros, div.naves, div#topo&quot;).css('border', '1px solid red');[/code]<br />
Sabe aquele efeito legal de zebra nas tabelas? O famoso "cor sim, cor não, cor sim, cor não"? Você pode ter esse efeito usando apenas uma linha de jQuery sem definir nenhuma classe ou rodar nenhum codigo dentro da criação da sua tabela, assim:<br />
[code language="javascript"]$(&quot;tr:odd td&quot;).css('background', '#008800');[/code]<br />
Isso vai afetar todos os &lt;td&gt; que estão dentro dos <strong>&lt;tr&gt; ímpares</strong> (por causa do <strong>odd</strong>), ou seja: 1°, 3°, 5° e por aí vai! Legal não? :)</p>
<p>Percebam que o único exemplo de função/método que eu usei foi o css(), mas existem dezenas e dezenas de outras funções legais no jQuery e a maioria deve estar associada a um seletor.</p>
<p>Espero que tenham gostado e não deixem de ler a <a href="http://api.jquery.com/category/selectors/" target="_blank">documentação oficial sobre os seletores</a>!</p>
