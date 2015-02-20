---
layout: post
title: Tutorial básico de cURL – Instalação, configuração e uso
excerpt: O cURL é uma biblioteca fantástica que te permite fazer requisições e enviar
  dados para outros sites e sistemas da web. Aprenda a instalar e usar essa ferramenta
  que todo sistema pode e deve usar.

date: '2009-06-24 10:45:36 -0300'
categories:
- PHP
- Artigos
tags:
- PHP
- cURL
---
Muita gente me perguntou sobre o cURL e alguns pediam um tutorial mais básico e detalhado... então vamos lá!

No PHP existem quatro formas de você acessar uma URL externa: usando a função <strong>fopen()</strong>, usando a função <strong>fsockopen()</strong>, usando a biblioteca <strong>cURL</strong> e usando a classe <strong>HTTP_Request</strong>. Cada uma dessas formas tem o seu uso específico mas todas podem ser usadas, de forma geral, pra mesma coisa. Eu, pessoalmente, prefiro e recomendo o uso da biblioteca <strong>cURL</strong> pelo seu poder e facilidade de uso.

Para poder usar o cURL no seu site/sistema você precisa que a biblioteca esteja instalada e habilitada, então vamos a um tutorial rápido de como fazer isso.. Se você já sabe que tem o cURL instalado no seu servidor, é só pular para o capitulo "Uso básico do cURL".

### Verificando se o cURL está instalado
Recomendo que antes de sair tentando instalar a cURL, verifique se ela já não está habilitada no seu servidor... Crie um arquivo .php com o seguinte conteúdo:

<div data-gist-id="625b02603e07d766acc3" data-gist-show-loading="false"></div>

Acesse esse arquivo pelo seu navegador e procure por "cURl support" se encontrar algo significa que você tem o cURL instalado e pode pular o próximo capitulo.

### Instalando o cURL
Para instalá-lo é bem simples, basta acessar o seu arquivo php.ini que geralmente fica dentro da pasta php do seu servidor (sim, você precisa ter acesso a esse arquivo) e procure por essa linha:

<div data-gist-id="8e002c18e7e742230974" data-gist-show-loading="false"></div>

Agora remova o ponto-e-vírgula (;) do começo da linha, reinicie o seu servidor e voila! Você acabou de instalar o cURL no seu sistema. ;)

### Uso básico do cURL
Bom, primeiro de tudo, vamos o script mais simples que você pode usar para pegar a resposta de um site (que nesse caso, é o arquivo robots.txt aqui do blog):

<div data-gist-id="f457a85ca2aae4432b86" data-gist-show-loading="false"></div>

Depois de executar esse script, o conteúdo da variável $resultado será exatamente o conteúdo do meu arquivo robots.txt. Você pode usar esse método para pegar o HTML resultado de qualquer site e etc.

A função <strong>curl_setopt()</strong> permite que você defina uma série de opções MUITO úteis para o uso do cURL, recomendo que vocês vejam a [documentação](http://br2.php.net/manual/pt_BR/function.curl-setopt.php) dela para dar uma olhada na lista completa.

### Verificando se um site está no ar e acessível
Com o script que vou mostrar agora você vai poder acessar qualquer endereço ou URL pública e descobrir se ele retorna erro 404 (página não encontrada) ou não, baseando-se no código HTTP de resposta:

<div data-gist-id="d36b3722bc551dab59db" data-gist-show-loading="false"></div>

Adicionei também uma opção nova (CURLOPT_FOLLOWLOCATION) que vai permitir que o cURL siga todos os redirects que houverem na URL. Por exemplo, se estivermos usando o TintURL é preciso seguir o redirecionamento depois de acessar a url reduzida para chegar na URL final.

### Enviando dados para formulários (via método POST)
Suponhamos que você queira testar o cURL enviando dados para um formulário, como se você tivesse digitando os dados e dando submit no formulário. Você vai precisar de duas coisas: a lista dos nomes (names) dos campos e o action do formulário (que é pra onde os dados são enviados)... Depois é só montar um script parecido com esse:

<div data-gist-id="c03018395f209e49c093" data-gist-show-loading="false"></div>

Mas suponhamos que você testou o script e reparou que algo deu errado.. E depois de fazer o seu trabalho de casa, descobriu que o site permite apenas dados vindos do próprio site (ou seja, ele verifica o <strong>REFERER</strong> que é o endereço da página na qual os dados foram inseridos). Então, você ajusta o seu script da seguinte maneira:

<div data-gist-id="80460bf179b029b6a868" data-gist-show-loading="false"></div>

--

Vou parar por aqui... Sei que existem vários outros usos e possíveis exemplos do cURL, mas a minha intenção era apenas mostrar como é simples e rápido usar todos os recursos do cURL... Se você misturar os comandos certos com as funções certas, vai poder fazer um sistema bem legal.

Espero que tenham gostado! :D

