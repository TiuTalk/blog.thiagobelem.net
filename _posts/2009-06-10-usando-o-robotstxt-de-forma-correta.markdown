---
layout: post
title: Usando o Robots.txt de forma correta
excerpt: Aprenda a usar o robots.txt para limitar o acesso a algumas pastas ou arquivos
  do seu site dizendo o que os buscadores e indexadores podem ou não acessar nele.

date: '2009-06-10 23:34:26 -0300'
categories:
- Tutoriais
- Segurança
tags:
- Robots
- Robots.txt
---
<p>Robô (em informática / WEB) é uma ferramenta automática que fica percorrendo sites e coletando informações, verificando se houveram alterações ou validando suas informações.</p>
<p>A princípio os robôs (robots) podem acessar qualquer página/conteúdo/imagem do seu site sem que você tenha que dar permissão para tal. Mas você pode criar um arquivinho chamado robots.txt na raíz do seu site e, dentro dele, escrever algumas regrinhas que te ajudarão a controlar o que os robôs fazem no seu site.</p>
<p>Imagine o robots.txt como uma lista de convidados para uma festa... Se não tá na lista não entra. A única diferenças é que com o robots.txt não há penetras. Você pode bloquear tanto o site inteiro como documentos e arquivos específicos, facilitando assim o controle de "quem entra" no seu site.</p>
<h3>Criando o seu robots.txt</h3>
<p>Suponhamos que você tenha um arquivo chamado confidencial.html na raiz do seu site e você não quer que os indexadores dos sistemas de buscas e nenhum outro tipo de robô tenha acesso a esse arquivo... É só colocar isso aqui no seu robots.txt:</p>

[code='html']User-agent: *
Disallow: /confidencial.html[/code]

<p>Isso fará com que nenhum robot consiga acessar o arquivo especificado... Mas você também quer bloquear uma pasta do seu site para que nenhum robozinho possa entrar e ver algum arquivo dentro dela, então é só fazer assim:</p>

[code='html']User-agent: *
Disallow: /confidencial.html
Disallow: /minhapasta/[/code]

<h3>Comentários no robots.txt</h3>
<p>Se você é uma pessoa <span style="text-decoration: line-through;">metódica</span> organizada e quer colocar comentários no seu robots é só usar o caractere "tralha" (#) para isso, dessa forma:</p>

[code='html']# A regra servirá para todos os tipos de robôs
User-agent: *
# Meu arquivo de senhas ultra-secretas que ninguém pode saber
Disallow: /confidencial.html
# Bloqueando a minha pasta cheia de fotos ;X
Disallow: /minhapasta/[/code]

<h3>Bloqueando um site inteiro</h3>
<p>Tá com a pá virada e quer bloquear o acesso completo de todos os robôs ao seu site? Não precisa tirar ele do ar, e só fazer isso:</p>

[code='html']# Adios~
User-agent: *
Disallow: /[/code]

<h3>Criando a lista VIP da festa</h3>
<p>Tem gente que prefere bloquear todo mundo e permitir só alguns, e com o robots.txt não é diferente:</p>

[code='html']# Permitindo apenas dois arquivos e uma pasta:
User-agent: *
Allow: /meu_arquivo.html
Allow: /pasta/contato.html
Allow: /imagens/
Disallow: /[/code]

<p>Isso fará com que apenas os dois arquivos especificados e a pasta sejam acessíveis, o restante será bloqueado.</p>
<p>--</p>
<p>Ainda existem outras regras que limitam o acesso dos robôs a um certo horário do dia ou a uma quantidade limite de visitas por dia ou por arquivo... Mas isso vai ficar pra um outro dia.</p>
<p>Pra quem gostou do assunto e quer saber mais, sugiro que visite o <a title="The Web Robots Pages" href="http://www.robotstxt.org/" target="_blank">site oficial</a> do dito cujo.</p>
<p>Espero que tenham gostado... Qualque dúvida ou elogio é só falar! E não esqueçam de assinar o <a href="http://feeds2.feedburner.com/ThiagoBelem/Blog" target="_blank">RSS do Blog</a>.</p>
