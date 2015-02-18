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
<p>Hoje resolvi falar um pouquinho mais sobre como o upload de arquivos funciona, passo a passo, onde cada coisa se encaixa e como você pode ter total controle dele.</p>
<p>Como exemplo usarei um formulário onde o visitante enviará o seu nome e uma foto para um "perfil" de um rede social.</p>
<h3>1.0 - O formulário HTML</h3>
<p>Todo upload, geralmente, começa com um formulário onde o usuário insere o arquivo que será enviado e <strong>manipulado</strong> para o servidor. Veja o nosso exemplo de formulário:</p>
<p>[code language="html"]<form method="post" action="recebe.php" enctype="multipart/form-data"><br />
<fieldset><br />
	<label for="txNome">Seu nome</label><br />
	<input type="text" name="nome" id="txNome" /></p>
<p>	<label for="txFoto">Sua foto</label><br />
	<input type="file" name="arquivo" id="txFoto" /></p>
<p>	<input type="submit" value="Salvar Dados" /><br />
</fieldset><br />
</form>[/code]</p>
<p>É um formulário simples, com dois campos e um submit... O que importa nesse formulário são três coisas:</p>
<ul>
<li>
<h4 style="margin: 0px">A propriedade <strong>action</strong> do formulário (linha 1)</h4>
<p>No action do formulário você especifica para qual endereço você está enviando os dados... Se você não definir essa propriedade os dados serão enviados para o mesmo endereço do formulário</li>
<li>
<h4 style="margin: 0px">A propriedade <strong>enctype</strong> do formulário (linha 1)</h4>
<p>Você <strong style="color: red">precisa</strong> definir o enctype como "<em>multipart/form-data</em>" para o upload funcionar, caso contrário você não vai poder manipular os arquivos</li>
<li>
<h4 style="margin: 0px">A propriedade <strong>name</strong> do <strong>input file</strong> (linha 7)</h4>
<p>É nesse campo que você irá enviar o arquivo para ser manipulado pelo PHP... E é a propriedade name que você irá usar, no PHP, para saber de qual arquivos estamos falando</li>
</ul>
<h3>2.0 - Manipulando o upload no arquivo <span style="color: green">recebe.php</span></h3>
<p>Agora iremos construir o arquivo recebe.php passo a passo para você entender o que acontece quando enviamos um arquivo por upload.</p>
<p>Normalmente quando enviamos dados através de um formulário (com a propriedade method igual a post) esses dados são disponibilizados em uma variável <strong>$_POST</strong>... Então, no começo do arquivo, iremos arquivar o nome do usuário em uma nova variável:</p>
<p>[code language="php"]<?php</p>
<p>	$nome = $_POST['nome'];</p>
<p>?>[/code]</p>
<p>Só pra lembrar: $_POST é um array e os seus índices serão as propriedades "name" dos inputs.</p>
<h3>2.1 - A variável <span style="color: green">$_FILES</span></h3>
<p>Ao enviar um arquivo pelo formulário acima é criada uma nova variável (além da $_POST) que é chamada $_FILES... Essa variável funciona da mesma forma que a $_POST e é identificada pela propriedade <strong>name</strong> do input. A diferença é que o $_FILES traz várias informações sobre o arquivo enviado.</p>
<p>Veja um exemplo onde pegamos todas essas informações e salvamos em novas variáveis:<br />
[code language="php"]<?php</p>
<p>	$nome = $_POST['nome'];</p>
<p>	// O nome original do arquivo no computador do usuário<br />
	$arqName = $_FILES['arquivo']['name'];<br />
	// O tipo mime do arquivo. Um exemplo pode ser "image/gif"<br />
	$arqType = $_FILES['arquivo']['type'];<br />
	// O tamanho, em bytes, do arquivo<br />
	$arqSize = $_FILES['arquivo']['size'];<br />
	// O nome temporário do arquivo, como foi guardado no servidor<br />
	$arqTemp = $_FILES['arquivo']['tmp_name'];<br />
	// O código de erro associado a este upload de arquivo<br />
	$arqError = $_FILES['arquivo']['error'];</p>
