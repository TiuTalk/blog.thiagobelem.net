---
layout: post
title: Login automático no SSH (no Linux)
excerpt: Com o SSH você consegue controlar seu servidor remotamente utilizando comandos,
  aprenda a tornar o acesso via SSH uma coisa mais fácil e rápida

date: '2010-07-26 19:32:58 -0300'
categories:
- Linux
tags:
- Linux
- SSH
---
Hoje vou ensinar a vocês um recurso simples, mas que dá muita dor de cabeça e as pessoas nunca sabem como fazer.

Um recurso muito útil para quem trabalha com sites e servidores, é o <strong>SSH</strong> (<em>Secure Shell</em>), que é uma forma de você acessar, remotamente, a linha de comando de um servidor e com isso fazer modificações e instalações direto no servidor, sem usar uma interface gráfica ou um painel de controle como o cPanel.

O SSH é como se fosse um acesso VNC (Virtual Network Connection) diretamente na linha de comando do servidor.

Esse recurso parece inútil quando você cuida de um site simples... Mas quando você trabalha com sites mais robustos, que precisam de modificações no servidor, instalações de plugins e módulos e etc. é muito bom usar o SSH.

Para acessar o SSH de um servidor normalmente usamos o seguinte comando:


[code language="shell"]
$ ssh usuario@dominio
[/code]

Após isso, é perguntado a sua senha de acesso do servidor e você está dentro e pode executar comandos do Linux para trabalhar na máquina.

A questão aqui é que a senha do SSH deve ser extremamente segura, e lembar de uma senha de 20 caracteres com letras, símbolos e números não é fácil. O que você pode fazer, é configurar o servidor para aceitar logins automáticos da sua máquina.

Vamos chamar a sua maquina de <strong>cliente</strong> (a máquina que você está usando) e <strong>servidor</strong> a máquina que você quer acessar.

<h3>Criando a chave pública no <strong>cliente</strong></h3>
No cliente, vá até a linha de comando e digite:


[code language="shell"]
$ ssh-keygen -t rsa
[/code]

Você verá a seguinte resposta:


[code language="plain"]
Generating public/private dsa key pair.
Enter file in which to save the key (/home/usuario/.ssh/id_dsa):
[/code]

Dê ENTER sem digitar nada


[code language="plain"]
Enter passphrase (empty for no passphrase):
[/code]

Dê ENTER sem digitar nada


[code language="plain"]
Enter same passphrase again:
[/code]

Dê ENTER sem digitar nada


[code language="plain"]
Your identification has been saved in /home/usuario/.ssh/id_dsa.
Your public key has been saved in /home/usuario/.ssh/id_dsa.pub.
The key fingerprint is:
01:e0:d4:57:44:a5:5d:7c:f3:ed:bb:0d:fc:cb:2d:eb usuario@cliente
The key's randomart image is:
+--[ DSA 1024]----+
|    oo.  ++....  |
|   o  ...  o ....|
|    .  .. . .  .+|
|         .      o|
|        S      . |
|             .  .|
|              o .|
|              o+o|
|             .E**|
+-----------------+
[/code]

Feito isso, você criou uma <strong>chave pública</strong> e esse arquivo <code>~/.ssh/id_dsa.pub</code> pode ser enviado para o servidor ao qual você deseja se conectar que, quando você tentar fazer login, ele irá ler o arquivo e te identificar, permitindo o login automático.

<h3>Enviando a sua chave pública para o <strong>servidor</strong></h3>
Você pode usar sFTP (FTP via SSH) ou SCP para enviar a chave pública para o servidor, veja um exemplo utilizando SCP:


[code language="shell"]
$ scp ~/.ssh/id_dsa.pub USUARIO_REMOTO@SERVIDOR:/home/USUARIO_REMOTO/.ssh/
[/code]

Lembrando que a parta <code>USUARIO_REMOTO@SERVIDOR</code> são os mesmos dados que você utiliza para login.

Feito isso, você precisa habilitar a chave pública.

<h3>Habilitando a sua chave pública no <strong>servidor</strong></h3>
Faça login via SSH no seu servidor, e execute os seguintes comandos:


[code language="shell"]
$ cd ~/.ssh/
$ cat id_dsa.pub >> authorized_keys
$ chmod 644 authorized_keys
[/code]

Se o arquivo <code>authorized_keys</code> já existir, você pode criar o <code>authorized_keys2</code> ou <code>authorized_keys3</code>.

Feito isso, é so você deslogar do servidor e, da próxima vez que você tentar fazer o login [via SSH] já entrará automaticamente, sem digitar a senha! :)

Vale lembrar que essas instruções servem apenas para acessar servidores Linux utilizando uma outra máquina Linux. Se você quiser acessar o seu servidor Linux utilizando sua máquina com Windows vai ter que esperar o próximo tutoria. :)

