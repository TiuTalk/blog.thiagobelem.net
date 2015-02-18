---
layout: post
status: publish
published: true
title: Listando seus vídeos do YouTube com PHP
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Com esse tutorial você poderá mostrar os seus últimos vídeos publicados no
  YouTube, no seu site de forma totalmente customizável.
wordpress_id: 1395
wordpress_url: http://blog.thiagobelem.net/?p=1395
date: '2011-02-04 12:51:30 -0200'
date_gmt: '2011-02-04 14:51:30 -0200'
categories:
- PHP
- Tutoriais
- APIs
tags:
- PHP
- API
- cURL
- XML
- YouTube
- Feed RSS
- Simple XML
---
<p>Hoje trago até vocês um tutorial bem simples: como listar seus últimos vídeos do YouTube utilizando PHP.</p>
<h3>Pré-requisitos</h3>
<p>Vamos precisar de um servidor com as seguintes extensões habilitadas:</p>
<ul>
<li><a href="http://php.net/manual/book.curl.php">cURL</a></li>
<li><a href="http://php.net/manual/book.simplexml.php">SimpleXML</a></li>
</ul>
<p>O <strong>SimpleXML</strong> já vem habilitado no PHP, mas o <strong>cURL</strong> normalmente não.. Se você contratou uma hospedagem compartilhada provavelmente ambos já estão habilitados.</p>
<p>Pra quem não conhece o <strong>cURL</strong> (ou precisa habilitá-lo), recomendo a leitura: <a href="http://blog.thiagobelem.net/tutorial-basico-de-curl-instalacao-configuracao-e-uso/">Tutorial básico de cURL – Instalação, configuração e uso</a></p>
<p>Se você receber a seguinte mensagem de erro, significa que seu cURL não está habilitado:</p>
<blockquote><p>Fatal error: Call to undefined function curl_init()</p></blockquote>
<h3>O código</h3>
<p>O código para pegar os vídeos é bem simples, por isso vou colocá-lo inteiro sem explicá-lo passo-a-passo:</p>
<p>[code language="php"]<br />
&lt;?php<br />
// Seu usuário do YouTube<br />
$usuario = 'videosimprovaveis';</p>
<p>// URL do Feed RSS de vídeos de um usuário<br />
$youTube_UserFeedURL = 'http://gdata.youtube.com/feeds/base/users/%s/uploads?orderby=updated&amp;v=2';</p>
<p>// Usa cURL para pegar o XML do feed<br />
$cURL = curl_init(sprintf($youTube_UserFeedURL, $usuario));<br />
curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);<br />
curl_setopt($cURL, CURLOPT_FOLLOWLOCATION, true);<br />
$resultado = curl_exec($cURL);<br />
curl_close($cURL);</p>
<p>// Inicia o parseamento do XML com o SimpleXML<br />
$xml = new SimpleXMLElement($resultado);</p>
<p>$videos = array();</p>
<p>// Passa por todos vídeos no RSS<br />
foreach ($xml-&gt;entry AS $video) {<br />
	$url = (string)$video-&gt;link['href'];</p>
<p>	// Quebra a URL do vídeo para pegar o ID<br />
	parse_str(parse_url($url, PHP_URL_QUERY), $params);<br />
	$id = $params['v'];</p>
<p>	// Monta um array com os dados do vídeo<br />
	$videos[] = array(<br />
		'id' =&gt; $id,<br />
		'titulo' =&gt; (string)$video-&gt;title,<br />
		'thumbnail' =&gt; 'http://i' . rand(1, 4) .'.ytimg.com/vi/'. $id .'/hqdefault.jpg',<br />
		'url' =&gt; $url<br />
	);<br />
}</p>
<p>?&gt;<br />
[/code]</p>
<p>Ao final desse código teremos o array <code>$videos</code> com a lista de vídeos do usuário... Para exibir o thumbnail de cada um dos vídeos devidamente linkado para o vídeo (no YouTube), podemos fazer assim:</p>
<p>[code language="php"]<br />
&lt;h1&gt;Meus Vídeos&lt;/h1&gt;</p>
<p>&lt;ul&gt;<br />
	&lt;?php foreach ($videos AS $video) { ?&gt;<br />
	&lt;li&gt;<br />
		&lt;a href=&quot;&lt;?php echo $video['url'] ?&gt;&quot; title=&quot;&lt;?php echo $video['titulo'] ?&gt;&quot;&gt;&lt;img src=&quot;&lt;?php echo $video['thumbnail'] ?&gt;&quot; alt=&quot;&lt;?php echo $video['titulo'] ?&gt;&quot; width=&quot;150&quot; /&gt;&lt;/a&gt;<br />
	&lt;/li&gt;<br />
	&lt;?php } ?&gt;<br />
&lt;/ul&gt;<br />
[/code]</p>
<p>Código-fonte do arquivo desse tutorial: <a href="http://snipplr.com/view/48433/listando-seus-vdeos-do-youtube-com-php/">Snipplr</a></p>
<p>Espero que tenham gostado!</p>
