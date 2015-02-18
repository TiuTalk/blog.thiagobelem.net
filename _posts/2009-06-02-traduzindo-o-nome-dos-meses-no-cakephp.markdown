---
layout: post
title: Traduzindo o nome dos meses no CakePHP
excerpt: Aprenda a usar o sistema de localização (l10n) do CakePHP e traduzir o nome
  dos meses que aparecem no input criado automaticamente (HTML Helper) do CakePHP.

date: '2009-06-02 12:03:54 -0300'
categories:
- CakePHP
- Tutoriais
tags: []
---
Fala pessoal!

Este é o meu primeiro artigo (de muitos) sobre o <a href="http://cakephp.org/" target="_blank"><strong><span style="color: #ff6600;">CakePHP</span></strong></a> aqui no blog... Não vou entrar em detalhes (ainda) sobre o que é e como usar o Cake, mas vou falar de um probleminha que tive por muito tempo e só encontrei a "<span style="color: #000000;">perfeita solução</span>" pra ele esses dias: traduzir o nome dos meses (para inputs de datas) sem alterar o core.

Essa tradução consiste em usar o sistema de localização que já vem no Cake... Bom, vamos lá:

Primeiro de tudo, vá no controller onde você quer a tradução ou direto no AppController e antes da definição da classe, insira essa linha:


[code language="php"]App::import('Core', 'l10n');[/code]

Isso vai fazer o Cake chamar a classe/função l10n, que é o sistema de localização.

Depois, crie a seguinte estrutura de pastas:

<p style="padding-left: 30px;"><strong>../app/locale/<span style="color: #99cc00;">br<span style="color: #000000;">/</span>LC_MESSAGE</span>/</strong>

Agora, dentro da pasta LC_MESSAGE criada, crie um arquivo chamado <span style="color: #ff6600;"><strong>default.po</strong></span> com o seguinte conteúdo:


[code]msgid  "January"
msgstr "Janeiro"

msgid  "February"
msgstr "Fevereiro"

msgid  "March"
msgstr "Março"

msgid  "April"
msgstr "Abril"

msgid  "May"
msgstr "Maio"

msgid  "June"
msgstr "Junho"

msgid  "July"
msgstr "Julho"

msgid  "August"
msgstr "Agosto"

msgid  "September"
msgstr "Setembro"

msgid  "October"
msgstr "Outubro"

msgid  "November"
msgstr "Novembro"

msgid  "December"
msgstr "Dezembro"

[/code]

Agora é só ir no arquivo de configurações (../app/config/core.php) e inserir a seguinte linha:


[code language="php"]Configure::write('Config.language', 'br');[/code]

Pronto! Quando você criar um input para a seleção de data usando o HTML Helper, o nome do mês já vai aparecer em português direitinho. ;)

Esse também foi um bom exemplo de uso do sistema de localização do Cake.

Abraços

