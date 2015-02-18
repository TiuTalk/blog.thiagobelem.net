---
layout: post
title: Criando funções no PHP

date: '2009-03-11 20:15:30 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>As funções são métodos de economizar tempo e trabalho para ações que irão se repetir.</p>
<p>Vamos usar como exemplo a função <strong>substr()</strong> nativa do PHP, ela serve para você cortar uma string pegando apenas numa parte específica dela. Você poderia fazer toda a rotina que a substr() faz sempre que precisasse cortar uma string, não seria problema... Seriam apenas umas 5 ou mais linhas pra casa 'uso' da funcionalidade. Surge então a possibilidade de criar suas proprias funções, economizando tempo e dedo.</p>
<p>Vamos ao exemplo de uma função simples:</p>
<p>[code='php']<br />
function calcula_dobro($numero) {<br />
    // Faz o calculo do dobro do $numero<br />
    $resultado = $numero * 2;<br />
    return $resultado;<br />
}</p>
<p>echo "O dobro de 3 é: " . calcula_dobro(3);<br />
// O dobro de 3 é: 6<br />
[/code]</p>
<p>Essa função recebe número por argumento ($numero) e retorna o dobro desse número, é bem simples.</p>
<p>Você pode criar funções para as mais variadas tarefas, como por exemplo, exibir um texto entre <p> e </p>, ficaria assim:</p>
<p>[code='php']<br />
function paragrafos($texto) {<br />
    $resultado = '
<p>' . $texto . '</p>
<p>';<br />
    return $resultado;<br />
}</p>
<p>echo paragrafos('Este texto está entre parágrafos!');<br />
//
<p>Este texto está entre parágrafos!</p>
<p>[/code]</p>
<p>Não há limite de argumentos que uma função pode receber, por exemplo, vamos fazer uma função que calcule um número elevado a outro:</p>
<p>[code='php']<br />
function potenciacao($numero, $potencia) {<br />
    return $numero ^ $potencia;<br />
}</p>
<p>echo "2 elevado a 5ª potencia é: " . potenciacao(2, 5);<br />
// 2 elevado a 5ª potencia é: 32<br />
[/code]</p>
<p>Repare que dessa vez usamos dois argumentos. Claro que, se você usar uma string como argumento dessa função você provavelmente vai causar um erro no PHP.</p>
<p>Você também pode definir valores padrões para os argumentos da sua função, vamos usar o exemplo da função anterior só que, se não definirmos o segundo argumento, o número vai ser elevado a terceira potencia:</p>
<p>[code='php']<br />
function potenciacao($numero, $potencia = 3) {<br />
    return $numero ^ $potencia;<br />
}</p>
<p>echo "Usando a função ptenciacao() sem segundo argumento: " . potenciacao(2);<br />
// Usando a função ptenciacao() sem segundo argumento: 8<br />
[/code]</p>
<blockquote><p>Um nome de função válido começa com uma letra ou um sublinhado, seguido, seguido por qualquer número de letras, números ou sublinhado. Com uma expressão regular, seria expressado com: <strong>[a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*</strong>.</p></blockquote>
<p>E então? Agora vocês já podem criar as próprias funções e adiantar a sua vida e a de quem for trabalhar com você! Não se esqueça de colocar comentários dentro de fora da função explicando o que elas fazem. Essa é uma parte muito importante: organização.</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong><a href="http://www.php.net/manual/pt_BR/functions.user-defined.php" target="_blank">Funções definidas pelo usuário</a></strong> » Sobre criação e exemplos de '<em>funções pessoais</em>'</li>
<li><strong>Função <a href="http://www.php.net/manual/pt_BR/function.return.php" target="_blank">return()</a></strong> » Usada pra retornar valores para fora da função</li>
</ul>
