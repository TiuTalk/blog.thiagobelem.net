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

[code language="sql"]
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`nome` varchar(100) NOT NULL,
`usuario` varchar(50) NOT NULL,
`senha` varchar(50) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `usuario` (`usuario`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
[/code]

<p>Execute esse bloco SQL no seu banco de dados para criar a tabela usada pelo sistema.</p>
<p>Depois disso, vamos ao formulário de login que você colocará dentro de um arquivo chamado <span style="color: #3366ff;">login.php</span>:</p>

[code language="html"]
<form method="post" action="valida.php">
<label>Usuário</label>
<input type="text" name="usuario" maxlength="50" /></p>
<p><label>Senha</label>
<input type="password" name="senha" maxlength="50" /></p>
<p><input type="submit" value="Entrar" />
</form>
[/code]

<p>Esse formulário, com apenas dois campos, manda pra página <span style="color: #3366ff;">valida.php</span>, que é um pequeno PHP que receberá os dados enviados pelo formulário, fará a validação deles e mandará o visitante ou pra página interna (<span style="color: #3366ff;">index.php</span>) ou de volta pra página de login (<span style="color: #3366ff;">login.php</span>).</p>
<p>Esse é o codigo fonte do arquivo <span style="color: #3366ff;">valida.php</span>:</p>

[code language="php"]
// Inclui o arquivo com o sistema de segurança
include("seguranca.php");</p>
<p>// Verifica se um formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
// Salva duas variáveis com o que foi digitado no formulário
// Detalhe: faz uma verificação com isset() pra saber se o campo foi preenchido
$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : '';
$senha = (isset($_POST['senha'])) ? $_POST['senha'] : '';</p>
<p>// Utiliza uma função criada no seguranca.php pra validar os dados digitados
if (validaUsuario($usuario, $senha) == true) {
// O usuário e a senha digitados foram validados, manda pra página interna
header("Location: index.php");
} else {
// O usuário e/ou a senha são inválidos, manda de volta pro form de login
// Para alterar o endereço da página de login, verifique o arquivo seguranca.php
expulsaVisitante();
}
}
[/code]

<p>A estrutura do seu site, até esse ponto, deve estar dessa forma:</p>
<p style="padding-left: 30px;"><span style="color: #000000;">../pasta_do_seu_site/index.php</span> » Página intera a ser protegida
<span style="color: #000000;">../pasta_do_seu_site/login.php</span> » Página com o formulário de login
<span style="color: #000000;">../pasta_do_seu_site/valida.php</span> » Página que faz a validação dos dados do formulário</p>
<p>Agora vamos criar o arquivo <span style="color: #ff0000;">seguranca.php</span> na mesma pasta dos demais arquivos:</p>

