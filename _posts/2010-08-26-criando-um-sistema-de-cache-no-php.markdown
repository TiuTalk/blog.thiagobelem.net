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
"Cache" é uma forma de armazenar um valor para um consulta futura mais rápida. Com o cache conseguimos otimizar o carregamento dos sites e de suas informações.

Suponhamos que você tenha um site que faça uma consulta em um tabela do banco de dados que possua 3.000.000 registros e essa consulta demore mais de 30 segundos (acredite, isso acontece). Com o cache você pode reduzir esse tempo em alguns segundos.

Cachear uma informação significa salvá-la em algum lugar (seja em um arquivo ou diretamente na memória RAM do servidor) para depois poder consultar essa informação sem ter que obtê-la da forma mais demorada (no exemplo a cima, com a consulta ao banco de dados).

Vamos criar aqui uma classe que servirá para armazenar qualquer tipo de texto, variável, número inteiro, resultado SQL e etc.

Para começar, começamos criando uma classe vazia:


[code language="php"]
<?php

/**
 * Sistema de cache
 *
 * @author Thiago Belem <contato@thiagobelem.net>
 * @link http://blog.thiagobelem.net/
 */
class Cache {

}

?>
[/code]

Agora vamos adicionar alguns atributos que serão usados pelo sistema de cache:


[code language="php"]
	/**
	 * Tempo padrão de cache
	 *
	 * @var string
	 */
	private static $time = '5 minutes';

	/**
	 * Local onde o cache será salvo
	 *
	 * Definido pelo construtor
	 *
	 * @var string
	 */
	private $folder;
[/code]

O atributo <code>$time</code> define por quanto tempo as informações ficarão salvas no cache, tempo esse que poderá ser mudado para cada valor salvo (veremos mais a diante).

Agora vamos criar um método chamado <code>setFolder()</code> que servirá para definir o local onde os arquivos de cache serão salvos:


[code language="php"]
	/**
	 * Define onde os arquivos de cache serão salvos
	 *
	 * Irá verificar se a pasta existe e pode ser escrita, caso contrário
	 * uma mensagem de erro será exibida
	 *
	 * @param string $folder Local para salvar os arquivos de cache (opcional)
	 *
	 * @return void
	 */
	protected function setFolder($folder) {
		// Se a pasta existir, for uma pasta e puder ser escrita
		if (file_exists($folder) && is_dir($folder) && is_writable($folder)) {
			$this->folder = $folder;
		} else {
			trigger_error('Não foi possível acessar a pasta de cache', E_USER_ERROR);
		}
	}
[/code]

Esse método recebe o caminho (pasta) onde os arquivos serão criados e, após verificar se o caminho existe, é um diretório e pode ser manipulado, ele define um atributo com o caminho passado. Caso ele não consiga localizar a pasta ou não seja possível escrever nela, um erro será gerado.

Com esse método criado, podemos criar um construtor para essa classe com o seguinte código:


[code language="php"]
	/**
	 * Construtor
	 *
	 * Inicializa a classe e permite a definição de onde os arquivos
	 * serão salvos. Se o parâmetro $folder for ignorado o local dos
	 * arquivos temporários do sistema operacional será usado
	 *
	 * @uses Cache::setFolder() Para definir o local dos arquivos de cache
	 *
	 * @param string $folder Local para salvar os arquivos de cache (opcional)
	 *
	 * @return void
	 */
	public function __construct($folder = null) {
		$this->setFolder(!is_null($folder) ? $folder : sys_get_temp_dir());
	}
[/code]

O construtor será chamado sempre que instanciarmos a classe Cache e, como você pode ver, ele recebe um parâmetro (opcional) onde podemos definir o local onde os arquivos serão criados... Se não passarmos nenhum parâmetro para ele o mesmo irá usar o local de arquivos temporários definido pelo seu sistema operacional.

