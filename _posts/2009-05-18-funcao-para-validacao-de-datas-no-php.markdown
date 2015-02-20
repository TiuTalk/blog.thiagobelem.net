---
layout: post
title: Função para validação de datas no PHP
excerpt: 'Uma data pode vir em vários formatos: AAAA-MM-DD, DD/MM/AAAA, AAAAMMDD,
  DDMMAAAA e você precisa de uma função que te ajude a verificar se ela é válida ou
  inválida, independente do seu formato.'

date: '2009-05-18 20:35:53 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Fala pessoal! :D

Hoje vou mostrar como fazer a validação do formato de uma data...

A lógica é bem simples: uma data pode vir em vários formatos: AAAA-MM-DD, DD/MM/AAAA, AAAAMMDD, DDMMAAAA e por aí vai... E você precisa de uma função que verifique se é uma data válida, independente do seu formato.

A função poderia ser assim:


<div data-gist-id="0effe55821e82eb0f745" data-gist-show-loading="false"></div>

Tá... mas o que essa função realmente faz?

Vamos lá... Criamos uma função que precisa de dois argumentos, a data a ser validada ($data) e o seu formato ($formato).. Definimos também um valor padrão para o segundo argumento.

Dentro da função nós fazemos um <strong>switch</strong>() que equivale (em alguns casos) a uma seqüência longa de ifs e elses... Cada bloco de <em>case</em> acontecerá apenas quando $formato for igual ao valor especificado no <em>case</em> (caso). Caso o formato não esteja especificado em nenhum case, é exibida uma mensagem de erro com o <strong>throw new Exception()</strong>.

Em cada case nós temos uma forma de "quebrar" a data e pegar cada uma das suas partes: dia ($d), mês ($m) e ano ($a)... Partes essas que serão verificadas usando a função <strong>checkdate() </strong>na última linha da função.

Por fim, a função retorna verdadeiro (true) ou falso (false)... Então podemos usá-la da seguinte maneira:


<div data-gist-id="825881bbfe8482c5f289" data-gist-show-loading="false"></div>

Ahh.. essa função também te ajuda a validar datas vindas do MySQL (no formato AAAA-MM-DD).

E aí? Gostaram? :)

