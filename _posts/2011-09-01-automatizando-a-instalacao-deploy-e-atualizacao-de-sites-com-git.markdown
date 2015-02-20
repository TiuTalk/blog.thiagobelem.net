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

Este artigo é uma "tradução" (com algumas modificações) do artigo "[Using Git to manage a web site](http://toroid.org/ams/git-website-howto)", escrito por <strong>Abhijit Menon-Sen</strong>. Estou apenas trazendo a idéia geral do autor e explicando o passo-a-passo com o meu ponto de vista.

Não vou entrar no mérito de explicar o conceito de repositórios distribuídos ou as vantagens do Git. Pra quem não conhece a ferramenta, recomendo: <span class="removed_link" title="http://akitaonrails.com/2008/04/02/micro-tutorial-de-git">esse post</span> e <span class="removed_link" title="http://akitaonrails.com/2010/08/17/screencast-comecando-com-git">esse screencast</span> (vale o preço).

<h3>Repositório local</h3>
Se você já possui um repositório local, pule para o pŕoximo passo.

Tudo começa com a criação de um repositório Git simples:


<div data-gist-id="7907e074132c455ad7fe" data-gist-show-loading="false"></div>

Agora que seu repositório local está pronto, o index.html foi criado e o primeiro commit feito, vamos criar o repositório remoto no ambiente de produção (servidor onde o site está/vai rodar).

<h3>Repositório remoto</h3>
Partindo do princípio que o seu site vai rodar em um servidor que você possui [acesso SSH facilitado](/login-automatico-no-ssh-no-linux), vamos criar o repositório lá que será uma cópia do servidor local:


<div data-gist-id="724694ace0b2947ef8ee" data-gist-show-loading="false"></div>

Agora começa a parte interessante.. Você acabou de criar um repositório <strong>bare</strong>!

Um repositório bare é um repositório que tem <strong>apenas os arquivos versionados</strong>, mas não inclui a pasta .git e todos os arquivos de informações e configurações do repositório. Não é um <em>working copy directory</em>.

Agora vamos começar a criar o git-hook que será responsável por copiar todos os arquivos - do repositório bare - para a pasta onde o site vai rodar, no ambiente de produção:


<div data-gist-id="ab504c117a740916b7e8" data-gist-show-loading="false"></div>

O git-hook post-receive será ativado sempre que o seu repositório receber atualizações (que você enviará da sua máquina) e executará os commandos que você definiu.

Veja que primeiro definimos a variável de ambiente GIT_WORK_TREE como a raíz do site e depois executamos um <code>git checkout -f</code> que irá mover os arquivos sem nenhum vestígio do seu repositório Git.

Agora é só voltar para a sua máquina e adicionar o repositório remoto:


<div data-gist-id="7e62633e82ba5f887c67" data-gist-show-loading="false"></div>

Esses dois comandos irão adicionar o repositório externo ao repositório local e enviar os arquivos locais para o servidor.

Após os dois comandos o servidor vai conter uma cópia dos arquivos locais.

<h3>Atualizando os arquivos</h3>
À medida que você for trabalhando no site e quiser atualizar o servidor no ar, é so rodar o comando (após fazer o commit):


<div data-gist-id="338cd2dc2ec72097ae40" data-gist-show-loading="false"></div>

Isso irá enviar as modificações feitas para o repositório remoto.

<h3>Finalizando...</h3>
Agora você consegue atualizar o seu site no servidor de produção sem abrir FTP, sem abrir arquivos ou arrastar pastas pelo cliente de FTP... Sem nem abrir o SSH e fazer algo parecido.

É só rodar o <code>git push web</code> e tá tudo certo! :)

