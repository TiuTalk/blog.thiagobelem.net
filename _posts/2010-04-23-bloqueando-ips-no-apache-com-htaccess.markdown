---
layout: post
title: Bloqueando IPs no Apache com .htaccess
excerpt: Aprenda a bloquear visitantes pelo IP utilizando os arquivos .htaccess do
  seu servidor. Entenda as vantagens e desvantagens de bloquear alguém pelo IP e deixe
  seu servidor mais seguro cortando o mal pela raíz [do servidor!].

date: '2010-04-23 13:20:15 -0300'
categories:
- Tutoriais
- Apache
- Segurança
tags:
- Apache
- IP
- Block
- Ban
---
Hoje vou falar sobre um assunto muito importante relacionado a segurança: como bloquear IPs no seu servidor [Apache] utilizando o seu arquivo <strong>.htaccess</strong>.

A meses que pessoas têm tentado invadir o meu blog e, como eu estava sempre conseguindo "pegar" os invasores, me diverti por um tempo com essas tentativas... Mas resolvi tomar uma providência e bloqueei os IPs que continuam tentando invadir o blog.

Aproveitei o ritmo e resolvi ensinar à vocês como fazer isso... Já falei antes sobre [como bloquear visitantes pelo IP utilizando PHP e MySQL](/bloqueando-visitantes-pelo-ip-com-mysql-e-php) só que o bloqueio com <strong>.htaccess</strong> é muito mais eficiente pois ele bloqueia logo no começo da requisição e exibe uma página de erro das mais feias.

<h3>Bloqueando IPs</h3>
Edite (ou crie) o arquivo <strong>.htaccess</strong> na raíz do seu servidor e coloque o seguinte código:


<div data-gist-id="c7280c96bd6600e8ec12" data-gist-show-loading="false"></div>

Perceba a lista de IPs que temos, para cada novo IP que você deseja bloquear é só colocar mais uma linha com "deny from <strong>{IP}</strong>" e esse IP não conseguirá acessar mais nada no seu site! :D

<h3>"Bloquear ou não bloquear?", eis a questão</h3>
Mas antes de sair bloqueando todos os seus inimigos dos tempos de escola, pense duas vezes!

As pessoas hoje em dia têm IPs dinâmicos, o que significa que, cada vez que eles se conectam à Internet (quando elas reiniciam seus modens ou suas conexões discadas) elas recebem um <strong>novo endereço de IP</strong>. Isso significa a pessoa com IP XYZ que você bloqueou hoje pode, amanhã, ser outra pessoa que não deveria ser bloqueada.

Sempre que você bloquear um IP você deve ter noção que não está bloqueando a pessoa ou robô que te incomoda, e sim quem tiver acessando o seu servidor por aquele IP, se o indivíduo mudar de IP ela vai conseguir acessar o seu site e você vai acabar bloqueando outra pessoa que não tem nada a ver com a história.

Por isso, <strong>bloqueie apenas quando você tem certeza que a pessoa continuará com aquele IP</strong> ou em uma situação de emergência onde um IP específico está causando problemas no seu servidor.

Abraços, deixem seus comentários e até a próxima! :)

