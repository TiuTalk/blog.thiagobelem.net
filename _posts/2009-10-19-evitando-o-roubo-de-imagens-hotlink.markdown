---
layout: post
title: Evitando o roubo de imagens – Hotlink
excerpt: Aprenda a evitar que outros sites e blogs usem as imagens do seu site, consumindo
  assim a sua taxa de transferência mensal e roubando o seu conteúdo!

date: '2009-10-19 09:34:50 -0200'
categories:
- Tutoriais
- Apache
- Segurança
tags:
- Apache
- Hotlink
---
<p>Fala gente,</p>
<p>Fiquei bastante tempo sem postar nada, mas hoje consegui um tempinho pra trazer mais um tutorial pra vocês: Evitando o roubo de imagens (o famoso <strong><em>Hotlink</em></strong>).</p>
<p>Vamos dar o exemplo de uma situação fictícia: Você tem um site de fotos de bolas modelos e percebe que outros sites/blogs estão usando essas fotos... São tags <img> usando o caminho absoluto da foto (dentro do seu site) no SRC da imagem.</p>
<p>Isso faz com que os sites exibam o seu conteúdo mas não percam <strong>bandwidth</strong> (ou taxa de transferência mensal)... E sabe quem vai perder o bandwidth dessas imagens? Você.</p>
<p>Para evitar isso você precisa adicionar algumas regrinhas ao seu <strong>.htaccess</strong> (arquivo de configurações e diretrizes do Apache) que fica, geralmente, na raiz do seu site.</p>
<p>[code]RewriteEngine On<br />
RewriteCond %{HTTP_REFERER} !^http://(.+\.)?meusite\.com\.br/ [NC]<br />
RewriteCond %{HTTP_REFERER} !^$<br />
RewriteRule .*\.(jpe?g|gif|bmp|png)$ /imagens/proibido.jpg [L][/code]</p>
<p>Esse código fará com que, caso um outro site que não esteja dentro do domínio <strong>meusite.com.br</strong> tente chamar uma imagem do seu site, receberá uma outra imagem "<strong>imagens/proibido.jpg</strong>"... Isso fará o outro site passar uma boa vergonha.</p>
<p>Mas suponhamos que você queira ser legal com o resto do mundo e chato apenas com um outro site... o meuinimigo.com.br. Você pode fazer assim:</p>
<p>[code]RewriteEngine On<br />
RewriteCond %{HTTP_REFERER} ^http://(.+\.)?meuinimigo\.com\.br/ [NC,OR]<br />
RewriteCond %{HTTP_REFERER} ^http://(.+\.)?meuinimigo\.net/ [NC,OR]<br />
RewriteCond %{HTTP_REFERER} ^http://(.+\.)?meuinimigo\.org/ [NC]<br />
RewriteRule .*\.(jpe?g|gif|bmp|png)$ /imagens/proibido.jpg [L][/code]</p>
<p>Com isso, qualquer site irá poder usar as suas imagens, menos os domínios <strong>meuinimigo.com.br</strong>, <strong>meuinimigo.net</strong> e <strong>meuinimigo.org</strong>.</p>
<p>Mas e se você não quer colocar outra imagem no lugar e simplesmente exibir uma página "forbidden" (acesso negado)? É só trocar a última linha:</p>
<p>[code light="true"]RewriteRule .*\.(jpe?g|gif|bmp|png)$ - [F][/code]</p>
<p>Viram que simples?</p>
<p>Abraços e um ótimo início de semana!</p>
<p style="font-size: 10px; text-align: right">Agradecimentos ao <a target="_blank" rel="nofollow" href="http://altlab.com/htaccess_tutorial.html">altlab.com</a>.</p>
