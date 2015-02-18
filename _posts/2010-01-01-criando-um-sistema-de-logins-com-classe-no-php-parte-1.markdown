---
layout: post
status: publish
published: true
title: Criando um sistema de logins com classe no PHP – Parte 1
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Primeira parte de um tutorial que te ensinará a criar um sistema de logins
  seguro e bem organizado, usando classes e banco de dados MySQL, de fácil configuração
  e uso.
wordpress_id: 663
wordpress_url: http://blog.thiagobelem.net/?p=663
date: '2010-01-01 00:01:18 -0200'
date_gmt: '2010-01-01 02:01:18 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Login
---
<p>Fala pessoal! Tudo na paz? Que tal um super tutorial de ano novo?! :D Esse é o primeiro artigo do ano, as 00:01 de 1º de Janeiro! Vamos começar o ano bem!</p>
<p>Hoje vamos começar um tutorial que será divido em várias partes... Nele vamos aprender a fazer um sistema de logins decente, usando classes no PHP... Meu objetivo aqui é que você aprenda duas coisas: como fazer um sistema de login desde o começo e aprenda um pouco mais sobre o uso de classes.</p>
<p>O sistema de login usará <strong>banco de dados MySQL</strong> e terá suporte a <strong>encriptação de senha</strong> (MD5, SHA1 e etc)... Totalmente customizável e será fácil alterá-lo caso você precise de alguma coisa especial. Também teremos um suporte a opção "<strong>lembrar minha senha</strong>", onde o usuário permanecerá logado caso volte no site algum tempo depois, outra funcionalidade customizável e opcional.</p>
<p>Outro detalhe importante sobre o sistema é que ele irá funcionar nas versões 4 e 5 do PHP e do MySQL, então, se a sua hospedagem é uma vergonha, não se preocupe! :D</p>
<h3>A Tabela de Usuários</h3>
<p>Se você já tem uma tabela de usuários pode pular essa parte... Se não, vamos criar a seguinte tabela no banco de dados do seu site:<br />
[caption id="attachment_664" align="aligncenter" width="163" caption="Tabela de Usuários"]<img src="http://blog.thiagobelem.net/arquivos/2009/12/tabela_usuarios.jpg" alt="Tabela de Usuários" title="Tabela de Usuários" width="163" height="146" class="size-full wp-image-664" />[/caption]<br />
Para criar essa tabela, você poderá usar o seguinte código SQL:<br />
[code language="SQL"]<br />
CREATE TABLE `usuarios` (<br />
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,<br />
  `nome` VARCHAR(150) NOT NULL ,<br />
  `usuario` VARCHAR(100) NOT NULL ,<br />
  `senha` VARCHAR(40) NOT NULL ,<br />
  PRIMARY KEY (`id`) )<br />
ENGINE = MyISAM;<br />
[/code]</p>
<p>
<h3>A classe Usuario</h3>
<p>Vamos ao que interessa!</p>
<p>Antes de tudo, precisamos criar o nosso arquivo, vamos seguir algumas boas páticas de programação e vamos dar o nome de "<strong style="background: gray; color: orange">usuario.class.php</strong>". Criado o arquivo vazio, vamos começar a construir nossa classe:</p>
<p>[code language="php"]<br />
&lt;?php<br />
class Usuario {</p>
<p>}<br />
?&gt;<br />
[/code]</p>
<p>Agora vamos começar a inserir algumas propriedades (variáveis) que serão usadas pela classe ao longo do projeto...</p>
<p>[code language="php" firstline="4"]<br />
	/**<br />
	 * Nome do banco de dados onde está a tabela de usuários<br />
	 */<br />
	var $bancoDeDados = 'meu_site';</p>
<p>	/**<br />
	 * Nome da tabela de usuários<br />
	 */<br />
	var $tabelaUsuarios = 'usuarios';</p>
<p>	/**<br />
	 * Nomes dos campos onde ficam o usuário e a senha de cada usuário<br />
	 * Formato: tipo =&gt; nome_do_campo<br />
	 */<br />
	var $campos = array(<br />
		'usuario' =&gt; 'usuario',<br />
		'senha' =&gt; 'senha'<br />
	);<br />
