---
layout: post
title: Validação de e-mail no PHP com Expressões Regulares

date: '2009-03-05 20:32:40 -0300'
categories:
- PHP
- Tutoriais
- Segurança
tags: []
---
Expressões regulares são uma funcionalidade incrível... É possível interagir com strings e verificar a sua sintaxe...

Normalmente se usa <strong>regexp </strong>(<em><strong>Reg</strong>ular <strong>Exp</strong>ression</em>) pra algumas tarefas simples mas muito úteis: como validar um e-mail, validar uma url, validar a formatação de uma senha que precise ter no minimo 2 letras, 6 números e 7 caracteres... Isso tudo pode e deve ser validado com expressões regulares.

Antes de mostrar o código da validação de e-mail, vou fazer uma breve introdução aos possíveis "formatos" de uma regexp... Nem todas serão usadas, mas é bom que vocês já vejam tudo que é possível fazer:

* `\s` -> Significa um espaço em branco
* `^` -> Significa o início da string
* `$` -> Significa o fim da string
* `.` -> Significa qualquer caractere
* `(bola|casa)` -> Significa bola ou casa
* `[0-9]` ->Significa qualquer número entre zero e nove
* `[a-z]` -> Significa qualquer letra minúscula
* `[A-Z]` -> Significa qualquer letra maiúscula
* `[^a-z]` -> Significa a não ocorrência (falta / proibição) de letras minúsculas. O circunflexo (^) tem significado de 'não existe'
* `?` -> Significa nenhuma ou uma ocorrência caractere anterior
* `* `-> Significa nenhuma ou várias ocorrências do caractere anterior
* `+` -> Significa - no mínimo - uma ocorrência do caractere anterior
* `{3}` -> Significa exatamente três caracteres
* `{3,}` -> Significa três ou mais caracteres
* `{3,6}` -> Significa entre três e seis caracteres, pode ser 4, 5 também

Mas calma... Onde isso tudo vai?

Vamos a um exemplo simpes... Uma <strong>regexp </strong>pra verificar um nome de usuario que precise ter no mínimo 5 caracteres e possa ser composto apenas por letras minusculas e números: <strong>^[a-z0-9]{5,}$
</strong>

Sacaram? O nome desse 'bloco' da regexp é chamado <strong>pattern</strong>, ou padrão. Ao validar uma string você compara um pattern com uma string, e se ela validar, ou seja, cumprir as condições, a string está dentro do formato.

Agora vamos ao código de validação de e-mail, ele é bem simples:

<div data-gist-id="63bc7d9b4f8b146c26d7" data-gist-show-loading="false"></div>

Agora vamos explicar o script... Dividi a pattern em três partes pra ficar mais fácil de entender, usaremos o e-mail <strong><span style="color: #99cc00;">contato@</span><span style="color: #ff6600;">thiagobelem</span><span style="color: #ff6600;"><span style="color: #ff6600;">.</span><span style="color: #3366ff;">net</span></span></strong> como exemplo:

<p style="padding-left: 30px;"><strong>^[a-zA-Z0-9\._-]+@</strong>
Essa parte é responsável por validar o que vem antes da @.. A conta do e-mail (seria o <strong><span style="color: #99cc00;">contato@</span></strong><strong></strong> do e-mail). Podemos ver que - após o <strong>início da string</strong> - ela precisa ter pelo menos um caractere e pode ser composta por letras minúsculas, letras maiúsculas, números, ponto, sublinhado (underscore) e hífen. Depois desses caracteres, vem o @.

<p style="padding-left: 30px;"><strong>[a-zA-Z0-9\._-]+.</strong>
Essa parte é responsável pela sintaxe do domínio (seria o <strong><span style="color: #ff6600;">thiagobelem</span></strong><strong><span style="color: #ff6600;">.</span></strong> do e-mail)... Ele deve ser composto por um ou mais letras minúsculas, letras maiúsculas, números, pontos, underscores e hífens. E logo após o domínio, vem um ponto. Repare que o ponto está <em>escapado</em>, ou seja: tem uma barra antes dele. Isso acontece pro que o . faz parte dos 'formatos' usados numa regexp e significa "qualquer caractere". Se no e-mail tivesse '.com.br', o <span style="color: #ff6600;"><strong>.com</strong></span> faria parte desse bloco e não do próximo.

<p style="padding-left: 30px;"><strong>([a-zA-Z]{2,4})$</strong>
Essa é a ultima parte, responsável pela sintaxe do <em><strong>tld </strong></em>(extensão do domínio, que seria o <strong><span style="color: #ff6600;"><span style="color: #3366ff;">net</span></span></strong> do e-mail)... Ele deve ter de dois a quatro caracteres, sendo eles letras minúsculas e/ou letras maiúsculas. Ele também é a última coisa do e-mail, então logo após ele vem o <strong>fim da string</strong>, o fim do e-mail.

Com tudo isso o nosso e-mail está validado e você tem um validado de e-mails pronto pra ser usado!

E aí? Gostaram? Comentem!  ;-)

