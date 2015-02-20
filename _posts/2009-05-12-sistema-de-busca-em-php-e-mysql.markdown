---
layout: post
title: Sistema de busca em PHP e MySQL com paginação
excerpt: Aprenda a criar um sistema simples de busca usando PHP e MySQL com paginação
  e exibição de resultados parecida com a do Google.

date: '2009-05-12 20:59:37 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags: []
---
Hoje vou demonstrar como podemos criar um sistema de busca simples para o seu site.

O sistema de busca aqui explicado consiste em duas coisas: o formulário de busca, que pode ir em qualquer lugar do seu site (topo/lateral) e a página de resultados da busca, que exibirá um resultado parecido com o do Google.

A busca será feita no <strong>título</strong> e no <strong>conteúdo</strong> das notícias cadastradas no banco de dados, em uma tabela chamada <strong>notícias</strong>.

Veja [um exemplo](/arquivos/2009/05/busca.jpg) (imagem) de como ficará o resultado da busca sem CSS.

Veja o código de criação da tabela:


<div data-gist-id="b7318bc9d0108c3815a8" data-gist-show-loading="false"></div>

As colunas da tabela serão: <strong>id</strong>, <strong>titulo</strong>, <strong>texto</strong>, <strong>ativa</strong><span style="color: #999999;"> (1 ou 0)</span>, e <strong>cadastro</strong> <span style="color: #999999;">(AAAA-MM-DD HH:MM:SS)</span>.

Esta é uma estrutura simples de uma tabela de notícias, e você vai precisar adaptar o script para a sua tabela caso queira usar uma pronta.

Vamos ao formulário de busca:


<div data-gist-id="38e3b3e578547d8eec67" data-gist-show-loading="false"></div>

Não se esqueça de alterar o action para o endereço certo do seu site... Se você preferir, pode definir o action usando caminho relativo, não há diferença.

Passaremos a busca por método GET para ficar mais parecido com o Google. :)

E agora o arquivo (<span style="color: #ff6600;"><strong>busca.php</strong></span>) que recebe os dados do formulário, faz a conexão ao banco de dados, processa a busca e exibe o resultado (sem paginação):


<div data-gist-id="27d092302b49f7c444e9" data-gist-show-loading="false"></div>

Não se esqueça de mudar, dentro da exibição dos resultados, como é definida a variável $link para o formato que o seu site usa ;)

<strong>-----</strong>

E pra quem quiser o mesmo script com paginação:


<div data-gist-id="a945e7e15cba0c3ed2e5" data-gist-show-loading="false"></div>

Reconheço que o script poderia ser mais simples, mas seu uso ficaria muito limitado (e o código ficaria enorme)... E com paginação fica muito mais legal, além de ser o que todo mundo acaba procurando.

---

Vocês perceberão que não há formatação e estilização (CSS) nenhuma... Esse sistema de busca foi feito para você usar de base e criar o seu próprio sistema.

Espero que tenham gostado! :)

Qualquer dúvida, é só falar.

