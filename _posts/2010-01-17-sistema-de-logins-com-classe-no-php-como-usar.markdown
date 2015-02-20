---
layout: post
title: Sistema de logins com classe no PHP – Como usar?
excerpt: 'Aprenda a instalar e usar a classe de login que foi criada em várias <a
  title="Busca: Sistema de logins com classe no PHP" href="/?s=Sistema+de+logins+com+classe+no+PHP">partes</a>
  e deixe o "conteúdo protegido" [do seu site] realmente protegido por traz de um
  sistema de login baseado em PHP e MySQL e que funciona perfeitamente em PHP 4 e
  PHP 5.'

date: '2010-01-17 20:03:32 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Login
---
Fala gente,

Hoje, domingão, vou mostrar pra vocês como é fácil usar o [Sistema de logins com classe no PHP](/?s=Sistema+de+logins+com+classe+no+PHP) que ensinei a fazer durante as últimas semanas.

Antes de mais nada vocês devem criar um arquivo chamado <strong>usuarios.class.php</strong> em algum lugar do seu site, de preferência dentro de uma pasta chamada "<strong>includes</strong>" ou "<strong>inclues/classes</strong>" pra ficar mais organizado.

Dentro desse arquivo você insere o conteúdo da classe criada durante a [Parte 4](/criando-um-sistema-de-logins-com-classe-no-php-parte-4) do tutorial.

Para que todo mundo entenda como é essa instalação vamos criar uma situação hipotética onde vocês tem um site, nesse site existem as seguintes páginas:

<ul>
<li>A página de login (<strong>login.php</strong>);</li>
<li>A página que irá validar o login e redirecionar o visitante logado (<strong>valida_login.php</strong>);</li>
<li>A página que o usuário acessará para sair do sistema ou fazer o logout (<strong>logout.php</strong>);</li>
<li>A página que é restrita e só pode ser acessada por usuários logados no sistema (<strong>pagina_restrita.php</strong>).</li>
</ul>
Os nomes desses arquivos não são obrigatórios, o que importa é que você entenda onde vai cada código em função do tipo de página... Outra coisa é que essas funções como "validar o login" serão feitas usando a nossa classe.

Agora vamos ao passo-a-passo de como usar a classe:

### 1. Incluir a classe nas páginas importantes
Vocês devem incluir o arquivo <strong>usuarios.class.php</strong> (usando [include_once()](http://br.php.net/manual/pt_BR/function.include-once.php)) em todas as páginas que terão <strong>alguma ligação</strong> com o sistema de login... Provavelmente serão apenas as páginas que eu listei ali em cima.

### 2. Validar o login
Depois de inserir a classe em todos os arquivos vamos na página que recebe e valida os dados do login (<strong>valida_login.php</strong>) e, logo após "<em>includar</em>" a classe <strong>no começo do arquivo</strong> colocamos também o seguinte código:


<div data-gist-id="b77d71909c03c26b900d" data-gist-show-loading="false"></div>

Primeiro nós instanciamos a classe e depois, nas <strong>linhas 8 e 9</strong>, nós pegamos os dados vindos do <strong>formulário de login</strong> (<strong>login.php</strong>) via POST... Após pegar os dados nós tentamos logar o usuário com esses dados, a própria classe já se encarrega de validar os dados, criar a sessão, os cookies e tudo mais... A condição da <strong>linha 12</strong> será válida se o sistema conseguir logar o usuário e falsa se algo der errado ou os dados forem incorretos.

Caso o usuário tenha sido logado com sucesso, o próximo passo seria redirecioná-lo para a página restrita, e foi isso o que fizemos na <strong>linha 14</strong>... :)

### 3. Proteger a(s) página(s) restrita(s)
Agora que nosso login já está sendo validado e redirecionado, precisamos proteger a página registra (ou as páginas, isso depende do seu site)... Vamos novamente no começo do arquivo (<strong>pagina_restrita.php</strong>) e vamos inserir o seguinte código:


<div data-gist-id="682b76c1aa4a324bbc3d" data-gist-show-loading="false"></div>

Mas é só isso!? Sim! :)

A classe verifica se há um usuário logado, caso não exista um usuário logado ele é redirecionado pro formulário de login.

### 4. Página de logout
Vocês já fizeram a validação do login e a proteção da página restrita... Agora só falta a página de logout!

Vamos criar um arquivo chamado <strong>logout.php</strong> que será acessado quando o usuário quiser sair do sistema, nele inserimos apenas o seguinte código:


<div data-gist-id="6ea65e1752998ee616a1" data-gist-show-loading="false"></div>

O código fará com que o usuário seja deslogado e redirecionado para a tela de login... Quer mais moleza que isso?

### 5. Exibindo dados do usuário
Há! Pensou que tinha acabado?

Para exibir dados do usuário logado, como o nome ou e-mail, você precisa inserir um simples <strong>echo</strong> puxando os dados da sessão, assim:


<div data-gist-id="7500abbf79b6acec21a2" data-gist-show-loading="false"></div>

A chave "<strong>usuario_nome</strong>" é composto por duas variantes: a parte "<strong>usuario_</strong>" vem da propriedade <strong>$prefixoChaves</strong> (definida na <strong>linha 49</strong> do <strong>usuarios.class.php</strong>) que estará presente em todos os valores criados pela classe e salvos na sessão... Já a parte "nome" da chave é o nome da campo que você buscou na tabela de usuários, definido na propriedade <strong>$dados</strong> (definida na <strong>linha 37</strong> do <strong>usuarios.class.php</strong>).

Então, se você precisar pegar o ID do usuário você deveria usar <strong>$_SESSION['usuario_id']</strong>.

Fala sério minha gente, assim ficou fácil de mais, não é? Mostre a sua (in)satisfação e deixe seu comentário. :)

Abraços e uma boa noite!

