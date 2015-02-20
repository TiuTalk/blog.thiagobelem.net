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
Hoje trago até vocês a minha mais recente "descoberta" no PHP: os métodos de criptografia Sha512, Whirlpool e Salsa20.

Todos os três são criptografias de alto nível que geram strings de 128 caracteres com chances absurdamente remotas de colisão.

Todos os três são criptografias de mão única, ou seja, a única coisa que você pode fazer com a string depois de criptografada é comparar com outra string para ver as duas são iguais... Não há como "descriptografar" a string gerada por esses algoritmos.

Para usar esses métodos de encriptação você precisará usar a função [hash()](http://br2.php.net/manual/pt_BR/function.hash.php) do PHP.

### SHA-512
O [SHA-512](http://en.wikipedia.org/wiki/SHA-2) é a versão melhorada do SHA-265, que por sua vez é uma versão muito melhor do SHA-1.

Para encriptar uma string usando <strong>SHA-512</strong>, no PHP, você pode fazer assim:


<div data-gist-id="a7295888996006a8c3ad" data-gist-show-loading="false"></div>

Ao executar o código acima você verá uma string de 128 caracteres, é essa string que você deve salvar no banco de dados para manter a senha realmente segura.

O resultado dessa encriptação com SHA-512 é algo assim (quebrei em três linhas para ficar "legível):

<blockquote>3b1efb1934a56460904a2ae4782490d06057985a1524
5bb887ed4cda89e82cfa3c4ab2589686cb1828228c8e
6d252aa5272cbf1b1ec44978e302d5f7b7cd4641
</blockquote>
### Whirlpool
O [Whirlpool](http://en.wikipedia.org/wiki/Whirlpool_(cryptography)) é um pouco mais lento que o SHA-512 e, conseqüentemente, mais "entrópico", ou seja: mais seguro.

Para encriptar uma string usando <strong>Whirlpool</strong>, no PHP, você pode fazer assim:


<div data-gist-id="94790e02e729ce598014" data-gist-show-loading="false"></div>

O resultado desse <strong>Whirlpool</strong> será algo assim:

<blockquote>f13697ecb3e10789449ed839f224376b633eadbe3739
c07c7843bf91a86f4374d3697924e3c396cfeb777b56
d38700c41e032c21c4fce52d5f59024969536c74
</blockquote>
### Salsa20
E por fim, mas tão poderoso quanto, o [Salsa20](http://en.wikipedia.org/wiki/Salsa20) é outro algoritmo de encriptação que irá gerar uma string de 128 caracteres. O Salsa20 foi criado para encriptação de stremings/transmissões, mas pode ser usado com strings simples também.

Para encriptar uma string usando <strong>Salsa20</strong>, no PHP, você pode fazer assim:


<div data-gist-id="120c62e5db1fb65d1932" data-gist-show-loading="false"></div>

O resultado desse <strong>Salsa20</strong> será algo assim:

<blockquote>56a296fad140971d0fcd1577bd0c66348e69a835e9f4
56857a0e9f43e8fe540ad4488099875daaf8741df89f9
6abb8c6cd08ed842db33b2ea356737fc2cb0aef
</blockquote>
### Salvando esses dados no banco de dados
Para salvar esse tipo de dado [criptografado] você pode usar um campo CHAR(128) pois sabemos que sempre teremos 128 caracteres ali.

### Encontrando registros criptografados no banco de dados
Suponhamos que você queira encontrar um usuário no seu banco de dados comparando a senha digitada (no formulário de login) com a senha armazenada utilizando o método <strong>Whirlpool</strong>.

O código PHP para montar a consulta SQL seria mais ou menos assim:


<div data-gist-id="baf7f22fab33f771598d" data-gist-show-loading="false"></div>

--

Espero que tenha gostado! :)

