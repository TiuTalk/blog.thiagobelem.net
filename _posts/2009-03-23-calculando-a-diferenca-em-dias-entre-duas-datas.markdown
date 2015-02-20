---
layout: post
title: Calculando a diferença em dias entre duas datas

date: '2009-03-23 19:11:02 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Fala pessoal! Hoje vou explicar como calcular a diferença (em dias) entre duas datas no PHP.

O processo é bem simples e se resume a criar o <abbr title="Quantidade de segundos que se passaram desde 1970 (a Era Unix)"><em>timestamp</em></abbr> dessas datas e depois calcular o número de dias baseando-se na quantidade de segundos entre as duas datas.

Vou mostrar como fazer o processo de duas formas pois, normalmente, trabalhos com datas em dois formatos: <strong>DD/MM/AAAA</strong> (padrão brasileiro) e <strong>AAAA-MM-DD</strong> (formato do MySQL).

Se alguém aí quiser ler um pouco mais sobre como trabalhar com datas no PHP é só dar uma olhada nesse post: [Trabalhando com datas no PHP](/trabalhando-com-datas-no-php).

Vamos ao primeiro exemplo que usa datas no formato <strong>DD/MM/AAAA</strong>:


<div data-gist-id="7f30bc8a59be68a75b28" data-gist-show-loading="false"></div>

Vou explicar de forma rápida: Primeiro criamos uma função para gerar o timestamp de uma data usando a função <strong>mktime()</strong> do PHP. Depois nós dividimos o número de segundos <span style="color: #888888;">(diferença das duas datas)</span> pelo número de segundos existentes em um dia <span style="color: #888888;">(60 * 60 * 24 = 86400)</span> e arredondamos o resultado usando a função <strong>floor()</strong>.

Essa aplicação pode parecer complicada pra alguns mas ela utiliza um passo-a-passo muito claro pra quem consegue entender o processo de se calcular a diferença de dias entre duas datas. É só pensar em como você pode fazer isso e vai descobrir que não há forma melhor. ;)

Com isso você já consegue calcular a diferença e se usar um pouquinho de criatividade pode calcular também a diferença de horas e minutos.

--

O exemplo do formato <strong>AAAA-MM-DD</strong> é mais simples:


<div data-gist-id="a09bef5259be819a7788" data-gist-show-loading="false"></div>

Nesse exemplo não precisamos criar uma função pois a função <strong>strtotime()</strong> do PHP já converte uma data no formato <strong>AAAA-MM-DD</strong> em <em>timestamp</em>.

<strong><span style="color: #ff0000;">Atenção: </span></strong>Não fiz nenhuma validação para caso as datas inseridas sejam inválidas ou a data final seja maior que a data inicial. Meu intuito era mostrar apenas como é o processo do calculo dessa diferença. ;)

Espero que essa aula tenha sido útil pra vocês... Qualquer dúvida ou sugestão é só comentar ou mandar um e-mail.

Até a próxima

#### Documentação Oficial:
<ul>
<li><strong>Função [explode()](http://br.php.net/explode)</strong> » Divide uma string usando um separador</li>
<li><strong>Função [mktime()](http://br.php.net/mktime)</strong> » Gera um timestamp de uma data especificada</li>
<li><strong>Função [floor()](http://br.php.net/floor)</strong> » Arredonda valores fracionados para baixo</li>
<li><strong>Função [strtotime()](http://br.php.net/strtotime)</strong> » Converte datas textuais em timestamps</li>
</ul>
