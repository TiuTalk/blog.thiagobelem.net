---
layout: post
title: Paginação no CakePHP
excerpt: Você vai que precisamos de exatamente <strong>duas linhas</strong> pra fazer
  uma consulta paginada no CakePHP, e mais duas linhas pra mostrar os links de "pŕoximo"
  e "anterior". :)

date: '2011-07-21 23:05:57 -0300'
categories:
- Desenvolvimento
- PHP
- Frameworks
- CakePHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- CakePHP
- Paginação
- Desenvolvimento
- curso cakephp
- controller
- model
- assando sites
- curso online cakephp
- pagination
- paginator
- paginatorhelper
- helper
---
Opa opa! Estou de volta :)

Tenho recebido algumas dúvidas sobre como usar/fazer <a href="http://book.cakephp.org/view/1231/Pagination">paginação no CakePHP</a>, e resolvi ensinar pra vocês como eu resolvo esse problema...

Você vai que precisamos de exatamente <strong>duas linhas</strong> pra fazer uma consulta paginada no CakePHP, e mais duas linhas pra mostrar os links de "pŕoximo" e "anterior". :)

<h3>Você vai precisar de</h3>
<ol>
<li><del>CakePHP instalado e configurado</del> (duh)</li>
<li><del>Um model com alguns dados cadastrados no banco de dados</del> (duh²)</li>
<li>Boa vontade</li>
<li>5 minutos <em>(ou menos)</em></li>
</ol>
<h3>Começando pelo Controller</h3>
<div>O trabalho da paginação começa no <strong>Controller</strong>... Defina os parâmetros de busca (find) normalmente, como você sempre fez:</div>

[code language="php"]
class NoticiasController extends AppController {

	/**
	 * Lista as notícias utilizando paginação
	 */
	public function lista() {

		$options = array(
			'fields' => array('Noticia.titulo', 'Noticia.resumo'),
			'conditions' => array('Noticia.active' => true),

			'order' => array('Noticia.created' => 'DESC'),
			'limit' => 10
		);

	}

}
[/code]

Definido os parâmetros de busca, podemos atribuí-los ao atributo <strong>paginate</strong> do <strong>Controller</strong> e rodar a consulta no model <strong>Noticia</strong>:


[code language="php"]class NoticiasController extends AppController {

	/**
	 * Lista as notícias utilizando paginação
	 */
	public function lista() {

		$options = array(
			'fields' => array('Noticia.titulo', 'Noticia.resumo'),
			'conditions' => array('Noticia.active' => true),

			'order' => array('Noticia.created' => 'DESC'),
			'limit' => 10
		);

		$this->paginate = $options;

		// Roda a consulta, já trazendo os resultados paginados
		$noticias = $this->paginate('Noticia');

		// Envia os dados pra view
		$this->set('noticias', $noticias);
	}

}[/code]

E tá tudo pronto.. agora é só ir pra view mostrar essas notícias e colocar os links de paginação! :)

<h3>Paginação na View</h3>
Um exemplo básico (usando a tag <em>article</em> do <strong>HTML5</strong>) da listagem de notícias:


[code language="php"]<article>
<?php foreach($noticias AS $data): ?>
	<h1><?php echo $data['Noticia']['titulo'] ?></h1>
	<?php echo $data['Noticia']['resumo'] ?>

<?php endforeach; ?>
</article>[/code]

E por ultimo, a listagem dos links de paginação:


[code language="php"]
echo $this->Paginator->prev('« Mais novas', null, null, array('class' => 'desabilitado'));
echo $this->Paginator->numbers();
echo $this->Paginator->next('Mais antigas »', null, null, array('class' => 'desabilitado'));
[/code]

Na linha 1 e 3 nós mostramos os links para a <strong>próxima página</strong> e para a <strong>página anterior</strong>. Já na linha 2 nós mostramos aquela lista de números das páginas:<strong> 1, 2, 3, 4</strong> cada uma com um link!

O <strong>PaginatorHelper</strong> tem muitas outras opções e customizações, não deixe de consultar a <a href="http://api.cakephp.org/class/paginator-helper">documentação</a>.

<h3>Quer saber mais sobre o CakePHP?</h3>
<a href="http://assando-sites.com.br/"><img src="/assets/uploads/2011/07/cookie.png" alt="Assando Sites, curso online de CakePHP" title="Assando Sites, curso online de CakePHP" width="128" height="128" class="alignright size-full wp-image-1737" /></a>

Inscreva-se no meu <strong>curso online</strong> de CakePHP, o <a title="Assando Sites, curso online de CakePHP" href="http://assando-sites.com.br" target="_blank">Assando Sites</a>!

Você aprende sem sair de casa, aos domingos ou quando preferir assistir os vídeos gravados em aula. :)

Para saber mais informações sobre o curso, <a title="Assando Sites, curso online de CakePHP" href="http://assando-sites.com.br" target="_blank">acesse o site</a> ou leia <a title="Curso online de CakePHP" href="/curso-online-de-cakephp" target="_blank">este post aqui no blog</a>.

Um grande abraço e até a próxima!

