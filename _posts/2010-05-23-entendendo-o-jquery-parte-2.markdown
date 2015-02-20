---
layout: post
title: Entendendo o jQuery – Parte 2
excerpt: Um tutorial explicando como o jQuery funciona e por que ele é tão simples
  de se trabalhar. Aprenda a criar um efeito de collapse (abrir e fechar) em uma caixa
  de links seguindo um passo-a-passo onde explico como funciona cada parte do código.

date: '2010-05-23 23:30:41 -0300'
categories:
- Javascript
- jQuery
- Artigos
tags:
- jQuery
---
A pedidos de [@thiagogonzalez](http://twitter.com/thiagogonzalez) hoje vou falar um pouquinho mais sobre jQuery para iniciantes. :)

O jQuery é uma biblioteca/framework de Javascript <strong>orientado a objetos</strong> (OO)... O que significa que nele trabalhamos com objetos, atributos e métodos.. E não apenas com funções que é o que acontece na programação procedural comum. Todos nós começamos trabalhando com programação procedural e por isso o jQuery segue um "caminho" diferente do que estamos acostumados.

De primeiro contato o jQuery parece sim muito complicado... São vários códigos em uma só linha... Tudo dentro de <code>function()</code> sem nome e, com uma [documentação](http://docs.jquery.com/) toda em inglês, as pessoas não tem muito por onde começar.

O que vocês precisam entender é que o jQuery é, quase que literalmente, <strong>uma conversa entre o desenvolvedor e o código</strong>. Se você souber inglês então, não há com o que se preocupar... Mas se você não sabe inglês, procure começar a jogar, ler ou ver filmes sem legenda... No mundo de hoje em dia <strong>não dá</strong> pra ser um bom desenvolvedor/programador só lendo artigos escritos em português... Mas isso vai ficar para um outro artigo.

A coisa que vocês mais vão ver no jQuery é a própria função <code>jQuery()</code>, que também é usada no formato <code>$()</code>. Esta função sempre irá retornar um objeto jQUery: <strong>um vetor (array) com todos os elementos encontrados</strong> pelo <strong>seletor</strong> passado como 1º parâmetro da função jQuery ou um <strong>novo elemento DOM</strong> (<em>Document Object Model</em>) criado caso o 1º parâmetro um elemento HTML.

Veja alguns exemplos:


<div data-gist-id="1cdbe9f0f9a5759e7496" data-gist-show-loading="false"></div>

Como vocês podem ver, os seletores de jQuery se assemelham muito aos seletores de CSS, e existem formas de você selecionar praticamente qualquer elemento de seu HTML... Lembra que eu disse que jQuery é como uma conversa? Suponhamos que você precise selecionar todos os <code>p</code>, que estão dentro e uma <code>div</code> com classe a "links", e que não possuam um link dentro desse <code>p</code>... O seletor ficaria assim:


<div data-gist-id="2f537b20215dfbef143d" data-gist-show-loading="false"></div>

Mas você, a esse ponto, já deve ter se perguntado: de que adianta selecionar elementos se nada for feito com eles?

É ai que entram os métodos do jQuery! Sempre que você estiver usando jQuery, você irá trabalhar da seguinte forma:

<ol>
<li>Selecione os elementos que você quer manipular/alterar/trabalhar;</li>
<li>Execute métodos nativos do jQuery (ou de um plugin de jQuery).</li>
</ol>
Ou seja: primeiro selecionamos os elementos e depois executamos um (ou mais) métodos nos elementos encontrados.

### Um exemplo prático
Vamos supor que vocês queiram criar aquele efeito legal de abrir e fechar um elemento com um <code>+</code> no cantinho. O nome desse efeito, em inglês, é <em>collapse</em>.

Vamos criar o seguinte HTML de exemplo:


<div data-gist-id="7332c0ad16475706a0fb" data-gist-show-loading="false"></div>

O efeito que nós queremos é: ao clicar no link com classe "trocar" (<code>a.trocar</code>) que estiver dentro de uma div com classe "box" (<code>div.box a.trocar</code>), a lista desordenada com classe "conteudo" (<code>ul.conteudo</code>) que estiver logo após esse link (que recebeu o clique) irá deslizar, fechando e abrindo a cada clique.

Uma das primeiras coisas que se aprende no jQuery é que ele trabalha com os elementos HTML da página, e para poder acessar esses elementos ele precisa ser executado depois que a página carregou. Isso não é obrigatório, mas por motivos didáticos, vamos seguir essa regra.

Para isso, precisamos colocar em nosso código javascript um código que permita executar outros códigos (jQuery ou não) após o carregamento do site... Lembram do "onload" do <code>body</code>? É praticamente a mesma coisa:


<div data-gist-id="a7375ce153329afce158" data-gist-show-loading="false"></div>

Com o código acima criamos um evento <em>ready</em> (pronto) no documento (todo o site) que executará uma <code>function()</code> quando o site estiver carregado (método <code>ready()</code>).

Documentação do método <code>ready()</code>: [http://api.jquery.com/ready/](http://api.jquery.com/ready/)

Faça o seguinte teste para entender melhor:


<div data-gist-id="f0dda5cd088d1759d57b" data-gist-show-loading="false"></div>

Veja um exemplo do código acima funcionando: [http://jsbin.com/upuxa3/](http://jsbin.com/upuxa3/)

Agora vamos continuar e voltar ao nosso exemplo de collapse: precisamos criar um evento de clique (método <code>click()</code>) no link que tem a classe "trocar", fazemos isso da seguinte forma:


<div data-gist-id="f18d1e09e0c312ff58a4" data-gist-show-loading="false"></div>

Com o código acima criamos um evento vazio que na verdade irá "clicar" no link... Precisamos colocar uma função como parâmetro desse método <code>click()</code> para que, ao invés de clicar no link, um outro código seja executado.

Documentação do método <code>click()</code>: [http://api.jquery.com/click/](http://api.jquery.com/click/)

Vamos a um pequeno exemplo que irá disparar um alerta ao clicar no link:


<div data-gist-id="919e1fe3c7bbf932ff91" data-gist-show-loading="false"></div>

Veja um exemplo do código acima funcionando: [http://jsbin.com/upuxa3/2/](http://jsbin.com/upuxa3/2/)

Antes de continuar com o nosso exemplo, precisamos notar que, estamos adicionando um evento de clique a um link que, por padrão, já é um elemento que possui clique, certo? Todo link é "clicável", mesmo que seu endereço leve a lugar nenhum.

Mas o jQuery não é esperto (ou seria maleducado?) o suficiente para substituir o comportamento padrão de clique naquele link... Ao adicionarmos o evento <code>click()</code> no link o jQuery é executado antes, mas quando termina o comportamento padrão acontece... Então se o <code>href</code> (endereço) do link apontasse para "http://thiagobelem.net" vocês iriam ver o meu site depois de receber o alerta.

Existem duas formas de evitar o comportamento padrão de um clique em um link quando se trabalha com o método <code>click()</code>: no mais deselegante é retornado <em>false</em> (falso) na função que está no clique. A outra forma, mais correta e elegante, é assim:


<div data-gist-id="3439e02fa75cabc80915" data-gist-show-loading="false"></div>

É só adicionar um argumento (com o nome que você quiser) à função que é executada no evento <code>click()</code> do link e, dentro da função, usar o método <code>preventDefault()</code> nesse argumento, evitando assim o comportamento padrão do navegador, que seria mandan o visitante para o endereço link após o evento do jQuery ser executado.

Veja um exemplo do código acima funcionando: [http://jsbin.com/upuxa3/3/](http://jsbin.com/upuxa3/3/)

Agora nós podemos continuar nosso exemplo selecionando a lista de links com classe "conteudo" (<code>ul.conteudo</code>) que esta logo após o link que foi clicado:


<div data-gist-id="0ae6c4840d4c96312050" data-gist-show-loading="false"></div>

Partimos do link que recebeu o clique <code>$(this)</code> e procuramos uma <code>ul.conteudo</code> que esteja logo em seguida usando o método <code>next()</code>.

Percebam que dessa vez, usamos a função jQuery no <code>this</code>, que retorna o elemento que ativou o evento de clique, e depois "caminhamos" até o próximo elemento que satisfaça o seletor <code>ul.conteudo</code>. Esse "caminhar" é, em inglês, chamado de [traversal](http://api.jquery.com/category/traversing/tree-traversal/) e nos ajuda a, partindo de um elemento, encontrar outros elementos que tenham algum tipo de relação com o elemento no qual "estamos".

Documentação do método <code>next()</code>: [http://api.jquery.com/next/](http://api.jquery.com/next/)

Mas, como foi dito anteriormente, não adianta nada selecionar um elemento se não fizermos nada com ele... Já conseguimos encontrar a lista de links e agora precisamos fazer ela aparecer e sumir a cada clique... Fazemos isso dessa forma:


<div data-gist-id="69a363e49ec484c7b245" data-gist-show-loading="false"></div>

Com o método <code>slideToggle()</code> faz com que o elemento feche quando estiver aberto, e abra quando estiver fechado. Ou seja, cada vez que clicarmos no link de "abrir/fechar" o jQuery irá verificar se a lista de links está aberta ou não e irá trocar o seu estado, abrindo-a ou fechando-a.

Veja um exemplo do código acima funcionando: [http://jsbin.com/anafo3/](http://jsbin.com/anafo3/)

Poderíamos parar por aqui... Mas se você for um usuário chato, vai clicar 300 vezes no link rapidamente e vai perceber que, depois de alguns cliques seguidos (e muito rápidos) a lista para de abrir e fechar e "buga".

Para evitar esse tipo de comportamento precisamos filtrar o seletor e evitar rodar o <code>slideToggle()</code> enquanto ainda esteja acontecendo uma animação... Ou seja: executamos o método <code>slideToggle()</code> apenas na lista que não (<em>not</em>) estiver animada (<em>animated</em>):


<div data-gist-id="f95aed1d5d0bb66a9232" data-gist-show-loading="false"></div>

Documentação do seletor <code>:not()</code>: [http://api.jquery.com/not-selector/](http://api.jquery.com/not-selector/)

Viram que simples?! Com exatamente quatro linhas, eu disse QUATRO LINHAS, criamos um efeito super "maneiro" que você pode usar em praticamente qualquer HTML de qualquer site! O jQuery é ou não é uma maravilha?

Veja um exemplo do código acima funcionando: [http://jsbin.com/anafo3/2/](http://jsbin.com/anafo3/2/)

E o nosso exemplo longo mas prático está pronto. :)

Olha como isso tudo é uma conversa com o código:


> Quando o documento carregar crie um evento de clique no a com classe "trocar" (e que estiver dentro de uma div com classe "box") e, quando esse evento for chamado, previna o comportamento padrão do navegador, vá até a lista com classe "conteudo" links que estiver logo após esse link e, se ele não estiver no meio de uma animação, troque o seu estado fechando-a ou abrindo-a

Espero que vocês tenham gostado! Até a próxima. E não deixem de fazer o seu pedido via comentário ou [Twitter](http://twitter.com/tiutalk), terei prazer em atendê-lo.

