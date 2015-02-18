---
layout: post
title: Condições no PHP – Introdução à Lógica

date: '2009-03-26 20:22:54 -0300'
categories:
- PHP
- Artigos
tags: []
---
Nesse post vou falar um pouco sobre proposições lógicas, operadores lógicos e estruturas condicionais... Tudo isso vai ajudar e entender como funcionam as condições do PHP.

<h4>Proposições Lógicas</h4>
Uma proposição lógica é uma sentença que tem como resultado apenas dois valores: verdadeiro ou falso. Pra lógica não existem repostas como "mais ou menos", "um pouco", "depende", "quase"... Em outras palavras: É ou não é. Verdadeiro ou falso. 0 ou 1. Sim ou não. Se existirem repostas fora de "verdadeiro" e "falso" não é uma proposição lógica.

Por exemplo a frase "O Sol é quente" só pode ser verdadeira ou falsa. O mesmo ocorre para "Está chovendo". Ambas são proposições lógicas <strong>simples</strong>.

Existem proposições lógicas mais complexas, por exemplo, "O Sol é quente e está chovendo", essa afirmação só vai ser verdadeira se ambos os fatos forem verdadeiros. Ou o exemplo "O Sol é quente ou está chovendo" que só vai ser verdadeira quando - no mínimo - um dos fatos for verdadeiro.

<h4>Operadores Lógicos</h4>
Existem palavras "especiais" que servem como um operador lógico e unem mais de uma proposição lógica na mesma afirmação, por exemplo, "O Sol é quente <strong><span style="color: #ff6600;">e</span></strong> a está chovendo", nessa proposição lógica o operador lógico é o "<strong><span style="color: #ff6600;">e</span></strong>" que obriga as duas afirmações serem verdadeiras para a <strong>frase toda</strong> ser considera verdadeira também.

Outro operador lógico importante é o "<strong><span style="color: #ff6600;">ou</span></strong>" que implica na necessidade de apenas um dos fatos serem verdadeiros para toda a afirmação ser validada.

Existem dois exemplos práticos para um bom entendimento do "<strong><span style="color: #ff6600;">e</span></strong>" e do "<strong><span style="color: #ff6600;">ou</span></strong>":

<ul>
<li>O pai <strong>rígido </strong>falaria pro filho: "<em>Você só vai jogar futebol se fizer o dever de casa <span style="color: #ff6600;"><strong>e</strong></span> ajudar a sua mãe </em><em><span style="color: #ff6600;"><strong>e</strong></span></em><em> tomar banho</em>"</li>
<li>O pai <strong>legal </strong>falaria pro filho: "<em>Você só vai jogar futebol se fizer o dever de casa </em><em><span style="color: #ff6600;"><strong>ou</strong></span></em><em> ajudar a sua mãe </em><em><span style="color: #ff6600;"><strong>ou</strong></span></em><em> tomar banho</em>"</li>
</ul>
<h4>Condições no PHP</h4>
No PHP existe a possibilidade de você executar um grupo X de comandos baseando-se em uma condição...

Usando um exemplo da vida real, parte do algoritmo da troca de lâmpada: "<em>Se a lâmpada está quente, espere 10 minutos</em>"... A condição é "<strong>lâmpada está quente</strong>" (proposição lógica simples) e implicará (ou não, dependendo do seu resultado) na execução da ação "<strong>espere 10 minutos</strong>".

Para o PHP o resultado de uma proposição lógica é <em><strong>true </strong></em>ou <strong><em>false </em></strong>(verdadeiro ou falso).

Vejamos um exemplo de condição lógica no PHP:


{% highlight php linenos %}
<?php
if (2 > 3) {
echo "2 é maior que 3";
} else {
echo "2 é menor ou igual a 3";
}
?>
{% endhighlight %}

Ou seja: O primeiro echo só será executado se (<strong><em>if</em></strong>) a afirmação (2 > 3) seja verdadeira. Tudo que está entre as chaves { ... } representa o grupo de ações que serão executados dependendo do resultado da afirmação. O <em><strong>else </strong></em>(que significa "se não") precede o grupo de comandos que serão executados caso a afirmação seja falsa.

Podemos fazer uma condição um pouco mais útil, usando variáveis:


{% highlight php linenos %}
<?php
$nota = 3;
if ($nota >= 7) {
echo "Você foi aprovado!";
} else {
echo "Você foi reprovado!";
}
?>
{% endhighlight %}

