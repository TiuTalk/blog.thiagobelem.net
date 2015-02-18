---
layout: post
title: Criando um sistema de logins com classe no PHP – Parte 2
excerpt: Segunda parte do tutorial que te ensinará, passo-a-passo a criar um sistema
  de login usando classes, MySQL, sessões e cookies... Que funciona tanto no PHP 4
  quanto no PHP 5. :)

date: '2010-01-07 08:48:16 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Login
---
<p>Vamos que vamos! Essa é a segunda parte do nosso tutorial "<strong>Criando um sistema de logins com classe no PHP</strong>", na <a href="http://blog.thiagobelem.net/mysql/criando-um-sistema-de-logins-com-classe-no-php-parte-1/" title="Criando um sistema de logins com classe no PHP - Parte 1" target="_blank">Parte 1</a> começamos a criar a classe e definimos um método que validava se o usuário existe, agora vamos continuar a classe e criar um método que deixará o usuário logado no sistema usando sessão e cookies.</p>
<p>Primeiro, vamos adicionar algumas novas propriedades que iremos usar nessa parte do tutorial:<br />
[code language="php" firstline="32"]<br />
	/**<br />
	 * Nomes dos campos que serão pegos da tabela de usuarios e salvos na sessão,<br />
	 * caso o valor seja false nenhum dado será consultado<br />
	 * @var mixed<br />
	 */<br />
	var $dados = array('id', 'nome');</p>
<p>	/**<br />
	 * Inicia a sessão se necessário?<br />
	 * @var boolean<br />
	 */<br />
	var $iniciaSessao = true;</p>
<p>	/**<br />
	 * Prefixo das chaves usadas na sessão<br />
	 * @var string<br />
	 */<br />
	var $prefixoChaves = 'usuario_';</p>
<p>	/**<br />
	 * Usa um cookie para melhorar a segurança?<br />
	 * @var boolean<br />
	 */<br />
	var $cookie = true;</p>
<p>	/**<br />
	 * Armazena as mensagens de erro<br />
	 * @var string<br />
	 */<br />
	var $erro = '';<br />
[/code]</p>
<p>Todas as propriedades estão comentadas, é bom vocês irem se acostumando com essa necessidade dos comentários organizados e padronizados, isso vai se tornar um "<em>must have</em>" num futuro não muito distante... Mas isso é assunto pra um outro tutorial.</p>
<p>Reparem que criamos uma propriedade $erro, ela será usada para armazenar as mensagens de erro quando algo der errado... :)</p>
<p>Agora vamos começar a criar o novo, gigantesco e magnífico método que irá salvar o usuário no sistema, mantendo-o logado:</p>
<p>[code language="php" firstline="106"]<br />
	/**<br />
	 * Loga um usuário no sistema salvando seus dados na sessão<br />
	 *<br />
	 * @param string $usuario - O usuário que será logado<br />
	 * @param string $senha - A senha do usuário<br />
	 * @return boolean - Se o usuário foi logado ou não<br />
	 */<br />
	function logaUsuario($usuario, $senha) {</p>
<p>	}<br />
[/code]</p>
<p>Primeiro de tudo, precisamos validar os dados passados por parâmetro:<br />
[code language="php" firstline="114"]<br />
		// Verifica se é um usuário válido<br />
		if ($this->validaUsuario($usuario, $senha)) {</p>
<p>			// Continuaremos aqui...</p>
<p>		} else {<br />
			$this->erro = 'Usuário inválido';<br />
			return false;<br />
		}<br />
[/code]</p>
<p>Já sabemos se o usuário foi validado, agora nós vamos verificar se é necessário (e possível) iniciar a sessão:<br />
[code language="php" firstline="117"]<br />
			// Inicia a sessão?<br />
			if ($this->iniciaSessao AND !isset($_SESSION)) {<br />
				session_start();<br />
			}<br />
[/code]</p>
<p>O próximo passo é atrazer (ou não) os dados do banco de dados para a sessão:<br />
[code language="php" firstline="122"]<br />
			// Traz dados da tabela?<br />
			if ($this->dados != false) {<br />
				// Adiciona o campo do usuário na lista de dados<br />
				if (!in_array($this->campos['usuario'], $this->dados)) {<br />
					$this->dados[] = 'usuario';<br />
				}</p>
<p>				// Monta o formato SQL da lista de campos<br />
				$dados = '`' . join('`, `', array_unique($this->dados)) . '`';</p>
<p>				// Consulta os dados<br />
				$sql = "SELECT {$dados}<br />
						FROM `{$this->bancoDeDados}`.`{$this->tabelaUsuarios}`<br />
						WHERE `{$this->campos['usuario']}` = '{$usuario}'";<br />
				$query = mysql_query($sql);</p>
<p>				// Se a consulta falhou<br />
				if (!$query) {<br />
					// A consulta foi mal sucedida, retorna false<br />
					$this->erro = 'A consulta dos dados é inválida';<br />
					return false;<br />
				} else {<br />
					// Traz os dados encontrados para um array<br />
					$dados = mysql_fetch_assoc($query);<br />
					// Limpa a consulta da memória<br />
					mysql_free_result($query);</p>
<p>					// Passa os dados para a sessão<br />
					foreach ($dados AS $chave=>$valor) {<br />
						$_SESSION[$this->prefixoChaves . $chave] = $valor;<br />
					}<br />
				}<br />
			}<br />
