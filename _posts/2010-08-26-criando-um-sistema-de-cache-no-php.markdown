---
layout: post
title: Criando um sistema de cache no PHP
excerpt: Técnicas de cache fazem com que seu site fique até 80% mais rápido e são
  vitais para que seu site "aguente o tranco" quando receber muitas visitas de uma
  vez.

date: '2010-08-26 17:42:50 -0300'
categories:
- PHP
- Tutoriais
- Otimização
- Orientação a objetos
tags:
- PHP
- Cache
---
<p>"Cache" é uma forma de armazenar um valor para um consulta futura mais rápida. Com o cache conseguimos otimizar o carregamento dos sites e de suas informações.</p>
<p>Suponhamos que você tenha um site que faça uma consulta em um tabela do banco de dados que possua 3.000.000 registros e essa consulta demore mais de 30 segundos (acredite, isso acontece). Com o cache você pode reduzir esse tempo em alguns segundos.</p>
<p>Cachear uma informação significa salvá-la em algum lugar (seja em um arquivo ou diretamente na memória RAM do servidor) para depois poder consultar essa informação sem ter que obtê-la da forma mais demorada (no exemplo a cima, com a consulta ao banco de dados).</p>
<p>Vamos criar aqui uma classe que servirá para armazenar qualquer tipo de texto, variável, número inteiro, resultado SQL e etc.</p>
<p>Para começar, começamos criando uma classe vazia:</p>
<p>[code language="php"]<br />
<?php</p>
<p>/**<br />
 * Sistema de cache<br />
 *<br />
 * @author Thiago Belem <contato@thiagobelem.net><br />
 * @link http://blog.thiagobelem.net/<br />
 */<br />
class Cache {</p>
<p>}</p>
<p>?><br />
[/code]</p>
<p>Agora vamos adicionar alguns atributos que serão usados pelo sistema de cache:</p>
<p>[code language="php"]<br />
	/**<br />
	 * Tempo padrão de cache<br />
	 *<br />
	 * @var string<br />
	 */<br />
	private static $time = '5 minutes';</p>
<p>	/**<br />
	 * Local onde o cache será salvo<br />
	 *<br />
	 * Definido pelo construtor<br />
	 *<br />
	 * @var string<br />
	 */<br />
	private $folder;<br />
[/code]</p>
<p>O atributo <code>$time</code> define por quanto tempo as informações ficarão salvas no cache, tempo esse que poderá ser mudado para cada valor salvo (veremos mais a diante).</p>
<p>Agora vamos criar um método chamado <code>setFolder()</code> que servirá para definir o local onde os arquivos de cache serão salvos:</p>
<p>[code language="php"]<br />
	/**<br />
	 * Define onde os arquivos de cache serão salvos<br />
	 *<br />
	 * Irá verificar se a pasta existe e pode ser escrita, caso contrário<br />
	 * uma mensagem de erro será exibida<br />
	 *<br />
	 * @param string $folder Local para salvar os arquivos de cache (opcional)<br />
	 *<br />
	 * @return void<br />
	 */<br />
	protected function setFolder($folder) {<br />
		// Se a pasta existir, for uma pasta e puder ser escrita<br />
		if (file_exists($folder) && is_dir($folder) && is_writable($folder)) {<br />
			$this->folder = $folder;<br />
		} else {<br />
			trigger_error('Não foi possível acessar a pasta de cache', E_USER_ERROR);<br />
		}<br />
	}<br />
[/code]</p>
<p>Esse método recebe o caminho (pasta) onde os arquivos serão criados e, após verificar se o caminho existe, é um diretório e pode ser manipulado, ele define um atributo com o caminho passado. Caso ele não consiga localizar a pasta ou não seja possível escrever nela, um erro será gerado.</p>
<p>Com esse método criado, podemos criar um construtor para essa classe com o seguinte código:</p>
<p>[code language="php"]<br />
	/**<br />
	 * Construtor<br />
	 *<br />
	 * Inicializa a classe e permite a definição de onde os arquivos<br />
	 * serão salvos. Se o parâmetro $folder for ignorado o local dos<br />
	 * arquivos temporários do sistema operacional será usado<br />
	 *<br />
	 * @uses Cache::setFolder() Para definir o local dos arquivos de cache<br />
	 *<br />
	 * @param string $folder Local para salvar os arquivos de cache (opcional)<br />
	 *<br />
	 * @return void<br />
	 */<br />
	public function __construct($folder = null) {<br />
		$this->setFolder(!is_null($folder) ? $folder : sys_get_temp_dir());<br />
	}<br />