Agora que já conseguimos definir o local onde os caches serão salvos, vamos criar o método que irá gerar o nome dos arquivos de cache:


[code language="php"]
	/**
	 * Gera o local do arquivo de cache baseado na chave passada
	 *
	 * @param string $key Uma chave para identificar o arquivo
	 *
	 * @return string Local do arquivo de cache
	 */
	protected function generateFileLocation($key) {
		return $this->folder . DIRECTORY_SEPARATOR . sha1($key) . '.tmp';
	}
[/code]

E o método que irá criar o arquivo de cache propriamente dito:


[code language="php"]
	/**
	 * Cria um arquivo de cache
	 *
	 * @uses Cache::generateFileLocation() para gerar o local do arquivo de cache
	 *
	 * @param string $key Uma chave para identificar o arquivo
	 * @param string $content Conteúdo do arquivo de cache
	 *
	 * @return boolean Se o arquivo foi criado
	 */
	protected function createCacheFile($key, $content) {
		// Gera o nome do arquivo
		$filename = $this->generateFileLocation($key);

		// Cria o arquivo com o conteúdo
		return file_put_contents($filename, $content)
			OR trigger_error('Não foi possível criar o arquivo de cache', E_USER_ERROR);
	}
[/code]

O nosso sistema está quase pronto.. Já podemos criar arquivos de cache na pasta de cache, precisamos então criar dois métodos: um para salvar um valor no cache (seja ele uma string, número, resultado SQL e etc.) e outro pra ler esse valor do cache.

Primeiro o método que salva um valor no cache:


[code language="php"]
	/**
	 * Salva um valor no cache
	 *
	 * @uses Cache::createCacheFile() para criar o arquivo com o cache
	 *
	 * @param string $key Uma chave para identificar o valor cacheado
	 * @param mixed $content Conteúdo/variável a ser salvo(a) no cache
	 * @param string $time Quanto tempo até o cache expirar (opcional)
	 *
	 * @return boolean Se o cache foi salvo
	 */
	public function save($key, $content, $time = null) {
		$time = strtotime(!is_null($time) ? $time : self::$time);

		$content = serialize(array(
			'expires' => $time,
			'content' => $content));

		return $this->createCacheFile($key, $content);
	}
[/code]

E agora o método para ler esse valor do cache:


[code language="php"]
	/**
	 * Salva um valor do cache
	 *
	 * @uses Cache::generateFileLocation() para gerar o local do arquivo de cache
	 *
	 * @param string $key Uma chave para identificar o valor cacheado
	 *
	 * @return mixed Se o cache foi encontrado retorna o seu valor, caso contrário retorna NULL
	 */
	public function read($key) {
		$filename = $this->generateFileLocation($key);
		if (file_exists($filename) && is_readable($filename)) {
			$cache = unserialize(file_get_contents($filename));
			if ($cache['expires'] > time()) {
				return $cache['content'];
			} else {
				unlink($filename);
			}
		}
		return null;
	}
[/code]

Se você reparar, esse último método irá excluir o arquivo de cache caso ele tenha expirado.

<h3>Usando o sistema de cache</h3>
Veja um exemplo de uso do sistema de cache onde primeiro verificamos se há um valor armazenado no cache e, se não houver, geramos o valor novamente e salvamos ele no cache para futuras verificações:


[code language="php"]
// Verifica se a frase já está no cache
$cache = new Cache();
$frase = $cache->read('frase-dia');
// Se não houver frase no cache ou já tiver expirado
if (!$frase) {
	// Cria uma nova frase e salva-a no cache por 30s
	$frase = 'CALMA! O sábio jamais se aborrece ('. date('H:i:s') .')';
	$cache->save('frase-dia', $frase, '30 seconds');
}
echo "{$frase}
";
[/code]

Veja o código-fonte completo da classe: <a href="http://pastebin.com/p4m0CpwH">http://pastebin.com/p4m0CpwH</a>

Um grande abraço e até a próxima! :)

