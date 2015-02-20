---
layout: post
title: 'Open Search: Adicionando a Busca Rápida no seu site'
excerpt: Aprenda a incluir o recurso de Open Search no seu site e faça com que ele
  apareça na barrinha de Busca Rápida do FireFox e de vários outros sistemas e navegadores.

date: '2009-11-04 12:49:25 -0200'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Open Search
---
Fala gente,

Semana passada falei sobre a <strong>busca rápida</strong > (ou <em>Open Search</em>)... Muita gente ficou interessada em como poderiam incluir esse recurso em seus sites então eu fiz um scriptzinho pra facilitar a vida de vocês.

Pra você poder usar esse recurso no seu site o mesmo precisa ter suporte a busca via método GET... Método GET é quando os parâmetros são enviados na URL, veja o exemplo do Google:

<div data-gist-id="ab0a32bbb91d988a200a" data-gist-show-loading="false"></div>

Aquela parte no fim onde tem "<strong>?q=</strong>" significa que o parâmetro "<strong>q</strong>" está sendo passado por método GET, caso contrário você não veria nada na URL.

O que realmente importa é se o que foi buscado <strong>aparece na URL</strong> da pagina que mostra os resultados de busca, não importa como ou em qual posição... Faça uma busca aqui no blog e você verá que, o que você buscou, aparece na URL.

Sem mais baboseiras, vamos direto ao ponto:

Primeiro você precisa inserir um código HTML dentro do <head> do seu site que irá avisar os outros sites, sistemas e navegadores que o seu site tem um Open Search:


<div data-gist-id="63d0f2a328c82684ca14" data-gist-show-loading="false"></div>

Perceba que o código está apontando pra um arquivo <strong>opensearch.php</strong>, o nome do arquivo não importa, mas o seu conteúdo sim:


<div data-gist-id="f96a5550c7ac4d8acec3" data-gist-show-loading="false"></div>

Agora preste atenção no bloco de configuração no começo do arquivo!

Dê atenção a parte que tem "endereco_busca"... É ali que você precisa colocar a URL da sua página de busca (resultado de busca) e colocar <strong>{searchTerms}</strong> no lugar que irão os parâmetros de busca... Vamos voltar ao exemplo da busca do Google:

Se eu buscar por "Thiago Belem" a url de resultado vai ficar mais ou menos assim:

<div data-gist-id="ab0a32bbb91d988a200a" data-gist-show-loading="false"></div>

Então, criando um open search pra essa mesma busca do Google, teríamos isso na parte "endereco_busca":

<div data-gist-id="c20f1d1f4dd8a050cff9" data-gist-show-loading="false"></div>

As outras opções são fáceis de entender...

Pra quem gostou e quer saber mais: [http://www.opensearch.org/](http://www.opensearch.org/Home)

Espero que tenham gostado! :)

