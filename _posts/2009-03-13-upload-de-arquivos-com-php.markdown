---
layout: post
status: publish
published: true
title: Upload de arquivos com PHP
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 339
wordpress_url: http://blog.thiagobelem.net/?p=339
date: '2009-03-13 22:45:11 -0300'
date_gmt: '2009-03-14 01:45:11 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Quem nunca precisou fazer um site que tenha upload de algum tipo de arquivo que atire a primeira pedra!</p>
<p>E hoje, você que não atirou a pedra, vai poder fazer o seu upload de arquivos - com validação e filtro de extensões e tamanho de arquivo - com o PHP!  ;-)</p>
<p>Vamos ao que interessa:</p>
<p>Você vai precisar, basicamente, de duas coisas: um formulário pro usuário escolher o arquivo e um arquivo .php para receber os dados e salvar (ou não) o arquivo enviado numa pasta escolhida. Vou ensinar também a fazer um script que filtre a extensão do tipo de arquivo enviado e o tamanho dele.</p>
<p>Duas coisas que você precisa saber antes de criar o seu script de upload e pensar que ele irá funcionar:</p>
<ol>
<li>No PHP com configuração padrão o limite de uploads é de <strong>2Mb</strong> então, teste com arquivos menores.</li>
<li>Em alguns servidores para você poder salvar um arquivo em uma pasta você precisa de permissão de usuário (também conhecido como CHMOD), é raro precisar configurar isso, mas se por obra divina o seu arquivo não estiver indo pra pasta que você definiu, tente "dar um <strong>CHMOD 777</strong>" na pasta de destino.</li>
</ol>
<p>Se você estiver testando seu script localmente, pode ignorar a segunda consideração e só se preocupar em enviar arquivos menores que 2Mb para testar a aplicação.</p>
<p>Vamos ao formulário HTML para o usuário escolher o arquivo a ser enviado:</p>
<p>[code language="html"]<br />
&lt;form method=&quot;post&quot; action=&quot;recebe_upload.php&quot; enctype=&quot;multipart/form-data&quot;&gt;<br />
&lt;label&gt;Arquivo&lt;/label&gt;<br />
&lt;input type=&quot;file&quot; name=&quot;arquivo&quot; /&gt;<br />
&lt;input type=&quot;submit&quot; value=&quot;Enviar&quot; /&gt;<br />
&lt;/form&gt;<br />
[/code]</p>
<p>Salve este HTML dentro de arquivo com o nome que preferir.</p>
<p>Agora vamos criar o arquivo que irá receber os dados e cuidar de tudo pra você... Salve-o como <span style="color: #99cc00;"><strong>recebe_upload.php</strong></span>:</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>// Pasta onde o arquivo vai ser salvo<br />
$_UP['pasta'] = 'uploads/';</p>
<p>// Tamanho máximo do arquivo (em Bytes)<br />
$_UP['tamanho'] = 1024 * 1024 * 2; // 2Mb</p>
<p>// Array com as extensões permitidas<br />
$_UP['extensoes'] = array('jpg', 'png', 'gif');</p>
<p>// Renomeia o arquivo? (Se true, o arquivo será salvo como .jpg e um nome único)<br />
$_UP['renomeia'] = false;</p>
<p>// Array com os tipos de erros de upload do PHP<br />
$_UP['erros'][0] = 'Não houve erro';<br />
$_UP['erros'][1] = 'O arquivo no upload é maior do que o limite do PHP';<br />
$_UP['erros'][2] = 'O arquivo ultrapassa o limite de tamanho especifiado no HTML';<br />
$_UP['erros'][3] = 'O upload do arquivo foi feito parcialmente';<br />
$_UP['erros'][4] = 'Não foi feito o upload do arquivo';</p>
<p>// Verifica se houve algum erro com o upload. Se sim, exibe a mensagem do erro<br />
if ($_FILES['arquivo']['error'] != 0) {<br />
die(&quot;Não foi possível fazer o upload, erro:&lt;br /&gt;&quot; . $_UP['erros'][$_FILES['arquivo']['error']]);<br />
exit; // Para a execução do script<br />
}</p>
<p>// Caso script chegue a esse ponto, não houve erro com o upload e o PHP pode continuar</p>
<p>// Faz a verificação da extensão do arquivo<br />
$extensao = strtolower(end(explode('.', $_FILES['arquivo']['name'])));<br />
if (array_search($extensao, $_UP['extensoes']) === false) {<br />
echo &quot;Por favor, envie arquivos com as seguintes extensões: jpg, png ou gif&quot;;<br />
}</p>
<p>// Faz a verificação do tamanho do arquivo<br />
else if ($_UP['tamanho'] &lt; $_FILES['arquivo']['size']) {<br />
echo &quot;O arquivo enviado é muito grande, envie arquivos de até 2Mb.&quot;;<br />
}</p>
<p>// O arquivo passou em todas as verificações, hora de tentar movê-lo para a pasta<br />
else {<br />
// Primeiro verifica se deve trocar o nome do arquivo<br />
if ($_UP['renomeia'] == true) {<br />
// Cria um nome baseado no UNIX TIMESTAMP atual e com extensão .jpg<br />
$nome_final = time().'.jpg';<br />
} else {<br />
// Mantém o nome original do arquivo<br />
$nome_final = $_FILES['arquivo']['name'];<br />
}</p>
<p>// Depois verifica se é possível mover o arquivo para a pasta escolhida<br />
if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $_UP['pasta'] . $nome_final)) {<br />
// Upload efetuado com sucesso, exibe uma mensagem e um link para o arquivo<br />
echo &quot;Upload efetuado com sucesso!&quot;;<br />
echo '&lt;br /&gt;&lt;a href=&quot;' . $_UP['pasta'] . $nome_final . '&quot;&gt;Clique aqui para acessar o arquivo&lt;/a&gt;';<br />
} else {<br />
// Não foi possível fazer o upload, provavelmente a pasta está incorreta<br />
echo &quot;Não foi possível enviar o arquivo, tente novamente&quot;;<br />
}</p>
<p>}</p>
<p>?&gt;<br />
[/code]</p>
<p>Com isso você já tem um script que recebe os dados enviados pelo formulário e que coloca (ou não) o arquivo na pasta.</p>
<p>Eu sei que esse script pode parecer um pouco avançado pra quem tá começando, mas eu preferi fazer o "básico que todo mundo procura". Tentei colocar o máximo de comentários e fazer uma sintaxe mais clara o possível pra que vocês entendam.</p>
<p>A parte que realmente faz o "upload" é apenas o comando da linha 53 que é o <strong>move_uploaded_file()</strong>. Vou explicar o nome e o uso dele:</p>
<p>Quando você envia um arquivo por um formulário para o PHP ele vai direto para uma pasta temporária usando um nome único e extensão .tmp (dê uma olhada no valor da variável <span style="color: #0000ff;">$_FILES['arquivo']['tmp_name']</span>). Esse comando <strong>move</strong> o arquivo dessa pasta para a pasta que você escolheu.</p>
<p>Sei que essa parte do PHP (upload de arquivos) é uma das coisas que mais dá problema por aí devido as diferentes configurações de servidores... Então qualquer dúvida é só deixar um comentário que eu tento te ajudar.</p>
<p>Outra coisa importante que eu provavelmente não disse aqui no blog ainda: pra <strong>qualquer coisa</strong> no PHP existem, no mínimo, três formas de se alcançar o mesmo objetivo. Então não quero que encarem os meus scripts como a verdade absoluta. Eles são só um exemplo de um script eficiente e customizável baseado na minha experiência.</p>
<p>Espero que tenham gostado!</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função <a href="http://br.php.net/move_uploaded_file" target="_blank">move_uploaded_file()</a></strong> » Move um arquivo que foi enviado para o servidor</li>
<li><strong>Função <a href="http://br.php.net/time" target="_blank">time()</a></strong> » Retorna o UNIX TIMESTAMP atual</li>
<li><strong>Função <a href="http://br.php.net/strtolower" target="_blank">strtolower()</a></strong> » Altera uma string para ficar com as letras minúsculas</li>
<li><strong>Função <a href="http://br.php.net/array_search" target="_blank">array_search()</a></strong> » Faz uma busca entre os elementos do array</li>
</ul>
