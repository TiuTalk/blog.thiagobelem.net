---
layout: post
title: Apredendo a usar as funções empty e isset
excerpt: Aprenda a usar as funções isset() e empty() do PHP e deixe o seu sistema
  mais seguro e organizado, sabendo quando verificar se uma variável existe e quando
  verificar se ela tem valor.

date: '2009-12-30 14:19:28 -0200'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Funções
---
<p>Fala pessoal!</p>
<p>Mais uma vez, queria pedir desculpas pela minha ausência... Tenho trabalhado além do normal aqui no Jornal e em casa, nas minhas "horas vagas".</p>
<p>Hoje vim mostrar pra vocês duas funções [do PHP] múito úteis... São elas: <strong>empty()</strong> e a <strong>isset()</strong>... Ambas servem, praticamente, para a mesma coisa, mas quando usadas em conjunto são MUITO eficientes.</p>
<h3>A função <span style="color: orange;">empty()</span></h3>
<p>Ela serve para saber se uma variável é vazia... Ela retornará <em>true</em> (verdadeiro) quando uma variável for vazia e, óbviamente, retorna <em>false</em> (falso) quando uma variável não for vazia... Mas ai você se pergunta: o que é uma "variável vazia"?</p>
<p>Essa função retornará true para os seguintes casos:</p>
<ul>
<li>$var = ""; (uma string vazia)</li>
<li>$var = 0; (um inteiro valendo zero)</li>
<li>$var = "0"; (uma string contendo zero)</li>
<li>$var = NULL; (variáveis nulas)</li>
<li>$var = FALSE; (variáveis falsas)</li>
<li>$var = array(); (um array vazio)</li>
<li>var $var; (uma variável declarada, sem valor, dentro de uma classe)</li>
</ul>
<p>Agora vamos ver um exemplo prático de uso do empty():<br />
[code language="php"]<?php</p>
<p>// Recebe um campo de um formulário<br />
$nome = $_POST['nome'];</p>
<p>// Verifica se o usuário digitou o seu nome<br />
if (empty($nome)) {<br />
	echo "Por favor, preencha o seu nome.";<br />
}</p>
<p>?>[/code]</p>
<p>
<h3>A função <span style="color: orange;">isset()</span></h3>
<p>Ela serve para saber se uma variável existe... Ela retornará true (verdadeiro) quando uma variável existir e false (falso) quando uma variável não existir... Mas ai você se pergunta: quando uma variável existe?</p>
<p>Veja os exemplos de variáveis vazias no item anterior... Todos eles fazem com que a variável ($var) passe a existir... Para uma variável "não existir" ela não pode ter sido usada/definida em nenhum momento [anterior] do script... Veja um exemplo onde usamos o isset() em conjunto com o empty() e melhoramos o exemplo do item anterior:</p>
<p>[code language="php"]<?php</p>
<p>// Verifica se a variável $_POST não é vazia...<br />
// ou seja: houve um submit no formulário<br />
if (!empty($_POST)) {</p>
<p>	// Verifica se a variável $_POST['nome'] existe<br />
	if (isset($_POST['nome']) {</p>
<p>		// Verifica se o usuário digitou o seu nome<br />
		if (!empty($_POST['nome'])) {<br />
			$nome = $_POST['nome'];<br />
			echo 'Seja bem-vindo(a) ' . $nome . '!';<br />
		} else {<br />
			echo "Por favor, preencha o seu nome";<br />
		}</p>
<p>	} else {<br />
		echo "O campo 'nome' não existe na variável $_POST";<br />
	}</p>
<p>} else {<br />
	echo "Não houve submit no formulário";<br />
}</p>
<p>?>[/code]</p>
<p>Espero que tenham gostado! :)</p>
