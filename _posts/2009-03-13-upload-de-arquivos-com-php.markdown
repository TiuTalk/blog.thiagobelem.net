---
layout: post
title: Upload de arquivos com PHP
image: "/assets/images/files.jpg"
date: '2009-03-13 22:45:11 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Quem nunca precisou fazer um site que tenha upload de algum tipo de arquivo que atire a primeira pedra!

E hoje, você que não atirou a pedra, vai poder fazer o seu upload de arquivos - com validação e filtro de extensões e tamanho de arquivo - com o PHP!  ;-)

Vamos ao que interessa!

Você vai precisar, basicamente, de duas coisas: um formulário pro usuário escolher o arquivo e um arquivo .php para receber os dados e salvar (ou não) o arquivo enviado numa pasta escolhida. Vou ensinar também a fazer um script que filtre a extensão do tipo de arquivo enviado e o tamanho dele.

Duas coisas que você precisa saber antes de criar o seu script de upload e pensar que ele irá funcionar:

1. No PHP com configuração padrão o limite de uploads é de `2Mb` então, teste com arquivos menores.
2. Em alguns servidores para você poder salvar um arquivo em uma pasta você precisa de permissão de usuário (também conhecido como CHMOD), é raro precisar configurar isso, mas se por obra divina o seu arquivo não estiver indo pra pasta que você definiu, tente "dar um `CHMOD 777`" na pasta de destino.

Se você estiver testando seu script localmente, pode ignorar a segunda consideração e só se preocupar em enviar arquivos menores que 2Mb para testar a aplicação.

Vamos ao formulário HTML para o usuário escolher o arquivo a ser enviado:

<div data-gist-id="f38b1d91af8f5f23d555" data-gist-show-loading="false"></div>

Salve este HTML dentro de arquivo com o nome que preferir.

Agora vamos criar o arquivo que irá receber os dados e cuidar de tudo pra você... Salve-o como `recebe_upload.php`:

<div data-gist-id="81860787ef09fd3d9823" data-gist-show-loading="false"></div>

Com isso você já tem um script que recebe os dados enviados pelo formulário e que coloca (ou não) o arquivo na pasta.

Eu sei que esse script pode parecer um pouco avançado pra quem tá começando, mas eu preferi fazer o "básico que todo mundo procura". Tentei colocar o máximo de comentários e fazer uma sintaxe mais clara o possível pra que vocês entendam.

A parte que realmente faz o "upload" é apenas o comando da linha 53 que é o `move_uploaded_file()`. Vou explicar o nome e o uso dele:

Quando você envia um arquivo por um formulário para o PHP ele vai direto para uma pasta temporária usando um nome único e extensão .tmp (dê uma olhada no valor da variável `$_FILES['arquivo']['tmp_name']`). Esse comando `move` o arquivo dessa pasta para a pasta que você escolheu.

Sei que essa parte do PHP (upload de arquivos) é uma das coisas que mais dá problema por aí devido as diferentes configurações de servidores... Então qualquer dúvida é só deixar um comentário que eu tento te ajudar.

Outra coisa importante que eu provavelmente não disse aqui no blog ainda: pra `qualquer coisa` no PHP existem, no mínimo, três formas de se alcançar o mesmo objetivo. Então não quero que encarem os meus scripts como a verdade absoluta. Eles são só um exemplo de um script eficiente e customizável baseado na minha experiência.

Espero que tenham gostado!

#### Documentação Oficial

* Função [move_uploaded_file()](http://br.php.net/move_uploaded_file) » Move um arquivo que foi enviado para o servidor
* Função [time()](http://br.php.net/time) » Retorna o UNIX TIMESTAMP atual
* Função [strtolower()](http://br.php.net/strtolower) » Altera uma string para ficar com as letras minúsculas
* Função [array_search()](http://br.php.net/array_search) » Faz uma busca entre os elementos do array
