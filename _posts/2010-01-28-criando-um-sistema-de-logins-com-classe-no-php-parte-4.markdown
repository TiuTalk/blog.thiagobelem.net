---
layout: post
title: Criando um sistema de logins com classe no PHP – Parte 4
excerpt: Continuação da sequencia de tutoriais que te ensina a criar um poderoso sistema
  de login usando classes no PHP. Nessa parte você aprenderá a implementar o sistema
  de "Lembrar minha senha" na classe com exemplos de uso e explicação para todas as
  funcionalidades.

date: '2010-01-28 09:07:17 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Login
---
<p>Olha eu aqui novamente minha gente! :)</p>
<p>Hoje vamos dar continuidade a nossa sequëncia de tutoriais que te ensina a criar um sistema de logins usando classes no PHP.</p>
<p>Na parte de hoje, a Parte 4, vamos fazer inúmeros ajustes e correções na classe além implementar a funcionalidade "Lembrar minha senha".</p>
<h3>Lembrando a minha senha</h3>
<p>A funcionalidade "Lembrar minha senha" funciona basicamente da seguinte forma: após o usuário se logar (informando que quer que sua senha seja lembrada) são criados cookies na máquina dele salvando o usuário e a senha do mesmo... Depois, quando o usuário voltar no site e não estiver logado o sistema busca esses cookies e tenta validar os dados, se os dados validarem ele é logado automaticamente no sistema e os cookies são reescritos (para durarem mais tempo).</p>
<h3>Ajustes e correções</h3>
<p>Estou desde ontem revisando a classe e fazendo algumas pequenas correções... Não vou listar todas aqui pois acho mais fácil vocês pegarem o PHPs final e darem uma olhada... Prefiro listar aqui rapidamente o que foi preciso fazer e vocês vão dando uma olhada no código:</p>
<ul>
<li>Aumentar as informações nos blocos de comentário (seguindo o padrão do <a href="http://www.phpdoc.org/" title="PHPDoc">PHPDoc</a>);</li>
<li>Remover o prefixo "__" dos métodos protegidos (agora todos os métodos são <strong>públicos</strong>);</li>
<li>Documentar em qual versão a propriedade ou método apareceu na classe;</li>
<li>Ajustar os métodos <strong>usuarioLogado()</strong> e <strong>logaUsuario()</strong> para atender ao sistema de "Lembrar minha senha";</li>
<li>Criar a propriedade <strong>filtraDados</strong> que permite o uso do <a href="http://br.php.net/manual/en/function.mysql-real-escape-string.php" title="mysql_real_escape_string()">mysql_real_escape_string()</a> e evita <strong>SQL Injection</strong>;</li>
<li>Criar a propriedade <strong>caseSensitive</strong> que diferencia "casa" de "CaSa" ou "CASA".</li>
<li>Criar a propriedade <strong>cookiePath</strong> que será usada sempre que um cookie for criado ou deletado.</li>
</ul>
<p></p>
<h3>Novas Propriedades</h3>
<p>Para a nossa nova funcionalidade precisamos criar uma nova propriedade na nossa classe:
[code language="php" firstline="99"]	/**
	 * Quantidade (em dias) que o sistema lembrará os dados do usuário ("Lembrar minha senha")
	 *
	 * Usado apenas quando o terceiro parâmetro do método Usuario::logaUsuario() for true
	 * Os dados salvos serão encriptados usando base64
	 *
	 * @var integer
	 * @since v1.1
	 */
	var $lembrarTempo = 7;[/code]
Se vocês lerem o comentário vão perceber que um terceiro parâmetro foi adicionado ao método logaUsuario()... É esse terceiro parâmetro que define se os dados serão lembrados pelo o sistema.</p>
<h3>Novo Método - <span style="color: #B40000">lembrarDados()</span></h3>
<p>Vamos criar agora o método lembrarDados() que irá salvar os dados do usuário, criptografados, em cookies:
[code language="php" firstline="391"]	/**
	 * Salva os dados do usuário em cookies ("Lembrar minha senha")
	 *
	 * @access public
	 * @since v1.1
	 *
	 * @param string $usuario O usuário que será lembrado
	 * @param string $senha A senha do usuário
	 * @return void
	 */
	function lembrarDados($usuario, $senha) {
		// Continuaremos aqui...
	}
