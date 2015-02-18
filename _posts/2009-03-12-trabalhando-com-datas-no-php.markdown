---
layout: post
title: Trabalhando com datas no PHP

date: '2009-03-12 03:58:54 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
No PHP existem diversas funções para o tratamento de datas. Você pode exibir a data atual (antigas e futuras também) de várias formas. Usando a função <strong>date()</strong> do PHP é possível formatar a data atual de diversas formas, vamos a alguns parâmetros mais comuns que podem ser usados:

<p style="padding-left: 30px;"><strong>d</strong> - Dia do mês com 2 dígitos
<strong>D</strong> - Representação textual do dia (três letras: <em>Mon</em> até <em>Sun</em>)
<strong>m</strong> - Representação numérica do mês com 2 dígitos
<strong>M</strong> - Representação textual do mês (três letras: <em>Jan</em> a <em>Dec</em>)
<strong>y</strong> - Representação do ano com 2 dígitos
<strong>Y</strong> - Representação do ano com 4 dígitos
<strong>l</strong> <span style="color: #999999;">('L' minúsculo)</span> - Descrição do dia da semana (<em>Sunday</em> até <em>Saturday</em>)
<strong>h</strong> - Formato em 12 horas
<strong>H</strong> - Formato em 24 horas
<strong>i</strong> - Minutos com 2 dígitos
<strong>s</strong> - Segundos com 2 dígitos
<strong>A</strong> - AM ou PM

Mas onde você usa isso? Essas letras são argumentos da função date, veja alguns exemplos:


{% highlight text linenos %}
echo date('d/m/Y'); // Resultado: 12/03/2009
echo date('H:i:s'); // Resultado: 03:39:57
echo date('d/m h:i A'); // Resultado: 12/03 03:39 AM
{% endhighlight %}

Viram como é fácil?

No MySQL existem os tipos de coluna DATE e DATETIME que são para armazenar datas e datas com hora respectivamente. O formato de entrada de um campo DATE é <strong>AAAA-MM-DD</strong> e do DATETIME é <strong>AAAA-MM-DD HH:MM:SS</strong>. Pra usar a função <strong>date()</strong> e gerar datas no formato de entrada do MySQL é só fazer assim:


{% highlight text linenos %}
$data = date('Y-m-d'); // Formato DATE: 2009-03-12
$data = date('Y-m-d H:i:s') // Formato DATETIME: 2009-03-12 03:39:57
{% endhighlight %}

Uma função muito usada é a <strong>time()</strong>: ela retorna um valor chamada <strong>UNIX TIMESTAMP</strong> que é o número de segundos que se passaram desde 1970 até agora. É um número de 11 algarismos (até agora) e também serve como segundo argumento da função <strong>date()</strong> quando queremos formatar uma data antiga ou futura.


{% highlight text linenos %}
echo time(); // Mostra o timestamp atual: 1236844015

$timestamp = time(); // Salva o timestamp atual numa variável
echo date('d/m/Y H:i:s', $timestamp); // Exibe DD/MM/YYYY HH:MM:SS em função de um timestamp
{% endhighlight %}

Quando se precisa trabalhar com datas antigas e/ou futuras, uma função útil para ajudar a encontrar o timestamp é a <strong>mktime()</strong>, podemos usar ela da seguinte forma:


{% highlight text linenos %}
// Ordem dos argumentos do mktime(): hora, minuto, segundo, mes, dia e ano

$timestamp = mktime(20, 03, 58, 02, 09, 1993); // Gera o timestamp da data 09/02/1993 as 20:03:59
echo date('d/m ~ h:i', $timestamp); // Resultado: 09/02 ~ 20:03
{% endhighlight %}

--

Se você está pegando datas salvas no MySQL pode reparar que ela vem no formato AAAA-MM-DD, pra gerar o timestamp de uma data assim é só usar a função <strong>strtotime()</strong>, dessa maneira:


{% highlight text linenos %}
$data_mysql = '2009-03-12 03:54:21';
$timestamp = strtotime($data_mysql); // Gera o timestamp de $data_mysql
echo date('d/m/Y', $timestamp); // Resultado: 12/03/2009
{% endhighlight %}

Acredito que eu não tenha falado de nem metade de todas as funções para manipulação e controle de datas do PHP, mas essas são, sem dúvida, as mais importantes e mais usadas... Dê uma olhada na documentação (no fim deste post) de cada uma delas que você encontrará outros exemplos e formas de uso.

Abraços e até a próxima!

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função [date()](http://br2.php.net/manual/en/function.date.php)</strong> » Função para formatar datas</li>
<li><strong>Função [time()](http://br.php.net/time)</strong> » Retorna o UNIX TIMESTAMP atual</li>
<li><strong>Função [mktime()](http://br.php.net/mktime)</strong> » Cria um timestamp em função de seus argumentos (uma data específica)</li>
<li><strong>Função [strtotime()](http://br.php.net/strtotime)</strong> » Gera o timestamp de uma data em formato textual</li>
</ul>
