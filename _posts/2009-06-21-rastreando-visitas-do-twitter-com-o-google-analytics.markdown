---
layout: post
title: Rastreando visitas do Twitter com o Google Analytics
excerpt: Aprenda a rastrear as visitas no seu site que vieram pelo seu perfil do Twitter.
  Você não precisa instalar nada no seu site nem no seu Twitter, só modificar as URLs
  que apontam pro seu site. ;)

date: '2009-06-21 00:23:02 -0300'
categories:
- Tutoriais
- Otimização
tags:
- SEO
- Google Analytics
- Twitter
---
Hoje uma visitante aqui do blog (Lia) me perguntou como rastrear as visitas vindas do <strong>Twitter</strong> usando o <strong>Google Analytics</strong>. Então eu procurei um pouquinho sobre o assunto (tenho que assumir que eu não tinha a mínima idéia) e vim lhes trazer a solução! :D

O <strong>Google Analytics</strong> permite que você insira parâmetros (variáveis) na URL do seu site que ele usará para alimentar os seus relatórios.

Pra quem ainda não tem o Google Analytics instalado no seu site (e não sabe o que tá perdendo) eu tenho que explica <a href="/inserindo-o-google-analytics-no-seu-site" target="_blank">como instalar o Google Analytics no seu site</a>.

Vamos a um exemplo prático:

Suponhamos que eu queira publicar um link (pro meu blog) no <a href="http://twitter.com/tiutalk" target="_blank">meu twitter</a>, o link normalmente seria:

<p style="padding-left: 30px;"><span style="color: #0000ff;">http://blog.thiagobelem.net/</span>

Mas quando eu olhasse os relatórios do GA, apareceria apenas "twitter.com" como site de referência, sem saber se foi no meu perfil ou não.

<p style="text-align: center;"><a href="/arquivos/2009/06/phpc3ezlypm.jpg"><img class="size-full wp-image-536 aligncenter" title="phpc3ezlypm" src="http://blog.thiagobelem.net/arquivos/2009/06/phpc3ezlypm.jpg" alt="phpc3ezlypm" width="501" height="188" /></a>

Então, pra fazer isso funcionar, adicionamos alguns parâmetros no fim da URL:

<p style="padding-left: 30px;"><span style="color: #0000ff;">http://blog.thiagobelem.net/<span style="color: #ff6600;">?utm_campaign=<span style="color: #ff00ff;">blog</span>&utm_source=<span style="color: #ff00ff;">twitter</span>&utm_medium=<span style="color: #ff00ff;">micro-blog</span></span></span>

E pra quem ficou preocupado com o limite de 140 caracteres: é só reduzir a sua nova URL em um sistema que reduz URLs, recomendo o <a href="http://tinyurl.com/" target="_blank">TinyURL</a>.

Se você ficar com dúvida, pode usar o <a href="http://www.google.com/support/analytics/bin/answer.py?answer=55578" target="_blank">criador de URLs para o Google Analytics.</a>

Com esses parâmetros o Google começará a separar as visitas que vieram do seu perfil, mostrando dessa forma:

<p style="text-align: center;"><a href="/arquivos/2009/06/phpkamz79pm.jpg"><img class="size-full wp-image-537 aligncenter" title="phpkamz79pm" src="http://blog.thiagobelem.net/arquivos/2009/06/phpkamz79pm.jpg" alt="phpkamz79pm" width="500" height="191" /></a>

Viram? :)

Espero que tenham gostado.. um abraço e até a próxima!

<p style="text-align: right;"><a href="http://cutroni.com/blog/2008/09/02/tracking-twitter/" target="_blank"><span style="color: #999999;"><span style="font-size: x-small;">Fonte</span></span></a>

