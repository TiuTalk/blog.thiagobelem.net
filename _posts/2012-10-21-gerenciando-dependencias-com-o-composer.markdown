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
<p>Se você está lendo esse artigo pelo <a href="http://blog.thiagobelem.net/feed/" target="_blank">Feed RSS</a>, recomendo fortemente que vá até o blog ver o <strong>novo layout</strong>: <a href="http://wp.me/pLryp-Gu" target="_blank">http://wp.me/pLryp-Gu</a> :)</p>
<p>Tudo começou com esse tweet:</p>
<p>https://twitter.com/TiuTalk/status/254967835045031936</p>
<p>E durante a semana seguinte rolou a entrevista com os palestrantes do <a title="PHP'n Rio 2012" href="http://phpnrio.com.br/2012/" target="_blank">PHP'n Rio 2012</a>:</p>
<p>http://www.youtube.com/watch?v=NCqwLxrX_NE/</p>
<p>Nessa entrevista, um dos assuntos que eu repeti várias vezes, foi sobre a organização de projetos e mencionei o <a href="http://getcomposer.org/" target="_blank">Composer</a> algumas vezes.</p>
<h2>Mas afinal, o que é o Composer?</h2>
<blockquote><p>Composer is a tool for dependency management in PHP. It allows you to declare the dependent libraries your project needs and it will install them in your project for you.</p></blockquote>
<p>O <strong>Composer</strong> nada mais é do que um <strong>gerenciador de dependências</strong>... Com ele você define a lista de <strong>bibliotecas</strong> (e versões) das quais o seu projeto depende, e ele cuida da instalação, organização e "inclusão" das mesmas.</p>
<p>Gerenciadores de pacotes (ou dependências) são muito comuns em outras linguagens, como é o caso do <a href="http://npmjs.org/" target="_blank">npm</a> pro Node.js, <a href="http://gembundler.com/" target="_blank">bundler</a> pro Ruby e <a href="http://pypi.python.org/pypi/pip" target="_blank">pip</a> pro Python... E, finalmente, agora temos o <a href="http://getcomposer.org/" target="_blank">Composer</a> pra fazer isso no PHP! :)</p>
<h3>Mas como assim, Arnaldo?</h3>
<p>Suponhamos que você esteja trabalhando num projeto que faça uso (dependa) do <a href="http://www.doctrine-project.org/" target="_blank">Doctrine</a> e do <a href="http://twig.sensiolabs.org/" target="_blank">Twig</a>... Mas esse exemplo vale pra qualquer biblioteca, seja o PHPThumb, WideImage, MongoDB ou qualquer outra.</p>
<p>Se o seu projeto estiver versionado (seja SVN ou Git), <strong>essas bibliotecas provavelmente estão dentro do seu repositório</strong>, em versões "congeladas" e caso você queira atualizá-las você tem que fazer isso <strong>manualmente</strong> e depois atualizar seu repositório, acertei?</p>
<p>Já com o Composer, essas bibliotecas são gerenciadas de forma independente do seu projeto.</p>
<p>Ele funciona da seguinte forma:</p>
<ol>
<li>Você tem um projeto que depende de uma lista de bibliotecas</li>
<li>Algumas dessas bibliotecas dependem de outras bibliotecas</li>
<li>Você declara apenas as bibliotecas das quais o seu projeto depende</li>
<li>O Composer encontra quais versões e quais pacotes precisam ser instalados e instala-os pra você (fazendo o download para dentro do seu projeto)</li>
</ol>
<div><span style="line-height: 24px;">São ferramentas como o Composer que tornam seu trabalho </span><strong style="line-height: 24px;">profissional</strong><span style="line-height: 24px;"> e <strong>organizado</strong>.</span></div>
<h2><span style="color: #999999;">Passo 1</span> - Instalando o Composer</h2>
<p>Você pode instalar o Composer de duas formas: <strong>localmente</strong> (apenas para um projeto) ou de forma <strong>global</strong> (acessível para todos os projetos).</p>
<p>Para <strong>instalar localmente</strong>, você<strong></strong> executa o seguinte comando:</p>
<div data-gist-id="3927122" data-gist-show-loading="false"></div>
<p>Isso irá fazer o download do arquivo <strong>composer.phar</strong> (que é o executável que traz todas as funcionalidades do nosso amigo):</p>
<div data-gist-id="3927127" data-gist-show-loading="false"></div>
<p>Arquivos <strong>.phar</strong> são aplicações PHP encapsuladas em um único arquivo, mais informações aqui: <a href="http://php.net/manual/en/intro.phar.php">php.net/manual/en/intro.phar.php</a></p>
<p>Agora você já pode usar o Composer através do comando <strong>php composer.phar</strong>, mas se você quiser tornar essa instalação global, e fazer tudo através do comando <strong>composer</strong>, mova o executável para o diretório de executáveis do sistema (UNIX):</p>
<div data-gist-id="3927128" data-gist-show-loading="false"></div>
<p>Caso tenha alguma dúvida sobre a instalação, recomendo a leitura da documentação oficial: <a href="http://getcomposer.org/doc/00-intro.md" target="_blank">getcomposer.org/doc/00-intro.md</a></p>
<h2><span style="color: #999999;">Passo 2</span> - Declarando dependências</h2>
<p>Agora que você já tem o <strong>Composer</strong> funcionando (seja via uma instalação local ou global), você precisa definir as dependências do seu projeto.</p>
<p>O Composer trabalha com um repositório de pacotes, o <a href="https://packagist.org/" target="_blank">Packagist</a>... É lá que você encontra o nome e versão dos pacotes que pode usar no seu projeto.</p>
<p>Como dito anteriormente, nosso projeto irá usa a última versão do <strong>Doctrine</strong> e do <strong>Twig</strong>, e definimos essas dependências no arquivo <strong>composer.json</strong>, na raiz do projeto:</p>
<div data-gist-id="3927227" data-gist-show-loading="false"></div>
<p>Nesse arquivo estamos informando ao Composer que nosso projeto depende de duas bibliotecas:</p>
<ol>
<li><strong>Doctrine</strong> -- Qualquer versão do <strong>branch 2.x</strong>, em estado <strong>beta</strong></li>
<li><strong>Twig</strong> -- Qualquer versão do <strong>branch 1.x</strong>, em estado <strong>stable</strong> (estável)</li>
</ol>
<p>Com isso você já aprende a sintaxe de versões, que poderia ser "<strong>1.1.2@dev</strong>", "<strong>2.0@beta</strong>", "<strong>2.x</strong>" ou "<strong>2.x@beta</strong>" ou "<strong>*</strong>" (para a última versão stable lançada) e "<strong>*@beta</strong>" para a última versão beta.</p>
<h2><span style="color: #999999;">Passo 3</span> - Instalando as bibliotecas</h2>
<p>Com essas dependências definidas, rodamos "<strong>php composer.phar install</strong>" (se a sua instalação foi local) ou "<strong>composer install</strong>" (se a sua instalação foi global)... e voila!</p>
<div data-gist-id="3927261" data-gist-show-loading="false"></div>
<p>O Composer acabou de baixar todos os pacotes necessários, e suas dependências!</p>
<p>Perceba que o <strong>doctrine/orm</strong> depende de outros dois pacotes: <strong>symfony/console</strong> e <strong>doctrine/dbal</strong>, que por sua vez depende do <strong>doctrine/common</strong>... Mas o Composer cuidou disso pra você! :)</p>
<p>Os pacotes instalados foram todos colocados em uma pasta "<strong>vendor</strong>", e dentro dele você pode notar o arquivo <strong>autoload.php</strong> com o seguinte código:</p>
<div data-gist-id="3928198" data-gist-show-loading="false"></div>
<p>É aqui que toda a mágica acontece! Esse é o arquivo que vai garantir que seu projeto tenha acesso às bibliotecas.</p>
<h2><span style="color: #999999;">Passo 4</span> - Usando as bibliotecas</h2>
<p>Agora é só incluir o <strong>autoload.php</strong> em qualquer lugar do seu projeto e sair usando as bibliotecas:</p>
<h4>Usando o Doctrine</h4>
<div data-gist-id="3928244" data-gist-show-loading="false"></div>
<p>Não vou entrar nos detalhes de utilização do <strong>Doctrine</strong>, apenas percebam que eu só fiz o include/require do <strong>autoload.php</strong> e saí usando as classes.</p>
<p>Para mais informações sobre o <strong>Doctrine</strong>, consulte a documentação oficial: <a href="http://www.doctrine-project.org/">www.doctrine-project.org/</a></p>
<h4>Usando o Twig</h4>
<div data-gist-id="3928259" data-gist-show-loading="false"></div>
<p>O resultado vai ser uma mensagem "<strong>Olá, Thiago!</strong>".</p>
<p>Para mais informações sobre o <strong>Twig</strong>, consulte a documentação oficial: <a href="http://twig.sensiolabs.org/documentation">twig.sensiolabs.org/documentation</a></p>
<p>Viram como é fácil? :)</p>
<h2>Finalizando</h2>
<p>Espero realmente que vocês tenham entendido o poder que há por trás do <strong>Composer</strong>, e que procurem fazer uso dessas maravilhosas ferramentas open-source que estão à nossa disposição.</p>
<p>Acredito que muitos de vocês (meus amados leitores) ainda estão começando na área, mas é esse tipo de ferramenta que vai te tornar <strong>um profissional cada vez melhor</strong> e atualizado.</p>
<p>Não se esqueça de deixar seu comentário dizendo o que achou do <strong>Composer</strong> e se acha que ele vai fazer alguma diferença nos seus projetos.</p>
<p>Um grande abraço e até a próxima! :)</p>
