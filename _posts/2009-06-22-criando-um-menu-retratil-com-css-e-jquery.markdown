---
layout: post
title: Criando um menu retrátil com CSS e jQuery
excerpt: Aprenda a fazer um menu que se expande/retrai usando apenas (X)HTML, CSS
  e jQuery. Código do efeito em si tem apenas 11 linhas! Crie menus animados usando
  no estilo expand / collapse.

date: '2009-06-22 09:06:00 -0300'
categories:
- HTML
- CSS
- jQuery
- Tutoriais
tags:
- jQuery
- HTML
- CSS
- Javascript
- Menu Retrátil
---
Hoje vou ensinar como criar um menu usando listas (ol) e que tem o efeito de expandir/retrair feito com jQuery.

O efeito em sí é bem simples e fácil de ser modificado... O meu foi feito usando HTML puro e uma folha de estilos (CSS) pequena. No final do tutorial você vai encontrar o link pra download do arquivo .rar com o exemplo dessa aula.

[Veja aqui um exemplo de como vai ficar o menu.](/exemplo3)

Bom... vamos lá!

<h3>Código (X)HTML do menu</h3>

{% highlight html linenos %}
<ul id="menu">
  <li class="header">Menu</li>
  <li>[Página inicial](#)</li>
  <li>[Notícias](#)</li>
  <li class="parent">[Produtos](#)
    <ul class="sub-menu">
      <li>[Camisetas](#)</li>
      <li>[Calças](#)</li>
      <li>[Livros](#)</li>
    </ul>
  </li>
  <li>[Quem somos nós](#)</li>
  <li>[Contato](#)</li>
</ul>
{% endhighlight %}

Vejam que o sub-menu (que irá aparecer) fica dentro do <li> e fora do <a>.

<h3>Código CSS do menu</h3>

{% highlight css linenos %}
* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: Verdana, Arial, sans-serif;
  font-size: 11px;
  margin: 20px;
}

ul {
  list-style: none;
}

ul#menu {
  width: 170px;
  border: 1px solid silver;
  margin-top: 20px;
}

ul#menu li {
  color: black;
  line-height: 19px;
  background: #F4F4F4;
}

ul#menu li.header {
  background: #DFDFDF;
  font-weight: bolder;
  padding: 0px 3px;
  font-size: 12px;
}

ul#menu li a {
  color: black;
  text-decoration: none;
  display: block;
  padding: 0px 3px;
  outline: none;
}

ul#menu li.parent > a {
  background: transparent url('../img/down.gif') right center no-repeat;
}

ul#menu li.aberto > a {
  background: transparent url('../img/up.gif') right center no-repeat;
}

ul#menu li a:hover {
  background-color: #EAEEFF;
}

ul#menu li ul.sub-menu {
    display: none;
}

ul#menu li ul.sub-menu li a {
  padding-left: 15px;
  color: maroon;
}
{% endhighlight %}

<h3>Bloco de código do efeito (jQuery)</h3>

{% highlight javascript linenos %}
$(function() {
  // Evento de clique do elemento: ul#menu li.parent > a
  $('ul#menu li.parent > a').click(function() {
    // Expande ou retrai o elemento ul.sub-menu dentro do elemento pai (ul#menu li.parent)
    $('ul.sub-menu', $(this).parent()).slideToggle('fast', function() {
      // Depois de expandir ou retrair, troca a classe 'aberto' do <a> clicado
      $(this).parent().toggleClass('aberto');
    });
    return false;
  });
});
{% endhighlight %}

--

É só juntar todas as peças (como foi feito no exemplo) e o seu menu irá funcionar que é uma maravilha! :D

O código do efeito pode parecer um pouco complicado pra quem tá começando com jQuery, mas é só ler os comentários e procurar um pouco sobre cada função (<strong>slideToggle</strong>, <strong>toggleClass</strong>, <strong>click</strong>) na documentação que, com os exemplos de lá vai ficar tudo claro.

[Faça aqui o download do arquivo .rar com os arquivos dessa aula.](/arquivos/2009/06/menu.rar)

Espero que tenham gostado, qualquer dúvida é só falar.

