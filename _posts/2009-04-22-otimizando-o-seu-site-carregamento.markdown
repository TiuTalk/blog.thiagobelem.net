---
layout: post
title: Otimizando o seu site – Carregamento

date: '2009-04-22 20:53:09 -0300'
categories:
- Artigos
- Otimização
- Apache
tags: []
---
Você tem um site mas acha que ele está demorando um pouco pra carregar? Acha que o HTML está muito pesado, ou tem muitos CSSs e muitos JSs na mesma página e tudo parece um inferno? Seus problemas acabaram!

Hoje vou ensinar como fazer para usar recursos do servidor e agilizar o reduzir de página em até 10x.

Primeiro, o mais simples:

#### Codificando sua página (HTML) com GZip
A codificação com GZip fará o HTML do seu site ser carregado mais rapidamente pelo visitante, é só colocar a seguinte linha no começo do seu PHP, junto do início da sessões, por exemplo:


<div data-gist-id="b63400a19db1369ee70e" data-gist-show-loading="false"></div>

--

#### Definindo expire-headers para imagens, Javascript, CSS e etc
Todos os elementos de um site podem ser cacheados (salvos no computador do visitante) para economizar tempo de carregamento. E sempre que esses arquivos são salvos é preciso definir um <em>expire-header</em>, ou seja, quanto tempo o arquivo ficará salvo.

Se você já terminou o seu site, ele está no ar, as imagens têm nomes diferentes e você quer economizar <em>bandwidth</em> (tráfego mensal), essa dica é pra você.

Edite o arquivo <span style="color: #ff6600;"><strong>.htaccess</strong></span> na raiz do seu site (se o arquivo não existe [veja aqui como criá-lo](/instalando-o-no-www-no-seu-site)) e coloque o seguinte código nele:


<div data-gist-id="f0d0f15f63639334628c" data-gist-show-loading="false"></div>

Aí é só editar na primeira linha quais tipos de arquivos serão cacheados e na segunda linha, até quando eles serão cacheados. Como precisamos definir uma data, coloquei 30 de Abril de 2090, mas acredito que você possa colocar a data que bem entender.

--

#### Minificando (Reduzindo) arquivos JS e CSS
Você terminou o seu site cheio de folhas de estilos e arquivos JS com vários scripts de jQuery, Prototype e etc? E tachando que tá tudo muito pesado? Não se desespere! Há uma saída:

Existe um recurso chamado <strong>Minify</strong>: ele compacta arquivos CSS e JS tirando quebras de linhas e espaços para deixar o arquivo muito menor.. E o melhor, além de juntar todos os arquivos em um só, ele faz isso sem alterar o código fonte deles.

1 - Faça o download do Minify aqui: [http://code.google.com/p/minify/](http://code.google.com/p/minify/)

2 - Coloque a pasta <span style="color: #99cc00;"><strong>/min/</strong></span> dentro da raiz do seu site

3 - Acesse montador de URLs (URL Builder) dele, encontrado no endereço <span style="color: #0000ff;">www.seusite.com/min/builder/</span>

4 - Adicione os arquivos que serão reduzidos e depois clique em [Update]

6 - Ele te dará uma linha de HTML de inclusão de CSS ou JS, é só colocar essa linha no seu HTML e pronto! :D

Veja um exemplo:

Antes o seu HTML estava assim:


<div data-gist-id="a9544b8db451311bab42" data-gist-show-loading="false"></div>

Agora, depois de usar o Minify, ele ficou assim:


<div data-gist-id="2761d2497b5e1c1f01ab" data-gist-show-loading="false"></div>

Viu só? Você pode dar uma olhada no [Guia do Usuário](http://code.google.com/p/minify/wiki/UserGuide) do Minify caso tenha alguma dúvida.

--

Espero que tenham gostado e que essas dicas deixem o seu site mais rápido! :)

Se você gostou das dicas e usou esses recursos no seu site, não esqueça de deixar um comentário dizendo como ficou e com o endereço do site para eu ver.

Abraços!

