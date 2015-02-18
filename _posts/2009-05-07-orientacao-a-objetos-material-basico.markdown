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
<p>[code language="php"]
< ?php</p>
<p>class MeuSQL {</p>
<p>}</p>
<p>?>
[/code]</p>
<p>Agora vamos definir algumas variáveis com valores padrões:</p>
<p>[code language="php"]
< ?php</p>
<p>class MeuSQL {
	// Propriedades padrões
	var $servidor = '127.0.0.1';
	var $usuario = 'root';
	var $senha = '';
	var $banco = 'meusite';
	var $conexao = null;</p>
<p>}</p>
<p>?>
[/code]</p>
<p>Na verdade, devemos chamar estas variáveis como "<strong>propriedades</strong>" (nome que se dá para as variáveis da classe). Toda propriedade de classe, para manter a compatibilidade com o PHP 4, precisa ter a palavra "<strong>var</strong>" antes.</p>
<p>Vale lembrar que, fora da classe, essas propriedades não vão existir.. Nem após você chamar a classe. Isso deixa as coisas mais seguras. :)</p>
<p>Agora vamos definir o primeiro método. "<strong>Método</strong>" é nome que se dá para uma função dentro de uma classe.</p>
<p>[code language="php"]
< ?php</p>
<p>class MeuSQL {
	// Propriedades padrões
	var $servidor = '127.0.0.1'; // Endereço
	var $usuario = 'root'; // Usuário
	var $senha = ''; // Senha
	var $banco = 'meusite'; // Banco de dados
	// Outras variáveis para uso interno:
	var $conexao = null;
	var $query = null;</p>
<p>	function conecta() {
		$this->conexao = mysql_connect($this->servidor, $this->usuario, $this->senha);
		$status = mysql_select_db($this->banco, $this->conexao);
		return $status;
	}</p>
<p>}</p>
<p>?>
[/code]</p>
<p>Criamos um método que fará a conexão com o MySQL... Quem já estudou um pouco sobre MySQL sabe que a função <strong>mysql_connect()</strong> precisa de três parâmetros, nessa ordem: o servidor (endereço), o usuário e a senha... Repare que usamos <strong><span style="color: #3366ff;">$this->servidor</span></strong> e não <span style="color: #3366ff;"><strong>$servidor</strong></span>, vou explicar por que:</p>
<p>Quando queremos pegar o valor de uma propriedade de uma classe, fazemos referência a própria classe, por isso o <strong>$this</strong>. Sem isso não é possível pegar o valor da propriedade.</p>
<p><span style="color: #ff0000;"><strong>Preste atenção:</strong></span> quando definimos variáveis dentro das funções (métodos) não é necessário usar o $this, pois, nesse caso, estamos falando de variáveis e não de propriedades. Sei que é um pouco complicado... Mas ninguém disse que POO é pra qulquer um  8-).</p>
<p>Agora vamos definir mais três métodos para as outras funções básicas do MySQL:</p>
<p>[code language="php"]
< ?php</p>
<p>class MeuSQL {
	// Propriedades padrões
	var $servidor = '127.0.0.1'; // Endereço
	var $usuario = 'root'; // Usuário
	var $senha = ''; // Senha
	var $banco = 'meusite'; // Banco de dados
	// Outras variáveis para uso interno:
	var $conexao = null;
	var $query = null;</p>
<p>	function conecta() {
		$this->conexao = mysql_connect($this->servidor, $this->usuario, $this->senha);
		$status = mysql_select_db($this->banco, $this->conexao);
		return $status;
	}</p>
<p>	function consulta($query) {
		$this->query = mysql_query($query);
		return $this->query;
	}</p>
<p>	function resultado() {
		return mysql_fetch_assoc($this->query);
	}</p>
<p>	function registros() {
		return mysql_num_rows($this->query);
	}</p>
<p>}</p>
<p>?>
[/code]</p>
<p>Podemos dizer que a nossa classe está pronta... Salve este arquivo como <span style="color: #ff6600;"><strong>MeuSQL.php</strong></span>. Agora vamos ver um exemplo de uso e depois, comentá-la toda:</p>
<p>[code language="php"]
< ?php
// Inclui o arquivo com a classe
include("MeuSQL.php");</p>
<p>// Instancia/chama a classe MeuMySQL
$sql = new MeuSQL();</p>
<p>// Conecta-se ao banco de dados usando os valores padrões
$sql->conecta();</p>
<p>// Define e executa uma query SQL
$busca = "SELECT * FROM `noticias` WHERE `id` > 0 LIMIT 10";
$sql->consulta($busca);</p>
<p>// Descobe e exibe o total de registros encontrados
$total = $sql->registros();
echo "Total de registros: " . $total;
echo "<hr />";</p>
<p>// Exibe dados de cada registro
while ($dados = $sql->resultado()) {
	// Aqui o array $dados terá o valor de cada coluna do registro
	echo "- Titulo da notícia: " . $dados['titulo'];
	echo "";
}
?>
[/code]</p>
<p>Viu como as classes podem simplificar tudo na sua vida?</p>
<p>Agora, por fim, fiz alguns ajustes e comentei cada método da classe para ficar mais fácil de entender:</p>
<p>[code language="php"]
< ?php</p>
<p>/**
* MeuSQL
* Classe personalizada de uso do MySQL
*/
class MeuSQL {
	// Propriedades padrões
	var $servidor = '127.0.0.1'; // Endereço
	var $usuario = 'root'; // Usuário
	var $senha = ''; // Senha
	var $banco = 'meusite'; // Banco de dados
	// Outras variáveis para uso interno
	var $conexao = null;
	var $query = null;</p>
<p>	/**
	* Função para fazer a conexão com o MySQL
	*/
	function conecta() {
		$this->conexao = mysql_connect($this->servidor, $this->usuario, $this->senha);
		$status = mysql_select_db($this->banco, $this->conexao);
		return $status;
	}</p>
<p>	/**
	* Função para fazer uma consulta no MySQL
	*/
	function consulta($query) {
		$this->query = mysql_query($query);
		return $this->query;
	}</p>
<p>	/**
	* Função para retornar cada resultado da consulta
	*/
	function resultado() {
		return mysql_fetch_assoc($this->query);
	}</p>
<p>	/**
	* Função que retorna o total de resultados encontrados
	*/
	function registros() {
		return mysql_num_rows($this->query);
	}</p>
<p>}</p>
<p>?>
[/code]</p>
<p>Se quiser, pode fazer o <a rel="nofollow" href="http://blog.thiagobelem.net/arquivos/2009/05/classe-meusql.txt" target="_blank">download</a> do arquivo com a classe e o exemplo de uso.</p>
<p>Não falei nem 1/10 do poder da orientação a objetos, mas fique certo de que o seu uso é recomendado, e deixa o código mais seguro além de mais rápido e (pra alguns) mais bonito.</p>
<p>Espero que tenham gostado... Qualquer dúvida (e eu sei que serão muitas) podem deixar seu comentário.</p>
<p>Abraços e até a próxima! :D</p>
