---
layout: post
title: Aprendendo URLs amigáveis com regras complexas
excerpt: Continuação do artigo que te ensina a usar URLs Amigáveis no seu site com
  explicações detalhadas sobre o que são e como funcionam as Expressões Regulares
  que são utilizadas para fazer esse recurso. Nessa parte iremos criar regras mais
  complexas, que usam valores variáveis e que sao passados via GET para os arquivos
  do seu site.

date: '2010-04-28 00:13:46 -0300'
categories:
- Artigos
- SEO
- Apache
tags:
- SEO
- URLs Amigáveis
- Friendly URLs
- htaccess
---
<p>Como prometido, hoje vou continuar o <a title="Aprendendo URLs amigáveis (Friendly URLs)" href="/aprendendo-urls-amigaveis">tutorial sobre URLs amigáveis</a>... Ontem fizemos uma introdução e explicação básica sobre as regras simples e hoje vamos falar sobre regras mais complexas que usam expressões regulares.</p>
<p style="color: gray;"><strong>Atualização 30/04/10</strong>: Adicionei algumas informações extras e fiz algumas correções nas RewriteRules.</p>
<h3>Reescrevendo URLs que possuem parâmetros</h3>
<p>Continuando o nosso exemplo, faremos agora a reescrita de URL do seguinte caso:</p>
<p><code>http://meusite.com/<span style="background: yellow;">produtos</span>.php?id=<span style="background: lime;">2</span></code> (A URL atual)
<code>http://meusite.com/<span style="background: yellow;">produtos</span>/camiseta-rosa/<span style="background: lime;">2</span>/</code> (A nova URL)</p>
<p>Nesse caso temos dois termos importantes na URL:</p>
<p>O termo marcado em <span style="background: yellow;"> amarelo </span> identifica de qual URL estamos tratando, no nosso caso será a URL de exibição de um produto (um possível caso pra uma loja-virtual) o que poderia ser o mesmo caso da exibição de uma notícia ou artigo em um site com esse tipo de conteúdo.</p>
<p>O termo marcado em <span style="background: lime;"> verde </span> é o ID do produto... Esse é o valor que será usado internamente pelo seu <code>produtos.php</code> para exibir o produto correto. Perceba que esse mesmo termo precisa estar presente na nova URL pois é exatamente ele que será usado pelo seu arquivo "antigo" quando a URL for redirecionada.</p>
<p>Perceba também que adicionamos um novo "termo" (valor) que é o nome do produto... Isso ajuda a melhorar a URL trazendo mais informações relevantes, aumentando a pontuação da página nos sistemas de busca e dizendo para o visitante o que ele verá ao clicar naquela URL.</p>
<p>Você precisa entender que essa informação adicional, a princípio, <strong>não faz diferença alguma pro funcionamento do seu site</strong>, é apenas um bônus já que o seu sistema continuará identificando o produto pelo seu ID que está na última parte da URL.</p>
<h3>Reescrevendo a URL</h3>
<p>O nosso <code>.htaccess</code> para reescrever a URL anterior (da página de contato) e essa nova URL mais complexa, ficará assim:</p>

[code language="shell"]
<IfModule mod_rewrite.c>
	RewriteEngine On</p>
<p>	# Página de contato
	RewriteRule ^contato/?$ /contato.php [NC,L]
	# Página de exibição de um produto
	RewriteRule ^produtos/([a-z0-9-]+)/([0-9]+)/?$ /produtos.php?id=$2&nome=$1 [NC]
</IfModule>
[/code]

