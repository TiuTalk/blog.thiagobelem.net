---
layout: post
title: Trabalhando com datas no PHP

date: '2009-03-12 03:58:54 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>No PHP existem diversas funções para o tratamento de datas. Você pode exibir a data atual (antigas e futuras também) de várias formas. Usando a função <strong>date()</strong> do PHP é possível formatar a data atual de diversas formas, vamos a alguns parâmetros mais comuns que podem ser usados:</p>
<p style="padding-left: 30px;"><strong>d</strong> - Dia do mês com 2 dígitos<br />
<strong>D</strong> - Representação textual do dia (três letras: <em>Mon</em> até <em>Sun</em>)<br />
<strong>m</strong> - Representação numérica do mês com 2 dígitos<br />
<strong>M</strong> - Representação textual do mês (três letras: <em>Jan</em> a <em>Dec</em>)<br />
<strong>y</strong> - Representação do ano com 2 dígitos<br />
<strong>Y</strong> - Representação do ano com 4 dígitos<br />
<strong>l</strong> <span style="color: #999999;">('L' minúsculo)</span> - Descrição do dia da semana (<em>Sunday</em> até <em>Saturday</em>)<br />
<strong>h</strong> - Formato em 12 horas<br />
<strong>H</strong> - Formato em 24 horas<br />
<strong>i</strong> - Minutos com 2 dígitos<br />
<strong>s</strong> - Segundos com 2 dígitos<br />
<strong>A</strong> - AM ou PM</p>
<p>Mas onde você usa isso? Essas letras são argumentos da função date, veja alguns exemplos:</p>
<p>[code='php']<br />
echo date('d/m/Y'); // Resultado: 12/03/2009<br />
echo date('H:i:s'); // Resultado: 03:39:57<br />
echo date('d/m h:i A'); // Resultado: 12/03 03:39 AM<br />
[/code]</p>
<p>Viram como é fácil?</p>
<p>No MySQL existem os tipos de coluna DATE e DATETIME que são para armazenar datas e datas com hora respectivamente. O formato de entrada de um campo DATE é <strong>AAAA-MM-DD</strong> e do DATETIME é <strong>AAAA-MM-DD HH:MM:SS</strong>. Pra usar a função <strong>date()</strong> e gerar datas no formato de entrada do MySQL é só fazer assim:</p>
<p>[code='php']<br />
$data = date('Y-m-d'); // Formato DATE: 2009-03-12<br />
$data = date('Y-m-d H:i:s') // Formato DATETIME: 2009-03-12 03:39:57<br />
[/code]</p>
<p>Uma função muito usada é a <strong>time()</strong>: ela retorna um valor chamada <strong>UNIX TIMESTAMP</strong> que é o número de segundos que se passaram desde 1970 até agora. É um número de 11 algarismos (até agora) e também serve como segundo argumento da função <strong>date()</strong> quando queremos formatar uma data antiga ou futura.</p>
<p>[code='php']<br />
echo time(); // Mostra o timestamp atual: 1236844015</p>
<p>$timestamp = time(); // Salva o timestamp atual numa variável<br />
echo date('d/m/Y H:i:s', $timestamp); // Exibe DD/MM/YYYY HH:MM:SS em função de um timestamp<br />
[/code]</p>
<p>Quando se precisa trabalhar com datas antigas e/ou futuras, uma função útil para ajudar a encontrar o timestamp é a <strong>mktime()</strong>, podemos usar ela da seguinte forma:</p>
<p>[code='php']<br />
// Ordem dos argumentos do mktime(): hora, minuto, segundo, mes, dia e ano</p>
<p>$timestamp = mktime(20, 03, 58, 02, 09, 1993); // Gera o timestamp da data 09/02/1993 as 20:03:59<br />
echo date('d/m ~ h:i', $timestamp); // Resultado: 09/02 ~ 20:03<br />
[/code]</p>
<p>--</p>
<p>Se você está pegando datas salvas no MySQL pode reparar que ela vem no formato AAAA-MM-DD, pra gerar o timestamp de uma data assim é só usar a função <strong>strtotime()</strong>, dessa maneira:</p>
<p>[code='php']<br />
$data_mysql = '2009-03-12 03:54:21';<br />
$timestamp = strtotime($data_mysql); // Gera o timestamp de $data_mysql<br />
echo date('d/m/Y', $timestamp); // Resultado: 12/03/2009<br />
[/code]</p>
<p>Acredito que eu não tenha falado de nem metade de todas as funções para manipulação e controle de datas do PHP, mas essas são, sem dúvida, as mais importantes e mais usadas... Dê uma olhada na documentação (no fim deste post) de cada uma delas que você encontrará outros exemplos e formas de uso.</p>
<p>Abraços e até a próxima!</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função <a href="http://br2.php.net/manual/en/function.date.php" target="_blank">date()</a></strong> » Função para formatar datas</li>
<li><strong>Função <a href="http://br.php.net/time" target="_blank">time()</a></strong> » Retorna o UNIX TIMESTAMP atual</li>
<li><strong>Função <a href="http://br.php.net/mktime" target="_blank">mktime()</a></strong> » Cria um timestamp em função de seus argumentos (uma data específica)</li>
<li><strong>Função <a href="http://br.php.net/strtotime" target="_blank">strtotime()</a></strong> » Gera o timestamp de uma data em formato textual</li>
</ul>
