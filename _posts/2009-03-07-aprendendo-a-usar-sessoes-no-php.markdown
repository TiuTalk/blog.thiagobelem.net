---
layout: post
title: Aprendendo a usar sessões no PHP

date: '2009-03-07 16:54:56 -0300'
categories:
- Sem categoria
tags: []
---
Sessão é um recurso do PHP que permite que você salve valores (variáveis) para serem usados ao longo da visita do usuário. Valores salvos na sessão podem ser usados em qualquer parte do script, mesmo em outras páginas do site. São variáveis que permanecem <em>setadas </em>até o visitante fechar o browser ou a sessão ser destruída.

Você precisa iniciar a sessão antes de poder setar ou pegar valores dela. Não há limite de valores salvos na sessão. A sessão é pessoal de cada visitante. Quando um visitante acessa o site, é gerado um cookie no computador dele informando um id único de sessão e o PHP usa esse identificador pra 'organizar' as sessões entre os visitantes do seu site. Mas esse cookie tem validade apenas enquanto o browser estiver aberto.

Você precisa iniciar a sessão antes de iniciar o <em>output</em>, ou seja, antes de retornar QUALQUER coisa pro HTML. Antes de dar qualquer echo ou antes de inserir qualquer HTML fora de blocos php. Geralmente o início da sessão é uma das primeiras coisas no começo de todo site.

A sessão precisa ser iniciada em cada página que você for usar ou definir um valor dela, salvo arquivos que vieram por include, mas é preciso ter iniciado a sessão uma vez antes do include.

Para abrir a sessão é só usar esse comando no PHP:


<div data-gist-id="ba37897628adf60902c1" data-gist-show-loading="false"></div>

Depois de iniciada a sessão você pode definir valores dentro dela dessa forma:


<div data-gist-id="6a949568fedaf08892b6" data-gist-show-loading="false"></div>

E quando você precisar exibir o valor salvo na sessão (provavelmente em outras páginas), é só fazer assim:


<div data-gist-id="3d0d09500b1bf8c90d9f" data-gist-show-loading="false"></div>

Você pode salvar quantos valores quiser, pode re-definir os valores e usa-los em echos, argumentos de funções e da forma que preferir.

Para deletar uma variável específica da sessão você usa o <strong>unset()</strong>:


<div data-gist-id="69c5be725d73783e5fb0" data-gist-show-loading="false"></div>

Você também pode destruir toda a sessão de uma só vez, eliminando todas as variáveis salvas nela:


<div data-gist-id="036be40b4baf6bd5f586" data-gist-show-loading="false"></div>

Com isso você tem total controle das sessões no seu site e pode salvar, por exemplo, o nome de usuário depois que ele fez o login e salvar outra variável informando que o usuário está logado. Esta é uma prática muito comum em sistemas de autenticação de usuário.

Espero que tenham gostado e adoraria que usassem o que aprenderam aqui.

#### Documentação Oficial:
<ul>
<li><strong>Função [session_start()](http://br.php.net/session_start)</strong> » Inicia a sessão</li>
<li><strong>Função [unset()](http://us.php.net/unset)</strong> » Deleta uma variável do PHP</li>
<li><strong>Função [session_destroy()](http://us.php.net/session_destroy)</strong> » Destrói toda uma sessão e suas variáveis</li>
</ul>
