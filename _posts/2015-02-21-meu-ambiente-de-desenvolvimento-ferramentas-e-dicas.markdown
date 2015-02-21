---
layout: post
title: "Meu ambiente de desenvolvimento"
excerpt: Saiba um pouquinho mais sobre as ferramentas e tecnologias que uso no dia-a-dia do trablaho
image: /assets/images/macbook.jpg
date: '2015-02-21 15:00:00 -0300'
categories:
- Desenvolvimento
tags:
- Desenvolvimento
- Ambiente
- Tecnologias
- OSX
- Git
- GitHub
- git-flow
- Sublime Text
- Ruby
- Ruby on Rails
- PHP
- CakePHP
- PostgreSQL
---
Faz bastante tempo desde a última vez que [falei sobre o meu ambiente de trabalho][artigo-ambiente] aqui no blog.. Está na hora de um update!

## OSX Yosemite

Já faz cerca de 2 anos que utilizo um Macobook Pro com **OSX** como principal ferramenta de trabalho, atualmente estou rodando o **Yosemite**.

No OSX eu encontrei a liberdade de um sistema operacional **unix** com uma interface bonita, que funciona e que não quebra a cada upgrade do sistema operacional... Aquele abraço, Ubuntu! :sunglasses:


## Git e GitHub

O que seria de mim, mero desenvolvedor, sem o [Git][git] e o [GitHub][github]?

Se você é desenvolvedor e ainda não sabe Git, tá na hora de [correr atrás do prejuízo][try-git].. Já virou um padrão de mercado, já faz parte de boa parte do dia-a-dia dos desenvolvedores "atualizados" com o mercado.

Pra vocês terem uma idéia, esse blog [está rodando no GitHub][blog-repo], de graça! É muito amor! :heart:

Aproveita, e [me segue lá no GitHub][github-tiutalk] e fica de olho no meu código!

#### git-flow

Recentemente estou trabalhando com [git-flow][gitflow] e curtindo muito o resultado, o trabalho fica mais organizado e a chance de conflitos ou código que brado em produção é bem menor!

Pretendo fazer um artigo sobre o **git-flow** em breve, aguardem!


## Sublime Text

Já perdi a conta de há quantos anos estou usando o [Sublime Text][sublime], um editor de textos leve, simples e rápido.

Hoje em dia, não vejo necessidade em usar uma IDE como **Eclipse**, **PHPStorm** ou **Rubymine**.. Eu preciso de um editor de textos simples e rápido para fazer o meu trabalho de forma eficiente.

Respeito bastante quem usa [vim][vim] à vera. Há um bom tempo eu tenho vontade de cair de cabeça nele, mas sempre arrumo uma desculpa e volto pro Sublime. Também tentei usar o [Atom][atom], mas não curti.

##### Alguns packages que eu recomendo

Como quem usa o Sublime, está acostumado a instalar uma porrada de [packages][packages], segue o meu top 5:

1. [Emmet][emmet] para gerar HTML de forma rápida
2. [SublimeLinter][sublime-linter] para receber avisos sobre erros no código
3. [BracketHighlighter][bracket-highlighter] para marcar tag, parêntesis ou colchete equivalente
4. [GitGutter][git-gutter] para visualizar quais linhas foram adicionadas, alteradas ou removidas no arquivo sem precisar ir pro console fazer um `git diff`
5. [Flatland][flatland], um tema lindão


## Ruby e Ruby on Rails

Nos últimos 2~3 anos, tenho trabalhado cada vez mais com [Ruby][ruby] nos meus projetos.

Considero o Ruby uma linguagem leve, linda e que não "entra" no meu caminho quando eu quero fazer alguma coisa.. É uma linguagem onde o desenvolvedor tem uma liberdade - quase que poética - de fazer merda, e eu adoro isso.

> Ruby é da zoeira!

E como adoro **frameworks**, na maioria dos projetos uso [Ruby on Rails][rails], um dos melhores frameworks que eu já trabalhei.

Se você tem curiosidade sobre Ruby e Rails, e quer aprender um pouquinho sobre esses dois caras, [vem comigo que eu te ensino][curso-rails].


## PHP e CakePHP

Não preciso nem dizer há quanto tempo eu trabalho com PHP :P

Enquanto eu tenho usado Ruby e Rails no dia-a-dia das empresas onde trabalho, o PHP e o CakePHP ficaram o padrão dos freelas que eu pego (ou pegava.. assunto pra outro artigo).

O [CakePHP][cakephp] é um **framework** simples e que torna o meu trabalho, com PHP, bem mais divertido (e organizado) do que seria se eu não tivesse usando um framework.

Se você tem curiosidade sobre o CakePHP, e quer aprender um pouquinho sobre ele, [vem comigo que eu também te ensino][curso-cakephp].

#### Composer

Quando estou trabalhando com o PHP faço questão de o [Composer][composer] para gerenciar as dependências do projeto.

Já escrevi um [artigo aqui blog sobre as vantagens do Composer][artigo-composer], então leia lá se você ainda não conhece essa ferramenta! :+1:


## PostgreSQL

Já faz um tempo que parei de usar **MySQL** nos meus projetos e comecei a usar exclusivamente o [PostgreSQL][postgresql] neles.

Não nego que ele é bem chatinho de configurar (principalmente a parte dos usuários), mas uma vez que você domina isso, ele mostra seu poder com alta disponibilidade e performance.

## Conclusão

Enfim, são muitas ferramentas e tecnologias, e eu tenho certeza que esqueci de alguma... Mas já deu pra você ter uma idéia de como é meu ambiente e o que eu uso no dia a dia.

Até a próxima! :v:


[artigo-ambiente]: /meu-ambiente-de-desenvolvimento
[sublime]: http://www.sublimetext.com/
[vim]: http://www.vim.org/
[atom]: https://atom.io/
[packages]: https://packagecontrol.io/
[emmet]: https://packagecontrol.io/packages/Emmet
[sublime-linter]: https://packagecontrol.io/packages/SublimeLinter
[bracket-highlighter]: https://packagecontrol.io/packages/BracketHighlighter
[git-gutter]: https://packagecontrol.io/packages/GitGutter
[flatland]: https://packagecontrol.io/packages/Theme%20-%20Flatland
[ruby]: https://www.ruby-lang.org/
[rails]: http://rubyonrails.org/
[curso-rails]: http://assando-sites.com.br/cursos/ruby-on-rails-para-desenvolvedores-php
[cakephp]: http://cakephp.org
[curso-cakephp]: http://assando-sites.com.br/cursos/cakephp-basico
[composer]: https://getcomposer.org/
[artigo-composer]: /gerenciando-dependencias-com-o-composer
[postgresql]: http://www.postgresql.org/
[git]: http://git-scm.com/
[github]: http://github.com/
[try-git]: https://try.github.io/
[github-tiutalk]: http://github.com/TiuTalk
[blog-repo]: http://github.com/TiuTalk/blog.thiagobelem.net
[gitflow]: http://nvie.com/posts/a-successful-git-branching-model/
