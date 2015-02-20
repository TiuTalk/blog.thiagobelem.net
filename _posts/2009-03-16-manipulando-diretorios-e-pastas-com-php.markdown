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

#### Criando pastas
Para criar uma pasta exiset a função <strong>mkdir()</strong> que é bem fácil de usar... O caminho da pasta a ser criada é - normalmente - relativo ao script atual, e durante a criação você pode definir os níveis de permissões da pasta (CHMOD) e se essa criação vai ser <em>recursive</em> (veja mais a diante).

Para criarmos uma pasta no mesmo diretório do script atual, fazemos das seguintes maneiras:


<div data-gist-id="c4dff05655fa484ce44a" data-gist-show-loading="false"></div>

Por padrão o CHMOD das pastas criadas pelo PHP é 777... Se quiser criar uma pasta com permissões mais restritas, ou seja, um CHMOD menor, faça dessa forma:


<div data-gist-id="382a3c8e9eb9e7b569ba" data-gist-show-loading="false"></div>

Por motivos maiores o nº do CHMOD (no nosso exemplo: 744) deve ser sempre precedido de um zero e não pode estar entre aspas.

Agora suponhamos que você precise criar duas pastas, mas que seja uma dentro da outra... Você pode fazer de duas formas:


<div data-gist-id="768668fff75e6bb7821a" data-gist-show-loading="false"></div>

Repare que, na segunda forma de se criar uma pasta, definimos o terceiro parâmetro (criação recursiva) como true, isso faz com que o PHP vá criando as pastas, uma a uma, de forma automática caso elas não existam.

#### Deletando pastas
Se você quiser deletar pastas é só usar função <strong>rmdir()</strong> para isso. Porém você precisa tomar um cuidado antes: a pasta precisa estar vazia (não conter outros arquivos e/ou pastas dentro dela) e você precisa ter a permissão de usuário (CHMOD) necessária para essa operação.

Veja um exemplo de como deletar uma das pastas criadas nos exemplos anteriores:


<div data-gist-id="942c1be47a40e0cf9411" data-gist-show-loading="false"></div>

Em um futuro próximo ensinarei a manipular arquivos também e você poderá fazer a sua super-função para deletar a pasta e tudo que estiver dentro. Aguarde.

#### Renomeando pastas
Pra renomear pastas também não tem mistério, é só usar a função <strong>rename()</strong> que também pode ser usada para renomear arquivos:


<div data-gist-id="48977b173b94034bf22c" data-gist-show-loading="false"></div>

#### Movendo pastas
Não.. Não existe função para "mover" uma pasta por que, na verdade, o que você faz é renomeá-la... Vejamos um exemplo:

Temos a pasta site e, dentro dela, temos duas pastas: imagens e blog. Queremos mover a pasta blog para fora da pasta site... O script rodado está fora da pasta site também, é só fazermos assim:


<div data-gist-id="1f4db1bd3c99a94c8a5c" data-gist-show-loading="false"></div>

------

E aí.. gostaram? Comentem!

#### Documentação Oficial:
<ul>
<li><strong>Função [mkdir()](http://br.php.net/mkdir)</strong> » Cria uma pasta</li>
<li><strong>Função [rmdir()](http://br.php.net/rmdir)</strong> » Deleta uma pasta</li>
<li><strong>Função [rename()](http://br.php.net/rename)</strong> » Renomeia uma pasta ou arquivo</li>
</ul>
