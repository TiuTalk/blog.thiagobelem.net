---
layout: post
title: Enviar e-mails pelo PHP usando o PHPMailer
image: "/assets/images/mailbox.jpg"
date: '2009-03-15 04:14:09 -0300'
categories:
- PHP
- Tutoriais
tags: []
---

Você está tendo problemas para enviar e-mails pelo seu script PHP? _**Seus problemas acabaram!**_

Hoje vou ensinar como usar o PHPMailer para enviar os e-mails do seu site - via SMTP - com facilidade.

O PHPMailer é uma classe pronta para envio de e-mails através do PHP via conexão SMTP ou POP3 muito utilizado por todo o mundo. Seu método de envio é largamente recomendado e é bem melhor do que o envio do mail() que á função padrão do PHP.

Primeiro você precisa fazer o download da última versão dele, vá [site do script](http://phpmailer.worxware.com/).

> **Nota:** Nesse tutorial usarei a versão 2.3 ([download](http://sourceforge.net/projects/phpmailer/files/phpmailer%20for%20php5_6/Previous%20Versions/PHPMailer%20v2.3%20for%20PHP5_6/phpMailer_v2.3.zip/download)) do **PHPMailer** que é a última versão até agora.

Faça o download, descompacte o arquivo e coloque os arquivos `class.phpmailer.php` e `class.smtp.php` em uma pasta chamada `phpmailer` dentro do seu site.

Agora, vamos ao script que faz o envio do e-mail:

<div data-gist-id="440a9256ae2a3c63bcca" data-gist-show-loading="false"></div>

Algumas linhas de código estão comentadas porque são opcionais e dependem também da necessidade de quem vai usar o script. Logo no começo, na parte dos dados do servidor você tem a opção de configurar o login do servidor SMTP caso seja necessário.

Repare que, na parte na qual definimos a mensagem e o assunto do e-mail, temos duas formas de "corpo de e-mail": formato HTML e formato Texto Plano... É bom que você também defina o [texto plano](http://pt.wikipedia.org/wiki/Texto_plano) (que nada mais é do que um texto sem as tags HTML parecido com o conteúdo de um arquivo .txt) por que muitos leitores de e-mail não têm suporte a e-mails em HTML (seja por configuração do usuário ou por falta de funcionalidade mesmo).

Deixei também um exemplo pronto de como anexar um arquivo ao seu e-mail. O caminho do arquivo (primeiro arquivo) está nos moldes de um servidor rodando localmente... Mas ele pode ser relativo se você estiver usando o script num servidor externo. O segundo argumento é o 'novo' nome do arquivo, mas é opcional.

Bom... Espero que tenham entendido o script e consigam usá-lo. Qualquer dúvida é só falar!

