---
layout: post
status: publish
published: true
title: Protegendo seus formulários com jQuery
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aprenda a criar um evento no jQuery que bloqueie múltiplos submits em um
  formulário e proteja o seu formulário contra ataques e o seu banco de dados contra
  registros múltiplos.
wordpress_id: 576
wordpress_url: http://blog.thiagobelem.net/?p=576
date: '2009-07-13 18:15:51 -0300'
date_gmt: '2009-07-13 21:15:51 -0300'
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
<p>Um problema muito comum em alguns sistemas é chamado de "submit múltiplo", é quando aquele usuário apressadinho clica 5x no [enviar] achando que vai tornar tudo mais rápido e, dependendo do sistema, isso causa um desastre.</p>
<p>Criei um pedacinho de código pequeno porém muito do útil que ajuda a evitar esse mal da seguinte forma: assim que o formulário é enviado ele desabilita todos os campos e botões de submit, fazendo com que não seja possível alterar os dados ou enviar o formulário novamente.</p>
<p>É só incluir essas linhas no seu site:<br />
[code language="javascript"]$(function() {<br />
    $(&quot;form&quot;).submit(function() {<br />
    	// ReadOnly em todos os inputs<br />
    	$(&quot;input&quot;, this).attr(&quot;readonly&quot;, true);<br />
    	// Desabilita os submits<br />
    	$(&quot;input[type='submit'],input[type='image']&quot;, this).attr(&quot;disabled&quot;, true);<br />
    	return true;<br />
    });<br />
});[/code]</p>
<p>Mas há um probleminha com esse código: se você usar algum tipo de validação por JavaScript (também ativado pelo submit do formulário) o codigo não vai funcinar caso o usuário tenha digitado algo que invalide o formulário.</p>
<p>Uma solução seria chamar essa função de validação dentro desse código jQuery, da seguinte forma:<br />
[code language="javascript" highlight="3"]$(function() {<br />
	$(&quot;form&quot;).submit(function() {<br />
		if (minhaFuncao() == true) {<br />
			// ReadOnly em todos os inputs<br />
			$(&quot;input&quot;, this).attr(&quot;readonly&quot;, true);<br />
			// Desabilita os submits<br />
			$(&quot;input[type='submit'],input[type='image']&quot;, this).attr(&quot;disabled&quot;, true);<br />
			return true;<br />
		} else {<br />
			return false;<br />
		}<br />
	});<br />
});[/code]</p>
<p>Com isso nós iremos bloquear o próximo submit apenas quando os dados forem validados. ;)</p>
<p>Espero que tenham gostado! :)</p>
<p><strong style="background: gray; color: white">Atualização:</strong> Troquei o código por um que funciona no IE6, não tem alert() e é mais fácil de entender.</p>
