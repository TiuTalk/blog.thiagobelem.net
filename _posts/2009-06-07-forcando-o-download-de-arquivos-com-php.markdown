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


<div data-gist-id="534927c91bc82811170b" data-gist-show-loading="false"></div>

Viram que simples?

Esse script foi testado no Firefox 2 e 3, Internet Explorer 6 e 7, Google Chrome e Safari e funcionou perfeitamente.

Espero que tenham gostado :)