[/code]</p>
<p>São com essas propriedades da classe que você vai poder customizar a classe para ela funcionar no seu site.. Cada uma esta devidamente comentada e explicada, é só alterar da forma que você necessitar.</p>
<p>Agora vamos definir o primeiro método da nossa classe:</p>
<p>[code language="php" firstline="23"]<br />
	/**<br />
	 * Usa algum tipo de encriptação para codificar uma senha<br />
	 *<br />
	 * Método protegido: Só pode ser acessado por dentro da classe<br />
	 *<br />
	 * @param string $senha - A senha que será codificada<br />
	 * @return string - A senha já codificada<br />
	 */<br />
	function __codificaSenha($senha) {<br />
		// Altere aqui caso você use, por exemplo, o MD5:<br />
		// return md5($senha);<br />
		return $senha;<br />
	}<br />
[/code]</p>
<p>Esse método cuidará da encriptação da senha (caso ela exista, claro)... Se o seu sistema não usar nenhum tipo de criptografia, pode deixar esse método do jeito que está, mas caso você use, por exemplo, o SHA1, você precisa mudar ali na linha 34 e colocar, por exemplo:<br />
[code language="php" firstline="34"]<br />
return sha1($senha);<br />
[/code]<br />
Caso você use outro tipo de encriptação, você vai precisar modificar esse método... O importante é você receber a senha pura/plana como parâmetro ($senha) e retornar a senha encriptada.</p>
<p>Agora vamos criar o segundo método da classe e o último método dessa parte do tutorial:</p>
<p>[code language="php" firstline="37"]<br />
	/**<br />
	 * Valida se um usuário existe<br />
	 *<br />
	 * @param string $usuario - O usuário que será validado<br />
	 * @param string $senha - A senha que será validada<br />
	 * @return boolean - Se o usuário existe ou não<br />
	 */<br />
	function validaUsuario($usuario, $senha) {<br />
		$senha = $this-&gt;__codificaSenha($senha);</p>
<p>		// Procura por usuários com o mesmo usuário e senha<br />
		$sql = &quot;SELECT COUNT(*)<br />
				FROM `{$this-&gt;bancoDeDados}`.`{$this-&gt;tabelaUsuarios}`<br />
				WHERE<br />
					`{$this-&gt;campos['usuario']}` = '{$usuario}'<br />
					AND<br />
					`{$this-&gt;campos['senha']}` = '{$senha}'&quot;;<br />
		$query = mysql_query($sql);<br />
		if ($query) {<br />
			$total = mysql_result($query, 0);<br />
		} else {<br />
			// A consulta foi mal sucedida, retorna false<br />
			return false;<br />
		}</p>
<p>		// Se houver apenas um usuário, retorna true<br />
		return ($total == 1) ? true : false;<br />
	}<br />
[/code]</p>
<p>Esse método, como o comentário explica, cuidará de validar se um usuário existe, procurando o par <strong>$usuario</strong> + <strong>$senha</strong> no banco de dados... Ele só retornará verdadeiro (<em>true</em>) quando apenas um registro for encontrado.<br />
Se você reparar logo ali no começo do método, na linha 45, ele usa o método <strong style="background: gray; color: #FFF">__codificaSenha()</strong> que irá encriptar (ou não) a senha... Simples né? :)</p>
<p>Então é isso gente... Por hoje vamos ficar por aqui. Em breve postarei a <a href="http://blog.thiagobelem.net/mysql/criando-um-sistema-de-logins-com-classe-no-php-parte-2/" title="Parte 2" target="_blank">Parte 2</a>, onde iremos criar os métodos que deixam um usuário logado (usando sessões E cookies)... E antes que alguém reclame, <strong>essa classe ainda não está usável</strong>... Ela é apenas a 1ª parte de uma classe que vamos fazendo ao longo dessa sequencia de tutoriais.</p>
<p>Pra quem quiser, o <strong>download</strong> do script completo da Parte 1: <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte1.phps" title="usuarios.class.parte1.phps (Parte 1)" target="_blank">PHP</a> ou <a href="http://blog.thiagobelem.net/arquivos/2010/01/usuarios.class.parte1.rar" title=usuarios.class.parte1.rar (Parte 1)" target="_blank">RAR</a>.</p>
<p>Não deixem de dar uma olhada nas outras partes:</p>
<ul>
<li><a href="http://blog.thiagobelem.net/mysql/criando-um-sistema-de-logins-com-classe-no-php-parte-2/" title="Criando um sistema de logins com classe no PHP - Parte 2" target="_blank">Criando um sistema de logins com classe no PHP - Parte 2</a></li>
<li><a href="http://blog.thiagobelem.net/mysql/criando-um-sistema-de-logins-com-classe-no-php-parte-3/" title="Criando um sistema de logins com classe no PHP - Parte 3" target="_blank">Criando um sistema de logins com classe no PHP - Parte 3</a></li>
</ul>
<p>Um grande abraço, feliz ano novo e até a próxima!</p>
