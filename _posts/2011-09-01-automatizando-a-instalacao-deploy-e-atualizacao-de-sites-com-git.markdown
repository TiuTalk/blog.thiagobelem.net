---
layout: post
title: Automatizando a instalação (deploy) e atualização de sites com Git
excerpt: Aprenda a automatizar e agilizar o processo de deploy e atualização de sites
  utilizando repositórios Git, rodando apenas um comando sempre que você quiser atualizar
  o site!

date: '2011-09-01 20:21:12 -0300'
categories:
- Sem categoria
- Desenvolvimento
- Artigos
- Servidores
tags:
- github
- git
- repositório
- deploy
- automatização
- instalação
- update
---
<p>Hoje vou mostrar pra vocês como é extramente simples realizar deploys de sites de forma segura, <em>fail-safe</em> e rápida utilizando Git com alguns poucos comandos na linha de comando.</p>
<p>Este artigo é uma "tradução" (com algumas modificações) do artigo "<a href="http://toroid.org/ams/git-website-howto" target="_blank">Using Git to manage a web site</a>", escrito por <strong>Abhijit Menon-Sen</strong>. Estou apenas trazendo a idéia geral do autor e explicando o passo-a-passo com o meu ponto de vista.</p>
<p>Não vou entrar no mérito de explicar o conceito de repositórios distribuídos ou as vantagens do Git. Pra quem não conhece a ferramenta, recomendo: <span class="removed_link" title="http://akitaonrails.com/2008/04/02/micro-tutorial-de-git">esse post</span> e <span class="removed_link" title="http://akitaonrails.com/2010/08/17/screencast-comecando-com-git">esse screencast</span> (vale o preço).</p>
<h3>Repositório local</h3>
<p>Se você já possui um repositório local, pule para o pŕoximo passo.</p>
<p>Tudo começa com a criação de um repositório Git simples:</p>
<p>[code language="bash"]<br />
$ mkdir website &amp;&amp; cd website<br />
$ git init<br />
Initialized empty Git repository in /home/thiagobelem/website/.git/<br />
$ echo 'Olá, mundo!' &gt; index.html<br />
$ git add index.html<br />
$ git commit -q -m &quot;Iniciando o repositório&quot;<br />
[/code]</p>
<p>Agora que seu repositório local está pronto, o index.html foi criado e o primeiro commit feito, vamos criar o repositório remoto no ambiente de produção (servidor onde o site está/vai rodar).</p>
<h3>Repositório remoto</h3>
<p>Partindo do princípio que o seu site vai rodar em um servidor que você possui <a href="http://blog.thiagobelem.net/login-automatico-no-ssh-no-linux/" target="_blank">acesso SSH facilitado</a>, vamos criar o repositório lá que será uma cópia do servidor local:</p>
<p>[code language="bash"]<br />
$ mkdir website.git &amp;&amp; cd website.git<br />
$ git init --bare<br />
Initialized empty Git repository in /home/thiagobelem/website.git/<br />
[/code]</p>
<p>Agora começa a parte interessante.. Você acabou de criar um repositório <strong>bare</strong>!</p>
<p>Um repositório bare é um repositório que tem <strong>apenas os arquivos versionados</strong>, mas não inclui a pasta .git e todos os arquivos de informações e configurações do repositório. Não é um <em>working copy directory</em>.</p>
<p>Agora vamos começar a criar o git-hook que será responsável por copiar todos os arquivos - do repositório bare - para a pasta onde o site vai rodar, no ambiente de produção:</p>
<p>[code language="bash"]<br />
$ cat &gt; hooks/post-receive<br />
#!/bin/sh<br />
GIT_WORK_TREE=/var/www/meusite.com.br git checkout -f<br />
$ chmod +x hooks/post-receive<br />
[/code]</p>
<p>O git-hook post-receive será ativado sempre que o seu repositório receber atualizações (que você enviará da sua máquina) e executará os commandos que você definiu.</p>
<p>Veja que primeiro definimos a variável de ambiente GIT_WORK_TREE como a raíz do site e depois executamos um <code>git checkout -f</code> que irá mover os arquivos sem nenhum vestígio do seu repositório Git.</p>
<p>Agora é só voltar para a sua máquina e adicionar o repositório remoto:</p>
<p>[code language="bash"]<br />
$ git remote add web ssh://meusite.com.br/home/thiagobelem/website.git<br />
$ git push web +master:refs/heads/master<br />
[/code]</p>
<p>Esses dois comandos irão adicionar o repositório externo ao repositório local e enviar os arquivos locais para o servidor.</p>
<p>Após os dois comandos o servidor vai conter uma cópia dos arquivos locais.</p>
<h3>Atualizando os arquivos</h3>
<p>À medida que você for trabalhando no site e quiser atualizar o servidor no ar, é so rodar o comando (após fazer o commit):</p>
<p>[code language="bash"]git push web[/code]</p>
<p>Isso irá enviar as modificações feitas para o repositório remoto.</p>
<h3>Finalizando...</h3>
<p>Agora você consegue atualizar o seu site no servidor de produção sem abrir FTP, sem abrir arquivos ou arrastar pastas pelo cliente de FTP... Sem nem abrir o SSH e fazer algo parecido.</p>
<p>É só rodar o <code>git push web</code> e tá tudo certo! :)</p>
