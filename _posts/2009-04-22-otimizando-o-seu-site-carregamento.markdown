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
<p>Você tem um site mas acha que ele está demorando um pouco pra carregar? Acha que o HTML está muito pesado, ou tem muitos CSSs e muitos JSs na mesma página e tudo parece um inferno? Seus problemas acabaram!</p>
<p>Hoje vou ensinar como fazer para usar recursos do servidor e agilizar o reduzir de página em até 10x.</p>
<p>Primeiro, o mais simples:</p>
<h4>Codificando sua página (HTML) com GZip</h4>
<p>A codificação com GZip fará o HTML do seu site ser carregado mais rapidamente pelo visitante, é só colocar a seguinte linha no começo do seu PHP, junto do início da sessões, por exemplo:</p>

[code language="php"]<?php
ob_start("ob_gzhandler");
?>[/code]

<p>--</p>
<h4>Definindo expire-headers para imagens, Javascript, CSS e etc</h4>
<p>Todos os elementos de um site podem ser cacheados (salvos no computador do visitante) para economizar tempo de carregamento. E sempre que esses arquivos são salvos é preciso definir um <em>expire-header</em>, ou seja, quanto tempo o arquivo ficará salvo.</p>
<p>Se você já terminou o seu site, ele está no ar, as imagens têm nomes diferentes e você quer economizar <em>bandwidth</em> (tráfego mensal), essa dica é pra você.</p>
<p>Edite o arquivo <span style="color: #ff6600;"><strong>.htaccess</strong></span> na raiz do seu site (se o arquivo não existe <a href="/instalando-o-no-www-no-seu-site" target="_blank">veja aqui como criá-lo</a>) e coloque o seguinte código nele:</p>

[code language="html"]
<filesMatch ".(ico|jpg|jpeg|png|gif|swf|css|js)$">
Header set Expires "Sun, 30 Apr 2090 20:00:00 GMT"
</filesMatch>
[/code]

<p>Aí é só editar na primeira linha quais tipos de arquivos serão cacheados e na segunda linha, até quando eles serão cacheados. Como precisamos definir uma data, coloquei 30 de Abril de 2090, mas acredito que você possa colocar a data que bem entender.</p>
<p>--</p>
<h4>Minificando (Reduzindo) arquivos JS e CSS</h4>
<p>Você terminou o seu site cheio de folhas de estilos e arquivos JS com vários scripts de jQuery, Prototype e etc? E tachando que tá tudo muito pesado? Não se desespere! Há uma saída:</p>
<p>Existe um recurso chamado <strong>Minify</strong>: ele compacta arquivos CSS e JS tirando quebras de linhas e espaços para deixar o arquivo muito menor.. E o melhor, além de juntar todos os arquivos em um só, ele faz isso sem alterar o código fonte deles.</p>
<p>1 - Faça o download do Minify aqui: <a title="Minify Project" href="http://code.google.com/p/minify/" target="_blank">http://code.google.com/p/minify/</a></p>
<p>2 - Coloque a pasta <span style="color: #99cc00;"><strong>/min/</strong></span> dentro da raiz do seu site</p>
<p>3 - Acesse montador de URLs (URL Builder) dele, encontrado no endereço <span style="color: #0000ff;">www.seusite.com/min/builder/</span></p>
<p>4 - Adicione os arquivos que serão reduzidos e depois clique em [Update]</p>
<p>6 - Ele te dará uma linha de HTML de inclusão de CSS ou JS, é só colocar essa linha no seu HTML e pronto! :D</p>
<p>Veja um exemplo:</p>
<p>Antes o seu HTML estava assim:</p>

[code language="html"]<head>
<title>Meu Site</title>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" /></p>
<p><!-- CSS --></p>
<link rel="stylesheet" href="layout.css" type="text/css" />
<link rel="stylesheet" href="noticias.css" type="text/css" />
<p><!-- JS -->
<script language="JavaScript" src="js/jquery.js" type="text/javascript"></script>
<script language="JavaScript" src="js/jquery.cycle.js" type="text/javascript"></script>
<script language="JavaScript" src="js/outroscript.js" type="text/javascript"></script>
</head>[/code]

<p>Agora, depois de usar o Minify, ele ficou assim:</p>

[code language="html"]<head>
<title>Meu Site</title>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" /></p>
<p><!-- CSS --></p>
<link type="text/css" rel="stylesheet" href="/min/f=layout.css,noticia.css" />
<p><!-- JS -->
<script type="text/javascript" src="/min/f=js/jquery.js,js/jquery.cycle.js,outroscript.js"></script>
</head>[/code]

<p>Viu só? Você pode dar uma olhada no <a href="http://code.google.com/p/minify/wiki/UserGuide" target="_blank">Guia do Usuário</a> do Minify caso tenha alguma dúvida.</p>
<p>--</p>
<p>Espero que tenham gostado e que essas dicas deixem o seu site mais rápido! :)</p>
<p>Se você gostou das dicas e usou esses recursos no seu site, não esqueça de deixar um comentário dizendo como ficou e com o endereço do site para eu ver.</p>
<p>Abraços!</p>
