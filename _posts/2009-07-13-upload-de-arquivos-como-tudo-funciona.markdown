---
layout: post
title: Upload de Arquivos – Como tudo funciona
excerpt: Aprenda "como" e "o que" acontece quando fazemos o upload de um arquivo via
  PHP. Veja como validar o tamanho do arquivo e tipo do arquivo enviado para, no final,
  salvar tudo no seu banco de dados. :D

date: '2009-07-13 01:40:59 -0300'
categories:
- PHP
- Artigos
tags:
- PHP
- Upload
---
Hoje resolvi falar um pouquinho mais sobre como o upload de arquivos funciona, passo a passo, onde cada coisa se encaixa e como você pode ter total controle dele.

Como exemplo usarei um formulário onde o visitante enviará o seu nome e uma foto para um "perfil" de um rede social.

<h3>1.0 - O formulário HTML</h3>
Todo upload, geralmente, começa com um formulário onde o usuário insere o arquivo que será enviado e <strong>manipulado</strong> para o servidor. Veja o nosso exemplo de formulário:


<div data-gist-id="d3fed13a7f4e309c0448" data-gist-show-loading="false"></div>

É um formulário simples, com dois campos e um submit... O que importa nesse formulário são três coisas:

<ul>
<li>
<h4 style="margin: 0px">A propriedade <strong>action</strong> do formulário (linha 1)</h4>
No action do formulário você especifica para qual endereço você está enviando os dados... Se você não definir essa propriedade os dados serão enviados para o mesmo endereço do formulário</li>
<li>
<h4 style="margin: 0px">A propriedade <strong>enctype</strong> do formulário (linha 1)</h4>
Você <strong style="color: red">precisa</strong> definir o enctype como "<em>multipart/form-data</em>" para o upload funcionar, caso contrário você não vai poder manipular os arquivos</li>
<li>
<h4 style="margin: 0px">A propriedade <strong>name</strong> do <strong>input file</strong> (linha 7)</h4>
É nesse campo que você irá enviar o arquivo para ser manipulado pelo PHP... E é a propriedade name que você irá usar, no PHP, para saber de qual arquivos estamos falando</li>
</ul>
<h3>2.0 - Manipulando o upload no arquivo <span style="color: green">recebe.php</span></h3>
Agora iremos construir o arquivo recebe.php passo a passo para você entender o que acontece quando enviamos um arquivo por upload.

Normalmente quando enviamos dados através de um formulário (com a propriedade method igual a post) esses dados são disponibilizados em uma variável <strong>$_POST</strong>... Então, no começo do arquivo, iremos arquivar o nome do usuário em uma nova variável:


<div data-gist-id="a65c1b14909186090852" data-gist-show-loading="false"></div>

Só pra lembrar: $_POST é um array e os seus índices serão as propriedades "name" dos inputs.

<h3>2.1 - A variável <span style="color: green">$_FILES</span></h3>
Ao enviar um arquivo pelo formulário acima é criada uma nova variável (além da $_POST) que é chamada $_FILES... Essa variável funciona da mesma forma que a $_POST e é identificada pela propriedade <strong>name</strong> do input. A diferença é que o $_FILES traz várias informações sobre o arquivo enviado.

Veja um exemplo onde pegamos todas essas informações e salvamos em novas variáveis:

<div data-gist-id="670c57f32a1ce525b83f" data-gist-show-loading="false"></div>

Preste atenção que a parte <strong style="color: red">['arquivo']</strong> se deve a propriedade name do input file no lá formulário HTML.

<h3>2.2 - Erros de upload</h3>
Quando algo der errado com o upload em questão você vai poder verificar o que aconteceu baseando-se no valor da variável $_FILES['arquivo']['error']... Quando ela for diferente de zero é que algo de errado aconteceu e você pode verificar [aqui](http://br2.php.net/manual/pt_BR/features.file-upload.errors.php) possíveis valores de erro no upload.

<h3>2.3 - Movendo o arquivo para a pasta certa</h3>
Agora iremos mover o arquivo para a pasta correta caso o upload tenha ocorrido sem problemas:


<div data-gist-id="b69a79a3177d4dd7fe09" data-gist-show-loading="false"></div>

Com isso, após verificar se não houve nenhum erro, iremos mover o arquivo que está na pasta temporária do PHP para a pasta <strong>/uploads/</strong> do seu site.

A função <strong>move_uploaded_file()</strong> usa dois argumentos: o primeiro é o nome do arquivo temporário e o segundo é local onde o arquivo será salvo (incluindo seu novo nome)... No caso usamos o nome original do arquivo, mas caso você queira renomear o arquivo é exatamente nessa linha (18) que você deve fazer isso.

Depois do upload a variável $upload terá um valor lógico (true ou false) que indica se o arquivo foi movido com sucesso ou não.

Nosso upload já está pronto... O problema é que ele aceita qualquer tipo de arquivo e não é isso que queremos.

<h3>3.0 - Validando o tipo de arquivo enviado</h3>
Usando a variável $arqType poderemos identificar qual é o tipo do arquivo... Esse tipo é chamado de <strong>mime-type</strong>.

Vamos criar uma lista com todos os <strong>mime-types</strong> permitidos e verificar se foi enviado um arquivo com o tipo correto:


<div data-gist-id="5110835db7c2d8d45fc2" data-gist-show-loading="false"></div>

Se precisar você ver aqui uma [lista de mime-types](http://en.wikipedia.org/wiki/Internet_media_type) usados por cada tipo de arquivo.

<h3>4.0 - Validando o tamanho do arquivo enviado</h3>
Muita gente tem problemas com o tamanho de arquivo enviado pelos usuários pois, dependendo da quantidade e do tipo de arquivo, você rapidamente vai ter GBs e GBs de lixo no seu servidor. Se quiser fazer essa validação, é só fazer assim:


<div data-gist-id="febf536d6019f01294e2" data-gist-show-loading="false"></div>

<h3>5.0 - Renomeando o arquivo enviado</h3>
Caso você queira armazenar o arquivo enviado com outro nome, mas manter a extensão do mesmo, é só fazer assim:


<div data-gist-id="7df7550b915db862483e" data-gist-show-loading="false"></div>

Na linha 31 pegamos a extensão do arquivo enviado e na linha 33 criamos um novo nome para ele usando um UNIX TIMESTAMP e a extensão original.

<h3>6.0 - Salvando tudo no banco de dados</h3>
Acabamos de passar por todas as partes do upload e manipulação de um arquivo!

Agora vamos salvar os dados recebidos no banco de dados apenas para concluir o exemplo da criação de um perfil em uma rede social:


<div data-gist-id="e27bd14988424e364a69" data-gist-show-loading="false"></div>

--

Espero que tenham gostado e entendido! ;)

