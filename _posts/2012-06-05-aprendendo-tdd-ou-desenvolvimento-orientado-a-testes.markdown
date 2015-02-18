---
layout: post
title: Aprendendo TDD (ou Desenvolvimento Orientado a Testes)

date: '2012-06-05 18:17:53 -0300'
categories:
- Desenvolvimento
- Artigos
- Python
tags:
- featured
- python
- tdd
- fizzbuzz
---
Fala pessoal, tudo bom? Quanto tempo!

Recentemente tenho trabalho muito em vários projetos e estou com duas turmas do [Assando Sites](http://assando-sites.com.br/), o que me deixa praticamente sem tempo pro blog ou qualquer outra coisa.

Na última semana, comecei a ler o livro <strong>TDD - Desenvolvimento Guiado por Testes</strong>, escrito por <strong>Kent Beck</strong> e publicado pela <strong>Bookman</strong>.

<ul>
<li>[http://www.amazon.com/Test-Driven-Development-By-Example/dp/0321146530/](http://www.amazon.com/Test-Driven-Development-By-Example/dp/0321146530/)</li>
<li>[http://duckduckgo.com/?q=9788577807246](http://duckduckgo.com/?q=9788577807246)</li>
</ul>
O livro é sensacional, na primeira parte ele mostra o passo a passo do desenvolvimento (baseado em TDD, claro) de um mecanismo de conversão monetária. Na segunda parte do livro ele me surpreendeu: começa a criar um framework de testes, usando TDD (claro), porém usando o PRÓPRIO framework de testes pra testar a si mesmo.

O autor do livro é considerado um dos criadores do TDD, então o cara <strong>sabe do que tá falando</strong>.

Mesmo recomendando muito o livro, não estou aqui pra falar dele e sim do assunto principal do livro: TDD.

<h3>Não sou um adepto fanático do TDD</h3>
Eu adoraria, mas ainda não consegui aplicar TDD em cada projeto que trabalho. Conheço bem e concordo MUITO com a metologia por trás do TDD, mas ainda consigo usá-lo naturalmente, tenho que me forçar sempre que quero testar algo.

<h2>Mas afinal, que diabos é TDD?</h2>
Me surpreende que a maioria dos desenvolvedores e programadores por ai não saibam o que é TDD... eu mesmo não sabia muito TDD uns 2 anos atrás... e já estou no mercado a mais de 10 anos, imagina quem está começando agora.

Segundo a [Wikipédia](https://pt.wikipedia.org/wiki/Test_Driven_Development), TDD é:

<blockquote><strong>Test Driven Development</strong> (TDD) ou em português <strong>Desenvolvimento <del>dirigido</del> guiado por testes</strong> é uma técnica de [desenvolvimento de software](https://pt.wikipedia.org/wiki/Desenvolvimento_de_software) que baseia em um ciclo curto de repetições:

Primeiramente o desenvolvedor escreve um [refatorado](https://pt.wikipedia.org/wiki/Refatora%C3%A7%C3%A3o) para um código sob padrões aceitáveis.

<strong>Kent Beck</strong>, considerado o criador ou o 'descobridor' da técnica, declarou em 2003 que TDD encoraja designs de código simples e inspira confiança.
</blockquote>
<h3>E qual a vantagem disso?</h3>
Pra mim, TDD é uma forma de você garantir que, através de pequenos passos, você vai chegar à um "todo-completo", que é uma aplicação que funciona baseado apenas nas especificações que foram definidas, e lá na frente quando você for mudar algo, é só rodar os testes novamente para garantir que tudo continue funcionando.

Mas por via das dúvidas, pesquisem mais sobre o assunto, tem um mundo por trás disso tudo.

<h2>"Talk is cheap! Shut up and show me the code!"</h2>
<span style="color: #c0c0c0;">(eu amo essa frase)</span>

Vamos direto ao ponto e vamos ver um pequeno exemplo de como criar uma função baseada em TDD... e vamos começar pelo exemplo mais simples e usado por todos: o famoso <strong>Fizz Buzz</strong>, que segundo a nossa amiga Wikipédia é:

<blockquote><strong>Bizz buzz</strong> (also known as <strong>fizz buzz</strong>, or simply <strong>buzz</strong>) is a group word game frequently encountered as a [drinking game](https://en.wikipedia.org/wiki/Drinking_game). Players take turns to count incrementally, replacing any number divisible by three with the word "bizz", and any number divisible by five with the word "buzz".

Tradução deste que vos fala:

<strong>Bizz buzz</strong> (também conhecido com <strong>fizz buzz</strong>, ou apenas <strong>buzz</strong>) é uma brincadeira em grupo, comummente jogada como desculpa pra encher a cara. Os jogadores jogam em turnos incrementais, onde cada um fala um número substituindo números divisíveis por três pela palavra "<strong>fizz</strong>", e números divisíveis por cinco pela palavra "<strong>buzz</strong>".

Sendo que você precisa falar "<strong>fizz buzz</strong>" quando o número for múltiplo de três e de cinco.
</blockquote>
Básicamente o resultado final do jogo seria algo assim:

<blockquote>1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
</blockquote>
Então vamos criar uma função FizzBuzz que receba um parâmetro N e retorne o número, <strong>fizz</strong>, <strong>buzz</strong> ou <strong>fizz buzz</strong> dependendo do número que ela recebeu. :)

Antes de qualquer coisa, vou fazer algo que aprendi com esse livro e recomendo muito: vamos montar uma lista de especificações que precisaremos testar/implementar.

<ul>
<li>FizzBuzz recebe um número</li>
<li>FizzBuzz(1) retorna 1</li>
<li>FizzBuzz(2) retorna 2</li>
<li>FizzBuzz(3) retorna "fizz"</li>
<li>FizzBuzz(4) retorna 4</li>
<li>FizzBuzz(5) retorna "buzz"</li>
</ul>
Essas não são todas as regras do jogo, mas já é um bom começo... Cada um desses itens vai significar um teste e - possivelmente - uma melhoria no código da função.

Ao longo desse artigo irei copiar essa lista diversas vezes, marcando com <strong>negrito</strong> os itens que iremos atacar, e <del>riscando</del> os itens que forem concluídos.

<h2>Mas peraí... e a linguagem?</h2>
Verdade... temos que decidir uma linguagem, e como eu falo MUITO de PHP aqui no blog vamos fazer esse FizzBuzz em <strong>Python</strong>, que já vem com um <strong>framework de testes</strong> embutido na linguagem, pra quem quiser brincar de <strong>testes unitários</strong> no PHP recomendo muito o [PHPUnit](https://github.com/sebastianbergmann/phpunit/).

<h3>Baby steps, ou "Passos de bebê"</h3>
Uma das maiores características do desenvolvimento orientado à testes é que você sempre tente dar passos menores que suas pernas, não significa que você não possa dar uma corrida se o projeto exigir, mas sempre avance com pequenos passos, nada de escrever 100 linhas de código sem testar (com testes)... e eu vou tentar seguir essa metodologia aqui.

<h3>Mãos à obra!</h3>
No TDD você SEMPRE começa pelo teste, então vamos começar criando nosso arquivo de testes:

<div data-gist-id="2877310" data-gist-show-loading="false"></div>
Fizemos três coisas no nosso arquivo <strong>fizzbuzz_test.py</strong>:

<ol>
<li>Primeiro temos <strong>#!/usr/bin/env pytho</strong>n que permite que executemos o arquivo sem ser através do executável do Python, mas isso é opcional.</li>
<li>Depois importamos a biblioteca nativa de testes unitários do Python</li>
<li>E por fim usamos uma condição que - resumidamente - permite que o arquivo seja executado pelo terminal já rodando os testes</li>
</ol>
Quando a gente rodar esse arquivo com o comando <strong>./fizzbuzz_test.py</strong> ou o comando <strong>python fizzbuzz_test.py </strong>vamos ter o seguinte output:

<div data-gist-id="2877331" data-gist-show-loading="false"></div>
Então sabemos que tudo está funcionando... prontos para o primeiro teste?

<ul>
<li><strong>FizzBuzz recebe um número</strong></li>
<li>FizzBuzz(1) retorna 1</li>
<li>FizzBuzz(2) retorna 2</li>
<li>FizzBuzz(3) retorna "fizz"</li>
<li>FizzBuzz(4) retorna 4</li>
<li>FizzBuzz(5) retorna "buzz"</li>
</ul>
Nosso primeiro teste, da forma mais simples e reduzida possível, ficaria assim:

<div data-gist-id="2877410" data-gist-show-loading="false"></div>
Criamos uma classe <strong>TestFizzBuzz</strong>, que é um <strong>caso de teste</strong> (contém vários testes) para testar a classe/funcionalidade FizzBuzz.

Definimos nosso primeiro teste (test_FizzBuzz), onde fizemos uma asserção (verificação):

<blockquote>O resultado de <strong>FizzBuzz(1) </strong>é IGUAL a <strong>1</strong>?
</blockquote>
A asserção de igualdade é justamente o método <strong>assertEqual</strong>... :)

Prontos pra rodar o teste? Vamos ver o que acontece...

<div data-gist-id="2877449" data-gist-show-loading="false"></div>
UHU! Nosso primeiro erro! (sim, no TDD os testes não passando significam progresso).. mas não é o erro que eu estava esperando! :(

O problema é que nós ainda não definimos FizzBuzz, por isso o Python xiou dizendo "<strong>global name 'FizzBuzz' is not defined</strong>".

Vamos criar nosso arquivo fizzbuzz.py com o seguinte conteúdo:

<div data-gist-id="2877466" data-gist-show-loading="false"></div>
Criamos a estrutura da nossa função FizzBuzz que ainda não faz nada.

O "pass" no Python é usado quando uma função/método ainda não tem conteúdo.. e como não temos chaves pra dizer onde ela começa e termina, precisamos de uma instrução que faça exatamente nada.

Vamos voltar ao nosso teste e importar essa função para que ela possa ser usada nos nossos testes, depois vamos rodar os testes novamente e ver se aquela mensagem de erro mudou.

<div data-gist-id="2877480" data-gist-show-loading="false"></div>
A linha "from<strong> fizzbuzz </strong>import<strong> FizzBuzz</strong>" significa "Importe a classe/função <strong>FizzBuzz</strong> do arquivo ou módulo chamado <strong>fizzbuzz</strong>"... isso mesmo, no Python podemos importar apenas parte de um arquivo! :)

E o resultado da execução dos testes é...

<div data-gist-id="2877492" data-gist-show-loading="false"></div>
E estamos chegando lá... agora o Python reclamou que - segundo sua definição - a função FizzBuzz não recebe parâmetros.. que é justamente o primeiro item da nossa lista, então vamos fazer isso acontecer.

<div data-gist-id="2877509" data-gist-show-loading="false"></div>
Isso.. tudo beeeeem de vagar, lembre-se dos passos de bebê!

Agora rodamos os testes novamente e...

<div data-gist-id="2877511" data-gist-show-loading="false"></div>
Conseguimos! O primeiro item da lista foi resolvido! :D

<ul>
<li><del>FizzBuzz recebe um número</del></li>
<li><strong>FizzBuzz(1) retorna 1</strong></li>
<li>FizzBuzz(2) retorna 2</li>
<li>FizzBuzz(3) retorna "fizz"</li>
<li>FizzBuzz(4) retorna 4</li>
<li>FizzBuzz(5) retorna "buzz"</li>
</ul>
Mas agora temos outro problema... que é justamente a nossa asserção de "FizzBuzz(1) é 1" falhando.

<h3>Fazendo um teste passar</h3>
Agora vem a parte (pra mim) mais importante do TDD:

Sempre que você escrever um teste e ele quebrar, pergunte-se: "<span style="color: #333399;"><strong>Qual o menor passo, a menor mudança no código, que eu posso fazer pra esse teste passar?</strong></span>" Não importa se esse passo é elegante, segue padrões de projeto ou está simplesmente enganando o código... A primeira vez que você faz o teste passar tem a ver com velocidade e simplicidade, boas práticas fica pro momento da refatoração, com todos os testes passando.

A menor mudança que a gente pode fazer pra esse código funcionar, sem pensar nos outros casos de FizzBuzz(n) que ainda não estão testados é:

<div data-gist-id="2877529" data-gist-show-loading="false"></div>
Você pode querer me matar depois dessa, mas não estou brincando.. isso é sério, é assim que a coisa funciona! :)

E os testes?

<div data-gist-id="2877535" data-gist-show-loading="false"></div>
Satisfação! Finalmente, nosso primeiro teste passou!!!

<ul>
<li><del>FizzBuzz recebe um número</del></li>
<li><del>FizzBuzz(1) retorna 1</del></li>
<li>FizzBuzz(2) retorna 2</li>
<li>FizzBuzz(3) retorna "fizz"</li>
<li>FizzBuzz(4) retorna 4</li>
<li>FizzBuzz(5) retorna "buzz"</li>
</ul>
<strong>Decidindo o próximo teste</strong>

Quando você estiver decidindo o próximo teste, tente seguir as seguintes dicas:

<ul>
<li>Escreva um teste que você SABE não vai passar.. Não adianta ficar testando coisas que já estão passando, né?</li>
<li>Mas se você não tem certeza, escreva o teste e veja o que acontece... Testes nunca são demais.</li>
<li>Escreva um teste que você ACHA que pode ser resolvido de forma simples, nada de testar o programa todo de uma vez.. o ideal é que você tenha apenas um teste quebrando em cada "rodada"</li>
<li>Teste com valores plausíveis e facilmente compreensíveis... testar soma (1, 2) == 3 é muito melhor do que testar soma (12312512312, 31653341265312) = ????, entendeu onde quero chegar?</li>
</ul>
Então vamos seguir a lista e testar <strong>FizzBuzz(2)</strong> que deveria retornar <strong>2</strong>, e provavelmente não vai passar por causa do nosso roubo (return 1).

<div data-gist-id="2877559" data-gist-show-loading="false"></div>
Eu poderia fazer a nova asserção dentro do mesmo teste, mas preferi trocar o nome dele e criar um segundo teste, assim as coisas ficam mais claras e você pode ver cada teste falhando separadamente.

<div data-gist-id="2877569" data-gist-show-loading="false"></div>
E com esse teste, concluímos que ao roubar (mesmo valendo pra quele momento) acabamos cuspindo pra cima, e agora o cuspe caiu na nossa cabeça... 2 (esperado) é diferente de 1 (resultado).

Mais uma vez, hora de se perguntar: "<strong>Qual o menor passo, a menor mudança no código, que eu posso fazer pra esse teste passar?</strong>".. e se a função retornar o número que recebeu?

<div data-gist-id="2877593" data-gist-show-loading="false"></div>
Feita a mudança, rodamos os testes e...

<div data-gist-id="2877596" data-gist-show-loading="false"></div>
Excelente! Nosso segundo teste está passando e, quase sem perceber, refatoramos o código para algo realmente dentro das regras do problema :)

<ul>
<li><del>FizzBuzz recebe um número</del></li>
<li><del>FizzBuzz(1) retorna 1</del></li>
<li><del>FizzBuzz(2) retorna 2</del></li>
<li><strong>FizzBuzz(3) retorna "fizz"</strong></li>
<li>FizzBuzz(4) retorna 4</li>
<li>FizzBuzz(5) retorna "buzz"</li>
</ul>
Qual o nosso próximo teste? Vamos seguir a lista e ver no que vai dar... Se entendemos bem o que fizemos até agora, FizzBuzz(3) vai retornar 3 e não "fizz" como manda a especificação do problema (múltiplos de três retornam "fizz").

Como voltamos na especificação do problema, vamos adicionar mais um item à nossa lista:

<ul>
<li>FizzBuzz(9) retorna "fizz"</li>
</ul>
Agora vamos ao teste do <strong>FizzBuzz(3) retorna "fizz"</strong>:

<div data-gist-id="2877656" data-gist-show-loading="false"></div>
E o resultado dos testes, como esperado, falhou:

<div data-gist-id="2877660" data-gist-show-loading="false"></div>
Minha função FizzBuzz ainda não está preparada para retornar fizz, o teste quebrou e nós progredimos em direção a solução de mais um problema... viu como é legal?

Eu sei que você está querendo começar a correr e verificar se <strong>numero</strong> é múltiplo de três, mas não temos testes pra isso ainda.. temos apenas um teste onde FizzBuzz(3) deveria retornar "fizz"... é esse pequeno passo que vamos dar. TDD também tem a ver com <strong>ansiedade</strong>, e você precisa aprender a controlar a sua.

<div data-gist-id="2877675" data-gist-show-loading="false"></div>
E os testes passaram! :D

<ul>
<li><del>FizzBuzz recebe um número</del></li>
<li><del>FizzBuzz(1) retorna 1</del></li>
<li><del>FizzBuzz(2) retorna 2</del></li>
<li><del>FizzBuzz(3) retorna "fizz"</del></li>
<li>FizzBuzz(4) retorna 4</li>
<li>FizzBuzz(5) retorna "buzz"</li>
<li>FizzBuzz(9) retorna "fizz"</li>
</ul>
Eu poderia seguir a lista e partir para o <strong>FizzBuzz(4)</strong> mas ele provavelmente vai passar, mas ao mesmo tempo, entre a dúvida e o teste, fique com o teste:

<div data-gist-id="2877696" data-gist-show-loading="false"></div>
Ok.. os testes continuam passando, então esse teste não colaborou em nada para o problema.. Vamos dar um pulo e testar nosso caso mais recente:

<div data-gist-id="2877701" data-gist-show-loading="false"></div>
<ul>
<li><del>FizzBuzz recebe um número</del></li>
<li><del>FizzBuzz(1) retorna 1</del></li>
<li><del>FizzBuzz(2) retorna 2</del></li>
<li><del>FizzBuzz(3) retorna "fizz"</del></li>
<li><del>FizzBuzz(4) retorna 4</del></li>
<li>FizzBuzz(5) retorna "buzz"</li>
<li><strong>FizzBuzz(9) retorna "fizz"</strong></li>
</ul>
Ok.. os testes quebraram.. mas como vamos resolver o problema?

Sabemos que nosso código ainda tem um "roubo", podemos fazer outro roubo ou partir para uma refatoração que resolva o FizzBuzz(3) e FizzBuzz(9), como o problema é ridiculamente simples e esse artigo está ficando longo demais, vamos pra segunda opção:

<div data-gist-id="2877719" data-gist-show-loading="false"></div>
E os testes passaram! :)

Vejam que foi uma refatoração bem simples, ao invés de verificar se o número é igual a três, eu verifiquei se não sobrou resto da sua divisão por três, ou seja: se ele é múltiplo de três.

Uma coisa que está me incomodando um pouco são todos os nomes testes, acho que podemos refatorar o teste a grupar casos semelhantes:

<div data-gist-id="2877751" data-gist-show-loading="false"></div>
Agora sim! Bem melhor, e continuamos testando a mesma coisa... só que com menos testes e mais asserções por teste.

Nossa lista está quase acabando...

<ul>
<li><del>FizzBuzz recebe um número</del></li>
<li><del>FizzBuzz(1) retorna 1</del></li>
<li><del>FizzBuzz(2) retorna 2</del></li>
<li><del>FizzBuzz(3) retorna "fizz"</del></li>
<li><del>FizzBuzz(4) retorna 4</del></li>
<li>FizzBuzz(5) retorna "buzz"</li>
<li><del>FizzBuzz(9) retorna "fizz"</del></li>
</ul>
Falta apenas o FizzBuzz(5) mas acho que é hora de revisar o problema e adicionar mais alguns itens à lista:

<ul>
<li>FizzBuzz(5) retorna "buzz"</li>
<li>FizzBuzz(10) retorna "buzz"</li>
<li>FizzBuzz(15) retorna "fizzbuzz"</li>
<li>FizzBuzz(30) retorna "fizzbuzz"</li>
</ul>
Claro que eu já sei como o problema funciona, mas podemos levantar esses exemplos só de olhar pra descrição do problema lá em cima..

Então vamos partir pro primeiro item da lista: FizzBuzz(5) retorna "buzz"

<div data-gist-id="2877779" data-gist-show-loading="false"></div>
Os testes voltam a quebrar, apenas o último teste falhou pois <strong>5 != "buzz"</strong>.

Como ainda não explicitamos a regra do "multiplo de 5" através de testes, o correto aqui é fazer com que apenas essse teste passe (e não testes futuros):

<div data-gist-id="2877802" data-gist-show-loading="false"></div>
E todos os testes passaram! :D

Agora vamos colocar mais um múltiplo de cinco, como por exemplo FizzBuzz(10) e o teste vai quebrar:

<div data-gist-id="2877812" data-gist-show-loading="false"></div>
Vamos então parar de roubar e fazer o que fizemos com com os múltiplos de três:

<div data-gist-id="2877816" data-gist-show-loading="false"></div>
E todos os três testes (com as 7 asserções) passaram novamente.

<ul>
<li><del>FizzBuzz(5) retorna "buzz"</del></li>
<li><del>FizzBuzz(10) retorna "buzz"</del></li>
<li>FizzBuzz(15) retorna "fizzbuzz"</li>
<li>FizzBuzz(30) retorna "fizzbuzz"</li>
</ul>
Agora vamos atacar a última parte do problema, <strong>múltiplos de três e de cinco</strong>.

Nada de escrever código, primeiro o teste:

<div data-gist-id="2877837" data-gist-show-loading="false"></div>
(Aproveitei também pra mudar o nome dos testes)

Vejam vocês... o teste falhou.. mas diferente do que vimos até agora, não temos "<strong>15 != fizzbuzz</strong>" mas sim "<strong>fizz != fizzbuzz</strong>" pois <strong>15</strong> é multiplo de <strong>3</strong>, correto?

<div data-gist-id="2877850" data-gist-show-loading="false"></div>
Primeiro roubamos (o que o Kent Beck chama de "implementação óbvia"):

<div data-gist-id="2877862" data-gist-show-loading="false"></div>
E todos os testes voltam a passar... Agora adicionamos mais um teste da nossa lista:

<ul>
<li><del>FizzBuzz(5) retorna "buzz"</del></li>
<li><del>FizzBuzz(10) retorna "buzz"</del></li>
<li><del>FizzBuzz(15) retorna "fizzbuzz"</del></li>
<li><strong>FizzBuzz(30) retorna "fizzbuzz"</strong></li>
</ul>
E fazemos uma implementação <strong>simples</strong>, que resolva o problema:

<div data-gist-id="2877873" data-gist-show-loading="false"></div>
Agora, que todos os testes estão passando e o problema está resolvido, podemos refatorar nossa função pra algo mais elegante:

<div data-gist-id="2877917" data-gist-show-loading="false"></div>
Não que essa solução seja a mais elegante e mais eficiente em Python, mas acredito que ela deixe a lógica mais clara.

Enfim... TDD é isso!

Espero que vocês tenham gostado. :D

<ul>
<li>Versão final do código: [https://gist.github.com/2877917](https://gist.github.com/2877917)</li>
<li>Versão final dos testes: [https://gist.github.com/2878018](https://gist.github.com/2878018)</li>
</ul>
