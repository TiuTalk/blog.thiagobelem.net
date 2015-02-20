---
layout: post
title: Instalando o PHPIDS no seu site
excerpt: O PHPIDS ajuda a proteger o seu site de ataques como XSS, SQL Injection,
  RFE/LFI, DoS entre outros... Aprenda a instalar essa maravilhosa ferramenta que
  ajudará (e muito) na segurança do seu site/sistema.

date: '2009-06-01 20:54:49 -0300'
categories:
- PHP
- Tutoriais
- Segurança
tags: []
---
Algum tempo atrás falei aqui sobre o [PHPIDS](http://phpids.org/), que é uma classe/sistema muito bom para a segurança do site. A sua função se resume em vasculhar todas as possíveis entradas de informações do site ($_POST, $_GET, $_COOKIE e etc.) em busca de algo que possa ser uma tentativa de ataque e/ou invasão. Ele foi criado para a proteção de sites que usam e abusam das "funcionalidades" da WEB 2.0.

Se alguém inserir, por exemplo, um código SQL para tentar um SQL Injection no seu site, o PHPIDS vai pegar, vai avisar (ou não) sobre a tentativa de ataque, vai evitar o estrago e ainda te avisa (ou não) por e-mail. No total ele te protege dos seguintes tipos de ataque: <strong>XSS</strong>, <strong>SQL Injection</strong>, <strong>header injection</strong>, <strong>directory traversal</strong>, <strong>RFE/LFI</strong>, <strong>DoS</strong> e <strong>LDAP</strong>.

Para instalar ele no seu site é bem fácil:

1 - Faça o download dele no [site oficial](http://phpids.org/downloads/).

2 - Descompacte a pasta <strong>../libs/IDS</strong> na raiz (<em>root</em>) seu site (mantendo a pasta IDS).

3 - Insira o seguinte bloco de código no começo do seu site:


<div data-gist-id="5dc67d864f33f59a7995" data-gist-show-loading="false"></div>

Com isso ele já vai passar a funcionar... Vale lembrar que esse exemplo apenas avisa (mostra) que algo foi encontrado e bloqueia... Você vai  precisar adaptá-lo as suas necessidades.

Para configurar suas funções e usá-lo da melhor forma, recomendo que você dê uma olhada no arquivo Config.ini e/ou veja a <span class="removed_link" title="http://php-ids.org/faq/">página de FAQs</span>.

Espero que tenham gostado! :)

