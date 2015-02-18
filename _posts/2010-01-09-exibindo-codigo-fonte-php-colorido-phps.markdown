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
Fala gente,

Essa semana usei um recurso novo aqui no blog, são os arquivos phps ou PHP Source, normalmente eles não são interpretados pelo servidor, mas quando são acontece algo diferente com eles: ao invés do servidor executar seu código como PHP normal, ele exibe o código fonte, todo colorido, pra quem acessar.

<strong>Veja um exemplo:</strong> <a href="/arquivos/2010/01/usuarios.class.parte1.phps" target="_blank">http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte1.phps</a>

Isso é bem útil quando temos um site de tutoriais/compartilhamento de código/programação.

Hoje vou ensiná-los como habilitar isso em seus servidores rodando Apache e PHP... São apenas dois passos!

<h3>Passo 1</h3>
Vá na raiz do seu site e edite (ou crie se necessário) o seu arquivo .htaccess e adicione as seguintes linhas:


[code]Action php-source /php-source.php
AddHandler php-source .phps[/code]
Com isso você cria uma nova "ação" no apache e diz que os arquivos .phps serão "lidos" por essa "ação"... Você vai entender melhor no segundo passo:

<h3>Passo 2</h3>
Ainda na raiz do seu site, crie um arquivo chamado "<strong>php-source.php</strong>" e coloque o seguinte conteúdo nele:


[code language="php"]<?php
highlight_file($_SERVER["DOCUMENT_ROOT"] . $_SERVER["PATH_INFO"]);
?> [/code]

Isso fará com que esse arquivo criado pegue o caminho do arquvo requisitado (com extensão .phps) e use a função <a href="http://www.php.net/manual/pt_BR/function.highlight-file.php" title="highlight_file()" target="_blank">highlight_file()</a> do PHP para exibir o seu código-fonte com sintaxe coloria.

Pronto! :D

