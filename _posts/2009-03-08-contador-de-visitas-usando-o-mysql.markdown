---
layout: post
title: Contador de visitas usando o MySQL

date: '2009-03-08 05:14:22 -0300'
categories:
- MySQL
- Tutoriais
tags: []
---
Hoje vou mostrar pra vocês como funciona um contador de visitas bem simples usando MySQL.

Esse contador salva no banco de dados as visitas únicas (<em>uniques</em>) e as visualizações de páginas (<em>pageviews</em>) de cada dia. No script também vem uma função que você pode usar para pegar os totais de cada tipo de visitas filtrando por períodos!

Antes de tudo, rode esse código SQL no banco de dados do seu site para criar a tabela que o sistema usa:


<div data-gist-id="646bc7331a6fb1aaea58" data-gist-show-loading="false"></div>

Agora copie o código desse script PHP e salve-o como <strong>contadorVisitas.php</strong> em algum diretório do seu site:


<div data-gist-id="bd186d47c838bccfe7bc" data-gist-show-loading="false"></div>

Pronto, você já tem a tabela no banco e o script dentro do site, agora é só abrir o script e configurar a conexão do MySQL e/ou desativá-la se necessário. Todas as opções estão com comentários explicativos... Depois disso é só incluir o script no topo do seu site (antes de tudo) que ele já vai começar a contar as visitas pra você.

Quando você quiser pegar o total de visitas é só usar um desses exemplos:


<div data-gist-id="bab9a1c844c761eabe88" data-gist-show-loading="false"></div>

Espero que tenham gostado!

:)

