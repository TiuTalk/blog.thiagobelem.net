---
layout: post
title: Instalando o no-www no seu site
excerpt: Aprenda a remover automaticamente o WWW da URL do seu site utilizando o <strong>no-www</strong>.
  :)

date: '2009-03-16 02:58:28 -0300'
categories:
- Tutoriais
- Apache
tags: []
---
<p>Mas, o que é o <strong>no-www</strong>?</p>
<p>A "<strong>filosofia do no-www</strong>" diz que o seu site deve ser conhecido e acessível apenas pelo nome de domínio (no meu caso seria só o thiagobelem.net, sem o www). Se você usa o www na frente do seu nome de domínio você está dizendo para o servidor que quer acessar o subdomínio <strong>www</strong> do site... Que nada mais é do que um redirecionamento interno para a porta 80. Hoje em dia todo mundo usa o protocolo 'http://' para acessar um site, e isso já tem como padrão a porta 80. Então a presença do www no seu endereço só torna as coisas um pouco mais lentas para o servidor.</p>
<p>Segundo a descriçaõ da Wikipédia sobre o WWW:</p>
<blockquote><p>A <em><strong>W</strong>orld <strong>W</strong>ide <strong>W</strong>eb</em> (que em português significa, "Rede de alcance mundial"; também conhecida como Web e WWW) é um sistema de documentos em hipermídia que são interligados e executados na Internet.</p></blockquote>
<p>Muita gente diz que o no-www é 'modinha' e não tem uma real utilidade. Eu apoio e vou ensinar a vocês como instalá-lo no seu site.. é bem simples:</p>
<p>Primeiro abra o bloco de notas (notepad) do seu computador e escreva o seguinte pedaço de texto:<br />
[code language="shell"]<br />
RewriteEngine On<br />
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]<br />
RewriteRule ^(.*)$ http://%1/$1 [R=301,L]<br />
[/code]</p>
<p>Salve este arquivo com o nome de '.htaccess'... Isso mesmo, o arquivo não tem nome, só uma extensão grande de 8 letras.</p>
<p>Depois, faça upload desse arquivo para o seu site, na mesma pasta onde fica o <em>index</em> do seu site (chamado de <em>root </em>ou <strong>raiz </strong>do site).</p>
<p>Tente acessar o seu site usando www na frente da URL como de costume, por exemplo: <a href="http://thiagobelem.net/" target="_blank">http://thiagobelem.net/</a> se o site se redirecionar automaticamente pra url sem o www você fez a instalação com sucesso.</p>
<p>Se algo der errado, aparecer alguma mensagem de erro de servidor, é só excluir o arquivo <strong>.htaccess</strong> de lá que tudo volta ao normal.</p>
<p><span style="color: #999999;"><strong>Nota: </strong></span>Esse processo só irá funcionar em servidores que permitam o uso do arquivo .htaccess e permitam a reescrita de URL (RewriteEngine).</p>
<p><span style="color: #999999;"><strong>Nota²: </strong></span>Alguns domínios .com.br não funcionam sem o www na frente, façam o teste antes.</p>
<p>Espero que tenham gostado!  :-P</p>
