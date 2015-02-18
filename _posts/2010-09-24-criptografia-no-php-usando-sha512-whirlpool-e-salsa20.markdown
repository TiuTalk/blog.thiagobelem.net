---
layout: post
title: Criptografia no PHP usando Sha512, Whirlpool e Salsa20
excerpt: Conheça outros métodos de encriptação mais seguros e poderosos que o MD5
  e SHA1.

date: '2010-09-24 17:22:15 -0300'
categories:
- PHP
- Artigos
- Segurança
tags:
- PHP
- Sha512
- Whirlpool
- Salsa20
- Segurança
- Criptografia
---
<p>Hoje trago até vocês a minha mais recente "descoberta" no PHP: os métodos de criptografia Sha512, Whirlpool e Salsa20.</p>
<p>Todos os três são criptografias de alto nível que geram strings de 128 caracteres com chances absurdamente remotas de colisão.</p>
<p>Todos os três são criptografias de mão única, ou seja, a única coisa que você pode fazer com a string depois de criptografada é comparar com outra string para ver as duas são iguais... Não há como "descriptografar" a string gerada por esses algoritmos.</p>
<p>Para usar esses métodos de encriptação você precisará usar a função <a title="hash()" href="http://br2.php.net/manual/pt_BR/function.hash.php" target="_blank">hash()</a> do PHP.</p>
<h3>SHA-512</h3>
<p>O <a href="http://en.wikipedia.org/wiki/SHA-2">SHA-512</a> é a versão melhorada do SHA-265, que por sua vez é uma versão muito melhor do SHA-1.</p>
<p>Para encriptar uma string usando <strong>SHA-512</strong>, no PHP, você pode fazer assim:</p>
<p>[code language="php"]&lt;?php</p>
<p>$string = 'O rato reu a ropa do rei de Roma';<br />
$codificada = hash('sha512', $string);</p>
<p>echo &quot;Resultado da codificação usando sha512: &quot; . $codificada;</p>
<p>?&gt;[/code]</p>
<p>Ao executar o código acima você verá uma string de 128 caracteres, é essa string que você deve salvar no banco de dados para manter a senha realmente segura.</p>
<p>O resultado dessa encriptação com SHA-512 é algo assim (quebrei em três linhas para ficar "legível):</p>
<blockquote><p>3b1efb1934a56460904a2ae4782490d06057985a1524<br />
5bb887ed4cda89e82cfa3c4ab2589686cb1828228c8e<br />
6d252aa5272cbf1b1ec44978e302d5f7b7cd4641</p></blockquote>
<h3>Whirlpool</h3>
<p>O <a href="http://en.wikipedia.org/wiki/Whirlpool_(cryptography)">Whirlpool</a> é um pouco mais lento que o SHA-512 e, conseqüentemente, mais "entrópico", ou seja: mais seguro.</p>
<p>Para encriptar uma string usando <strong>Whirlpool</strong>, no PHP, você pode fazer assim:</p>
<p>[code language="php"]&lt;?php</p>
<p>$string = 'O rato reu a ropa do rei de Roma';<br />
$codificada = hash('whirlpool', $string);</p>
<p>echo &quot;Resultado da codificação usando whirlpool: &quot; . $codificada;</p>
<p>?&gt;[/code]</p>
<p>O resultado desse <strong>Whirlpool</strong> será algo assim:</p>
<blockquote><p>f13697ecb3e10789449ed839f224376b633eadbe3739<br />
c07c7843bf91a86f4374d3697924e3c396cfeb777b56<br />
d38700c41e032c21c4fce52d5f59024969536c74</p></blockquote>
<h3>Salsa20</h3>
<p>E por fim, mas tão poderoso quanto, o <a href="http://en.wikipedia.org/wiki/Salsa20">Salsa20</a> é outro algoritmo de encriptação que irá gerar uma string de 128 caracteres. O Salsa20 foi criado para encriptação de stremings/transmissões, mas pode ser usado com strings simples também.</p>
<p>Para encriptar uma string usando <strong>Salsa20</strong>, no PHP, você pode fazer assim:</p>
<p>[code language="php"]&lt;?php</p>
<p>$string = 'O rato reu a ropa do rei de Roma';<br />
$codificada = hash('salsa20', $string);</p>
<p>echo &quot;Resultado da codificação usando salsa20: &quot; . $codificada;</p>
<p>?&gt;[/code]</p>
<p>O resultado desse <strong>Salsa20</strong> será algo assim:</p>
<blockquote><p>56a296fad140971d0fcd1577bd0c66348e69a835e9f4<br />
56857a0e9f43e8fe540ad4488099875daaf8741df89f9<br />
6abb8c6cd08ed842db33b2ea356737fc2cb0aef</p></blockquote>
<h3>Salvando esses dados no banco de dados</h3>
<p>Para salvar esse tipo de dado [criptografado] você pode usar um campo CHAR(128) pois sabemos que sempre teremos 128 caracteres ali.</p>
<h3>Encontrando registros criptografados no banco de dados</h3>
<p>Suponhamos que você queira encontrar um usuário no seu banco de dados comparando a senha digitada (no formulário de login) com a senha armazenada utilizando o método <strong>Whirlpool</strong>.</p>
<p>O código PHP para montar a consulta SQL seria mais ou menos assim:</p>
<p>[code language="php"]&lt;?php</p>
<p>$usuario = 'thiago'; // Nome do usuario (digitado pelo usuario)<br />
$senha = '12345'; // Senha (digitada pelo usuario)</p>
<p>// Encripta a senha utilizando Whirlpool<br />
$whirlpool = hash('whirlpool', $senha);</p>
<p>$sql = &quot;SELECT * FROM `usuarios` WHERE `usuario` = '{$usuario}' AND BINARY `senha` = '{$whirlpool}'&quot;;</p>
<p>?&gt;[/code]</p>
<p>--</p>
<p>Espero que tenha gostado! :)</p>
