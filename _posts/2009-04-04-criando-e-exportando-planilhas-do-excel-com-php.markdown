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
<p>[code language="php"]&lt;?php<br />
/*<br />
* Criando e exportando planilhas do Excel<br />
* http://blog.thiagobelem.net/<br />
*/</p>
<p>// Definimos o nome do arquivo que será exportado<br />
$arquivo = 'planilha.xls';</p>
<p>// Criamos uma tabela HTML com o formato da planilha<br />
$html = '';<br />
$html .= '&lt;table&gt;';<br />
$html .= '&lt;tr&gt;';<br />
$html .= '&lt;td colspan=&quot;3&quot;&gt;Planilha teste&lt;/tr&gt;';<br />
$html .= '&lt;/tr&gt;';<br />
$html .= '&lt;tr&gt;';<br />
$html .= '&lt;td&gt;&lt;b&gt;Coluna 1&lt;/b&gt;&lt;/td&gt;';<br />
$html .= '&lt;td&gt;&lt;b&gt;Coluna 2&lt;/b&gt;&lt;/td&gt;';<br />
$html .= '&lt;td&gt;&lt;b&gt;Coluna 3&lt;/b&gt;&lt;/td&gt;';<br />
$html .= '&lt;/tr&gt;';<br />
$html .= '&lt;tr&gt;';<br />
$html .= '&lt;td&gt;L1C1&lt;/td&gt;';<br />
$html .= '&lt;td&gt;L1C2&lt;/td&gt;';<br />
$html .= '&lt;td&gt;L1C3&lt;/td&gt;';<br />
$html .= '&lt;/tr&gt;';<br />
$html .= '&lt;tr&gt;';<br />
$html .= '&lt;td&gt;L2C1&lt;/td&gt;';<br />
$html .= '&lt;td&gt;L2C2&lt;/td&gt;';<br />
$html .= '&lt;td&gt;L2C3&lt;/td&gt;';<br />
$html .= '&lt;/tr&gt;';<br />
$html .= '&lt;/table&gt;';</p>
<p>// Configurações header para forçar o download<br />
header (&quot;Expires: Mon, 26 Jul 1997 05:00:00 GMT&quot;);<br />
header (&quot;Last-Modified: &quot; . gmdate(&quot;D,d M YH:i:s&quot;) . &quot; GMT&quot;);<br />
header (&quot;Cache-Control: no-cache, must-revalidate&quot;);<br />
header (&quot;Pragma: no-cache&quot;);<br />
header (&quot;Content-type: application/x-msexcel&quot;);<br />
header (&quot;Content-Disposition: attachment; filename=\&quot;{$arquivo}\&quot;&quot; );<br />
header (&quot;Content-Description: PHP Generated Data&quot; );</p>
<p>// Envia o conteúdo do arquivo<br />
echo $html;<br />
exit;</p>
<p>?&gt;[/code]</p>
<p>Você pode repara que o script foi separado em duas partes: primeiro definimos uma tabela html que será o formato da planilha e depois, usando várias configurações header(), enviamos o conteúdo do arquivo para download.</p>
<p>Com um pouquinho mais de criatividade você pode fazer uma conexão ao banco de dados e preencher a tabela com registros.</p>
<p>Simples não? =)</p>
