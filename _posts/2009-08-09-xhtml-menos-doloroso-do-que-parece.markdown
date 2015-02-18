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
<p>Atualmente as pessoas parecem ter medo do XHTML, acham que sair do HTML e ir para o XHTML vai exigir tempo, sangue, suor e lágrimas... O que essas pessoas não percebem é que essa mudança é incrivelmente simples e torna o seu trabalho e a sua vida MUITO mais organizada.</p>
<p>Se isso parece errado para você:<br />
[code language="html" light="true"]&lt;p&gt;Olá mundo, &lt;strong&gt;olá Terra!&lt;/p&gt;&lt;/strong&gt;[/code]<br />
Você provavelmente vai preferir isso:<br />
[code language="html" light="true"]&lt;p&gt;Olá mundo, &lt;strong&gt;olá Terra!&lt;/strong&gt;&lt;/p&gt;[/code]</p>
<p>Você já andou meio caminho... Essa é a regra principal do XHTML... Todos os elementos precisam ser fechados na ordem inversa a que foram abertos... Como assim? Se você abriu as tags 1, 2 e 3 vai precisar fechar 3, 2 e 1. :)</p>
<p>Por exemplo, esse código:<br />
[code language="html" light="true"]&lt;div&gt;<br />
	&lt;ul&gt;<br />
		&lt;li&gt;[/code]</p>
<p>Segundo o XHTML ele deveria ser fechado dessa forma:<br />
[code language="html" light="true"]		&lt;/li&gt;<br />
	&lt;/ul&gt;<br />
&lt;/div&gt;[/code]<br />
Isso tudo é muito mais organizado e mais fácil de ler, concordam?</p>
<p>Mas existem outras tags que não são de marcação e por isso não tem uma segunda tag de fechamento, é o exemplo do BR, HR, IMG, INPUT... Essas tags também precisam ser fechadas! E você me pergunta, mas como eu faço isso?</p>
<p>E eu te mostro a resposta:<br />
[code language="html" light="true"]&lt;div&gt;<br />
	&lt;p&gt;Esse é um parágrafo com TAG de fechamento&lt;/p&gt;<br />
	&lt;img src=&quot;minha_imagem.jpg&quot; alt=&quot;Minha Imagem&quot; /&gt;<br />
	&lt;hr /&gt;<br />
	&lt;p&gt;Esse é outro parágrafo com TAG de fechamento e &lt;br /&gt; quebra de linha!&lt;/p&gt;<br />
	&lt;input type=&quot;text&quot; name=&quot;meuInput&quot; /&gt;<br />
&lt;/div&gt;[/code]</p>
<p>Viram? É só colocar uma barra (pra direita) antes do &gt; que termina a tag e pronto! :)</p>
<p>Existem ainda outras regras que ditam uma boa semântica e organização do codigo XHTML como "todas as tags devem ser em minúsculo" e outras que especificam uma lista de <strong>propriedades</strong> obrigatórias pra cada elemento como o &lt;a&gt; tem que ter title, e o &lt;img&gt; tem que ter src e alt.. :)</p>
<p>Um outro ponto importante do XHTML é o DOCTYPE que informa a definição do XHTML que se esta usando, são três tipos:</p>
<p>[code language="html" light="true"]&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;[/code]<br />
O <strong>DOCTYPE Strict</strong> deve ser usado quando se cumpre todas as especificações do XHTML e ele não validará enquanto TUDO não foi 100% correto e seguindo os <a href="http://www.w3.org/TR/xhtml1/" target="_blank">padrões</a> definidos pelo W3C.<br />
[code language="html" light="true"]&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;[/code]<br />
Já o <strong>DOCTYPE Transitional</strong> (que deve ser usado pela maioria dos sites) é quando você saiu do HTML e está em transição para o XHTML perfeito, permitindo que o seu site seja validado com menos exigências.<br />
[code language="html" light="true"]&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Frameset//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd&quot;&gt; [/code]<br />
E tem o <strong>DOCTYPE Frameset</strong> que você vai usar quando seu site tiver frames e/ou iFrames (argh).</p>
<p>Até a próxima! :)</p>
<p style="text-align: right; font-size: 10px">Fonte: <a href="http://www.phpbuilder.com/columns/marc_plotz06302009.php3" target="_blank">PHPBuilder.com</a></p>
