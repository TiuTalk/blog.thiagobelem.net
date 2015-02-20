---
layout: post
title: 'Frameworks no PHP: O que, quando, porque e qual?'
excerpt: Aprenda o que é, quando usar, porque usar e qual framework usar quando se
  trabalha com PHP.

date: '2009-07-27 18:39:01 -0300'
categories:
- PHP
- Artigos
- Orientação a objetos
tags:
- PHP
- CakePHP
- Framework
- Zend Framework
- Code Igniter
- Symfony
---
PHP é a linguagem de programação mais famosa do mundo por várias razões: flexibilidade, facilidade de uso e vários outros fatores.. Mas algumas vezes a programação se torna monótona e/ou repetitiva e é ai que um <strong>framework</strong> pode ajudar.

### O que é um <em>framework</em> de PHP?
De forma resumida o framework é uma estrutura, uma fundação para você criar a sua aplicação. Em outras palavras o framework te permite o desenvolvimento rápido de aplicações (RAD), o que faz economizar tempo, ajuda a criar aplicações mais sólidas e seguras além de reduzir a quantidade de código repetido. Os frameworks também permitem que os iniciantes criem aplicações mais estáveis garantindo uma boa relação entre o banco de dados e a camada externa de exibição. Isso tudo te permite gastar mais tempo desenvolvendo a aplicação em si do que repetindo os códigos que todas as aplicações têm.

A idéia padrão de trabalho por trás de um framework no PHP esta ligado ao modelo MVC (Model View Controller). MVC é uma forma de programação que isola a <strong>lógica de negócio</strong> (como a aplicação funciona) da <strong>camada de exibição</strong> (a parte visual). O <strong>Model</strong> cuida do banco de dados, o <strong>View</strong> cuida da camada de exibição e o <strong>Controller</strong> cuida da lógica de negócio. Isso tudo faz com que você trabalhe mais rápido e de forma setorizada.

### Porque usar um <em>framework</em> de PHP?
Os desenvolvedores utilizam frameworks por vários motivos, e o maior deles é para agilizar o processo de desenvolvimento. A re-utilização de código em vários projetos vai economizar muito tempo e trabalho... Isso é  garantido pois o framework já traz uma série de módulos pré-configurados (e funcionando) para fazer as mais variadas e comuns tarefas como envio de e-mails, conexão com o banco de dados, sanitização (limpeza) de dados e proteção contra ataques.

Estabilidade é outra grande vantagem dos frameworks. A simplicidade, que é um dos grandes "feitos" do PHP, também é o que possibilita inúmeros erros e falhas pelos principiantes... Nem todo código que funciona necessariamente está correto e bem desenvolvido.

### Quando usar um <em>framework</em> de PHP?
Essa é uma dúvida muito comum em todos os níveis de desenvolvimento. Para a maioria dos iniciantes, usar um framework além de ser mais fácil vai ser mais estável, então é bom usá-los sempre que possível.

Em contrapartida vários programadores experientes vêem os frameworks como ferramentas usadas pro programadores fracos, que não sabem como criar um código limpo, sólido e seguro.

Quando se trabalha com projetos que tem um prazo muito curto (o que eu chamo de "prazo Jack Bauer") é sempre bom usar um framework, pois ele vai agilizar todo o processo. Outro motivo forte para o uso do framework é que você não está criando "código artesanal"... Há todo um padrão que você deve seguir para que as coisas funcionem, e está tudo documentado e explicado em uma vasta comunidade de suporte.

--

<h3 style="color: #F08127">CakePHP</h3>
O <span class="removed_link" title="http://www.cakephp.com.br/">CakePHP</span> é uma grande opção para iniciantes e desenvolvedores avançados. Ele foi criado usando as bases e modelos do Ruby on Rails e é pesadamente focado no desenvolvimento ágil e rápido. Recentemente ele tem se tornado muito famoso por sua simplicidade e facilidade de uso.

Eu <strong>pessoalmente</strong> recomendo o CakePHP... Minha vida de programador mudou depois que eu comecei a usar ele. :)

<h3 style="color: #ACC95E">Zend Framework</h3>
O [Zend Framework](http://framework.zend.com/) é um framework focado no desenvolvimento de aplicações pra web 2.0. Ele tem um grande número de seguidores, fontes de suporte e uma comunidade cheia de usuários ativos e participativos. O Zend é o framework mais famoso hoje em dia, ele é robusto e permite a criação de aplicações <em>enterprise</em> (de grande porte) mas seu uso exige um conhecimento vasto do PHP.

<h3 style="color: #FE3404">CodeIgniter</h3>
Já o <span class="removed_link" title="http://www.codeigniter.com.br/">CodeIgniter</span> é bastante conhecido pela sua facilidade de uso, performance e rapidez. É ideal para aplicações rodando em servidores compartilhados. Ele oferece soluções simples e de pequeno porte, com um grande número de tutoriais em vídeo, fóruns e wikis.

<p style="float: right; font-size: 10px">[Fonte](http://www.noupe.com/php/discussing-php-frameworks.html)

