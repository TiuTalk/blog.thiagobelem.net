---
layout: post
title: Criando índices textuais
excerpt: Aprenda a trocar índices numéricos (IDs) por índices textuais e deixe o as
  URLs do seu site muito mais amigáveis e seguras com esse recurso.

date: '2009-06-13 03:17:33 -0300'
categories:
- PHP
- Artigos
- Otimização
- Segurança
tags:
- PHP
- "Índices Textuais"
---
Sabe quando estamos vendo um vídeo no YouTube e olhamos o ID do vídeo no link e não vemos um ID numérico, mas vemos um id textual (feito com letras e números), mas ou menos assim: <strong><span style="color: #3366ff;">KGjTdt2AeGA</span></strong>?

Esse tipo de índice é muito mais amigável, pois quando temos muitos registros no banco de dados fica "feio" mostrar <strong>18713543</strong> na URL.

Existe uma função pronta <span style="color: #808080;">(que encontrei [aqui](http://kevin.vanzonneveld.net/techblog/article/create_short_ids_with_php_like_youtube_or_tinyurl/), criada pelo Kevin Zonneveld)</span> e que usa técnicas de encriptação para fazer o trabalho de converter números em letras e vice-e-versa.

<h3>Código da função</h3>
Vamos ao código da função e depois eu explico como usá-la:


<div data-gist-id="c3527372a0085c89fe23" data-gist-show-loading="false"></div>

Se você quiser, pode fazer o [download do arquivo (.txt) com a função](/arquivos/2009/06/idtextual.txt) (com a indentação correta).

<h3>Usando a função</h3>
Para usar a função é bem simples, veja a conversão de número em texto:


<div data-gist-id="0351974eee362405f882" data-gist-show-loading="false"></div>

E se usarmos o texto como argumento, definindo o segundo parâmetro como true, teremos o ID novamente:


<div data-gist-id="381b6f183b748c5d36b7" data-gist-show-loading="false"></div>

--

Essa função é bem legal pois além de deixar o sistema mais <strong>seguro</strong> (não é só mudar de 58 pra 57 na URL pra tentar acessar outro registro do banco) deixa o sistema mais <strong>profissional</strong> (não é todo mundo que mostra IDs textuais por aí). ;)

Espero que tenham gostado!

Não se esqueçam de assinar o [Twitter](http://twitter.com/tiutalk) para ter acesso à todas as novidades em tempo real.

