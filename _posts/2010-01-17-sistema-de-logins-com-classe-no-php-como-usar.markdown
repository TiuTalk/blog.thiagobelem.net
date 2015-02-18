---
layout: post
title: Sistema de logins com classe no PHP – Como usar?
excerpt: 'Aprenda a instalar e usar a classe de login que foi criada em várias <a
  title="Busca: Sistema de logins com classe no PHP" href="http://blog.thiagobelem.net/?s=Sistema+de+logins+com+classe+no+PHP">partes</a>
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
<p>Fala gente,</p>
<p>Hoje, domingão, vou mostrar pra vocês como é fácil usar o <a title="Busca: Sistema de logins com classe no PHP" href="http://blog.thiagobelem.net/?s=Sistema+de+logins+com+classe+no+PHP">Sistema de logins com classe no PHP</a> que ensinei a fazer durante as últimas semanas.</p>
<p>Antes de mais nada vocês devem criar um arquivo chamado <strong>usuarios.class.php</strong> em algum lugar do seu site, de preferência dentro de uma pasta chamada "<strong>includes</strong>" ou "<strong>inclues/classes</strong>" pra ficar mais organizado.</p>
<p>Dentro desse arquivo você insere o conteúdo da classe criada durante a <a title="Criando um sistema de logins com classe no PHP – Parte 1" href="http://blog.thiagobelem.net/criando-um-sistema-de-logins-com-classe-no-php-parte-1/" target="_blank">Parte 1</a>, <a title="Criando um sistema de logins com classe no PHP – Parte 2" href="http://blog.thiagobelem.net/criando-um-sistema-de-logins-com-classe-no-php-parte-2/" target="_blank">Parte 2</a>, <a title="Criando um sistema de logins com classe no PHP – Parte 3" href="http://blog.thiagobelem.net/criando-um-sistema-de-logins-com-classe-no-php-parte-3/" target="_blank">Parte 3</a> e <a title="Criando um sistema de logins com classe no PHP – Parte 4" href="http://blog.thiagobelem.net/criando-um-sistema-de-logins-com-classe-no-php-parte-4/" target="_blank">Parte 4</a> do tutorial.</p>
<p>Para que todo mundo entenda como é essa instalação vamos criar uma situação hipotética onde vocês tem um site, nesse site existem as seguintes páginas:</p>
<ul>
<li>A página de login (<strong>login.php</strong>);</li>
<li>A página que irá validar o login e redirecionar o visitante logado (<strong>valida_login.php</strong>);</li>
<li>A página que o usuário acessará para sair do sistema ou fazer o logout (<strong>logout.php</strong>);</li>
<li>A página que é restrita e só pode ser acessada por usuários logados no sistema (<strong>pagina_restrita.php</strong>).</li>
</ul>
<p>Os nomes desses arquivos não são obrigatórios, o que importa é que você entenda onde vai cada código em função do tipo de página... Outra coisa é que essas funções como "validar o login" serão feitas usando a nossa classe.</p>
<p>Agora vamos ao passo-a-passo de como usar a classe:</p>
<h3>1. Incluir a classe nas páginas importantes</h3>
<p>Vocês devem incluir o arquivo <strong>usuarios.class.php</strong> (usando <a href="http://br.php.net/manual/pt_BR/function.require-once.php" target="_blank">require_once()</a> ou <a href="http://br.php.net/manual/pt_BR/function.include-once.php" target="_blank">include_once()</a>) em todas as páginas que terão <strong>alguma ligação</strong> com o sistema de login... Provavelmente serão apenas as páginas que eu listei ali em cima.</p>
<h3>2. Validar o login</h3>
<p>Depois de inserir a classe em todos os arquivos vamos na página que recebe e valida os dados do login (<strong>valida_login.php</strong>) e, logo após "<em>includar</em>" a classe <strong>no começo do arquivo</strong> colocamos também o seguinte código:</p>
<p>[code language="php"]&lt;?php<br />
// Inclui o arquivo com a classe de login<br />
require_once(&quot;includes/classes/usuarios.class.php&quot;);<br />
// Instancia a classe<br />
$userClass = new Usuario();</p>
<p>// Pega os dados vindos do formulário<br />
$usuario = $_POST['usuario'];<br />
$senha = $_POST['senha'];<br />
// Se o campo &quot;lembrar&quot; não existir, o script funcionará normalmente<br />
$lembrar = (isset($_POST['lembrar']) AND !empty($_POST['lembrar']));</p>
<p>// Tenta logar o usuário com os dados<br />
if ( $userClass-&gt;logaUsuario( $usuario, $senha, $lembrar ) ) {<br />
	// Usuário logado com sucesso, redireciona ele para a página restrita<br />
	header(&quot;Location: pagina_restrita.php&quot;);<br />
	exit;<br />
} else {<br />
	// Não foi possível logar o usuário, exibe a mensagem de erro<br />
	echo &quot;&lt;strong&gt;Erro: &lt;/strong&gt;&quot; . $userClass-&gt;erro;<br />
}<br />
?&gt;[/code]</p>
<p>Primeiro nós instanciamos a classe e depois, nas <strong>linhas 8 e 9</strong>, nós pegamos os dados vindos do <strong>formulário de login</strong> (<strong>login.php</strong>) via POST... Após pegar os dados nós tentamos logar o usuário com esses dados, a própria classe já se encarrega de validar os dados, criar a sessão, os cookies e tudo mais... A condição da <strong>linha 12</strong> será válida se o sistema conseguir logar o usuário e falsa se algo der errado ou os dados forem incorretos.</p>
<p>Caso o usuário tenha sido logado com sucesso, o próximo passo seria redirecioná-lo para a página restrita, e foi isso o que fizemos na <strong>linha 14</strong>... :)</p>
<h3>3. Proteger a(s) página(s) restrita(s)</h3>
<p>Agora que nosso login já está sendo validado e redirecionado, precisamos proteger a página registra (ou as páginas, isso depende do seu site)... Vamos novamente no começo do arquivo (<strong>pagina_restrita.php</strong>) e vamos inserir o seguinte código:</p>
<p>[code language="php"]&lt;?php<br />
// Inclui o arquivo com a classe de login<br />
require_once(&quot;includes/classes/usuarios.class.php&quot;);<br />
// Instancia a classe<br />
$userClass = new Usuario();</p>
<p>// Verifica se não há um usuário logado<br />
if ( $userClass-&gt;usuarioLogado() === false ) {<br />
	// Não há um usuário logado, redireciona pra tela de login<br />
	header(&quot;Location: login.php&quot;);<br />
	exit;<br />
}<br />
?&gt;[/code]</p>
<p>Mas é só isso!? Sim! :)</p>
<p>A classe verifica se há um usuário logado, caso não exista um usuário logado ele é redirecionado pro formulário de login.</p>
<h3>4. Página de logout</h3>
<p>Vocês já fizeram a validação do login e a proteção da página restrita... Agora só falta a página de logout!</p>
<p>Vamos criar um arquivo chamado <strong>logout.php</strong> que será acessado quando o usuário quiser sair do sistema, nele inserimos apenas o seguinte código:</p>
<p>[code language="php"]&lt;?php<br />
// Inclui o arquivo com a classe de login<br />
require_once(&quot;includes/classes/usuarios.class.php&quot;);<br />
// Instancia a classe<br />
$userClass = new Usuario();</p>
<p>// Usuário fez logout com sucesso?<br />
if ( $userClass-&gt;logout() ) {<br />
	// Redireciona pra tela de login<br />
	header(&quot;Location: login.php&quot;);<br />
	exit;<br />
}<br />
?&gt;[/code]</p>
<p>O código fará com que o usuário seja deslogado e redirecionado para a tela de login... Quer mais moleza que isso?</p>
<h3>5. Exibindo dados do usuário</h3>
<p>Há! Pensou que tinha acabado?</p>
<p>Para exibir dados do usuário logado, como o nome ou e-mail, você precisa inserir um simples <strong>echo</strong> puxando os dados da sessão, assim:</p>
<p>[code language="php" light="true"]Seja bem vindo(a), &lt;?php echo $_SESSION['usuario_nome']; ?&gt;![/code]</p>
<p>A chave "<strong>usuario_nome</strong>" é composto por duas variantes: a parte "<strong>usuario_</strong>" vem da propriedade <strong>$prefixoChaves</strong> (definida na <strong>linha 49</strong> do <strong>usuarios.class.php</strong>) que estará presente em todos os valores criados pela classe e salvos na sessão... Já a parte "nome" da chave é o nome da campo que você buscou na tabela de usuários, definido na propriedade <strong>$dados</strong> (definida na <strong>linha 37</strong> do <strong>usuarios.class.php</strong>).</p>
<p>Então, se você precisar pegar o ID do usuário você deveria usar <strong>$_SESSION['usuario_id']</strong>.</p>
<p>Fala sério minha gente, assim ficou fácil de mais, não é? Mostre a sua (in)satisfação e deixe seu comentário. :)</p>
<p>Abraços e uma boa noite!</p>