[code language="php"]
/**
* Sistema de segurança com acesso restrito
*
* Usado para restringir o acesso de certas páginas do seu site
*
* @author Thiago Belem <contato@thiagobelem.net>
* @link http://thiagobelem.net/
*
* @version 1.0
* @package SistemaSeguranca
*/</p>
<p>//  Configurações do Script
// ==============================
$_SG['conectaServidor'] = true;    // Abre uma conexão com o servidor MySQL?
$_SG['abreSessao'] = true;         // Inicia a sessão com um session_start()?</p>
<p>$_SG['caseSensitive'] = false;     // Usar case-sensitive? Onde 'thiago' é diferente de 'THIAGO'</p>
<p>$_SG['validaSempre'] = true;       // Deseja validar o usuário e a senha a cada carregamento de página?
// Evita que, ao mudar os dados do usuário no banco de dado o mesmo contiue logado.</p>
<p>$_SG['servidor'] = 'localhost';    // Servidor MySQL
$_SG['usuario'] = 'root';          // Usuário MySQL
$_SG['senha'] = '';                // Senha MySQL
$_SG['banco'] = 'test';            // Banco de dados MySQL</p>
<p>$_SG['paginaLogin'] = 'login.php'; // Página de login</p>
<p>$_SG['tabela'] = 'usuarios';       // Nome da tabela onde os usuários são salvos
// ==============================</p>
<p>// ======================================
//   ~ Não edite a partir deste ponto ~
// ======================================</p>
<p>// Verifica se precisa fazer a conexão com o MySQL
if ($_SG['conectaServidor'] == true) {
$_SG['link'] = mysql_connect($_SG['servidor'], $_SG['usuario'], $_SG['senha']) or die("MySQL: Não foi possível conectar-se ao servidor [".$_SG['servidor']."].");
mysql_select_db($_SG['banco'], $_SG['link']) or die("MySQL: Não foi possível conectar-se ao banco de dados [".$_SG['banco']."].");
}</p>
<p>// Verifica se precisa iniciar a sessão
if ($_SG['abreSessao'] == true) {
session_start();
}</p>
<p>/**
* Função que valida um usuário e senha
*
* @param string $usuario - O usuário a ser validado
* @param string $senha - A senha a ser validada
*
* @return bool - Se o usuário foi validado ou não (true/false)
*/
function validaUsuario($usuario, $senha) {
global $_SG;</p>
<p>$cS = ($_SG['caseSensitive']) ? 'BINARY' : '';</p>
<p>// Usa a função addslashes para escapar as aspas
$nusuario = addslashes($usuario);
$nsenha = addslashes($senha);</p>
<p>// Monta uma consulta SQL (query) para procurar um usuário
$sql = "SELECT `id`, `nome` FROM `".$_SG['tabela']."` WHERE ".$cS." `usuario` = '".$nusuario."' AND ".$cS." `senha` = '".$nsenha."' LIMIT 1";
$query = mysql_query($sql);
$resultado = mysql_fetch_assoc($query);</p>
<p>// Verifica se encontrou algum registro
if (empty($resultado)) {
// Nenhum registro foi encontrado => o usuário é inválido
return false;</p>
<p>} else {
// O registro foi encontrado => o usuário é valido</p>
<p>// Definimos dois valores na sessão com os dados do usuário
$_SESSION['usuarioID'] = $resultado['id']; // Pega o valor da coluna 'id do registro encontrado no MySQL
$_SESSION['usuarioNome'] = $resultado['nome']; // Pega o valor da coluna 'nome' do registro encontrado no MySQL</p>
<p>// Verifica a opção se sempre validar o login
if ($_SG['validaSempre'] == true) {
// Definimos dois valores na sessão com os dados do login
$_SESSION['usuarioLogin'] = $usuario;
$_SESSION['usuarioSenha'] = $senha;
}</p>
<p>return true;
}
}</p>
<p>/**
* Função que protege uma página
*/
function protegePagina() {
global $_SG;</p>
<p>if (!isset($_SESSION['usuarioID']) OR !isset($_SESSION['usuarioNome'])) {
// Não há usuário logado, manda pra página de login
expulsaVisitante();
} else if (!isset($_SESSION['usuarioID']) OR !isset($_SESSION['usuarioNome'])) {
// Há usuário logado, verifica se precisa validar o login novamente
if ($_SG['validaSempre'] == true) {
// Verifica se os dados salvos na sessão batem com os dados do banco de dados
if (!validaUsuario($_SESSION['usuarioLogin'], $_SESSION['usuarioSenha'])) {
// Os dados não batem, manda pra tela de login
expulsaVisitante();
}
}
}
}</p>
<p>/**
* Função para expulsar um visitante
*/
function expulsaVisitante() {
global $_SG;</p>
<p>// Remove as variáveis da sessão (caso elas existam)
unset($_SESSION['usuarioID'], $_SESSION['usuarioNome'], $_SESSION['usuarioLogin'], $_SESSION['usuarioSenha']);</p>
<p>// Manda pra tela de login
header("Location: ".$_SG['paginaLogin']);
}
[/code]

<p>Não vou poder explicar todas as funções do arquivo pq é muita coisa.. Mas todas elas estão devidamente comentadas e documentadas... É só olhar.</p>
<p>Com esse arquivos nós já nos conectamos automaticamente ao servidor MySQL, então se você usar outra forma pra fazer a conexão, vá na parte de configurações do <span style="color: #ff0000;">seguranca.php</span> e defina a variável <span style="color: #ff6600;">$_SG['conectaServidor']</span> pra falso (<em>false</em>). O mesmo acontece pra sessão com a variável <span style="color: #ff6600;">$_SG['abreSessao']</span>.</p>
<p>Agora é só incluir essas linhas no topo de cada arquivo que deverá ter o acesso restrito:</p>

[code language="php"]
include("seguranca.php"); // Inclui o arquivo com o sistema de segurança
protegePagina(); // Chama a função que protege a página
[/code]

<p>Quando vocês quiserem exibir o nome do usuário logado, é só fazer isso:</p>

[code language="php"]
echo "Olá, " . $_SESSION['usuarioNome'];
[/code]

<p>Veja mais sobre escrever e pegar valores da sessão (coisa que acontece muito nesse sistema de login) no tópico <a href="/aprendendo-a-usar-sessoes-no-php" target="_blank">Aprendendo a usar sessões no PHP</a>.</p>
<p>Viram como é fácil?</p>
<p>Pra quem quiser um tutorial mais explicado e detalhado recomendo: <a href="/como-criar-um-sistema-de-login-com-niveis-de-permissao" target="_blank">Como criar um Sistema de Login com Níveis de Permissão</a> (passo-a-passo).</p>
<blockquote><p><strong>Nota:</strong> Alguns de vocês devem ter notado que durante essa semana, no post <a href="/criando-sistemas-seguros-parte-1" target="_blank">Criando Sistemas Seguros</a>, falei sobre <strong>não usar</strong> nomes óbvios para tabelas de usuários. Mas esse exemplo é apenas explicativo, você pode mudar o nome da tabela de usuários se preferir e depois é só alterar a variável no bloco de configurações dentro do <span style="color: #ff0000;">seguranca.php</span>.</p></blockquote>
<p>--</p>
<p>Veja <a href="/criando-um-sistema-de-logins-com-classe-no-php-parte-1" title="Criando um sistema de logins com classe no PHP" target="_blank">aqui</a> como criar um <strong>sistema de login usando classes</strong> (Orientação a Objetos) e que funciona no PHP 4 e PHP 5.</p>
