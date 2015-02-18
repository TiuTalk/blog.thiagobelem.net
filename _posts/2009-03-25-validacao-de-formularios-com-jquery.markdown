---
layout: post
title: Validação de formulários com jQuery
excerpt: Aprenda a usar o jQuery para fazer a validação dos dados inseridos pelo seu
  usuário e, com isso, adicione mais uma camada de segurança ao seu site.

date: '2009-03-25 19:51:37 -0300'
categories:
- jQuery
- Tutoriais
- Segurança
tags: []
---
Ohay!  :-D

Hoje vou demonstrar como vocês podem criar uma validação de campos (inputs) usando <strong>jQuery </strong>(JavaScript) e um plugin dele. Vamos verificar, por exemplo, se todos os campos foram preenchidos ou não.. ou se os seus valores estão ok.

Veja um exemplo do que será aprendido nessa aula:
[http://blog.thiagobelem.net/exemplo2/](/exemplo2)

Usarei como exemplo um formulário de contato que é o mais comum por ai... Vamos ao passo-a-passo:

Faça o download da última versão do <strong>jQuery </strong>no site: <a href="http://jquery.com/" target="_blank">http://jquery.com/
</a>Faça o download do plugin <strong>Validation </strong>no site: [http://bassistance.de/jquery-plugins/jquery-plugin-validation/](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)

Insira-os dentro do <head> do seu site, da seguinte forma:


{% highlight text linenos %}
<script src="jquery.js" type="text/javascript"></script>
 <script src="jquery.validate.js" type="text/javascript"></script>
{% endhighlight %}

Após isso, criamos um pequeno bloco de CSS para estilizar as mensagens de erro:


{% highlight text linenos %}
* { font-family: Verdana; font-size: 96%; }
label { display: block; margin-top: 10px; }
label.error { float: none; color: red; margin: 0 .5em 0 0; vertical-align: top; font-size: 10px }
p { clear: both; }
.submit { margin-top: 1em; }
em { font-weight: bold; padding-right: 1em; vertical-align: top; }
{% endhighlight %}

Ainda dentro do <em><strong>head</strong></em>, depois de inserir o <strong>jQuery</strong> e o estilo das mensagens de erro, precisaremos adicionar um bloco de JavaScript contendo instruções para a validação:


{% highlight text linenos %}
$(document).ready( function() {
	$("#formularioContato").validate({
		// Define as regras
		rules:{
			campoNome:{
				// campoNome será obrigatório (required) e terá tamanho mínimo (minLength)
				required: true, minlength: 2
			},
			campoEmail:{
				// campoEmail será obrigatório (required) e precisará ser um e-mail válido (email)
				required: true, email: true
			},
			campoMensagem:{
				// campoMensagem será obrigatório (required) e terá tamanho mínimo (minLength)
				required: true, minlength: 2
			}
		},
		// Define as mensagens de erro para cada regra
		messages:{
			campoNome:{
				required: "Digite o seu nome",
				minLength: "O seu nome deve conter, no mínimo, 2 caracteres"
			},
			campoEmail:{
				required: "Digite o seu e-mail para contato",
				email: "Digite um e-mail válido"
			},
			campoMensagem:{
				required: "Digite a sua mensagem",
				minLength: "A sua mensagem deve conter, no mínimo, 2 caracteres"
			}
		}
	});
});
{% endhighlight %}

Por fim, inserimos o HTML do formulário na pagina:


{% highlight text linenos %}
<form id="formularioContato" method="post">

	<label for="nome">Nome</label>
	<input id="nome" name="campoNome" type="text" />

	<label for="email">E-mail</label>
	<input id="email" name="campoEmail" type="text" />

	<label for="mensagem">Mensagem</label>
	<textarea id="mensagem" name="campoMensagem"></textarea>

	<input class="submit" type="submit" value="Enviar" />

</form>
{% endhighlight %}

Viram como é fácil? O arquivo final ficou [desta](/exemplo2) forma. Se você preferir pode copiar todo esse código JavaScript para um arquivo .js e incluí-lo no <head> do seu site da mesma forma que fizemos no começo da aula.

Coloquei alguns comentários na parte das instruções de validação para facilitar o entendimento.

Com isso você faz uma validação <em>client-side</em> que ajuda a evitar dados inválidos e campos vazios. Mas preciso lembrar que, por ser <em>client-side</em>, essa validação acontece apenas no computador do visitante e o mesmo pode desativar o JavaScript e a validação toda não irá funcionar. Então não se esqueça de fazer a mesma validação dentro do PHP quando receber os dados.

Veja o exemplo desta aula funcionando:
[http://blog.thiagobelem.net/exemplo2/](/exemplo2)

Mais exemplos de validações diferentes podem ser encontrados no site do plugin:
[http://jquery.bassistance.de/validate/demo/](http://jquery.bassistance.de/validate/demo/)

Abraços e até a próxima! :)

