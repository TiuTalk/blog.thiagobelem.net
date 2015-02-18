---
layout: post
title: 'XHTML: Menos doloroso do que parece'
excerpt: O XHTML dita a nova regra de organização e desenvolvimento de código HTML,
  tornando o seu site muito mais organizado, leve e "cross-browser". :)

date: '2009-08-09 07:46:04 -0300'
categories:
- HTML
- Artigos
tags:
- HTML
- xHTML
---
Atualmente as pessoas parecem ter medo do XHTML, acham que sair do HTML e ir para o XHTML vai exigir tempo, sangue, suor e lágrimas... O que essas pessoas não percebem é que essa mudança é incrivelmente simples e torna o seu trabalho e a sua vida MUITO mais organizada.

Se isso parece errado para você:
[code language="html" light="true"]Olá mundo, <strong>olá Terra!
</strong>[/code]
Você provavelmente vai preferir isso:
[code language="html" light="true"]Olá mundo, <strong>olá Terra!</strong>
[/code]

Você já andou meio caminho... Essa é a regra principal do XHTML... Todos os elementos precisam ser fechados na ordem inversa a que foram abertos... Como assim? Se você abriu as tags 1, 2 e 3 vai precisar fechar 3, 2 e 1. :)

Por exemplo, esse código:
[code language="html" light="true"]<div>
	<ul>
		<li>[/code]

Segundo o XHTML ele deveria ser fechado dessa forma:
[code language="html" light="true"]		</li>
	</ul>
</div>[/code]
Isso tudo é muito mais organizado e mais fácil de ler, concordam?

Mas existem outras tags que não são de marcação e por isso não tem uma segunda tag de fechamento, é o exemplo do BR, HR, IMG, INPUT... Essas tags também precisam ser fechadas! E você me pergunta, mas como eu faço isso?

E eu te mostro a resposta:
[code language="html" light="true"]<div>
	Esse é um parágrafo com TAG de fechamento

	<img src="minha_imagem.jpg" alt="Minha Imagem" />
	<hr />
	Esse é outro parágrafo com TAG de fechamento e  quebra de linha!

	<input type="text" name="meuInput" />
</div>[/code]

Viram? É só colocar uma barra (pra direita) antes do > que termina a tag e pronto! :)

Existem ainda outras regras que ditam uma boa semântica e organização do codigo XHTML como "todas as tags devem ser em minúsculo" e outras que especificam uma lista de <strong>propriedades</strong> obrigatórias pra cada elemento como o <a> tem que ter title, e o <img> tem que ter src e alt.. :)

Um outro ponto importante do XHTML é o DOCTYPE que informa a definição do XHTML que se esta usando, são três tipos:


[code language="html" light="true"]<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">[/code]
O <strong>DOCTYPE Strict</strong> deve ser usado quando se cumpre todas as especificações do XHTML e ele não validará enquanto TUDO não foi 100% correto e seguindo os <a href="http://www.w3.org/TR/xhtml1/" target="_blank">padrões</a> definidos pelo W3C.
[code language="html" light="true"]<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">[/code]
Já o <strong>DOCTYPE Transitional</strong> (que deve ser usado pela maioria dos sites) é quando você saiu do HTML e está em transição para o XHTML perfeito, permitindo que o seu site seja validado com menos exigências.
[code language="html" light="true"]<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"> [/code]
E tem o <strong>DOCTYPE Frameset</strong> que você vai usar quando seu site tiver frames e/ou iFrames (argh).

Até a próxima! :)

<p style="text-align: right; font-size: 10px">Fonte: <a href="http://www.phpbuilder.com/columns/marc_plotz06302009.php3" target="_blank">PHPBuilder.com</a>

