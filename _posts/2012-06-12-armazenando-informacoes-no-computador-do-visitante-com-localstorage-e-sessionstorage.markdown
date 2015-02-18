---
layout: post
title: Armazenando informações com localStorage e sessionStorage

date: '2012-06-12 21:37:06 -0300'
categories:
- Desenvolvimento
- Javascript
- Artigos
- Tutoriais
tags:
- Javascript
- localstorage
- sessionstorage
- storage
- cookie
- session
- sessão
---
<p>Fala pessoal, tudo bom?</p>
<p>Recentemente comecei a fazer algumas experiências e acabei criando uma extensão pra Google Chrome (apenas pra uso pessoal, não vou publicar).</p>
<p>E uma das coisas que usei no processo (já tinha ouvido falar, mas nunca tinha usado) foi o <strong>localStorage</strong>, uma "interface" de armazenamento de dados disponível nos navegadores mais atuais do mercado (FF, Chrome, Safari, Opera e etc.).</p>
<p>Todos vocês já ouviram falar dos Cookies e da Sessão, que basicamente faz a mesma coisa (armazena dados) na máquina do cliente e no servidor respectivamente.</p>
<p>A novidade do localStorage/sessionStorage é que isso é feito de forma bastante facilitada, via JavaScript e usando recursos nativos do seu navegador.</p>
<h3>Usando o localStorage</h3>
<p>O <strong>localStorage</strong> salva dados no computador do visitante, que ficam vinculados ao (e apenas acessíveis pelo) seu domínio. E pra usar é bem simples:</p>
<p>Use o método <strong>setItem(nome, valor)</strong> para criar/salvar novos itens e o depois o método<strong> getItem(nome)</strong> para recuperar o valor.</p>
<p>[gist id=2920989]</p>
<h3>Usando o sessionStorage</h3>
<p>Já o <strong>sessionStorage</strong> faz exatamente a mesma coisa, só que os dados ficam salvos apenas durante a sessão (e são apagados quando o visitante fecha a aba/navegador):</p>
<p>[gist id=2921014]</p>
<p>Viram como é simples?</p>
<h3>Quem avisa, amigo é...</h3>
<p>Mas prestem atenção... os dados salvos estão acessíveis <strong>APENAS</strong> no domínio criado.. então preparem-se para problemas entre <strong>www.site.com.br</strong>, <strong>site.com.br</strong> e <strong>subdominio.site.com.br</strong>.</p>
<p>Outro ponto a considerar é que você só consegue salvar strings e números (inteiros) nesse mecanismo, mas nada te impede de criar um objeto JSON com os dados do array/objeto que você quer salvar, não é mesmo? :)</p>
<p>Espero que tenham gostado desse pequeno e rápido post! :)</p>
