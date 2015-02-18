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

Hoje vou tentar explicar pra vocês como configurar o [AuthComponent](http://book.cakephp.org/pt/view/1250/Autentica%C3%A7%C3%A3o) do <strong>CakePHP</strong> pra criar um sistema de login bem simples mas muito eficiente.

Na minha opinião, o maior problemas de usar o Auth em um sistema/aplicação em português é que seu <strong>Model</strong> de usuários vai se chamar "Usuario", "Cliente" ou "Administrador" <strong style="color: red">*</strong> e não "User", então você precisa mudar algumas configurações pra ele [o Auth] funcione de acordo.

<strong style="color: red">*</strong> Esses <strong>níveis de acesso não deveriam definir o nome do model</strong>, que ainda é apenas um usuário.

<h3>Tabela de usuários (clientes)</h3>
Se você já tem um model/tabela de usuários pode pular para o próximo passo. Se você ainda não tem, essa é uma estrutura que eu recomendo pra quem usar MySQL:


{% highlight sql linenos %}
CREATE TABLE `clientes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `nome` VARCHAR( 100 ) NOT NULL ,
  `email` VARCHAR( 150 ) NOT NULL ,
  `senha` CHAR( 40 ) NOT NULL ,
  `ativo` BOOLEAN NOT NULL DEFAULT '0',
  INDEX ( `email` )
) ;
{% endhighlight %}

<h3>Habilitando o AuthComponent</h3>
Recomendo que você insira o componente no seu <strong>AppController</strong> pois toda a aplicação será controlada/protegida pelo AuthComponent.

Edite (ou crie) o arquivo <strong>/app/app_controller.php</strong> e defina os componentes que você quer usar, no final da lista coloque o Auth:


{% highlight php linenos %}
class AppController extends Controller {

  // Componentes utilizados por toda a aplicação
  public $components = array('Session', 'Cookie', 'Auth');

}
{% endhighlight %}

Agora começa a parte de configuração e comunicação com o seu model de usuários, administradores ou seja lá qual for o nome.

<h3>Configurando o AuthComponent</h3>
Ainda dentro do seu <strong>AppController</strong> você vai configurar o componente dentro de um método (<em>callback</em>) chamado <strong>beforeFilter</strong>, da seguinte maneira:


{% highlight php linenos %}
<?php

class AppController extends Controller {

  public $components = array('Session', 'Cookie', 'Auth');

  public function beforeFilter() {

    // Model de usuários
    $this->Auth->userModel = 'Cliente';

    // Campos de usuário e senha
    $this->Auth->fields = array(
      'username' => 'email',
      'password' => 'senha'
    );

    // Condição de usuário ativo/válido (opcional)
    $this->Auth->userScope = array(
      'Cliente.ativo' => true
    );

    // Action da tela de login
    $this->Auth->loginAction = array(
      'controller' => 'clientes',
      'action' => 'login'
    );

    // Action da tela após o login (com sucesso)
    $this->Auth->loginRedirect = array(
      'controller' => 'clientes',
      'action' => 'home'
    );

    // Action para redirecionamento após o logout
    $this->Auth->logoutRedirect = array(
      'controller' => 'pages',
      'action' => 'display', 'home'
    );

    // Mensagens de erro
    $this->Auth->loginError = __('Usuário e/ou senha incorreto(s)', true);
    $this->Auth->authError = __('Você precisa fazer login para acessar esta página', true);
  }

}
{% endhighlight %}

Com essas configurações definidas o sistema de login está praticamente pronto! :)

<h3>Criando as actions de login e logout</h3>
Para criar o formulário de login você precisa definir aquela <strong>action</strong> de login que você especificou ali em cima, na opção <strong>loginAction</strong> (linha 24), por exemplo:

Se o nosso model de usuários se chama <strong>Cliente</strong>, então nossas actions de login e logout estarão no controller de <strong>Clientes</strong>:


{% highlight php linenos %}
<?php

class ClientesController extends AppController {

  public function login() { }

  public function logout() {
    // Redireciona o usuário para o action do logoutRedirect
    $this->redirect($this->Auth->logout());
  }

}
{% endhighlight %}

A action de login <strong>fica vazia</strong> mesmo, e a action de logout apenas redireciona o visitante para a action definida lá no <strong>logoutRedirect</strong> (linha 36).

<h3>Fomulário de Login</h3>
A <strong>view</strong> do formulário de login é extremamente simples e (segundo o nosso exemplo) vai no arquivo <strong>/app/views/clientes/login.ctp</strong>:


{% highlight php linenos %}
<?php echo $this->Session->flash('auth') ?>
<?php echo $this->Session->flash() ?>

<?php echo $this->Form->create('Cliente', array('action' => 'login')) ?>
<?php echo $this->Form->input('email') ?>
<?php echo $this->Form->input('senha', array('type' => 'password')) ?>
<?php echo $this->Form->end('Entrar') ?>
{% endhighlight %}

Primeiro nós temos o <strong>Session->flash()</strong> que irá exibir as mensagens de erro de autenticação (senha inválida, página restrita e etc.)

Depois nós usamos o <strong>FormHelper</strong> para criar o formulário de login (apontando pra action de login) com os campos de email e senha! :)

<h3>Criando seu primeiro usuário</h3>
Feito isso o seu sistema de login está pronto mas você precisa criar um usuário para testá-lo, e fazer isso direto no banco de dados não vai funcionar!

Quando você instalou o CakePHP ele deve ter pedido para você modificar a configuração <strong>Security.salt</strong>, lá na <span class="removed_link" title="https://github.com/cakephp/cakephp/blob/master/app/config/core.php#L204">linha 204 do arquivo <strong>/app/config/core.php</strong></span>, esse valor é utilizado na hora de encriptar a senha de um usuário antes de salvá-lo no banco de dados e consequentemente também é utilizado na hora de você fazer o login. Por isso é o CakePHP quem precisa criar esse usuário no banco de dados, não adianta tentar fazer isso diretamente no banco.

Para criar um usuário é bem simples: é só você fazer isso dentro de alguma action (de algum controller) do CakePHP, utilizando o método save() do seu model de usuários, por exemplo:


{% highlight php linenos %}
    // Carrega o model de clientes
    $this->loadModel('Cliente');

    // Cria um novo cliente
    $this->Cliente->create();
    $this->Cliente->save(array(
      'nome' => 'Thiago Belem',
      'email' => 'contato@thiagobelem.net',
      'senha' => $this->Auth->password('123456'),
      'ativo' => true
    ));
{% endhighlight %}

Esse código pode ir dentro do método <strong>beforeFilter</strong> do seu <strong>AppController</strong> (após as instruções de configuração do AuthComponent... Mas <strong>execute esse código apenas uma vez</strong>! Cada vez que esse código for executado o CakePHP irá tentar criar um novo usuário. Execute, verifique no banco de dados se o usuário foi criado e delete o código.

Perceba que utilizamos o método <strong>Auth->password()</strong> que faz exatamente o que expliquei ali em cima, utiliza o <strong>Security.salt</strong> para encriptar a senha passada.

<h3>Protegendo apenas um prefixo <span style="color: gray">(opcional)</span></h3>
Agora todo o seu sistema estará "bloqueado", e você precisa fazer login para acessar qualquer tela.

Caso você queira proteger apenas um [prefixo](http://book.cakephp.org/pt/view/950/Roteando-prefixos) (como por exemplo: admin) e não exigir login enquanto o usuário não estiver acessando um action com esse prefixo, coloque o seguinte código após a configuração do AuthComponent:


{% highlight php linenos %}
if (!isset($this->params['admin']) || !$this->params['admin'])
    $this->Auth->allow('*');
{% endhighlight %}

Isso fará com que o Auth permita acesso à qualquer action quando você não estiver dentro do um prefixo "admin".

Você também precisará mudar algumas configurações do Auth:


{% highlight php linenos %}
    // Action da tela de login
    $this->Auth->loginAction = array(
      'admin' => false,
      'controller' => 'clientes',
      'action' => 'login'
    );

    // Action da tela após o login (com sucesso)
    $this->Auth->loginRedirect = array(
      'admin' => true,
      'controller' => 'clientes',
      'action' => 'home'
    );

    // Action para redirecionamento após o logout
    $this->Auth->logoutRedirect = array(
      'admin' => false,
      'controller' => 'pages',
      'action' => 'display', 'home'
    );
{% endhighlight %}

Essa mudança é necessária pois você precisa sair e entrar do prefixo "admin" antes e depois do login/logout.

<h3>Pronto! :)</h3>
Parabéns, você acaba de fazer um sistema de login utilizando CakePHP! Onde o maior trabalho (na minha opinião) foi criar o usuário, pois configurar o <strong>AuthComponent</strong> e criar o formulário de login é extremamente simples.

<h3>Quer saber mais sobre o CakePHP?</h3>
[](http://assando-sites.com.br/)

Inscreva-se no meu <strong>curso online</strong> de CakePHP, o [Assando Sites](http://assando-sites.com.br)!

Você aprende sem sair de casa, aos domingos ou quando preferir assistir os vídeos gravados em aula. :)

Para saber mais informações sobre o curso, [este post aqui no blog](/curso-online-de-cakephp).

Um grande abraço e até a próxima!

