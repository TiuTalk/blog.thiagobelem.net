---
layout: post
title: Como criar um Sistema de Login com Níveis de Permissão
excerpt: Aprenda como é a criação de um sistema de login com níveis de acesso e entenda
  como tudo funciona desde a criação do banco de dados até a proteção das páginas
  individualmente.

date: '2009-07-24 10:14:29 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags:
- PHP
- MySQL
- Login
---
Fala pessoal!

Hoje acordei cedo e resolvi criar um novo artigo explicando como se faz um sistema de login passo-a-passo, que nem eu fiz o tutorial sobre [como funciona o upload e validação de arquivos](/upload-de-arquivos-como-tudo-funciona) no PHP.

O meu intuito nesse artigo não é entregar um script pronto mas sim te mostrar o "caminho das pedras" enquanto <strong>você</strong> é quem criará o seu próprio sistema.

Versões utilizadas nesse artigo: <strong>PHP 5.2.9</strong> e <strong>MySQL 5.0.5</strong>.

O nosso sistema consistirá em um login simples, validado por usuário e senha (encriptada) contra uma tabela no banco de dados e armazenando os dados na sessão. Haverão dois níveis de acesso para os nossos usuários: normal (1) e administrador (2).

<h3>Criando a Tabela MySQL</h3>
Você pode executar esse código MySQL para criar a nossa tabela de usuários que tem 7 campos: id, nome, usuario, senha, niveis, ativo e cadastro:

<div data-gist-id="737e6aec868203d58180" data-gist-show-loading="false"></div>

Com isso você já tem uma tabela pronta para o nosso tutorial... Rode esse script se quiser alimentar a tabela com alguns usuários de teste:

<div data-gist-id="8ff7d1f8101b746af418" data-gist-show-loading="false"></div>

Como vocês podem perceber, o nosso campo de senha tem 40 caracteres e quando cadastramos os usuários testes usamos <strong style="color: white; background: gray">SHA1('{senha}')</strong> isso significa que usaremos uma senha encriptada... Se você quiser saber mais sobre sha1 veja esse artigo: [Criptografia no PHP usando md5, sha1 e base64](/criptografia-no-php-usando-md5-sha1-e-base64).



<h3>O formulário de Login em XHTML</h3>
Vamos criar agora o nosso formulário que será onde o visitante entrará com os dados e será mandado para a pagina validacao.php onde os dados serão validados (ohh).


<div data-gist-id="6e9fa521185de713afbb" data-gist-show-loading="false"></div>

Como esse artigo não é uma aula sobre formulários e método POST eu vou pular a parte que fala sobre os names desses inputs e a relação deles com o PHP em si.



<h3>A validação dos dados</h3>
Já temos o banco de dados e o formulário de login... Agora vamos começar a fazer a validação. Os próximos códigos deverão ser colocados dentro do <strong style="color: white; background: gray">validacao.php</strong> que irá tratar os dados recebidos do formulário:

Primeiro de tudo nós precisamos verificar se o usuário de fato preencheu algo no formulário, caso contrário mandamos ele de volta para o <strong style="color: white; background: gray">index.php</strong>:


<div data-gist-id="9faed09002708b75e5d1" data-gist-show-loading="false"></div>

Com isso, todo código que vier depois desse if estará seguro de que os dados foram preenchidos no formulário.

Agora nós iremos abrir uma conexão com o MySQL mas essa conexão pode ser feita de outra forma, até antes do if se você preferir... Depois de abrir a conexão nós iremos transmitir os dois valores inseridos pelo visitante (usuário e senha) para novas variáveis e usaremos o <strong style="color: orange; background: gray">mysql_real_escape_string()</strong> para evitar erros no MySQL.


<div data-gist-id="36326b2ba32ad98f3e7d" data-gist-show-loading="false"></div>

Agora é hora de validar os dados contra a tabela de usuários:


<div data-gist-id="f339b7a09df0ca1d814d" data-gist-show-loading="false"></div>

Repare que estamos buscando registros que tenham o usuário igual ao digitado pelo visitante e que tenham uma senha igual a versão SHA1 da senha digitada pelo visitante... Também buscamos apenas por registros de usuários que estejam ativos, assim quando você precisar remover um usuário do sistema, mas não pode simplesmente excluir o registro é só trocar o valor da coluna ativo pra zero. ;)

A consulta gerada fica mais ou menos assim:

<div data-gist-id="363102d5073fbf0366b0" data-gist-show-loading="false"></div>

Depois de rodar a consulta (query) nós verificamos se o número de resultados encontrados (ou não) é diferente de um, caso seja é exibida uma mensagem de erro acompanhada de um exit que finaliza o script... Caso ele encontre apenas um resultado nós temos o nosso usuário e já puxamos o seu ID, nome e nível de acesso do banco de dados.



<h3>Salvando os dados na sessão</h3>
Agora nós precisamos salvar os dados encontrados na sessão pois eles serão utilizados mais tarde, em outras páginas e eles precisam "persistir" até lá... Depois de salvar os dados na sessão nós iremos redirecionar o visitante para uma página restrita:


<div data-gist-id="314cb01452f029e86348" data-gist-show-loading="false"></div>



<h3>Verificando se o usuário está logado</h3>
Nosso sistema de login está quase completo! Agora só precisamos verificar se o usuário está logado no sistema e se o seu o nível de acesso condiz com o da página... Vamos agora escrever um pequeno bloco de PHP no início do arquivo <strong style="color: white; background: gray">restrito.php</strong> (que só deve ser acessado por usuários logados):


<div data-gist-id="d8d3888b13aad7bb8736" data-gist-show-loading="false"></div>

Pronto meu amigo! O seu sistema de login está pronto para funcionar... Só vamos fazer alguns incrementos para ele ficar mais "usável"... Agora você vai ver como fazer a verificação de usuário logado e de nível de acesso, por exemplo para uma página onde apenas os administradores possam ter acesso:


<div data-gist-id="5040bea5de33e6de7067" data-gist-show-loading="false"></div>



<h3>Código de Logout</h3>
O arquivo <strong style="color: white; background: gray">logout.php</strong> é tão simples que pode ter uma linha só:

<div data-gist-id="36188a55a1d7e45b7f6e" data-gist-show-loading="false"></div>

Ou se você preferir, uma versão mais extensa:

<div data-gist-id="a17664a8f96da3c21548" data-gist-show-loading="false"></div>

--

Quem não conseguir fazer um sistema de login depois dessa aula não vai ganhar batata frita no fim do dia! :D

Pra quem quiser, aqui tem um [RAR para download](/arquivos/2009/07/login20090724.rar) com os arquivos desse artigo.

--

Veja [aqui](/criando-um-sistema-de-logins-com-classe-no-php-parte-1) como criar um <strong>sistema de login usando classes</strong> (Orientação a Objetos) e que funciona no PHP 4 e PHP 5.

