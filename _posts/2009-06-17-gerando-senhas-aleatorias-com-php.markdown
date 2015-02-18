---
layout: post
status: publish
published: true
title: Gerando senhas aleatórias com PHP
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aprenda o passo-a-passo para criar uma função que gera senhas aleatórias
  contendo (opcionalmente) números, letras maiúsculas e minúsculas e simbolos... Do
  tamanho que você desejar. :)
wordpress_id: 530
wordpress_url: http://blog.thiagobelem.net/?p=530
date: '2009-06-17 14:39:02 -0300'
date_gmt: '2009-06-17 17:39:02 -0300'
categories:
- PHP
- Tutoriais
- Segurança
tags:
- PHP
- Senhas
- Random Password
- Senhas Aleatórias
---
<p>Hoje vou falar de um script com uma função simples, mas <strong>muito útil</strong>: gerar senhas aleatórias.</p>
<p>Você vai poder usar ele, por exemplo, para gerar uma senha nova quando o usuário esqueceu sua senha, ou simplesmente gerar uma senha para um cadastro onde o usuário não define a sua senha.</p>
<p>Vou explicar o passo-a-passo pra criar a função que permitirá uma criação personalizada de senhas contendo números, letras (minúsculas e maiúscuslas) e símbolos... Todos opcionais.</p>
<p>Primeiro, definimos uma função vazia com alguns parâmetros (e seus valores padrões):</p>
<p>[code='php']<?php</p>
<p>function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)<br />
{</p>
<p>}</p>
<p>?>[/code]</p>
<p>Como pode ver, por padrão a senha gerada terá 8 caracteres, letras (minúsculas e maiúsculas) e números... Mas repito: todos esses parâmetros poderão ser modificados e manipulados (veremos isso depois).</p>
<p>Agora definimos algumas variáveis que serão usadas pela função:</p>
<p>[code='php']<?php</p>
<p>function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)<br />
{<br />
// Caracteres de cada tipo<br />
$lmin = 'abcdefghijklmnopqrstuvwxyz';<br />
$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';<br />
$num = '1234567890';<br />
$simb = '!@#$%*-';</p>
<p>// Variaveis internas<br />
$retorno = '';<br />
$caracteres = '';<br />
}</p>
<p>?>[/code]</p>
<p>Agora começa a brincadeira.. Vamos alimentar a variável $caracteres com todos os caracteres que poderão ser usados na senha:</p>
<p>[code='php']<?php</p>
<p>function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)<br />
{<br />
// Caracteres de cada tipo<br />
$lmin = 'abcdefghijklmnopqrstuvwxyz';<br />
$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';<br />
$num = '1234567890';<br />
$simb = '!@#$%*-';</p>
<p>// Variáveis internas<br />
$retorno = '';<br />
$caracteres = '';</p>
<p>// Agrupamos todos os caracteres que poderão ser utilizados<br />
$caracteres .= $lmin;<br />
if ($maiusculas) $caracteres .= $lmai;<br />
if ($numeros) $caracteres .= $num;<br />
if ($simbolos) $caracteres .= $simb;<br />
}</p>
<p>?>[/code]</p>
<p>Agora, pra finalizar, contamos com quantos caracteres a variável $caracteres ficou e usamos uma estrutura de repetição (<em>loop</em>) que se repetirá pra cada um dos caracteres finais da senha (variável $tamanho).</p>
<p>Depois é só retornar a variável contendo a senha criada:</p>
<p>[code='php']<?php</p>
<p>function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)<br />
{<br />
// Caracteres de cada tipo<br />
$lmin = 'abcdefghijklmnopqrstuvwxyz';<br />
$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';<br />
$num = '1234567890';<br />
$simb = '!@#$%*-';</p>
<p>// Variáveis internas<br />
$retorno = '';<br />
$caracteres = '';</p>
<p>// Agrupamos todos os caracteres que poderão ser utilizados<br />
$caracteres .= $lmin;<br />
if ($maiusculas) $caracteres .= $lmai;<br />
if ($numeros) $caracteres .= $num;<br />
if ($simbolos) $caracteres .= $simb;</p>
<p>// Calculamos o total de caracteres possíveis<br />
$len = strlen($caracteres);</p>
<p>for ($n = 1; $n <= $tamanho; $n++) {<br />
// Criamos um número aleatório de 1 até $len para pegar um dos caracteres<br />
$rand = mt_rand(1, $len);<br />
// Concatenamos um dos caracteres na variável $retorno<br />
$retorno .= $caracteres[$rand-1];<br />
}</p>
<p>return $retorno;<br />
}</p>
<p>?>[/code]</p>
<p>O código acima já é a função completa e pronta pra usar! :D</p>
<p>Veja exemplos de uso no fim do artigo.</p>
<h3>Código final da função</h3>
<p>Fiz também uma versão mais compacta, sem comentários e com créditos:</p>
<p>[code='php']<?php</p>
<p>/**<br />
* Função para gerar senhas aleatórias<br />
*<br />
* @author    Thiago Belem <contato@thiagobelem.net><br />
*<br />
* @param integer $tamanho Tamanho da senha a ser gerada<br />
* @param boolean $maiusculas Se terá letras maiúsculas<br />
* @param boolean $numeros Se terá números<br />
* @param boolean $simbolos Se terá símbolos<br />
*<br />
* @return string A senha gerada<br />
*/<br />
function geraSenha($tamanho = 8, $maiusculas = true, $numeros = true, $simbolos = false)<br />
{<br />
$lmin = 'abcdefghijklmnopqrstuvwxyz';<br />
$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';<br />
$num = '1234567890';<br />
$simb = '!@#$%*-';<br />
$retorno = '';<br />
$caracteres = '';</p>
<p>$caracteres .= $lmin;<br />
if ($maiusculas) $caracteres .= $lmai;<br />
if ($numeros) $caracteres .= $num;<br />
if ($simbolos) $caracteres .= $simb;</p>
<p>$len = strlen($caracteres);<br />
for ($n = 1; $n <= $tamanho; $n++) {<br />
$rand = mt_rand(1, $len);<br />
$retorno .= $caracteres[$rand-1];<br />
}<br />
return $retorno;<br />
}</p>
<p>?>[/code]</p>
<p>--</p>
<h3>Exemplos de uso</h3>
<p>[code='php']<?php<br />
// Gera uma senha com 10 carecteres: letras (min e mai), números<br />
$senha = geraSenha(10);<br />
// gfUgF3e5m7</p>
<p>// Gera uma senha com 9 carecteres: letras (min e mai)<br />
$senha = geraSenha(9, true, false);<br />
// BJnCYupsN</p>
<p>// Gera uma senha com 6 carecteres: letras minúsculas e números<br />
$senha = geraSenha(6, false, true);<br />
// sowz0g</p>
<p>// Gera uma senha com 15 carecteres de números, letras e símbolos<br />
$senha = geraSenha(15, true, true, true);<br />
// fnwX@dGO7P0!iWM<br />
?>[/code]</p>
<p>--</p>
<p>Essa função pode ser usada em vários tipos e sistemas e em vários casos... Se você quiser, pode modificar as variáveis que definem os caracteres de cada tipo, tirando o zero (0) e o "o" (letra), um (1) e o l (L minúsculo) e etc. para evitar conflitos visuais.</p>
<p>Um grande abraço e todos vocês e espero que tenham gostado! :)</p>
