---
layout: post
title: Enviar e-mails pelo PHP usando o PHPMailer

date: '2009-03-15 04:14:09 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Você está tendo problemas para enviar e-mails pelo seu script PHP?<em> <strong>Seus problemas acabaram!</strong></em>

Hoje vou ensinar como usar o PHPMailer para enviar os e-mails do seu site - via SMTP - com facilidade.

O PHPMailer é uma classe pronta para envio de e-mails através do PHP via conexão SMTP ou POP3 muito utilizado por todo o mundo. Seu método de envio é largamente recomendado e é bem melhor do que o envio do mail() que á função padrão do PHP.

Primeiro você precisa fazer o download da última versão dele, vá [site do script](http://phpmailer.worxware.com/).

<strong>Nota: </strong>Nesse tutorial usarei a versão 2.3 ([download](http://sourceforge.net/projects/phpmailer/files/phpmailer%20for%20php5_6/Previous%20Versions/PHPMailer%20v2.3%20for%20PHP5_6/phpMailer_v2.3.zip/download)) do <strong>PHPMailer </strong>que é a última versão até agora.

Faça o download, descompacte o arquivo e coloque os arquivos <strong>class.phpmailer.php</strong> e <strong>class.smtp.php</strong> em uma pasta chamada <strong>phpmailer</strong> dentro do seu site.

Agora, vamos ao script que faz o envio do e-mail:


{% highlight php linenos %}
<?php

// Inclui o arquivo class.phpmailer.php localizado na pasta phpmailer
require("phpmailer/class.phpmailer.php");

// Inicia a classe PHPMailer
$mail = new PHPMailer();

// Define os dados do servidor e tipo de conexão
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsSMTP(); // Define que a mensagem será SMTP
$mail->Host = "smtp.dominio.net"; // Endereço do servidor SMTP
//$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)
//$mail->Username = 'seumail@dominio.net'; // Usuário do servidor SMTP
//$mail->Password = 'senha'; // Senha do servidor SMTP

// Define o remetente
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->From = "seumail@dominio.net"; // Seu e-mail
$mail->FromName = "Joãozinho"; // Seu nome

// Define os destinatário(s)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->AddAddress('fulano@dominio.com.br', 'Fulano da Silva');
$mail->AddAddress('ciclano@site.net');
//$mail->AddCC('ciclano@site.net', 'Ciclano'); // Copia
//$mail->AddBCC('fulano@dominio.com.br', 'Fulano da Silva'); // Cópia Oculta

// Define os dados técnicos da Mensagem
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
//$mail->CharSet = 'iso-8859-1'; // Charset da mensagem (opcional)

// Define a mensagem (Texto e Assunto)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->Subject  = "Mensagem Teste"; // Assunto da mensagem
$mail->Body = "Este é o corpo da mensagem de teste, em <b>HTML</b>!  :)";
$mail->AltBody = "Este é o corpo da mensagem de teste, em Texto Plano! \r\n :)";

// Define os anexos (opcional)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//$mail->AddAttachment("c:/temp/documento.pdf", "novo_nome.pdf");  // Insere um anexo

// Envia o e-mail
$enviado = $mail->Send();

// Limpa os destinatários e os anexos
$mail->ClearAllRecipients();
$mail->ClearAttachments();

// Exibe uma mensagem de resultado
if ($enviado) {
echo "E-mail enviado com sucesso!";
} else {
echo "Não foi possível enviar o e-mail.

";
echo "<b>Informações do erro:</b> " . $mail->ErrorInfo;
}

?>
{% endhighlight %}

Algumas linhas de código estão comentadas porque são opcionais e dependem também da necessidade de quem vai usar o script. Logo no começo, na parte dos dados do servidor você tem a opção de configurar o login do servidor SMTP caso seja necessário.

Repare que, na parte na qual definimos a mensagem e o assunto do e-mail, temos duas formas de "corpo de e-mail": formato HTML e formato Texto Plano... É bom que você também defina o [texto plano](http://pt.wikipedia.org/wiki/Texto_plano) (que nada mais é do que um texto sem as tags HTML parecido com o conteúdo de um arquivo .txt) por que muitos leitores de e-mail não têm suporte a e-mails em HTML (seja por configuração do usuário ou por falta de funcionalidade mesmo).

Deixei também um exemplo pronto de como anexar um arquivo ao seu e-mail. O caminho do arquivo (primeiro arquivo) está nos moldes de um servidor rodando localmente... Mas ele pode ser relativo se você estiver usando o script num servidor externo. O segundo argumento é o 'novo' nome do arquivo, mas é opcional.

Bom... Espero que tenham entendido o script e consigam usá-lo. Qualquer dúvida é só falar!

