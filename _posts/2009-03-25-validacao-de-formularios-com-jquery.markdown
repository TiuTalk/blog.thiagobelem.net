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
[/exemplo2/](/exemplo2)

Usarei como exemplo um formulário de contato que é o mais comum por ai... Vamos ao passo-a-passo:

Faça o download da última versão do <strong>jQuery </strong>no site: <a href="http://jquery.com/" target="_blank">http://jquery.com/
</a>Faça o download do plugin <strong>Validation </strong>no site: [http://bassistance.de/jquery-plugins/jquery-plugin-validation/](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)

Insira-os dentro do <head> do seu site, da seguinte forma:


<div data-gist-id="551e7d13d1cd828d6acf" data-gist-show-loading="false"></div>

Após isso, criamos um pequeno bloco de CSS para estilizar as mensagens de erro:


<div data-gist-id="1d5dd4b54b29e11ee7e5" data-gist-show-loading="false"></div>

Ainda dentro do <em><strong>head</strong></em>, depois de inserir o <strong>jQuery</strong> e o estilo das mensagens de erro, precisaremos adicionar um bloco de JavaScript contendo instruções para a validação:


<div data-gist-id="f375cb769ac586a82720" data-gist-show-loading="false"></div>

Por fim, inserimos o HTML do formulário na pagina:


<div data-gist-id="8b47a598a9e9efb21c65" data-gist-show-loading="false"></div>

Viram como é fácil? O arquivo final ficou [desta](/exemplo2) forma. Se você preferir pode copiar todo esse código JavaScript para um arquivo .js e incluí-lo no <head> do seu site da mesma forma que fizemos no começo da aula.

Coloquei alguns comentários na parte das instruções de validação para facilitar o entendimento.

Com isso você faz uma validação <em>client-side</em> que ajuda a evitar dados inválidos e campos vazios. Mas preciso lembrar que, por ser <em>client-side</em>, essa validação acontece apenas no computador do visitante e o mesmo pode desativar o JavaScript e a validação toda não irá funcionar. Então não se esqueça de fazer a mesma validação dentro do PHP quando receber os dados.

Veja o exemplo desta aula funcionando:
[/exemplo2/](/exemplo2)

Mais exemplos de validações diferentes podem ser encontrados no site do plugin:
[http://jquery.bassistance.de/validate/demo/](http://jquery.bassistance.de/validate/demo/)

Abraços e até a próxima! :)

