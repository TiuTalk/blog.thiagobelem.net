---
layout: post
title: Gerenciando assets com o Bower

date: '2013-08-05 10:24:04 -0300'
categories:
- Desenvolvimento
- Implementação
- HTML
- Javascript
- Artigos
- Tutoriais
tags:
- jQuery
- Javascript
- Bower
---
Hoje vou replicar aqui um <a href="http://helabs.com.br/blog/2013/07/08/gerenciando-assets-com-o-bower/">post que publiquei no blog da HE:labs</a>.

O Bower (<a href="http://bower.io/">bower.io</a>), criado pelo galerê do <strong>Twitter</strong>, é um “gerenciador de pacotes para web”, mas especificamente para pacotes de Front-end.

A ideia por trás dele é bem simples: você lista as dependências de JS (jQuery, jQuery Highlight, Backbone e etc.) em um arquivo <code>bower.json</code> que fica dentro do seu projeto, e controla a instalação/atualização desses pacotes por linha de comando.

<h3>Intalando o Bower</h3>
Antes de tudo, você vai precisar do <a href="http://nodejs.org/">Node.js</a> e do <a href="http://npmjs.org/">NPM</a> instalados na sua máquina.

Agora é só usar o NPM para instalar o Bower globalmente no seu sistema:

<div data-gist-id="6155753" data-gist-show-loading="false"></div>
<h3>Instalando pacotes com o Bower</h3>
Agora você pode instalar pacotes de três formas diferentes:

<div data-gist-id="6155762" data-gist-show-loading="false"></div>
Onde <code><package></code> pode ser um dos seguintes itens:

<ul>
<li>O nome de um pacote registrado no Bower, por exemplo <code>jquery</code></li>
<li>Um repositório Git remoto, por exemplo <code>git://github.com/someone/some-package.git </code>(público ou privado)</li>
<li>Um repositório Git local, por exemplo <code>/var/www/jquery.git/</code></li>
<li>Um atalho para um repositório no GitHub, por exemplo <code>someone/some-package</code></li>
<li>A URL de um arquivo <code>zip</code> ou <code>tar.gz</code></li>
</ul>
Todos os pacotes serão instalados numa pasta <code>bower_components</code> dentro do seu projeto. E a ideia é que você nunca altere o conteúdo dessa pasta, nem dos pacotes dentro dela. Por isso, uma boa é colocá-la no seu <code>.gitignore</code>.

<h3>Definindo as dependências do seu projeto no bower.json</h3>
O conteúdo do arquivo do seu bower.json descreve o seu projeto e suas dependências num projeto onde usamos o <strong>jQuery</strong> e o <strong>Angular.js</strong>. Ele seria mais ou menos assim:

<div data-gist-id="6155766" data-gist-show-loading="false"></div>
Após rodar o comando de instalação:

<div data-gist-id="6155768" data-gist-show-loading="false"></div>
Veríamos o seguinte output:

<div data-gist-id="6155770" data-gist-show-loading="false"></div>
E com isso acabamos de instalar o Angular.js (1.0.7) e o jQuery (2.0.2) no nosso projeto!

Se amanhã sair outra versão do jQuery, podemos atualizá-lo com:

<div data-gist-id="6155868" data-gist-show-loading="false"></div>
E o jQuery será atualizado, mas o Angular permancerá na versão 1.0.7, pois foi assim que definimos no nosso <code>bower.json</code>.

<h3>Incluindo assets instalados com o Bower</h3>
Claro que esse passo é opcional se você estiver incluindo assets de outra forma (Sprockets?). Mas vou deixar aqui um pequeno exemplo para não ficarem dúvidas.

Para incluir os arquivos de um projeto, não existe magia negra, é só usar o caminho completo:

<div data-gist-id="6155880" data-gist-show-loading="false"></div>
<h3>Conclusão</h3>
Acredito que o Bower tenha bastante futuro, pois estamos cada vez mais tirando as dependências de dentro dos nossos projetos e repositórios, deixando apenas o que é realmente único e importante para a aplicação.

Até a próxima!

