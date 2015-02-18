---
layout: post
status: publish
published: true
title: Criando um sistema de logins com classe no PHP – Parte 3
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Terceira parte do tutorial que ensina a criar um sistema de login sólido,
  leve e completo... Totalmente customizável e de fácil implementação. Sistema feito
  para rodar em PHP 4 e PHP 5, usando banco de dados em MySQL e Orientação a Objetos.
wordpress_id: 680
wordpress_url: http://blog.thiagobelem.net/?p=680
date: '2010-01-13 17:33:33 -0200'
date_gmt: '2010-01-13 19:33:33 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Login
---
<p>Opa opa opa! Vamos continuar hoje com a terceira parte do nosso tutorial de "Criando um sistema de logins com classe no PHP"...</p>
<p>Já passamos vitoriosos pela <a title="Criando um sistema de logins com classe no PHP - Parte 1" href="http://blog.thiagobelem.net/mysql/criando-um-sistema-de-logins-com-classe-no-php-parte-1/" target="_blank">Parte 1</a> e <a title="Criando um sistema de logins com classe no PHP - Parte 2" href="http://blog.thiagobelem.net/mysql/criando-um-sistema-de-logins-com-classe-no-php-parte-2/" target="_blank">Parte 2</a> e hoje vamos fazer o método que usaremos para verificar se um usuário está logado e o método que usaremos para deslogar o usuário... A boa notícia é que depois da aula de hoje a classe estará pronta para vocês usarem em vossos sites, lembrando sempre que o importante aqui é que vocês aprendam como fazer e não apenas copiem o código e usem.</p>
<p>Vamos começar fazendo uma correção  que o <em>Leo Baiano</em> sugeriu no método <strong>validaUsuario()</strong> criado na <strong>Parte 1</strong>... A mudança vai acontecer entre a linha 87 e a linha 96:</p>
<p>[code language="php" firstline="97"]<br />
		// Procura por usuários com o mesmo usuário e senha<br />
		$sql = &quot;SELECT COUNT(*)<br />
				FROM `{$this-&gt;bancoDeDados}`.`{$this-&gt;tabelaUsuarios}`<br />
				WHERE<br />
					`{$this-&gt;campos['usuario']}` = '{$usuario}'<br />
					AND<br />
					`{$this-&gt;campos['senha']}` = '{$senha}'&quot;;<br />
		$query = mysql_query($sql);<br />
		if ($query) {<br />
			$total = mysql_result($query, 0);<br />
[/code]</p>
<p>Mudaremos a consulta e outras três linhas depois:</p>
<p>[code language="php" firstline="87"]<br />
		// Procura por usuários com o mesmo usuário e senha<br />
		$sql = &quot;SELECT COUNT(*) AS total<br />
				FROM `{$this-&gt;bancoDeDados}`.`{$this-&gt;tabelaUsuarios}`<br />
				WHERE<br />
					`{$this-&gt;campos['usuario']}` = '{$usuario}'<br />
					AND<br />
					`{$this-&gt;campos['senha']}` = '{$senha}'&quot;;<br />
		$query = mysql_query($sql);<br />
		if ($query) {<br />
			$total = mysql_result($query, 0, 'total');</p>
<p>			// Limpa a consulta da memória<br />
			mysql_free_result($query);<br />
[/code]</p>
<p>Essa mudança foi necessária por causa de um probleminha com a função mysql_result() que tem dificuldades de identificar qual resultado nós queremos... Com esse ajuste tudo irá funcionar perfeitamente.</p>
<p>&nbsp;</p>
<p>Agora nós iremos começar a criar o método que verifica se há um usuário logado... Ele irá retornar TRUE quando um usuário estiver logado e retornará FALSE em qualquer situação que indique que não há um usuário logado, por isso precisamos verificar todas as possibilidades:</p>
<p>[code language="php" firstline="183"]<br />
	/**<br />
	 * Verifica se há um usuário logado no sistema<br />
	 *<br />
	 * @return boolean - Se há um usuário logado ou não<br />
	 */<br />
	function usuarioLogado() {<br />
		// Continuaremos aqui...<br />
	}<br />
[/code]</p>
<p>Primeiro nós verificamos a necessidade de iniciar a sessão e lógo após isso iremos verificar se existe o valor "logado" na sessão:</p>
<p>[code language="php" firstline="189"]<br />
		// Inicia a sessão?<br />
		if ($this-&gt;iniciaSessao AND !isset($_SESSION)) {<br />
			session_start();<br />
		}</p>
<p>		// Verifica se não existe o valor na sessão<br />
		if (!isset($_SESSION[$this-&gt;prefixoChaves . 'logado']) OR !$_SESSION[$this-&gt;prefixoChaves . 'logado']) {<br />
			return false;<br />
		}<br />
[/code]</p>
<p>Pra quem não lembra, esse valor <strong>$this-&gt;prefixoChaves . 'logado'</strong> foi criado pelo método <strong>logaUsuario()</strong>.</p>
<p>Agora nós precisamos verificar (caso seja necessário) o cookie que contém as informações (usuário, IP e navegador) do usuário para ver se elas batem com o que está armazenado no cookie:</p>
<p>[code language="php" firstline="199"]<br />
		// Faz a verificação do cookie?<br />
		if ($this-&gt;cookie) {<br />
			// Verifica se o cookie não existe<br />
			if (!isset($_COOKIE[$this-&gt;prefixoChaves . 'token'])) {<br />
				return false;<br />
			} else {<br />
				// Continuaremos aqui...<br />
			}<br />
		}<br />
[/code]</p>
<p>Caso haja o cookie, precisamos criar novamente uma string encriptada contendo as informações do usuário para checar com o valor salvo no cookie:</p>
<p>[code language="php" firstline="205"]<br />
				// Monta o valor do cookie<br />
				$valor = join('#', array($_SESSION[$this-&gt;prefixoChaves . 'usuario'], $_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_USER_AGENT']));</p>
<p>				// Encripta o valor do cookie<br />
				$valor = sha1($valor);</p>
<p>				// Verifica o valor do cookie<br />
				if ($_COOKIE[$this-&gt;prefixoChaves . 'token'] !== $valor) {<br />
					return false;<br />
				}<br />
[/code]</p>
<p>Feita a verificação do cookie sabemos que, depois disso tudo, o usuário está logado e podemos retornar true e fechar o método..</p>
<p>[code language="php" firstline="218"]<br />
		// A sessão e o cookie foram verificados, há um usuário logado<br />
		return true;<br />
[/code]</p>
<p>Terminamos o método que informa se há um usuário logado, agora vamos começar o método que fará o logout do usuário:</p>
<p>[code language="php" firstline="222"]<br />
	/**<br />
	 * Faz logout do usuário logado<br />
	 *<br />
	 * @return boolean<br />
	 */<br />
	function logout() {<br />
		// Continuaremos aqui...<br />
	}<br />
[/code]</p>
<p>O primeiro passo do logout é iniciar a sessão e remover todos os valores da sessão...</p>
<p>[code language="php" firstline="228"]<br />
		// Inicia a sessão?<br />
		if ($this-&gt;iniciaSessao AND !isset($_SESSION)) {<br />
			session_start();<br />
		}</p>
<p>		// Tamanho do prefixo<br />
		$tamanho = strlen($this-&gt;prefixoChaves);</p>
<p>		// Destroi todos os valores da sessão relativos ao sistema de login<br />
		foreach ($_SESSION AS $chave=&gt;$valor) {<br />
			// Remove apenas valores cujas chaves comecem com o prefixo correto<br />
			if (substr($chave, 0, $tamanho) == $this-&gt;prefixoChaves) {<br />
				unset($_SESSION[$chave]);<br />
			}<br />
		}<br />
[/code]</p>
<p>Repare que entre a linha 236 e 242 fizemos uma coisa interessante: removemos da sessão apenas os valores que pertencerem ao nosso sistema de login... Muita gente usa um simples <strong>session_destroy()</strong> para acabar com a sessão, mas se o seu site salvar valores na sessão não podemos simplesmente apagá-los, concorda? :)</p>
<p>&nbsp;</p>
<p>Por isso nós fazemos uma verificação a mais, que checa se ainda existem valores na sessão e [caso não exista nada] usamos o <strong>session_destroy()</strong> e depois removemos o cookie que identifica qual sessão é de qual visitante:</p>
<p>[code language="php" firstline="244"]<br />
		// Destrói asessão se ela estiver vazia<br />
		if (count($_SESSION) == 0) {<br />
			session_destroy();</p>
<p>			// Remove o cookie da sessão se ele existir<br />
			if (isset($_COOKIE['PHPSESSID'])) {<br />
				setcookie('PHPSESSID', false, (time() - 3600));<br />
				unset($_COOKIE['PHPSESSID']);<br />
			}<br />
		}<br />
[/code]</p>
<p>Agora o último passo do logout é remover o cookie que armazena as informações do visitante:</p>
<p>[code language="php" firstline="255"]<br />
		// Remove o cookie com as informações do visitante<br />
		if ($this-&gt;cookie AND isset($_COOKIE[$this-&gt;prefixoChaves . 'token'])) {<br />
			setcookie($this-&gt;prefixoChaves . 'token', false, (time() - 3600), '/');<br />
			unset($_COOKIE[$this-&gt;prefixoChaves . 'token']);<br />
		}<br />
[/code]</p>
<p>Terminando o método poremos retornar o valor booleano (true ou false) que informa se o usuário foi deslogado com sucesso... Existe forma melhor de fazer isso do que verificando se não há um usuário logado?</p>
<p>[code language="php" firstline="261"]<br />
		// Retorna SE não há um usuário logado<br />
		return !$this-&gt;usuarioLogado();<br />
[/code]</p>
<p>E a nossa classe de controle e gerencia de usuários logados está completa! :D</p>
<p>Espero realmente que tenham <strong>gostado e aprendido</strong> com essa sequencia de tutoriais.</p>
<p>Abraços e até a próxima!</p>
