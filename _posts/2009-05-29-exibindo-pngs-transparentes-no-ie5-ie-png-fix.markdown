---
layout: post
title: Exibindo PNGs transparentes no IE5 – IE PNG Fix

date: '2009-05-29 00:08:07 -0300'
categories:
- HTML
- Tutoriais
tags: []
---
Muita gente que tá começando agora têm problemas quando usa imagens (com transparência e PNGs semi-transparentes) no Internet Explorer 5 e posteriores (até o 6).

Sei que parece loucura (pra alguns) se preocupar com o IE5 e 6, mas infelizmente esses navegadores ainda representam de 20% a 30% do mercado mundial atual, no Brasil então ele é muito mais comum.

Foi por causa disso que inventaram um tal de "PNG Fix", que é um arquivinho que você inclui no seu site e o IE5+ passa a "ler" os PNGs transparentes e semi-transparentes como se fosse um IE7. Para usar esse recurso é só seguir o passo-a-passo a seguir:

1 - Acesse o [download](http://www.twinhelix.com/css/iepngfix/iepngfix.zip) do zip contendo os arquivos que serão usados.

2 - Coloque os arquivos <span style="color: #ff6600;"><strong>iepngfix.htc</strong></span> e <strong><span style="color: #ff6600;">blank.gif</span></strong> na pasta do seu site.

3 - Insira o seguinte código HTML dentro do <head> do seu site:
[code language="html"]
<style type="text/css">
img, div { behavior: url(iepngfix.htc) }
</style>
[/code]

Vale lembrar que se você usar PNGs transparentes como fundo de outros elementos, você também precisa incluí-los na lista<span style="color: #999999;"> (img, div, input e etc.)</span>.

4 - Divirta-se.

Se você colocou os arquivos (.htc e .gif) em outras pastas você precisa alterar os caminhos corretamente, tanto no bloco de CSS (que vai dentro deo HTML, do passo 3) quanto dentro do HTC, que diz onde fica a imagem blank.gif.

Veja agora algumas vantagens do script listadas no site do script:

<ul>
<li>Ativação automática de transparência para os PNGs das página.</li>
<li>Suporta para os elementos <strong><img src="" /></strong>.</li>
<li>Suporta PNGs usados como fundo (background)</li>
<li>Suporta mudanças dinâmicas do SRC de uma imagem bem como mudanças de IDs e classes</li>
<li>Script muito pequeno (carregamento rápido)</li>
</ul>
