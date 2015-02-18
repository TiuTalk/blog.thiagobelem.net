---
layout: post
title: Criando um sistema de logins com classe no PHP – Parte 3
excerpt: Terceira parte do tutorial que ensina a criar um sistema de login sólido,
  leve e completo... Totalmente customizável e de fácil implementação. Sistema feito
  para rodar em PHP 4 e PHP 5, usando banco de dados em MySQL e Orientação a Objetos.

date: '2010-01-13 17:33:33 -0200'
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
<p>[code language="php" firstline="97"]
		// Procura por usuários com o mesmo usuário e senha
		$sql = "SELECT COUNT(*)
				FROM `{$this->bancoDeDados}`.`{$this->tabelaUsuarios}`
				WHERE
					`{$this->campos['usuario']}` = '{$usuario}'
					AND
					`{$this->campos['senha']}` = '{$senha}'";
		$query = mysql_query($sql);
		if ($query) {
			$total = mysql_result($query, 0);
[/code]</p>
<p>Mudaremos a consulta e outras três linhas depois:</p>
<p>[code language="php" firstline="87"]
		// Procura por usuários com o mesmo usuário e senha
		$sql = "SELECT COUNT(*) AS total
				FROM `{$this->bancoDeDados}`.`{$this->tabelaUsuarios}`
				WHERE
					`{$this->campos['usuario']}` = '{$usuario}'
					AND
					`{$this->campos['senha']}` = '{$senha}'";
		$query = mysql_query($sql);
		if ($query) {
			$total = mysql_result($query, 0, 'total');</p>
<p>			// Limpa a consulta da memória
			mysql_free_result($query);
[/code]</p>
<p>Essa mudança foi necessária por causa de um probleminha com a função mysql_result() que tem dificuldades de identificar qual resultado nós queremos... Com esse ajuste tudo irá funcionar perfeitamente.</p>
<p> </p>
<p>Agora nós iremos começar a criar o método que verifica se há um usuário logado... Ele irá retornar TRUE quando um usuário estiver logado e retornará FALSE em qualquer situação que indique que não há um usuário logado, por isso precisamos verificar todas as possibilidades:</p>
<p>[code language="php" firstline="183"]
	/**
	 * Verifica se há um usuário logado no sistema
	 *
	 * @return boolean - Se há um usuário logado ou não
	 */
	function usuarioLogado() {
		// Continuaremos aqui...
	}
[/code]</p>
<p>Primeiro nós verificamos a necessidade de iniciar a sessão e lógo após isso iremos verificar se existe o valor "logado" na sessão:</p>
<p>[code language="php" firstline="189"]
		// Inicia a sessão?
		if ($this->iniciaSessao AND !isset($_SESSION)) {
			session_start();
		}</p>
<p>		// Verifica se não existe o valor na sessão
		if (!isset($_SESSION[$this->prefixoChaves . 'logado']) OR !$_SESSION[$this->prefixoChaves . 'logado']) {
			return false;
		}
[/code]</p>
<p>Pra quem não lembra, esse valor <strong>$this->prefixoChaves . 'logado'</strong> foi criado pelo método <strong>logaUsuario()</strong>.</p>
<p>Agora nós precisamos verificar (caso seja necessário) o cookie que contém as informações (usuário, IP e navegador) do usuário para ver se elas batem com o que está armazenado no cookie:</p>
<p>[code language="php" firstline="199"]
		// Faz a verificação do cookie?
		if ($this->cookie) {
			// Verifica se o cookie não existe
			if (!isset($_COOKIE[$this->prefixoChaves . 'token'])) {
				return false;
			} else {
				// Continuaremos aqui...
			}
		}
[/code]</p>
<p>Caso haja o cookie, precisamos criar novamente uma string encriptada contendo as informações do usuário para checar com o valor salvo no cookie:</p>
<p>[code language="php" firstline="205"]
				// Monta o valor do cookie
				$valor = join('#', array($_SESSION[$this->prefixoChaves . 'usuario'], $_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_USER_AGENT']));</p>
<p>				// Encripta o valor do cookie
				$valor = sha1($valor);</p>
<p>				// Verifica o valor do cookie
				if ($_COOKIE[$this->prefixoChaves . 'token'] !== $valor) {
					return false;
				}
[/code]</p>
<p>Feita a verificação do cookie sabemos que, depois disso tudo, o usuário está logado e podemos retornar true e fechar o método..</p>
<p>[code language="php" firstline="218"]
		// A sessão e o cookie foram verificados, há um usuário logado
		return true;
[/code]</p>
<p>Terminamos o método que informa se há um usuário logado, agora vamos começar o método que fará o logout do usuário:</p>
<p>[code language="php" firstline="222"]
	/**
	 * Faz logout do usuário logado
	 *
	 * @return boolean
	 */
	function logout() {
		// Continuaremos aqui...
	}
[/code]</p>
<p>O primeiro passo do logout é iniciar a sessão e remover todos os valores da sessão...</p>
<p>[code language="php" firstline="228"]
		// Inicia a sessão?
		if ($this->iniciaSessao AND !isset($_SESSION)) {
			session_start();
		}</p>
<p>		// Tamanho do prefixo
		$tamanho = strlen($this->prefixoChaves);</p>
<p>		// Destroi todos os valores da sessão relativos ao sistema de login
		foreach ($_SESSION AS $chave=>$valor) {
			// Remove apenas valores cujas chaves comecem com o prefixo correto
			if (substr($chave, 0, $tamanho) == $this->prefixoChaves) {
				unset($_SESSION[$chave]);
			}
		}
[/code]</p>
<p>Repare que entre a linha 236 e 242 fizemos uma coisa interessante: removemos da sessão apenas os valores que pertencerem ao nosso sistema de login... Muita gente usa um simples <strong>session_destroy()</strong> para acabar com a sessão, mas se o seu site salvar valores na sessão não podemos simplesmente apagá-los, concorda? :)</p>
<p> </p>
<p>Por isso nós fazemos uma verificação a mais, que checa se ainda existem valores na sessão e [caso não exista nada] usamos o <strong>session_destroy()</strong> e depois removemos o cookie que identifica qual sessão é de qual visitante:</p>
<p>[code language="php" firstline="244"]
		// Destrói asessão se ela estiver vazia
		if (count($_SESSION) == 0) {
			session_destroy();</p>
<p>			// Remove o cookie da sessão se ele existir
			if (isset($_COOKIE['PHPSESSID'])) {
				setcookie('PHPSESSID', false, (time() - 3600));
				unset($_COOKIE['PHPSESSID']);
			}
		}
[/code]</p>
<p>Agora o último passo do logout é remover o cookie que armazena as informações do visitante:</p>
<p>[code language="php" firstline="255"]
		// Remove o cookie com as informações do visitante
		if ($this->cookie AND isset($_COOKIE[$this->prefixoChaves . 'token'])) {
			setcookie($this->prefixoChaves . 'token', false, (time() - 3600), '/');
			unset($_COOKIE[$this->prefixoChaves . 'token']);
		}
[/code]</p>
<p>Terminando o método poremos retornar o valor booleano (true ou false) que informa se o usuário foi deslogado com sucesso... Existe forma melhor de fazer isso do que verificando se não há um usuário logado?</p>
<p>[code language="php" firstline="261"]
		// Retorna SE não há um usuário logado
		return !$this->usuarioLogado();
[/code]</p>
<p>E a nossa classe de controle e gerencia de usuários logados está completa! :D</p>
<p>Espero realmente que tenham <strong>gostado e aprendido</strong> com essa sequencia de tutoriais.</p>
<p>Abraços e até a próxima!</p>