[/code]</p>
<p>O construtor será chamado sempre que instanciarmos a classe Cache e, como você pode ver, ele recebe um parâmetro (opcional) onde podemos definir o local onde os arquivos serão criados... Se não passarmos nenhum parâmetro para ele o mesmo irá usar o local de arquivos temporários definido pelo seu sistema operacional.</p>
<p>Agora que já conseguimos definir o local onde os caches serão salvos, vamos criar o método que irá gerar o nome dos arquivos de cache:</p>
<p>[code language="php"]<br />
	/**<br />
	 * Gera o local do arquivo de cache baseado na chave passada<br />
	 *<br />
	 * @param string $key Uma chave para identificar o arquivo<br />
	 *<br />
	 * @return string Local do arquivo de cache<br />
	 */<br />
	protected function generateFileLocation($key) {<br />
		return $this->folder . DIRECTORY_SEPARATOR . sha1($key) . '.tmp';<br />
	}<br />
[/code]</p>
<p>E o método que irá criar o arquivo de cache propriamente dito:</p>
<p>[code language="php"]<br />
	/**<br />
	 * Cria um arquivo de cache<br />
	 *<br />
	 * @uses Cache::generateFileLocation() para gerar o local do arquivo de cache<br />
	 *<br />
	 * @param string $key Uma chave para identificar o arquivo<br />
	 * @param string $content Conteúdo do arquivo de cache<br />
	 *<br />
	 * @return boolean Se o arquivo foi criado<br />
	 */<br />
	protected function createCacheFile($key, $content) {<br />
		// Gera o nome do arquivo<br />
		$filename = $this->generateFileLocation($key);</p>
<p>		// Cria o arquivo com o conteúdo<br />
		return file_put_contents($filename, $content)<br />
			OR trigger_error('Não foi possível criar o arquivo de cache', E_USER_ERROR);<br />
	}<br />
[/code]</p>
<p>O nosso sistema está quase pronto.. Já podemos criar arquivos de cache na pasta de cache, precisamos então criar dois métodos: um para salvar um valor no cache (seja ele uma string, número, resultado SQL e etc.) e outro pra ler esse valor do cache.</p>
<p>Primeiro o método que salva um valor no cache:</p>
<p>[code language="php"]<br />
	/**<br />
	 * Salva um valor no cache<br />
	 *<br />
	 * @uses Cache::createCacheFile() para criar o arquivo com o cache<br />
	 *<br />
	 * @param string $key Uma chave para identificar o valor cacheado<br />
	 * @param mixed $content Conteúdo/variável a ser salvo(a) no cache<br />
	 * @param string $time Quanto tempo até o cache expirar (opcional)<br />
	 *<br />
	 * @return boolean Se o cache foi salvo<br />
	 */<br />
	public function save($key, $content, $time = null) {<br />
		$time = strtotime(!is_null($time) ? $time : self::$time);</p>
<p>		$content = serialize(array(<br />
			'expires' => $time,<br />
			'content' => $content));</p>
<p>		return $this->createCacheFile($key, $content);<br />
	}<br />
[/code]</p>
<p>E agora o método para ler esse valor do cache:</p>
<p>[code language="php"]<br />
	/**<br />
	 * Salva um valor do cache<br />
	 *<br />
	 * @uses Cache::generateFileLocation() para gerar o local do arquivo de cache<br />
	 *<br />
	 * @param string $key Uma chave para identificar o valor cacheado<br />
	 *<br />
	 * @return mixed Se o cache foi encontrado retorna o seu valor, caso contrário retorna NULL<br />
	 */<br />
	public function read($key) {<br />
		$filename = $this->generateFileLocation($key);<br />
		if (file_exists($filename) && is_readable($filename)) {<br />
			$cache = unserialize(file_get_contents($filename));<br />
			if ($cache['expires'] > time()) {<br />
				return $cache['content'];<br />
			} else {<br />
				unlink($filename);<br />
			}<br />
		}<br />
		return null;<br />
	}<br />
[/code]</p>
<p>Se você reparar, esse último método irá excluir o arquivo de cache caso ele tenha expirado.</p>
<h3>Usando o sistema de cache</h3>
<p>Veja um exemplo de uso do sistema de cache onde primeiro verificamos se há um valor armazenado no cache e, se não houver, geramos o valor novamente e salvamos ele no cache para futuras verificações:</p>
<p>[code language="php"]<br />
// Verifica se a frase já está no cache<br />
$cache = new Cache();<br />
$frase = $cache->read('frase-dia');<br />
// Se não houver frase no cache ou já tiver expirado<br />
if (!$frase) {<br />
	// Cria uma nova frase e salva-a no cache por 30s<br />
	$frase = 'CALMA! O sábio jamais se aborrece ('. date('H:i:s') .')';<br />
	$cache->save('frase-dia', $frase, '30 seconds');<br />
}<br />
echo "<p>{$frase}</p>";<br />
[/code]</p>
<p>Veja o código-fonte completo da classe: <a href="http://pastebin.com/p4m0CpwH">http://pastebin.com/p4m0CpwH</a></p>
<p>Um grande abraço e até a próxima! :)</p>
