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

<strong>Veja um exemplo:</strong> [/arquivos/2010/01/usuarios.class.parte1.phps](/arquivos/2010/01/usuarios.class.parte1.phps)

Isso é bem útil quando temos um site de tutoriais/compartilhamento de código/programação.

Hoje vou ensiná-los como habilitar isso em seus servidores rodando Apache e PHP... São apenas dois passos!

<h3>Passo 1</h3>
Vá na raiz do seu site e edite (ou crie se necessário) o seu arquivo .htaccess e adicione as seguintes linhas:


<div data-gist-id="42a5c37b4f950fd14793" data-gist-show-loading="false"></div>

Com isso você cria uma nova "ação" no apache e diz que os arquivos .phps serão "lidos" por essa "ação"... Você vai entender melhor no segundo passo:

<h3>Passo 2</h3>
Ainda na raiz do seu site, crie um arquivo chamado "<strong>php-source.php</strong>" e coloque o seguinte conteúdo nele:


<div data-gist-id="a4d476e53f17a3a743b4" data-gist-show-loading="false"></div>

Isso fará com que esse arquivo criado pegue o caminho do arquvo requisitado (com extensão .phps) e use a função [highlight_file()](http://www.php.net/manual/pt_BR/function.highlight-file.php) do PHP para exibir o seu código-fonte com sintaxe coloria.

Pronto! :D

