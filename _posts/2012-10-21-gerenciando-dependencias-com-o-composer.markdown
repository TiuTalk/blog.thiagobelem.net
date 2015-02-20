---
layout: post
title: Gerenciando dependências com o Composer
excerpt: O Composer é uma ótima ferramenta que te ajudará a gerenciar, instalar e
  organizar as bibliotecas que são necessárias para o seu projeto funcionar. Garantindo
  que tudo esteja em seu devido lugar, seja fácil de usar e seja facilmente atualizado

date: '2012-10-21 18:01:55 -0200'
categories:
- Desenvolvimento
- PHP
- Artigos
- Tutoriais
tags:
- PHP
- Composer
- Twig
- Doctrine
- Packagist
---
Se você está lendo esse artigo pelo [http://wp.me/pLryp-Gu](http://wp.me/pLryp-Gu) :)

Tudo começou com esse tweet:

https://twitter.com/TiuTalk/status/254967835045031936

E durante a semana seguinte rolou a entrevista com os palestrantes do [PHP'n Rio 2012](http://phpnrio.com.br/2012/):

http://www.youtube.com/watch?v=NCqwLxrX_NE/

Nessa entrevista, um dos assuntos que eu repeti várias vezes, foi sobre a organização de projetos e mencionei o [Composer](http://getcomposer.org/) algumas vezes.

## Mas afinal, o que é o Composer?
<blockquote>Composer is a tool for dependency management in PHP. It allows you to declare the dependent libraries your project needs and it will install them in your project for you.
</blockquote>
O <strong>Composer</strong> nada mais é do que um <strong>gerenciador de dependências</strong>... Com ele você define a lista de <strong>bibliotecas</strong> (e versões) das quais o seu projeto depende, e ele cuida da instalação, organização e "inclusão" das mesmas.

Gerenciadores de pacotes (ou dependências) são muito comuns em outras linguagens, como é o caso do [Composer](http://getcomposer.org/) pra fazer isso no PHP! :)

<h3>Mas como assim, Arnaldo?</h3>
Suponhamos que você esteja trabalhando num projeto que faça uso (dependa) do [Twig](http://twig.sensiolabs.org/)... Mas esse exemplo vale pra qualquer biblioteca, seja o PHPThumb, WideImage, MongoDB ou qualquer outra.

Se o seu projeto estiver versionado (seja SVN ou Git), <strong>essas bibliotecas provavelmente estão dentro do seu repositório</strong>, em versões "congeladas" e caso você queira atualizá-las você tem que fazer isso <strong>manualmente</strong> e depois atualizar seu repositório, acertei?

Já com o Composer, essas bibliotecas são gerenciadas de forma independente do seu projeto.

Ele funciona da seguinte forma:

<ol>
<li>Você tem um projeto que depende de uma lista de bibliotecas</li>
<li>Algumas dessas bibliotecas dependem de outras bibliotecas</li>
<li>Você declara apenas as bibliotecas das quais o seu projeto depende</li>
<li>O Composer encontra quais versões e quais pacotes precisam ser instalados e instala-os pra você (fazendo o download para dentro do seu projeto)</li>
</ol>
<div><span style="line-height: 24px;">São ferramentas como o Composer que tornam seu trabalho </span><strong style="line-height: 24px;">profissional</strong><span style="line-height: 24px;"> e <strong>organizado</strong>.</span></div>
## <span style="color: #999999;">Passo 1</span> - Instalando o Composer
Você pode instalar o Composer de duas formas: <strong>localmente</strong> (apenas para um projeto) ou de forma <strong>global</strong> (acessível para todos os projetos).

Para <strong>instalar localmente</strong>, você<strong></strong> executa o seguinte comando:

<div data-gist-id="3927122" data-gist-show-loading="false"></div>

Isso irá fazer o download do arquivo <strong>composer.phar</strong> (que é o executável que traz todas as funcionalidades do nosso amigo):

<div data-gist-id="3927127" data-gist-show-loading="false"></div>

Arquivos <strong>.phar</strong> são aplicações PHP encapsuladas em um único arquivo, mais informações aqui: [php.net/manual/en/intro.phar.php](http://php.net/manual/en/intro.phar.php)

Agora você já pode usar o Composer através do comando <strong>php composer.phar</strong>, mas se você quiser tornar essa instalação global, e fazer tudo através do comando <strong>composer</strong>, mova o executável para o diretório de executáveis do sistema (UNIX):

<div data-gist-id="3927128" data-gist-show-loading="false"></div>

Caso tenha alguma dúvida sobre a instalação, recomendo a leitura da documentação oficial: [getcomposer.org/doc/00-intro.md](http://getcomposer.org/doc/00-intro.md)

## <span style="color: #999999;">Passo 2</span> - Declarando dependências
Agora que você já tem o <strong>Composer</strong> funcionando (seja via uma instalação local ou global), você precisa definir as dependências do seu projeto.

O Composer trabalha com um repositório de pacotes, o [Packagist](https://packagist.org/)... É lá que você encontra o nome e versão dos pacotes que pode usar no seu projeto.

Como dito anteriormente, nosso projeto irá usa a última versão do <strong>Doctrine</strong> e do <strong>Twig</strong>, e definimos essas dependências no arquivo <strong>composer.json</strong>, na raiz do projeto:

<div data-gist-id="3927227" data-gist-show-loading="false"></div>

Nesse arquivo estamos informando ao Composer que nosso projeto depende de duas bibliotecas:

<ol>
<li><strong>Doctrine</strong> -- Qualquer versão do <strong>branch 2.x</strong>, em estado <strong>beta</strong></li>
<li><strong>Twig</strong> -- Qualquer versão do <strong>branch 1.x</strong>, em estado <strong>stable</strong> (estável)</li>
</ol>
Com isso você já aprende a sintaxe de versões, que poderia ser "<strong>1.1.2@dev</strong>", "<strong>2.0@beta</strong>", "<strong>2.x</strong>" ou "<strong>2.x@beta</strong>" ou "<strong>*</strong>" (para a última versão stable lançada) e "<strong>*@beta</strong>" para a última versão beta.

## <span style="color: #999999;">Passo 3</span> - Instalando as bibliotecas
Com essas dependências definidas, rodamos "<strong>php composer.phar install</strong>" (se a sua instalação foi local) ou "<strong>composer install</strong>" (se a sua instalação foi global)... e voila!

<div data-gist-id="3927261" data-gist-show-loading="false"></div>

O Composer acabou de baixar todos os pacotes necessários, e suas dependências!

Perceba que o <strong>doctrine/orm</strong> depende de outros dois pacotes: <strong>symfony/console</strong> e <strong>doctrine/dbal</strong>, que por sua vez depende do <strong>doctrine/common</strong>... Mas o Composer cuidou disso pra você! :)

Os pacotes instalados foram todos colocados em uma pasta "<strong>vendor</strong>", e dentro dele você pode notar o arquivo <strong>autoload.php</strong> com o seguinte código:

<div data-gist-id="3928198" data-gist-show-loading="false"></div>

É aqui que toda a mágica acontece! Esse é o arquivo que vai garantir que seu projeto tenha acesso às bibliotecas.

## <span style="color: #999999;">Passo 4</span> - Usando as bibliotecas
Agora é só incluir o <strong>autoload.php</strong> em qualquer lugar do seu projeto e sair usando as bibliotecas:

<h4>Usando o Doctrine</h4>

<div data-gist-id="3928244" data-gist-show-loading="false"></div>

Não vou entrar nos detalhes de utilização do <strong>Doctrine</strong>, apenas percebam que eu só fiz o include/require do <strong>autoload.php</strong> e saí usando as classes.

Para mais informações sobre o <strong>Doctrine</strong>, consulte a documentação oficial: [www.doctrine-project.org/](http://www.doctrine-project.org/)

<h4>Usando o Twig</h4>

<div data-gist-id="3928259" data-gist-show-loading="false"></div>

O resultado vai ser uma mensagem "<strong>Olá, Thiago!</strong>".

Para mais informações sobre o <strong>Twig</strong>, consulte a documentação oficial: [twig.sensiolabs.org/documentation](http://twig.sensiolabs.org/documentation)

Viram como é fácil? :)

## Finalizando
Espero realmente que vocês tenham entendido o poder que há por trás do <strong>Composer</strong>, e que procurem fazer uso dessas maravilhosas ferramentas open-source que estão à nossa disposição.

Acredito que muitos de vocês (meus amados leitores) ainda estão começando na área, mas é esse tipo de ferramenta que vai te tornar <strong>um profissional cada vez melhor</strong> e atualizado.

Não se esqueça de deixar seu comentário dizendo o que achou do <strong>Composer</strong> e se acha que ele vai fazer alguma diferença nos seus projetos.

Um grande abraço e até a próxima! :)

