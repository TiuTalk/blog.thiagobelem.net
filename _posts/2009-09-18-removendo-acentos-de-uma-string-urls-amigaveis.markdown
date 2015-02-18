---
layout: post
status: publish
published: true
title: Removendo acentos de uma string – URLs amigáveis
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Veja o código de uma função que te ajudará a remover todos os acentos de
  uma string, podendo ser usada para gerar o slug em uma URL amigável. A função se
  baseia no código ASCII de cada caractere e por isso funciona em qualquer ambiente.
wordpress_id: 645
wordpress_url: http://blog.thiagobelem.net/?p=645
date: '2009-09-18 12:48:09 -0300'
date_gmt: '2009-09-18 15:48:09 -0300'
categories:
- PHP
- Tutoriais
- SEO
tags:
- PHP
- SEO
- URLs Amigáveis
- Friendly URLs
- Slug
---
<p>Hoje vou mostrar um código bem simples de uma função que eu criei para remover acentos de uma string...</p>
<p>Essa função é muito útil quando queremos trabalhar com URLs amigáveis e precisamos passar o <em><strong>slug</strong></em> (versão sem acento, espaço e caracteres especiais de uma string) para uma URL.</p>
<p>Veja como é simples usar a função:</p>
<p>[code language="php"]// Apenas remove os acentos<br />
echo removeAcentos(' [Resolvido] » Problemas na conversão de página html');<br />
// [resolvido] » problemas na conversao de pagina html[/code]</p>
<p>[code language="php"]// Cria um slug da string<br />
echo removeAcentos(' [Resolvido] » Problemas na conversão de página html', '-');<br />
// resolvido-problemas-na-conversao-de-pagina-html[/code]</p>
<p>O segundo parâmetro da função é o caractere que será usado no slug substituindo espaços e caracteres especiais.</p>
<p>Vamos ao código da função:</p>
<p>[code language="php"]/***<br />
 * Função para remover acentos de uma string<br />
 *<br />
 * @autor Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
 */<br />
function removeAcentos($string, $slug = false) {<br />
	$string = strtolower($string);</p>
<p>	// Código ASCII das vogais<br />
	$ascii['a'] = range(224, 230);<br />
	$ascii['e'] = range(232, 235);<br />
	$ascii['i'] = range(236, 239);<br />
	$ascii['o'] = array_merge(range(242, 246), array(240, 248));<br />
	$ascii['u'] = range(249, 252);</p>
<p>	// Código ASCII dos outros caracteres<br />
	$ascii['b'] = array(223);<br />
	$ascii['c'] = array(231);<br />
	$ascii['d'] = array(208);<br />
	$ascii['n'] = array(241);<br />
	$ascii['y'] = array(253, 255);</p>
<p>	foreach ($ascii as $key=&gt;$item) {<br />
		$acentos = '';<br />
		foreach ($item AS $codigo) $acentos .= chr($codigo);<br />
		$troca[$key] = '/['.$acentos.']/i';<br />
	}</p>
<p>	$string = preg_replace(array_values($troca), array_keys($troca), $string);</p>
<p>	// Slug?<br />
	if ($slug) {<br />
		// Troca tudo que não for letra ou número por um caractere ($slug)<br />
		$string = preg_replace('/[^a-z0-9]/i', $slug, $string);<br />
		// Tira os caracteres ($slug) repetidos<br />
		$string = preg_replace('/' . $slug . '{2,}/i', $slug, $string);<br />
		$string = trim($string, $slug);<br />
	}</p>
<p>	return $string;<br />
}[/code]</p>
<p>Como vocês podem ver, no começo da função, entre as linhas 9 e 21 é onde definimos os códigos ASCII de cada acento/caractere especial que será convertido por sua letra... Depois nós rodamos um foreach e montamos as ERs (expressões regulares) para a substituição e fazemos toda a troca.</p>
<p>A vantagem de usar o código ASCII de cada caractere é que não importa em qual codificação seu arquivo está salvo, ela vai funcionar!</p>
<p>Caso você queira fazer a substituição em strings com mais de uma linha você precisa trocar onde tem "/i" por "/mi" nas linhas 26, 34 e 36.</p>
<p>Espero que tenham gostado! :)</p>
<p><strong style="background: gray; color: yellow">Update:</strong> Se a sua string estiver codificada em UTF-8 você precisa usar a <strong>utf8_decode()</strong> antes de passar a string pra função.</p>
