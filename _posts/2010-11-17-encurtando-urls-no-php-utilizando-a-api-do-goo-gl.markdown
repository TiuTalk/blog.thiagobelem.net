---
layout: post
title: Encurtando URLs no PHP utilizando a API do goo.gl
excerpt: Aprenda a encurtar URLs pelo PHP utilizando a classe de API do <a href="http://goo.gl/">goo.gl</a>,
  o serviço de encurtamento de URLs do Google.

date: '2010-11-17 01:37:09 -0200'
categories:
- PHP
- Otimização
- Orientação a objetos
- APIs
tags:
- PHP
- Google
- Goo.gl
- API
---
<p>Boa madrugada pra todos!</p>
<p>Depois de algumas horas de insônia resolvi fazer uma classe que, creio eu, vai ser útil pra algumas pessoas por ai: uma classe para encurtar URLs utilizando a API do "novo" serviço de encurtamento do <strong>Google</strong>, o <a href="http://goo.gl/" target="_blank">goo.gl</a>.<br />
<a id="more"></a><a id="more-991"></a></p>
<p>O código da classe é bem simples:</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>/**<br />
 * Goo.gl API<br />
 *<br />
 * Classe para encurtamento de URL utilizando a API do serviço goo.gl<br />
 *<br />
 * @author Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
 * @link http://blog.thiagobelem.net/<br />
 * @version 1.0<br />
 */<br />
class Googl {</p>
<p>	/**<br />
	 * URL da API do Goo.gl<br />
	 *<br />
	 * @var string<br />
	 */<br />
	public static $api_url = 'http://goo.gl/api/url';</p>
<p>	/**<br />
	 * User usado para acessar a API do Goo.gl<br />
	 *<br />
	 * Este é o user definido pela barra do Google<br />
	 *<br />
	 * @var string<br />
	 */<br />
	public static $user = 'toolbar@google.com';</p>
<p>	/**<br />
	 * Tempo limite (em segundos) para encurtar a URL<br />
	 *<br />
	 * @var integer<br />
	 */<br />
	public static $timeout = 10;</p>
<p>	/**<br />
	 * Método construtor<br />
	 *<br />
	 * Verifica se existem as funções curl_init() e json_decode()<br />
	 *  utilizadas pela classe<br />
	 */<br />
	public function __construct() {<br />
		if (!function_exists('curl_init'))<br />
			trigger_error('Please, enable the cURL library!');</p>
<p>		if (!function_exists('json_decode'))<br />
			trigger_error('Please, enable the JSON library!');<br />
	}</p>
<p>	/**<br />
	 * Faz uma requisição HTTP utilizando cURL<br />
	 *<br />
	 * @param string $url URL a ser requisitada<br />
	 * @param string $fields Campos a serem passados via POST<br />
	 * @param string $headers Headers adicionais<br />
	 *<br />
	 * @return string O HTML resultado<br />
	 */<br />
	public function requestURL($url, $fields = '', $headers = false) {<br />
		$curl = curl_init($url);</p>
<p>		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);<br />
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);<br />
		curl_setopt($curl, CURLOPT_TIMEOUT, Googl::$timeout);<br />
        curl_setopt($curl, CURLOPT_USERAGENT, getenv('HTTP_USER_AGENT'));</p>
<p>		if (!empty($fields)) {<br />
			curl_setopt($curl, CURLOPT_POST, true);<br />
			curl_setopt($curl, CURLOPT_POSTFIELDS, $fields);<br />
		}</p>
<p>		if ($headers)<br />
			curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);</p>
<p>		return curl_exec($curl);<br />
	}</p>
