---
layout: post
title: Busca no MySQL usando palavra-chave

date: '2009-03-06 20:18:45 -0300'
categories:
- MySQL
- Tutoriais
tags: []
---
Fala pessoal,

Outra coisa muito comum é você precisar fazer uma busca no MySQL usando uma palavra-chave e/ou caractere coringa... Por exemplo... Buscar, nas notícias cadastradas no seu banco de dados, uma notícia que tenha 'Brasil' no texto.

Pra fazer isso é muito simples, é só usar o caractere coringa do MySQL que é o í de porcentagem (%). Só que o comando de comparação também muda:
[code="sql"]SELECT FROM `noticias` WHERE `texto` LIKE '%Brasil%'[/code]
Com isso você poderá localizar qualquer registro, da tabela de <strong>notícias</strong>, que tenha a palavra <span style="color: #ff6600;"><strong>Brasil</strong></span> no <strong>meio</strong>, <strong>começo </strong>ou <strong>fim </strong>do valor armazenado na coluna texto.

Serão encontrados registros que tenham, por exemplo: <em>"política do <strong>Brasil</strong> é criticada"</em>, <em>"vamos ao <strong>Brasil</strong>"</em>, <em>"<strong>Brasil</strong> é um pais de belezas naturais"</em>.

Repare que, ao contrário de uma comparação normal, não usamos o igual (=) e sim o <strong>LIKE</strong>.

Você também pode usar o caractere coringa para encontrar registros que tenham um 'começo' em comum, por exemplo: Você quer encontrar todos os usuários que tenham o nome começando por B, então você faria assim:
[code="sql"]SELECT FROM `usuarios` WHERE `nome` LIKE 'B%'[/code]
Repare que só usamos o coringa (%) a direita do <strong>B</strong>, o que significa que o registro tem que começar com B e o que vier depois pode ser qualquer coisa. Serão encontrados <strong>b</strong>runo, <strong>b</strong>reno, <strong>b</strong>ernard, <strong>b</strong>ianca e etc.

Com esse recurso você pode fazer o sistema de buscas* do seu site, ou até um recurso de busca de usuários em função do 1º nome, por exemplo.

Espero que tenham gostado!

