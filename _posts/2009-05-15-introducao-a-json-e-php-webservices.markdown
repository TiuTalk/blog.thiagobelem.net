---
layout: post
title: Introdução a JSON e PHP (Webservices)
excerpt: JSON é um padrão de formatação de dados usado para transmissão de dados entre
  duas aplicações diferentes. Aprenda porque ele é ideal para Webservices e como usá-lo
  acompanhado do PHP.

date: '2009-05-15 19:40:50 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Hmm.. Então você ouviu sobre o tal do JSON e não sabe ainda como usar? Talvez você já tenha até visto algo que use JSON e não sabe...

Desde a versão 5.2 o PHP já tem suporte a leitura e escrita de dados no formato JSON... Mas que raios é isso?

Descrição de JSON da Wikipédia:

<p style="padding-left: 30px;"><span style="color: #003366;"><em><strong>JSON</strong> (com a pronuncia </em><em>djeisón), um [otation](http://pt.wikipedia.org/wiki/Nota%C3%A7%C3%A3o)", é um formato leve para intercâmbio de dados computacionais. <strong>JSON</strong> é um subconjunto da notação de objeto de JavaScript, mas seu uso não requer Javascript exclusivamente.</em></span>

<p style="padding-left: 30px;"><span style="color: #008080;"><em><span style="color: #003366;">A simplicidade de JSON tem resultado em seu uso difundido, especialmente como uma alternativa para [navegadores web](http://pt.wikipedia.org/wiki/Navegador_web) atuais</span>.</em></span>

--

Trocando em miúdos: é um padrão de formatação de dados que serão transmitidos entre duas aplicações de linguagens diferentes. Conhece o XML? Então... O JSON serve pra mesma coisa.

<h3></h3>
<h3>Como ele funciona?</h3>
Usando JSON você salvar quatro tipos de valores (variáveis): inteiros, strings, booleanos e arrays. O JSON é um grupo de informações/valores/variáveis agrupados e organizados dentro de um objeto (POO) de JavaScript que pode ser lido - facilmente - pela maioria das linguagens hoje em dia: PHP, ActionScript, ASP, Java, Flex e por aí vai..

<h3>A sintaxe do dito cujo</h3>
Tá nervoso? Quer ver logo como é esse tal de <em>"djeisón"</em>? Vamos criar um objeto que levaria algumas informações aqui do blog.

Primeiro criamos o objeto sem nada dentro:


{% highlight javascript linenos %}
var meuBlog = {}
{% endhighlight %}

Agora colocamos alguns valores:


{% highlight javascript linenos %}
var meuBlog = {
titulo: 'Thiago Belem / Blog',
url: '/'
}
{% endhighlight %}

Caso você queira exibir algum desses valores, usando JavaScript, poderia fazer:


{% highlight javascript linenos %}
alert("Titulo do blog: " + meuBlog.titulo);
{% endhighlight %}

Para incrementar, vamos colocar um array?


{% highlight javascript linenos %}
var meuBlog = {
titulo: 'Thiago Belem / Blog',
url: '/',
assuntos: ['PHP', 'MySQL', 'jQuery', 'CakePHP', 'Desenvolvimento WEB']
}
{% endhighlight %}

Lembra que eu disse que você provavelmente já viu JSON em algum lugar? Já usou algum plugin de jQuery e precisou mudar as configurações dele? Dá uma olhada na sintaxe usada lá e vê esses últimos exemplos. Tá... Não é JSON, mas são os dois são idênticos por serem objetos JavaScript... A diferença é que o JSON é feito para ser transmitido. :P

<span style="color: #ffffff;">.</span>

<h3>Tá... E o PHP nisso?</h3>
Bom... Como eu disse antes, o PHP 5.2+ tem suporte nativo a escrita e leitura de formatação JSON... Isso significa que você não precista instalar/ativar nada, é só começar a usar.

Vejamos um exemplo de escrita:


{% highlight php linenos %}
<?php

$meuBlog = array(
'titulo' => 'Thiago Belem / Blog',
'url' => '/',
'assuntos' => array('PHP', 'MySQL', 'jQuery', 'CakePHP', 'Desenvolvimento WEB')
);

$json = json_encode($meuBlog);

echo $json;
// Resultado: { titulo: 'Thiago Belem / Blog', url: '/', assuntos: ['PHP', 'MySQL', 'jQuery', 'CakePHP', 'Desenvolvimento WEB'] }

?>
{% endhighlight %}

É isso mesmo.. Primeiro você cria um array com a formatação correta e todos os valores que serão passados para JSON, depois é só rodar a função json_enconde() no array todo e cabou-se. ;)

Agora a leitura:


{% highlight php linenos %}
<?php

// Recebe uma string no formato JSON
$usuario = "{ nome: 'Fulano da Silva', ativo: true, nascimento: '2009/05/12' }";

$meuUsuario = json_decode($usuario, true);

echo $meuUsuario['nome']; // Fulano da Silva
echo $meuUsuario['nascimento']; // 2009/05/12

?>
{% endhighlight %}

No segundo argumento da função json_decode() do PHP você define se quer (true) ou não (false) que o objeto JSON recebido seja convertido em array. Caso não especifique o 2º argumento ou defina-o como falso, o objeto criado será outro objeto, só que agora do PHP.

<h3>Webservice? Quem? Como? Quando?</h3>
Já dizia a Wikipédia: <em>"Web service é uma solução utilizada na integração de sistemas e na comunicação entre aplicações diferentes."</em>

Mas perai... O JSON não é usado para formatar os dados que estão sendo compartilhados entre duas aplicações diferentes? <strong>Sim!</strong> Você acaba de descobrir por que o JSON é ideal para <em>webservices</em>. :)

Espero que tenham gostado desse pequeno artigo.

Ahh.. E pra quem não tem PHP 5.2 ou superior, no site (feio/medonho) do [JSON](http://www.json.org/), existem guias de integração e classe pronta para uso (o mesmo vale para outras linguagens que não têm suporte nativo a ele).

Abraços! E uma boa noite.

