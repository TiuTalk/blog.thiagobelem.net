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
<p>Essa não é uma tarefa muito comum... Mas as vezes precisamos fazer um login automático (usando PHP) em outro site para pegar algumas informações dinamicamente.</p>
<p>Você pode fazer essa "façanha" usando uma biblioteca do PHP chamada cURL (<a title="Documentação Oficial do cURL" href="http://br2.php.net/manual/pt_BR/book.curl.php" target="_blank">veja mais sobre o cURL aqui</a>), veja um exemplo devidamente comentado e explicado:</p>
<p>[code='php']<br />
< ?php</p>
<p>// Inicia o cURL<br />
$ch = curl_init();</p>
<p>// Define a URL original (do formulário de login)<br />
curl_setopt($ch, CURLOPT_URL, 'http://www.site.com/login.php');</p>
<p>// Habilita o protocolo POST<br />
curl_setopt ($ch, CURLOPT_POST, 1);</p>
<p>// Define os parâmetros que serão enviados (usuário e senha por exemplo)<br />
curl_setopt ($ch, CURLOPT_POSTFIELDS, 'usuario=fulano&senha=12345');</p>
<p>// Imita o comportamento patrão dos navegadores: manipular cookies<br />
curl_setopt ($ch, CURLOPT_COOKIEJAR, 'cookie.txt');</p>
<p>// Define o tipo de transferência (Padrão: 1)<br />
curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);</p>
<p>// Executa a requisição<br />
$store = curl_exec ($ch);</p>
<p>// Define uma nova URL para ser chamada (após o login)<br />
curl_setopt($ch, CURLOPT_URL, 'http://www.site.com/minha_conta.php');</p>
<p>// Executa a segunda requisição<br />
$content = curl_exec ($ch);</p>
<p>// Encerra o cURL<br />
curl_close ($ch);</p>
<p>?><br />
[/code]</p>
<p>No fim da execução deste script você terá duas variáveis: a <span style="color: #008080;"><strong>$store</strong></span> contendo o HTML da página resultado (depois do submit do login) e a variável <span style="color: #008080;"><strong>$content</strong></span>, contendo o HTML da página chamada na segunda requisição.</p>
<p>O uso dele é bem simples, vale a pena tentar.</p>
<p>Há também, pra quem quiser, o site (não muito bonito) do cURL: <a title="cURL" href="http://curl.haxx.se/" target="_blank">http://curl.haxx.se/</a></p>
<p>Se alguém tiver alguma dúvida, é só falar!</p>
<p>Espero que tenham gostado :)</p>
