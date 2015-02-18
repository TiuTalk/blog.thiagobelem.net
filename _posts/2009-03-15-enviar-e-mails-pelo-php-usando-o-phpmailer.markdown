---
layout: post
title: Enviar e-mails pelo PHP usando o PHPMailer

date: '2009-03-15 04:14:09 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Você está tendo problemas para enviar e-mails pelo seu script PHP?<em> <strong>Seus problemas acabaram!</strong></em></p>
<p>Hoje vou ensinar como usar o PHPMailer para enviar os e-mails do seu site - via SMTP - com facilidade.</p>
<p>O PHPMailer é uma classe pronta para envio de e-mails através do PHP via conexão SMTP ou POP3 muito utilizado por todo o mundo. Seu método de envio é largamente recomendado e é bem melhor do que o envio do mail() que á função padrão do PHP.</p>
<p>Primeiro você precisa fazer o download da última versão dele, vá <a title="Download do PHPMailer" href="http://sourceforge.net/projects/phpmailer/files/" target="_blank">nesse endereço</a> e baixe a sua versão ou vá direto ao <a title="Site do PHPMailer" href="http://phpmailer.worxware.com/" target="_blank">site do script</a>.</p>
<p><strong>Nota: </strong>Nesse tutorial usarei a versão 2.3 (<a href="http://sourceforge.net/projects/phpmailer/files/phpmailer%20for%20php5_6/Previous%20Versions/PHPMailer%20v2.3%20for%20PHP5_6/phpMailer_v2.3.zip/download" target="_blank">download</a>) do <strong>PHPMailer </strong>que é a última versão até agora.</p>
<p>Faça o download, descompacte o arquivo e coloque os arquivos <strong>class.phpmailer.php</strong> e <strong>class.smtp.php</strong> em uma pasta chamada <strong>phpmailer</strong> dentro do seu site.</p>
<p>Agora, vamos ao script que faz o envio do e-mail:</p>
<p>[code='php']<br />
<?php</p>
<p>// Inclui o arquivo class.phpmailer.php localizado na pasta phpmailer<br />
require("phpmailer/class.phpmailer.php");</p>
<p>// Inicia a classe PHPMailer<br />
$mail = new PHPMailer();</p>
<p>// Define os dados do servidor e tipo de conexão<br />
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=<br />
$mail->IsSMTP(); // Define que a mensagem será SMTP<br />
$mail->Host = "smtp.dominio.net"; // Endereço do servidor SMTP<br />
//$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)<br />
//$mail->Username = 'seumail@dominio.net'; // Usuário do servidor SMTP<br />
//$mail->Password = 'senha'; // Senha do servidor SMTP</p>
<p>// Define o remetente<br />
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=<br />
$mail->From = "seumail@dominio.net"; // Seu e-mail<br />
$mail->FromName = "Joãozinho"; // Seu nome</p>
<p>// Define os destinatário(s)<br />
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=<br />
$mail->AddAddress('fulano@dominio.com.br', 'Fulano da Silva');<br />
$mail->AddAddress('ciclano@site.net');<br />
//$mail->AddCC('ciclano@site.net', 'Ciclano'); // Copia<br />
//$mail->AddBCC('fulano@dominio.com.br', 'Fulano da Silva'); // Cópia Oculta</p>
<p>// Define os dados técnicos da Mensagem<br />
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=<br />
$mail->IsHTML(true); // Define que o e-mail será enviado como HTML<br />
//$mail->CharSet = 'iso-8859-1'; // Charset da mensagem (opcional)</p>
<p>// Define a mensagem (Texto e Assunto)<br />
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=<br />
$mail->Subject  = "Mensagem Teste"; // Assunto da mensagem<br />
$mail->Body = "Este é o corpo da mensagem de teste, em <b>HTML</b>! <br /> :)";<br />
$mail->AltBody = "Este é o corpo da mensagem de teste, em Texto Plano! \r\n :)";</p>
<p>// Define os anexos (opcional)<br />
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=<br />
//$mail->AddAttachment("c:/temp/documento.pdf", "novo_nome.pdf");  // Insere um anexo</p>
<p>// Envia o e-mail<br />
$enviado = $mail->Send();</p>
<p>// Limpa os destinatários e os anexos<br />
$mail->ClearAllRecipients();<br />
$mail->ClearAttachments();</p>
<p>// Exibe uma mensagem de resultado<br />
if ($enviado) {<br />
echo "E-mail enviado com sucesso!";<br />
} else {<br />
echo "Não foi possível enviar o e-mail.</p>
<p>";<br />
echo "<b>Informações do erro:</b> <br />" . $mail->ErrorInfo;<br />
}</p>
<p>?><br />
[/code]</p>
<p>Algumas linhas de código estão comentadas porque são opcionais e dependem também da necessidade de quem vai usar o script. Logo no começo, na parte dos dados do servidor você tem a opção de configurar o login do servidor SMTP caso seja necessário.</p>
<p>Repare que, na parte na qual definimos a mensagem e o assunto do e-mail, temos duas formas de "corpo de e-mail": formato HTML e formato Texto Plano... É bom que você também defina o <a title="Descrição de texto plano na Wikipédia" href="http://pt.wikipedia.org/wiki/Texto_plano" target="_blank">texto plano</a> (que nada mais é do que um texto sem as tags HTML parecido com o conteúdo de um arquivo .txt) por que muitos leitores de e-mail não têm suporte a e-mails em HTML (seja por configuração do usuário ou por falta de funcionalidade mesmo).</p>
<p>Deixei também um exemplo pronto de como anexar um arquivo ao seu e-mail. O caminho do arquivo (primeiro arquivo) está nos moldes de um servidor rodando localmente... Mas ele pode ser relativo se você estiver usando o script num servidor externo. O segundo argumento é o 'novo' nome do arquivo, mas é opcional.</p>
<p>Bom... Espero que tenham entendido o script e consigam usá-lo. Qualquer dúvida é só falar!</p>
