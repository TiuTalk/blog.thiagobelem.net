---
layout: post
title: Criando um Feed RSS com PHP
excerpt: Aprenda como fazer um Feed RSS usando a classe SimpleXMLElement do PHP. Crie
  um Feed RSS de um banco de dados de notícias em MySQL usando apenas 35 linhas e
  abra mais uma porta de entrada para o seu site.

date: '2009-05-14 21:22:16 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Boa noite pessoal!

Essa semana várias pessoas me pediram para (re)fazer um artigo ensinando como gerar um Feed RSS via PHP.. E é isso que vamos fazer hoje.

Pra tentar uma abordagem diferente dos outros artigos, eu vou fazer dizer o que você precisa fazer, passo-a-passo, e só depois coloco o código completo, será que dá certo assim? Afinal.. Fiz esse blog pra ensinar, e não pra mostrar que sei. ;)

Bom.. Como viram no meu tópico ensinando sobre <a title="Lendo um Feed RSS com PHP" href="/lendo-um-feed-rss-com-php" target="_blank">como ler um Feed RSS com PHP</a>, existe uma classe pronta do PHP chamada <strong>SimpleXMLElement</strong> e iremos usá-la para gerar o nosso Feed RSS.

Na descrição de RSS na Wikipédia temos:

<p style="padding-left: 30px;"><em>O termo Feed vem do verbo em inglês "alimentar". Na Internet, este sistema também é conhecido como "<strong>RSS Feeds</strong>" (<strong>R</strong>DF <strong>S</strong>ite <strong>S</strong>ummary ou <strong>R</strong>eally <strong>S</strong>imple <strong>S</strong>yndication).</em>

<p style="padding-left: 30px;"><em>Na prática, Feeds são usados para que um usuário possa acompanhar os novos artigos e demais conteúdo de um site ou blog sem que precise visitar o site em si. Sempre que um novo conteúdo for publicado em determinado site, o "assinante do feed" será notificado da atualização e poderá ler parte dela imediatamente, direto no seu agregador de RSS.</em>

--

Eu vou ensinar a fazer um Feed RSS com um item, e depois mostrarei um exemplo de como seria se estivéssemos pegando as notícias de um banco de dados. <strong>Atenção:</strong> o formato do RSS aqui criado segue os <a href="http://cyber.law.harvard.edu/rss/rss.html" target="_blank">padrões e especificações do RSS 2.0</a>.

Vamos ao que interessa... A classe <a href="http://www.php.net/manual/pt_BR/book.simplexml.php" target="_blank">SimpleXMLElement</a> já foi compilada junto com as versões atuais do PHP, então você não precisa instalar nada.. É só chamar a classe e sair brincando.

Primeiro chamamos a classe:


[code language="php"]
<?php

// Intanciamos/chamamos a classe
$rss = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><rss></rss>');

?>
[/code]

Com isso iremos começar a criar uma estrutura XML com o formato que está sendo passado para a classe.

Agora iremos dizer que será um RSS versão 2.0, e para isso precisamos definir um atributo <strong>version</strong> do item <rss>, dessa forma:


[code language="php"]
<?php

// Intanciamos/chamamos a classe
$rss = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><rss></rss>');

$rss->addAttribute('version', '2.0');

?>
[/code]

Até agora o nosso RSS tem um formato parecido com esse:


[code language="xml"]
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">

</rss>
[/code]

O próximo passo é definir o elemento <strong><channel></strong> (canal) que contem todos os dados do RSS e cada um dos itens/notícias... Dentro dele iremos colocar mais três elementos, que são o <strong><title></strong> (titulo do RSS), o <strong><link></strong> (do site ao qual o RSS pertence) e a <strong><description></strong> (descrição do conteúdo RSS):


[code language="php"]<?php
// Intanciamos/chamamos a classe
$rss = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><rss></rss>');
$rss->addAttribute('version', '2.0');

// Cria o elemento <channel> dentro de <rss>
$canal = $rss->addChild('channel');
// Adiciona sub-elementos ao elemento <channel>
$canal->addChild('title', 'Meu primeiro RSS');
$canal->addChild('link', 'http://www.meusite.com/');
$canal->addChild('description', 'Este é o meu primeiro RSS, uha!');

?>[/code]

Existem outros sub-elementos de channel, mas são todos opcionais... Veja a lista completa deles <a href="http://cyber.law.harvard.edu/rss/rss.html#optionalChannelElements" target="_blank">aqui</a>.

E com isso, o nosso RSS ficará com um formato assim:


[code language="xml"]<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Meu primeiro RSS</title>
<link>http://www.meusite.com/</link>
<description>Este é o meu primeiro RSS, cheio de coisas legais!</description>

</channel>
</rss>[/code]

Estão percebendo a mágica do SimpleXMLElement? Ele vai criando um formato de XML perfeito pra você usar com quase qualquer coisa! :D

Bom... Já temos o formato básico do RSS.. Agora é só adicionar dois itens de exemplo e o nosso RSS estará quase pronto:


[code language="php"]<?php
// Intanciamos/chamamos a classe
$rss = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><rss></rss>');
$rss->addAttribute('version', '2.0');

// Cria o elemento <channel> dentro de <rss>
$canal = $rss->addChild('channel');
// Adiciona sub-elementos ao elemento <channel>
$canal->addChild('title', 'Meu primeiro RSS');
$canal->addChild('link', 'http://www.meusite.com/');
$canal->addChild('description', 'Este é o meu primeiro RSS, uha!');

