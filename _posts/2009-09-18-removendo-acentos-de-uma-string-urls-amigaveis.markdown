---
layout: post
title: Removendo acentos de uma string – URLs amigáveis
excerpt: Veja o código de uma função que te ajudará a remover todos os acentos de
  uma string, podendo ser usada para gerar o slug em uma URL amigável. A função se
  baseia no código ASCII de cada caractere e por isso funciona em qualquer ambiente.

date: '2009-09-18 12:48:09 -0300'
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
Hoje vou mostrar um código bem simples de uma função que eu criei para remover acentos de uma string...

Essa função é muito útil quando queremos trabalhar com URLs amigáveis e precisamos passar o <em><strong>slug</strong></em> (versão sem acento, espaço e caracteres especiais de uma string) para uma URL.

Veja como é simples usar a função:


[code language="php"]// Apenas remove os acentos
echo removeAcentos(' [Resolvido] » Problemas na conversão de página html');
// [resolvido] » problemas na conversao de pagina html[/code]


[code language="php"]// Cria um slug da string
echo removeAcentos(' [Resolvido] » Problemas na conversão de página html', '-');
// resolvido-problemas-na-conversao-de-pagina-html[/code]

O segundo parâmetro da função é o caractere que será usado no slug substituindo espaços e caracteres especiais.

Vamos ao código da função:


[code language="php"]/***
 * Função para remover acentos de uma string
 *
 * @autor Thiago Belem <contato@thiagobelem.net>
 */
function removeAcentos($string, $slug = false) {
	$string = strtolower($string);

	// Código ASCII das vogais
	$ascii['a'] = range(224, 230);
	$ascii['e'] = range(232, 235);
	$ascii['i'] = range(236, 239);
	$ascii['o'] = array_merge(range(242, 246), array(240, 248));
	$ascii['u'] = range(249, 252);

	// Código ASCII dos outros caracteres
	$ascii['b'] = array(223);
	$ascii['c'] = array(231);
	$ascii['d'] = array(208);
	$ascii['n'] = array(241);
	$ascii['y'] = array(253, 255);

	foreach ($ascii as $key=>$item) {
		$acentos = '';
		foreach ($item AS $codigo) $acentos .= chr($codigo);
		$troca[$key] = '/['.$acentos.']/i';
	}

	$string = preg_replace(array_values($troca), array_keys($troca), $string);

	// Slug?
	if ($slug) {
		// Troca tudo que não for letra ou número por um caractere ($slug)
		$string = preg_replace('/[^a-z0-9]/i', $slug, $string);
		// Tira os caracteres ($slug) repetidos
		$string = preg_replace('/' . $slug . '{2,}/i', $slug, $string);
		$string = trim($string, $slug);
	}

	return $string;
}[/code]

Como vocês podem ver, no começo da função, entre as linhas 9 e 21 é onde definimos os códigos ASCII de cada acento/caractere especial que será convertido por sua letra... Depois nós rodamos um foreach e montamos as ERs (expressões regulares) para a substituição e fazemos toda a troca.

A vantagem de usar o código ASCII de cada caractere é que não importa em qual codificação seu arquivo está salvo, ela vai funcionar!

Caso você queira fazer a substituição em strings com mais de uma linha você precisa trocar onde tem "/i" por "/mi" nas linhas 26, 34 e 36.

Espero que tenham gostado! :)

<strong style="background: gray; color: yellow">Update:</strong> Se a sua string estiver codificada em UTF-8 você precisa usar a <strong>utf8_decode()</strong> antes de passar a string pra função.

