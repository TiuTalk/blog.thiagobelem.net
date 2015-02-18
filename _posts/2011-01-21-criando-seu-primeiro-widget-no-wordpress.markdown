---
layout: post
status: publish
published: true
title: Criando seu primeiro widget no WordPress
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aprenda a criar widgets no WordPress utilizando classes de forma fácil e
  organizada. Veja um exemplo real de widget que exibe informações sobre o autor do
  post de forma automática.
wordpress_id: 1370
wordpress_url: http://blog.thiagobelem.net/?p=1370
date: '2011-01-21 01:44:46 -0200'
date_gmt: '2011-01-21 03:44:46 -0200'
categories:
- PHP
- WordPress
- Artigos
- Orientação a objetos
tags:
- PHP
- WordPress
- Widget
---
<p>Fala minha gente!! Trago até vocês mais um artigo sobre desenvolvimento, dessa sobre <strong>WordPress</strong>! (Atendendo o pedido do <a href="https://twitter.com/PhelippdeAvila" target="_blank">Phelipp de Avila</a>, que me segue no Twitter)</p>
<p>Segundo a <a href="http://codex.wordpress.org/Widgets_API" target="_blank">documentação oficial sobre widgets do WordPress</a> você deve criar Widgets utilizando um modelo de classe definido por eles, que é o que vou ensinar no artigo de hoje.</p>
<p>Nesse exemplo, iremos criar um <strong>widget de "Sobre o autor"</strong>, que pode ser inserido no sidebar geral do blog (ou num sidebar específico para posts)... Esse widget irá verificar se estamos em um post (que o WordPress chama de <em>single</em>), e caso estejamos, irá exibir o <strong>nome</strong>, o <strong>avatar</strong> e a <strong>descrição</strong> do autor do post, todos esses dados vindos diretamente do banco de dados do WordPress.</p>
<h3>A preparação</h3>
<p>Antes de tudo, você vai precisar separar seu widget em três métodos dentro de uma classe:</p>
<ul>
<li>Um método para gerar e exibir o HTML que aparecerá na lateral do seu blog/site</li>
<li>Um método que será usado para gerar e exibir o HTML do formulário que aparecerá no painel de controle do blog/site</li>
<li>Um método que será usado para salvar os dados vindos desse formulário</li>
</ul>
<p>Sabendo disso.. vamos começar a nossa classe:</p>
<p>[code language="php"]<br />
&lt;?php</p>
<p>/**<br />
 * Widget de Sobre o Autor<br />
 *<br />
 * @author Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
 * @link http://blog.thiagobelem.net/criando-seu-primeiro-widget-no-wordpress/<br />
 */<br />
class SobreAutorWidget extends WP_Widget {</p>
<p>}</p>
<p>?&gt;<br />
[/code]</p>
<p>Lembrando que a sua classe DEVE estender a classe <strong>WP_Widget</strong>, do próprio WordPress.</p>
<p>Agora vamos inserir quatro métodos vazios para deixar a estrutura da classe pronta:</p>
<p>[code language="php" firstline="11"]<br />
	/**<br />
	 * Construtor<br />
	 */<br />
	public function SobreAutorWidget() { parent::WP_Widget(false, $name = 'Sobre o autor'); }</p>
<p>	/**<br />
	 * Exibição final do Widget (já no sidebar)<br />
	 *<br />
	 * @param array $argumentos Argumentos passados para o widget<br />
	 * @param array $instancia Instância do widget<br />
	 */<br />
	public function widget($argumentos, $instancia) {</p>
<p>	}</p>
<p>	/**<br />
	 * Salva os dados do widget no banco de dados<br />
	 *<br />
	 * @param array $nova_instancia Os novos dados do widget (a serem salvos)<br />
	 * @param array $instancia_antiga Os dados antigos do widget<br />
	 */<br />
	public function update($nova_instancia, $instancia_antiga) {			</p>
<p>	}</p>
<p>	/**<br />
	 * Formulário para os dados do widget (exibido no painel de controle)<br />
	 *<br />
	 * @param array $instancia Instância do widget<br />
	 */<br />
	public function form($instancia) {	</p>
<p>	}<br />
[/code]</p>
<h3>Método form()</h3>
<p>Agora vamos começar pelo método form(), que exibe o formulário... Esse widget não precisaria de formulário e opções pois ele não tem nenhum tipo de configuração, mas vamos deixar uma coisa opcional como exibir o link do site do autor.</p>
<p>O nosso método form() ficará da seguinte forma:</p>
<p>[code language="php" firstline="38"]<br />
	/**<br />
	 * Formulário para os dados do widget (exibido no painel de controle)<br />
	 *<br />
	 * @param array $instancia Instância do widget<br />
	 */<br />
	public function form($instancia) {<br />
		$widget['link_autor'] = (boolean)$instancia['link_autor'];<br />
		?&gt;<br />
		&lt;p&gt;&lt;label for=&quot;&lt;?php echo $this-&gt;get_field_id('link_autor'); ?&gt;&quot;&gt;&lt;input id=&quot;&lt;?php echo $this-&gt;get_field_id('link_autor'); ?&gt;&quot; name=&quot;&lt;?php echo $this-&gt;get_field_name('link_autor'); ?&gt;&quot; type=&quot;checkbox&quot; value=&quot;1&quot; &lt;?php if ($widget['link_autor']) echo 'checked=&quot;checked&quot;'; ?&gt; /&gt; &lt;?php _e('Exibe o link do autor'); ?&gt;&lt;/label&gt;&lt;/p&gt;<br />
		&lt;?php<br />
	}[/code]</p>
