---
layout: post
title: Orientação a Objetos – Material Básico
excerpt: Classes são como funções, só que com variáveis e funções próprias.. Geralmente
  usadas para agrupar um numero X de funcionalidades/metodos... Vou ensinar a você
  como criar, passo-a-passo, uma classe para as funções básicas do MySQL.

date: '2009-05-07 17:17:55 -0300'
categories:
- PHP
- Artigos
- Orientação a objetos
tags: []
---
<p>Não vou entrar em detalhes sobre Orientação a Objetos pois a definição não muda muita coisa... Vou resumir: <strong>P</strong>rogramação <strong>o</strong>rientada a <strong>o</strong>bjetos (ou, mais conhecida como <em><strong>POO</strong></em>) se resume ao uso de classes, um recurso um tanto quanto interessante do PHP.</p>
<p>Classes são como funções, só que com variáveis e funções próprias.. Geralmente usadas para agrupar um numero X de funcionalidades/métodos... Vamos criar, passo-a-passo, uma classe para as funções básicas do MySQL.</p>
<p>Primeiro, definimos a classe com nome <strong>MeuSQL</strong>:</p>
<p>[code language="php"]<br />
&lt; ?php</p>
<p>class MeuSQL {</p>
<p>}</p>
<p>?&gt;<br />
[/code]</p>
<p>Agora vamos definir algumas variáveis com valores padrões:</p>
<p>[code language="php"]<br />
&lt; ?php</p>
<p>class MeuSQL {<br />
	// Propriedades padrões<br />
	var $servidor = '127.0.0.1';<br />
	var $usuario = 'root';<br />
	var $senha = '';<br />
	var $banco = 'meusite';<br />
	var $conexao = null;</p>
<p>}</p>
<p>?&gt;<br />
[/code]</p>
<p>Na verdade, devemos chamar estas variáveis como "<strong>propriedades</strong>" (nome que se dá para as variáveis da classe). Toda propriedade de classe, para manter a compatibilidade com o PHP 4, precisa ter a palavra "<strong>var</strong>" antes.</p>
<p>Vale lembrar que, fora da classe, essas propriedades não vão existir.. Nem após você chamar a classe. Isso deixa as coisas mais seguras. :)</p>
<p>Agora vamos definir o primeiro método. "<strong>Método</strong>" é nome que se dá para uma função dentro de uma classe.</p>
<p>[code language="php"]<br />
&lt; ?php</p>
<p>class MeuSQL {<br />
	// Propriedades padrões<br />
	var $servidor = '127.0.0.1'; // Endereço<br />
	var $usuario = 'root'; // Usuário<br />
	var $senha = ''; // Senha<br />
	var $banco = 'meusite'; // Banco de dados<br />
	// Outras variáveis para uso interno:<br />
	var $conexao = null;<br />
	var $query = null;</p>
<p>	function conecta() {<br />
		$this-&gt;conexao = mysql_connect($this-&gt;servidor, $this-&gt;usuario, $this-&gt;senha);<br />
		$status = mysql_select_db($this-&gt;banco, $this-&gt;conexao);<br />
		return $status;<br />
	}</p>
<p>}</p>
<p>?&gt;<br />
[/code]</p>
<p>Criamos um método que fará a conexão com o MySQL... Quem já estudou um pouco sobre MySQL sabe que a função <strong>mysql_connect()</strong> precisa de três parâmetros, nessa ordem: o servidor (endereço), o usuário e a senha... Repare que usamos <strong><span style="color: #3366ff;">$this-&gt;servidor</span></strong> e não <span style="color: #3366ff;"><strong>$servidor</strong></span>, vou explicar por que:</p>
<p>Quando queremos pegar o valor de uma propriedade de uma classe, fazemos referência a própria classe, por isso o <strong>$this</strong>. Sem isso não é possível pegar o valor da propriedade.</p>
<p><span style="color: #ff0000;"><strong>Preste atenção:</strong></span> quando definimos variáveis dentro das funções (métodos) não é necessário usar o $this, pois, nesse caso, estamos falando de variáveis e não de propriedades. Sei que é um pouco complicado... Mas ninguém disse que POO é pra qulquer um  8-).</p>
<p>Agora vamos definir mais três métodos para as outras funções básicas do MySQL:</p>
<p>[code language="php"]<br />
&lt; ?php</p>
<p>class MeuSQL {<br />
	// Propriedades padrões<br />
	var $servidor = '127.0.0.1'; // Endereço<br />
	var $usuario = 'root'; // Usuário<br />
	var $senha = ''; // Senha<br />
	var $banco = 'meusite'; // Banco de dados<br />
	// Outras variáveis para uso interno:<br />
	var $conexao = null;<br />
	var $query = null;</p>
<p>	function conecta() {<br />
		$this-&gt;conexao = mysql_connect($this-&gt;servidor, $this-&gt;usuario, $this-&gt;senha);<br />
		$status = mysql_select_db($this-&gt;banco, $this-&gt;conexao);<br />
		return $status;<br />
	}</p>
<p>	function consulta($query) {<br />
		$this-&gt;query = mysql_query($query);<br />
		return $this-&gt;query;<br />
	}</p>
<p>	function resultado() {<br />
		return mysql_fetch_assoc($this-&gt;query);<br />
	}</p>
<p>	function registros() {<br />
		return mysql_num_rows($this-&gt;query);<br />
	}</p>
<p>}</p>
<p>?&gt;<br />
[/code]</p>
<p>Podemos dizer que a nossa classe está pronta... Salve este arquivo como <span style="color: #ff6600;"><strong>MeuSQL.php</strong></span>. Agora vamos ver um exemplo de uso e depois, comentá-la toda:</p>
<p>[code language="php"]<br />
&lt; ?php<br />
// Inclui o arquivo com a classe<br />
include(&quot;MeuSQL.php&quot;);</p>
<p>// Instancia/chama a classe MeuMySQL<br />
$sql = new MeuSQL();</p>
<p>// Conecta-se ao banco de dados usando os valores padrões<br />
$sql-&gt;conecta();</p>
<p>// Define e executa uma query SQL<br />
$busca = &quot;SELECT * FROM `noticias` WHERE `id` &gt; 0 LIMIT 10&quot;;<br />
$sql-&gt;consulta($busca);</p>
<p>// Descobe e exibe o total de registros encontrados<br />
$total = $sql-&gt;registros();<br />
echo &quot;Total de registros: &quot; . $total;<br />
echo &quot;&lt;hr /&gt;&quot;;</p>
<p>// Exibe dados de cada registro<br />
while ($dados = $sql-&gt;resultado()) {<br />
	// Aqui o array $dados terá o valor de cada coluna do registro<br />
	echo &quot;- Titulo da notícia: &quot; . $dados['titulo'];<br />
	echo &quot;&lt;br /&gt;&quot;;<br />
}<br />
?&gt;<br />
[/code]</p>
<p>Viu como as classes podem simplificar tudo na sua vida?</p>
<p>Agora, por fim, fiz alguns ajustes e comentei cada método da classe para ficar mais fácil de entender:</p>
<p>[code language="php"]<br />
&lt; ?php</p>
<p>/**<br />
* MeuSQL<br />
* Classe personalizada de uso do MySQL<br />
*/<br />
class MeuSQL {<br />
	// Propriedades padrões<br />
	var $servidor = '127.0.0.1'; // Endereço<br />
	var $usuario = 'root'; // Usuário<br />
	var $senha = ''; // Senha<br />
	var $banco = 'meusite'; // Banco de dados<br />
	// Outras variáveis para uso interno<br />
	var $conexao = null;<br />
	var $query = null;</p>
<p>	/**<br />
	* Função para fazer a conexão com o MySQL<br />
	*/<br />
	function conecta() {<br />
		$this-&gt;conexao = mysql_connect($this-&gt;servidor, $this-&gt;usuario, $this-&gt;senha);<br />
		$status = mysql_select_db($this-&gt;banco, $this-&gt;conexao);<br />
		return $status;<br />
	}</p>
<p>	/**<br />
	* Função para fazer uma consulta no MySQL<br />
	*/<br />
	function consulta($query) {<br />
		$this-&gt;query = mysql_query($query);<br />
		return $this-&gt;query;<br />
	}</p>
<p>	/**<br />
	* Função para retornar cada resultado da consulta<br />
	*/<br />
	function resultado() {<br />
		return mysql_fetch_assoc($this-&gt;query);<br />
	}</p>
<p>	/**<br />
	* Função que retorna o total de resultados encontrados<br />
	*/<br />
	function registros() {<br />
		return mysql_num_rows($this-&gt;query);<br />
	}</p>
<p>}</p>
<p>?&gt;<br />
[/code]</p>
<p>Se quiser, pode fazer o <a rel="nofollow" href="http://blog.thiagobelem.net/arquivos/2009/05/classe-meusql.txt" target="_blank">download</a> do arquivo com a classe e o exemplo de uso.</p>
<p>Não falei nem 1/10 do poder da orientação a objetos, mas fique certo de que o seu uso é recomendado, e deixa o código mais seguro além de mais rápido e (pra alguns) mais bonito.</p>
<p>Espero que tenham gostado... Qualquer dúvida (e eu sei que serão muitas) podem deixar seu comentário.</p>
<p>Abraços e até a próxima! :D</p>
