---
layout: post
status: publish
published: true
title: PHP 5.4 - Novidades e novas funcionalidades
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: O PHP 5.4 traz vários novos recursos, funcionalidades e  melhorias de sintaxe.
  Saiba o que há de novo!
wordpress_id: 2798
wordpress_url: http://blog.thiagobelem.net/?p=2798
date: '2012-10-28 21:07:18 -0200'
date_gmt: '2012-10-28 23:07:18 -0200'
categories:
- Desenvolvimento
- PHP
- Artigos
- Orientação a objetos
tags:
- PHP 5.4
---
<p>Eu sei que o assunto não é novo, já que o <a href="http://php.net/releases/5_4_0.php" target="_blank">PHP 5.4</a> foi lançado <strong>01 de março de 2012</strong> (já já vai fazer um ano!), mas muita gente ainda não sabe o que há de novo e - talvez por isso - ainda não instalou a versão mais recente.</p>
<p>Por isso nesse post resolvi mostrar um pouco de cada uma das <strong>novidades da versão 5.4</strong>.</p>
<p>Lista oficial de novidades: <a href="http://www.php.net/manual/en/migration54.new-features.php">http://www.php.net/manual/en/migration54.new-features.php</a></p>
<h2>O que há de novo? Por que eu deveria atualizar?</h2>
<p>Antes de citar qualquer motivo específico, digo o motivo mais óbvio de todos: segurança e performance!</p>
<h4>Segurança e Performance</h4>
<p>Toda nova versão (seja ela do WordPress, Java ou PHP) traz melhorias significativas à segurança e performance do seu sistema/aplicativo... só isso deveria ser motivo pra você se dar ao trabalho de <strong>manter tudo atualizado na última versão, sempre</strong>. Não atualizar significa assinar o <em>mea culpa</em> caso seu sistema seja invadido.</p>
<h2>Traits (ou características)</h2>
<p>Traits são mecanismos que ajudam (e muito) a <strong>reutilização de código</strong>, e servem perfeitamente para resolver o problema da falta de <strong>herança múltipla</strong>.</p>
<p>Veja mais sobre Traits num outro artigo meu, aqui: <a href="http://blog.thiagobelem.net/php-5-4-traits/">http://blog.thiagobelem.net/php-5-4-traits/</a></p>
<h2>Nova sintaxe para arrays</h2>
<p>Antigamente você criava arrays assim:</p>
<p>[gist id=3970221]</p>
<p>Agora você pode criá-los com uma sintaxe bem mais limpa:</p>
<p>[gist id=3970226]</p>
<p>O comportamento é exatamente o mesmo... E se você é como eu, pode ficar tranquilo que a sintaxe antiga continua funcionando. :)</p>
<h2>Function array dereferencing</h2>
<p>Se você tem uma função/método que retora um array, você precisava colocar o resultado numa variável para poder acessar o índice:</p>
<p>[gist id=3970242]</p>
<p>Agora você pode acessar o índice diretamente na chamada da função:</p>
<p>[gist id=3970245]</p>
<p>Isso vale pra qualquer método ou função que retorne arrays!</p>
<h2>&lt;?="Sempre disponível"?&gt;</h2>
<p>Se você não conhece, essa é a uma forma encurtada de imprimir algo em PHP:</p>
<p>[gist id=3970264]</p>
<p>Porém essa sintaxe só funcionava (até antes da versão 5.4) caso a opção <a href="http://www.php.net/manual/en/ini.core.php#ini.short-open-tag" target="_blank">short_open_tags</a> estivesse habilitada no php.ini, agora essa sintaxe estará disponível independente das suas configurações no php.ini.</p>
<h2>Acesso durante o instanciamento</h2>
<p>Muito parecido com o acesso à índices de arrays, esse novo recurso permite que você acesse atributos e métodos de objetos que estão sendo instanciados, durante o instanciamento:</p>
<p>[gist id=3970279]</p>
<h2>Servidor [de desenvolviemento] embutido</h2>
<p>E por último, mas não menos importante, o PHP 5.4 nos permite usar um servidor embutido para teste e desenvolvimento local, não há mais a necessidade de usar o Apache!</p>
<p>Em breve, farei um artigo falando apenas sobre esse recurso, aguarde.</p>
<h2>Conclusão</h2>
<p>Espero que vocês tenham gostado dessa lista de novidades que você encontra no PHP 5.4... E se você ainda não atualizou seu(s) servidor(es), o que está esperando!? :)</p>
