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
<p>Fala pessoal!</p>
<p>Este é o meu primeiro artigo (de muitos) sobre o <a href="http://cakephp.org/" target="_blank"><strong><span style="color: #ff6600;">CakePHP</span></strong></a> aqui no blog... Não vou entrar em detalhes (ainda) sobre o que é e como usar o Cake, mas vou falar de um probleminha que tive por muito tempo e só encontrei a "<span style="color: #000000;">perfeita solução</span>" pra ele esses dias: traduzir o nome dos meses (para inputs de datas) sem alterar o core.</p>
<p>Essa tradução consiste em usar o sistema de localização que já vem no Cake... Bom, vamos lá:</p>
<p>Primeiro de tudo, vá no controller onde você quer a tradução ou direto no AppController e antes da definição da classe, insira essa linha:</p>
<p>[code language="php"]App::import('Core', 'l10n');[/code]</p>
<p>Isso vai fazer o Cake chamar a classe/função l10n, que é o sistema de localização.</p>
<p>Depois, crie a seguinte estrutura de pastas:</p>
<p style="padding-left: 30px;"><strong>../app/locale/<span style="color: #99cc00;">br<span style="color: #000000;">/</span>LC_MESSAGE</span>/</strong></p>
<p>Agora, dentro da pasta LC_MESSAGE criada, crie um arquivo chamado <span style="color: #ff6600;"><strong>default.po</strong></span> com o seguinte conteúdo:</p>
<p>[code]msgid  "January"
msgstr "Janeiro"</p>
<p>msgid  "February"
msgstr "Fevereiro"</p>
<p>msgid  "March"
msgstr "Março"</p>
<p>msgid  "April"
msgstr "Abril"</p>
<p>msgid  "May"
msgstr "Maio"</p>
<p>msgid  "June"
msgstr "Junho"</p>
<p>msgid  "July"
msgstr "Julho"</p>
<p>msgid  "August"
msgstr "Agosto"</p>
<p>msgid  "September"
msgstr "Setembro"</p>
<p>msgid  "October"
msgstr "Outubro"</p>
<p>msgid  "November"
msgstr "Novembro"</p>
<p>msgid  "December"
msgstr "Dezembro"</p>
<p>[/code]</p>
<p>Agora é só ir no arquivo de configurações (../app/config/core.php) e inserir a seguinte linha:</p>
<p>[code language="php"]Configure::write('Config.language', 'br');[/code]</p>
<p>Pronto! Quando você criar um input para a seleção de data usando o HTML Helper, o nome do mês já vai aparecer em português direitinho. ;)</p>
<p>Esse também foi um bom exemplo de uso do sistema de localização do Cake.</p>
<p>Abraços</p>
