---
layout: post
title: Trabalhando com Cookies no PHP

date: '2009-03-19 01:59:18 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Fala pessoal!

Estou de volta e hoje vou ensinar pra vocês como manipular os <abbr title="Cookie é um grupo de dados trocados entre o navegador e o servidor de páginas, colocado num arquivo (ficheiro) de texto criado no computador do utilizador."><em>cookies</em></abbr> do seu site usando o PHP.

Antes, vamos à definição de cookie da [Wikipédia](http://pt.wikipedia.org/wiki/Cookies):

<blockquote>Cookie é um grupo de dados trocados entre o navegador e o servidor de páginas, colocado num arquivo (ficheiro) de texto criado no computador do utilizador. A sua função principal é a de manter a persistência de sessões HTTP. (...)

Um exemplo é aquele cookie que um site cria para que você não precise digitar sua senha novamente quando for ao site outra vez. Outros sites podem utilizá-los para guardar as preferências do usuário, por exemplo, quando o sítio lhe permite escolher uma cor de fundo para suas páginas.
</blockquote>
Como dito na definição wikipediana, cookies podem ser usados para armazenar dados do visitante, por exemplo: o idioma escolhido pelo visitante.

Felizmente você só precisa aprender uma função para manipular cookies! Essa função é a <strong>setcookie()</strong> do PHP. Vamos a alguns exemplos:


<div data-gist-id="141be7b8c4c700174c9a" data-gist-show-loading="false"></div>

Você pode reparar que, nos exemplos acima, que a função teve até três parâmetros: <strong>nome do cookie</strong> (1), <strong>valor do cookie</strong> (2) e <strong>duração do cookie</strong> (3). Existem ainda mais quatro parâmetros (pouco comuns) que você poderá usar ([veja mais aqui](http://us.php.net/setcookie)).

Se você não definir o tempo de vida (duração) de um cookie, ele irá durar o tempo que o browser permanecer aberto. Para definir o tempo de vida do cookie é só somar o número de segundos desejados ao resultado da função time(), por exemplo: cinco horas são 18000 segundos, então ficaria: <strong>18000 + time()</strong>, ou <strong>(3600 * 5) + time()</strong>. Uma dica: cada hora tem 3600 segundos e cada dia tem 86400 segundos.

Se você quiser pegar o valor de um cookie depois, em outra página do seu site, é só usar esse exemplo:


<div data-gist-id="fb9f568c2586c3bfd11e" data-gist-show-loading="false"></div>

Vale lembrar que o cookie precisa existir para você pegar o seu valor... Se ele passou da validade (expirou) ele não existe mais, então é sempre bom fazer uma verificação com a função [isset()](http://br2.php.net/manual/pt_BR/function.isset.php) do PHP.

Se por algum motivo você precisar deletar algum cookie é só não definir um valor para ele, fazendo dessa forma:


<div data-gist-id="1be3a6e2cdba5e3f969d" data-gist-show-loading="false"></div>

Outra forma de deletar um cookie é colocando o seu tempo de vida no passado.

<span style="color: #ff0000;"><strong>Atenção:</strong></span> Cookie são parecidos com Sessões no fato de trabalharem com headers HTTP, então eles <strong>precisam</strong> ser definidos e manipulados antes de você enviar qualquer HTML para o navegador do visitante ou você receberá um erro. Outro ponto importante é que, por esse fator, os cookies só estarão disponíveis para leitura (através da variável <strong>$_COOKIE</strong>) após o próximo carregamento de página.

Se você quiser saber todos os cookies que estão setados e acessíveis pelo seu site, é só usar a função<strong> print_r()</strong> dessa forma:


<div data-gist-id="1b9bf5e5b1883b4372f7" data-gist-show-loading="false"></div>

Ela irá mostrar todos os cookies e seus respectivos valores.

Espero que tenham gostado de mais esse mini-tutorial sobre as maravilhas do PHP.

Amanhã tem mais... muito mais!

Até a próxima ;-)

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função [setcookie()](http://br.php.net/setcookie)</strong> » Cria e deleta cookies</li>
<li><strong>Função [isset()](http://br.php.net/isset)</strong> » Verifica se uma variável existe</li>
<li><strong>Função [print_r()](http://br.php.net/print_r)</strong> » Exibe todos os elementos e valores de um array</li>
</ul>
