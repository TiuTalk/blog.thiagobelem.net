---
layout: post
title: Criando um tema para WordPress - Parte 1
excerpt: Primeira parte de uma série de artigos onde irei documentar o passo-a-passo
  do processo de criação de um tema de WordPress, acompanhando um caso do mundo real.

date: '2011-12-21 15:30:27 -0200'
categories:
- Desenvolvimento
- PHP
- WordPress
- Artigos
tags:
- PHP
- WordPress
- Desenvolvimento
- tema
- theme
- development
- wp
---
Opa opa! Estou de volta, e dessa vez vou fazer algo que meu amigo [Thiago Gonzalez](http://thiagogonzalez.com/) já está pedindo a bastante tempo: <strong>mostrar o passo-a-passo da criação de um tema de WordPress</strong>.

Como eu não gosto de reinventar a roda nem de fazer coisas muito genéricas, vou documentar um caso de uso do mundo real: a reformulação do tema do meu blog, este que você está lendo agora.

Irei mostrar pra vocês o passo-a-passo de todo o processo: Desde a criação da pasta vazia do tema, criação do HTML voltado pra WordPress (o CSS eu vou pular) e - por fim - alguns recursos do WordPress pra finalizar o tema... Vão ser vários posts ao longo de - provavelmente - uma semana.

Se tudo der certo, o último post da série vai ao ar junto com o lançamento do novo layout do blog. :)

<!-- Quem quiser acompanhar o projeto está no GitHub: [https://github.com/TiuTalk/blog.thiagobelem.net](https://github.com/TiuTalk/blog.thiagobelem.net) -->

Recomendo à todos uma leitura por alto do artigo [Theme Development](http://codex.wordpress.org/Theme_Development) no Codex... É de lá que eu tiro a maior parte das dúvidas sobre o processo de criação de temas.

<h3>Passo 1 - Estrutura inicial do tema</h3>
Iremos criar um tema totalmente do zero, sem herdar ou usar códigos de outros temas.

Pra começar, criamos uma pasta - dentro de <code>/wp-content/themes/</code> - para o nosso tema com os seguintes arquivos dentro:

* **style.css** - Onde definimos o título, autor e outros dados do tema
* **index.php** - Onde iremos criar o HTML do tema

<h3>Passo 2 - Informações sobre o tema (style.css)</h3>
Agora precisamos abrir o <code>style.css</code> e colocar um bloco de comentário CSS com as informações sobre o tema:

<div data-gist-id="1506849" data-gist-show-loading="false"></div>

Com isso o tema já aparece na nossa lista de temas dentro do Painel de Controle do WordPress:

<img class="size-full wp-image-1896" title="tema-style" src="/assets/uploads/2011/12/tema-style.png" alt="" width="264" height="356" /> Tema disponível

Nosso tema já pode ser habilitado, e quando você acessar o blog já estará vendo o conteúdo do arquivo <code>index.php</code> que você criou antes: uma tela em branco! :)

No [próximo artigo](/criando-um-tema-para-wordpress-parte-2) vamos começar a criar o HTML da página inicial..

Até a próxima!

