---
layout: post
title: Ambiente de Desenvolvimento para iniciantes
excerpt: Veja uma lista das minhas recomendações sobre o Ambiente de Desenvolvimento
  ideal para quem está começando a aprender/trabalhar com o PHP e/ou o CakePHP. São
  vários programas grátis, leves e pequenos que ajudam (muito) a vida de todo programador.

date: '2009-09-11 02:44:29 -0300'
categories:
- Desenvolvimento
- PHP
- MySQL
- Artigos
- Apache
tags:
- PHP
- MySQL
- Apache
- Ambiente de Desenvolvimento
---
Fala gente,

Esse mês que passou muita gente me perguntou sobre como seria um bom ambiente de desenvolvimento para iniciantes no PHP e/ou CakePHP... Bom, aqui vão algumas recomendações PESSOAIS de programas/versões/aplicações que eu uso, mas não significa que alguém aqui seja obrigado a concordar comigo.

O ambiente do qual falarei é para <strong>Windows</strong> (preferencialmente XP, mas isso não tem importância).

### O Básico
<ul>
<li><strong>Apache</strong> 2.2+</li>
<li><strong>PHP</strong> 5.3+</li>
<li><strong>MySQL</strong> 5.1+</li>
<li><strong>phpMyAdmin</strong> 3.2+</li>
</ul>
Esses são os componentes principais de um ambiente de desenvolvimento... Todos eles podem ser instalados facilmente com o [XAMPP](http://www.apachefriends.org/en/xampp.html) (que tem versões tanto para Windows quanto para Linux).

<strong>Atenção:</strong> as versões ali em cima são as <strong>atuais</strong> e recomendadas HOJE... Amanhã pode vir coisa nova pela frente e isso mudar.

Existem também outros programas que eu uso e facilitam (muito) a minha vida...

### MySQL Workbench
O [nesse post](/modelagem-de-banco-de-dados).

### Eclipse Galileo
Comecei a usar o [Eclipse Galileo](http://www.eclipse.org/galileo/) (<em>free</em>) recentemente como IDE de desenvolvimento para PHP... Adorei! Ele é leve, altamente configurável e tem a capacidade de "ler" todos os arquivos do seu PHP e te ajudar a informar onde cada variável foi definida, ou quais são os argumentos daquela função que você criou a semanas atrás e nem lembra mais onde fica.

### HeidiSQL
O [HeidiSQL](http://www.heidisql.com/) (<em>free</em>) é um "<em>MySQL front-end</em>", seria como um phpMyAdmin via programa (executável) para Windows e Linux... Geralmente uso ele para me conectar a banco de dados remotos que não possuam o phpMyAdmin no servidor.

### Visual SVN Server
Também uso muito o [SVN](http://pt.wikipedia.org/wiki/Svn) para ser instalado no seu computador (e acessado remotamente) para um controle de versão de arquivos e projetos... Ótimo para quando se trabalha em equipe ou se usa mais de um computador pra desenvolver o mesmo projeto.

### Tortoise SVN
Mesmo o Visual SVN tendo a opção de instalação de um <em>SVN Client</em> eu recomendo o uso do [Tortoise SVN](http://tortoisesvn.tigris.org/) (<em>free</em>) para se conectar, receber e enviar arquivos do seu servidor SVN. O Tortoise é o <em>SVN Client</em> mais usado do mundo. Ele se integra perfeitamente ao <em>shell</em> do Windows (menu que aparece quando se usa o botão direito nas pastas/arquivos).

--

Todos esses programas são freeware e alguns são <em>open source</em>... Recomendo que dêem uma olhada em cada um para verem o que acham e tentarem usar também.

Espero que tenham gostado e caso alguém aí tenha alguma outra dica, é só comentar! :)

