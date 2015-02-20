---
layout: post
title: Bloqueando visitantes pelo IP com MySQL e PHP
excerpt: Aumente a proteção do seu sistema criando um script que poderá ser usado
  para banir e bloquear visitantes em função de seus IPs e tenta mais controle sobre
  quando e quem tem acesso ao seu sistema.

date: '2009-07-31 20:40:43 -0300'
categories:
- PHP
- MySQL
- Tutoriais
- Segurança
tags:
- PHP
- Segurança
- MySQL
- IP
---
Essa semana vou falar um pouquinho sobre cada técnica de segurança que falei no "[Criando Sistemas Seguros - Parte 1](/criando-sistemas-seguros-parte-1)" e hoje é a vez do "<strong>Banindo IPs por um bem maior</strong>"... Vamos lá:

Banir um visitante de vez, baseando-se no IP dele é, sem dúvida, uma das formas mais simples e eficazes (a curto prazo) de evitar que alguém fique brincando com o seu sistema... Claro que o visitante pode mudar o seu IP sem muito esforço, mas em 99% dos casos isso exigiria pelo menos 1 ou 2 minutos dele... E dependendo da rede e dos conhecimentos dele isso pode não ser possível...

Para salvar a lista de IPs banidos usaremos uma tabela no MySQL que pode ser criada com o seguinte código:


<div data-gist-id="6edfbd936da0bd417d7b" data-gist-show-loading="false"></div>

Já a parte em PHP do sistema vai funcionar da seguinte maneira... Quando o visitante tentar acessar o seu site é incluído um arquivo que busca no MySQL se esse IP está na lista de banidos, caso esteja o visitante é redirecionado para outro site/endereço.

Não vou falar como fazer uma conexão ao MySQL porque isso já foi dito N vezes aqui no blog e ocupa um espaço desnecessário na aula. ;)

Antes de verificar se um visitante está "banido" precisamos limpar da tabela os registros que já expiraram... Esse passo é opcional pois quando formos verificar se um usuário está banido vamos verificar também se o período é valido... Vamos lá:


<div data-gist-id="83895b5dcdae26521165" data-gist-show-loading="false"></div>

Agora nós vamos verificar se o IP do visitante consta na lista dos que ainda estão banidos:


<div data-gist-id="398d61bcc3b30df6d96d" data-gist-show-loading="false"></div>

Agora é só redirecionar o visitante para outra página/endereço:


<div data-gist-id="2956fe4de5c0f3ea0461" data-gist-show-loading="false"></div>

--

Agora nós vamos criar uma funçãozinha que você vai usar para banir o visitante durante X minutos... Vamos lá:


<div data-gist-id="77e5d41f976b3045b96d" data-gist-show-loading="false"></div>

Aí quando você quiser banir um visitante, seja qual for o motivo, é só usar a função criada:

<div data-gist-id="2e9d25377d8ee7612f17" data-gist-show-loading="false"></div>

--

Espero que tenham gostado! :)

