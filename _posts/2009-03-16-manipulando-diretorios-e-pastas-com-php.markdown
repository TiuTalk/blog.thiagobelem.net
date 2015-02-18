---
layout: post
title: Manipulando diretórios e pastas com PHP

date: '2009-03-16 22:58:49 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Hoje vou ensinar você, nobre programador, a manipular pastas usando apenas o PHP. Não é um recurso muuuito utilizado, mas mesmo assim é útil e merece ser aprendido.  :-D

No PHP já existe uma função para cada tarefa que irei ensinar aqui hoje: <strong>criar</strong>, <strong>deletar</strong>, <strong>mover</strong> e <strong>renomear </strong>pastas.

<h4>Criando pastas</h4>
Para criar uma pasta exiset a função <strong>mkdir()</strong> que é bem fácil de usar... O caminho da pasta a ser criada é - normalmente - relativo ao script atual, e durante a criação você pode definir os níveis de permissões da pasta (CHMOD) e se essa criação vai ser <em>recursive</em> (veja mais a diante).

Para criarmos uma pasta no mesmo diretório do script atual, fazemos das seguintes maneiras:


[code language="php"]
<?php
mkdir('/novapasta/'); // Cria uma nova pasta dentro do diretório atual
?>
[/code]

Por padrão o CHMOD das pastas criadas pelo PHP é 777... Se quiser criar uma pasta com permissões mais restritas, ou seja, um CHMOD menor, faça dessa forma:


[code language="php"]
<?php
mkdir('/novapasta/', 0744); // Cria uma nova pasta dentro do diretório atual com permissão CHMOD de 744
?>
[/code]

Por motivos maiores o nº do CHMOD (no nosso exemplo: 744) deve ser sempre precedido de um zero e não pode estar entre aspas.

Agora suponhamos que você precise criar duas pastas, mas que seja uma dentro da outra... Você pode fazer de duas formas:


[code language="php"]
<?php
// Dividindo em duas instruções:
mkdir('/novapasta/'); // Cria uma nova pasta dentro do diretório atual
mkdir('/novapasta/outrapasta/'); // Cria uma nova pasta dentro da pasta /novapasta/ que está dentro do diretório atual

// Ou, você pode fazer assim:
mkdir('/novapasta/outrapasta/', 0777, true); // Cria uma pasta dentro da outra (que também e nova) - Criação Recursiva
?>
[/code]

Repare que, na segunda forma de se criar uma pasta, definimos o terceiro parâmetro (criação recursiva) como true, isso faz com que o PHP vá criando as pastas, uma a uma, de forma automática caso elas não existam.

<h4>Deletando pastas</h4>
Se você quiser deletar pastas é só usar função <strong>rmdir()</strong> para isso. Porém você precisa tomar um cuidado antes: a pasta precisa estar vazia (não conter outros arquivos e/ou pastas dentro dela) e você precisa ter a permissão de usuário (CHMOD) necessária para essa operação.

Veja um exemplo de como deletar uma das pastas criadas nos exemplos anteriores:


[code language="php"]
<?php
rmdir('/novapasta/outrapasta/'); // Deleta a pasta /outrapasta/ de dentro da pasta /novapasta/
?>
[/code]

Em um futuro próximo ensinarei a manipular arquivos também e você poderá fazer a sua super-função para deletar a pasta e tudo que estiver dentro. Aguarde.

<h4>Renomeando pastas</h4>
Pra renomear pastas também não tem mistério, é só usar a função <strong>rename()</strong> que também pode ser usada para renomear arquivos:


[code language="php"]
<?php
rename('/novapasta/', '/minhapasta/'); // Renomeia /novapasta/ para /minhapasta/
?>
[/code]

<h4>Movendo pastas</h4>
Não.. Não existe função para "mover" uma pasta por que, na verdade, o que você faz é renomeá-la... Vejamos um exemplo:

Temos a pasta site e, dentro dela, temos duas pastas: imagens e blog. Queremos mover a pasta blog para fora da pasta site... O script rodado está fora da pasta site também, é só fazermos assim:


[code language="php"]
<?php
rename('/site/blog/', '/blog/'); // Com isso, "tiramos" a pasta blog de dentro da pasta /site/
?>
[/code]

------

E aí.. gostaram? Comentem!

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função [mkdir()](http://br.php.net/mkdir)</strong> » Cria uma pasta</li>
<li><strong>Função [rmdir()](http://br.php.net/rmdir)</strong> » Deleta uma pasta</li>
<li><strong>Função [rename()](http://br.php.net/rename)</strong> » Renomeia uma pasta ou arquivo</li>
</ul>
