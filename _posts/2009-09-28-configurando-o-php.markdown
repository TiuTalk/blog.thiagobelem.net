---
layout: post
title: Configurando o PHP
excerpt: Veja uma lista de opções e configurações do PHP que remecem a sua atenção.
  São opções ligadas a segurança e o "bom funcionamento" do seu sistema. Entenda como
  alterar, pra que servem e quais são os <em>valores ideais</em> pra cada uma dessas
  opções.

date: '2009-09-28 13:56:37 -0300'
categories:
- PHP
- Artigos
- Otimização
- Segurança
tags:
- PHP
---
Fala gente,

Hoje vi um ótimo post no blog do [Brandon Savage](http://www.brandonsavage.net/) e resolvi traduzir ele aqui pra vocês... ;)

### Configurando o PHP - Ajustes essenciais no INI
Quando se está instalando e criando um servidor para PHP existem várias diretrizes de configuração que devem ser levadas em conta. É sempre bom atentar para essas configurações e verificá-las antes de começar a usar o servidor.

Todas essas configurações podem ser ajustadas acessando o arquivo php.ini que fica na pasta de instalação do seu PHP ou usando um arquivo .htaccess para modificar o seu valor, mostrarei como fazer isso no fim do post.

### register_globals = <span style="color: red;">off</span>
A opção <strong>register_globals</strong> é de longe a mais polêmica e a maior "destruidora de lares". Por padrão ela já vem desligada e DEVE permanecer dessa forma. Essa opção ligada é uma das maiores brechas de segurança que o seu site/sistema pode ter. Algumas pessoas usam-a para manter sistemas antigos/legados funcionando, e isso é errado.

### magic_quotes_gpc = <span style="color: red;">off</span>
Essa é outra opção muito usada para manter sistemas antigos funcionando. Ela, quando ligada, coloca uma contra-barra antes de cada aspa que estiver presente no conteúdo das variáveis $_GET, $_POST e $_COOKIE. Ao contrário do que alguns acreditam essa variável não deixa o sistema mais seguro.

### error_reporting = <span style="color: orange;">E_ALL | E_STRICT</span>
Aqui você define os [tipos de erros](http://www.php.net/manual/en/errorfunc.constants.php) que o PHP irá relatar pra você. Isso te ajudará a encontrar erros no seu código mesmo em modo de produção.

### display_errors = <span style="color: red;">off</span>
Mesmo que você tenha definido uma lista de erros que devem ser reportados pelo PHP você não quer que os visitantes/usuários os vejam! Essa configuração fará exatamente isso: esconder os erros e salvá-los em um arquivo de log de erros. Deixar essa variável ligada é outra brecha de segurança enorme que você não vai querer ter no seu sistema.

### session.gc_maxlifetime = <span style="color: blue;">28800</span>
Essa configuração determina quanto tempo (em segundos) uma sessão irá durar no seu sistema. O valor padrão é 1140, o que dá cerca de 24 minutos e é muito pouco caso o seu usuário esteja lendo um artigo/notícia grande. 28800 segundos equivale a 8 horas.

### upload_max_filesize = <span style="color: blue;">10M</span>post_max_size = <span style="color: blue;">11M</span>
Essas configurações tratam do tamanho das requisições POST que você faz ao php... A primeira determina o tamanho máximo de UPLOAD e a segunda determina o tamanho máximo da requisição... É sempre bom deixar esses valores um pouco maiores do que são por padrão (2M & 8M) pois normalmente você precisa de um upload maior que 2Mb.

--

### Mudando uma configuração do PHP via arquivos .htaccess
Normalmente você vai estar rodando seu site/sistema em um servidor compartilhado, o que não te dará permissão de acesso ao arquivo <strong>php.ini</strong>, por isso o PHP permite que você altere essas opções direto pelo Apache, ou seja: usando arquivos .htaccess.

Existe um comando diferente para cada TIPO de valor que será alterado, os valores que são flags lógicas, ou seja true ou false, 0 ou 1, on ou off você faz assim:


<div data-gist-id="9f51026a998bf1fcd651" data-gist-show-loading="false"></div>

E os outros tipos de configurações, que recebem valores não lógicos, como o tamanho máximo do upload, você faz assim:


<div data-gist-id="52b869e41624aed4bf3a" data-gist-show-loading="false"></div>

Espero que tenham gostado! :)

