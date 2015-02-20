---
layout: post
title: Constantes no PHP
excerpt: Aprendam pra que servem, como criar e como usar as constantes no PHP, um
  "tipo" de variável que permanece igual até o final da execução do script.

date: '2009-09-22 16:04:21 -0300'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Constantes
---
O que é uma constante? É exatamente o contrário de uma variável.. E o que é uma variável? "Uma coisa que varia!"

Constantes são "variáveis fixas", capazes de armazenar um valor (de quase todos os tipos) mas que não podem ser redefinidos, modificados ou removidos... Eles são constantes e permanecem como são até o final da execução do script.

### Segundo a documentação...
<blockquote><em>Uma constante é um identificador (nome) para um único valor. Como o nome sugere, esse valor não pode mudar durante a execução do script (exceção às  constantes mágicas, que não são constantes de verdade). As constantes são sensíveis ao caso por padrão. Por convenção, o nomes de constantes são sempre em maiúsculas.</em>

<em>O nome de uma constante tem as mesmas regras de qualquer identificador no PHP. Um nome de constante válida começa com uma letra ou sublinhado, seguido por qualquer número de letras, números ou sublinhados.</em>
</blockquote>
### Criando constantes
Pra criar uma constante é bem simples, você usa a função <strong>define()</strong> que pede dois argumentos: primeiro o nome da constante e depois o seu valor, exemplos:

<div data-gist-id="bf9e634721eefce585d2" data-gist-show-loading="false"></div>

No código acima definimos DUAS constantes diferentes, com dois valores diferentes. O nome das constantes é "case-sensitive" isso significa que "SITE" é diferente de "site" que são diferente de "sItE" e por aí vai.

### Usando constantes
O uso de uma constante é identico ao uso de uma variável, diferença é que você não tem um cifrão ($) na frente do nome da constante, por exemplo:

<div data-gist-id="1d19291ca9d496bd081d" data-gist-show-loading="false"></div>

<strong style="color: red">Atenção:</strong> Se você tentar definir uma mesma constante - mais de uma vez - receberá uma mensagem de erro. Afinal, ela é uma constante e não pode ser definida novamente.

### Recebendo o valor de uma constante
Normalmente para receber o valor de uma constante é só usar o seu nome como foi mostrado no exemlpo anterior, mas e se o nome da constante é dinâmico (está dentro de uma variável)?

Vamos a um exemplo básico, suponhamos que você tenha um script que cria uma constante em função do nome do visitante, você poderia fazer assim:

<div data-gist-id="37643fc57c8236303747" data-gist-show-loading="false"></div>

Agora imagine que o valor dessa variável <strong>$cargo</strong> muda pra cada visitante e você não pode usar "dono" como está ali no echo, você faz assim:

<div data-gist-id="7db128d03bd64d24fcca" data-gist-show-loading="false"></div>

A função <strong>constant()</strong> te retorna o valor da constante cujo o nome você passou por parâmetro! É fantástico, não é?

### Trabalhando com constantes
Você pode usar a função <strong>defined()</strong> para saber se uma constante já foi definida, por exemplo:

<div data-gist-id="e9a446503b657ca399c9" data-gist-show-loading="false"></div>

### Documentação
» Capítulo [constantes](http://www.php.net/manual/pt_BR/language.constants.php)
» Função [define()](http://www.php.net/manual/pt_BR/function.define.php)
» Função [constant()](http://www.php.net/manual/pt_BR/function.constant.php)
» Função [defined()](http://www.php.net/manual/pt_BR/function.defined.php)

--

A vantagem de se usar constantes é que <strong>elas são globais</strong> e passam a existir dentro de qualquer escopo do seu script (classe, funções, includes e etc.).

Espero que tenham gostado! :D

