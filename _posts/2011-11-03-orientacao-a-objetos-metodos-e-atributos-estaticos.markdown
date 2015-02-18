---
layout: post
title: Orientação à Objetos - Métodos e atributos estáticos
excerpt: Veja o passo a passo da evolução de uma "classe" (que parecia mais código
  estruturado) para utilizar recursos da orientação à objetos, reutilização de código,
  métodos e atributos estáticos... Baseado em fatos reais!

date: '2011-11-03 21:33:03 -0200'
categories:
- PHP
- Artigos
- Otimização
- Orientação a objetos
tags: []
---
<p>Hoje na faculdade estava vendo o código de um colega que está aprendendo PHP e comecei a discutir com ele algumas melhorias, o resultado final foi tão satisfatório e diferente do original que resolvi criar um post pra mostrar como o código evoluiu.</p>
<h3>O código original - Orientado à objetos ou PHP estruturado?</h3>
<p>O código original já estava dentro de uma classe, mas não faria diferença nenhuma se fosse PHP estruturado... não lembro exatamente o nome dos métodos/variáveis, mas o restante está igualzinho:</p>
<p>[code language="php"]class cFileType {</p>
<p>	function fImage($type) {<br />
		switch($type) {<br />
			case 'jpg':<br />
			$bool = true;<br />
			break;<br />
			case 'png':<br />
			$bool = true;<br />
			break;<br />
			case 'gif':<br />
			$bool = true;<br />
			break;<br />
			default:<br />
			$bool = false;<br />
			break;<br />
		}<br />
		return $bool;<br />
	}</p>
<p>}<br />
[/code]</p>
<p>A primeira mudança foi trocar esse switch, que não está fazendo nada além de definir o valor da variável $bool como true ou false se o $type for um dos valores válidos (jpg, png ou gif)... Nada melhor então do que usar a função <a href="http://php.net/manual/en/function.in-array.php">in_array()</a>:</p>
<p>[code language="php"]<br />
class cFileType {</p>
<p>	function fImage($type) {<br />
		return in_array($type, array('jpg', 'png', 'gif'));<br />
	}</p>
<p>}<br />
[/code]</p>
<p>WOW! Reduzimos de 21 para 7 linhas... mas ainda assim, se fosse estruturado não teria diferença nenhuma.</p>
<p>Meu amigo me disse que essa classe seria para verificar os tipos de arquivos (extensões), por exemplo "se é uma imagem" ou "se é um doc"... Então criamos outro método para verificar DOCs:</p>
<p>[code language="php"]class cFileType {</p>
<p>	function fImage($type) {<br />
		return in_array($type, array('jpg', 'png', 'gif'));<br />
	}</p>
<p>	function fDoc($type) {<br />
		return in_array($type, array('doc', 'docx'));<br />
	}</p>
<p>}[/code]</p>
<h3>Atributos, melhor tê-los</h3>
<p>O código está melhorando, mas ainda assim tem algo errado... não é responsabilidade dos métodos <code>fImage</code> e <code>fDoc</code> saber a lista de extensões válidas... isso não deveria pertencer à classe como um todo e poder ser reutilizado?</p>
<p>[code language="php"]class cFileType {</p>
<p>	public $image = array('jpg', 'png', 'gif');</p>
<p>	public $doc = array('doc', 'docx');</p>
<p>	function fImage($type) {<br />
		return in_array($type, $this-&gt;image);<br />
	}</p>
<p>	function fDoc($type) {<br />
		return in_array($type, $this-&gt;doc);<br />
	}</p>
<p>}[/code]</p>
<h3>Atributos e métodos estáticos</h3>
<p>Agora sim está parecendo uma classe normal, com atributos e métodos... Aí percebi que de orientada à OBJETOS essa classe não tem nada! Não estamos trabalhando com objetos.. O uso atual dessa classe seria assim:</p>
<p>[code language="php"]$cFileType = new cFileType();<br />
if ($cFileType-&gt;fImage('jpg')) {<br />
	// É uma imagem válida<br />
}[/code]</p>
<p>Eu não trabalho o objeto <code>$cFileType</code>, apenas instancio e utilizo um único modo... então vamos economizar um pouco de memória, transformando os métodos em métodos estáticos:</p>
<p>[code language="php"]class cFileType {</p>
<p>	public static $image = array('jpg', 'png', 'gif');</p>
<p>	public static $doc = array('doc', 'docx');</p>
<p>	static function fImage($type) {<br />
		return in_array($type, self::$image);<br />
	}</p>
<p>	static function fDoc($type) {<br />
		return in_array($type, self::$doc);<br />
	}</p>
<p>}[/code]</p>
<p>E agora a utilização ficou um pouco mais simples:</p>
<p>[code language="php"]if (cFileType::fImage('jpg')) {<br />
	// É uma imagem válida<br />
}[/code]</p>
<p>Sendo que você ainda pode usar o <code>cFileType::image</code> (pra ter uma lista de imagens válidas) em qualquer parte da sua aplicação sem instanciar a classe.</p>
<h3>Reutilização de código</h3>
<p>Segundo a abordagem <a href="http://pt.wikipedia.org/wiki/Don't_repeat_yourself">DRY</a>, não devemos nos repetir... Por isso aquele <code>in_array()</code> começou a me incomodar... Vai que você está verificando 30 tipos diferentes de arquivos, todos os métodos fazendo exatamente a mesma coisa... mas aí você decide mudar o in_array() pra algo mais eficiente ou aceitar até o caminho absoluto de um arquivo... vai mudar em 30 métodos na mão?</p>
<p>A responsabilidade de verificar se o valor <code>$type</code> tá dentro de uma "lista" válida não é dos métodos <code>fImage</code> e <code>fDoc</code>.. então vamos delegar:</p>
<p>[code language="php"]class cFileType {</p>
<p>	public static $image = array('jpg', 'png', 'gif');</p>
<p>	public static $doc = array('doc', 'docx');</p>
<p>	static function fType($type, $list) {<br />
		return in_array($type, $list);<br />
	}</p>
<p>	static function fImage($type) {<br />
		return self::fType($type, self::$image);<br />
	}</p>
<p>	static function fDoc($type) {<br />
		return self::fType($type, self::$doc);<br />
	}</p>
<p>}[/code]</p>
<p>Agora se precisarmos mudar essa lógica de verificar se o <code>$type</code> tá dentro de uma "lista" válida, só vamos precisar mudar em um lugar só.</p>
<h3>cFileType? fType? fImage? O resultado final</h3>
<p>Temos que concordar que os nomes de classe e métodos escolhidos pelo meu amigo não são os mais intuitos... Então como uma modificação final, sugiro a seguinte classe devidamente renomeada:</p>
<p>[code language="php"]class FileType {</p>
<p>	public static $image = array('jpg', 'png', 'gif');</p>
<p>	public static $doc = array('doc', 'docx');</p>
<p>	public static function isTypeInList($type, $list) {<br />
		return in_array($type, $list);<br />
	}</p>
<p>	public static function isImage($type) {<br />
		return self::isTypeInList($type, self::$image);<br />
	}</p>
<p>	public static function isDoc($type) {<br />
		return self::isTypeInList($type, self::$doc);<br />
	}</p>
<p>}[/code]</p>
<p>Com uma utilização bem simples e intuitiva: </p>
<p>[code language="php"]if (FileType::isImage('jpg')) {<br />
	// É uma imagem válida<br />
}[/code]</p>
<p>Espero que tenham gostado! :)</p>
<p>Pra quem quiser ver o código completo da classe final, com os métodos comentados: <a href="https://gist.github.com/1338259">https://gist.github.com/1338259</a></p>
