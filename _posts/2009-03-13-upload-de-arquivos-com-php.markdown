---
layout: post
title: Upload de arquivos com PHP

date: '2009-03-13 22:45:11 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Quem nunca precisou fazer um site que tenha upload de algum tipo de arquivo que atire a primeira pedra!

E hoje, você que não atirou a pedra, vai poder fazer o seu upload de arquivos - com validação e filtro de extensões e tamanho de arquivo - com o PHP!  ;-)

Vamos ao que interessa:

Você vai precisar, basicamente, de duas coisas: um formulário pro usuário escolher o arquivo e um arquivo .php para receber os dados e salvar (ou não) o arquivo enviado numa pasta escolhida. Vou ensinar também a fazer um script que filtre a extensão do tipo de arquivo enviado e o tamanho dele.

Duas coisas que você precisa saber antes de criar o seu script de upload e pensar que ele irá funcionar:

<ol>
<li>No PHP com configuração padrão o limite de uploads é de <strong>2Mb</strong> então, teste com arquivos menores.</li>
<li>Em alguns servidores para você poder salvar um arquivo em uma pasta você precisa de permissão de usuário (também conhecido como CHMOD), é raro precisar configurar isso, mas se por obra divina o seu arquivo não estiver indo pra pasta que você definiu, tente "dar um <strong>CHMOD 777</strong>" na pasta de destino.</li>
</ol>
Se você estiver testando seu script localmente, pode ignorar a segunda consideração e só se preocupar em enviar arquivos menores que 2Mb para testar a aplicação.

Vamos ao formulário HTML para o usuário escolher o arquivo a ser enviado:


{% highlight text linenos %}
<form method="post" action="recebe_upload.php" enctype="multipart/form-data">
<label>Arquivo</label>
<input type="file" name="arquivo" />
<input type="submit" value="Enviar" />
</form>
{% endhighlight %}

Salve este HTML dentro de arquivo com o nome que preferir.

Agora vamos criar o arquivo que irá receber os dados e cuidar de tudo pra você... Salve-o como <span style="color: #99cc00;"><strong>recebe_upload.php</strong></span>:


{% highlight text linenos %}
<?php

// Pasta onde o arquivo vai ser salvo
$_UP['pasta'] = 'uploads/';

// Tamanho máximo do arquivo (em Bytes)
$_UP['tamanho'] = 1024 * 1024 * 2; // 2Mb

// Array com as extensões permitidas
$_UP['extensoes'] = array('jpg', 'png', 'gif');

// Renomeia o arquivo? (Se true, o arquivo será salvo como .jpg e um nome único)
$_UP['renomeia'] = false;

// Array com os tipos de erros de upload do PHP
$_UP['erros'][0] = 'Não houve erro';
$_UP['erros'][1] = 'O arquivo no upload é maior do que o limite do PHP';
$_UP['erros'][2] = 'O arquivo ultrapassa o limite de tamanho especifiado no HTML';
$_UP['erros'][3] = 'O upload do arquivo foi feito parcialmente';
$_UP['erros'][4] = 'Não foi feito o upload do arquivo';

// Verifica se houve algum erro com o upload. Se sim, exibe a mensagem do erro
if ($_FILES['arquivo']['error'] != 0) {
die("Não foi possível fazer o upload, erro:" . $_UP['erros'][$_FILES['arquivo']['error']]);
exit; // Para a execução do script
}

// Caso script chegue a esse ponto, não houve erro com o upload e o PHP pode continuar

// Faz a verificação da extensão do arquivo
$extensao = strtolower(end(explode('.', $_FILES['arquivo']['name'])));
if (array_search($extensao, $_UP['extensoes']) === false) {
echo "Por favor, envie arquivos com as seguintes extensões: jpg, png ou gif";
}

// Faz a verificação do tamanho do arquivo
else if ($_UP['tamanho'] < $_FILES['arquivo']['size']) {
echo "O arquivo enviado é muito grande, envie arquivos de até 2Mb.";
}

// O arquivo passou em todas as verificações, hora de tentar movê-lo para a pasta
else {
// Primeiro verifica se deve trocar o nome do arquivo
if ($_UP['renomeia'] == true) {
// Cria um nome baseado no UNIX TIMESTAMP atual e com extensão .jpg
$nome_final = time().'.jpg';
} else {
// Mantém o nome original do arquivo
$nome_final = $_FILES['arquivo']['name'];
}

// Depois verifica se é possível mover o arquivo para a pasta escolhida
if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $_UP['pasta'] . $nome_final)) {
// Upload efetuado com sucesso, exibe uma mensagem e um link para o arquivo
echo "Upload efetuado com sucesso!";
echo '[Clique aqui para acessar o arquivo](' . $_UP['pasta'] . $nome_final . ')';
} else {
// Não foi possível fazer o upload, provavelmente a pasta está incorreta
echo "Não foi possível enviar o arquivo, tente novamente";
}

}

?>
{% endhighlight %}

Com isso você já tem um script que recebe os dados enviados pelo formulário e que coloca (ou não) o arquivo na pasta.

Eu sei que esse script pode parecer um pouco avançado pra quem tá começando, mas eu preferi fazer o "básico que todo mundo procura". Tentei colocar o máximo de comentários e fazer uma sintaxe mais clara o possível pra que vocês entendam.

A parte que realmente faz o "upload" é apenas o comando da linha 53 que é o <strong>move_uploaded_file()</strong>. Vou explicar o nome e o uso dele:

Quando você envia um arquivo por um formulário para o PHP ele vai direto para uma pasta temporária usando um nome único e extensão .tmp (dê uma olhada no valor da variável <span style="color: #0000ff;">$_FILES['arquivo']['tmp_name']</span>). Esse comando <strong>move</strong> o arquivo dessa pasta para a pasta que você escolheu.

Sei que essa parte do PHP (upload de arquivos) é uma das coisas que mais dá problema por aí devido as diferentes configurações de servidores... Então qualquer dúvida é só deixar um comentário que eu tento te ajudar.

Outra coisa importante que eu provavelmente não disse aqui no blog ainda: pra <strong>qualquer coisa</strong> no PHP existem, no mínimo, três formas de se alcançar o mesmo objetivo. Então não quero que encarem os meus scripts como a verdade absoluta. Eles são só um exemplo de um script eficiente e customizável baseado na minha experiência.

Espero que tenham gostado!

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função [move_uploaded_file()](http://br.php.net/move_uploaded_file)</strong> » Move um arquivo que foi enviado para o servidor</li>
<li><strong>Função [time()](http://br.php.net/time)</strong> » Retorna o UNIX TIMESTAMP atual</li>
<li><strong>Função [strtolower()](http://br.php.net/strtolower)</strong> » Altera uma string para ficar com as letras minúsculas</li>
<li><strong>Função [array_search()](http://br.php.net/array_search)</strong> » Faz uma busca entre os elementos do array</li>
</ul>
