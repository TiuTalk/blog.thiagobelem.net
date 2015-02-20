---
layout: post
title: Sistema de login com CakePHP 1.3 e AuthComponent
excerpt: Aprenda a criar - em minutos - um sistema de login no CakePHP utilizando
  o AuthComponent, conheça as variáveis/configurações e como proteger todo ou apenas
  uma parte do seu sistema.

date: '2011-08-15 18:29:33 -0300'
categories:
- Desenvolvimento
- PHP
- Frameworks
- CakePHP
- Artigos
- Segurança
tags:
- PHP
- Login
- CakePHP
- Framework
- Desenvolvimento
- authcomponent
---
Fala pessoal, tudo bom?

Hoje vou tentar explicar pra vocês como configurar o [AuthComponent](http://book.cakephp.org/2.0/en/core-libraries/components/authentication.html) do <strong>CakePHP</strong> pra criar um sistema de login bem simples mas muito eficiente.

Na minha opinião, o maior problemas de usar o Auth em um sistema/aplicação em português é que seu <strong>Model</strong> de usuários vai se chamar "Usuario", "Cliente" ou "Administrador" <strong style="color: red">*</strong> e não "User", então você precisa mudar algumas configurações pra ele [o Auth] funcione de acordo.

<strong style="color: red">*</strong> Esses <strong>níveis de acesso não deveriam definir o nome do model</strong>, que ainda é apenas um usuário.

### Tabela de usuários (clientes)
Se você já tem um model/tabela de usuários pode pular para o próximo passo. Se você ainda não tem, essa é uma estrutura que eu recomendo pra quem usar MySQL:


<div data-gist-id="4d7d6cb0a619ba07dd24" data-gist-show-loading="false"></div>

### Habilitando o AuthComponent
Recomendo que você insira o componente no seu <strong>AppController</strong> pois toda a aplicação será controlada/protegida pelo AuthComponent.

Edite (ou crie) o arquivo <strong>/app/app_controller.php</strong> e defina os componentes que você quer usar, no final da lista coloque o Auth:


<div data-gist-id="d33daa9af2582a4a36ef" data-gist-show-loading="false"></div>

Agora começa a parte de configuração e comunicação com o seu model de usuários, administradores ou seja lá qual for o nome.

### Configurando o AuthComponent
Ainda dentro do seu <strong>AppController</strong> você vai configurar o componente dentro de um método (<em>callback</em>) chamado <strong>beforeFilter</strong>, da seguinte maneira:


<div data-gist-id="f42e0560ea95417193f9" data-gist-show-loading="false"></div>

Com essas configurações definidas o sistema de login está praticamente pronto! :)

### Criando as actions de login e logout
Para criar o formulário de login você precisa definir aquela <strong>action</strong> de login que você especificou ali em cima, na opção <strong>loginAction</strong> (linha 24), por exemplo:

Se o nosso model de usuários se chama <strong>Cliente</strong>, então nossas actions de login e logout estarão no controller de <strong>Clientes</strong>:


<div data-gist-id="a209f6d5bff0a132262a" data-gist-show-loading="false"></div>

A action de login <strong>fica vazia</strong> mesmo, e a action de logout apenas redireciona o visitante para a action definida lá no <strong>logoutRedirect</strong> (linha 36).

### Fomulário de Login
A <strong>view</strong> do formulário de login é extremamente simples e (segundo o nosso exemplo) vai no arquivo <strong>/app/views/clientes/login.ctp</strong>:


<div data-gist-id="84303fddd718b2df5c2c" data-gist-show-loading="false"></div>

Primeiro nós temos o <strong>Session->flash()</strong> que irá exibir as mensagens de erro de autenticação (senha inválida, página restrita e etc.)

Depois nós usamos o <strong>FormHelper</strong> para criar o formulário de login (apontando pra action de login) com os campos de email e senha! :)

### Criando seu primeiro usuário
Feito isso o seu sistema de login está pronto mas você precisa criar um usuário para testá-lo, e fazer isso direto no banco de dados não vai funcionar!

Quando você instalou o CakePHP ele deve ter pedido para você modificar a configuração <strong>Security.salt</strong>, lá na <span class="removed_link" title="https://github.com/cakephp/cakephp/blob/master/app/config/core.php#L204">linha 204 do arquivo <strong>/app/config/core.php</strong></span>, esse valor é utilizado na hora de encriptar a senha de um usuário antes de salvá-lo no banco de dados e consequentemente também é utilizado na hora de você fazer o login. Por isso é o CakePHP quem precisa criar esse usuário no banco de dados, não adianta tentar fazer isso diretamente no banco.

Para criar um usuário é bem simples: é só você fazer isso dentro de alguma action (de algum controller) do CakePHP, utilizando o método save() do seu model de usuários, por exemplo:


<div data-gist-id="d103f48f96b4b7cd1669" data-gist-show-loading="false"></div>

Esse código pode ir dentro do método <strong>beforeFilter</strong> do seu <strong>AppController</strong> (após as instruções de configuração do AuthComponent... Mas <strong>execute esse código apenas uma vez</strong>! Cada vez que esse código for executado o CakePHP irá tentar criar um novo usuário. Execute, verifique no banco de dados se o usuário foi criado e delete o código.

Perceba que utilizamos o método <strong>Auth->password()</strong> que faz exatamente o que expliquei ali em cima, utiliza o <strong>Security.salt</strong> para encriptar a senha passada.

### Protegendo apenas um prefixo <span style="color: gray">(opcional)</span>
Agora todo o seu sistema estará "bloqueado", e você precisa fazer login para acessar qualquer tela.

Caso você queira proteger apenas um [prefixo](http://book.cakephp.org/2.0/en/development/routing.html#prefix-routing) (como por exemplo: admin) e não exigir login enquanto o usuário não estiver acessando um action com esse prefixo, coloque o seguinte código após a configuração do AuthComponent:


<div data-gist-id="50a3787a72c6c4630736" data-gist-show-loading="false"></div>

Isso fará com que o Auth permita acesso à qualquer action quando você não estiver dentro do um prefixo "admin".

Você também precisará mudar algumas configurações do Auth:


<div data-gist-id="d901aa5b5f92eb8f23d2" data-gist-show-loading="false"></div>

Essa mudança é necessária pois você precisa sair e entrar do prefixo "admin" antes e depois do login/logout.

### Pronto! :)
Parabéns, você acaba de fazer um sistema de login utilizando CakePHP! Onde o maior trabalho (na minha opinião) foi criar o usuário, pois configurar o <strong>AuthComponent</strong> e criar o formulário de login é extremamente simples.

### Quer saber mais sobre o CakePHP?
[](http://assando-sites.com.br/)

Inscreva-se no meu <strong>curso online</strong> de CakePHP, o [Assando Sites](http://assando-sites.com.br)!

Você aprende sem sair de casa, aos domingos ou quando preferir assistir os vídeos gravados em aula. :)

Para saber mais informações sobre o curso, [este post aqui no blog](/curso-online-de-cakephp).

Um grande abraço e até a próxima!

