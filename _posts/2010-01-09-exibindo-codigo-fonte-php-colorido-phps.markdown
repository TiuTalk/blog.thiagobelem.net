---
layout: post
title: Exibindo código-fonte PHP colorido (.phps)
excerpt: Veja como é simples fazer o seu Apache reconhecer os arquivos .phps e exibir
  o seu código-fonte colorido... Muito útil para sites de tutoriais/compartilhamento
  de código/programação.

date: '2010-01-09 09:49:31 -0200'
categories:
- PHP
- Tutoriais
- Apache
tags:
- PHP
- PHPs
- Código Fonte
- Syntax Highlighter
---
<p>Fala gente,</p>
<p>Essa semana usei um recurso novo aqui no blog, são os arquivos phps ou PHP Source, normalmente eles não são interpretados pelo servidor, mas quando são acontece algo diferente com eles: ao invés do servidor executar seu código como PHP normal, ele exibe o código fonte, todo colorido, pra quem acessar.</p>
<p><strong>Veja um exemplo:</strong> <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte1.phps" target="_blank">http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte1.phps</a></p>
<p>Isso é bem útil quando temos um site de tutoriais/compartilhamento de código/programação.</p>
<p>Hoje vou ensiná-los como habilitar isso em seus servidores rodando Apache e PHP... São apenas dois passos!</p>
<h3>Passo 1</h3>
<p>Vá na raiz do seu site e edite (ou crie se necessário) o seu arquivo .htaccess e adicione as seguintes linhas:</p>
<p>[code]Action php-source /php-source.php<br />
AddHandler php-source .phps[/code]<br />
Com isso você cria uma nova "ação" no apache e diz que os arquivos .phps serão "lidos" por essa "ação"... Você vai entender melhor no segundo passo:<br />
<br />
<h3>Passo 2</h3>
<p>Ainda na raiz do seu site, crie um arquivo chamado "<strong>php-source.php</strong>" e coloque o seguinte conteúdo nele:</p>
<p>[code language="php"]<?php<br />
highlight_file($_SERVER["DOCUMENT_ROOT"] . $_SERVER["PATH_INFO"]);<br />
?> [/code]</p>
<p>Isso fará com que esse arquivo criado pegue o caminho do arquvo requisitado (com extensão .phps) e use a função <a href="http://www.php.net/manual/pt_BR/function.highlight-file.php" title="highlight_file()" target="_blank">highlight_file()</a> do PHP para exibir o seu código-fonte com sintaxe coloria.</p>
<p>Pronto! :D</p>
