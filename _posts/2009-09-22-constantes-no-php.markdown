---
layout: post
title: Constantes no PHP
excerpt: Aprendam pra que servem, como criar e como usar as constantes no PHP, um
  "tipo" de variável que permanece igual até o final da execução do script.

date: '2009-09-22 16:04:21 -0300'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Constantes
---
<p>O que é uma constante? É exatamente o contrário de uma variável.. E o que é uma variável? "Uma coisa que varia!"</p>
<p>Constantes são "variáveis fixas", capazes de armazenar um valor (de quase todos os tipos) mas que não podem ser redefinidos, modificados ou removidos... Eles são constantes e permanecem como são até o final da execução do script.</p>
<h3>Segundo a documentação...</h3>
<blockquote><p><em>Uma constante é um identificador (nome) para um único valor. Como o nome sugere, esse valor não pode mudar durante a execução do script (exceção às  constantes mágicas, que não são constantes de verdade). As constantes são sensíveis ao caso por padrão. Por convenção, o nomes de constantes são sempre em maiúsculas.</em></p>
<p><em>O nome de uma constante tem as mesmas regras de qualquer identificador no PHP. Um nome de constante válida começa com uma letra ou sublinhado, seguido por qualquer número de letras, números ou sublinhados.</em></p></blockquote>
<h3>Criando constantes</h3>
<p>Pra criar uma constante é bem simples, você usa a função <strong>define()</strong> que pede dois argumentos: primeiro o nome da constante e depois o seu valor, exemplos:<br />
[code language="php"]&lt;?php<br />
define('SITE', 'Thiago Belem / Blog');<br />
define('site', 2);<br />
?&gt;[/code]<br />
No código acima definimos DUAS constantes diferentes, com dois valores diferentes. O nome das constantes é "case-sensitive" isso significa que "SITE" é diferente de "site" que são diferente de "sItE" e por aí vai.</p>
<h3>Usando constantes</h3>
<p>O uso de uma constante é identico ao uso de uma variável, diferença é que você não tem um cifrão ($) na frente do nome da constante, por exemplo:<br />
[code language="php"]&lt;?php<br />
define('SITE', 'Thiago Belem / Blog');<br />
echo &quot;Seja bem vindo ao site &quot; . SITE;<br />
// Seja bem vindo ao site Thiago Belem / Blog</p>
<p>// Outra forma:<br />
$mensagem = &quot;Seja bem-vindo ao site&quot;;<br />
echo $mensagem . ' ' . SITE;<br />
// Seja bem vindo ao site Thiago Belem / Blog<br />
?&gt;[/code]<br />
<strong style="color: red">Atenção:</strong> Se você tentar definir uma mesma constante - mais de uma vez - receberá uma mensagem de erro. Afinal, ela é uma constante e não pode ser definida novamente.</p>
<h3>Recebendo o valor de uma constante</h3>
<p>Normalmente para receber o valor de uma constante é só usar o seu nome como foi mostrado no exemlpo anterior, mas e se o nome da constante é dinâmico (está dentro de uma variável)?</p>
<p>Vamos a um exemplo básico, suponhamos que você tenha um script que cria uma constante em função do nome do visitante, você poderia fazer assim:<br />
[code language="php"]&lt;?php<br />
$cargo = 'dono';<br />
$nome = 'Thiago Belem';</p>
<p> // Cria uma constante 'dono' com o valor 'Thiago Belem'<br />
define($cargo, $nome);</p>
<p>echo &quot;O &quot; . $cargo . &quot; do blog é o &quot; . dono . &quot;!&quot;;<br />
// O dono do blog é o Thiago Belem!<br />
?&gt;[/code]<br />
Agora imagine que o valor dessa variável <strong>$cargo</strong> muda pra cada visitante e você não pode usar "dono" como está ali no echo, você faz assim:<br />
[code language="php"]&lt;?php<br />
$cargo = 'dono';<br />
$nome = 'Thiago Belem';</p>
<p> // Cria uma constante 'dono' com o valor 'Thiago Belem'<br />
define($cargo, $nome);</p>
<p>echo &quot;O &quot; . $cargo . &quot; do blog é o &quot; . constant($cargo) . &quot;!&quot;;<br />
// O dono do blog é o Thiago Belem!<br />
?&gt;[/code]<br />
A função <strong>constant()</strong> te retorna o valor da constante cujo o nome você passou por parâmetro! É fantástico, não é?</p>
<h3>Trabalhando com constantes</h3>
<p>Você pode usar a função <strong>defined()</strong> para saber se uma constante já foi definida, por exemplo:<br />
[code language="php"]&lt;?php<br />
// Verifica se a constante SITE não foi definida<br />
if (defined('SITE') == false) {<br />
	define('SITE', 'Thiago Belem / Blog');<br />
}<br />
?&gt;[/code]</p>
<h3>Documentação</h3>
<p>&raquo; Capítulo <a href="http://www.php.net/manual/pt_BR/language.constants.php" target="_blank">constantes</a><br />
&raquo; Função <a href="http://www.php.net/manual/pt_BR/function.define.php" target="_blank">define()</a><br />
&raquo; Função <a href="http://www.php.net/manual/pt_BR/function.constant.php" target="_blank">constant()</a><br />
&raquo; Função <a href="http://www.php.net/manual/pt_BR/function.defined.php" target="_blank">defined()</a></p>
<p>--</p>
<p>A vantagem de se usar constantes é que <strong>elas são globais</strong> e passam a existir dentro de qualquer escopo do seu script (classe, funções, includes e etc.).</p>
<p>Espero que tenham gostado! :D</p>
