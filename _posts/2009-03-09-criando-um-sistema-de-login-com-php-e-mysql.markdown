---
layout: post
title: Criando um sistema de login com PHP e MySQL
excerpt: Exemplo de script “pronto para uso” de um sistema de login completo para
  você usar no seu site, totalmente cofigurável!

date: '2009-03-09 06:01:23 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags: []
---
<p>Hoje vou ensinar a criar um sistema de login <strong>simples</strong> usando PHP e MySQL.</p>
<p>É recomendável que você já tenha um conhecimento prévio de HTML e, se possível, PHP e MySQL para tornar as coisas mais fáceis.</p>
<p>Nosso sistema será bem simples: um arquivo chamado <span style="color: #ff0000;">seguranca.php</span>, que deverá ser incluído no topo do seu site (em todas as páginas) e que faz a conexão com o banco de dados e que possui algumas funções usadas para redirecionar o visitante para o formulário de login (<span style="color: #3366ff;">login.php</span>) caso ele não esteja logado.</p>
<p>Vamos ao trabalho:</p>
<p>O que iremos definir primeiro é a tabela usada para armazenar os usuários do sistema:</p>
<p>[code language="sql"]<br />
DROP TABLE IF EXISTS `usuarios`;<br />
CREATE TABLE IF NOT EXISTS `usuarios` (<br />
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,<br />
`nome` varchar(100) NOT NULL,<br />
`usuario` varchar(50) NOT NULL,<br />
`senha` varchar(50) NOT NULL,<br />
PRIMARY KEY (`id`),<br />
UNIQUE KEY `usuario` (`usuario`)<br />
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;<br />
[/code]</p>
<p>Execute esse bloco SQL no seu banco de dados para criar a tabela usada pelo sistema.</p>
<p>Depois disso, vamos ao formulário de login que você colocará dentro de um arquivo chamado <span style="color: #3366ff;">login.php</span>:</p>
<p>[code language="html"]<br />
&lt;form method=&quot;post&quot; action=&quot;valida.php&quot;&gt;<br />
&lt;label&gt;Usuário&lt;/label&gt;<br />
&lt;input type=&quot;text&quot; name=&quot;usuario&quot; maxlength=&quot;50&quot; /&gt;</p>
<p>&lt;label&gt;Senha&lt;/label&gt;<br />
&lt;input type=&quot;password&quot; name=&quot;senha&quot; maxlength=&quot;50&quot; /&gt;</p>
<p>&lt;input type=&quot;submit&quot; value=&quot;Entrar&quot; /&gt;<br />
&lt;/form&gt;<br />
[/code]</p>
<p>Esse formulário, com apenas dois campos, manda pra página <span style="color: #3366ff;">valida.php</span>, que é um pequeno PHP que receberá os dados enviados pelo formulário, fará a validação deles e mandará o visitante ou pra página interna (<span style="color: #3366ff;">index.php</span>) ou de volta pra página de login (<span style="color: #3366ff;">login.php</span>).</p>
<p>Esse é o codigo fonte do arquivo <span style="color: #3366ff;">valida.php</span>:</p>
<p>[code language="php"]<br />
// Inclui o arquivo com o sistema de segurança<br />
include(&quot;seguranca.php&quot;);</p>
<p>// Verifica se um formulário foi enviado<br />
if ($_SERVER['REQUEST_METHOD'] == 'POST') {<br />
// Salva duas variáveis com o que foi digitado no formulário<br />
// Detalhe: faz uma verificação com isset() pra saber se o campo foi preenchido<br />
$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : '';<br />
$senha = (isset($_POST['senha'])) ? $_POST['senha'] : '';</p>
<p>// Utiliza uma função criada no seguranca.php pra validar os dados digitados<br />
if (validaUsuario($usuario, $senha) == true) {<br />
// O usuário e a senha digitados foram validados, manda pra página interna<br />
header(&quot;Location: index.php&quot;);<br />
} else {<br />
// O usuário e/ou a senha são inválidos, manda de volta pro form de login<br />
// Para alterar o endereço da página de login, verifique o arquivo seguranca.php<br />
expulsaVisitante();<br />
}<br />
}<br />
[/code]</p>
<p>A estrutura do seu site, até esse ponto, deve estar dessa forma:</p>
<p style="padding-left: 30px;"><span style="color: #000000;">../pasta_do_seu_site/index.php</span> » Página intera a ser protegida<br />
<span style="color: #000000;">../pasta_do_seu_site/login.php</span> » Página com o formulário de login<br />
<span style="color: #000000;">../pasta_do_seu_site/valida.php</span> » Página que faz a validação dos dados do formulário</p>
<p>Agora vamos criar o arquivo <span style="color: #ff0000;">seguranca.php</span> na mesma pasta dos demais arquivos:</p>
<p>[code language="php"]<br />
/**<br />
* Sistema de segurança com acesso restrito<br />
*<br />
* Usado para restringir o acesso de certas páginas do seu site<br />
*<br />
* @author Thiago Belem &lt;contato@thiagobelem.net&gt;<br />
* @link http://thiagobelem.net/<br />
*<br />
* @version 1.0<br />
* @package SistemaSeguranca<br />
*/</p>
<p>//  Configurações do Script<br />
// ==============================<br />
$_SG['conectaServidor'] = true;    // Abre uma conexão com o servidor MySQL?<br />
$_SG['abreSessao'] = true;         // Inicia a sessão com um session_start()?</p>
<p>$_SG['caseSensitive'] = false;     // Usar case-sensitive? Onde 'thiago' é diferente de 'THIAGO'</p>
<p>$_SG['validaSempre'] = true;       // Deseja validar o usuário e a senha a cada carregamento de página?<br />
// Evita que, ao mudar os dados do usuário no banco de dado o mesmo contiue logado.</p>
<p>$_SG['servidor'] = 'localhost';    // Servidor MySQL<br />
$_SG['usuario'] = 'root';          // Usuário MySQL<br />
$_SG['senha'] = '';                // Senha MySQL<br />
$_SG['banco'] = 'test';            // Banco de dados MySQL</p>
<p>$_SG['paginaLogin'] = 'login.php'; // Página de login</p>
<p>$_SG['tabela'] = 'usuarios';       // Nome da tabela onde os usuários são salvos<br />
// ==============================</p>
<p>// ======================================<br />
//   ~ Não edite a partir deste ponto ~<br />
// ======================================</p>
<p>// Verifica se precisa fazer a conexão com o MySQL<br />
if ($_SG['conectaServidor'] == true) {<br />
$_SG['link'] = mysql_connect($_SG['servidor'], $_SG['usuario'], $_SG['senha']) or die(&quot;MySQL: Não foi possível conectar-se ao servidor [&quot;.$_SG['servidor'].&quot;].&quot;);<br />
mysql_select_db($_SG['banco'], $_SG['link']) or die(&quot;MySQL: Não foi possível conectar-se ao banco de dados [&quot;.$_SG['banco'].&quot;].&quot;);<br />
}</p>
<p>// Verifica se precisa iniciar a sessão<br />
if ($_SG['abreSessao'] == true) {<br />
session_start();<br />
}</p>
<p>/**<br />
* Função que valida um usuário e senha<br />
*<br />
* @param string $usuario - O usuário a ser validado<br />
* @param string $senha - A senha a ser validada<br />
*<br />
* @return bool - Se o usuário foi validado ou não (true/false)<br />
*/<br />
function validaUsuario($usuario, $senha) {<br />
global $_SG;</p>
<p>$cS = ($_SG['caseSensitive']) ? 'BINARY' : '';</p>
<p>// Usa a função addslashes para escapar as aspas<br />
$nusuario = addslashes($usuario);<br />
$nsenha = addslashes($senha);</p>
<p>// Monta uma consulta SQL (query) para procurar um usuário<br />
$sql = &quot;SELECT `id`, `nome` FROM `&quot;.$_SG['tabela'].&quot;` WHERE &quot;.$cS.&quot; `usuario` = '&quot;.$nusuario.&quot;' AND &quot;.$cS.&quot; `senha` = '&quot;.$nsenha.&quot;' LIMIT 1&quot;;<br />
$query = mysql_query($sql);<br />
$resultado = mysql_fetch_assoc($query);</p>
<p>// Verifica se encontrou algum registro<br />
if (empty($resultado)) {<br />
// Nenhum registro foi encontrado =&gt; o usuário é inválido<br />
return false;</p>
<p>} else {<br />
// O registro foi encontrado =&gt; o usuário é valido</p>
<p>// Definimos dois valores na sessão com os dados do usuário<br />
$_SESSION['usuarioID'] = $resultado['id']; // Pega o valor da coluna 'id do registro encontrado no MySQL<br />
$_SESSION['usuarioNome'] = $resultado['nome']; // Pega o valor da coluna 'nome' do registro encontrado no MySQL</p>
<p>// Verifica a opção se sempre validar o login<br />
if ($_SG['validaSempre'] == true) {<br />
// Definimos dois valores na sessão com os dados do login<br />
$_SESSION['usuarioLogin'] = $usuario;<br />
$_SESSION['usuarioSenha'] = $senha;<br />
}</p>
<p>return true;<br />
}<br />
}</p>
<p>/**<br />
* Função que protege uma página<br />
*/<br />
function protegePagina() {<br />
global $_SG;</p>
<p>if (!isset($_SESSION['usuarioID']) OR !isset($_SESSION['usuarioNome'])) {<br />
// Não há usuário logado, manda pra página de login<br />
expulsaVisitante();<br />
} else if (!isset($_SESSION['usuarioID']) OR !isset($_SESSION['usuarioNome'])) {<br />
// Há usuário logado, verifica se precisa validar o login novamente<br />
if ($_SG['validaSempre'] == true) {<br />
// Verifica se os dados salvos na sessão batem com os dados do banco de dados<br />
if (!validaUsuario($_SESSION['usuarioLogin'], $_SESSION['usuarioSenha'])) {<br />
// Os dados não batem, manda pra tela de login<br />
expulsaVisitante();<br />
}<br />
}<br />
}<br />
}</p>
<p>/**<br />
* Função para expulsar um visitante<br />
*/<br />
function expulsaVisitante() {<br />
global $_SG;</p>
<p>// Remove as variáveis da sessão (caso elas existam)<br />
unset($_SESSION['usuarioID'], $_SESSION['usuarioNome'], $_SESSION['usuarioLogin'], $_SESSION['usuarioSenha']);</p>
<p>// Manda pra tela de login<br />
header(&quot;Location: &quot;.$_SG['paginaLogin']);<br />
}<br />
[/code]</p>
<p>Não vou poder explicar todas as funções do arquivo pq é muita coisa.. Mas todas elas estão devidamente comentadas e documentadas... É só olhar.</p>
<p>Com esse arquivos nós já nos conectamos automaticamente ao servidor MySQL, então se você usar outra forma pra fazer a conexão, vá na parte de configurações do <span style="color: #ff0000;">seguranca.php</span> e defina a variável <span style="color: #ff6600;">$_SG['conectaServidor']</span> pra falso (<em>false</em>). O mesmo acontece pra sessão com a variável <span style="color: #ff6600;">$_SG['abreSessao']</span>.</p>
<p>Agora é só incluir essas linhas no topo de cada arquivo que deverá ter o acesso restrito:</p>
<p>[code language="php"]<br />
include(&quot;seguranca.php&quot;); // Inclui o arquivo com o sistema de segurança<br />
protegePagina(); // Chama a função que protege a página<br />
[/code]</p>
<p>Quando vocês quiserem exibir o nome do usuário logado, é só fazer isso:</p>
<p>[code language="php"]<br />
echo &quot;Olá, &quot; . $_SESSION['usuarioNome'];<br />
[/code]</p>
<p>Veja mais sobre escrever e pegar valores da sessão (coisa que acontece muito nesse sistema de login) no tópico <a href="http://blog.thiagobelem.net/php/aprendendo-a-usar-sessoes-no-php/" target="_blank">Aprendendo a usar sessões no PHP</a>.</p>
<p>Viram como é fácil?</p>
<p>Pra quem quiser um tutorial mais explicado e detalhado recomendo: <a href="http://blog.thiagobelem.net/mysql/como-criar-um-sistema-de-login-com-niveis-de-permissao/" target="_blank">Como criar um Sistema de Login com Níveis de Permissão</a> (passo-a-passo).</p>
<blockquote><p><strong>Nota:</strong> Alguns de vocês devem ter notado que durante essa semana, no post <a href="http://blog.thiagobelem.net/mysql/criando-sistemas-seguros-parte-1/" target="_blank">Criando Sistemas Seguros</a>, falei sobre <strong>não usar</strong> nomes óbvios para tabelas de usuários. Mas esse exemplo é apenas explicativo, você pode mudar o nome da tabela de usuários se preferir e depois é só alterar a variável no bloco de configurações dentro do <span style="color: #ff0000;">seguranca.php</span>.</p></blockquote>
<p>--</p>
<p>Veja <a href="http://blog.thiagobelem.net/mysql/criando-um-sistema-de-logins-com-classe-no-php-parte-1/" title="Criando um sistema de logins com classe no PHP" target="_blank">aqui</a> como criar um <strong>sistema de login usando classes</strong> (Orientação a Objetos) e que funciona no PHP 4 e PHP 5.</p>
