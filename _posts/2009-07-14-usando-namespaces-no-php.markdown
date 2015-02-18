---
layout: post
title: Usando Namespaces no PHP
excerpt: Com o uso dos namespaces o seu código irá para um novo nível de organização...
  Aprenda o que é, pra que serve e como usar os namespaces no PHP 5.3.0.

date: '2009-07-14 09:43:13 -0300'
categories:
- PHP
- Artigos
tags:
- PHP
- PHP 5.3
- Namespace
---
A possibilidade de uso dos <em><strong>namespaces</strong></em> é, talvez, a modificação mais significativa do PHP 5.3.0.

<h3>Por que precisamos dos <em>namespaces</em>?</h3>
A medida que o código-fonte do PHP cresce e o número de classes, funções e bibliotecas cresce junto fica cada vez mais fácil de acontecer uma "colisão de nomes" que é quando duas classes/funções/variáveis/constantes têm o mesmo nome. Isso acarretará inúmeros erros ao seu sistema.

Até agora a solução foi definida por duas saídas: a primeira é o uso de prefixos, veja o exemplo o <strong>Word Press</strong> que coloca um "WP_" antes do nome da cada função ou classe.. A outra saída é o uso de nomes gigantescamente descitrivos como por exemplo "funcao_que_retorna_o_total_de_usuarios()"... O que eu nem vou comentar.

Agora, com os namespaces, temos uma terceira (e muito melhor) opção para solucionar esse problema!

<h3>O que faz esse tal de <em>namespace</em>?</h3>
Imagine que você fez uma função nova para usar no seu site só que ela usa nomes e constantes com nomes genéricos (por exemplo: "user" e "database")... Ela normalmente seria assim:
[code language="php"]
<?php

function connect() {
	// Faz a sua conexão com o banco de dados
}

?>
[/code]

Só que se você usar alguma outra biblioteca/classe/função pronta, pode haver uma colisão de nomes e você vai precisar mudar o nome da sua função pra algo maior... Só que você não quer isso.

Aí, usando a maravilha do namespace, você faz assim:
[code language="php" highlight="3"]
<?php

namespace MeuProjeto;

function connect() {
	// Faz a sua conexão com o banco de dados
}

?>
[/code]

E quando você precisar chamar a função do MeuProjeto é só fazer assim:
[code language="php"]
<?php
	// Inclui o arquivo com a função
	include("conexao-MySQL.php");

	// Chama a função dentro do namespace
	MeuProjeto/connect();
?>
[/code]

<h3>Sintaxe alternativa</h3>

[code language="php"]
<?php

namespace MeuProjeto {

	function connect() {
		// Faz a sua conexão com o banco de dados
	}

}

?>
[/code]

--

Eu usei apenas exemplo com funções, mas os namespaces funcionam muito bem com classes e constantes também! Vale a pena experimentar.

Um grande abraço. ;)

