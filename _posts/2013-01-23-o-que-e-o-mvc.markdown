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
<blockquote><b>Model–view–controller</b> (<b>MVC</b>) is a <a title="Software architecture" href="http://en.wikipedia.org/wiki/Software_architecture">software architecture</a> pattern that separates the representation of information from the user's interaction with it.</p>
<p>-- <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">Wikipedia</a></p></blockquote>
<p><strong>MVC</strong> é um padrão de arquitetura de software que separa a informação (e as suas regras de negócio) da interface com a qual o usuário interage.</p>
<p>É uma forma de estruturar seu projeto/aplicação de forma que a interface de interação (<strong>view</strong>) esteja separada do controle da informação em si (<strong>models</strong>), separação essa que é intermediada por uma outra camada controladora (<strong>controllers</strong>).</p>
<p>Não vou entrar em detalhes profundos sobre a arquitetura de um sistema baseado no MVC nem vou - por enquanto! - mostrar como criar um MVC do zero, mas vou tentar explicar cada uma das três camadas e dar exemplos de código do <a href="http://cakephp.org">CakePHP</a>, que é um <a title="Frameworks no PHP: O que, quando, porque e qual?" href="http://blog.thiagobelem.net/frameworks-no-php-o-que-quando-porque-e-qual/">framework de PHP</a> que - ao meu ver - faz um bom uso do MVC.</p>
<h2>Model <span style="color: #999999;">(ou modelo)</span></h2>
<p>O model é a camada que <strong>representa os seus dados</strong>, provendo meios de acesso (leitura e escrita) à esses dados.</p>
<p>A regra é simples: tudo que diz respeito à <strong>escrita</strong>, <strong>validação</strong> e <strong>leitura</strong> dos dados está dentro da <strong>camada model</strong>, não necessariamente dentro do model em si, mas dentro da camada model.</p>
<p>Vemos aqui um exemplo de model de produtos (que vai prover o acesso à tabela <strong>products</strong>, no banco de dados) no arquivo <strong>Product.php</strong>:</p>
<p>[gist id=4610407]</p>
<p>Aqui temos um model bem simples, onde definimos as regras de validação e um método que vai auxiliar a encontrar os produtos mais recentes.</p>
<p>Não vou entrar nos detalhes do CakePHP, além do mais acho que o código é bem auto-explicativo.</p>
<p>Somente através desse model será possível cadastrar e buscar produtos, e quando um usuário for cadastrar ou editar uma notícia, aquelas regras de validação devem ser respeitadas, ou seja:</p>
<ul>
<li><span style="line-height: 14px;">O título não pode ser vazio</span></li>
<li>A descrição não pode ser vazia nem ter menos de 100 caracteres</li>
<li>O preço precisa ser no formato decimal, com 2 casas decimais</li>
</ul>
<p>Para saber mais sobre models no CakePHP, consulte a documentação: <a href="http://book.cakephp.org/2.0/en/models.html">http://book.cakephp.org/2.0/en/models.html</a></p>
<p>Agora podemos partir para a camada que vai fazer uso desse model, pedindo uma lista de produtos..</p>
<h2>Controller<span style="color: #999999;"> (ou controlador)</span></h2>
<p>No <strong>controller</strong> você tem <strong>métodos públicos</strong> que são chamados de <strong>actions</strong>, cada action é responsável por uma "página" do seu site/sistema. É o controller quem decide:</p>
<ol>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Qual model usar;</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Quais pedidos fazer pro model;</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Qual combinação de views será usada para exibir os dados retornados pelo model.</span></li>
</ol>
<p>Atente que <strong>não é o controller</strong> que busca os dados (responsabilidade do model) e nem é ele quem exibe os dados (responsabilidade da view)... ele está ali justamente pra <strong>controlar</strong> os dois e a aplicação como um todo.</p>
<p>Vamos à um exemplo de controller no arquivo <strong>ProductsController.php</strong>:</p>
<p>[gist id=4610719]</p>
<p>Aqui temos duas actons:</p>
<ul>
<li><span style="line-height: 14px;">Uma action (<strong>index</strong>) vai pedir (para o model) a lista de produtos mais recentes;</span></li>
<li>Outra action (<strong>view</strong>) vai pedir (para o model) os dados de um único produto.</li>
</ul>
<p>Para saber mais sobre controllers no CakePHP, consulte a documentação: <a href="http://book.cakephp.org/2.0/en/controllers.html">http://book.cakephp.org/2.0/en/controllers.html</a></p>
<p>Agora podemos exibir esses dados na camada responsável por isso...</p>
<h2>View<span style="color: #999999;"> (ou visualização)</span></h2>
<p>É na view que o seu sistema interage com o usuário. Tudo que ele ver (HTML / XML / RSS / CSV) deve ser gerado e exibido através dessa camada. A view, por sua vez, tem como responsabilidade:</p>
<ul>
<li><span style="line-height: 14px;">Manipular os dados para - e apenas para - exibição;</span></li>
<li>Exibir os dados</li>
</ul>
<p>Mas a view não faz nenhum tipo de escrita/persistência no seu sistema... ela não salva dados no banco, na sessão e etc.. E ela também não busca esses dados, pois eles devem - obrigatoriamente - serem entregues pela camada <strong>controller</strong>.</p>
<p>Vamos ver então um exemplo de listagem dos produtos, no arquivo <strong>index.ctp</strong>:</p>
<p>[gist id=4610943]</p>
<p>Aqui temos uma mistura de HTML e PHP, e também fazemos uso do <a href="http://book.cakephp.org/2.0/en/core-libraries/helpers/number.html">NumberHelper</a>, um Helper do CakePHP para ajudar na formatação de números.</p>
<p>Se você quiser saber mais sobre views no CakePHP, consulte a documentação: <a href="http://book.cakephp.org/2.0/en/views.html">http://book.cakephp.org/2.0/en/views.html</a></p>
<h2>Conclusão</h2>
<p>Com o MVC você conseguirá organizar seu projeto de forma que tudo tenha seu lugar, e cada camada com sua responsabilidade, permitindo um trabalho muitos mais "centrado" e modularizado.</p>
<p>Espero que você tenha gostado dessa breve explicação sobre o MVC, e que ela tenha despertado a fagulha de curiosidade/interesse que vai fazer você correr atrás de mais conteúdo sobre o assunto... Te garanto que isso é só a ponta do iceberg.</p>
<h2>Momento jabá!</h2>
<p><a href="http://assando-sites.com.br/"><img class="alignright  wp-image-3002" style="box-shadow: none;" alt="Assando Sites, curso online de CakePHP" src="http://blog.thiagobelem.net/wp-content/uploads/2013/01/bolo-topo-gnomo-direita-175x300.png" width="82" height="140" /></a></p>
<p>Gostou dos exemplos e quer aprender um pouco mais sobre <strong>CakePHP</strong>? E se eu te disser que tenho um curso que é <strong>online e ao vivo</strong>, e você aprende sem sair de casa?</p>
<p>Gostou? Então inscreva-se na próxima turma e aprenda a <strong>assar sites</strong> como um cozinheiro de primeira: <a title="Assando Sites, curso online de CakePHP" href="http://assando-sites.com.br/">Assando Sites, curso online de CakePHP</a></p>