[/code]</p>
<p>Primeiro nós vamos calcular o <a href="http://pt.wikipedia.org/wiki/Era_Unix" title="UNIX Timestamp">UNIX Timestamp</a> que será a data exata de quando os cookies irão expirar:
[code language="php" firstline="402"]
		// Calcula o timestamp final para os cookies expirarem
		$tempo = strtotime("+{$this->lembrarTempo} day", time());
[/code]
Agora nós iremos encriptar os dados do usuário usando <a href="http://pt.wikipedia.org/wiki/Base64" title="base64">base64</a> e adicionar um caractere no início da string criptografada para impedir que ela seja decriptografada pelo usuário (caso ele encontre o valor do cookie):
[code language="php" firstline="405"]
		// Encripta os dados do usuário usando base64
		// O rand(1, 9) cria um digito no início da string que impede a descriptografia
		$usuario = rand(1, 9) . base64_encode($usuario);
		$senha = rand(1, 9) . base64_encode($senha);
[/code]
Agora é só criar os dois cookies e o método está pronto:
[code language="php" firstline="410"]
		// Cria um cookie com o usuário
		setcookie($this->prefixoChaves . 'lu', $usuario, $tempo, $this->cookiePath);
		// Cria um cookie com a senha
		setcookie($this->prefixoChaves . 'ls', $senha, $tempo, $this->cookiePath);
[/code]
Nosso método que salva os dados em cookies está pronto... Esse método será usado pelo método logaUsuario() após todos os dados serem salvos na sessão.</p>
<p>Agora nós vamos precisar criar um método que verifica os dados (usuario e senha) salvos nos cookies:</p>
<h3>Novo Método - <span style="color: #B40000">verificaDadosLembrados()</span></h3>
<p>Esse método é muito importante pois ele verificará os dados salvos nos cookies <strong>tentando logar o usuário</strong>! Esse método só será chamado quando o usuário tentar acessar uma página protegida e não estiver logado... O proprio método <strong>usuarioLogado()</strong> já fará isso!</p>
<p>Vamos começar:
[code language="php" firstline="416"]
	/**
	 * Verifica os dados do cookie (caso eles existam)
	 *
	 * @access public
	 * @since v1.1
	 * @uses Usuario::logaUsuario()
	 *
	 * @return boolean Os dados são validos?
	 */
	function verificaDadosLembrados() {
		// Continuaremos aqui...
	}
[/code]
Primeiro nós precisamos verificar se os cookies existem, caso eles não existam os dados não foram encontrados e, obviamente, são "inválidos".
[code language="php" firstline="426"]
		// Os cookies de "Lembrar minha senha" existem?
		if (isset($_COOKIE[$this->prefixoChaves . 'lu']) AND isset($_COOKIE[$this->prefixoChaves . 'ls'])) {
			// Continuaremos aqui...
		}</p>
<p>		// Não há nenhum cookie, dados inválidos
		return false;
[/code]
O próximo passo é que faz toda a mágica do método: ele remove o caractere adicionado no início da string criptogafada, descriptografa a string e verifica se os dados são válidos tentando logar o usuário:
[code language="php" firstline="428"]
			// Pega os valores salvos nos cookies removendo o digito e desencriptando
			$usuario = base64_decode(substr($_COOKIE[$this->prefixoChaves . 'lu'], 1));
			$senha = base64_decode(substr($_COOKIE[$this->prefixoChaves . 'ls'], 1));</p>
<p>			// Tenta logar o usuário com os dados encontrados nos cookies
			return $this->logaUsuario($usuario, $senha, true);