<p>?>[/code]</p>
<p>Preste atenção que a parte <strong style="color: red">['arquivo']</strong> se deve a propriedade name do input file no lá formulário HTML.</p>
<h3>2.2 - Erros de upload</h3>
<p>Quando algo der errado com o upload em questão você vai poder verificar o que aconteceu baseando-se no valor da variável $_FILES['arquivo']['error']... Quando ela for diferente de zero é que algo de errado aconteceu e você pode verificar <a href="http://br2.php.net/manual/pt_BR/features.file-upload.errors.php" target="_blank">aqui</a> possíveis valores de erro no upload.</p>
<h3>2.3 - Movendo o arquivo para a pasta certa</h3>
<p>Agora iremos mover o arquivo para a pasta correta caso o upload tenha ocorrido sem problemas:</p>
<p>[code language="php"]<?php</p>
<p>	$nome = $_POST['nome'];</p>
<p>	// O nome original do arquivo no computador do usuário<br />
	$arqName = $_FILES['arquivo']['name'];<br />
	// O tipo mime do arquivo. Um exemplo pode ser "image/gif"<br />
	$arqType = $_FILES['arquivo']['type'];<br />
	// O tamanho, em bytes, do arquivo<br />
	$arqSize = $_FILES['arquivo']['size'];<br />
	// O nome temporário do arquivo, como foi guardado no servidor<br />
	$arqTemp = $_FILES['arquivo']['tmp_name'];<br />
	// O código de erro associado a este upload de arquivo<br />
	$arqError = $_FILES['arquivo']['error'];</p>
<p>	if ($arqError == 0) {<br />
		$pasta = '/uploads/';<br />
		$upload = move_uploaded_file($arqTemp, $pasta . $arqName);<br />
	}</p>
<p>?>[/code]</p>
<p>Com isso, após verificar se não houve nenhum erro, iremos mover o arquivo que está na pasta temporária do PHP para a pasta <strong>/uploads/</strong> do seu site.</p>
<p>A função <strong>move_uploaded_file()</strong> usa dois argumentos: o primeiro é o nome do arquivo temporário e o segundo é local onde o arquivo será salvo (incluindo seu novo nome)... No caso usamos o nome original do arquivo, mas caso você queira renomear o arquivo é exatamente nessa linha (18) que você deve fazer isso.</p>
<p>Depois do upload a variável $upload terá um valor lógico (true ou false) que indica se o arquivo foi movido com sucesso ou não.</p>
<p>Nosso upload já está pronto... O problema é que ele aceita qualquer tipo de arquivo e não é isso que queremos.</p>
<h3>3.0 - Validando o tipo de arquivo enviado</h3>
<p>Usando a variável $arqType poderemos identificar qual é o tipo do arquivo... Esse tipo é chamado de <strong>mime-type</strong>.</p>
<p>Vamos criar uma lista com todos os <strong>mime-types</strong> permitidos e verificar se foi enviado um arquivo com o tipo correto:</p>
<p>[code language="php"]<?php<br />
	// Lista de tipos de arquivos permitidos<br />
	$tiposPermitidos= array('image/gif', 'image/jpeg', 'image/pjpeg', 'image/png');</p>
<p>	$nome = $_POST['nome'];</p>
<p>	// O nome original do arquivo no computador do usuário<br />
	$arqName = $_FILES['arquivo']['name'];<br />
	// O tipo mime do arquivo. Um exemplo pode ser "image/gif"<br />
	$arqType = $_FILES['arquivo']['type'];<br />
	// O tamanho, em bytes, do arquivo<br />
	$arqSize = $_FILES['arquivo']['size'];<br />
	// O nome temporário do arquivo, como foi guardado no servidor<br />
	$arqTemp = $_FILES['arquivo']['tmp_name'];<br />
	// O código de erro associado a este upload de arquivo<br />
	$arqError = $_FILES['arquivo']['error'];</p>
<p>	if ($arqError == 0) {<br />
		// Verifica o tipo de arquivo enviado<br />
		if (array_search($arqType, $tiposPermitidos) === false) {<br />
			echo 'O tipo de arquivo enviado é inválido!';<br />
		// Não houveram erros, move o arquivo<br />
		} else {<br />
			$pasta = '/uploads/';<br />
			$upload = move_uploaded_file($arqTemp, $pasta . $arqName);<br />
		}<br />
	}</p>
