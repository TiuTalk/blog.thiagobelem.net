---
layout: post
status: publish
published: true
title: Resultados de busca do Google no seu site
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aprenda a usar a API de busca de Google para exibir os resultados no seu
  site, da forma que achar melhor.
wordpress_id: 568
wordpress_url: http://blog.thiagobelem.net/?p=568
date: '2009-07-09 18:00:55 -0300'
date_gmt: '2009-07-09 21:00:55 -0300'
categories:
- PHP
- Tutoriais
- APIs
tags:
- PHP
- Google
- API
- Busca
- Google Search API
---
<p>Hoje estava eu aqui, sem nada pra fazer, e resolvi mostrar pra vocês como é fácil usar a API de buscas do Google (<em>Google Search API</em>).</p>
<p>Fiz uma classe que vocês vão poder usar para pegar o resultado de busca do Google e exibir no seu site, na formatação que preferir.</p>
<h3>A Classe - Versão 1.1</h3>
<p>[code language="php" wraplines="false"]&lt;?php</p>
<p>/**<br />
 * API de busca do Google<br />
 *<br />
 * @author			Thiago Belem (contato@thiagobelem.net)<br />
 * @link			http://blog.thiagobelem.net/<br />
 * @version			1.1<br />
 */<br />
class googleSearchAPI {<br />
	protected $url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&amp;rsz=large&amp;start=%s&amp;q=%s';<br />
	var $resultado, $pagina, $keywords;</p>
<p>	function __construct() {<br />
		if (!function_exists('curl_init')) {<br />
			trigger_error('A biblioteca cURL não está instalada!');<br />
			return false;<br />
		}<br />
		if (!function_exists('json_decode')) {<br />
			trigger_error('A biblioteca para manipulação de JSON não está instalada!');<br />
			return false;<br />
		}<br />
	}</p>
<p>	/**<br />
	 * Pega o resultado HTTP de uma URL<br />
	 */<br />
	protected function httpRequest($url) {<br />
		$cURL = curl_init($url);<br />
		curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);<br />
		curl_setopt($cURL, CURLOPT_FOLLOWLOCATION, true);<br />
		$resultado = curl_exec($cURL);<br />
		$resposta = curl_getinfo($cURL, CURLINFO_HTTP_CODE);<br />
		curl_close($cURL);<br />
		return $resultado;<br />
	}</p>
<p>	/**<br />
	 * Executa a busca<br />
	 */<br />
	function busca($keywords = null, $pagina = 1, $site = null) {<br />
		$keywords = (is_null($keywords)) ? $this-&gt;keywords : $keywords;<br />
		$start = (is_null($pagina)) ? 0 : (($pagina - 1) * 8);</p>
<p>		$bkeywords = (!is_null($site)) ? ($keywords . ' site:' . $site) : $keywords;</p>
<p>		$url = sprintf($this-&gt;url, (int)$start, urlencode($bkeywords));<br />
		$resultado = $this-&gt;httpRequest($url);<br />
		if (!$resultado) {<br />
			trigger_error('Não foi possível acessar a URL de busca:&lt;br /&gt;' . $url);<br />
			return false;<br />
		}<br />
		$resultado = json_decode($resultado, true);</p>
<p>		$this-&gt;resultado = $resultado['responseData'];<br />
		$this-&gt;keywords = $keywords;<br />
		$this-&gt;pagina = $pagina;<br />
	}</p>
<p>	/**<br />
	 * Pega os resultados encontrados<br />
	 */<br />
	function resultadoSites() {<br />
		return $this-&gt;resultado['results'];<br />
	}</p>
<p>	/**<br />
	 * Pega o total de sites encontrados<br />
	 */<br />
	function resultadoTotal() {<br />
		return $this-&gt;resultado['cursor']['estimatedResultCount'];<br />
	}<br />
}</p>
<p>?&gt;[/code]</p>
<p></p>
<h3>Exemplo de Uso</h3>
<p>[code language="php"]&lt;?php</p>
<p>$keywords = 'Thiago Belem';<br />
$pagina = (isset($_GET['p'])) ? (int)$_GET['p'] : 1;</p>
<p>$gs = new googleSearchAPI();<br />
//$gs-&gt;busca($keywords, $pagina); // Busca normal<br />
$gs-&gt;busca($keywords, $pagina, 'thiagobelem.net'); // Busca em um site específico</p>
<p>$total = $gs-&gt;resultadoTotal();</p>
<p>echo &quot;Total estimado de resultados: &quot; . $total;<br />
echo &quot;&lt;br /&gt;&quot;;<br />
echo &quot;&lt;h2&gt;Pagina: &quot; . $gs-&gt;pagina . &quot;&lt;/h2&gt;&quot;;</p>
<p>foreach ($gs-&gt;resultadoSites() as $item) {<br />
	echo &quot;&lt;h3&gt;&quot; . $item['title'] . &quot;&lt;/h3&gt;&quot;;<br />
	echo &quot;&lt;p&gt;&quot; . $item['content'] . &quot;&lt;/p&gt;&quot;;<br />
	echo '&lt;a href=&quot;' . $item['unescapedUrl'] . '&quot;&gt;' . $item['visibleUrl'] . &quot;&lt;/a&gt;&quot;;<br />
}</p>
<p>echo &quot;&lt;hr /&gt;&quot;;</p>
<p>// Paginadores:</p>
<p>if (($pagina - 5) &gt; 1) echo '...&amp;nbsp;';</p>
<p>for ($n = 1; $n &lt;= ceil($total / 8); $n++) {<br />
	if (($n &lt; ($pagina - 5)) OR ($n &gt; ($pagina + 5))) continue;<br />
	echo '&lt;a href=&quot;?q='.$keywords.'&amp;p='.$n.'&quot;&gt;'.$n.'&lt;/a&gt;&amp;nbsp;';<br />
}</p>
<p>if (($pagina + 5) &lt; $total) echo '...';</p>
<p>?&gt;[/code]</p>
<p>--</p>
<p>Infelizmente essa API de busca do Google só retorna 8 resultados por vez (uma limitação do Google mesmo)... mas você tem acesso a todas as páginas que precisar.. É só mudar o valor da variável <strong>$pagina</strong> (do exemplo).</p>
<p><strong style="background: black; color: white">[15.07.09] Atualização:</strong> Atualizei pra v1.1: Busca em um site específico</p>
<p>Espero que tenham gostado! ;)</p>
