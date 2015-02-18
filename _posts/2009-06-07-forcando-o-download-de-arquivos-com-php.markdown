---
layout: post
title: Forçando o download de arquivos com PHP
excerpt: Aprenda a fazer um script que força o download do arquivo, não importa sua
  extensão ou se o navegador consegue lê-lo ou exibí-lo. Isso permite a criação de
  contadores de downloads e/ou a proteção do arquivo contra download direto.

date: '2009-06-07 11:34:59 -0300'
categories:
- PHP
- Tutoriais
- Segurança
tags:
- PHP
- Download
---
Essa é uma dúvida um pouco comum quando temos um sistema que envia arquivos para download e você não quer que o arquivo seja aberto pelo navegador (Ex: JPG, PDF, TXT e etc).

Vou mostrar aqui como criar um script simples que vai, além de forçar o download, permitir que você faça um contador de downloads do arquivo, proteger o nome real do arquivo ou protegê-lo por uma sessão (apenas usuários logados).

Veja o script:


[code language="php"]
<?php
// Define o tempo máximo de execução em 0 para as conexões lentas
set_time_limit(0);

// Arqui você faz as validações e/ou pega os dados do banco de dados

$aquivoNome = 'imagem.jpg'; // nome do arquivo que será enviado p/ download
$arquivoLocal = '/pasta/do/arquivo/'.$aquivoNome; // caminho absoluto do arquivo

// Verifica se o arquivo não existe
if (!file_exists($arquivoLocal)) {
// Exiba uma mensagem de erro caso ele não exista
exit;
}

// Aqui você pode aumentar o contador de downloads

// Definimos o novo nome do arquivo
$novoNome = 'imagem_nova.jpg';

// Configuramos os headers que serão enviados para o browser
header('Content-Description: File Transfer');
header('Content-Disposition: attachment; filename="'.$novoNome.'"');
header('Content-Type: application/octet-stream');
header('Content-Transfer-Encoding: binary');
header('Content-Length: ' . filesize($aquivoNome));
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Pragma: public');
header('Expires: 0');

// Envia o arquivo para o cliente
readfile($aquivoNome);
?>
[/code]

Viram que simples?

Esse script foi testado no Firefox 2 e 3, Internet Explorer 6 e 7, Google Chrome e Safari e funcionou perfeitamente.

Espero que tenham gostado :)

