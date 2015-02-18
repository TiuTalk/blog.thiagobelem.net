---
layout: post
title: Project Euler - Desafios de programação

date: '2011-07-09 16:05:20 -0300'
categories:
- PHP
- Artigos
- Python
tags:
- PHP
- Desenvolvimento
- Programação
- python
- desafio
- project euler
- matemática
---
Fala meus queridos leitores! Tudo bem?

Essa semana eu queria falar um pouquinho do [Project Euler](http://projecteuler.net/), um projeto beeeem interessante.

<h3>Project... Quem?</h3>
<blockquote><strong>Euler</strong> fez importantes descobertas em campos variados nos cálculos e grafos. Ele também fez muitas contribuições para a matemática moderna no campo da terminologia e notação, em especial para as análises matemáticas, como a noção de uma função matemática.

Além disso ficou famoso por seus trabalhos em mecânica, óptica, e astronomia. Euler é considerado um dos mais proeminentes matemáticos do século XVIII.

Fonte: [http://pt.wikipedia.org/wiki/Leonhard_Euler](http://pt.wikipedia.org/wiki/Leonhard_Euler)
</blockquote>
<h3>Desafios de programação</h3>
O Project Euler é um site com pequenos desafios de programação que envolvem conhecimentos matemáticos... Ao todo (e atualmente) são <strong>344 problemas</strong>, passando pelos mais variados níveis de dificuldade, conhecimentos de lógica de programação e "macetes" matemáticos.

O processo é bem simples:

<ol>
<li>Você se cadastra no site</li>
<li>Escolhe um dos problemas</li>
<li>Cria um código pra calcular a resposta do problema</li>
<li>"Inputa" a resposta e o site te diz se você acertou ou não</li>
</ol>
Existem [problemas que apenas 25 pessoas conseguiram resolver](http://projecteuler.net/index.php?section=problems&id=344)!

<h3>Resolvendo o primeiro problema com PHP e Python</h3>
Resolvi trazer o primeiro problema aqui pro blog e mostrar duas soluções (idênticas) que criei usando [Pyhon](/python).

Segue a descrição e a tradução do problema:

<blockquote><em>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</em>

<em>Find the sum of all the multiples of 3 or 5 below 1000.</em>
</blockquote>
<blockquote>Se listar todos os números naturais inferiores a 10 que são múltiplos de 3 ou 5, temos3, 5, 6 e 9. A soma desses múltiplos é de 23.

Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.
</blockquote>
Este é um problema bem simples, muito parecido com o [O que é Coding Dojo?](http://pet.inf.ufsc.br/dojo/o-que-eh-dojo/)) para iniciantes.

<h3>Solução em PHP</h3>
Antes de qualquer coisa, eu não sou um bom matemático... Na maior parte do tempo eu não vejo "coisas" quando olho para um monte de números... Provavelmente existem soluções mais elegantes que essa.

Primeiro vamos à minha solução em PHP:


{% highlight php linenos %}
function solucao() {
  $soma = 0;

  for ($i = 1; $i < 1000; $i++) {
    if (!($i % 3) || !($i % 5))
      $soma += $i;
  }

  echo $soma;
}
{% endhighlight %}

<h3>Solução em Python</h3>
E agora, a mesma abordagem em Python:


{% highlight python linenos %}
def solucao():
  soma = 0;

  for i in range(1, 1000):
    if not (i % 3) or not (i % 5):
      soma += i

  print soma
{% endhighlight %}

<h3>Conclusão</h3>
Meu intuito aqui não é comparar as duas linguagens! Pra mim, ambas são excelentes.

Queria apenas trazer para vocês esse projeto, que pode ajudar muito nos estudos/aperfeiçoamento dos seus conhecimentos de programação (e talvez matemática).

Os problemas parecem simples quando pensamos neles, mas nem sempre a solução via código é tão simples assim... É aí que percebemos o quão f*da o nosso cérebro é.

Espero que tenham gostado!

Deixe sua impressão sobre o projeto, problemas resolvidos, sugestões de refatoração e etc. ;)

