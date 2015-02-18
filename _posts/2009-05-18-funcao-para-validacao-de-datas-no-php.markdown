---
layout: post
title: Função para validação de datas no PHP
excerpt: 'Uma data pode vir em vários formatos: AAAA-MM-DD, DD/MM/AAAA, AAAAMMDD,
  DDMMAAAA e você precisa de uma função que te ajude a verificar se ela é válida ou
  inválida, independente do seu formato.'

date: '2009-05-18 20:35:53 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Fala pessoal! :D

Hoje vou mostrar como fazer a validação do formato de uma data...

A lógica é bem simples: uma data pode vir em vários formatos: AAAA-MM-DD, DD/MM/AAAA, AAAAMMDD, DDMMAAAA e por aí vai... E você precisa de uma função que verifique se é uma data válida, independente do seu formato.

A função poderia ser assim:


{% highlight php linenos %}
<?php
/**
* Validate a date
*
* @param    string    $data
* @param    string    formato
* @return    bool
*/
function validaData($data, $formato = 'DD/MM/AAAA') {
switch($formato) {
case 'DD-MM-AAAA':
case 'DD/MM/AAAA':
list($d, $m, $a) = preg_split('/[-./ ]/', $data);
break;

case 'AAAA/MM/DD':
case 'AAAA-MM-DD':
list($a, $m, $d) = preg_split('/[-./ ]/', $data);
break;

case 'AAAA/DD/MM':
case 'AAAA-DD-MM':
list($a, $d, $m) = preg_split('/[-./ ]/', $data);
break;

case 'MM-DD-AAAA':
case 'MM/DD/AAAA':
list($m, $d, $a) = preg_split('/[-./ ]/', $data);
break;

case 'AAAAMMDD':
$a = substr($data, 0, 4);
$m = substr($data, 4, 2);
$d = substr($data, 6, 2);
break;

case 'AAAADDMM':
$a = substr($data, 0, 4);
$d = substr($data, 4, 2);
$m = substr($data, 6, 2);
break;

default:
throw new Exception( "Formato de data inválido");
break;
}
return checkdate($m, $d, $a);
}
?>
{% endhighlight %}

Tá... mas o que essa função realmente faz?

Vamos lá... Criamos uma função que precisa de dois argumentos, a data a ser validada ($data) e o seu formato ($formato).. Definimos também um valor padrão para o segundo argumento.

Dentro da função nós fazemos um <strong>switch</strong>() que equivale (em alguns casos) a uma seqüência longa de ifs e elses... Cada bloco de <em>case</em> acontecerá apenas quando $formato for igual ao valor especificado no <em>case</em> (caso). Caso o formato não esteja especificado em nenhum case, é exibida uma mensagem de erro com o <strong>throw new Exception()</strong>.

Em cada case nós temos uma forma de "quebrar" a data e pegar cada uma das suas partes: dia ($d), mês ($m) e ano ($a)... Partes essas que serão verificadas usando a função <strong>checkdate() </strong>na última linha da função.

Por fim, a função retorna verdadeiro (true) ou falso (false)... Então podemos usá-la da seguinte maneira:


{% highlight php linenos %}
<?php
if (validaData('12/04/2009', 'DD/MM/AAAA')) {
echo "Data valida!";
} else {
echo "Data invalida!";
}
// Data valida

echo "";

if (validaData('20090412', 'AAAAMMDD')) {
echo "Data valida!";
} else {
echo "Data invalida!";
}
// Data valida

echo "";

if (validaData('04/12/2009', 'AAAA-MM-DD')) {
echo "Data valida!";
} else {
echo "Data invalida!";
}
// Data invalida
?>
{% endhighlight %}

Ahh.. essa função também te ajuda a validar datas vindas do MySQL (no formato AAAA-MM-DD).

E aí? Gostaram? :)