// Cria um elemento <item> dentro de <channel>
$item = $canal->addChild('item');
// Adiciona sub-elementos ao elemento <item>
$item->addChild('title', 'Meu segundo artigo');
$item->addChild('link', 'http://www.meusite.com/artigos.php?id=2');
$item->addChild('description', 'Esse é um resumo do meu segundo artigo.');

// Cria outro elemento <item> dentro de <channel>
$item = $canal->addChild('item');
// Adiciona sub-elementos ao elemento <item>
$item->addChild('title', 'Meu primeiro artigo');
$item->addChild('link', 'http://www.meusite.com/artigos.php?id=1');
$item->addChild('description', 'Esse é um resumo do meu primeiro artigo.');
$item->addChild('pubDate', date('r'));

?>[/code]

Cada <strong><item></strong> representa uma entrada do RSS, seria cada uma das notícias de um site de notícias, ou cada um dos artigos de um blog ou cada um dos apartamentos do site de uma imobiliária. A ordem dos <strong><item>s</strong> deve ser é do mais recente para o mais antigo.

Os três sub-elementos obrigatórios dos <strong><item>s</strong> são: o <strong><title></strong>, o <strong><link></strong>e o <strong><description></strong>... Existem vários outros sub-elemtos (<a href="http://cyber.law.harvard.edu/rss/rss.html#hrelementsOfLtitemgt" target="_blank">lista</a>), um exemplo comum é o <strong><pubDate></strong> (coloquei ele no 2º item) que representa a data de publicação do <item> em questão, e segue o formato <strong>RFC 733</strong>, por exemplo: <em>Thu, 21 Dec 2000 16:01:07 +0200</em>. Esse formato pode ser obtido pelo parâmetro <span style="color: #0000ff;"><strong>r</strong></span> passado para a função date() do PHP.

Depois de inserir os dois itens o formato do nosso RSS está concluído, ficando assim:


[code language="xml"]<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Meu primeiro RSS</title>
<link>http://www.meusite.com/</link>
<description>Este é o meu primeiro RSS, cheio de coisas legais!</description>

<item>
<title>Meu segundo artigo</title>
<link>http://www.meusite.com/artigos.php?id=2</link>
<description>Esse é um resumo do meu segundo artigo.</description>
</item>

<item>
<title>Meu primeiro artigo</title>
<link>http://www.meusite.com/artigos.php?id=1</link>
<description>Esse é um resumo do meu primeiro artigo.</description>
<pubDate>Thu, 21 Dec 2000 16:01:07 +0200</pubDate>
</item>

</channel>
</rss>[/code]

Agora, para concluir, precisamos apenas passar todo o conteúdo do RSS para o navegador (depois de definir qual será o tipo de conteúdo que ele irá receber), colocando isso depois de definir o <strong>último <item></strong>:


[code language="php"]
// Define o tipo de conteúdo e o charset
header("content-type: application/rss+xml; charset=utf-8");

// Entrega o conteúdo do RSS completo:
echo $rss->asXML();
exit;
[/code]

--

Pode ser que você encontre problemas de <acronym title="Tipo de codificação"><em>charset</em></acronym> (UTF-8 x ISO-8859-1)... Procure sobre as funções <strong>utf8_encode()</strong> e <strong>utf8_decode()</strong> do PHP que elas irão te ajudar.

Se você quiser também pode criar um RSS baseado em uma consulta MySQL, inserindo vários <items> de uma vez... Veja um exemplo:


[code language="php"]
// Intanciamos/chamamos a classe
$rss = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><rss></rss>');
$rss->addAttribute('version', '2.0');

// Cria o elemento <channel> dentro de <rss>
$canal = $rss->addChild('channel');
// Adiciona sub-elementos ao elemento <channel>
$canal->addChild('title', 'Meu primeiro RSS');
$canal->addChild('link', 'http://www.meusite.com/');
$canal->addChild('description', 'Este é o meu primeiro RSS, uha!');

// Define a consulta MySQL
$sql = "SELECT * FROM `noticias` WHERE (`ativa` = 1) ORDER BY `cadastro` DESC";
$query = mysql_query($sql) OR die(mysql_error());

// Inclui um <item> para cada resultado encontrado
while ($dados = mysql_fetch_assoc($query)) {
$id = $dados['id'];
$titulo = $dados['titulo'];
$texto = $dados['texto'];

// Cria um elemento <item> dentro de <channel>
$item = $canal->addChild('item');
// Adiciona sub-elementos ao elemento <item>
$item->addChild('title', $titulo);
$item->addChild('link', 'http://www.meusite.com/artigos.php?id='.$id);
$item->addChild('description', $texto);
}

// Define o tipo de conteúdo e o charset
header("content-type: application/rss+xml; charset=utf-8");

// Entrega o conteúdo do RSS completo:
echo $rss->asXML();
exit;[/code]

--

<img style="margin: 0px; float: right;" src="http://validator.w3.org/feed/images/valid-rss.png" alt="" />Ahh, e pra quem for interessado e sistemático: <a href="http://validator.w3.org/feed/" target="_blank">validador de RSS do W3C</a>.

Espero que tenham gostado e que façam os seus XML's e RSS's com essa classe de agora em diante.. fica mais rápido!  :)

Abraços e até a próxima.