<p>?>[/code]</p>
<p>Se precisar você ver aqui uma <a href="http://en.wikipedia.org/wiki/Internet_media_type" target="_blank">lista de mime-types</a> usados por cada tipo de arquivo.</p>
<h3>4.0 - Validando o tamanho do arquivo enviado</h3>
<p>Muita gente tem problemas com o tamanho de arquivo enviado pelos usuários pois, dependendo da quantidade e do tipo de arquivo, você rapidamente vai ter GBs e GBs de lixo no seu servidor. Se quiser fazer essa validação, é só fazer assim:</p>
<p>[code language="php"]<?php<br />
	// Lista de tipos de arquivos permitidos<br />
	$tiposPermitidos= array('image/gif', 'image/jpeg', 'image/pjpeg', 'image/png');<br />
	// Tamanho máximo (em bytes)<br />
	$tamanhoPermitido = 1024 * 500; // 500 Kb</p>
<p>	$nome = $_POST['nome'];</p>
<p>	// O nome original do arquivo no computador do usuário<br />
	$arqName = $_FILES['arquivo']['name'];<br />
	// O tipo mime do arquivo. Um exemplo pode ser "image/gif"<br />
	$arqType = $_FILES['arquivo']['type'];<br />
	// O tamanho, em bytes, do arquivo<br />
	$arqSize = $_FILES['arquivo']['size'];<br />
	// O nome temporário do arquivo, como foi guardado no servidor<br />
	$arqTemp = $_FILES['arquivo']['tmp_name'];<br />
	// O código de erro associado a este upload de arquivo<br />
	$arqError = $_FILES['arquivo']['error'];</p>
<p>	if ($arqError == 0) {<br />
        // Verifica o tipo de arquivo enviado<br />
		if (array_search($arqType, $tiposPermitidos) === false) {<br />
			echo 'O tipo de arquivo enviado é inválido!';<br />
		// Verifica o tamanho do arquivo enviado<br />
		} else if ($arqSize > $tamanhoPermitido) {<br />
			echo 'O tamanho do arquivo enviado é maior que o limite!';<br />
		// Não houveram erros, move o arquivo<br />
		} else {<br />
			$pasta = '/uploads/';<br />
			$upload = move_uploaded_file($arqTemp, $pasta . $arqName);<br />
		}<br />
	}</p>
<p>?>[/code]</p>
<h3>5.0 - Renomeando o arquivo enviado</h3>
<p>Caso você queira armazenar o arquivo enviado com outro nome, mas manter a extensão do mesmo, é só fazer assim:</p>
<p>[code language="php" highlight="33"]<?php<br />
	// Lista de tipos de arquivos permitidos<br />
	$tiposPermitidos= array('image/gif', 'image/jpeg', 'image/pjpeg', 'image/png');<br />
	// Tamanho máximo (em bytes)<br />
	$tamanhoPermitido = 1024 * 500; // 500 Kb</p>
<p>	$nome = $_POST['nome'];</p>
<p>	// O nome original do arquivo no computador do usuário<br />
	$arqName = $_FILES['arquivo']['name'];<br />
	// O tipo mime do arquivo. Um exemplo pode ser "image/gif"<br />
	$arqType = $_FILES['arquivo']['type'];<br />
	// O tamanho, em bytes, do arquivo<br />
	$arqSize = $_FILES['arquivo']['size'];<br />
	// O nome temporário do arquivo, como foi guardado no servidor<br />
	$arqTemp = $_FILES['arquivo']['tmp_name'];<br />
	// O código de erro associado a este upload de arquivo<br />
	$arqError = $_FILES['arquivo']['error'];</p>
