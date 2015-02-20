---
layout: post
title: O que são e como usar as Cron Jobs?
excerpt: Aprenda o que são, pra que servem e como são criadas as Cron Jobs, tarefas
  que rodam diáriamente no seu servidor e te ajudam com todas as tarefas automáticas
  de limpeza, backup e/ou atualização.

date: '2009-08-08 08:50:44 -0300'
categories:
- Artigos
- Linux
tags:
- Linux
- Cronjobs
- Cron-jobs
- Tarefas Agendadas
---
Hoje vi uma pergunta no fórum do iMasters bem simples mas que me deu vontade de criar um tópico aqui para respondê-la: <span class="removed_link" title="http://forum.imasters.uol.com.br/index.php?/topic/357214-cron-jobs-o-que-e/">Cron jobs, o que é?</span>

### O que são as Cron Jobs?
As <em>Cron Jobs</em> são como as Terefas Agendadas do Windows: são tarefas executadas automaticamente de X em X tempos... Fazendo uma analogia à vida real é quando você tira o lixo pra fora ou arruma seu quarto, provavelmente você faz isso seguindo sempre um mesmo intervalo de tempo... De 2 em 2 dias, de 1 em 1 semana e por ai vai.

O termo "<em>Cron Job</em>" (também só chamado de <strong>cron</strong>) está mais ligado a sistemas <strong>UNIX</strong> do que <strong>Windows</strong> mesmo... Por isso o que vou falar aqui só se encaixa no <strong>Linux</strong>. Se você usa <strong>Windows</strong> é só dar uma olhada nas tarefas agendadas que você vai ter uma interface completa para trabalhar com as <strong>Tarefas Agendadas</strong>.

### Pra que usar uma Cron Job em um site/sistema online?
Acho que o propósito mais comum de uma Cron Job seja a rotina de backup... Scripts que rodam diariamente (ou até mais demorados) e que fazem o backup do site e do banco de dados.

Você pode criar uma cron para quase qualquer coisa, mas geralmente são para atualização, limpeza, backup e etc.

Mas chega de lero lero...

### Como criar uma Cron Job?
Se o seu site roda em algum servidor especializado e você tem um painel de controle como o cPanel recomendo que dê uma olhada lá pois existe uma interface web prontinha para gerenciar as crons... se você não tem esse painel ou não tem acesso à ele vai ter que ir direto ao shell / terminal do seu servidor e começar a gastar o dedo.

A definição de uma cron job consiste em uma linha com 6 valores separados por espaço, assim:


<div data-gist-id="59cfe6d37975c4703d11" data-gist-show-loading="false"></div>

Vamos a alguns exemplos de configuração de tempo antes de criar a cron em si:

#### Cron Job que rode todo dia as 06:00am

<div data-gist-id="27c4a207d7970ef6aaaa" data-gist-show-loading="false"></div>

#### Cron Job que rode as 12:30am de segunda e sexta

<div data-gist-id="76120464eff10d972c3f" data-gist-show-loading="false"></div>

#### Cron Job que rode a meia-noite de três em três dias

<div data-gist-id="8c11fd5d9f5dd6ac428f" data-gist-show-loading="false"></div>

#### Cron Job que rode todo dia a cada duas horas

<div data-gist-id="339633fc7d736a92e4d0" data-gist-show-loading="false"></div>

Se você ficou com dificuldade nessa parte do tempo existem alguns [esse aqui](http://www.generateit.net/cron-job/). :)



### A linha-de-comando
É um comando que você usaria normalmente para iniciar um script ou chamar um wget. :)

### Instalando suas Cron Jobs
Agora é só salvar o conteúdo das suas crons, uma por linha em um arquivo chamado cron.txt e colocar uma linha assim no começo (primeira linha) do arquivo:

<div data-gist-id="13a5224428e372ea2ac6" data-gist-show-loading="false"></div>

Isso fará com que os erros sejam enviados para o e-mail determinado.

Depois é só ir no terminal/shell e chamar o comando:

<div data-gist-id="0913b2ae8649a0a1f749" data-gist-show-loading="false"></div>

Se nada der errado a cron foi instalada com sucesso e você pode vê-la na lista de crons que estão rodando:

<div data-gist-id="f65441cef4153297ad33" data-gist-show-loading="false"></div>

Ufa! :D

Pra quem gostou e/ou quer saber mais ficam aqui alguns links:
» [http://www.thesitewizard.com/general/set-cron-job.shtml](http://www.thesitewizard.com/general/set-cron-job.shtml)
» [http://www.aota.net/Script_Installation_Tips/cronhelp.php3](http://www.aota.net/Script_Installation_Tips/cronhelp.php3)