[/code]
Se o usuário for logado com sucesso o método <strong>logaUsuario()</strong> retornará <em>true</em> para o método <strong>verificaDadosLembrados()</strong>, que por sua vez também retornará true para o método <strong>usuarioLogado()</strong> e tudo vai funcionar perfeitamente! :)</p>
<p>Antes que você desista do tutorial agora mesmo por que acha que tá muito complicado, isso é o "normal" da Orientação a Objetos e você vai adorar. :)</p>
<p>Nossa nova funcionalidade está quase pronta.. Só falta uma coisinha: um método que limpe os dados lembrados do Cookie para quando o usuário fizer logout... Isso é opcional, vai depender do seu sistema, mas já vamos criar o método e você decide se limpa ou não os dados após o logout (automaticamente, claro).</p>
<h3>Novo Método - <span style="color: #B40000">limpaDadosLembrados()</span></h3>
<p>Para deletar um cookie você deve definir o seu valor como nulo ou falso e definir a sua data de expiração no passado... O método fica asssim:
[code language="php" firstline="410"]
	/**
	 * Limpa os dados lembrados dos cookies ("Lembrar minha senha")
	 *
	 * @access public
	 * @since v1.1
	 *
	 * @return void
	 */
	function limpaDadosLembrados() {
		// Deleta o cookie com o usuário
		if (isset($_COOKIE[$this->prefixoChaves . 'lu'])) {
			setcookie($this->prefixoChaves . 'lu', false, (time() - 3600), $this->cookiePath);
			unset($_COOKIE[$this->prefixoChaves . 'lu']);
		}
		// Deleta o cookie com a senha
		if (isset($_COOKIE[$this->prefixoChaves . 'ls'])) {
			setcookie($this->prefixoChaves . 'ls', false, (time() - 3600), $this->cookiePath);
			unset($_COOKIE[$this->prefixoChaves . 'ls']);
		}
	}
[/code]</p>
<p>Nossa nova funcionalidade está devidamente implementada! :)</p>
<p>Pra quem quiser, o download do script completo:</p>
<ul>
<li><strong>Parte 1</strong> » <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte1.phps" title="usuarios.class.parte1.phps (Parte 1)" target="_blank">PHP</a>, <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte1.rar" title="usuarios.class.parte1.rar (Parte 1)" target="_blank">RAR</a> ou <a href="http://pastie.org/826194" title="Pastie (Parte 1)" target="_blank">Pastie</a></li>
<li><strong>Parte 2</strong> » <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte2.phps" title="usuarios.class.parte2.phps (Parte 2)" target="_blank">PHP</a>, <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte2.rar" title="usuarios.class.parte2.rar (Parte 2)" target="_blank">RAR</a> ou <a href="http://pastie.org/826197" title="Pastie (Parte 2)" target="_blank">Pastie</a> (Inclui a parte 1)</li>
<li><strong>Parte 3</strong> » <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte3.phps" title="usuarios.class.parte3.phps (Parte 3)" target="_blank">PHP</a>, <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte3.rar" title="usuarios.class.parte3.rar (Parte 3)" target="_blank">RAR</a> ou <a href="http://pastie.org/826200" title="Pastie (Parte 3)" target="_blank">Pastie</a> (Inclui as partes 1 e 2)</li>
<li><strong>Parte 4</strong> » <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte4.phps" title="usuarios.class.parte4.phps (Parte 4)" target="_blank">PHP</a>, <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte4.rar" title="usuarios.class.parte4.rar (Parte 4)" target="_blank">RAR</a> ou <a href="http://pastie.org/826208" title="Pastie (Parte 4)" target="_blank">Pastie</a> (Inclui as partes 1, 2 e 3)</li>
</ul>
<h3>Como usar a nova funcionalidade</h3>
<p>Agora vamos fazer alguns mínimos ajustes aos códigos mostados no <a href="http://blog.thiagobelem.net/mysql/sistema-de-logins-com-classe-no-php-como-usar/" title="Sistema de logins com classe no PHP â</p>
