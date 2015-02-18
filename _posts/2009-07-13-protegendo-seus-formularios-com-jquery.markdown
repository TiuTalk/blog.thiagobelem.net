---
layout: post
title: Protegendo seus formulários com jQuery
excerpt: Aprenda a criar um evento no jQuery que bloqueie múltiplos submits em um
  formulário e proteja o seu formulário contra ataques e o seu banco de dados contra
  registros múltiplos.

date: '2009-07-13 18:15:51 -0300'
categories:
- Javascript
- jQuery
- Artigos
- Segurança
tags:
- jQuery
- Javascript
- Formulário
- Submit
---
Um problema muito comum em alguns sistemas é chamado de "submit múltiplo", é quando aquele usuário apressadinho clica 5x no [enviar] achando que vai tornar tudo mais rápido e, dependendo do sistema, isso causa um desastre.

Criei um pedacinho de código pequeno porém muito do útil que ajuda a evitar esse mal da seguinte forma: assim que o formulário é enviado ele desabilita todos os campos e botões de submit, fazendo com que não seja possível alterar os dados ou enviar o formulário novamente.

É só incluir essas linhas no seu site:
[code language="javascript"]
$(function() {
    $("form").submit(function() {
    	// ReadOnly em todos os inputs
    	$("input", this).attr("readonly", true);
    	// Desabilita os submits
    	$("input[type='submit'],input[type='image']", this).attr("disabled", true);
    	return true;
    });
});
[/code]

Mas há um probleminha com esse código: se você usar algum tipo de validação por JavaScript (também ativado pelo submit do formulário) o codigo não vai funcinar caso o usuário tenha digitado algo que invalide o formulário.

Uma solução seria chamar essa função de validação dentro desse código jQuery, da seguinte forma:
[code language="javascript"]
$(function() {
	$("form").submit(function() {
		if (minhaFuncao() == true) {
			// ReadOnly em todos os inputs
			$("input", this).attr("readonly", true);
			// Desabilita os submits
			$("input[type='submit'],input[type='image']", this).attr("disabled", true);
			return true;
		} else {
			return false;
		}
	});
});
[/code]

Com isso nós iremos bloquear o próximo submit apenas quando os dados forem validados. ;)

Espero que tenham gostado! :)

<strong style="background: gray; color: white">Atualização:</strong> Troquei o código por um que funciona no IE6, não tem alert() e é mais fácil de entender.

