---
layout: post
title: Criando funções que aceitem N argumentos
excerpt: Descubra como é simples criar funções que podem receber um número indeterminado
  de argumentos e, como exemplo, crie uma função que calcula a média de N números.

date: '2010-01-04 11:57:35 -0200'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Argumentos
- Funções
---
Hoje vou mostrar pra vocês como é facil criar uma função que aceite um número indeterminado de argumentos, é o mesmo caso das funções [max()](http://www.php.net/manual/pt_BR/function.max.php), onde você pode passar 1, 2 ou 200 argumentos e ela irá funcionar perfeitamente.

O ponto-chave desse tipo de função é o uso de duas outras funções nativas do PHP, são elas: [func_get_args()](http://www.php.net/manual/pt_BR/function.func-get-args.php).

A função <strong>func_num_args()</strong> (quando usada dentro de uma outra função) retorna o número de argumentos que foram passados para essa função. E a função <strong>func_get_args()</strong> retorna uma lista (array) com os argumentos que foram passados para essa função.

Vamos criar uma função para calcular a média de uma quantiade qualquer de números:


<div data-gist-id="fc0fd637863dbf2e71af" data-gist-show-loading="false"></div>

Perceba que, na definição da função, não colocamos nada no lugar dos parâmetros/argumentos que ela necessita... Exatamente por que <strong>a quantidade de argumentos será variável</strong>.

Agora vamos pegar o total e a lista de argumentos passados para a função:


<div data-gist-id="e440b4b2fe1417a53995" data-gist-show-loading="false"></div>

Feito isso, vamos precisar fazer uma verificação, só por segurança, da quantidade de argumentos passados... Não há lógica em tentar calcular a média de 0 numeros, não é mesmo?


<div data-gist-id="cf368bf9fe431e20e71b" data-gist-show-loading="false"></div>

E por final, caso tenha sido passado pelo menos um argumento, calculamos a somatória dos números e retornamos a média:


<div data-gist-id="4b6bf8497b9ece7b3d03" data-gist-show-loading="false"></div>

No final das contas, nossa função ficou assim:


<div data-gist-id="5e0e339ea344a640d44e" data-gist-show-loading="false"></div>

O uso dela é bem simples:

<div data-gist-id="a6d7ac063a17bded1888" data-gist-show-loading="false"></div>

Espero que tenham gostado! Até a próxima! :]

