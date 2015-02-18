---
layout: post
status: publish
published: true
title: Gerenciando assets com o Bower
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 3814
wordpress_url: http://blog.thiagobelem.net/?p=3814
date: '2013-08-05 10:24:04 -0300'
date_gmt: '2013-08-05 13:24:04 -0300'
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
<p>Hoje vou replicar aqui um <a href="http://helabs.com.br/blog/2013/07/08/gerenciando-assets-com-o-bower/">post que publiquei no blog da HE:labs</a>.</p>
<p>O Bower (<a href="http://bower.io/">bower.io</a>), criado pelo galerê do <strong>Twitter</strong>, é um “gerenciador de pacotes para web”, mas especificamente para pacotes de Front-end.</p>
<p>A ideia por trás dele é bem simples: você lista as dependências de JS (jQuery, jQuery Highlight, Backbone e etc.) em um arquivo <code>bower.json</code> que fica dentro do seu projeto, e controla a instalação/atualização desses pacotes por linha de comando.</p>
<h3>Intalando o Bower</h3>
<p>Antes de tudo, você vai precisar do <a href="http://nodejs.org/">Node.js</a> e do <a href="http://npmjs.org/">NPM</a> instalados na sua máquina.</p>
<p>Agora é só usar o NPM para instalar o Bower globalmente no seu sistema:</p>
<p>[gist id=6155753]</p>
<h3>Instalando pacotes com o Bower</h3>
<p>Agora você pode instalar pacotes de três formas diferentes:</p>
<p>[gist id=6155762]</p>
<p>Onde <code>&lt;package&gt;</code> pode ser um dos seguintes itens:</p>
<ul>
<li>O nome de um pacote registrado no Bower, por exemplo <code>jquery</code></li>
<li>Um repositório Git remoto, por exemplo <code>git://github.com/someone/some-package.git </code>(público ou privado)</li>
<li>Um repositório Git local, por exemplo <code>/var/www/jquery.git/</code></li>
<li>Um atalho para um repositório no GitHub, por exemplo <code>someone/some-package</code></li>
<li>A URL de um arquivo <code>zip</code> ou <code>tar.gz</code></li>
</ul>
<p>Todos os pacotes serão instalados numa pasta <code>bower_components</code> dentro do seu projeto. E a ideia é que você nunca altere o conteúdo dessa pasta, nem dos pacotes dentro dela. Por isso, uma boa é colocá-la no seu <code>.gitignore</code>.</p>
<h3>Definindo as dependências do seu projeto no bower.json</h3>
<p>O conteúdo do arquivo do seu bower.json descreve o seu projeto e suas dependências num projeto onde usamos o <strong>jQuery</strong> e o <strong>Angular.js</strong>. Ele seria mais ou menos assim:</p>
<p>[gist id=6155766]</p>
<p>Após rodar o comando de instalação:</p>
<p>[gist id=6155768]</p>
<p>Veríamos o seguinte output:</p>
<p>[gist id=6155770]</p>
<p>E com isso acabamos de instalar o Angular.js (1.0.7) e o jQuery (2.0.2) no nosso projeto!</p>
<p>Se amanhã sair outra versão do jQuery, podemos atualizá-lo com:</p>
<p>[gist id=6155868]</p>
<p>E o jQuery será atualizado, mas o Angular permancerá na versão 1.0.7, pois foi assim que definimos no nosso <code>bower.json</code>.</p>
<h3>Incluindo assets instalados com o Bower</h3>
<p>Claro que esse passo é opcional se você estiver incluindo assets de outra forma (Sprockets?). Mas vou deixar aqui um pequeno exemplo para não ficarem dúvidas.</p>
<p>Para incluir os arquivos de um projeto, não existe magia negra, é só usar o caminho completo:</p>
<p>[gist id=6155880]</p>
<h3>Conclusão</h3>
<p>Acredito que o Bower tenha bastante futuro, pois estamos cada vez mais tirando as dependências de dentro dos nossos projetos e repositórios, deixando apenas o que é realmente único e importante para a aplicação.</p>
<p>Até a próxima!</p>