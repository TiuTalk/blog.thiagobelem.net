---
layout: post
title: Segurança – Manipulando erros no PHP
excerpt: Aprenda a construir o seu próprio <strong>manipulador de erros</strong> do
  PHP para receber e-mails quando o seu site der "xabu" e deixe o seu site, além de
  mais bonito, mais seguro.

date: '2009-07-11 11:04:50 -0300'
categories:
- PHP
- Artigos
- Segurança
tags:
- PHP
- Erros
---
Hoje vou mostrar pra vocês como usar um "manipulador de erros" (Error Handler) no PHP.

### Por que manipular os erros?
Quase se trata de segurança, os erros do PHP são como uma janela aberta... Eles não permitem que um atacante consiga invadir/derrubar o seu site, mas permitem que o atacante conheça um pouco mais sobre o que é e como funciona o seu site.

Manipular os erros de forma correta, além de deixar o site mais "bonito" faz com que você saiba, em <strong>tempo real</strong>, o que acontece com aquele seu site de 4 anos atrás que você nem monitora mais, pois ele te envia um e-mail dizendo o nome do site, o arquivo e a linha que deu erro.

### Arquivo para a manipulação de erros
Para iniciar a manipular os seus erros é só dar um include/require nesse arquivo logo no começo do seu site. E não se esqueça de mudar as configurações entre as linhas 8 e 14.


<div data-gist-id="aeb7f2783a94aed3e95a" data-gist-show-loading="false"></div>

Caso você precise mudar a forma com qual o email é enviado, é só alterar ali em cima, entre as linhas 65 e 105.

### Causando um erro
Ao executar o seguinte script (exibir uma variável que não existe):


<div data-gist-id="e500b9aacfd02051cede" data-gist-show-loading="false"></div>

Termos a seguinte resposta por email:


<div data-gist-id="59f63810edeaaf1d552f" data-gist-show-loading="false"></div>

E o assunto do e-mail recebido será:


<div data-gist-id="fa652cf94db101f9469c" data-gist-show-loading="false"></div>

Gostaram né? :D

Mesmo que esse formato de manipulação funcione, peço que não considerem essa versão do arquivo como a final e editem-no  da forma que acharem melhor para adequá-lo às suas necessidades.

Um grande abraço e até a próxima!

