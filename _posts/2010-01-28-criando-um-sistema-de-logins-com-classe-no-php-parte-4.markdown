---
layout: post
title: Criando um sistema de logins com classe no PHP – Parte 4
excerpt: Continuação da sequencia de tutoriais que te ensina a criar um poderoso sistema
  de login usando classes no PHP. Nessa parte você aprenderá a implementar o sistema
  de "Lembrar minha senha" na classe com exemplos de uso e explicação para todas as
  funcionalidades.

date: '2010-01-28 09:07:17 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Login
---
Olha eu aqui novamente minha gente! :)

Hoje vamos dar continuidade a nossa sequëncia de tutoriais que te ensina a criar um sistema de logins usando classes no PHP.

Na parte de hoje, a Parte 4, vamos fazer inúmeros ajustes e correções na classe além implementar a funcionalidade "Lembrar minha senha".

### Lembrando a minha senha
A funcionalidade "Lembrar minha senha" funciona basicamente da seguinte forma: após o usuário se logar (informando que quer que sua senha seja lembrada) são criados cookies na máquina dele salvando o usuário e a senha do mesmo... Depois, quando o usuário voltar no site e não estiver logado o sistema busca esses cookies e tenta validar os dados, se os dados validarem ele é logado automaticamente no sistema e os cookies são reescritos (para durarem mais tempo).

### Ajustes e correções
Estou desde ontem revisando a classe e fazendo algumas pequenas correções... Não vou listar todas aqui pois acho mais fácil vocês pegarem o PHPs final e darem uma olhada... Prefiro listar aqui rapidamente o que foi preciso fazer e vocês vão dando uma olhada no código:

<ul>
<li>Aumentar as informações nos blocos de comentário (seguindo o padrão do [PHPDoc](http://www.phpdoc.org/));</li>
<li>Remover o prefixo "__" dos métodos protegidos (agora todos os métodos são <strong>públicos</strong>);</li>
<li>Documentar em qual versão a propriedade ou método apareceu na classe;</li>
<li>Ajustar os métodos <strong>usuarioLogado()</strong> e <strong>logaUsuario()</strong> para atender ao sistema de "Lembrar minha senha";</li>
<li>Criar a propriedade <strong>filtraDados</strong> que permite o uso do [mysql_real_escape_string()](http://br.php.net/manual/en/function.mysql-real-escape-string.php) e evita <strong>SQL Injection</strong>;</li>
<li>Criar a propriedade <strong>caseSensitive</strong> que diferencia "casa" de "CaSa" ou "CASA".</li>
<li>Criar a propriedade <strong>cookiePath</strong> que será usada sempre que um cookie for criado ou deletado.</li>
</ul>


### Novas Propriedades
Para a nossa nova funcionalidade precisamos criar uma nova propriedade na nossa classe:

<div data-gist-id="3e6c2da1c87a0b93359a" data-gist-show-loading="false"></div>

Se vocês lerem o comentário vão perceber que um terceiro parâmetro foi adicionado ao método logaUsuario()... É esse terceiro parâmetro que define se os dados serão lembrados pelo o sistema.

### Novo Método - <span style="color: #B40000">lembrarDados()</span>
Vamos criar agora o método lembrarDados() que irá salvar os dados do usuário, criptografados, em cookies:

<div data-gist-id="32da0b8315c89e638027" data-gist-show-loading="false"></div>

Primeiro nós vamos calcular o [UNIX Timestamp](http://pt.wikipedia.org/wiki/Era_Unix) que será a data exata de quando os cookies irão expirar:

<div data-gist-id="6edb2fcb33fd2df36152" data-gist-show-loading="false"></div>

Agora nós iremos encriptar os dados do usuário usando [base64](http://pt.wikipedia.org/wiki/Base64) e adicionar um caractere no início da string criptografada para impedir que ela seja decriptografada pelo usuário (caso ele encontre o valor do cookie):

<div data-gist-id="3e9d0bd09dac0226b2c7" data-gist-show-loading="false"></div>

Agora é só criar os dois cookies e o método está pronto:

<div data-gist-id="507a733aceef9aab0071" data-gist-show-loading="false"></div>

Nosso método que salva os dados em cookies está pronto... Esse método será usado pelo método logaUsuario() após todos os dados serem salvos na sessão.

Agora nós vamos precisar criar um método que verifica os dados (usuario e senha) salvos nos cookies:

### Novo Método - <span style="color: #B40000">verificaDadosLembrados()</span>
Esse método é muito importante pois ele verificará os dados salvos nos cookies <strong>tentando logar o usuário</strong>! Esse método só será chamado quando o usuário tentar acessar uma página protegida e não estiver logado... O proprio método <strong>usuarioLogado()</strong> já fará isso!

Vamos começar:

<div data-gist-id="34a656d98292dbab5199" data-gist-show-loading="false"></div>

Primeiro nós precisamos verificar se os cookies existem, caso eles não existam os dados não foram encontrados e, obviamente, são "inválidos".

<div data-gist-id="c7e66c80fdbd1c560faa" data-gist-show-loading="false"></div>

O próximo passo é que faz toda a mágica do método: ele remove o caractere adicionado no início da string criptogafada, descriptografa a string e verifica se os dados são válidos tentando logar o usuário:

<div data-gist-id="41b16e0e02d6f9684a84" data-gist-show-loading="false"></div>

Se o usuário for logado com sucesso o método <strong>logaUsuario()</strong> retornará <em>true</em> para o método <strong>verificaDadosLembrados()</strong>, que por sua vez também retornará true para o método <strong>usuarioLogado()</strong> e tudo vai funcionar perfeitamente! :)

Antes que você desista do tutorial agora mesmo por que acha que tá muito complicado, isso é o "normal" da Orientação a Objetos e você vai adorar. :)

Nossa nova funcionalidade está quase pronta.. Só falta uma coisinha: um método que limpe os dados lembrados do Cookie para quando o usuário fizer logout... Isso é opcional, vai depender do seu sistema, mas já vamos criar o método e você decide se limpa ou não os dados após o logout (automaticamente, claro).

### Novo Método - <span style="color: #B40000">limpaDadosLembrados()</span>
Para deletar um cookie você deve definir o seu valor como nulo ou falso e definir a sua data de expiração no passado... O método fica asssim:

<div data-gist-id="e0d47db8bca966659497" data-gist-show-loading="false"></div>

Nossa nova funcionalidade está devidamente implementada! :)

Pra quem quiser, o download do script completo:

<ul>
<li><strong>Parte 1</strong> » [Pastie](http://pastie.org/826194)</li>
<li><strong>Parte 2</strong> » [Pastie](http://pastie.org/826197) (Inclui a parte 1)</li>
<li><strong>Parte 3</strong> » [Pastie](http://pastie.org/826200) (Inclui as partes 1 e 2)</li>
<li><strong>Parte 4</strong> » [Pastie](http://pastie.org/826208) (Inclui as partes 1, 2 e 3)</li>
</ul>
### Como usar a nova funcionalidade
Agora vamos fazer alguns mínimos ajustes aos códigos mostados no <a href="/sistema-de-logins-com-classe-no-php-como-usar" title="Sistema de logins com classe no PHP â

