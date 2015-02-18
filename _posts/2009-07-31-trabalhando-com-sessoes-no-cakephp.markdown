---
layout: post
title: Trabalhando com Sessões no CakePHP
excerpt: 'Aprenda a inserir, recuperar e deletar valores da sessão usando os métodos
  do component Session do CakePHP, e o melhor: tudo orientado a objetos! :)'

date: '2009-07-31 00:33:58 -0300'
categories:
- PHP
- CakePHP
- Tutoriais
- Segurança
tags:
- PHP
- Sessions
- CakePHP
- Sessões
---
<p>Fala pessoal,</p>
<p>Pretendo falar um pouquinho mais sobre o <strong>CakePHP</strong> nós próximos dias... Espero que alguém leia e goste! Não vou começar com tutoriais básicos para iniciar com o Cake mas já vou falando de algumas coisas simples que todo mundo vai ler um dia. :)</p>
<p>Hoje vou mostrar como é uso dos <strong>métodos</strong> do component <a href="http://book.cakephp.org/view/173/Sessions" target="_blank">Session</a> que te ajuda a manipular os valores salvos na sessão de forma mais segura e orientada à objetos.</p>
<h3>Pegando todos os valores da sessão</h3>
<p>Normalmente, fora do Cake, você trabalharia com a variável global <strong style="background: gray; color: lime">$_SESSION</strong>... Agora, com o Cake, você nem precisa se lembrar do nome dela... Veja como pegamos todos os valores da sessão de dentro de um <strong>controller</strong>:</p>
<p>[code language="php"]// Exibe todos os valores da sessão
print_r($this->Session->read());[/code]</p>
<p>Se você não criou nem alterou algum valor da sessão o que será exibido vais e paracer com isso:
[code language="php" light="true"]Array ( [Config] => Array ( [rand] => 262820453 [time] => 1161876896 [userAgent] => c7f575cbe5a4b7ad0efb748d54124611 ) )[/code]</p>
<p></p>
<h3>Escrevendo valores na sessão</h3>
<p>Agora é hora de fazer o component Session trabalhar pra gente e escrever alguns valores na sessão... Vamos salvar dois valores:</p>
<p>[code language="php"]// Salva dois valores na sessão
$this->Session->write('usuarioID', 12);
$this->Session->write('usuarioNome', 'Thiago Belem');[/code]
Viram que simples?</p>
<p></p>
<h3>Lendo/recuperando valores da sessão</h3>
<p>Depois de criar valores na sessão você óbviamente vai quere ler esses valores em algum lugar do controller ou da view... No controller faríamos assim:</p>
<p>[code language="php"]// Recupera o valor da sessão
$usuario = $this->Session->read('usuarioID');[/code]
Caso você queira pegar um valor da sessão <strong>dentro da view</strong>, é mais ou menos assim:
[code language="php"]Seja bem vindo, <?php echo $session->read('usuarioNome'); ?>![/code]
Viram que simples? [2]</p>
<p></p>
<h3>Destruindo a sessão</h3>
<p>Quando o seu usuário fizer logout você provavelmente vai precisar/querer destruir a sessão dele para ele não continuar "dentro" do sistema... Então é só verificar se é uma sessão valida e o resto você manda pro espaço:</p>
<p>[code language="php"]// Destruindo a sessão
if ($this->Session->valid()) {
	$this->Session->destroy(); // Destrói
	$this->redirect('/');// Redireciona o usuário
}[/code]
Viram que simples? [3] :D</p>
<p>Existem outras formas e métodos no session component mas essas que eu dei de exemplo são, sem dúvida, as mais usadas e as necessárias para você fazer um bom sistema...</p>
<p>Espero que tenham gostado! :)</p>
