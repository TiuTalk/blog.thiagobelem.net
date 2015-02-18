---
layout: post
title: Criando funções no PHP

date: '2009-03-11 20:15:30 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
As funções são métodos de economizar tempo e trabalho para ações que irão se repetir.

Vamos usar como exemplo a função <strong>substr()</strong> nativa do PHP, ela serve para você cortar uma string pegando apenas numa parte específica dela. Você poderia fazer toda a rotina que a substr() faz sempre que precisasse cortar uma string, não seria problema... Seriam apenas umas 5 ou mais linhas pra casa 'uso' da funcionalidade. Surge então a possibilidade de criar suas proprias funções, economizando tempo e dedo.

Vamos ao exemplo de uma função simples:


[code language="php"]
function calcula_dobro($numero) {
    // Faz o calculo do dobro do $numero
    $resultado = $numero * 2;
    return $resultado;
}

echo "O dobro de 3 é: " . calcula_dobro(3);
// O dobro de 3 é: 6
[/code]

Essa função recebe número por argumento ($numero) e retorna o dobro desse número, é bem simples.

Você pode criar funções para as mais variadas tarefas, como por exemplo, exibir um texto entre  e
, ficaria assim:


[code language="php"]
function paragrafos($texto) {
    $resultado = '
' . $texto . '

';
    return $resultado;
}

echo paragrafos('Este texto está entre parágrafos!');
//
Este texto está entre parágrafos!

[/code]

Não há limite de argumentos que uma função pode receber, por exemplo, vamos fazer uma função que calcule um número elevado a outro:


[code language="php"]
function potenciacao($numero, $potencia) {
    return $numero ^ $potencia;
}

echo "2 elevado a 5ª potencia é: " . potenciacao(2, 5);
// 2 elevado a 5ª potencia é: 32
[/code]

Repare que dessa vez usamos dois argumentos. Claro que, se você usar uma string como argumento dessa função você provavelmente vai causar um erro no PHP.

Você também pode definir valores padrões para os argumentos da sua função, vamos usar o exemplo da função anterior só que, se não definirmos o segundo argumento, o número vai ser elevado a terceira potencia:


[code language="php"]
function potenciacao($numero, $potencia = 3) {
    return $numero ^ $potencia;
}

echo "Usando a função ptenciacao() sem segundo argumento: " . potenciacao(2);
// Usando a função ptenciacao() sem segundo argumento: 8
[/code]

<blockquote>Um nome de função válido começa com uma letra ou um sublinhado, seguido, seguido por qualquer número de letras, números ou sublinhado. Com uma expressão regular, seria expressado com: <strong>[a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*</strong>.
</blockquote>
E então? Agora vocês já podem criar as próprias funções e adiantar a sua vida e a de quem for trabalhar com você! Não se esqueça de colocar comentários dentro de fora da função explicando o que elas fazem. Essa é uma parte muito importante: organização.

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>[Funções definidas pelo usuário](http://www.php.net/manual/pt_BR/functions.user-defined.php)</strong> » Sobre criação e exemplos de '<em>funções pessoais</em>'</li>
<li><strong>Função [return()](http://www.php.net/manual/pt_BR/function.return.php)</strong> » Usada pra retornar valores para fora da função</li>
</ul>
