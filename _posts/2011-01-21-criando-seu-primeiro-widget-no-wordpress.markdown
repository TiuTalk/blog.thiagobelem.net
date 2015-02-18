---
layout: post
title: Criando seu primeiro widget no WordPress
excerpt: Aprenda a criar widgets no WordPress utilizando classes de forma fácil e
  organizada. Veja um exemplo real de widget que exibe informações sobre o autor do
  post de forma automática.

date: '2011-01-21 01:44:46 -0200'
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
Fala minha gente!! Trago até vocês mais um artigo sobre desenvolvimento, dessa sobre <strong>WordPress</strong>! (Atendendo o pedido do <a href="https://twitter.com/PhelippdeAvila" target="_blank">Phelipp de Avila</a>, que me segue no Twitter)

Segundo a <a href="http://codex.wordpress.org/Widgets_API" target="_blank">documentação oficial sobre widgets do WordPress</a> você deve criar Widgets utilizando um modelo de classe definido por eles, que é o que vou ensinar no artigo de hoje.

Nesse exemplo, iremos criar um <strong>widget de "Sobre o autor"</strong>, que pode ser inserido no sidebar geral do blog (ou num sidebar específico para posts)... Esse widget irá verificar se estamos em um post (que o WordPress chama de <em>single</em>), e caso estejamos, irá exibir o <strong>nome</strong>, o <strong>avatar</strong> e a <strong>descrição</strong> do autor do post, todos esses dados vindos diretamente do banco de dados do WordPress.

<h3>A preparação</h3>
Antes de tudo, você vai precisar separar seu widget em três métodos dentro de uma classe:

<ul>
<li>Um método para gerar e exibir o HTML que aparecerá na lateral do seu blog/site</li>
<li>Um método que será usado para gerar e exibir o HTML do formulário que aparecerá no painel de controle do blog/site</li>
<li>Um método que será usado para salvar os dados vindos desse formulário</li>
</ul>
Sabendo disso.. vamos começar a nossa classe:


[code language="php"]
<?php

/**
 * Widget de Sobre o Autor
 *
 * @author Thiago Belem <contato@thiagobelem.net>
 * @link http://blog.thiagobelem.net/criando-seu-primeiro-widget-no-wordpress/
 */
class SobreAutorWidget extends WP_Widget {

}

?>
[/code]

Lembrando que a sua classe DEVE estender a classe <strong>WP_Widget</strong>, do próprio WordPress.

Agora vamos inserir quatro métodos vazios para deixar a estrutura da classe pronta:


[code language="php"]
	/**
	 * Construtor
	 */
	public function SobreAutorWidget() { parent::WP_Widget(false, $name = 'Sobre o autor'); }

	/**
	 * Exibição final do Widget (já no sidebar)
	 *
	 * @param array $argumentos Argumentos passados para o widget
	 * @param array $instancia Instância do widget
	 */
	public function widget($argumentos, $instancia) {

	}

	/**
	 * Salva os dados do widget no banco de dados
	 *
	 * @param array $nova_instancia Os novos dados do widget (a serem salvos)
	 * @param array $instancia_antiga Os dados antigos do widget
	 */
	public function update($nova_instancia, $instancia_antiga) {

	}

	/**
	 * Formulário para os dados do widget (exibido no painel de controle)
	 *
	 * @param array $instancia Instância do widget
	 */
	public function form($instancia) {

	}
[/code]

<h3>Método form()</h3>
Agora vamos começar pelo método form(), que exibe o formulário... Esse widget não precisaria de formulário e opções pois ele não tem nenhum tipo de configuração, mas vamos deixar uma coisa opcional como exibir o link do site do autor.

O nosso método form() ficará da seguinte forma:


[code language="php"]
	/**
	 * Formulário para os dados do widget (exibido no painel de controle)
	 *
	 * @param array $instancia Instância do widget
	 */
	public function form($instancia) {
		$widget['link_autor'] = (boolean)$instancia['link_autor'];
		?>
		<label for="<?php echo $this->get_field_id('link_autor'); ?>"><input id="<?php echo $this->get_field_id('link_autor'); ?>" name="<?php echo $this->get_field_name('link_autor'); ?>" type="checkbox" value="1" <?php if ($widget['link_autor']) echo 'checked="checked"'; ?> /> <?php _e('Exibe o link do autor'); ?></label>

		<?php
	}
