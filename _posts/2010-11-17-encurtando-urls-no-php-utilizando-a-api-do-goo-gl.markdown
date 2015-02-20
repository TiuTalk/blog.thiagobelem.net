---
layout: post
title: Encurtando URLs no PHP utilizando a API do goo.gl
excerpt: Aprenda a encurtar URLs pelo PHP utilizando a classe de API do [goo.gl](http://goo.gl/),
  o serviço de encurtamento de URLs do Google.

date: '2010-11-17 01:37:09 -0200'
categories:
- PHP
- Otimização
- Orientação a objetos
- APIs
tags:
- PHP
- Google
- Goo.gl
- API
---
Boa madrugada pra todos!

Depois de algumas horas de insônia resolvi fazer uma classe que, creio eu, vai ser útil pra algumas pessoas por ai: uma classe para encurtar URLs utilizando a API do "novo" serviço de encurtamento do <strong>Google</strong>, o [goo.gl](http://goo.gl/).
<a id="more"></a><a id="more-991"></a>

O código da classe é bem simples:


<div data-gist-id="7150f7891222896a66b5" data-gist-show-loading="false"></div>

Essa classe bem simples possui dois métodos: um para fazer uma requisição HTTP utilizando a biblioteca cURL e outro para encurtar a URL (que utiliza o método de requisição).

O retorno do método <code>Googl::shorten()</code> vai ser a URL encurtada ou um array de URLs encurtadas (caso você passe um array como parâmetro).

Um ponto importante sobre essa classe é a utilização da função [filter_var()](http://www.php.net/manual/en/function.filter-var.php) para verificar se uma URL é válida antes de tentar encurtar ela... Essa é uma função muito útil para verificar o conteúdo de variáveis.

## Como usar essa classe?
Veja um exemplo:


<div data-gist-id="1aae156a3206ee7c7738" data-gist-show-loading="false"></div>

Como resultado desse exemplo você teria uma URL encurtada economizando 75 caracteres!

### Usando uma função pra facilitar as coisas
Você também pode criar uma função que faz o trabalho de instanciar a classe pra você!


<div data-gist-id="357e591d145ec05a2821" data-gist-show-loading="false"></div>

Com isso seria só usar:


<div data-gist-id="c85e7041b7a3326dfaef" data-gist-show-loading="false"></div>

### Download do código fonte
Caso você tenha preguiça de copiar e colar, pode baixar o [arquivo com código fonte](/arquivos/googl.class.phps) dela e sair usando!

Espero que tenham gostado! :)

