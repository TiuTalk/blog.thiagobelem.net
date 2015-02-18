---
layout: post
title: Introdução a Arrays, Vetores e Listas
excerpt: Os arrays são, sem dúvida, um dos recursos mais legais das linguagens de
  programação. Hoje vamos falar um pouco sobre o que são, por que devem ser usados
  e como usá-los no PHP.

date: '2009-05-06 09:58:44 -0300'
categories:
- PHP
- Artigos
tags: []
---
<p>Os arrays são, sem dúvida, um dos recursos mais legais das linguagens de programação. Hoje vamos falar um pouco sobre o que são, por que devem ser usados e como usá-los no PHP.</p>
<h3>O que são e pra que servem arrays?</h3>
<p><strong>Arrays</strong> são, basicamente, <span style="text-decoration: underline;">listas</span>.. Imagine uma lista de compras que você está levando ao mercado:</p>
<ol>
<li>Pão</li>
<li>Ovos</li>
<li>Carne</li>
<li>Macarrão</li>
</ol>
<p>A lista de compras, que contém quatro elementos, vai ser chamada de <strong>lista</strong>. Perceba que se "procurarmos" o terceiro elemento da lista, veremos que é <strong>Carne</strong>.</p>
<p>Agora, imagine que você precise passar isso para programação, só que a sua lista de compras pode ter N elementos, e seria insano definir uma variável diferente para caaaada um desses elementos.</p>
<p><strong>Nunca se esqueça:</strong> que cada variável ocupa espaço na memória do computador e faz o computador "perder" algum tempo procurando seu valor na memória.</p>
<p>Por isso existem os arrays: armazenar valores e/ou variáveis referentes a um mesmo grupo, a uma mesma origem.</p>
<h3>Arrays no PHP</h3>
<p>Criar arrays no PHP é extremamente simples, veja dois exemplos onde criamos a nossa lista de compras:</p>
<p>[code='php']<br />
< ?php</p>
<p>// Definição simples e rápida<br />
$lista = array('Pão', 'Ovos', 'Carne', 'Macarrão');</p>
<p>// Definição mais longa, porém mais fácil de entender<br />
$lista = array();<br />
$lista[0] = 'Pão';<br />
$lista[1] = 'Ovos';<br />
$lista[2] = 'Carne';<br />
$lista[3] = 'Macarrão';</p>
<p>// Outro exemplo<br />
$lista = array();<br />
$lista[] = 'Pão';<br />
$lista[] = 'Ovos';<br />
$lista[] = 'Carne';<br />
$lista[] = 'Macarrão';</p>
<p>?><br />
[/code]</p>
<p>Em todos os três exemplos o resultado ($lista) será o mesmo... Vamos falar de cada um:</p>
<p>No primeiro exemplo, definimos todos os quatro elementos na forma mais simples possível, separados por vírgula.</p>
<p>Já no segundo exemplo definimos (antes) que $lista será um array, e logo após, definimos seus quatro elementos, perceba que temos um número entre colchetes agora: <strong><span style="color: #000000;">$lista</span><span style="color: #000080;">[<span style="color: #0000ff;">1</span>]</span></strong> esse número significa o índice do array, a posição do elemento. O índice do elemento pode ser definido como numérico ou textual (string)... Veremos isso no próximo exemplo.</p>
<p>E por fim, no terceiro exemplo, fazemos a mesma coisa que fizemos no segundo, só que omitimos os índices dos elementos, sendo assim, o PHP irá colocar cada elemento no fim do array, começando com a posição 0 (primeiro elemento) e crescendo a cada elemento.</p>
<h3>Índices Textuais (Strings)</h3>
<p>Você também pode definir índices (também chamados de <em>keys</em> ou chaves)  como <em>strings</em>, veja um bom exemplo de uso:</p>
<p>[code='php']<br />
< ?php</p>
<p>// Definição longa<br />
$carro = array();<br />
$carro['cor'] = 'Vermelho';<br />
$carro['modelo'] = 'CrossFox';<br />
$carro['fabricante'] = 'Volkswagen';</p>
<p>// Definição simples<br />
$carro = array('cor' => 'Vermelho', 'modelo' => 'CrossFox', 'fabricante' => 'Volkswagen');</p>
<p>?><br />
[/code]</p>
<h3>Exibindo e localizando elementos dos Arrays</h3>
<p>Quando você for exibir um elemento, é só seguir a mesma sintaxe da declaração longa:</p>
<p>[code='php']<br />
< ?php</p>
<p>// Carro<br />
$carro = array();<br />
$carro['cor'] = 'Vermelho';<br />
$carro['modelo'] = 'CrossFox';<br />
$carro['fabricante'] = 'Volkswagen';</p>
<p>echo "A cor do carro é: " . $carro['cor'];<br />
// Resultado: A cor do meu carro é: Vermelho</p>
<p>// Lista<br />
$lista = array('Pão', 'Ovos', 'Carne', 'Macarrão');</p>
<p>echo "O segundo item da lista é: " . $lista[1];<br />
// Resultado: O segundo item da lista é: Ovos</p>
<p>?><br />
[/code]</p>
<p>Vale lembrar, que quando estamos trabalhando com índices numéricos (ordenados), a posição inicial é a zero, então a quarta posição será o índice<span style="color: #000080;"><strong> [<span style="color: #0000ff;">3</span>]</strong></span>.</p>
<p>Veja também:<br />
» <a href="http://pt.wikipedia.org/wiki/Array" target="_blank">Array (Wikipédia)</a><br />
» <a href="http://br2.php.net/manual/pt_BR/language.types.array.php" target="_blank">Documentação (do PHP) sobre Arrays</a></p>
<h3>Arrays multi-dimensionais</h3>
<p>Não vou me aprofundar no assunto... mas você pode definir um array onde um ou mais elementos sejam arrays. Nesse caso o array não pode mais ser chamado de <strong>lista</strong>, e deve ser chamado de <strong>vetor</strong> ou <strong>array</strong> mesmo. Veja um exemplo básico de definição e exibição:</p>
<p>[code='php']<br />
< ?php</p>
<p>// Carro<br />
$carro = array();<br />
$carro['cores'] = array('Vermelho', 'Branco', 'Cinza');<br />
$carro['modelo'] = 'CrossFox';<br />
$carro['fabricante'] = 'Volkswagen';</p>
<p>echo "A terceira cor do meu " . $carro['modelo'] . " é: " . $carro['cores'][2];<br />
// Resultado: A terceira cor do meu CrossFox é: Cinza</p>
<p>?><br />
[/code]</p>
<p>--</p>
<p>Espero que tenham gostado... Não falei ainda as funções de manipulação de arrays, o que vai ficar para um outro dia.</p>
<p>Abraços e qualquer dica, dúvida, ou sugestão, é só falar! E não esqueçam de assinar o <a title="Feed RSS" href="http://feeds2.feedburner.com/ThiagoBelem/Blog" target="_blank">Feed RSS</a> do blog. :)</p>