<p>Agora vamos separar a regra de reescrita em três partes e explicar uma por uma:</p>
<p><code>RewriteRule <span style="background: yellow;">^produtos/([a-z0-9-]+)/([0-9]+)/?$</span> <span style="background: lime;">/produtos.php?id=$2&nome=$1</span> <span style="background: cyan;">[NC]</span></code></p>
<p>Vai ser preciso começar a entender um pouco sobre expressões regulares agora... Vamos lá!</p>
<h3>Expressões Regulares</h3>
<p>As expressões regulares ou <em>RegExp</em> ou <em>ER</em> são formas de você validar uma string (texto).</p>
<p>Suponhamos que você precise verificar se uma string é composta apenas por letras minúculas. Você pode fazer isso com a expressão regular <code>^[a-z]+$</code>, vamos tender o que isso significa:</p>
<p>O circunflexo <code>^</code> significa "o começo da string" e o cifrão <code>$</code> significa "o fim da string"... Então, toda a <strong>ER</strong> que estiver entre o <code>^</code> e o <code>$</code> precisa "validar" pra toda a string, e não apenas uma parte dela.</p>
<p>Entre eles temos <code>[a-z]+</code>, isso significa: um grupo de caracteres (delimitado pelos colchetes <code>[  ]</code>) composto por "qualquer letra minúscula" (<code>a-z</code>) que tenha no mínimo 1 caractere <code>+</code>.</p>
<p>A expressão regular a cima iria validar strings como <code>planeta</code> e <code>casa</code> mas iria invalidar strings como <code>casal feliz</code>, <code>planeta1</code>, <code>CaSa</code> ou <code>pôr-do-sol</code> pois essas strings não possuem apenas letras de a-z minúsculas.</p>
<p>Outro exemplo que podemos usar é a expressão <code>^[0-9]{3,9}-(.*)$</code> que vamos "destripar" agora:</p>
<p>Começamos com <code>[0-9]{3,9}</code> que significa um grupo de números (de 0 a 9) que tenha entre 3 e 9 dígitos, ou seja: qualquer número de 3 até 9 digitos.</p>
<p>Depois temos um hífen <code>-</code> normal.</p>
<p>E no final da ER temos <code>(.*)</code> que significa, acreditem se quiser, qualquer caractere! Qualquer coisa! Calma... calma! Eu explico: o ponto <code>.</code> é o caractere coringa das expressões regulares, e o asterisco <code>*</code> signficia "nenhuma, uma ou mais de uma 'unidade' do caractere anterior".</p>
<p>Sabendo disso, podemos entender que a expressão regular <code>^[0-9]{3,9}-(.*)$</code> valida strings como <code>014-a8!@cas</code>, <code>11111-eahuaa</code> e <code>123456789-</code>, mas não valida strings como <code>0-a8!@cas</code>, <code>-eahuaa</code>, <code>8928745614-abc</code> e <code>89-abc</code> pois as mesmas não começam com "números entre 3 e 9 digitos" <code>[0-9]{3,9}</code>.</p>
<p>Poderiamos modificar a expressão regular para: <code>^[0-9]{3,9}-</code> e ela teria o mesmo comportamento pois só precisamos verificar o começo da string... :)</p>
<p>Recomendo que você pare um pouquinho para ler o <a title="Guia de Expressões Regulares" href="http://guia-er.sourceforge.net/">Guia de Expressões Regulares</a>, é muito bom e vai te ajudar a entender melhor uma das sete maravilhas da Informática que é uma Expressão Regular.</p>
<p>Agora vamos voltar a nossa URL Amigável:</p>
<p><code>RewriteRule <span style="background: yellow;">^produtos/([a-z0-9-]+)/([0-9]+)/?$</span> <span style="background: lime;">/produtos.php?id=$2&nome=$1</span> <span style="background: cyan;">[NC]</span></code></p>
<h4>Primeira parte</h4>
<p>Na primeira parte, em amarelo, temos <code style="background: yellow;">^produtos/([a-z0-9-]+)/([0-9]+)/?$</code>, o que isso significa?</p>
<p>Vamos dividir essa parte em pequenos blocos e explicar cada um:</p>
<p><code style="background: yellow;">^produtos/</code> - A URL precisa começar com <strong>produtos/</strong></p>
<p><code style="background: yellow;">/([a-z0-9-]+)/</code> - A expressão regular <code>([a-z0-9-]+)</code> significa "no mínimo um(a) <code>+</code> letra minúscula <code>a-z</code> OU letra maiúscula <code>A-Z</code> OU número <code>0-9</code> OU um hífen <code>-</code>"</p>
<p><code style="background: yellow;">/([0-9]+)/?$</code> - E por fim temos <code>([0-9]+)</code> que signfica "no minimo <code>+</code> um número <code>0-9</code>" seguido de uma barra opcional <code>/?</code> e o fim da url.</p>
<p>Isso tudo significa que, com a primeira parte, validamos strings como <code>/produtos/camiseta-azul/2/</code>, <code>/produtos/bola/89/</code> e <code>/produtos/cachecol-rosa-da-2a-africa-do-sul/666/</code> e invalidamos strings como <code>/produtos/palhaço/a/</code>,  <code>/produtos/camisa/</code> ou <code>/produtos/camiseta legal/187a/</code>.</p>
<h4>Segunda parte</h4>
<p>Na segunda parte, em amarelo, temos <code style="background: lime;">/produtos.php?id=$2&nome=$1</code>, o que isso significa?</p>
<p>Significa que iremos passar os valores encontrados na primeira parte para uma nova URL interna, ou seja, chamaremos o arquivo <code style="background: lime;">/produtos.php</code> e passaremos dois parâmetros via <strong>GET</strong> para ele:</p>
<p>Temos <code style="background: lime;">$2</code> no parâmetro <code>id</code>, esse "sifrao dois" significa a segunda "variável" encontrada na URL, que nesse caso é a parte <code style="background: yellow;">([0-9]+)</code> da expressão regular, que conterá o ID do produto.</p>
<p>E temos <code style="background: lime;">$1</code> no parâmetro <code>nome</code>, esse "sifrao um" significa a primeira "variável" encontrada na URL, que nesse caso é a parte <code style="background: yellow;">([a-z0-9-]+)</code> da expressão regular, que conterá o nome do produto! :)</p>
<p>Com isso tudo, ao chamar a URL <code>/produtos/camiseta-azul/2/</code> o Apache irá, malandramente e internamente, direcionar a requisição para o caminho <code>/produtos.php?id=2&nome=camiseta-azul</code>.</p>
<p>Perceba que os valores (<strong>2</strong> e <strong>camiseta-azul</strong>) foram passados para o "antigo" arquivo, cada um em seu devido lugar... Com isso, ao executar o arquivo <code>/produtos.php</code> você terá acesso aos dois valores que foram passados na URL Amigável utilizando a super-global <code>$_GET</code>:</p>

