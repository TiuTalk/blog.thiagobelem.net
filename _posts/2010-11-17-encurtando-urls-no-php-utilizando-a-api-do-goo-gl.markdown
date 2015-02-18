---
layout: post
title: Encurtando URLs no PHP utilizando a API do goo.gl
excerpt: Aprenda a encurtar URLs pelo PHP utilizando a classe de API do [goo.gl](http://goo.gl/),
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
Boa madrugada pra todos!

Depois de algumas horas de insônia resolvi fazer uma classe que, creio eu, vai ser útil pra algumas pessoas por ai: uma classe para encurtar URLs utilizando a API do "novo" serviço de encurtamento do <strong>Google</strong>, o [goo.gl](http://goo.gl/).
<a id="more"></a><a id="more-991"></a>

O código da classe é bem simples:


{% highlight php linenos %}
<?php

/**
 * Goo.gl API
 *
 * Classe para encurtamento de URL utilizando a API do serviço goo.gl
 *
 * @author Thiago Belem <contato@thiagobelem.net>
 * @link http://blog.thiagobelem.net/
 * @version 1.0
 */
class Googl {

  /**
   * URL da API do Goo.gl
   *
   * @var string
   */
  public static $api_url = 'http://goo.gl/api/url';

  /**
   * User usado para acessar a API do Goo.gl
   *
   * Este é o user definido pela barra do Google
   *
   * @var string
   */
  public static $user = 'toolbar@google.com';

  /**
   * Tempo limite (em segundos) para encurtar a URL
   *
   * @var integer
   */
  public static $timeout = 10;

  /**
   * Método construtor
   *
   * Verifica se existem as funções curl_init() e json_decode()
   *  utilizadas pela classe
   */
  public function __construct() {
    if (!function_exists('curl_init'))
      trigger_error('Please, enable the cURL library!');

    if (!function_exists('json_decode'))
      trigger_error('Please, enable the JSON library!');
  }

  /**
   * Faz uma requisição HTTP utilizando cURL
   *
   * @param string $url URL a ser requisitada
   * @param string $fields Campos a serem passados via POST
   * @param string $headers Headers adicionais
   *
   * @return string O HTML resultado
   */
  public function requestURL($url, $fields = '', $headers = false) {
    $curl = curl_init($url);

    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, Googl::$timeout);
        curl_setopt($curl, CURLOPT_USERAGENT, getenv('HTTP_USER_AGENT'));

    if (!empty($fields)) {
      curl_setopt($curl, CURLOPT_POST, true);
      curl_setopt($curl, CURLOPT_POSTFIELDS, $fields);
    }

    if ($headers)
      curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

    return curl_exec($curl);
  }

  /**
   * Encurta uma URL utilizando a API do Goo.gl
   *
   * @param string|array $url URL a ser encurtada ou array de URLs
   *  a serem encurtadas
   *
   * @return string|array URL encurtada ou array de URLs encurtadas
   */
  public function shorten($url) {
    // Se for um array de URLs age recursivamente
    if (is_array($url)) {
      foreach ($url AS &$u)
        $u = $this->shorten($u);

      return $url;
    }

    // Se for uma URL válida
    if (filter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_PATH_REQUIRED)) {

      // Monta a lista de parâmetros usados pela API
      $fields = array(
        'user' => Googl::$user,
        'url' => urlencode($url));

      // Converte o array de parâemtros em uma string GET
      $fields = urldecode(http_build_query($fields, '', '&'));

      // Se tudo der certo com a chamada à API...
      if ($result = $this->requestURL(Googl::$api_url, $fields)) {
        // Decodifica o resultado em jSON
        $result = json_decode($result);

        // Se recebeu alguma mensagem de erro, lança um erro
        if (isset($result->error_message))
          trigger_error('[goo.gl] ' . $result->error_message);

        // Ou retorna a URL encurtada
        else
          return $result->short_url;

      // ...caso contrário, retorna a URL original
      } else
        return $url;
    }
  }
}

?>
{% endhighlight %}

Essa classe bem simples possui dois métodos: um para fazer uma requisição HTTP utilizando a biblioteca cURL e outro para encurtar a URL (que utiliza o método de requisição).

O retorno do método <code>Googl::shorten()</code> vai ser a URL encurtada ou um array de URLs encurtadas (caso você passe um array como parâmetro).

Um ponto importante sobre essa classe é a utilização da função [filter_var()](http://www.php.net/manual/en/function.filter-var.php) para verificar se uma URL é válida antes de tentar encurtar ela... Essa é uma função muito útil para verificar o conteúdo de variáveis.

<h2>Como usar essa classe?</h2>
Veja um exemplo:


{% highlight php linenos %}
$Googl = new Googl();

$url = 'http://blog.thiagobelem.net/vida-pessoal/freelancear-ou-nao-freelancear-eis-a-questao-parte-3/';
$url_encurtada = $Googl->shorten($url);

echo "URL original: <strong>". $url ."</strong>
";
echo "URL encurtada: <strong>". $url_encurtada ."</strong>
";
echo "Diferença: <strong>". (strlen($url) - strlen($url_encurtada)) ."</strong> caracteres
";
{% endhighlight %}

Como resultado desse exemplo você teria uma URL encurtada economizando 75 caracteres!

<h3>Usando uma função pra facilitar as coisas</h3>
Você também pode criar uma função que faz o trabalho de instanciar a classe pra você!


{% highlight php linenos %}
/**
 * Encurta URLs utilizando a classe de API do goo.gl
 *
 * @param string|array $url URL a ser encurtada ou array de URLs a serem encurtadas
 *
 * @return string|array URL encurtada ou array de URLs encurtadas
 */
function googl($url) {
  $Googl = new Googl();
  return $Googl->shorten($url);
}
{% endhighlight %}

Com isso seria só usar:


{% highlight php linenos %}
googl('http://thiagobelem.net/');
{% endhighlight %}

<h3>Download do código fonte</h3>
Caso você tenha preguiça de copiar e colar, pode baixar o [arquivo com código fonte](/arquivos/googl.class.phps) dela e sair usando!

Espero que tenham gostado! :)

