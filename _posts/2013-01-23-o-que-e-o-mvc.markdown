---
layout: post
title: Mas afinal, o que é o MVC?
excerpt: MVC é um padrão de arquitetura de software que separa a informação (e as
  suas regras de negócio) da interface com a qual o usuário interage.

date: '2013-01-23 16:10:52 -0200'
categories:
- Desenvolvimento
- PHP
- Frameworks
- CakePHP
- Artigos
- Orientação a objetos
tags:
- CakePHP
- controller
- model
- frameworks
- MVC
- View
---

> **Model–view–controller** (MVC) is a [software architecture](http://en.wikipedia.org/wiki/Software_architecture) pattern that separates the representation of information from the user's interaction with it.
> -- Wikipedia

**MVC** é um padrão de arquitetura de software que separa a informação (e as suas regras de negócio) da interface com a qual o usuário interage.

É uma forma de estruturar seu projeto/aplicação de forma que a interface de interação (<strong>view</strong>) esteja separada do controle da informação em si (<strong>models</strong>), separação essa que é intermediada por uma outra camada controladora (<strong>controllers</strong>).

Não vou entrar em detalhes profundos sobre a arquitetura de um sistema baseado no MVC nem vou - por enquanto! - mostrar como criar um MVC do zero, mas vou tentar explicar cada uma das três camadas e dar exemplos de código do [framework de PHP](/frameworks-no-php-o-que-quando-porque-e-qual) que - ao meu ver - faz um bom uso do MVC.

<h2>Model <span style="color: #999999;">(ou modelo)</span></h2>

O model é a camada que <strong>representa os seus dados</strong>, provendo meios de acesso (leitura e escrita) à esses dados.

A regra é simples: tudo que diz respeito à <strong>escrita</strong>, <strong>validação</strong> e <strong>leitura</strong> dos dados está dentro da <strong>camada model</strong>, não necessariamente dentro do model em si, mas dentro da camada model.

Vemos aqui um exemplo de model de produtos (que vai prover o acesso à tabela <strong>products</strong>, no banco de dados) no arquivo <strong>Product.php</strong>:

<div data-gist-id="4610407" data-gist-show-loading="false"></div>

Aqui temos um model bem simples, onde definimos as regras de validação e um método que vai auxiliar a encontrar os produtos mais recentes.

Não vou entrar nos detalhes do CakePHP, além do mais acho que o código é bem auto-explicativo.

Somente através desse model será possível cadastrar e buscar produtos, e quando um usuário for cadastrar ou editar uma notícia, aquelas regras de validação devem ser respeitadas, ou seja:

* O título não pode ser vazio
* A descrição não pode ser vazia nem ter menos de 100 caracteres
* O preço precisa ser no formato decimal, com 2 casas decimais

Para saber mais sobre models no CakePHP, consulte a documentação: [http://book.cakephp.org/2.0/en/models.html](http://book.cakephp.org/2.0/en/models.html)

Agora podemos partir para a camada que vai fazer uso desse model, pedindo uma lista de produtos..

<h2>Controller<span style="color: #999999;"> (ou controlador)</span></h2>
No <strong>controller</strong> você tem <strong>métodos públicos</strong> que são chamados de <strong>actions</strong>, cada action é responsável por uma "página" do seu site/sistema. É o controller quem decide:

1. Qual model usar;
2. Quais pedidos fazer pro model;
3. Qual combinação de views será usada para exibir os dados retornados pelo model.

Atente que <strong>não é o controller</strong> que busca os dados (responsabilidade do model) e nem é ele quem exibe os dados (responsabilidade da view)... ele está ali justamente pra <strong>controlar</strong> os dois e a aplicação como um todo.

Vamos à um exemplo de controller no arquivo <strong>ProductsController.php</strong>:

<div data-gist-id="4610719" data-gist-show-loading="false"></div>

Aqui temos duas actons:

* Uma action (<strong>index</strong>) vai pedir (para o model) a lista de produtos mais recentes;
* Outra action (<strong>view</strong>) vai pedir (para o model) os dados de um único produto.

Para saber mais sobre controllers no CakePHP, consulte a documentação: [http://book.cakephp.org/2.0/en/controllers.html](http://book.cakephp.org/2.0/en/controllers.html)

Agora podemos exibir esses dados na camada responsável por isso...

<h2>View<span style="color: #999999;"> (ou visualização)</span></h2>
É na view que o seu sistema interage com o usuário. Tudo que ele ver (HTML / XML / RSS / CSV) deve ser gerado e exibido através dessa camada. A view, por sua vez, tem como responsabilidade:

* Manipular os dados para - e apenas para - exibição;
* Exibir os dados.

Mas a view não faz nenhum tipo de escrita/persistência no seu sistema... ela não salva dados no banco, na sessão e etc.. E ela também não busca esses dados, pois eles devem - obrigatoriamente - serem entregues pela camada <strong>controller</strong>.

Vamos ver então um exemplo de listagem dos produtos, no arquivo <strong>index.ctp</strong>:

<div data-gist-id="4610943" data-gist-show-loading="false"></div>

Aqui temos uma mistura de HTML e PHP, e também fazemos uso do [NumberHelper](http://book.cakephp.org/2.0/en/core-libraries/helpers/number.html), um Helper do CakePHP para ajudar na formatação de números.

Se você quiser saber mais sobre views no CakePHP, consulte a documentação: [http://book.cakephp.org/2.0/en/views.html](http://book.cakephp.org/2.0/en/views.html)

<h2>Conclusão</h2>
Com o MVC você conseguirá organizar seu projeto de forma que tudo tenha seu lugar, e cada camada com sua responsabilidade, permitindo um trabalho muitos mais "centrado" e modularizado.

Espero que você tenha gostado dessa breve explicação sobre o MVC, e que ela tenha despertado a fagulha de curiosidade/interesse que vai fazer você correr atrás de mais conteúdo sobre o assunto... Te garanto que isso é só a ponta do iceberg.

<h2>Momento jabá!</h2>

Gostou dos exemplos e quer aprender um pouco mais sobre <strong>CakePHP</strong>? E se eu te disser que tenho um curso que é <strong>online e ao vivo</strong>, e você aprende sem sair de casa?

Gostou? Então inscreva-se na próxima turma e aprenda a <strong>assar sites</strong> como um cozinheiro de primeira: [Assando Sites, curso online de CakePHP](http://assando-sites.com.br/)

