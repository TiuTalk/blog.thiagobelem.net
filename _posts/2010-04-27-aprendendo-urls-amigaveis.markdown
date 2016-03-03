---
layout: post
title: Aprendendo URLs amigáveis (Friendly URLs)
date: '2010-04-27 23:59:34 -0300'
categories:
- Artigos
- SEO
- Apache
tags:
- SEO
- URLs Amigáveis
- Friendly URLs
- htaccess
---
Hoje resolvi falar sobre um assunto bem legal: URLs amigáveis!

Sabe aqueles sites que usam urls como:

```
http://www.meusite.com.br/contato/
http://www.meusite.com.br/produtos/camisetas/
http://www.meusite.com.br/noticias/minha-noticia/2/
```

Esse recurso é chamado de URL amigável... Amigável com os sistemas de busca e com o visitante que não precisa olhar para a URL de um link ou do navegador e ver coisas estranhas e complicadas de entender como essas:

```
http://www.meusite.com.br/contato.php
http://www.meusite.com.br/produtos.php?categoria=5
http://www.meusite.com.br/noticia.php?id=2
```

As URLs amigáveis são muito mais fáceis de usar e entender... Antes de clicar no link você já sabe do que se trata só de olhar pro endereço e os sistemas de busca aumenta a pontuação dessas páginas pois o endereço é relevante (por conter palavras que fazem parte do título e/ou conteúdo da página).

Para começar a usar esse recurso você precisa antes entender o que acontece quando você tenta acessar um endereço com o seu navegador:

### Caminho de uma requisição
Quando você digita uma URL como `http://www.meusite.com.br/contato.php` no seu navegador o mesmo se comunica (envia uma requisição) com o servidor do site pedindo o "resultado" (HTML final) do endereço `/contato.php` e o servidor, utilizando regras internas, identifica esse endereço como pertencente ao arquivo `contato.php` e após executar o PHP ele retorna o código HTML final para o seu navegador.

Claro que muitas outras coisas acontecem nesse caminho todo, mas essas são as etapas que você precisa entender para conseguir construir o seu sisteminha de URLs amigáveis.

Os códigos que você aprender aqui vão agir exatamente nas "regras internas" do servidor, mudando o caminho do arquivo que ele irá procurar para ser executado e gerado o HTML.

A grosso modo, usando o exemplo do contato, quando você acessar o endereço `http://www.meusite.com.br/contato/` o servidor (usando os códigos que você definir) será instruído a usar o arquivo `contato.php` para responder por essa requisição, sem pra isso precisar redirecionar o visitante ou apresentar uma página de <strong>erro 404</strong> (que é o que normalmente aconteceria).

### Começando o trabalho
Você precisa, antes de tudo, anotar em um papel os endereços atuais do seu site e como você quer que eles fiquem... De alguma forma você precisa seguir um padrão e manter as mesmas informações que você tinha antes... Vamos ver alguns exemplos:


```
http://meusite.com/contato.php (A URL atual)
http://meusite.com/contato/ (A nova URL)
```

```
http://meusite.com/produtos.php?id=2 (A URL atual)
http://meusite.com/produtos/camiseta-rosa/2/ (A nova URL)
```

```
http://meusite.com/livros.php?categoria=suspense&pagina=3 (A URL atual)
http://meusite.com/livros/suspense/pagina-3/ (A nova URL)
```

Perceba que em todos os novos formatos temos as mesmas informações que possuíamos no formato anterior, e em alguns casos adicionamos novas informações que, para o servidor, poderão ou não fazer diferença...

Todos esses formatos são definidos por você, mas você vai perceber que é preciso seguir um padrão para que uma regra não acabe atrapalhando a outra.

Vale ressaltar que o que faremos aqui não é restrito a PHP, isso funcionará com qualquer outra linguagem desde que estejamos rodando o servidor com Apache. Claro que há outras formas de fazer URLs Amigáveis em servidores como IIS e etc. mas não vou falar sobre isso aqui.

