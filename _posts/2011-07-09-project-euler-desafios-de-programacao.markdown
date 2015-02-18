---
layout: post
status: publish
published: true
title: Project Euler - Desafios de programação
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 1700
wordpress_url: http://blog.thiagobelem.net/?p=1700
date: '2011-07-09 16:05:20 -0300'
date_gmt: '2011-07-09 19:05:20 -0300'
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
<p>Fala meus queridos leitores! Tudo bem?</p>
<p>Essa semana eu queria falar um pouquinho do <a title="Project Euler" href="http://projecteuler.net/" target="_blank">Project Euler</a>, um projeto beeeem interessante.</p>
<h3>Project... Quem?</h3>
<blockquote><p><strong>Euler</strong> fez importantes descobertas em campos variados nos cálculos e grafos. Ele também fez muitas contribuições para a matemática moderna no campo da terminologia e notação, em especial para as análises matemáticas, como a noção de uma função matemática.</p>
<p>Além disso ficou famoso por seus trabalhos em mecânica, óptica, e astronomia. Euler é considerado um dos mais proeminentes matemáticos do século XVIII.</p>
<p>Fonte: <a href="http://pt.wikipedia.org/wiki/Leonhard_Euler">http://pt.wikipedia.org/wiki/Leonhard_Euler</a></p></blockquote>
<h3>Desafios de programação</h3>
<p>O Project Euler é um site com pequenos desafios de programação que envolvem conhecimentos matemáticos... Ao todo (e atualmente) são <strong>344 problemas</strong>, passando pelos mais variados níveis de dificuldade, conhecimentos de lógica de programação e "macetes" matemáticos.</p>
<p>O processo é bem simples:</p>
<ol>
<li>Você se cadastra no site</li>
<li>Escolhe um dos problemas</li>
<li>Cria um código pra calcular a resposta do problema</li>
<li>"Inputa" a resposta e o site te diz se você acertou ou não</li>
</ol>
<p>Existem <a href="http://projecteuler.net/index.php?section=problems&amp;id=1" target="_blank">problemas resolvidos por mais 150.000 pessoas</a>, e existem <a href="http://projecteuler.net/index.php?section=problems&amp;id=344" target="_blank">problemas que apenas 25 pessoas conseguiram resolver</a>!</p>
<h3>Resolvendo o primeiro problema com PHP e Python</h3>
<p>Resolvi trazer o primeiro problema aqui pro blog e mostrar duas soluções (idênticas) que criei usando <a href="http://blog.thiagobelem.net/desenvolvimento/php/" target="_blank">PHP</a> e <a href="http://blog.thiagobelem.net/desenvolvimento/python/" target="_blank">Pyhon</a>.</p>
<p>Segue a descrição e a tradução do problema:</p>
<blockquote><p><em>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</em></p>
<p><em>Find the sum of all the multiples of 3 or 5 below 1000.</em></p></blockquote>
<blockquote><p>Se listar todos os números naturais inferiores a 10 que são múltiplos de 3 ou 5, temos3, 5, 6 e 9. A soma desses múltiplos é de 23.</p>
<p>Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.</p></blockquote>
<p>Este é um problema bem simples, muito parecido com o <a href="http://en.wikipedia.org/wiki/Bizz_buzz" target="_blank">FizzBuzz</a>, um problema jogado em <a href="http://codingdojo.org/" target="_blank">Coding Dojos</a> (<a href="http://pet.inf.ufsc.br/dojo/o-que-eh-dojo/" target="_blank">O que é Coding Dojo?</a>) para iniciantes.</p>
<h3>Solução em PHP</h3>
<p>Antes de qualquer coisa, eu não sou um bom matemático... Na maior parte do tempo eu não vejo "coisas" quando olho para um monte de números... Provavelmente existem soluções mais elegantes que essa.</p>
<p>Primeiro vamos à minha solução em PHP:</p>
<p>[code language="php"]function solucao() {<br />
	$soma = 0;</p>
<p>	for ($i = 1; $i &lt; 1000; $i++) {<br />
		if (!($i % 3) || !($i % 5))<br />
			$soma += $i;<br />
	}</p>
<p>	echo $soma;<br />
}[/code]</p>
<h3>Solução em Python</h3>
<p>E agora, a mesma abordagem em Python:</p>
<p>[code language="python"]def solucao():<br />
	soma = 0;</p>
<p>	for i in range(1, 1000):<br />
		if not (i % 3) or not (i % 5):<br />
			soma += i</p>
<p>	print soma[/code]</p>
<h3>Conclusão</h3>
<p>Meu intuito aqui não é comparar as duas linguagens! Pra mim, ambas são excelentes.</p>
<p>Queria apenas trazer para vocês esse projeto, que pode ajudar muito nos estudos/aperfeiçoamento dos seus conhecimentos de programação (e talvez matemática).</p>
<p>Os problemas parecem simples quando pensamos neles, mas nem sempre a solução via código é tão simples assim... É aí que percebemos o quão f*da o nosso cérebro é.</p>
<p>Espero que tenham gostado!</p>
<p>Deixe sua impressão sobre o projeto, problemas resolvidos, sugestões de refatoração e etc. ;)</p>
