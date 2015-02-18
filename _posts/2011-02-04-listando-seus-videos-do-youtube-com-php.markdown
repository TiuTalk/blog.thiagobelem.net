---
layout: post
title: Listando seus vídeos do YouTube com PHP
excerpt: Com esse tutorial você poderá mostrar os seus últimos vídeos publicados no
  YouTube, no seu site de forma totalmente customizável.

date: '2011-02-04 12:51:30 -0200'
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
Hoje trago até vocês um tutorial bem simples: como listar seus últimos vídeos do YouTube utilizando PHP.

<h3>Pré-requisitos</h3>
Vamos precisar de um servidor com as seguintes extensões habilitadas:

<ul>
<li>[cURL](http://php.net/manual/book.curl.php)</li>
<li>[SimpleXML](http://php.net/manual/book.simplexml.php)</li>
</ul>
O <strong>SimpleXML</strong> já vem habilitado no PHP, mas o <strong>cURL</strong> normalmente não.. Se você contratou uma hospedagem compartilhada provavelmente ambos já estão habilitados.

Pra quem não conhece o <strong>cURL</strong> (ou precisa habilitá-lo), recomendo a leitura: [Tutorial básico de cURL – Instalação, configuração e uso](/tutorial-basico-de-curl-instalacao-configuracao-e-uso)

Se você receber a seguinte mensagem de erro, significa que seu cURL não está habilitado:

<blockquote>Fatal error: Call to undefined function curl_init()
</blockquote>
<h3>O código</h3>
O código para pegar os vídeos é bem simples, por isso vou colocá-lo inteiro sem explicá-lo passo-a-passo:


{% highlight php linenos %}
<?php
// Seu usuário do YouTube
$usuario = 'videosimprovaveis';

// URL do Feed RSS de vídeos de um usuário
$youTube_UserFeedURL = 'http://gdata.youtube.com/feeds/base/users/%s/uploads?orderby=updated&v=2';

// Usa cURL para pegar o XML do feed
$cURL = curl_init(sprintf($youTube_UserFeedURL, $usuario));
curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
curl_setopt($cURL, CURLOPT_FOLLOWLOCATION, true);
$resultado = curl_exec($cURL);
curl_close($cURL);

// Inicia o parseamento do XML com o SimpleXML
$xml = new SimpleXMLElement($resultado);

$videos = array();

// Passa por todos vídeos no RSS
foreach ($xml->entry AS $video) {
	$url = (string)$video->link['href'];

	// Quebra a URL do vídeo para pegar o ID
	parse_str(parse_url($url, PHP_URL_QUERY), $params);
	$id = $params['v'];

	// Monta um array com os dados do vídeo
	$videos[] = array(
		'id' => $id,
		'titulo' => (string)$video->title,
		'thumbnail' => 'http://i' . rand(1, 4) .'.ytimg.com/vi/'. $id .'/hqdefault.jpg',
		'url' => $url
	);
}

?>
{% endhighlight %}

Ao final desse código teremos o array <code>$videos</code> com a lista de vídeos do usuário... Para exibir o thumbnail de cada um dos vídeos devidamente linkado para o vídeo (no YouTube), podemos fazer assim:


{% highlight php linenos %}
<h1>Meus Vídeos</h1>

<ul>
	<?php foreach ($videos AS $video) { ?>
	<li>
		[](<?php echo $video['url'] ?>)
	</li>
	<?php } ?>
</ul>
{% endhighlight %}

Código-fonte do arquivo desse tutorial: [Snipplr](http://snipplr.com/view/48433/listando-seus-vdeos-do-youtube-com-php/)

Espero que tenham gostado!

