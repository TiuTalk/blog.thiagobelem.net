---
layout: post
title: Criando LOGs com PHP e MySQL

date: '2009-03-12 22:33:57 -0300'
categories:
- PHP
- MySQL
- Tutoriais
- Segurança
tags: []
---
Fala gente,

Um recurso muito bom de segurança é a criação de <abbr title="Em computação, Log de dados é o termo utilizado para descrever o processo de registro de eventos relevantes num sistema computacional.">LOGs</abbr> que são registro de atividades. Você pode criar registro de todos os tipo de atividades: visitas, cadastros, tentativas de acesso, erros do PHP e muito mais.

O que você vai precisar pra criar um sisteminha simples de LOGs pro seu site é de apenas uma tabela no banco de dados MySQL:


<div data-gist-id="e7c342e7059d9cee8217" data-gist-show-loading="false"></div>

Vale ressaltar que você não precisa gravar os LOGs especificamente no banco de dados, você pode criar arquivos e pastas pra isso também. Falarei sobre como criar arquivos e pastas dinamicamente (pelo PHP) em outro tópico.

Tendo a tabela já criada no seu banco de dados, você só precisa criar uma função para agilizar as coisas:


<div data-gist-id="ca5d2a319eb18c00a162" data-gist-show-loading="false"></div>

Com essa função você pode registrar qualquer tipo de evento no seu MySQL e depois, organizando-os por data e/ou IP saber exatamente o que aconteceu no seu sistema, vindo de onde, e como aconteceu.

Para usar a função e salvar uma mensagem de LOG, é só fazer assim:


<div data-gist-id="88b9469705aad29a362b" data-gist-show-loading="false"></div>

Vale lembrar que o script acima só vai funcionar se você abrir uma conexão com o MySQL e o banco de dados antes de tentar salvar uma mensagem de LOG.

A função criada também retorna true ou false (verdadeiro ou falso) para caso você precise fazer uma verificação se o LOG foi salvo com sucesso:


<div data-gist-id="c154ad966db726048b86" data-gist-show-loading="false"></div>

Sugiro que salvem LOGs - principalmente - de todas as tentativas de login. Salve LOGs também das alterações, cadastros e deleções de registros do sistema (produtos/categorias/lojas/notícias e etc.). Isso vai tornar a sua aplicação mais segura e quando algo der errado você vai poder encontrar "o pai da criança" com mais facilidade.

Se você já tiver feito um sistema de login no seu site (se não, [veja aqui como fazer um](/criando-um-sistema-de-login-com-php-e-mysql)), salve também o usuário atual, como por exemplo:

<p style="text-align: center;"><span style="color: #000000;">"<strong>[ Usuário: Fulano ] Cadastrou uma notícia</strong>"</span>

Com isso, você tem o nome do usuário usado, o IP e a data e hora de onde/quando/como foi executada a ação de cadastro. Muito útil, não?

Até a próxima!

#### Documentação Oficial:
<ul>
<li><strong>Função [date()](http://br2.php.net/manual/en/function.date.php)</strong> » Função para formatar datas</li>
<li><strong>Função [mysql_escape_string()](http://br.php.net/mysql_escape_string)</strong> » Prepara uma string para o MySQL</li>
<li><strong>Função [mysql_query()](http://br.php.net/mysql_query)</strong> » Executa uma query (consulta SQL)</li>
</ul>
