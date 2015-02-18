---
layout: post
status: publish
published: true
title: Aprendendo a usar sessões no PHP
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 296
wordpress_url: http://blog.thiagobelem.net/?p=296
date: '2009-03-07 16:54:56 -0300'
date_gmt: '2009-03-07 19:54:56 -0300'
categories:
- Sem categoria
tags: []
---
<p>Sessão é um recurso do PHP que permite que você salve valores (variáveis) para serem usados ao longo da visita do usuário. Valores salvos na sessão podem ser usados em qualquer parte do script, mesmo em outras páginas do site. São variáveis que permanecem <em>setadas </em>até o visitante fechar o browser ou a sessão ser destruída.</p>
<p>Você precisa iniciar a sessão antes de poder setar ou pegar valores dela. Não há limite de valores salvos na sessão. A sessão é pessoal de cada visitante. Quando um visitante acessa o site, é gerado um cookie no computador dele informando um id único de sessão e o PHP usa esse identificador pra 'organizar' as sessões entre os visitantes do seu site. Mas esse cookie tem validade apenas enquanto o browser estiver aberto.</p>
<p>Você precisa iniciar a sessão antes de iniciar o <em>output</em>, ou seja, antes de retornar QUALQUER coisa pro HTML. Antes de dar qualquer echo ou antes de inserir qualquer HTML fora de blocos php. Geralmente o início da sessão é uma das primeiras coisas no começo de todo site.</p>
<p>A sessão precisa ser iniciada em cada página que você for usar ou definir um valor dela, salvo arquivos que vieram por include, mas é preciso ter iniciado a sessão uma vez antes do include.</p>
<p>Para abrir a sessão é só usar esse comando no PHP:</p>
<p>[code='php']session_start(); // Inicia a sessão[/code]</p>
<p>Depois de iniciada a sessão você pode definir valores dentro dela dessa forma:</p>
<p>[code='php']$_SESSION['usuario'] = 'Thiago';[/code]</p>
<p>E quando você precisar exibir o valor salvo na sessão (provavelmente em outras páginas), é só fazer assim:</p>
<p>[code='php']echo $_SESSION['usuario']; // Resultado: Thiago[/code]</p>
<p>Você pode salvar quantos valores quiser, pode re-definir os valores e usa-los em echos, argumentos de funções e da forma que preferir.</p>
<p>Para deletar uma variável específica da sessão você usa o <strong>unset()</strong>:</p>
<p>[code='php']unset($_SESSION['usuario']); // Deleta uma variável da sessão[/code]</p>
<p>Você também pode destruir toda a sessão de uma só vez, eliminando todas as variáveis salvas nela:</p>
<p>[code='php']session_destroy(); // Destrói toda sessão[/code]</p>
<p>Com isso você tem total controle das sessões no seu site e pode salvar, por exemplo, o nome de usuário depois que ele fez o login e salvar outra variável informando que o usuário está logado. Esta é uma prática muito comum em sistemas de autenticação de usuário.</p>
<p>Espero que tenham gostado e adoraria que usassem o que aprenderam aqui.</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função <a href="http://br.php.net/session_start" target="_blank">session_start()</a></strong> » Inicia a sessão</li>
<li><strong>Função <a href="http://us.php.net/unset" target="_blank">unset()</a></strong> » Deleta uma variável do PHP</li>
<li><strong>Função <a href="http://us.php.net/session_destroy" target="_blank">session_destroy()</a></strong> » Destrói toda uma sessão e suas variáveis</li>
</ul>
