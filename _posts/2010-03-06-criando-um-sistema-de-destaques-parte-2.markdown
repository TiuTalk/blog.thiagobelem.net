---
layout: post
title: Criando um sistema de destaques – Parte 2
excerpt: Segunda parte do tutorial que ensina a criar um sistema de destaques para
  o seu site utilizando xHTML, CSS, jQuery e PHP.

date: '2010-03-06 23:02:57 -0300'
categories:
- HTML
- CSS
- Javascript
- jQuery
- Tutoriais
tags:
- jQuery
- jCycle
- HTML
- CSS
---
Tá na hora de continuar com a segunda parte do tutorial de destaques... Muita gente pediu e eu não vou deixar vocês esperando! :)

Pra quem não lembra, na [assim](/exemplos/destaque/parte1/)) e hoje, como prometido, vamos criar o jQuery que dará o efeito de transição dos destaques.

### 1. Inserindo o jQuery
Se você já tem jQuery 1.4.2 (ou superior) inserido no seu site, pule essa parte... Caso você não tenha o jQuery ou seja uma versão antiga, recomendo que continue lendo.

Vá ao site do [1.4.2](http://code.jquery.com/jquery-1.4.2.min.js)) e coloque o arquivo com o nome de <strong>jquery-1.4.2.min.js</strong> em uma pasta no seu site.

Feito isso nós podemos inserir o jQuery no site utilizando a seguinte linha:


<div data-gist-id="b786c629cd205dc6aac5" data-gist-show-loading="false"></div>

Essa linha deve ser inserida dentro da tag <strong><head></strong> do seu site e o nome do arquivo ou a sua pasta não fazem a mínima diferença... Contanto que você acerte o arquivo, tá tudo certo.

### 2. Inserindo o jQuery Cycle
Agora nós iremos inserir o plugin de jQuery mais útil que existe, o [galerias de fotos (slideshow) com jQuery](/galeria-de-fotos-slideshow-com-jquery)).

