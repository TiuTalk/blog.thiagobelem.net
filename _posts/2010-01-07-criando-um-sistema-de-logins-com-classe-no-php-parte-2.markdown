---
layout: post
title: Criando um sistema de logins com classe no PHP – Parte 2
excerpt: Segunda parte do tutorial que te ensinará, passo-a-passo a criar um sistema
  de login usando classes, MySQL, sessões e cookies... Que funciona tanto no PHP 4
  quanto no PHP 5. :)

date: '2010-01-07 08:48:16 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Login
---
Vamos que vamos! Essa é a segunda parte do nosso tutorial "<strong>Criando um sistema de logins com classe no PHP</strong>", na [Parte 1](/criando-um-sistema-de-logins-com-classe-no-php-parte-1) começamos a criar a classe e definimos um método que validava se o usuário existe, agora vamos continuar a classe e criar um método que deixará o usuário logado no sistema usando sessão e cookies.

Primeiro, vamos adicionar algumas novas propriedades que iremos usar nessa parte do tutorial:

<div data-gist-id="1ab9b09c028db4d306b1" data-gist-show-loading="false"></div>

Todas as propriedades estão comentadas, é bom vocês irem se acostumando com essa necessidade dos comentários organizados e padronizados, isso vai se tornar um "<em>must have</em>" num futuro não muito distante... Mas isso é assunto pra um outro tutorial.

Reparem que criamos uma propriedade $erro, ela será usada para armazenar as mensagens de erro quando algo der errado... :)

Agora vamos começar a criar o novo, gigantesco e magnífico método que irá salvar o usuário no sistema, mantendo-o logado:


<div data-gist-id="8b2d1e2e532ee857a024" data-gist-show-loading="false"></div>

Primeiro de tudo, precisamos validar os dados passados por parâmetro:

<div data-gist-id="9482f2790914979d145c" data-gist-show-loading="false"></div>

Já sabemos se o usuário foi validado, agora nós vamos verificar se é necessário (e possível) iniciar a sessão:

<div data-gist-id="0812cc4d33d732081b97" data-gist-show-loading="false"></div>

O próximo passo é atrazer (ou não) os dados do banco de dados para a sessão:

<div data-gist-id="f7628f338aa561354e22" data-gist-show-loading="false"></div>

Da linha 124 até a linha 135 nó montamos a consulta que será usada para fazer a busca no banco de dados, depois disso nós a executamos e, caso a consulta tenha sido bem sucedida, salvamos os dados na sessão.

Repare que para isso usamos <strong style="background: #B4DFEF; color: black">$_SESSION[$this->prefixoChaves . $chave]</strong>, isso irá criar valores na sessão usando o prefixo (definido na propriedade <strong>$this->prefixoChaves</strong> no começo da classe) seguido o nome do campo que estava no banco de dados... Então, segundo o nosso exemplo: se estamos pegando o campo <strong>id</strong> e o campo <strong>nome</strong> lá da tabela, as chaves criadas na sessão serão <strong>usuario_id</strong> e <strong>usuario_nome</strong>... Legal não?

Mas calma que ainda não acabou!

Precisamos ainda definir um valor na sessão e criar (caso seja possível) o cookie que irá ajudar na identificação (e segurança) do usuário:


<div data-gist-id="04f30d9c85e2222742de" data-gist-show-loading="false"></div>

A parte do cookie pode parecer complexa mais não é... Criamos um cookie chamado "usuario_token" contendo informações adicionais do usuário: usuário, IP e informações do navegador... Essas informações serão usadas para proteger o login do usuário caso outros usuários tentem roubar o ID de sessão ou forjar IDs falsos.

Agora sim o método terminou! :D

Resumindo tudo:

Depois de logado, seguindo o nosso exemplo, serão criados os seguintes valores na sessão:

<ul>
<li><strong>usuario_id</strong> » Contendo o ID do usuário (vindo da coluna `id` da tabela);</li>
<li><strong>usuario_nome</strong> » Contendo o nome do usuário (vindo da coluna `nome` da tabela);</li>
<li><strong>usuario_usuario</strong> » Contendo o usuario do usuário <span style="color: silver">(?!)</span> (vindo da coluna `usuario` da tabela);</li>
<li><strong>usuario_logado</strong> (true) » Contendo um booleano (sempre true) informando que o usuário está logado, apenas para facilitar as coisas no futuro.</li>
</ul>
E será criado um cookie (com as informações do visitante), criptografado, que irá durar apenas enquanto o visitante estiver com o navegador aberto:

<ul>
<li><strong>usuario_token</strong> » Exemplo de valor: a9f0a6edefc3d61895d5b8054ed6b8a175bc2851</li>
</ul>
Por hoje é só pessoal... Na Parte 3 do tutorial iremos criar o método que irá verificar o usuário está logado (que vocês poderão usar nas suas páginas protegidas) e o método para logout, mas isso não é tudo... Ainda vai faltar o "lembrar minha senha" e outras implementações... Talvez um sisteminha de permissões, quem sabe? :D

Pra quem quiser, o download do script completo:

<ul>
<li><strong>Parte 1</strong> » [RAR](/arquivos/2010/01/usuarios.class.parte1.rar)</li>
<li><strong>Parte 2</strong> » [RAR](/arquivos/2010/01/usuarios.class.parte2.rar) (Já inclui os códigos da Parte 1)</li>
</ul>
Não deixem de dar uma olhada nas outras partes:

<ul>
<li>[Criando um sistema de logins com classe no PHP - Parte 1](/criando-um-sistema-de-logins-com-classe-no-php-parte-1)</li>
<li>[Criando um sistema de logins com classe no PHP - Parte 3](/criando-um-sistema-de-logins-com-classe-no-php-parte-3)</li>
</ul>
Quem gostou levanta a mão! \o. (E com a outra mão, deixa um comentário agradecendo)

Abraços e até a próxima!

