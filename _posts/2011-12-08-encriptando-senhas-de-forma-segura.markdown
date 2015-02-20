---
layout: post
title: Encriptando senhas de forma segura

date: '2011-12-08 15:42:16 -0200'
categories:
- PHP
- Artigos
- Segurança
tags:
- PHP
- Segurança
- sha1
- md5
- blowfish
- encriptação
- algoritmo
---
Fala pessoal, tudo bom?

Volta e meia gosto de vir aqui falar um pouquinho sobre "Segurança" e uma das coisas que acho mais interessante - nessa área - e a encriptação de senhas.

Hoje li [um artigo muito bom](http://net.tutsplus.com/tutorials/php/understanding-hash-functions-and-keeping-passwords-safe/) (bem antigo por sinal) no NetTuts+ e achei legal trazer algumas informações pra cá, de forma bem resumida e direta, porém recomendo muito a leitura do artigo original.

<h3>Hashing</h3>
<blockquote><em>Hashing</em> consiste em proteger dados (strings, números), convertendo-os em um novo dado, geralmente menor e em formato de string ou inteiro.
</blockquote>
Hashes geralmente são mão-única, o que significa que não há uma forma de reverter a encriptação, ou encontrar o dado original baseado no hash (resultado da encriptação).

<h3>O problema</h3>
Estamos acostumados a usar hashes como <strong>MD5</strong> e <strong>SHA1</strong> da seguinte forma:

<div data-gist-id="1447464" data-gist-show-loading="false"></div>

No caso do MD5, resultado final é sempre uma string de 32 caracteres alfa-numéricos (128 bits).

Você pode usar o MD5 e pensar que está seguro, mas existe uma coisa chamada [Rainbow Tables](http://pt.wikipedia.org/wiki/Rainbow_table), onde um atacante gera uma tabela com o resultado da encriptação de todas as palavras de um dicionário, combinando palavras e até adicionando símbolos e dígitos à essas palavras.... Com essa Rainbow Table fica muito fácil (partindo do resultado final da encriptação) descobrir a senha original (olá mundo).

<h3>A solução simples: salts</h3>
A solução mais simples é utilizar um "salt" que é uma string complexa que será concatenada a toda e qualquer senha antes de encriptá-la, por exemplo:

<div data-gist-id="1447656" data-gist-show-loading="false"></div>

Dessa forma, todas as senhas estarão mais protegidas... porém ainda temos um problema:

<h3>O problema: salt fixo</h3>
<ol>
<li>Todas as senhas usam o mesmo salt</li>
<li>O salt (que é fixo) está presente em algum arquivo/texto dentro do seu sistema</li>
<li>O invasor que conseguiu pegar o seu banco de dados (de senhas) também vai ter acesso aos arquivos e, consequentemente, ao salt</li>
<li>Com posse do salt o atacante gera uma Rainbow Table nova, usando aquele salt nas combinações</li>
</ol>
Precisamos então - de alguma forma - <strong>proteger o salt</strong>, ou gerar um salt novo pra cada senha, o que seria o ideal.

<h3>A solução complicada: salts dinâmicos</h3>
Podemos gerar uma string aleatória no PHP de várias formas, mas a idéia principal aqui é: gerar uma string aleatória, utilizá-la como salt na hora de encriptar a senha do usuário e salvar AMBAS no banco de dados (a senha e a string utilizada como salt).

<div data-gist-id="1447693" data-gist-show-loading="false"></div>

Dessa forma, cada senha terá seu próprio salt e o atacante teria que gerar uma rainbow table pra cada salt, o que fica impraticável.

Mas infelizmente ainda temos um problema...

<h3>O problema: tempo</h3>
A maioria dos métodos de encriptação que conhecemos (como MD5 e SHA1) são criados para serem extremamente rápidos, pois são utilizados na verificação de integridade de arquivos... o que acaba sendo um tiro no pé quando estamos falando de segurança: quanto mais rápido o algoritmo mais fácil um ataque de força-bruta (com ou sem Rainbow Tables) pode conseguir encontrar a senha original.

Precisamos então trocar de algoritmo ou atrasar o nosso script...

<h3>A solução: atrasando o algoritmo</h3>

<div data-gist-id="1447751" data-gist-show-loading="false"></div>

Agora qualquer ataque de força-bruta irá demorar 1000x mais para conseguir chegar até sua senha original, o que é excelente!

<h3>Finalizando...</h3>
O [artigo original](http://net.tutsplus.com/tutorials/php/understanding-hash-functions-and-keeping-passwords-safe/) não termina por aqui, ele sugere a utilização de um algoritmo chamado BLOWFISH que recebe um parâmetro onde você determina o "custo", que está ligado à demora/ciclos de encriptação... quanto maior, mais demorado.

Espero que tenham entendido a idéia geral e tenham gostado! :)

