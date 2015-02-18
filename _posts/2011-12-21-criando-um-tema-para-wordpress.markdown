---
layout: post
status: publish
published: true
title: Criando um tema para WordPress - Parte 1
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Primeira parte de uma série de artigos onde irei documentar o passo-a-passo
  do processo de criação de um tema de WordPress, acompanhando um caso do mundo real.
wordpress_id: 1886
wordpress_url: http://blog.thiagobelem.net/?p=1886
date: '2011-12-21 15:30:27 -0200'
date_gmt: '2011-12-21 17:30:27 -0200'
categories:
- Desenvolvimento
- PHP
- WordPress
- Artigos
tags:
- PHP
- featured
- WordPress
- Desenvolvimento
- tema
- theme
- development
- wp
---
<p>Opa opa! Estou de volta, e dessa vez vou fazer algo que meu amigo <a href="http://thiagogonzalez.com/" target="_blank">Thiago Gonzalez</a> já está pedindo a bastante tempo: <strong>mostrar o passo-a-passo da criação de um tema de WordPress</strong>.</p>
<p>Como eu não gosto de reinventar a roda nem de fazer coisas muito genéricas, vou documentar um caso de uso do mundo real: a reformulação do tema do meu blog, este que você está lendo agora.</p>
<p>Irei mostrar pra vocês o passo-a-passo de todo o processo: Desde a criação da pasta vazia do tema, criação do HTML voltado pra WordPress (o CSS eu vou pular) e - por fim - alguns recursos do WordPress pra finalizar o tema... Vão ser vários posts ao longo de - provavelmente - uma semana.</p>
<p>Se tudo der certo, o último post da série vai ao ar junto com o lançamento do novo layout do blog. :)</p>
<p>Quem quiser acompanhar o projeto está no GitHub: <a href="https://github.com/TiuTalk/blog.thiagobelem.net" target="_blank">https://github.com/TiuTalk/blog.thiagobelem.net</a></p>
<p>Recomendo à todos uma leitura por alto do artigo <a href="http://codex.wordpress.org/Theme_Development" target="_blank">Theme Development</a> no Codex... É de lá que eu tiro a maior parte das dúvidas sobre o processo de criação de temas.</p>
<h3>Passo 1 - Estrutura inicial do tema</h3>
<p>Iremos criar um tema totalmente do zero, sem herdar ou usar códigos de outros temas.</p>
<p>Pra começar, criamos uma pasta - dentro de <code>/wp-content/themes/</code> - para o nosso tema com os seguintes arquivos dentro:</p>
<ul>
<li><strong>style.css</strong> - Onde definimos o título, autor e outros dados do tema</li>
<li><strong>index.php</strong> - Onde iremos criar o HTML do tema</li>
</ul>
<h3>Passo 2 - Informações sobre o tema (style.css)</h3>
<p>Agora precisamos abrir o <code>style.css</code> e colocar um bloco de comentário CSS com as informações sobre o tema:</p>
<p>[gist id=1506849]</p>
<p>Com isso o tema já aparece na nossa lista de temas dentro do Painel de Controle do WordPress:</p>
<p>[caption id="attachment_1896" align="aligncenter" width="264"]<img class="size-full wp-image-1896" title="tema-style" src="http://blog.thiagobelem.net/wp-content/uploads/2011/12/tema-style.png" alt="" width="264" height="356" /> Tema disponível[/caption]</p>
<p>Nosso tema já pode ser habilitado, e quando você acessar o blog já estará vendo o conteúdo do arquivo <code>index.php</code> que você criou antes: uma tela em branco! :)</p>
<p>No <a href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-2/">próximo artigo</a> vamos começar a criar o HTML da página inicial..</p>
<p>Até a próxima!</p>
