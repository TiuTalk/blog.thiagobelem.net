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

<h3>O que são as Cron Jobs?</h3>
As <em>Cron Jobs</em> são como as Terefas Agendadas do Windows: são tarefas executadas automaticamente de X em X tempos... Fazendo uma analogia à vida real é quando você tira o lixo pra fora ou arruma seu quarto, provavelmente você faz isso seguindo sempre um mesmo intervalo de tempo... De 2 em 2 dias, de 1 em 1 semana e por ai vai.

O termo "<em>Cron Job</em>" (também só chamado de <strong>cron</strong>) está mais ligado a sistemas <strong>UNIX</strong> do que <strong>Windows</strong> mesmo... Por isso o que vou falar aqui só se encaixa no <strong>Linux</strong>. Se você usa <strong>Windows</strong> é só dar uma olhada nas tarefas agendadas que você vai ter uma interface completa para trabalhar com as <strong>Tarefas Agendadas</strong>.

<h3>Pra que usar uma Cron Job em um site/sistema online?</h3>
Acho que o propósito mais comum de uma Cron Job seja a rotina de backup... Scripts que rodam diariamente (ou até mais demorados) e que fazem o backup do site e do banco de dados.

Você pode criar uma cron para quase qualquer coisa, mas geralmente são para atualização, limpeza, backup e etc.

Mas chega de lero lero...

<h3>Como criar uma Cron Job?</h3>
Se o seu site roda em algum servidor especializado e você tem um painel de controle como o cPanel recomendo que dê uma olhada lá pois existe uma interface web prontinha para gerenciar as crons... se você não tem esse painel ou não tem acesso à ele vai ter que ir direto ao shell / terminal do seu servidor e começar a gastar o dedo.

A definição de uma cron job consiste em uma linha com 6 valores separados por espaço, assim:


[code]
minuto hora dia mes dia-da-semana linha-de-comando
[/code]

Vamos a alguns exemplos de configuração de tempo antes de criar a cron em si:

<h4>Cron Job que rode todo dia as 06:00am</h4>

[code]
0 6 * * * linha-de-comando
[/code]

<h4>Cron Job que rode as 12:30am de segunda e sexta</h4>

[code]
30 12 * * 1,5 linha-de-comando
[/code]

<h4>Cron Job que rode a meia-noite de três em três dias</h4>

[code]
0 0 */3 * * linha-de-comando
[/code]

<h4>Cron Job que rode todo dia a cada duas horas</h4>

[code]
0 */2 * * * linha-de-comando
[/code]

Se você ficou com dificuldade nessa parte do tempo existem alguns <a href="http://www.google.com.br/search?q=cron+job+generator" target="_blank">geradores online de cron jobs</a> que pode te ajudar como <a href="http://www.generateit.net/cron-job/" target="_blank">esse aqui</a>. :)



<h3>A linha-de-comando</h3>
É um comando que você usaria normalmente para iniciar um script ou chamar um wget. :)

<h3>Instalando suas Cron Jobs</h3>
Agora é só salvar o conteúdo das suas crons, uma por linha em um arquivo chamado cron.txt e colocar uma linha assim no começo (primeira linha) do arquivo:
[code]
MAILTO=meuemail@meudominio.com
[/code]
Isso fará com que os erros sejam enviados para o e-mail determinado.

Depois é só ir no terminal/shell e chamar o comando:
[code]
crontab cron.txt
[/code]
Se nada der errado a cron foi instalada com sucesso e você pode vê-la na lista de crons que estão rodando:
[code]
crontab -l
[/code]

Ufa! :D

Pra quem gostou e/ou quer saber mais ficam aqui alguns links:
» <a href="http://www.thesitewizard.com/general/set-cron-job.shtml" target="_blank">http://www.thesitewizard.com/general/set-cron-job.shtml</a>
» <a href="http://www.aota.net/Script_Installation_Tips/cronhelp.php3" target="_blank">http://www.aota.net/Script_Installation_Tips/cronhelp.php3</a>

