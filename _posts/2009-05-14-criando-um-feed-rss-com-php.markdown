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
<p>Boa noite pessoal!</p>
<p>Essa semana várias pessoas me pediram para (re)fazer um artigo ensinando como gerar um Feed RSS via PHP.. E é isso que vamos fazer hoje.</p>
<p>Pra tentar uma abordagem diferente dos outros artigos, eu vou fazer dizer o que você precisa fazer, passo-a-passo, e só depois coloco o código completo, será que dá certo assim? Afinal.. Fiz esse blog pra ensinar, e não pra mostrar que sei. ;)</p>
<p>Bom.. Como viram no meu tópico ensinando sobre <a title="Lendo um Feed RSS com PHP" href="http://blog.thiagobelem.net/php/lendo-um-feed-rss-com-php/" target="_blank">como ler um Feed RSS com PHP</a>, existe uma classe pronta do PHP chamada <strong>SimpleXMLElement</strong> e iremos usá-la para gerar o nosso Feed RSS.</p>
<p>Na descrição de RSS na Wikipédia temos:</p>
<p style="padding-left: 30px;"><em>O termo Feed vem do verbo em inglês "alimentar". Na Internet, este sistema também é conhecido como "<strong>RSS Feeds</strong>" (<strong>R</strong>DF <strong>S</strong>ite <strong>S</strong>ummary ou <strong>R</strong>eally <strong>S</strong>imple <strong>S</strong>yndication).</em></p>
<p style="padding-left: 30px;"><em>Na prática, Feeds são usados para que um usuário possa acompanhar os novos artigos e demais conteúdo de um site ou blog sem que precise visitar o site em si. Sempre que um novo conteúdo for publicado em determinado site, o "assinante do feed" será notificado da atualização e poderá ler parte dela imediatamente, direto no seu agregador de RSS.</em></p>
<p>--</p>
<p>Eu vou ensinar a fazer um Feed RSS com um item, e depois mostrarei um exemplo de como seria se estivéssemos pegando as notícias de um banco de dados. <strong>Atenção:</strong> o formato do RSS aqui criado segue os <a href="http://cyber.law.harvard.edu/rss/rss.html" target="_blank">padrões e especificações do RSS 2.0</a>.</p>
<p>Vamos ao que interessa... A classe <a href="http://www.php.net/manual/pt_BR/book.simplexml.php" target="_blank">SimpleXMLElement</a> já foi compilada junto com as versões atuais do PHP, então você não precisa instalar nada.. É só chamar a classe e sair brincando.</p>
<p>Primeiro chamamos a classe:</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>// Intanciamos/chamamos a classe<br />
$rss = new SimpleXMLElement('&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&lt;rss&gt;&lt;/rss&gt;');</p>
<p>?&gt;<br />
[/code]</p>
<p>Com isso iremos começar a criar uma estrutura XML com o formato que está sendo passado para a classe.</p>
<p>Agora iremos dizer que será um RSS versão 2.0, e para isso precisamos definir um atributo <strong>version</strong> do item &lt;rss&gt;, dessa forma:</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>// Intanciamos/chamamos a classe<br />
$rss = new SimpleXMLElement('&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&lt;rss&gt;&lt;/rss&gt;');</p>
<p>$rss-&gt;addAttribute('version', '2.0');</p>
<p>?&gt;<br />
[/code]</p>
<p>Até agora o nosso RSS tem um formato parecido com esse:</p>
<p>[code language="xml"]<br />
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br />
&lt;rss version=&quot;2.0&quot;&gt;</p>
<p>&lt;/rss&gt;<br />
[/code]</p>
<p>O próximo passo é definir o elemento <strong>&lt;channel&gt;</strong> (canal) que contem todos os dados do RSS e cada um dos itens/notícias... Dentro dele iremos colocar mais três elementos, que são o <strong>&lt;title&gt;</strong> (titulo do RSS), o <strong>&lt;link&gt;</strong> (do site ao qual o RSS pertence) e a <strong>&lt;description&gt;</strong> (descrição do conteúdo RSS):</p>
<p>[code language="php"]&lt;?php<br />
// Intanciamos/chamamos a classe<br />
$rss = new SimpleXMLElement('&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&lt;rss&gt;&lt;/rss&gt;');<br />
$rss-&gt;addAttribute('version', '2.0');</p>
<p>// Cria o elemento &lt;channel&gt; dentro de &lt;rss&gt;<br />
$canal = $rss-&gt;addChild('channel');<br />
// Adiciona sub-elementos ao elemento &lt;channel&gt;<br />
$canal-&gt;addChild('title', 'Meu primeiro RSS');<br />
$canal-&gt;addChild('link', 'http://www.meusite.com/');<br />
$canal-&gt;addChild('description', 'Este é o meu primeiro RSS, uha!');</p>
<p>?&gt;[/code]</p>
<p>Existem outros sub-elementos de channel, mas são todos opcionais... Veja a lista completa deles <a href="http://cyber.law.harvard.edu/rss/rss.html#optionalChannelElements" target="_blank">aqui</a>.</p>
<p>E com isso, o nosso RSS ficará com um formato assim:</p>
<p>[code language="xml"]&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br />
&lt;rss version=&quot;2.0&quot;&gt;<br />
&lt;channel&gt;<br />
&lt;title&gt;Meu primeiro RSS&lt;/title&gt;<br />
&lt;link&gt;http://www.meusite.com/&lt;/link&gt;<br />
&lt;description&gt;Este é o meu primeiro RSS, cheio de coisas legais!&lt;/description&gt;</p>
<p>&lt;/channel&gt;<br />
&lt;/rss&gt;[/code]</p>
<p>Estão percebendo a mágica do SimpleXMLElement? Ele vai criando um formato de XML perfeito pra você usar com quase qualquer coisa! :D</p>
<p>Bom... Já temos o formato básico do RSS.. Agora é só adicionar dois itens de exemplo e o nosso RSS estará quase pronto:</p>
<p>[code language="php"]&lt;?php<br />
// Intanciamos/chamamos a classe<br />
$rss = new SimpleXMLElement('&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&lt;rss&gt;&lt;/rss&gt;');<br />
$rss-&gt;addAttribute('version', '2.0');</p>
<p>// Cria o elemento &lt;channel&gt; dentro de &lt;rss&gt;<br />
$canal = $rss-&gt;addChild('channel');<br />
// Adiciona sub-elementos ao elemento &lt;channel&gt;<br />
$canal-&gt;addChild('title', 'Meu primeiro RSS');<br />
$canal-&gt;addChild('link', 'http://www.meusite.com/');<br />
$canal-&gt;addChild('description', 'Este é o meu primeiro RSS, uha!');</p>
<p>// Cria um elemento &lt;item&gt; dentro de &lt;channel&gt;<br />
$item = $canal-&gt;addChild('item');<br />
// Adiciona sub-elementos ao elemento &lt;item&gt;<br />
$item-&gt;addChild('title', 'Meu segundo artigo');<br />
$item-&gt;addChild('link', 'http://www.meusite.com/artigos.php?id=2');<br />
$item-&gt;addChild('description', 'Esse é um resumo do meu segundo artigo.');</p>
<p>// Cria outro elemento &lt;item&gt; dentro de &lt;channel&gt;<br />
$item = $canal-&gt;addChild('item');<br />
// Adiciona sub-elementos ao elemento &lt;item&gt;<br />
$item-&gt;addChild('title', 'Meu primeiro artigo');<br />
$item-&gt;addChild('link', 'http://www.meusite.com/artigos.php?id=1');<br />
$item-&gt;addChild('description', 'Esse é um resumo do meu primeiro artigo.');<br />
$item-&gt;addChild('pubDate', date('r'));</p>
<p>?&gt;[/code]</p>
<p>Cada <strong>&lt;item&gt;</strong> representa uma entrada do RSS, seria cada uma das notícias de um site de notícias, ou cada um dos artigos de um blog ou cada um dos apartamentos do site de uma imobiliária. A ordem dos <strong>&lt;item&gt;s</strong> deve ser é do mais recente para o mais antigo.</p>
<p>Os três sub-elementos obrigatórios dos <strong>&lt;item&gt;s</strong> são: o <strong>&lt;title&gt;</strong>, o <strong>&lt;link&gt;</strong>e o <strong>&lt;description&gt;</strong>... Existem vários outros sub-elemtos (<a href="http://cyber.law.harvard.edu/rss/rss.html#hrelementsOfLtitemgt" target="_blank">lista</a>), um exemplo comum é o <strong>&lt;pubDate&gt;</strong> (coloquei ele no 2º item) que representa a data de publicação do &lt;item&gt; em questão, e segue o formato <strong>RFC 733</strong>, por exemplo: <em>Thu, 21 Dec 2000 16:01:07 +0200</em>. Esse formato pode ser obtido pelo parâmetro <span style="color: #0000ff;"><strong>r</strong></span> passado para a função date() do PHP.</p>
<p>Depois de inserir os dois itens o formato do nosso RSS está concluído, ficando assim:</p>
<p>[code language="xml"]&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<br />
&lt;rss version=&quot;2.0&quot;&gt;<br />
&lt;channel&gt;<br />
&lt;title&gt;Meu primeiro RSS&lt;/title&gt;<br />
&lt;link&gt;http://www.meusite.com/&lt;/link&gt;<br />
&lt;description&gt;Este é o meu primeiro RSS, cheio de coisas legais!&lt;/description&gt;</p>
<p>&lt;item&gt;<br />
&lt;title&gt;Meu segundo artigo&lt;/title&gt;<br />
&lt;link&gt;http://www.meusite.com/artigos.php?id=2&lt;/link&gt;<br />
&lt;description&gt;Esse é um resumo do meu segundo artigo.&lt;/description&gt;<br />
&lt;/item&gt;</p>
<p>&lt;item&gt;<br />
&lt;title&gt;Meu primeiro artigo&lt;/title&gt;<br />
&lt;link&gt;http://www.meusite.com/artigos.php?id=1&lt;/link&gt;<br />
&lt;description&gt;Esse é um resumo do meu primeiro artigo.&lt;/description&gt;<br />
&lt;pubDate&gt;Thu, 21 Dec 2000 16:01:07 +0200&lt;/pubDate&gt;<br />
&lt;/item&gt;</p>
<p>&lt;/channel&gt;<br />
&lt;/rss&gt;[/code]</p>
<p>Agora, para concluir, precisamos apenas passar todo o conteúdo do RSS para o navegador (depois de definir qual será o tipo de conteúdo que ele irá receber), colocando isso depois de definir o <strong>último &lt;item&gt;</strong>:</p>
<p>[code language="php"]<br />
// Define o tipo de conteúdo e o charset<br />
header(&quot;content-type: application/rss+xml; charset=utf-8&quot;);</p>
<p>// Entrega o conteúdo do RSS completo:<br />
echo $rss-&gt;asXML();<br />
exit;<br />
[/code]</p>
<p>--</p>
<p>Pode ser que você encontre problemas de <acronym title="Tipo de codificação"><em>charset</em></acronym> (UTF-8 x ISO-8859-1)... Procure sobre as funções <strong>utf8_encode()</strong> e <strong>utf8_decode()</strong> do PHP que elas irão te ajudar.</p>
<p>Se você quiser também pode criar um RSS baseado em uma consulta MySQL, inserindo vários &lt;items&gt; de uma vez... Veja um exemplo:</p>
<p>[code language="php"]<br />
// Intanciamos/chamamos a classe<br />
$rss = new SimpleXMLElement('&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&lt;rss&gt;&lt;/rss&gt;');<br />
$rss-&gt;addAttribute('version', '2.0');</p>
<p>// Cria o elemento &lt;channel&gt; dentro de &lt;rss&gt;<br />
$canal = $rss-&gt;addChild('channel');<br />
// Adiciona sub-elementos ao elemento &lt;channel&gt;<br />
$canal-&gt;addChild('title', 'Meu primeiro RSS');<br />
$canal-&gt;addChild('link', 'http://www.meusite.com/');<br />
$canal-&gt;addChild('description', 'Este é o meu primeiro RSS, uha!');</p>
<p>// Define a consulta MySQL<br />
$sql = &quot;SELECT * FROM `noticias` WHERE (`ativa` = 1) ORDER BY `cadastro` DESC&quot;;<br />
$query = mysql_query($sql) OR die(mysql_error());</p>
<p>// Inclui um &lt;item&gt; para cada resultado encontrado<br />
while ($dados = mysql_fetch_assoc($query)) {<br />
$id = $dados['id'];<br />
$titulo = $dados['titulo'];<br />
$texto = $dados['texto'];</p>
<p>// Cria um elemento &lt;item&gt; dentro de &lt;channel&gt;<br />
$item = $canal-&gt;addChild('item');<br />
// Adiciona sub-elementos ao elemento &lt;item&gt;<br />
$item-&gt;addChild('title', $titulo);<br />
$item-&gt;addChild('link', 'http://www.meusite.com/artigos.php?id='.$id);<br />
$item-&gt;addChild('description', $texto);<br />
}</p>
<p>// Define o tipo de conteúdo e o charset<br />
header(&quot;content-type: application/rss+xml; charset=utf-8&quot;);</p>
<p>// Entrega o conteúdo do RSS completo:<br />
echo $rss-&gt;asXML();<br />
exit;[/code]</p>
<p>--</p>
<p><img style="margin: 0px; float: right;" src="http://validator.w3.org/feed/images/valid-rss.png" alt="" />Ahh, e pra quem for interessado e sistemático: <a href="http://validator.w3.org/feed/" target="_blank">validador de RSS do W3C</a>.</p>
<p>Espero que tenham gostado e que façam os seus XML's e RSS's com essa classe de agora em diante.. fica mais rápido!  :)</p>
<p>Abraços e até a próxima.</p>