Vá até o site do jQuery Cycle, baixe a última versão (até agora é a [2.80](http://www.malsup.com/jquery/cycle/release/jquery.cycle.zip?v2.80)) e insira-a no seu da mesma forma que você fez com o jQuery, apenas mudando o nome do arquivo e, se necessário, a pasta.

Quando você fizer o download encontrará vários arquivos, mas você só precisa do <strong>jquery.cycle.all.min.js</strong>... Insira-o no <strong><head></strong> do seu site <strong style="color: red">APÓS o código do jQuery</strong>:


<div data-gist-id="e8691beff280b2c78510" data-gist-show-loading="false"></div>

### 3. Criando o seu jQuery de Destaques
Agora vamos criar um arquivo chamado <strong>jquery.destaques.js</strong> que conterá o código para "rodar" o jQuery Cycle no bloco de destaques e fazer o efeito de transição entre os slides dele... Mais uma vez, o nome e a localização do arquivo, contanto que vocês saibam o que estão fazendo e insiram-o de forma correta no site, tá tudo bem.

Começaremos o arquivo com o seguinte código:


<div data-gist-id="a4ebb92e9dea3f22a7ed" data-gist-show-loading="false"></div>

Continuaremos o nosso código na linha 5, mas parem um pouco para observar esse código... Ele fará com que o código que estiver ali dentro e usar a função jQuery (através do sifrão $) não entre em conflito com outras bibliotecas (Prototype, Moo-Tools e etc.)... Apenas essas duas linhas resolvem um problema de incompatibilidade que atrapalha MUITA gente por aí.

Agora nós iremos inserir o código que faz o jQuery Cycle agir sobre a lista de slides (destaques) que temos:


<div data-gist-id="201eb1759d81337a48af" data-gist-show-loading="false"></div>

Rode o seu site e veja a mágica acontecer... Já está 99% pronto! :D

Esse código que tem ao redor da linha que roda o jQuery Cycle é um código que você usará sempre que trabalhar com jQuery... Ele faz com o que o código que estiver dentro dele seja executado apenas quando o site (document) estiver pronto (ready) ou seja, depois que o HTML foi todo carregado.. Isso é necessário pois o jQuery trabalha diretamente com os elementos do HTML :)

Agora vamos ao 1% faltante que são três tarefas bastante simples:

<ul>
<li>Colocar os paginadores (os números no canto) que permitem uma troca direta de slides</li>
<li>Aplicar o efeito que faz a barrinha de descrição (com fundo preto) sumir e aparecer em cada troca de slides</li>
<li>Inserir o código que trocará o link da etiqueta [Destaques] que fica sobre o slideshow, usando sempre o link do destaque que está aparecendo</li>
</ul>
### 3.1 - Inserindo paginadores no seu slideshow
Para inserir os paginadores precisaremos antes criar um container para recebê-los, fazemos isso com esse código:


<div data-gist-id="278f523a6fe2d5640e4b" data-gist-show-loading="false"></div>

Deveremos inserir esse código dentro do document.ready mas antes do código que chama o jQuery Cycle pois essa div criada será usada pelo Cycle.

Com esse código inserido o nosso document.ready() ficará assim:


<div data-gist-id="6a8746c26dcc9cb7266a" data-gist-show-loading="false"></div>

Perceba que colocamos também um par de chaves dentro da chamada do jQuery Cycle... Ali dentro nós iremos definir as [opções](http://www.malsup.com/jquery/cycle/options.html) para modificar e interagir com o jQuery Cycle (veja mais a diante).

Agora nós já temos o container que receberá os paginadores, vamos inserir o código que criará os links de cada página, já funcionando:


<div data-gist-id="a2ad52ff34e73ac7898c" data-gist-show-loading="false"></div>

Com apenas essa linha os nossos links de paginação já estão aparecendo e funcionando! Não é uma maravilha?!

Vamos agora criar, rapidamente, o CSS para eles ficarem aparecendo sobre os slides, como quadradinhos bonitinhos:


<div data-gist-id="5828df43304b45d18df8" data-gist-show-loading="false"></div>

Esse CSS pode ser inserido no arquivo estilo.css (criado lá na Parte 1)... No fim dele nós inserimos uma regra que esconderá a barra de titulo... Vocês entenderão o motivo mais a frente.

Nossos paginadores estão prontos! :D

Vamos inserir mais duas opções que farão o slideshow pausar a transição se você estiver com o mouse sobre ele:


<div data-gist-id="8212a4721b1e1d0b70e2" data-gist-show-loading="false"></div>

### 3.2 - Efeito de transição: escondendo e mostrando a barrinha de titulo
Agora nós vamos inserir uma opção que tem comportamento de <em>callback</em>, que são funções/métodos que são chamados logo após outras ações... Um bom exemplo de <em>callback</em> seria um redirecionamento após um login bem sucedido... Vamos inserir o código de <em>callback</em> que executará uma função antes de cada troca de slide:


<div data-gist-id="689c1f4fbb8cbea1461b" data-gist-show-loading="false"></div>

Você não precisa se preocupar com o formato usado na declaração dessa função, ele já é pré-definido pelo jQuery Cycle... Você só precisa se dedicar ao que vai colocar dentro dela.

E dentro dela vamos colocar o código que esconde a barrinha preta de titulo do slide atual antes de trocar para o próximo slide:


<div data-gist-id="fc7456e56b5aa6e52d84" data-gist-show-loading="false"></div>

A nossa função de <em>callback</em> ficará assim:


<div data-gist-id="c36159d0bc2640261745" data-gist-show-loading="false"></div>

Vamos também criar o <em>callback</em> que será chamado após a troca de slides:


<div data-gist-id="64cb36a14feb68ae47eb" data-gist-show-loading="false"></div>

E agora a nossa barrinha de destaques está subindo e descendo como o planejado! :D Só falta trocar o link da etiqueta [Destaques] para o link exato de cada destaque.

### 3.3 - Trocando o link da etiqueta [Destaques]
O link da etiqueta deverá ser atualizado logo após a troca de slides, então vamos modificar o callback after para isso:


<div data-gist-id="0a59f67ab1e72b7de382" data-gist-show-loading="false"></div>

Pra quem quiser dar uma olhada no jquery.destaques.js completo: [Pastie](http://pastie.org/857733)

Pronto! Terminamos o nosso sistema de destaques! :D

Muita gente pode parar por aqui e ir fazer o seu sistema de destaques, mas sei que muitos de você, como eu, vão preferir que esse seja um bloco de destaques dinâmico, vindo direto do banco de dados... Então aguardem mais um pouco pela [](/criando-um-sistema-de-destaques-parte-3), onde criaremos o arquivo PHP que fará a conexão com o banco de dados e trará os dados (titulo e link) de uma tabela do MySQL. :)

Quer ver como ficou o sistema de destaques até agora? Veja [RAR](/exemplos/destaque/parte2.rar) com os arquivos.

Abraços e até a próxima!

