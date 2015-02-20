---
layout: post
title: Gerando senhas aleatórias com PHP
excerpt: Aprenda o passo-a-passo para criar uma função que gera senhas aleatórias
  contendo (opcionalmente) números, letras maiúsculas e minúsculas e simbolos... Do
  tamanho que você desejar. :)

date: '2009-06-17 14:39:02 -0300'
categories:
- PHP
- Tutoriais
- Segurança
tags:
- PHP
- Senhas
- Random Password
- Senhas Aleatórias
---
Hoje vou falar de um script com uma função simples, mas <strong>muito útil</strong>: gerar senhas aleatórias.

Você vai poder usar ele, por exemplo, para gerar uma senha nova quando o usuário esqueceu sua senha, ou simplesmente gerar uma senha para um cadastro onde o usuário não define a sua senha.

Vou explicar o passo-a-passo pra criar a função que permitirá uma criação personalizada de senhas contendo números, letras (minúsculas e maiúscuslas) e símbolos... Todos opcionais.

Primeiro, definimos uma função vazia com alguns parâmetros (e seus valores padrões):


<div data-gist-id="5691f4c81fd0b794b600" data-gist-show-loading="false"></div>

Como pode ver, por padrão a senha gerada terá 8 caracteres, letras (minúsculas e maiúsculas) e números... Mas repito: todos esses parâmetros poderão ser modificados e manipulados (veremos isso depois).

Agora definimos algumas variáveis que serão usadas pela função:


<div data-gist-id="7f3702200c554be68906" data-gist-show-loading="false"></div>

Agora começa a brincadeira.. Vamos alimentar a variável $caracteres com todos os caracteres que poderão ser usados na senha:


<div data-gist-id="126f1304e9c5019e762f" data-gist-show-loading="false"></div>

Agora, pra finalizar, contamos com quantos caracteres a variável $caracteres ficou e usamos uma estrutura de repetição (<em>loop</em>) que se repetirá pra cada um dos caracteres finais da senha (variável $tamanho).

Depois é só retornar a variável contendo a senha criada:


<div data-gist-id="5b201aad8cec6b4a4605" data-gist-show-loading="false"></div>

O código acima já é a função completa e pronta pra usar! :D

Veja exemplos de uso no fim do artigo.

### Código final da função
Fiz também uma versão mais compacta, sem comentários e com créditos:


<div data-gist-id="4a44116679ea35ce40c6" data-gist-show-loading="false"></div>

--

### Exemplos de uso

<div data-gist-id="c071f2fbca10b9ab8297" data-gist-show-loading="false"></div>

--

Essa função pode ser usada em vários tipos e sistemas e em vários casos... Se você quiser, pode modificar as variáveis que definem os caracteres de cada tipo, tirando o zero (0) e o "o" (letra), um (1) e o l (L minúsculo) e etc. para evitar conflitos visuais.

Um grande abraço e todos vocês e espero que tenham gostado! :)