<p>	/**<br />
	 * Encurta uma URL utilizando a API do Goo.gl<br />
	 *<br />
	 * @param string|array $url URL a ser encurtada ou array de URLs<br />
	 *  a serem encurtadas<br />
	 *<br />
	 * @return string|array URL encurtada ou array de URLs encurtadas<br />
	 */<br />
	public function shorten($url) {<br />
		// Se for um array de URLs age recursivamente<br />
		if (is_array($url)) {<br />
			foreach ($url AS &amp;$u)<br />
				$u = $this-&gt;shorten($u);</p>
<p>			return $url;<br />
		}</p>
<p>		// Se for uma URL válida<br />
		if (filter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_PATH_REQUIRED)) {</p>
<p>			// Monta a lista de parâmetros usados pela API<br />
			$fields = array(<br />
				'user' =&gt; Googl::$user,<br />
				'url' =&gt; urlencode($url));</p>
<p>			// Converte o array de parâemtros em uma string GET<br />
			$fields = urldecode(http_build_query($fields, '', '&amp;'));</p>
<p>			// Se tudo der certo com a chamada à API...<br />
			if ($result = $this-&gt;requestURL(Googl::$api_url, $fields)) {<br />
				// Decodifica o resultado em jSON<br />
				$result = json_decode($result);</p>
<p>				// Se recebeu alguma mensagem de erro, lança um erro<br />
				if (isset($result-&gt;error_message))<br />
					trigger_error('[goo.gl] ' . $result-&gt;error_message);</p>
<p>				// Ou retorna a URL encurtada<br />
				else<br />
					return $result-&gt;short_url;</p>
<p>			// ...caso contrário, retorna a URL original<br />
			} else<br />
				return $url;<br />
		}<br />
	}<br />
}</p>
<p>?&gt;<br />
[/code]</p>
<p>Essa classe bem simples possui dois métodos: um para fazer uma requisição HTTP utilizando a biblioteca cURL e outro para encurtar a URL (que utiliza o método de requisição).</p>
<p>O retorno do método <code>Googl::shorten()</code> vai ser a URL encurtada ou um array de URLs encurtadas (caso você passe um array como parâmetro).</p>
<p>Um ponto importante sobre essa classe é a utilização da função <a href="http://www.php.net/manual/en/function.filter-var.php">filter_var()</a> para verificar se uma URL é válida antes de tentar encurtar ela... Essa é uma função muito útil para verificar o conteúdo de variáveis.</p>
<h2>Como usar essa classe?</h2>
<p>Veja um exemplo:</p>
<p>[code language="php"]<br />
$Googl = new Googl();</p>
<p>$url = 'http://blog.thiagobelem.net/vida-pessoal/freelancear-ou-nao-freelancear-eis-a-questao-parte-3/';<br />
$url_encurtada = $Googl-&gt;shorten($url);</p>
<p>echo &quot;&lt;p&gt;URL original: &lt;strong&gt;&quot;. $url .&quot;&lt;/strong&gt;&lt;/p&gt;&quot;;<br />
echo &quot;&lt;p&gt;URL encurtada: &lt;strong&gt;&quot;. $url_encurtada .&quot;&lt;/strong&gt;&lt;/p&gt;&quot;;<br />
echo &quot;&lt;p&gt;Diferença: &lt;strong&gt;&quot;. (strlen($url) - strlen($url_encurtada)) .&quot;&lt;/strong&gt; caracteres&lt;/p&gt;&quot;;<br />
[/code]</p>
<p>Como resultado desse exemplo você teria uma URL encurtada economizando 75 caracteres!</p>
<h3>Usando uma função pra facilitar as coisas</h3>
<p>Você também pode criar uma função que faz o trabalho de instanciar a classe pra você!</p>
<p>[code language="php"]<br />
/**<br />
 * Encurta URLs utilizando a classe de API do goo.gl<br />
 *<br />
 * @param string|array $url URL a ser encurtada ou array de URLs a serem encurtadas<br />
 *<br />
 * @return string|array URL encurtada ou array de URLs encurtadas<br />
 */<br />
function googl($url) {<br />
	$Googl = new Googl();<br />
	return $Googl-&gt;shorten($url);<br />
}<br />
[/code]</p>
<p>Com isso seria só usar:</p>
<p>[code language="php" light="true"]googl('http://thiagobelem.net/');[/code]</p>
<h3>Download do código fonte</h3>
<p>Caso você tenha preguiça de copiar e colar, pode baixar o <a title="Código-fonte da classe Googl" href="http://blog.thiagobelem.net/arquivos/googl.class.phps" target="_blank">arquivo com código fonte</a> dela e sair usando!</p>
<p>Espero que tenham gostado! :)</p>
