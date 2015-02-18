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
Hoje vou mostrar pra vocês como é extramente simples realizar deploys de sites de forma segura, <em>fail-safe</em> e rápida utilizando Git com alguns poucos comandos na linha de comando.

Este artigo é uma "tradução" (com algumas modificações) do artigo "<a href="http://toroid.org/ams/git-website-howto" target="_blank">Using Git to manage a web site</a>", escrito por <strong>Abhijit Menon-Sen</strong>. Estou apenas trazendo a idéia geral do autor e explicando o passo-a-passo com o meu ponto de vista.

Não vou entrar no mérito de explicar o conceito de repositórios distribuídos ou as vantagens do Git. Pra quem não conhece a ferramenta, recomendo: <span class="removed_link" title="http://akitaonrails.com/2008/04/02/micro-tutorial-de-git">esse post</span> e <span class="removed_link" title="http://akitaonrails.com/2010/08/17/screencast-comecando-com-git">esse screencast</span> (vale o preço).

<h3>Repositório local</h3>
Se você já possui um repositório local, pule para o pŕoximo passo.

Tudo começa com a criação de um repositório Git simples:


[code language="bash"]
$ mkdir website && cd website
$ git init
Initialized empty Git repository in /home/thiagobelem/website/.git/
$ echo 'Olá, mundo!' > index.html
$ git add index.html
$ git commit -q -m "Iniciando o repositório"
[/code]

Agora que seu repositório local está pronto, o index.html foi criado e o primeiro commit feito, vamos criar o repositório remoto no ambiente de produção (servidor onde o site está/vai rodar).

<h3>Repositório remoto</h3>
Partindo do princípio que o seu site vai rodar em um servidor que você possui <a href="/login-automatico-no-ssh-no-linux" target="_blank">acesso SSH facilitado</a>, vamos criar o repositório lá que será uma cópia do servidor local:


[code language="bash"]
$ mkdir website.git && cd website.git
$ git init --bare
Initialized empty Git repository in /home/thiagobelem/website.git/
[/code]

Agora começa a parte interessante.. Você acabou de criar um repositório <strong>bare</strong>!

Um repositório bare é um repositório que tem <strong>apenas os arquivos versionados</strong>, mas não inclui a pasta .git e todos os arquivos de informações e configurações do repositório. Não é um <em>working copy directory</em>.

Agora vamos começar a criar o git-hook que será responsável por copiar todos os arquivos - do repositório bare - para a pasta onde o site vai rodar, no ambiente de produção:


[code language="bash"]
$ cat > hooks/post-receive
#!/bin/sh
GIT_WORK_TREE=/var/www/meusite.com.br git checkout -f
$ chmod +x hooks/post-receive
[/code]

O git-hook post-receive será ativado sempre que o seu repositório receber atualizações (que você enviará da sua máquina) e executará os commandos que você definiu.

Veja que primeiro definimos a variável de ambiente GIT_WORK_TREE como a raíz do site e depois executamos um <code>git checkout -f</code> que irá mover os arquivos sem nenhum vestígio do seu repositório Git.

Agora é só voltar para a sua máquina e adicionar o repositório remoto:


[code language="bash"]
$ git remote add web ssh://meusite.com.br/home/thiagobelem/website.git
$ git push web +master:refs/heads/master
[/code]

Esses dois comandos irão adicionar o repositório externo ao repositório local e enviar os arquivos locais para o servidor.

Após os dois comandos o servidor vai conter uma cópia dos arquivos locais.

<h3>Atualizando os arquivos</h3>
À medida que você for trabalhando no site e quiser atualizar o servidor no ar, é so rodar o comando (após fazer o commit):


[code language="bash"]
git push web
[/code]

Isso irá enviar as modificações feitas para o repositório remoto.

<h3>Finalizando...</h3>
Agora você consegue atualizar o seu site no servidor de produção sem abrir FTP, sem abrir arquivos ou arrastar pastas pelo cliente de FTP... Sem nem abrir o SSH e fazer algo parecido.

É só rodar o <code>git push web</code> e tá tudo certo! :)