Com isso, dependendo do valor da variável <strong>$nota</strong> a afirmação é verdadeira ou não.

Os operadores de comparação que podemos usar nessas afirmações são:

<p style="padding-left: 30px;"><span style="color: #ff6600;"><strong>==</strong></span> (igual), <span style="color: #ff6600;"><strong>!=</strong></span> (diferente), <span style="color: #ff6600;"><strong>></strong></span> (maior), <span style="color: #ff6600;"><strong>>=</strong></span> (maior ou igual), <span style="color: #ff6600;"><strong><</strong></span> (menor), <span style="color: #ff6600;"><strong><=</strong></span> (menor ou igual), <span style="color: #ff6600;"><strong>===</strong></span> (idêntico), <strong><span style="color: #ff6600;">!==</span></strong> (não idêntico).

Vejamos alguns outros exemplos:


{% highlight php linenos %}
<?php
$nota = 3;
if ($nota != 10) {
echo "Você não tirou 10";
} else {
echo "Você tirou 10, parabéns!";
}
?>
{% endhighlight %}


{% highlight php linenos %}
<?php
$nome = 'Thiago';
if ($nome == 'Thiago') {
echo "Olá, Thiago";
} else {
echo "Olá, Visitante";
}
?>
{% endhighlight %}


{% highlight php linenos %}
<?php
$nota = 3;
// Verifica se a afirmação ($nota >= 7) é falsa (false)
if (($nota >= 7) == false) {
echo "Você foi reprovado";
} else {
echo "Você foi aprovado";
}
?>
{% endhighlight %}

Nas condições do PHP também podemos usar os operadores lógicos "e" e "ou" da mesma forma que eles foram explicados anteriormente, só que as palavras mudam para "<span style="color: #ff6600;"><strong>AND</strong></span><span style="color: #ff6600;"><strong></strong></span>" e "<strong><span style="color: #ff6600;">OR</span></strong>" respectivamente, vejamos alguns exemplos:


{% highlight php linenos %}
<?php
$nota = 3;
if ( ($nota >= 0) AND ($nota <= 10) ) {
echo "A sua nota é válida e está entre 0 e 10.";
} else {
echo "A sua nota é inválida";
}
?>
{% endhighlight %}

Repare que, ao usar o <strong>AND</strong>, cada afirmação ficou <span style="text-decoration: underline;">entre parêntesis</span> e a afirmação completa também está entre parêntesis: <strong><span style="color: #ff0000;">( </span><span style="color: #0000ff;">(...)</span></strong> <span style="color: #ff6600;"><strong>AND </strong></span><strong><span style="color: #0000ff;">(...)</span></strong> <strong><span style="color: #ff0000;">)</span></strong>. O mesmo vale para o <strong>OR</strong>:


{% highlight php linenos %}
<?php
$nota = 3;
if ( ($nota < 0) OR ($nota > 10) ) {
echo "A sua nota é inválida";
} else {
echo "A sua nota é válida e está entre 0 e 10.";
}
?>
{% endhighlight %}

Por causa do <strong>OR</strong> essa condição só será inválida se nenhuma das afirmações dentro do if forem verdadeiras. Se a $nota for <span style="color: #0000ff;">menor que zero</span> <span style="color: #ff6600;"><strong>ou</strong></span> <span style="color: #0000ff;">maior que 10</span> a mensagem de erro será enviada.

Você também pode unir um if { ... } a um else { ... } de outro if { ... } <span style="color: #999999;">(hein?!)</span>, veja o exemplo:


{% highlight php linenos %}
<?php
$nota = 3;
if ( ($nota < 0) OR ($nota > 10) ) {
// (($nota é menor que 0) OU ($nota é maior que 10))
echo "A sua nota é inválida";
} else if ($nota >= 7) {
// (($nota é maior ou igual a 0) OU (menor ou igual a 10)) E ($nota é maior ou igual a 7)
echo "A sua nota é válida e você foi aprovado.";
} else {
// (($nota é maior ou igual a 0) OU (menor ou igual a 10)) E ($nota é menor que 7)
echo "A sua nota é válida e você foi reprovado.";
}
?>
{% endhighlight %}

Viram como é fácil? Coloquei comentários explicando o valor de <strong>$nota</strong> dentro de cada caso.

Espero que tenham entendido esse artigo que faz parte do grupo "os mais importantes" do blog.  :-D

Até~

