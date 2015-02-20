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


<div data-gist-id="2ec3d1a7bd6f89b391b3" data-gist-show-loading="false"></div>

Após isso, é perguntado a sua senha de acesso do servidor e você está dentro e pode executar comandos do Linux para trabalhar na máquina.

A questão aqui é que a senha do SSH deve ser extremamente segura, e lembar de uma senha de 20 caracteres com letras, símbolos e números não é fácil. O que você pode fazer, é configurar o servidor para aceitar logins automáticos da sua máquina.

Vamos chamar a sua maquina de <strong>cliente</strong> (a máquina que você está usando) e <strong>servidor</strong> a máquina que você quer acessar.

### Criando a chave pública no <strong>cliente</strong>
No cliente, vá até a linha de comando e digite:


<div data-gist-id="ec32084f6e273d573f0e" data-gist-show-loading="false"></div>

Você verá a seguinte resposta:


<div data-gist-id="bc6279b9fe210c217535" data-gist-show-loading="false"></div>

Dê ENTER sem digitar nada


<div data-gist-id="5acdda6ddc57653a5014" data-gist-show-loading="false"></div>

Dê ENTER sem digitar nada


<div data-gist-id="0fdaff635eb4ca52c113" data-gist-show-loading="false"></div>

Dê ENTER sem digitar nada


<div data-gist-id="65cd4b6f1de21b33e260" data-gist-show-loading="false"></div>

Feito isso, você criou uma <strong>chave pública</strong> e esse arquivo <code>~/.ssh/id_dsa.pub</code> pode ser enviado para o servidor ao qual você deseja se conectar que, quando você tentar fazer login, ele irá ler o arquivo e te identificar, permitindo o login automático.

### Enviando a sua chave pública para o <strong>servidor</strong>
Você pode usar sFTP (FTP via SSH) ou SCP para enviar a chave pública para o servidor, veja um exemplo utilizando SCP:


<div data-gist-id="7436b57541db80887592" data-gist-show-loading="false"></div>

Lembrando que a parta <code>USUARIO_REMOTO@SERVIDOR</code> são os mesmos dados que você utiliza para login.

Feito isso, você precisa habilitar a chave pública.

### Habilitando a sua chave pública no <strong>servidor</strong>
Faça login via SSH no seu servidor, e execute os seguintes comandos:


<div data-gist-id="5511f8778b3e5aaac8ae" data-gist-show-loading="false"></div>

Se o arquivo <code>authorized_keys</code> já existir, você pode criar o <code>authorized_keys2</code> ou <code>authorized_keys3</code>.

Feito isso, é so você deslogar do servidor e, da próxima vez que você tentar fazer o login [via SSH] já entrará automaticamente, sem digitar a senha! :)

Vale lembrar que essas instruções servem apenas para acessar servidores Linux utilizando uma outra máquina Linux. Se você quiser acessar o seu servidor Linux utilizando sua máquina com Windows vai ter que esperar o próximo tutoria. :)