[/code]</p>
<p>Da linha 124 até a linha 135 nó montamos a consulta que será usada para fazer a busca no banco de dados, depois disso nós a executamos e, caso a consulta tenha sido bem sucedida, salvamos os dados na sessão.</p>
<p>Repare que para isso usamos <strong style="background: #B4DFEF; color: black">$_SESSION[$this->prefixoChaves . $chave]</strong>, isso irá criar valores na sessão usando o prefixo (definido na propriedade <strong>$this->prefixoChaves</strong> no começo da classe) seguido o nome do campo que estava no banco de dados... Então, segundo o nosso exemplo: se estamos pegando o campo <strong>id</strong> e o campo <strong>nome</strong> lá da tabela, as chaves criadas na sessão serão <strong>usuario_id</strong> e <strong>usuario_nome</strong>... Legal não?</p>
<p>Mas calma que ainda não acabou!</p>
<p>Precisamos ainda definir um valor na sessão e criar (caso seja possível) o cookie que irá ajudar na identificação (e segurança) do usuário:</p>
<p>[code language="php" firstline="156"]<br />
			// Usuário logado com sucesso<br />
			$_SESSION[$this->prefixoChaves . 'logado'] = true;</p>
<p>			// Define um cookie para maior segurança?<br />
			if ($this->cookie) {<br />
				// Monta uma cookie com informações gerais sobre o usuário: usuario, ip e navegador<br />
				$valor = join('#', array($usuario, $_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_USER_AGENT']));</p>
<p>				// Encripta o valor do cookie<br />
				$valor = sha1($valor);</p>
<p>				setcookie($this->prefixoChaves . 'token', $valor, 0, '/');<br />
			}</p>
<p>			// Fim da verificação, retorna true<br />
			return true;<br />
[/code]</p>
<p>A parte do cookie pode parecer complexa mais não é... Criamos um cookie chamado "usuario_token" contendo informações adicionais do usuário: usuário, IP e informações do navegador... Essas informações serão usadas para proteger o login do usuário caso outros usuários tentem roubar o ID de sessão ou forjar IDs falsos.</p>
<p>Agora sim o método terminou! :D</p>
<p>Resumindo tudo:</p>
<p>Depois de logado, seguindo o nosso exemplo, serão criados os seguintes valores na sessão:</p>
<ul>
<li><strong>usuario_id</strong> » Contendo o ID do usuário (vindo da coluna `id` da tabela);</li>
<li><strong>usuario_nome</strong> » Contendo o nome do usuário (vindo da coluna `nome` da tabela);</li>
<li><strong>usuario_usuario</strong> » Contendo o usuario do usuário <span style="color: silver">(?!)</span> (vindo da coluna `usuario` da tabela);</li>
<li><strong>usuario_logado</strong> (true) » Contendo um booleano (sempre true) informando que o usuário está logado, apenas para facilitar as coisas no futuro.</li>
</ul>
<p>E será criado um cookie (com as informações do visitante), criptografado, que irá durar apenas enquanto o visitante estiver com o navegador aberto:</p>
<ul>
<li><strong>usuario_token</strong> » Exemplo de valor: a9f0a6edefc3d61895d5b8054ed6b8a175bc2851</li>
</ul>
<p>Por hoje é só pessoal... Na Parte 3 do tutorial iremos criar o método que irá verificar o usuário está logado (que vocês poderão usar nas suas páginas protegidas) e o método para logout, mas isso não é tudo... Ainda vai faltar o "lembrar minha senha" e outras implementações... Talvez um sisteminha de permissões, quem sabe? :D</p>
<p>Pra quem quiser, o download do script completo:</p>
<ul>
<li><strong>Parte 1</strong> » <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte1.phps" title="usuarios.class.parte1.phps (Parte 1)" target="_blank">PHP</a> ou <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte1.rar" title="usuarios.class.parte1.rar (Parte 1)" target="_blank">RAR</a></li>
<li><strong>Parte 2</strong> » <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte2.phps" title="usuarios.class.parte2.phps (Parte 2)" target="_blank">PHP</a> ou <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte2.rar" title="usuarios.class.parte2.rar (Parte 2)" target="_blank">RAR</a> (Já inclui os códigos da Parte 1)</li>
</ul>
<p>Não deixem de dar uma olhada nas outras partes:</p>
<ul>
<li><a href="http://blog.thiagobelem.net/mysql/criando-um-sistema-de-logins-com-classe-no-php-parte-1/" title="Criando um sistema de logins com classe no PHP - Parte 1" target="_blank">Criando um sistema de logins com classe no PHP - Parte 1</a></li>
<li><a href="http://blog.thiagobelem.net/mysql/criando-um-sistema-de-logins-com-classe-no-php-parte-3/" title="Criando um sistema de logins com classe no PHP - Parte 3" target="_blank">Criando um sistema de logins com classe no PHP - Parte 3</a></li>
</ul>
<p>Quem gostou levanta a mão! \o. (E com a outra mão, deixa um comentário agradecendo)</p>
<p>Abraços e até a próxima!</p>
