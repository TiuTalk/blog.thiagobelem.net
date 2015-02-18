---
layout: post
title: Mudando a senha padrão do MySQL
excerpt: Aprenda a mudar a senha do usuário padrão do MySQL (root) no Windows e no
  Linux sem nenhuma grande complicação digitando apenas um ou dois comandos!

date: '2009-08-01 08:52:23 -0300'
categories:
- MySQL
- Tutoriais
- Segurança
tags:
- MySQL
- Root
---
Após a instalação do MySQL (se você não fizer nada), o usuário padrão será o "<em>root</em>" e a senha será vazia... E isso não é nada seguro, mesmo quando se desenvolve localmente... Hoje vou ensinar como mudar essa senha tanto no Windows quanto no Linux.

<h3>Mudando a senha do <em>root</em> no Windows</h3>
1. Iniciar > Executar, digite CMD e aperte enter

2. Navegue até o diretório <strong>bin</strong> dentro da pasta onde o MySQL está instalado, pode ser <strong style="background: gray; color: orange">C:\mysql\bin</strong> ou se você estiver usando o XAMPP será <strong style="background: gray; color: orange">C:\xampp\mysql\bin</strong>

3. Digite os seguintes comandos:
[code language="shell" light="true"]
mysql -u root mysql

SET PASSWORD FOR root@localhost=PASSWORD('NOVASENHA');
[/code]

Pronto, a senha foi modificada... Não se esqueça de mudar a senha do phpMyAdmin (no arquivo <strong style="background: gray; color: lime">config.inc.php</strong>).



<h3>Mudando a senha do <em>root</em> no Linux</h3>
Se você está mudando a senha pela primeira vez é só acessar o terminal e digitar:
[code language="shell" light="true"]
mysqladmin -u root password 'NOVASENHA'
[/code]
Caso você esteja trocando a senha do root é só usar o comando:
[code language="shell" light="true"]
mysqladmin -u root -p 'SENHAANTIGA' password 'NOVASENHA'
[/code]
Para esses comandos funcionarem você precisa do <strong>mysqladmin</strong> instalado. ;)

--

Espero ter sido útil pra alguém!

Um grande abraço! :)

