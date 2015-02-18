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
Comentar o seu código está se tornando cada dia mais útil e eficiente. Seguindo os padrões corretos você pode conseguir que a sua IDE faça coisas desse tipo:

<center><img class="aligncenter size-full wp-image-657" title="img1" src="http://blog.thiagobelem.net/arquivos/2009/12/img1.jpg" alt="img1" width="555" height="434" /></center>

Quando você passa o mouse sobre o nome de uma função ou método o IDE vai até onde ela foi definida, interpreta a sintaxe dos comentários e te traz as informações... Isso te ajuda a saber com facilidade o que a função faz, quais são os seus parâmetros e o que ela retorna... e se você estiver usando o <strong>Eclipse</strong> é só apertar F3 e ele te leva até onde essa função foi declara! Quer mais que isso?

<center><img class="aligncenter size-full wp-image-658" title="img2" src="http://blog.thiagobelem.net/arquivos/2009/12/img2.jpg" alt="img2" width="579" height="259" /></center>

<br/><br/>

<h3>2. Indentação Consistente</h3>
Indentação é, sem dúvida, a parte mais importante desse artigo... Sem uma boa indentação o código perde toda a hierarquia de comandos... Existem várias formas de indentar o seu código, todas elas são válidas, mas algumas são mais recomendadas. Veja dois exemplos dos estilos de indentação mais utilizados:


{% highlight php linenos %}
<?php

if ($nota >= 7) {
  echo 'Você foi aprovado!';
} else {
  if ($nota > 3) {
    echo 'Você precisa fazer prova final!';
  } else {
    echo 'Você foi reprovado!';
  }
}

?>
{% endhighlight %}
{% highlight php linenos %}
<?php

if ($nota >= 7)
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
}

?>
{% endhighlight %}
Eu pessoalmente prefiro o primeiro estilo, pois economizamos linhas e não é tão dificil assim perceber onde começa e termina cada bloco... Há um [artigo na Wikipédia](http://en.wikipedia.org/wiki/Indent_style) que mostra os vários estilos de indentação.

<br/>

<h3>3. Evite comentários óbvios</h3>
Comentar o seu código é sempre bom... Comentários só pesam no tamanho do arquivo. E não é só por isso que vamos sair comentando todas as nossas linhas... Além de duplicar (ou triplicar) o nosso tempo de desenvolvimento, nosso codigo vai ficar muito poluído e explicitar o óbivio... Vejamos alguns exemplos que não precisam nem ser comentados (literalmente):


{% highlight php linenos %}
<?php

// Se o $nome for igual a Thiago
if ($nome == 'Thiago')  {
  // Exibe uma mensagem de boas vindas
  echo 'Olá Thiago!';
  // Calcula a idade da pessoa
  $idade = calculaIdade($nome);
}

?>
{% endhighlight %}

<br/>

<h3>4. Agrupamento de código</h3>
Muitas vezes fazemos isso sem perceber... E é uma ótima prática! Agrupe as linhas de código por suas funções/tarefas... Veja um exemplo:


{% highlight php linenos %}
<?php

// Lista os produtos em destaque
$sql = "SELECT * FROM `produtos` WHERE `destaque` = 1";
$query = mysql_query($sql);
while ($produto = mysql_fetch_assoc($query)) {
  echo $produto['nome'] . '';
}

// Lista o apelido dos usuários online
$sql = "SELECT `apelido` FROM `usuarios` WHERE `online` = 1";
$query = mysql_query($sql);
while ($usuario = mysql_fetch_assoc($query)) {
  echo '»' . $usuario['apelido'] . '';
}

?>
{% endhighlight %}

<br/>

<h3>5. Os princípios DRY, DIE e KISS</h3>
Eu me lembro desses três principios diáriamente quando estou criando código e, caso você consiga entendê-los, compreendê-los e usá-los, você vai notar uma incrivel melhoria na qualidade e eficiência do seu código. Vamos ao nome e significado de cada um:

» <strong style="background: gray; color: white">DRY</strong> ou <strong>D</strong>on't <strong>R</strong>epeat <strong>Y</strong>ourself (<em>Não Se Repita</em>) - Baseia-se no conceito de que computadores e sistemas são feitos da automação de tarefas repetitivas e o seu código não deve ser diferete... Você não deve duplicar uma linha de código pra fazer a mesma coisa!

» <strong style="background: gray; color: white">DIE</strong> ou <strong>D</strong>uplication <strong>I</strong>s <strong>E</strong>vil (<em>Duplicação é malígna/má</em>) - Segue o mesmo conceito do DRY.

» <strong style="background: gray; color: white">KISS</strong> ou <strong>K</strong>eep <strong>I</strong>t <strong>S</strong>imple, <strong>S</strong>tupid (<em>Mantenha-o simples, estúpido</em>) - Determina que quanto mais simples e enxuto for seu código, melhor. Simples e rápido.

Algumas pessoas até brincando com "Dry, kiss and die", algo como "Seque, beije e morra"... Se algum dia alguém te falar, isso, você já sabe o que fazer! :)

<br/>

<h3>6. Nomes crutos para variáveis temporárias</h3>
Se você vai usar uma variável para incremento, contador ou só para armazenar um valor que será usado nas próximas linhas, ainda mais quando se trata de valores inteiros, não há necessidade de usar nomes grandes e descritivos... É muito comum usar <strong>$i</strong>, <strong>$k</strong> e <strong>$j</strong> para contadores em <strong>for</strong>/<strong>while</strong>, por exemplo.

<br/>

<h3>7. Evidencie os termos especiais do SQL</h3>
Cansei de ver pessoas escrevendo consultas SQL assim:
{% highlight sql linenos %}
select nome from produtos where preco > 10 limit 1
{% endhighlight %}
Quando não evidenciamos os termos especiais (protegidos) fica dificil entender com facilidade o que a consulta faz... Seria muito mais produtivo fazer algo assim:
{% highlight sql linenos %}
SELECT `nome` FROM `produtos` WHERE `preco` > 10 LIMIT 1
{% endhighlight %}
Onde as palavras protegidas do SQL são deixadas em maiúscula e os nomes de colunas e tabelas são colocados entre crases.

<br/>

<h3>8. Refatoração de código</h3>
Refatorar significa mudar algo sem alterar sua funcionalidade... E refatoração de código segue a mesma lógica, se uma linha funciona bem, você pode tentar refatorá-la, reduzindo seu tamanho (KISS) melhorando sua aparencia, reutilizando códigos existentes (DRY / DIE) e manter seu real propósito.

Uma vez ouvi um profissional da área dizendo "<em>enquanto uma linha de código não funcionar, reescreva-a... E quando ela funcionar, refatore-a até ela quase parar de funcionar novamente</em>".. E é mais ou menos por ai mesmo...

Espero que tenham gostado! :D

Se você estiver procurando algum material mais detalhado e técnico, recomendo a leitura do documento [Walker Alencar](http://blog.walkeralencar.com).

<p style="font-size: 10px; text-align: right; color: silver">Fonte: [Nettuts+](http://net.tutsplus.com/)

