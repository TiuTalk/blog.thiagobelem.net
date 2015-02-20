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

### Código (X)HTML do menu

<div data-gist-id="23eab7fd11e1d32b8e9a" data-gist-show-loading="false"></div>

Vejam que o sub-menu (que irá aparecer) fica dentro do <li> e fora do <a>.

### Código CSS do menu

<div data-gist-id="bc990c21a16b59d8fe3c" data-gist-show-loading="false"></div>

### Bloco de código do efeito (jQuery)

<div data-gist-id="d413e6009e1132428a70" data-gist-show-loading="false"></div>

--

É só juntar todas as peças (como foi feito no exemplo) e o seu menu irá funcionar que é uma maravilha! :D

O código do efeito pode parecer um pouco complicado pra quem tá começando com jQuery, mas é só ler os comentários e procurar um pouco sobre cada função (<strong>slideToggle</strong>, <strong>toggleClass</strong>, <strong>click</strong>) na documentação que, com os exemplos de lá vai ficar tudo claro.

[Faça aqui o download do arquivo .rar com os arquivos dessa aula.](/arquivos/2009/06/menu.rar)

Espero que tenham gostado, qualquer dúvida é só falar.