<p>Eu sei que parece complicado, mas estamos apenas criando um parágrafo com um checkbox e um label... Para definir o ID e o name do input utilizamos recursos do próprio WordPress, assim não caímos no problema de usar um name que já exista... O resultado é um checkbox onde você pode decidir se exibe ou não o link do autor no widget.</p>
<p>Logo no começo do método pegamos uma informação da instância atual do widget, assim caso estejamos editando um widget, saberemos a opção salva no banco de dados.</p>
<h3>Método update()</h3>
<p>Agora vamos partir para o método update(), que salva os dados e configurações do widget (nesse caso, apenas o checkbox) no banco de dados.</p>
<p>Esse método precisará retornar os dados a serem salvos no banco de dados, ficando assim:</p>
<p>[code language="php" firstline="28"]<br />
	/**<br />
	 * Salva os dados do widget no banco de dados<br />
	 *<br />
	 * @param array $nova_instancia Os novos dados do widget (a serem salvos)<br />
	 * @param array $instancia_antiga Os dados antigos do widget<br />
	 *<br />
	 * @return array $instancia Dados atualizados a serem salvos no banco de dados<br />
	 */<br />
	public function update($nova_instancia, $instancia_antiga) {<br />
		$instancia = array_merge($instancia_antiga, $nova_instancia);</p>
<p>		return $instancia;<br />
	}[/code]</p>
<p>Mais uma vez, não tem mistério: sobrescrevemos os valores de <code>$instancia_antiga</code> (o que estava salvo no banco de dados) com os valores de <code>$nova_instancia</code> e retornamos esses dados "mesclados" para serem salvos no banco de dados.</p>
<p>E pra finalizar, o método mais importante...</p>
<h3>Método widget()</h3>
<p>Esse método será responsável por mostrar os dados (HTML) do widget na lateral do seu blog... Vamos fazê-lo passo-a-passo:</p>
<p>Esse widget irá funcionar apenas nas páginas de post... então precisamos evitar que ele seja exibido nas outras páginas, dessa forma:</p>
<p>[code language="php" firstline="24"]<br />
	public function widget($argumentos, $instancia) {<br />
		if (!is_single()) return;<br />
	}<br />
[/code]</p>
<p>Agora vamos trazer alguns dados sobre o autor:</p>
<p>[code language="php" firstline="27"]<br />
		$autor = array(<br />
			'nome' =&gt; get_the_author_meta('display_name'),<br />
			'email' =&gt; get_the_author_meta('user_email'),<br />
			'descricao' =&gt; get_the_author_meta('description'),<br />
			'link' =&gt; get_the_author_meta('user_url')<br />
		);<br />
[/code]</p>
<p>Feito isso é só começar a exibir o HTML do Widget:<br />
[code language="php" firstline="34"]<br />
		// Exibe o HTML do Widget<br />
		echo $argumentos['before_widget'];<br />
		echo $argumentos['before_title'] . $argumentos['widget_name'] . $argumentos['after_title'];<br />
		echo get_avatar($autor['email'], $size = '59');<br />
		echo &quot;&lt;h4&gt;{$autor['nome']}&lt;/h4&gt;&quot;;<br />
		echo &quot;&lt;p&gt;{$autor['descricao']}&lt;/p&gt;&quot;;<br />
		if (isset($instancia['link_autor']) &amp;&amp; $instancia['link_autor']) {<br />
			echo '&lt;p&gt;Visite o &lt;a href=&quot;'. $autor['link'] .'&quot; title=&quot;'. $autor['nome'] .'&quot; rel=&quot;nofollow&quot; target=&quot;_blank&quot;&gt;site do autor&lt;/a&gt;&lt;/p&gt;';<br />
		}<br />
		echo $argumentos['after_widget'];<br />
[/code]</p>
<p>E o nosso widget está pronto!</p>
<p>Agora você precisa de apenas uma linha para habilitá-lo no seu painel de controle:<br />
[code language="php"]<br />
add_action('widgets_init', create_function('', 'return register_widget(&quot;SobreAutorWidget&quot;);'));<br />
[/code]</p>
<p>[caption id="attachment_1389" align="aligncenter" width="263" caption="Widget em funcionamento"]<img src="http://blog.thiagobelem.net/wp-content/uploads/2011/01/1295580557334.png" alt="" title="Widget sobre o autor" width="263" height="120" class="size-full wp-image-1389" />[/caption]</p>
<p>Espero que tenham gostado! Agora é só você editar o CSS do seu blog para deixar o widget bem apresentável. ;)</p>
<p>Faça o download do código-fonte completo do widget: <a href="http://blog.thiagobelem.net/arquivos/widget_sobre-autor.class.phps" title="Widget - Sobre o autor (código fonte)" target="_blank">http://blog.thiagobelem.net/arquivos/widget_sobre-autor.class.phps</a></p>
<p>Gostou do artigo? Criou um widget pro seu blog? Comente como foi! Diga o que você conseguiu fazer! :)</p>
<p>Um grande abraço e até a próxima!</p>
