---
layout: post
title: Login automático em PHP usando cURL
excerpt: Aprenda a fazer um login automático em outros sites usando a biblioteca cURL
  e ter acesso a dados restritos de forma dinamica.

date: '2009-05-04 02:18:17 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Essa não é uma tarefa muito comum... Mas as vezes precisamos fazer um login automático (usando PHP) em outro site para pegar algumas informações dinamicamente.

Você pode fazer essa "façanha" usando uma biblioteca do PHP chamada cURL ([veja mais sobre o cURL aqui](http://br2.php.net/manual/pt_BR/book.curl.php)), veja um exemplo devidamente comentado e explicado:


{% highlight text linenos %}
< ?php

// Inicia o cURL
$ch = curl_init();

// Define a URL original (do formulário de login)
curl_setopt($ch, CURLOPT_URL, 'http://www.site.com/login.php');

// Habilita o protocolo POST
curl_setopt ($ch, CURLOPT_POST, 1);

// Define os parâmetros que serão enviados (usuário e senha por exemplo)
curl_setopt ($ch, CURLOPT_POSTFIELDS, 'usuario=fulano&senha=12345');

// Imita o comportamento patrão dos navegadores: manipular cookies
curl_setopt ($ch, CURLOPT_COOKIEJAR, 'cookie.txt');

// Define o tipo de transferência (Padrão: 1)
curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);

// Executa a requisição
$store = curl_exec ($ch);

// Define uma nova URL para ser chamada (após o login)
curl_setopt($ch, CURLOPT_URL, 'http://www.site.com/minha_conta.php');

// Executa a segunda requisição
$content = curl_exec ($ch);

// Encerra o cURL
curl_close ($ch);

?>
{% endhighlight %}

No fim da execução deste script você terá duas variáveis: a <span style="color: #008080;"><strong>$store</strong></span> contendo o HTML da página resultado (depois do submit do login) e a variável <span style="color: #008080;"><strong>$content</strong></span>, contendo o HTML da página chamada na segunda requisição.

O uso dele é bem simples, vale a pena tentar.

Há também, pra quem quiser, o site (não muito bonito) do cURL: [http://curl.haxx.se/](http://curl.haxx.se/)

Se alguém tiver alguma dúvida, é só falar!

Espero que tenham gostado :)

