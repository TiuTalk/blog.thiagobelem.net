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
Fala minha gente!! Trago até vocês mais um artigo sobre desenvolvimento, dessa sobre <strong>WordPress</strong>! (Atendendo o pedido do [Phelipp de Avila](https://twitter.com/PhelippdeAvila), que me segue no Twitter)

Segundo a [documentação oficial sobre widgets do WordPress](http://codex.wordpress.org/Widgets_API) você deve criar Widgets utilizando um modelo de classe definido por eles, que é o que vou ensinar no artigo de hoje.

Nesse exemplo, iremos criar um <strong>widget de "Sobre o autor"</strong>, que pode ser inserido no sidebar geral do blog (ou num sidebar específico para posts)... Esse widget irá verificar se estamos em um post (que o WordPress chama de <em>single</em>), e caso estejamos, irá exibir o <strong>nome</strong>, o <strong>avatar</strong> e a <strong>descrição</strong> do autor do post, todos esses dados vindos diretamente do banco de dados do WordPress.

<h3>A preparação</h3>
Antes de tudo, você vai precisar separar seu widget em três métodos dentro de uma classe:

<ul>
<li>Um método para gerar e exibir o HTML que aparecerá na lateral do seu blog/site</li>
<li>Um método que será usado para gerar e exibir o HTML do formulário que aparecerá no painel de controle do blog/site</li>
<li>Um método que será usado para salvar os dados vindos desse formulário</li>
</ul>
Sabendo disso.. vamos começar a nossa classe:


<div data-gist-id="1181e8d27fcf16f0fcac" data-gist-show-loading="false"></div>

Lembrando que a sua classe DEVE estender a classe <strong>WP_Widget</strong>, do próprio WordPress.

Agora vamos inserir quatro métodos vazios para deixar a estrutura da classe pronta:


<div data-gist-id="36aa215f03e0f947bc98" data-gist-show-loading="false"></div>

<h3>Método form()</h3>
Agora vamos começar pelo método form(), que exibe o formulário... Esse widget não precisaria de formulário e opções pois ele não tem nenhum tipo de configuração, mas vamos deixar uma coisa opcional como exibir o link do site do autor.

O nosso método form() ficará da seguinte forma:


<div data-gist-id="0d37e045e1b7ff73cad7" data-gist-show-loading="false"></div>

Eu sei que parece complicado, mas estamos apenas criando um parágrafo com um checkbox e um label... Para definir o ID e o name do input utilizamos recursos do próprio WordPress, assim não caímos no problema de usar um name que já exista... O resultado é um checkbox onde você pode decidir se exibe ou não o link do autor no widget.

Logo no começo do método pegamos uma informação da instância atual do widget, assim caso estejamos editando um widget, saberemos a opção salva no banco de dados.

<h3>Método update()</h3>
Agora vamos partir para o método update(), que salva os dados e configurações do widget (nesse caso, apenas o checkbox) no banco de dados.

Esse método precisará retornar os dados a serem salvos no banco de dados, ficando assim:


<div data-gist-id="5efa183cda1e5c879972" data-gist-show-loading="false"></div>

Mais uma vez, não tem mistério: sobrescrevemos os valores de <code>$instancia_antiga</code> (o que estava salvo no banco de dados) com os valores de <code>$nova_instancia</code> e retornamos esses dados "mesclados" para serem salvos no banco de dados.

E pra finalizar, o método mais importante...

<h3>Método widget()</h3>
Esse método será responsável por mostrar os dados (HTML) do widget na lateral do seu blog... Vamos fazê-lo passo-a-passo:

Esse widget irá funcionar apenas nas páginas de post... então precisamos evitar que ele seja exibido nas outras páginas, dessa forma:


<div data-gist-id="c3b12376128070567fa2" data-gist-show-loading="false"></div>

Agora vamos trazer alguns dados sobre o autor:


<div data-gist-id="1866a8b949c702cba879" data-gist-show-loading="false"></div>

Feito isso é só começar a exibir o HTML do Widget:

<div data-gist-id="a81bbb2b0d4f7988a1f1" data-gist-show-loading="false"></div>

E o nosso widget está pronto!

Agora você precisa de apenas uma linha para habilitá-lo no seu painel de controle:

<div data-gist-id="09f6f947ebad87870323" data-gist-show-loading="false"></div>

<img src="/assets/uploads/2011/01/1295580557334.png" alt="" title="Widget sobre o autor" width="263" height="120" class="size-full wp-image-1389" />

Espero que tenham gostado! Agora é só você editar o CSS do seu blog para deixar o widget bem apresentável. ;)

Faça o download do código-fonte completo do widget: [/arquivos/widget_sobre-autor.class.phps](/arquivos/widget_sobre-autor.class.phps)

Gostou do artigo? Criou um widget pro seu blog? Comente como foi! Diga o que você conseguiu fazer! :)

Um grande abraço e até a próxima!

