---
layout: post
status: publish
published: true
title: Função para validação de datas no PHP
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: 'Uma data pode vir em vários formatos: AAAA-MM-DD, DD/MM/AAAA, AAAAMMDD,
  DDMMAAAA e você precisa de uma função que te ajude a verificar se ela é válida ou
  inválida, independente do seu formato.'
wordpress_id: 492
wordpress_url: http://blog.thiagobelem.net/?p=492
date: '2009-05-18 20:35:53 -0300'
date_gmt: '2009-05-18 23:35:53 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Fala pessoal! :D</p>
<p>Hoje vou mostrar como fazer a validação do formato de uma data...</p>
<p>A lógica é bem simples: uma data pode vir em vários formatos: AAAA-MM-DD, DD/MM/AAAA, AAAAMMDD, DDMMAAAA e por aí vai... E você precisa de uma função que verifique se é uma data válida, independente do seu formato.</p>
<p>A função poderia ser assim:</p>
<p>[code='php']<?php<br />
/**<br />
* Validate a date<br />
*<br />
* @param    string    $data<br />
* @param    string    formato<br />
* @return    bool<br />
*/<br />
function validaData($data, $formato = 'DD/MM/AAAA') {<br />
switch($formato) {<br />
case 'DD-MM-AAAA':<br />
case 'DD/MM/AAAA':<br />
list($d, $m, $a) = preg_split('/[-./ ]/', $data);<br />
break;</p>
<p>case 'AAAA/MM/DD':<br />
case 'AAAA-MM-DD':<br />
list($a, $m, $d) = preg_split('/[-./ ]/', $data);<br />
break;</p>
<p>case 'AAAA/DD/MM':<br />
case 'AAAA-DD-MM':<br />
list($a, $d, $m) = preg_split('/[-./ ]/', $data);<br />
break;</p>
<p>case 'MM-DD-AAAA':<br />
case 'MM/DD/AAAA':<br />
list($m, $d, $a) = preg_split('/[-./ ]/', $data);<br />
break;</p>
<p>case 'AAAAMMDD':<br />
$a = substr($data, 0, 4);<br />
$m = substr($data, 4, 2);<br />
$d = substr($data, 6, 2);<br />
break;</p>
<p>case 'AAAADDMM':<br />
$a = substr($data, 0, 4);<br />
$d = substr($data, 4, 2);<br />
$m = substr($data, 6, 2);<br />
break;</p>
<p>default:<br />
throw new Exception( "Formato de data inválido");<br />
break;<br />
}<br />
return checkdate($m, $d, $a);<br />
}<br />
?>[/code]</p>
<p>Tá... mas o que essa função realmente faz?</p>
<p>Vamos lá... Criamos uma função que precisa de dois argumentos, a data a ser validada ($data) e o seu formato ($formato).. Definimos também um valor padrão para o segundo argumento.</p>
<p>Dentro da função nós fazemos um <strong>switch</strong>() que equivale (em alguns casos) a uma seqüência longa de ifs e elses... Cada bloco de <em>case</em> acontecerá apenas quando $formato for igual ao valor especificado no <em>case</em> (caso). Caso o formato não esteja especificado em nenhum case, é exibida uma mensagem de erro com o <strong>throw new Exception()</strong>.</p>
<p>Em cada case nós temos uma forma de "quebrar" a data e pegar cada uma das suas partes: dia ($d), mês ($m) e ano ($a)... Partes essas que serão verificadas usando a função <strong>checkdate() </strong>na última linha da função.</p>
<p>Por fim, a função retorna verdadeiro (true) ou falso (false)... Então podemos usá-la da seguinte maneira:</p>
<p>[code='php']<?php<br />
if (validaData('12/04/2009', 'DD/MM/AAAA')) {<br />
echo "Data valida!";<br />
} else {<br />
echo "Data invalida!";<br />
}<br />
// Data valida</p>
<p>echo "<br />";</p>
<p>if (validaData('20090412', 'AAAAMMDD')) {<br />
echo "Data valida!";<br />
} else {<br />
echo "Data invalida!";<br />
}<br />
// Data valida</p>
<p>echo "<br />";</p>
<p>if (validaData('04/12/2009', 'AAAA-MM-DD')) {<br />
echo "Data valida!";<br />
} else {<br />
echo "Data invalida!";<br />
}<br />
// Data invalida<br />
?>[/code]</p>
<p>Ahh.. essa função também te ajuda a validar datas vindas do MySQL (no formato AAAA-MM-DD).</p>
<p>E aí? Gostaram? :)</p>