[/code]

Eu sei que parece complicado, mas estamos apenas criando um parágrafo com um checkbox e um label... Para definir o ID e o name do input utilizamos recursos do próprio WordPress, assim não caímos no problema de usar um name que já exista... O resultado é um checkbox onde você pode decidir se exibe ou não o link do autor no widget.

Logo no começo do método pegamos uma informação da instância atual do widget, assim caso estejamos editando um widget, saberemos a opção salva no banco de dados.

<h3>Método update()</h3>
Agora vamos partir para o método update(), que salva os dados e configurações do widget (nesse caso, apenas o checkbox) no banco de dados.

Esse método precisará retornar os dados a serem salvos no banco de dados, ficando assim:


[code language="php"]
	/**
	 * Salva os dados do widget no banco de dados
	 *
	 * @param array $nova_instancia Os novos dados do widget (a serem salvos)
	 * @param array $instancia_antiga Os dados antigos do widget
	 *
	 * @return array $instancia Dados atualizados a serem salvos no banco de dados
	 */
	public function update($nova_instancia, $instancia_antiga) {
		$instancia = array_merge($instancia_antiga, $nova_instancia);

		return $instancia;
	}
[/code]

Mais uma vez, não tem mistério: sobrescrevemos os valores de <code>$instancia_antiga</code> (o que estava salvo no banco de dados) com os valores de <code>$nova_instancia</code> e retornamos esses dados "mesclados" para serem salvos no banco de dados.

E pra finalizar, o método mais importante...

<h3>Método widget()</h3>
Esse método será responsável por mostrar os dados (HTML) do widget na lateral do seu blog... Vamos fazê-lo passo-a-passo:

Esse widget irá funcionar apenas nas páginas de post... então precisamos evitar que ele seja exibido nas outras páginas, dessa forma:


[code language="php"]
	public function widget($argumentos, $instancia) {
		if (!is_single()) return;
	}
[/code]

Agora vamos trazer alguns dados sobre o autor:


[code language="php"]
		$autor = array(
			'nome' => get_the_author_meta('display_name'),
			'email' => get_the_author_meta('user_email'),
			'descricao' => get_the_author_meta('description'),
			'link' => get_the_author_meta('user_url')
		);
[/code]

Feito isso é só começar a exibir o HTML do Widget:
[code language="php"]
		// Exibe o HTML do Widget
		echo $argumentos['before_widget'];
		echo $argumentos['before_title'] . $argumentos['widget_name'] . $argumentos['after_title'];
		echo get_avatar($autor['email'], $size = '59');
		echo "<h4>{$autor['nome']}</h4>";
		echo "{$autor['descricao']}
";
		if (isset($instancia['link_autor']) && $instancia['link_autor']) {
			echo 'Visite o <a href="'. $autor['link'] .'" title="'. $autor['nome'] .'" rel="nofollow" target="_blank">site do autor</a>
';
		}
		echo $argumentos['after_widget'];
[/code]

E o nosso widget está pronto!

Agora você precisa de apenas uma linha para habilitá-lo no seu painel de controle:
[code language="php"]
add_action('widgets_init', create_function('', 'return register_widget("SobreAutorWidget");'));
[/code]

<img src="/assets/uploads/2011/01/1295580557334.png" alt="" title="Widget sobre o autor" width="263" height="120" class="size-full wp-image-1389" />

Espero que tenham gostado! Agora é só você editar o CSS do seu blog para deixar o widget bem apresentável. ;)

Faça o download do código-fonte completo do widget: <a href="/arquivos/widget_sobre-autor.class.phps" title="Widget - Sobre o autor (código fonte)" target="_blank">http://blog.thiagobelem.net/arquivos/widget_sobre-autor.class.phps</a>

Gostou do artigo? Criou um widget pro seu blog? Comente como foi! Diga o que você conseguiu fazer! :)

Um grande abraço e até a próxima!

