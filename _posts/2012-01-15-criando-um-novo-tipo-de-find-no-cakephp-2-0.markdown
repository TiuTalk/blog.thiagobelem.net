---
layout: post
title: Criando um novo tipo de find() no CakePHP 2.0

date: '2012-01-15 21:44:30 -0200'
categories:
- Desenvolvimento
- PHP
- CakePHP
- Orientação a objetos
tags:
- PHP
- CakePHP
- Desenvolvimento
- cakephp 2.0
- find
---
<p>Recentemente comecei a trabalhar num projeto onde a maior parte dos models tem um campo "published", que servirá para controlar qual conteúdo entra ou não no site externo... E eu não acho muito prático ficar colocando <code>"published" => true</code> em todas as conditions do site.</p>
<p>Foi aqui que tive a idéia de criar o <code>$Model->find('published')</code>, que funciona da mesma forma que o <code>$Model->find('all')</code> mas inclui a condição internamente.</p>
<p>A <a href="http://book.cakephp.org/2.0/en/models/retrieving-your-data.html#creating-custom-find-types" title="Creating custom find types" target="_blank">documentação</a> é bem simples, e o resultado da minha implementação (que estou usando no meu projeto) é mais ou menos assim:</p>
<p>[gist id="1630250"]</p>
<p>A lógica é bem simples.. precisamos:</p>
<ol>
<li>Definir um método chamado <strong>"_findPublished"</strong> que será rodado antes e depois da consulta</li>
<li>Retornamos os resultados encontrados caso ele tenha sido executado após a consulta ($state == after)</li>
<li>Verificamos se o model tem uma coluna <strong>"published"</strong> e, caso tenha, incluímos a condição na $query</li>
</ol>
<p>Agora eu posso buscar apenas os posts publicados de uma forma bem mais padronizada e elegante: <code>$this->Post->find('published');</code></p>
<p>O método <code>escapeField(field)</code> (<a href="http://book.cakephp.org/2.0/en/models/additional-methods-and-properties.html#model-escapefield-string-field-null-string-alias-null" target="_blank">doc</a>) recebe um nome de coluna e retorna no formato <strong>Model.coluna</strong>, no meu exemplo ficaria algo como <strong>Post.published</strong>.</p>
<p>Com isso você pode criar vários tipos de find, como por exemplo: <code>$Model->find('active')</code>, <code>$Model->find('inactive')</code> ou até <code>$Model->find('urgent')</code>, manipulando as condições extras internamente e deixando a sua aplicação muito mais organizada.</p>
<p>Não se esqueça que você pode criar um tipo de find pra todos os models (no AppModel) ou pra apenas um model, dentro dele.</p>
<p>E aí, gostou? :)</p>
