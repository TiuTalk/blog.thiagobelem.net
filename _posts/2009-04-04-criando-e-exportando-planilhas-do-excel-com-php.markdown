---
layout: post
title: Criando e exportando planilhas do Excel com PHP

date: '2009-04-04 09:45:44 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Hoje vou ensinar como criar uma planilha do Excel (.xls) e enviá-la para Download com um script bem simples.</p>
<p>[code language="php"]<?php<br />
/*<br />
* Criando e exportando planilhas do Excel<br />
* http://blog.thiagobelem.net/<br />
*/</p>
<p>// Definimos o nome do arquivo que será exportado<br />
$arquivo = 'planilha.xls';</p>
<p>// Criamos uma tabela HTML com o formato da planilha<br />
$html = '';<br />
$html .= '<table>';<br />
$html .= '<tr>';<br />
$html .= '<td colspan="3">Planilha teste</tr>';<br />
$html .= '</tr>';<br />
$html .= '<tr>';<br />
$html .= '<td><b>Coluna 1</b></td>';<br />
$html .= '<td><b>Coluna 2</b></td>';<br />
$html .= '<td><b>Coluna 3</b></td>';<br />
$html .= '</tr>';<br />
$html .= '<tr>';<br />
$html .= '<td>L1C1</td>';<br />
$html .= '<td>L1C2</td>';<br />
$html .= '<td>L1C3</td>';<br />
$html .= '</tr>';<br />
$html .= '<tr>';<br />
$html .= '<td>L2C1</td>';<br />
$html .= '<td>L2C2</td>';<br />
$html .= '<td>L2C3</td>';<br />
$html .= '</tr>';<br />
$html .= '</table>';</p>
<p>// Configurações header para forçar o download<br />
header ("Expires: Mon, 26 Jul 1997 05:00:00 GMT");<br />
header ("Last-Modified: " . gmdate("D,d M YH:i:s") . " GMT");<br />
header ("Cache-Control: no-cache, must-revalidate");<br />
header ("Pragma: no-cache");<br />
header ("Content-type: application/x-msexcel");<br />
header ("Content-Disposition: attachment; filename=\"{$arquivo}\"" );<br />
header ("Content-Description: PHP Generated Data" );</p>
<p>// Envia o conteúdo do arquivo<br />
echo $html;<br />
exit;</p>
<p>?>[/code]</p>
<p>Você pode repara que o script foi separado em duas partes: primeiro definimos uma tabela html que será o formato da planilha e depois, usando várias configurações header(), enviamos o conteúdo do arquivo para download.</p>
<p>Com um pouquinho mais de criatividade você pode fazer uma conexão ao banco de dados e preencher a tabela com registros.</p>
<p>Simples não? =)</p>
