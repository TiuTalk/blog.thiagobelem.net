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
<p>Ohay!  :-D</p>
<p>Hoje vou demonstrar como vocês podem criar uma validação de campos (inputs) usando <strong>jQuery </strong>(JavaScript) e um plugin dele. Vamos verificar, por exemplo, se todos os campos foram preenchidos ou não.. ou se os seus valores estão ok.</p>
<p>Veja um exemplo do que será aprendido nessa aula:<br />
<a href="http://blog.thiagobelem.net/exemplo2/" target="_blank">http://blog.thiagobelem.net/exemplo2/</a></p>
<p>Usarei como exemplo um formulário de contato que é o mais comum por ai... Vamos ao passo-a-passo:</p>
<p>Faça o download da última versão do <strong>jQuery </strong>no site: <a href="http://jquery.com/" target="_blank">http://jquery.com/<br />
</a>Faça o download do plugin <strong>Validation </strong>no site: <a href="http://bassistance.de/jquery-plugins/jquery-plugin-validation/" target="_blank">http://bassistance.de/jquery-plugins/jquery-plugin-validation/</a></p>
<p>Insira-os dentro do <head> do seu site, da seguinte forma:</p>
<p>[code language="html"]<br />
<script src="jquery.js" type="text/javascript"></script><br />
 <script src="jquery.validate.js" type="text/javascript"></script><br />
[/code]</p>
<p>Após isso, criamos um pequeno bloco de CSS para estilizar as mensagens de erro:</p>
<p>[code language="css"]<br />
* { font-family: Verdana; font-size: 96%; }<br />
label { display: block; margin-top: 10px; }<br />
label.error { float: none; color: red; margin: 0 .5em 0 0; vertical-align: top; font-size: 10px }<br />
p { clear: both; }<br />
.submit { margin-top: 1em; }<br />
em { font-weight: bold; padding-right: 1em; vertical-align: top; }<br />
[/code]</p>
<p>Ainda dentro do <em><strong>head</strong></em>, depois de inserir o <strong>jQuery</strong> e o estilo das mensagens de erro, precisaremos adicionar um bloco de JavaScript contendo instruções para a validação:</p>
<p>[code language="javascript"]<br />
$(document).ready( function() {<br />
	$("#formularioContato").validate({<br />
		// Define as regras<br />
		rules:{<br />
			campoNome:{<br />
				// campoNome será obrigatório (required) e terá tamanho mínimo (minLength)<br />
				required: true, minlength: 2<br />
			},<br />
			campoEmail:{<br />
				// campoEmail será obrigatório (required) e precisará ser um e-mail válido (email)<br />
				required: true, email: true<br />
			},<br />
			campoMensagem:{<br />
				// campoMensagem será obrigatório (required) e terá tamanho mínimo (minLength)<br />
				required: true, minlength: 2<br />
			}<br />
		},<br />
		// Define as mensagens de erro para cada regra<br />
		messages:{<br />
			campoNome:{<br />
				required: "Digite o seu nome",<br />
				minLength: "O seu nome deve conter, no mínimo, 2 caracteres"<br />
			},<br />
			campoEmail:{<br />
				required: "Digite o seu e-mail para contato",<br />
				email: "Digite um e-mail válido"<br />
			},<br />
			campoMensagem:{<br />
				required: "Digite a sua mensagem",<br />
				minLength: "A sua mensagem deve conter, no mínimo, 2 caracteres"<br />
			}<br />
		}<br />
	});<br />
});<br />
[/code]</p>
<p>Por fim, inserimos o HTML do formulário na pagina:</p>
<p>[code language="html"]<br />
<form id="formularioContato" method="post"></p>
<p>	<label for="nome">Nome</label><br />
	<input id="nome" name="campoNome" type="text" /></p>
<p>	<label for="email">E-mail</label><br />
	<input id="email" name="campoEmail" type="text" /></p>
<p>	<label for="mensagem">Mensagem</label><br />
	<textarea id="mensagem" name="campoMensagem"></textarea></p>
<p>	<input class="submit" type="submit" value="Enviar" /></p>
<p></form><br />
[/code]</p>
<p>Viram como é fácil? O arquivo final ficou <a href="http://blog.thiagobelem.net/exemplo2/" target="_blank">desta</a> forma. Se você preferir pode copiar todo esse código JavaScript para um arquivo .js e incluí-lo no <head> do seu site da mesma forma que fizemos no começo da aula.</p>
<p>Coloquei alguns comentários na parte das instruções de validação para facilitar o entendimento.</p>
<p>Com isso você faz uma validação <em>client-side</em> que ajuda a evitar dados inválidos e campos vazios. Mas preciso lembrar que, por ser <em>client-side</em>, essa validação acontece apenas no computador do visitante e o mesmo pode desativar o JavaScript e a validação toda não irá funcionar. Então não se esqueça de fazer a mesma validação dentro do PHP quando receber os dados.</p>
<p>Veja o exemplo desta aula funcionando:<br />
<a href="http://blog.thiagobelem.net/exemplo2/" target="_blank">http://blog.thiagobelem.net/exemplo2/</a></p>
<p>Mais exemplos de validações diferentes podem ser encontrados no site do plugin:<br />
<a href="http://jquery.bassistance.de/validate/demo/" target="_blank">http://jquery.bassistance.de/validate/demo/</a></p>
<p>Abraços e até a próxima! :)</p>
