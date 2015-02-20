---
layout: post
title: Criando um sistema de logins com classe no PHP – Parte 3
excerpt: Terceira parte do tutorial que ensina a criar um sistema de login sólido,
  leve e completo... Totalmente customizável e de fácil implementação. Sistema feito
  para rodar em PHP 4 e PHP 5, usando banco de dados em MySQL e Orientação a Objetos.

date: '2010-01-13 17:33:33 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Login
---
Opa opa opa! Vamos continuar hoje com a terceira parte do nosso tutorial de "Criando um sistema de logins com classe no PHP"...

Já passamos vitoriosos pela [Parte 2](/criando-um-sistema-de-logins-com-classe-no-php-parte-2) e hoje vamos fazer o método que usaremos para verificar se um usuário está logado e o método que usaremos para deslogar o usuário... A boa notícia é que depois da aula de hoje a classe estará pronta para vocês usarem em vossos sites, lembrando sempre que o importante aqui é que vocês aprendam como fazer e não apenas copiem o código e usem.

Vamos começar fazendo uma correção  que o <em>Leo Baiano</em> sugeriu no método <strong>validaUsuario()</strong> criado na <strong>Parte 1</strong>... A mudança vai acontecer entre a linha 87 e a linha 96:


<div data-gist-id="d841ebcac8cbc91d8981" data-gist-show-loading="false"></div>

Mudaremos a consulta e outras três linhas depois:


<div data-gist-id="35e7bc32f2d7dda2ccfb" data-gist-show-loading="false"></div>

Essa mudança foi necessária por causa de um probleminha com a função mysql_result() que tem dificuldades de identificar qual resultado nós queremos... Com esse ajuste tudo irá funcionar perfeitamente.

 

Agora nós iremos começar a criar o método que verifica se há um usuário logado... Ele irá retornar TRUE quando um usuário estiver logado e retornará FALSE em qualquer situação que indique que não há um usuário logado, por isso precisamos verificar todas as possibilidades:


<div data-gist-id="558ea2ca5713faef9349" data-gist-show-loading="false"></div>

Primeiro nós verificamos a necessidade de iniciar a sessão e lógo após isso iremos verificar se existe o valor "logado" na sessão:


<div data-gist-id="27a9f75dbc5f17bc55e4" data-gist-show-loading="false"></div>

Pra quem não lembra, esse valor <strong>$this->prefixoChaves . 'logado'</strong> foi criado pelo método <strong>logaUsuario()</strong>.

Agora nós precisamos verificar (caso seja necessário) o cookie que contém as informações (usuário, IP e navegador) do usuário para ver se elas batem com o que está armazenado no cookie:


<div data-gist-id="f2b6948b6e066a4591ac" data-gist-show-loading="false"></div>

Caso haja o cookie, precisamos criar novamente uma string encriptada contendo as informações do usuário para checar com o valor salvo no cookie:


<div data-gist-id="8b8e9e30fe3a11d03ca5" data-gist-show-loading="false"></div>

Feita a verificação do cookie sabemos que, depois disso tudo, o usuário está logado e podemos retornar true e fechar o método..


<div data-gist-id="6e1008bcf3189d3ad5c2" data-gist-show-loading="false"></div>

Terminamos o método que informa se há um usuário logado, agora vamos começar o método que fará o logout do usuário:


<div data-gist-id="23fca7b9387c1c1c59b6" data-gist-show-loading="false"></div>

O primeiro passo do logout é iniciar a sessão e remover todos os valores da sessão...


<div data-gist-id="d2cdd45f9f2a29cc9d55" data-gist-show-loading="false"></div>

Repare que entre a linha 236 e 242 fizemos uma coisa interessante: removemos da sessão apenas os valores que pertencerem ao nosso sistema de login... Muita gente usa um simples <strong>session_destroy()</strong> para acabar com a sessão, mas se o seu site salvar valores na sessão não podemos simplesmente apagá-los, concorda? :)

 

Por isso nós fazemos uma verificação a mais, que checa se ainda existem valores na sessão e [caso não exista nada] usamos o <strong>session_destroy()</strong> e depois removemos o cookie que identifica qual sessão é de qual visitante:


<div data-gist-id="8c1ae9effddbe4cb1214" data-gist-show-loading="false"></div>

Agora o último passo do logout é remover o cookie que armazena as informações do visitante:


<div data-gist-id="9f153852b0c859de4f49" data-gist-show-loading="false"></div>

Terminando o método poremos retornar o valor booleano (true ou false) que informa se o usuário foi deslogado com sucesso... Existe forma melhor de fazer isso do que verificando se não há um usuário logado?


<div data-gist-id="da085f3e2ee63cdf98f8" data-gist-show-loading="false"></div>

E a nossa classe de controle e gerencia de usuários logados está completa! :D

Espero realmente que tenham <strong>gostado e aprendido</strong> com essa sequencia de tutoriais.

Abraços e até a próxima!

