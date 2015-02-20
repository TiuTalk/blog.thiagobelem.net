---
layout: post
title: Orientação à Objetos - Métodos e atributos estáticos
excerpt: Veja o passo a passo da evolução de uma "classe" (que parecia mais código
  estruturado) para utilizar recursos da orientação à objetos, reutilização de código,
  métodos e atributos estáticos... Baseado em fatos reais!

date: '2011-11-03 21:33:03 -0200'
categories:
- PHP
- Artigos
- Otimização
- Orientação a objetos
tags: []
---
Hoje na faculdade estava vendo o código de um colega que está aprendendo PHP e comecei a discutir com ele algumas melhorias, o resultado final foi tão satisfatório e diferente do original que resolvi criar um post pra mostrar como o código evoluiu.

<h3>O código original - Orientado à objetos ou PHP estruturado?</h3>
O código original já estava dentro de uma classe, mas não faria diferença nenhuma se fosse PHP estruturado... não lembro exatamente o nome dos métodos/variáveis, mas o restante está igualzinho:


<div data-gist-id="f752935db16892af3e09" data-gist-show-loading="false"></div>

A primeira mudança foi trocar esse switch, que não está fazendo nada além de definir o valor da variável $bool como true ou false se o $type for um dos valores válidos (jpg, png ou gif)... Nada melhor então do que usar a função [in_array()](http://php.net/manual/en/function.in-array.php):


<div data-gist-id="f5b718b67b8a9794f986" data-gist-show-loading="false"></div>

WOW! Reduzimos de 21 para 7 linhas... mas ainda assim, se fosse estruturado não teria diferença nenhuma.

Meu amigo me disse que essa classe seria para verificar os tipos de arquivos (extensões), por exemplo "se é uma imagem" ou "se é um doc"... Então criamos outro método para verificar DOCs:


<div data-gist-id="39e7b3cd6b4b424da7c6" data-gist-show-loading="false"></div>

<h3>Atributos, melhor tê-los</h3>
O código está melhorando, mas ainda assim tem algo errado... não é responsabilidade dos métodos <code>fImage</code> e <code>fDoc</code> saber a lista de extensões válidas... isso não deveria pertencer à classe como um todo e poder ser reutilizado?


<div data-gist-id="001fb58e205e7215fc9e" data-gist-show-loading="false"></div>

<h3>Atributos e métodos estáticos</h3>
Agora sim está parecendo uma classe normal, com atributos e métodos... Aí percebi que de orientada à OBJETOS essa classe não tem nada! Não estamos trabalhando com objetos.. O uso atual dessa classe seria assim:


<div data-gist-id="591797543bbf3400ca89" data-gist-show-loading="false"></div>

Eu não trabalho o objeto <code>$cFileType</code>, apenas instancio e utilizo um único modo... então vamos economizar um pouco de memória, transformando os métodos em métodos estáticos:


<div data-gist-id="04aae3d006ed6676f61c" data-gist-show-loading="false"></div>

E agora a utilização ficou um pouco mais simples:


<div data-gist-id="42eb7737d77f132fa839" data-gist-show-loading="false"></div>

Sendo que você ainda pode usar o <code>cFileType::image</code> (pra ter uma lista de imagens válidas) em qualquer parte da sua aplicação sem instanciar a classe.

<h3>Reutilização de código</h3>
Segundo a abordagem [DRY](http://pt.wikipedia.org/wiki/Don't_repeat_yourself), não devemos nos repetir... Por isso aquele <code>in_array()</code> começou a me incomodar... Vai que você está verificando 30 tipos diferentes de arquivos, todos os métodos fazendo exatamente a mesma coisa... mas aí você decide mudar o in_array() pra algo mais eficiente ou aceitar até o caminho absoluto de um arquivo... vai mudar em 30 métodos na mão?

A responsabilidade de verificar se o valor <code>$type</code> tá dentro de uma "lista" válida não é dos métodos <code>fImage</code> e <code>fDoc</code>.. então vamos delegar:


<div data-gist-id="01e12d21eb247084b15f" data-gist-show-loading="false"></div>

Agora se precisarmos mudar essa lógica de verificar se o <code>$type</code> tá dentro de uma "lista" válida, só vamos precisar mudar em um lugar só.

<h3>cFileType? fType? fImage? O resultado final</h3>
Temos que concordar que os nomes de classe e métodos escolhidos pelo meu amigo não são os mais intuitos... Então como uma modificação final, sugiro a seguinte classe devidamente renomeada:


<div data-gist-id="c87026506c611ece0d3c" data-gist-show-loading="false"></div>

Com uma utilização bem simples e intuitiva:


<div data-gist-id="20a0c42b11ff29f1e437" data-gist-show-loading="false"></div>

Espero que tenham gostado! :)

Pra quem quiser ver o código completo da classe final, com os métodos comentados: [https://gist.github.com/1338259](https://gist.github.com/1338259)

