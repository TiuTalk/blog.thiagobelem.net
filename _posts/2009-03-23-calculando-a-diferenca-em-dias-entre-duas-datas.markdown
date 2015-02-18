---
layout: post
title: Calculando a diferença em dias entre duas datas

date: '2009-03-23 19:11:02 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Fala pessoal! Hoje vou explicar como calcular a diferença (em dias) entre duas datas no PHP.</p>
<p>O processo é bem simples e se resume a criar o <abbr title="Quantidade de segundos que se passaram desde 1970 (a Era Unix)"><em>timestamp</em></abbr> dessas datas e depois calcular o número de dias baseando-se na quantidade de segundos entre as duas datas.</p>
<p>Vou mostrar como fazer o processo de duas formas pois, normalmente, trabalhos com datas em dois formatos: <strong>DD/MM/AAAA</strong> (padrão brasileiro) e <strong>AAAA-MM-DD</strong> (formato do MySQL).</p>
<p>Se alguém aí quiser ler um pouco mais sobre como trabalhar com datas no PHP é só dar uma olhada nesse post: <a href="/trabalhando-com-datas-no-php">Trabalhando com datas no PHP</a>.</p>
<p>Vamos ao primeiro exemplo que usa datas no formato <strong>DD/MM/AAAA</strong>:</p>
<p>[code language="php"]
<?php</p>
<p>// Define os valores a serem usados
$data_inicial = '23/03/2009';
$data_final = '04/11/2009';</p>
<p>// Cria uma função que retorna o timestamp de uma data no formato DD/MM/AAAA
function geraTimestamp($data) {
$partes = explode('/', $data);
return mktime(0, 0, 0, $partes[1], $partes[0], $partes[2]);
}</p>
<p>// Usa a função criada e pega o timestamp das duas datas:
$time_inicial = geraTimestamp($data_inicial);
$time_final = geraTimestamp($data_final);</p>
<p>// Calcula a diferença de segundos entre as duas datas:
$diferenca = $time_final - $time_inicial; // 19522800 segundos</p>
<p>// Calcula a diferença de dias
$dias = (int)floor( $diferenca / (60 * 60 * 24)); // 225 dias</p>
<p>// Exibe uma mensagem de resultado:
echo "A diferença entre as datas ".$data_inicial." e ".$data_final." é de <strong>".$dias."</strong> dias";</p>
<p>// A diferença entre as datas 23/03/2009 e 04/11/2009 é de 225 dias</p>
<p>?>
[/code]</p>
<p>Vou explicar de forma rápida: Primeiro criamos uma função para gerar o timestamp de uma data usando a função <strong>mktime()</strong> do PHP. Depois nós dividimos o número de segundos <span style="color: #888888;">(diferença das duas datas)</span> pelo número de segundos existentes em um dia <span style="color: #888888;">(60 * 60 * 24 = 86400)</span> e arredondamos o resultado usando a função <strong>floor()</strong>.</p>
<p>Essa aplicação pode parecer complicada pra alguns mas ela utiliza um passo-a-passo muito claro pra quem consegue entender o processo de se calcular a diferença de dias entre duas datas. É só pensar em como você pode fazer isso e vai descobrir que não há forma melhor. ;)</p>
<p>Com isso você já consegue calcular a diferença e se usar um pouquinho de criatividade pode calcular também a diferença de horas e minutos.</p>
<p>--</p>
<p>O exemplo do formato <strong>AAAA-MM-DD</strong> é mais simples:</p>
<p>[code language="php"]
<?php</p>
<p>// Define os valores a serem usados
$data_inicial = '2009-03-23';
$data_final = '2009-11-04';</p>
<p>// Usa a função strtotime() e pega o timestamp das duas datas:
$time_inicial = strtotime($data_inicial);
$time_final = strtotime($data_final);</p>
<p>// Calcula a diferença de segundos entre as duas datas:
$diferenca = $time_final - $time_inicial; // 19522800 segundos</p>
<p>// Calcula a diferença de dias
$dias = (int)floor( $diferenca / (60 * 60 * 24)); // 225 dias</p>
<p>// Exibe uma mensagem de resultado:
echo "A diferença entre as datas ".$data_inicial." e ".$data_final." é de <strong>".$dias."</strong> dias";</p>
<p>// A diferença entre as datas 23/03/2009 e 04/11/2009 é de 225 dias</p>
<p>?>
[/code]</p>
<p>Nesse exemplo não precisamos criar uma função pois a função <strong>strtotime()</strong> do PHP já converte uma data no formato <strong>AAAA-MM-DD</strong> em <em>timestamp</em>.</p>
<p><strong><span style="color: #ff0000;">Atenção: </span></strong>Não fiz nenhuma validação para caso as datas inseridas sejam inválidas ou a data final seja maior que a data inicial. Meu intuito era mostrar apenas como é o processo do calculo dessa diferença. ;)</p>
<p>Espero que essa aula tenha sido útil pra vocês... Qualquer dúvida ou sugestão é só comentar ou mandar um e-mail.</p>
<p>Até a próxima</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função <a href="http://br.php.net/explode" target="_blank">explode()</a></strong> » Divide uma string usando um separador</li>
<li><strong>Função <a href="http://br.php.net/mktime" target="_blank">mktime()</a></strong> » Gera um timestamp de uma data especificada</li>
<li><strong>Função <a href="http://br.php.net/floor" target="_blank">floor()</a></strong> » Arredonda valores fracionados para baixo</li>
<li><strong>Função <a href="http://br.php.net/strtotime" target="_blank">strtotime()</a></strong> » Converte datas textuais em timestamps</li>
</ul>
