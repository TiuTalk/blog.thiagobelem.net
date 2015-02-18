---
layout: post
title: Problemas de incompatibilidade no PHP 5.3
excerpt: Veja uma pequena lista de incompatibilidades que você pode encontrar ao atualizar
  o seu servidor para o <strong>PHP 5.3.x</strong> e entenda a importância de sempre
  atualizar o seu sistema para a última versão.

date: '2010-03-04 12:16:56 -0300'
categories:
- PHP
tags:
- PHP
- PHP 5.3
---
E aí pessoal, tudo bom?

Andei meio sumido esses dias pois mudei de emprego e minha vida está cheia de novidades, tenho tido pouco tempo em casa para criar.

Hoje vou falar um pouquinho sobre os problemas de incompatibilidade que vocês devem passar ou já passaram ao tentar migrar o seu servidor do <strong>PHP 5.x</strong> para a versão <strong>5.3</strong>.

Felizmente a lista de coisas a se mudar não é grande e eu diria que <strong>95%</strong> dos sites funcionarão bem, sem apresentar erros após a atualização.

Mas vamos a uma listinha de itens que vocês podem atentar para resolver qualquer problema que venha a aparecer no topo do seu site, te deixando desesperado:

<ul>
<li>A nova API interna de interpretação de parâmetros foi aplicada em todas as extensões que venham com PHP 5.3.x. Isso faz com que as funções retornem nulo (<em>NULL</em>) quando forem passados parâmetros incorretos. Existem ainda algumas excessoes à essa regra, como a função [get_class()](http://www.php.net/manual/pt_BR/function.get-class.php) que continua retornando falso (<em>FALSE</em>) em caso de erro</li>
<li>A função [clearstatcache()](http://www.php.net/manual/pt_BR/function.clearstatcache.php) não limpa mais o cache do <strong>realpath</strong> por padrão</li>
<li>A função [realpath()](http://us3.php.net/manual/en/function.realpath.php) agora é independente da plataforma. A conseqüencia disso é que caminhos relativos inválidos como <strong>__FILE__ . "/../x"</strong> não funcionarão mais</li>
<li>A família de funções da [call_user_func()](http://us2.php.net/manual/en/function.call-user-func.php) agora propaga o $this até quando chamada por uma classe pai</li>
<li>As funções de array [array_unique()](http://us2.php.net/manual/en/function.array-unique.php) não aceitam mais objetos passados como argumentos. Para usar essas funções em objetos você deve antes convertê-los em arrays</li>
<li>A nova biblioteca <strong>mysqlnd</strong> necessita do uso do novo formato de password do MySQL em 41 bytes (<em>MySQL 4.1's newer 41-byte password format</em>). Continuar usando o formato antigo de senha (de 16 bytes) fará com que o [mysql_connect()](http://us3.php.net/manual/en/function.mysql-connect.php) e funções similares emitam o erro "<em>mysqlnd cannot connect to MySQL 4.1+ using old authentication.</em>"</li>
<li>A nova biblioteca <strong>mysqlnd</strong> não lê o arquivo de configuração do MySQL (<strong><em>my.cnf</em></strong> ou <strong><em>my.ini</em></strong>) como a versão antiga fazia. Se o seu código usa essas configurações você pode carregá-las explicitamente usando a função [mysqli_options()](http://us.php.net/manual/en/mysqli.options.php)</li>
<li>A barra final (/) foi removida da classe [SplFileInfo](http://us2.php.net/manual/en/class.splfileinfo.php) e de outras classes relacionadas a diretórios</li>
<li>O método mágico [__toString](http://us.php.net/manual/en/language.oop5.magic.php) não aceita mais argumentos</li>
<li>Os métodos mágicos [__call](http://us3.php.net/manual/en/language.oop5.overloading.php) devem ser públicos e não mais estáticos.</li>
<li>O método mágico [__call](http://us3.php.net/manual/en/language.oop5.overloading.php) agora é chamado tanto no acesso de métodos privados, como nos protegidos.</li>
</ul>
E não podemos esquecer das novas <strong>palavras reservadas</strong> que não podem ser usadas em nomes de classes, variáveis, funções e etc:

<ul>
<li>[goto](http://us3.php.net/manual/en/control-structures.goto.php)</li>
<li>[namespace](http://us3.php.net/manual/en/language.namespaces.php)</li>
</ul>
Ufa.. Terminei! :)

Parece muita coisa, mas não é... Vai ser bem tranquilo fazer essa atualização se você ainda não fez.

Nem preciso dizer a importancia de se atualizar o seu sistema... As melhorias em segurança são incontáveis e testes provaram que você tem <strong style="background: yellow">um ganho de até 30% de performance</strong> só de mudar do <strong>PHP 5.x</strong> para o <strong>5.3</strong>!

Espero que tenham gostado!