<p>	if ($arqError == 0) {<br />
        // Verifica o tipo de arquivo enviado<br />
		if (array_search($arqType, $tiposPermitidos) === false) {<br />
			echo 'O tipo de arquivo enviado é inválido!';<br />
		// Verifica o tamanho do arquivo enviado<br />
		} else if ($arqSize > $tamanhoPermitido) {<br />
			echo 'O tamanho do arquivo enviado é maior que o limite!';<br />
		// Não houveram erros, move o arquivo<br />
		} else {<br />
			$pasta = '/uploads/';<br />
			// Pega a extensão do arquivo enviado<br />
			$extensao = strtolower(end(explode('.', $arqName)));<br />
			// Define o novo nome do arquivo usando um UNIX TIMESTAMP<br />
			$nome = time() . '.' . $extensao;</p>
<p>			$upload = move_uploaded_file($arqTemp, $pasta . $nome);<br />
		}<br />
	}</p>
<p>?>[/code]</p>
<p>Na linha 31 pegamos a extensão do arquivo enviado e na linha 33 criamos um novo nome para ele usando um UNIX TIMESTAMP e a extensão original.</p>
<h3>6.0 - Salvando tudo no banco de dados</h3>
<p>Acabamos de passar por todas as partes do upload e manipulação de um arquivo!</p>
<p>Agora vamos salvar os dados recebidos no banco de dados apenas para concluir o exemplo da criação de um perfil em uma rede social:</p>
<p>[code language="php"]<?php</p>
<p>	// Aqui você faz a conexão com o banco de dados</p>
<p>	// Lista de tipos de arquivos permitidos<br />
	$tiposPermitidos= array('image/gif', 'image/jpeg', 'image/pjpeg', 'image/png');<br />
	// Tamanho máximo (em bytes)<br />
	$tamanhoPermitido = 1024 * 500; // 500 Kb</p>
<p>	// O nome original do arquivo no computador do usuário<br />
	$arqName = $_FILES['arquivo']['name'];<br />
	// O tipo mime do arquivo. Um exemplo pode ser "image/gif"<br />
	$arqType = $_FILES['arquivo']['type'];<br />
	// O tamanho, em bytes, do arquivo<br />
	$arqSize = $_FILES['arquivo']['size'];<br />
	// O nome temporário do arquivo, como foi guardado no servidor<br />
	$arqTemp = $_FILES['arquivo']['tmp_name'];<br />
	// O código de erro associado a este upload de arquivo<br />
	$arqError = $_FILES['arquivo']['error'];</p>
<p>	if ($arqError == 0) {<br />
        // Verifica o tipo de arquivo enviado<br />
		if (array_search($arqType, $tiposPermitidos) === false) {<br />
			echo 'O tipo de arquivo enviado é inválido!';<br />
		// Verifica o tamanho do arquivo enviado<br />
		} else if ($arqSize > $tamanhoPermitido) {<br />
			echo 'O tamanho do arquivo enviado é maior que o limite!';<br />
		// Não houveram erros, move o arquivo<br />
		} else {<br />
			$pasta = '/uploads/';<br />
			// Pega a extensão do arquivo enviado<br />
			$extensao = strtolower(end(explode('.', $arqName)));<br />
			// Define o novo nome do arquivo usando um UNIX TIMESTAMP<br />
			$nome = time() . '.' . $extensao;</p>
<p>			// Escapa os caracteres protegidos do MySQL (para o nome do usuário)<br />
			$nomeMySQL = mysql_real_escape_string($_POST['nome']);</p>
<p>			$upload = move_uploaded_file($arqTemp, $pasta . $nome);</p>
<p>			// Verifica se o arquivo foi movido com sucesso<br />
			if ($upload == true) {<br />
				// Cria uma query MySQL<br />
				$sql = "INSERT INTO `contas` (`id`, `nome`, `foto`) VALUES (NULL, '". $nomeMySQL ."', '". $nome ."')";<br />
				// Executa a consulta<br />
				$query = mysql_query($sql);</p>
<p>				if ($query == true) {<br />
                    echo 'Usuário inserido com sucesso!';<br />
                }<br />
			}<br />
		}<br />
	} else {<br />
		echo 'Ocorreu algum erro com o upload, por favor tente novamente!';<br />
	}</p>
<p>?>[/code]</p>
<p>--</p>
<p>Espero que tenham gostado e entendido! ;)</p>
