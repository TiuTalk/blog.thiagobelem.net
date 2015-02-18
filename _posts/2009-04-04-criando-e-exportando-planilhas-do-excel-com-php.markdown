---
layout: post
title: Criando e exportando planilhas do Excel com PHP

date: '2009-04-04 09:45:44 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Hoje vou ensinar como criar uma planilha do Excel (.xls) e enviá-la para Download com um script bem simples.


[code language="php"]
<?php
/*
* Criando e exportando planilhas do Excel
* http://blog.thiagobelem.net/
*/

// Definimos o nome do arquivo que será exportado
$arquivo = 'planilha.xls';

// Criamos uma tabela HTML com o formato da planilha
$html = '';
$html .= '<table>';
$html .= '<tr>';
$html .= '<td colspan="3">Planilha teste</tr>';
$html .= '</tr>';
$html .= '<tr>';
$html .= '<td><b>Coluna 1</b></td>';
$html .= '<td><b>Coluna 2</b></td>';
$html .= '<td><b>Coluna 3</b></td>';
$html .= '</tr>';
$html .= '<tr>';
$html .= '<td>L1C1</td>';
$html .= '<td>L1C2</td>';
$html .= '<td>L1C3</td>';
$html .= '</tr>';
$html .= '<tr>';
$html .= '<td>L2C1</td>';
$html .= '<td>L2C2</td>';
$html .= '<td>L2C3</td>';
$html .= '</tr>';
$html .= '</table>';

// Configurações header para forçar o download
header ("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header ("Last-Modified: " . gmdate("D,d M YH:i:s") . " GMT");
header ("Cache-Control: no-cache, must-revalidate");
header ("Pragma: no-cache");
header ("Content-type: application/x-msexcel");
header ("Content-Disposition: attachment; filename=\"{$arquivo}\"" );
header ("Content-Description: PHP Generated Data" );

// Envia o conteúdo do arquivo
echo $html;
exit;

?>
[/code]

Você pode repara que o script foi separado em duas partes: primeiro definimos uma tabela html que será o formato da planilha e depois, usando várias configurações header(), enviamos o conteúdo do arquivo para download.

Com um pouquinho mais de criatividade você pode fazer uma conexão ao banco de dados e preencher a tabela com registros.

Simples não? =)