[code language="php"]
<?php</p>
<p>echo 'ID do produto: ' . $_GET['id']; // 2
echo '';
echo 'Nome (slug) do produto: ' . $_GET['nome']; // camiseta-azul</p>
<p>?>
[/code]

<p>Quer coisa melhor que isso minha gente?!</p>
<h4>Terceira parte</h4>
<p>Na terceira parte, em azul claro, temos <code style="background: cyan;">[NC]</code>, que ja foi explicado antes e significa "<strong>N</strong>o <strong>C</strong>ase" ou "Sem distinção de minúsculas ou maiúsculas". :)</p>
<p>--</p>
<p>Só para reforçar para quem ainda não pegou a essência da coisa: Na primeira parte temos uma <strong>expressão regular</strong> que, se ela validar a URL que o visitante está acessando, a requisição vai ser redirecionada para o <strong>caminho</strong> especificado na segunda parte.</p>
<h3>Mais exemplos de URLs Amigáveis</h3>
<p>Vamos ver mais alguns exemplos que podemos colocar no nosso <code>.htaccess</code> e o entendimento de cada uma das regras, fica por sua conta:</p>

[code language="shell"]
<IfModule mod_rewrite.c>
	RewriteEngine On</p>
<p>	# Página de contato
	RewriteRule ^contato/?$ /contato.php [NC,L]
	# Página de exibição de um produto
	RewriteRule ^produtos/([a-z0-9-]+)/([0-9]+)/?$ /produtos.php?id=$2&nome=$1 [NC]
	# Página de exibição de uma categoria de livros
	RewriteRule ^livro/([a-z0-9-]+)/?$ /livros.php?categoria=$1 [NC,L]
	# Página de exibição de um artigo com a data na URL
	RewriteRule ^artigo/([0-9]{4})/([0-9]{2})/([0-9]{2})/([a-z0-9-]+)/([0-9]+)/?$ /artigo.php?id=$5&nome=$4&data=$1-$2-$3 [NC]
</IfModule>
[/code]

<p>Uma ferramenta que pode ajudá-los a testar expressões regulares é a <a title="RegExr: Online Regular Expression Testing Tool" rel="nofollow" href="http://gskinner.com/RegExr/" target="_blank">RegExr: Online Regular Expression Testing Tool</a>.</p>
<p>Espero realmente que vocês tenham gostado... Amanhã vou tentar abordar outros assuntos e, dependendo do retorno e das dúvidas que vocês deixarem nos comentários, faço outro artigo sobre URLs Amigáveis.</p>
<p>Um grande abraço, uma boa noite, e deixem mais comentários! :)</p>
