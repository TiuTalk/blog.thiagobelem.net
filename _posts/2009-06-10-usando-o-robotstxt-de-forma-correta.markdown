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
Robô (em informática / WEB) é uma ferramenta automática que fica percorrendo sites e coletando informações, verificando se houveram alterações ou validando suas informações.

A princípio os robôs (robots) podem acessar qualquer página/conteúdo/imagem do seu site sem que você tenha que dar permissão para tal. Mas você pode criar um arquivinho chamado robots.txt na raíz do seu site e, dentro dele, escrever algumas regrinhas que te ajudarão a controlar o que os robôs fazem no seu site.

Imagine o robots.txt como uma lista de convidados para uma festa... Se não tá na lista não entra. A única diferenças é que com o robots.txt não há penetras. Você pode bloquear tanto o site inteiro como documentos e arquivos específicos, facilitando assim o controle de "quem entra" no seu site.

### Criando o seu robots.txt
Suponhamos que você tenha um arquivo chamado confidencial.html na raiz do seu site e você não quer que os indexadores dos sistemas de buscas e nenhum outro tipo de robô tenha acesso a esse arquivo... É só colocar isso aqui no seu robots.txt:


<div data-gist-id="22ced017091e1e83bc51" data-gist-show-loading="false"></div>

Isso fará com que nenhum robot consiga acessar o arquivo especificado... Mas você também quer bloquear uma pasta do seu site para que nenhum robozinho possa entrar e ver algum arquivo dentro dela, então é só fazer assim:


<div data-gist-id="a0d7196e4fa6a71261c9" data-gist-show-loading="false"></div>

### Comentários no robots.txt
Se você é uma pessoa <span style="text-decoration: line-through;">metódica</span> organizada e quer colocar comentários no seu robots é só usar o caractere "tralha" (#) para isso, dessa forma:


<div data-gist-id="c4613c12a1631fa93b5b" data-gist-show-loading="false"></div>

### Bloqueando um site inteiro
Tá com a pá virada e quer bloquear o acesso completo de todos os robôs ao seu site? Não precisa tirar ele do ar, e só fazer isso:


<div data-gist-id="72ac684edc18a510993e" data-gist-show-loading="false"></div>

### Criando a lista VIP da festa
Tem gente que prefere bloquear todo mundo e permitir só alguns, e com o robots.txt não é diferente:


<div data-gist-id="8bf0b5063cf3a041dec4" data-gist-show-loading="false"></div>

Isso fará com que apenas os dois arquivos especificados e a pasta sejam acessíveis, o restante será bloqueado.

--

Ainda existem outras regras que limitam o acesso dos robôs a um certo horário do dia ou a uma quantidade limite de visitas por dia ou por arquivo... Mas isso vai ficar pra um outro dia.

Pra quem gostou do assunto e quer saber mais, sugiro que visite o [site oficial](http://www.robotstxt.org/) do dito cujo.

Espero que tenham gostado... Qualque dúvida ou elogio é só falar! E não esqueçam de assinar o [RSS do Blog](http://feeds2.feedburner.com/ThiagoBelem/Blog).

