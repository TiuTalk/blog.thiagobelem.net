---
layout: post
title: Listando seus vídeos do YouTube com PHP
excerpt: Com esse tutorial você poderá mostrar os seus últimos vídeos publicados no
  YouTube, no seu site de forma totalmente customizável.

date: '2011-02-04 12:51:30 -0200'
categories:
- PHP
- Tutoriais
- APIs
tags:
- PHP
- API
- cURL
- XML
- YouTube
- Feed RSS
- Simple XML
---
Hoje trago até vocês um tutorial bem simples: como listar seus últimos vídeos do YouTube utilizando PHP.

### Pré-requisitos
Vamos precisar de um servidor com as seguintes extensões habilitadas:

* [cURL](http://php.net/manual/book.curl.php)
* [SimpleXML](http://php.net/manual/book.simplexml.php)

O <strong>SimpleXML</strong> já vem habilitado no PHP, mas o <strong>cURL</strong> normalmente não.. Se você contratou uma hospedagem compartilhada provavelmente ambos já estão habilitados.

Pra quem não conhece o <strong>cURL</strong> (ou precisa habilitá-lo), recomendo a leitura: [Tutorial básico de cURL – Instalação, configuração e uso](/tutorial-basico-de-curl-instalacao-configuracao-e-uso)

Se você receber a seguinte mensagem de erro, significa que seu cURL não está habilitado:

> Fatal error: Call to undefined function curl_init()

### O código
O código para pegar os vídeos é bem simples, por isso vou colocá-lo inteiro sem explicá-lo passo-a-passo:

<div data-gist-id="9afbf4912e2fde79c3cd" data-gist-show-loading="false"></div>

Ao final desse código teremos o array <code>$videos</code> com a lista de vídeos do usuário... Para exibir o thumbnail de cada um dos vídeos devidamente linkado para o vídeo (no YouTube), podemos fazer assim:


<div data-gist-id="849591cd16a771b55047" data-gist-show-loading="false"></div>

Código-fonte do arquivo desse tutorial: [Snipplr](http://snipplr.com/view/48433/listando-seus-vdeos-do-youtube-com-php/)

Espero que tenham gostado!