### Criando a sua primeira URL Amigável
Infelizmente, o mundo não é um mar de rosas e você vai precisar aprender um pouquinho de [um artigo](/validacao-de-e-mail-no-php-com-expressoes-regulares) aqui no blog.

Recomendo que, antes de mais nada, se você entende um mínimo de inglês e quer realmente conseguir usar URLs Amigáveis da melhor forma no seu site, leia a [documentação do mod_rewrite](http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html) no site da Apache, e acredite: essa documentação é realmente importante e significativa.

Vamos começar com o exemplo da página de contato que atualmente você acessa pelo endereço `http://www.meusite.com.br/contato.php`.

Vá até a raiz do seu site e edite (ou crie) um arquivo chamado .htaccess ([leia mais aqui](http://en.wikipedia.org/wiki/Htaccess)), e dentro dele coloque as seguintes linhas que explicarei mais a diante:


<div data-gist-id="a56f84c15ad5d3e9328e" data-gist-show-loading="false"></div>

Agora vamos as explicações...

#### O que é um arquivo .htaccess?
Os arquivos `.htaccess` são arquivos de acesso e configuração do Apache, são arquivos lidos pelo Apache toda vez que você tenta acessar um arquivo que esta dentro de uma pasta (ou sub pastas) onde exista um arquivo `.htaccess`. Nesse arquivo podemos criar regras de bloqueio de acesso, redirecionamentos e reescritas de URL.

#### Linhas 1 e 5: IfModule
O `IfModule` é como um bloco de condição que verifica se um certo módulo existe e está habilitado, nesse caso estamos verificando se o módulo `mod_rewrite.c` está presente... Se estiver, tudo que estiver dentro desse bloco será lido... Caso contrário tudo continuará como antes e o redirecionamento não irá funcionar.

#### Linha 2: RewriteEngine On
Esta linha habilita o sistema de reescrita de URL, é com ele que iremos fazer a nossa URL amigável funcionar.

#### Linha 4: A URL amigável
É na quarta linha que a mágica acontece... Vamos ver essa linha como se estivesse divida em quatro partes:

`RewriteRule ^contato/?$ /contato.php [NC,L]`

Na parte `RewriteRule`  temos o comando que signifca "regra de reescrita", o que diz para o Apache que nessa linha teremos uma regra para ser verificada e que pode reescrever a URL do acesso.

Na parte `^contato/?$` temos a expressão regular que será usada para validar a URL.

Não vou entrar em detalhes sobre ER aqui (apenas na próxima parte) mas o circunflexo `^` significa "inicio", o cifrão `$` significa "fim" e a parte `/?` significa uma barra opcional, ou seja: A reescrita acontecerá para as URLs `meusite.com.br/contato` e `meusite.com.br/contato/`.

Na parte `/contato.php` informamos para o servidor qual arquivo atenderá pela requisição. Preste atenção que é nessa parte que dizemos ao servidor qual o formato da nossa antiga URL.

Na parte `[NC,L]` temos as <em>flags</em>. Nesse caso usamos o `NC` de "<em>no case</em>"  (ignora a diferença entre maiúsculas e minúsculas) e temos o `L` de "<em>last</em>" (faz com que, se essa regra for utilizada, nenhuma outra regra seja usada)... Se você quiser aprender mais sobre <em>flags</em>, recomendo a leitura da documentação do Apache.

--

Por hoje vamos ficar por aqui... Amanhã continuarei o tutorial falando sobre a [reescrita de URLs mais complexas](/aprendendo-urls-amigaveis-com-regras-complexas), que contenham valores variáveis como os exemplos `meusite.com/produtos/camisetas/` e `meusite.com/noticias/minha-noticia/2/`.

Um grande abraço, uma boa noite e até amanhã!

<strong>Continue lendo:</strong> [Aprendendo URLs amigáveis com regras complexas](/aprendendo-urls-amigaveis-com-regras-complexas)

Deixe um comentário com a sua opinião! Não custa nada e ainda me ajuda a escrever tutoriais melhores para todos vocês! :)

