---
layout: post
title: Melhores práticas para deixar seu código legível
excerpt: Aprenda um pouquinho sobre as 8 melhores práticas durante o desenvolvimento
  de códigos, em qualquer linguagem de programação e deixe os seus códigos mais limpos,
  organizados e legíveis, facilitando assim o seu trabalho no futuro.

date: '2009-12-10 14:33:26 -0200'
categories:
- Desenvolvimento
- PHP
- Artigos
tags:
- PHP
- Boas Práticas
---
<h3>1. Comentário e Documentação</h3>
<p>Comentar o seu código está se tornando cada dia mais útil e eficiente. Seguindo os padrões corretos você pode conseguir que a sua IDE faça coisas desse tipo:</p>
<p><center><img class="aligncenter size-full wp-image-657" title="img1" src="http://blog.thiagobelem.net/arquivos/2009/12/img1.jpg" alt="img1" width="555" height="434" /></center></p>
<p>Quando você passa o mouse sobre o nome de uma função ou método o IDE vai até onde ela foi definida, interpreta a sintaxe dos comentários e te traz as informações... Isso te ajuda a saber com facilidade o que a função faz, quais são os seus parâmetros e o que ela retorna... e se você estiver usando o <strong>Eclipse</strong> é só apertar F3 e ele te leva até onde essa função foi declara! Quer mais que isso?</p>
<p><center><img class="aligncenter size-full wp-image-658" title="img2" src="http://blog.thiagobelem.net/arquivos/2009/12/img2.jpg" alt="img2" width="579" height="259" /></center></p>
<p><br/><br/></p>
<h3>2. Indentação Consistente</h3>
<p>Indentação é, sem dúvida, a parte mais importante desse artigo... Sem uma boa indentação o código perde toda a hierarquia de comandos... Existem várias formas de indentar o seu código, todas elas são válidas, mas algumas são mais recomendadas. Veja dois exemplos dos estilos de indentação mais utilizados:</p>
<p>[code language="php"]<?php</p>
<p>if ($nota >= 7) {
	echo 'Você foi aprovado!';
} else {
	if ($nota > 3) {
		echo 'Você precisa fazer prova final!';
	} else {
		echo 'Você foi reprovado!';
	}
}</p>
<p>?>[/code]
[code language="php"]<?php</p>
<p>if ($nota >= 7)
{
	echo 'Você foi aprovado!';
}
else
{
	if ($nota > 3)
	{
		echo 'Você precisa fazer prova final!';
	}
	else
	{
		echo 'Você foi reprovado!';
	}
}</p>
<p>?>[/code]
Eu pessoalmente prefiro o primeiro estilo, pois economizamos linhas e não é tão dificil assim perceber onde começa e termina cada bloco... Há um <a href="http://en.wikipedia.org/wiki/Indent_style" title="Estilos de Indentação" target="_blank">artigo na Wikipédia</a> que mostra os vários estilos de indentação.</p>
<p><br/></p>
<h3>3. Evite comentários óbvios</h3>
<p>Comentar o seu código é sempre bom... Comentários só pesam no tamanho do arquivo. E não é só por isso que vamos sair comentando todas as nossas linhas... Além de duplicar (ou triplicar) o nosso tempo de desenvolvimento, nosso codigo vai ficar muito poluído e explicitar o óbivio... Vejamos alguns exemplos que não precisam nem ser comentados (literalmente):</p>
<p>[code language="php"]<?php</p>
<p>// Se o $nome for igual a Thiago
if ($nome == 'Thiago')  {
	// Exibe uma mensagem de boas vindas
	echo 'Olá Thiago!';
	// Calcula a idade da pessoa
	$idade = calculaIdade($nome);
}</p>
<p>?>[/code]</p>
<p><br/></p>
<h3>4. Agrupamento de código</h3>
<p>Muitas vezes fazemos isso sem perceber... E é uma ótima prática! Agrupe as linhas de código por suas funções/tarefas... Veja um exemplo:</p>
<p>[code language="php"]<?php</p>
<p>// Lista os produtos em destaque
$sql = "SELECT * FROM `produtos` WHERE `destaque` = 1";
$query = mysql_query($sql);
while ($produto = mysql_fetch_assoc($query)) {
	echo $produto['nome'] . '';
}</p>
<p>// Lista o apelido dos usuários online
$sql = "SELECT `apelido` FROM `usuarios` WHERE `online` = 1";
$query = mysql_query($sql);
while ($usuario = mysql_fetch_assoc($query)) {
	echo '»' . $usuario['apelido'] . '';
}</p>
<p>?>[/code]</p>
<p><br/></p>
<h3>5. Os princípios DRY, DIE e KISS</h3>
<p>Eu me lembro desses três principios diáriamente quando estou criando código e, caso você consiga entendê-los, compreendê-los e usá-los, você vai notar uma incrivel melhoria na qualidade e eficiência do seu código. Vamos ao nome e significado de cada um:</p>
<p>» <strong style="background: gray; color: white">DRY</strong> ou <strong>D</strong>on't <strong>R</strong>epeat <strong>Y</strong>ourself (<em>Não Se Repita</em>) - Baseia-se no conceito de que computadores e sistemas são feitos da automação de tarefas repetitivas e o seu código não deve ser diferete... Você não deve duplicar uma linha de código pra fazer a mesma coisa!</p>
<p>» <strong style="background: gray; color: white">DIE</strong> ou <strong>D</strong>uplication <strong>I</strong>s <strong>E</strong>vil (<em>Duplicação é malígna/má</em>) - Segue o mesmo conceito do DRY.</p>
<p>» <strong style="background: gray; color: white">KISS</strong> ou <strong>K</strong>eep <strong>I</strong>t <strong>S</strong>imple, <strong>S</strong>tupid (<em>Mantenha-o simples, estúpido</em>) - Determina que quanto mais simples e enxuto for seu código, melhor. Simples e rápido.</p>
<p>Algumas pessoas até brincando com "Dry, kiss and die", algo como "Seque, beije e morra"... Se algum dia alguém te falar, isso, você já sabe o que fazer! :)</p>
<p><br/></p>
<h3>6. Nomes crutos para variáveis temporárias</h3>
<p>Se você vai usar uma variável para incremento, contador ou só para armazenar um valor que será usado nas próximas linhas, ainda mais quando se trata de valores inteiros, não há necessidade de usar nomes grandes e descritivos... É muito comum usar <strong>$i</strong>, <strong>$k</strong> e <strong>$j</strong> para contadores em <strong>for</strong>/<strong>while</strong>, por exemplo.</p>
<p><br/></p>
<h3>7. Evidencie os termos especiais do SQL</h3>
<p>Cansei de ver pessoas escrevendo consultas SQL assim:
[code language="sql" light="true"]select nome from produtos where preco > 10 limit 1[/code]
Quando não evidenciamos os termos especiais (protegidos) fica dificil entender com facilidade o que a consulta faz... Seria muito mais produtivo fazer algo assim:
[code language="sql" light="true"]SELECT `nome` FROM `produtos` WHERE `preco` > 10 LIMIT 1[/code]
Onde as palavras protegidas do SQL são deixadas em maiúscula e os nomes de colunas e tabelas são colocados entre crases.</p>
<p><br/></p>
<h3>8. Refatoração de código</h3>
<p>Refatorar significa mudar algo sem alterar sua funcionalidade... E refatoração de código segue a mesma lógica, se uma linha funciona bem, você pode tentar refatorá-la, reduzindo seu tamanho (KISS) melhorando sua aparencia, reutilizando códigos existentes (DRY / DIE) e manter seu real propósito.</p>
<p>Uma vez ouvi um profissional da área dizendo "<em>enquanto uma linha de código não funcionar, reescreva-a... E quando ela funcionar, refatore-a até ela quase parar de funcionar novamente</em>".. E é mais ou menos por ai mesmo...</p>
<p>Espero que tenham gostado! :D</p>
<p>Se você estiver procurando algum material mais detalhado e técnico, recomendo a leitura do documento <a href="http://www.walkeralencar.com/PHPCodeStandards.pdf" title="PHP Coding Standards" target="_blank">PHP Coding Standards</a> do <a href="http://blog.walkeralencar.com" target="_blank" title="Walker Alencar">Walker Alencar</a>.</p>
<p style="font-size: 10px; text-align: right; color: silver">Fonte: <a href="http://net.tutsplus.com/" title="Nettuts+">Nettuts+</a></p>
