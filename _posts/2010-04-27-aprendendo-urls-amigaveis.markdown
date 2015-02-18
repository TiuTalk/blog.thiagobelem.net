---
layout: post
title: Aprendendo URLs amigáveis (Friendly URLs)
excerpt: As URL amigáveis são recursos fundamentais no mundo de hoje em dia... Além
  de melhorar a visitação a confiança do/no seu site, elas melhoram a pontuação dele
  nos sistemas de busca. Aprenda como as URLs amigáveis funcionam e veja exemplos
  de como fazê-las funcionarem no seu site.

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
<p>Hoje resolvi falar sobre um assunto bem legal: URLs amigáveis!</p>
<p style="color: gray;"><strong>Atualização 30/04/10</strong>: Adicionei algumas informações extras e fiz algumas correções nas RewriteRules.</p>
<p>Sabe aqueles sites que usam urls como:</p>
<p><code>http://www.meusite.com.br/<span style="color: green;">contato/</span></code>
<code>http://www.meusite.com.br/<span style="color: green;">produtos/camisetas/</span></code>
<code>http://www.meusite.com.br/<span style="color: green;">noticias/minha-noticia/2/</span></code></p>
<p>Esse recurso é chamado de URL amigável... Amigável com os sistemas de busca e com o visitante que não precisa olhar para a URL de um link ou do navegador e ver coisas estranhas e complicadas de entender como essas:</p>
<p><code>http://www.meusite.com.br/<span style="color: red;">contato.php</span></code>
<code>http://www.meusite.com.br/<span style="color: red;">produtos.php?categoria=5</span></code>
<code>http://www.meusite.com.br/<span style="color: red;">noticia.php?id=2</span></code></p>
<p>As URLs amigáveis são muito mais fáceis de usar e entender... Antes de clicar no link você já sabe do que se trata só de olhar pro endereço e os sistemas de busca aumenta a pontuação dessas páginas pois o endereço é relevante (por conter palavras que fazem parte do título e/ou conteúdo da página).</p>
<p>Para começar a usar esse recurso você precisa antes entender o que acontece quando você tenta acessar um endereço com o seu navegador:</p>
<h3>Caminho de uma requisição</h3>
<p>Quando você digita uma URL como <code>http://www.meusite.com.br/contato.php</code> no seu navegador o mesmo se comunica (envia uma requisição) com o servidor do site pedindo o "resultado" (HTML final) do endereço <code>/contato.php</code> e o servidor, utilizando regras internas, identifica esse endereço como pertencente ao arquivo <code>contato.php</code> e após executar o PHP ele retorna o código HTML final para o seu navegador.</p>
<p>Claro que muitas outras coisas acontecem nesse caminho todo, mas essas são as etapas que você precisa entender para conseguir construir o seu sisteminha de URLs amigáveis.</p>
<p>Os códigos que você aprender aqui vão agir exatamente nas "regras internas" do servidor, mudando o caminho do arquivo que ele irá procurar para ser executado e gerado o HTML.</p>
<p>A grosso modo, usando o exemplo do contato, quando você acessar o endereço <code>http://www.meusite.com.br/contato/</code> o servidor (usando os códigos que você definir) será instruído a usar o arquivo <code>contato.php</code> para responder por essa requisição, sem pra isso precisar redirecionar o visitante ou apresentar uma página de <strong>erro 404</strong> (que é o que normalmente aconteceria).</p>
<h3>Começando o trabalho</h3>
<p>Você precisa, antes de tudo, anotar em um papel os endereços atuais do seu site e como você quer que eles fiquem... De alguma forma você precisa seguir um padrão e manter as mesmas informações que você tinha antes... Vamos ver alguns exemplos:</p>
<p><code>http://meusite.com/<span style="background: yellow;">contato</span>.php</code> (A URL atual)
<code>http://meusite.com/<span style="background: yellow;">contato</span>/</code> (A nova URL)</p>
<p><code>http://meusite.com/<span style="background: yellow;">produtos</span>.php?id=<span style="background: lime;">2</span></code> (A URL atual)
<code>http://meusite.com/<span style="background: yellow;">produtos</span>/camiseta-rosa/<span style="background: lime;">2</span>/</code> (A nova URL)</p>
<p><code>http://meusite.com/<span style="background: yellow;">livros</span>.php?categoria=<span style="background: lime;">suspense</span>&pagina=<span style="background: orange;">3</span></code> (A URL atual)
<code>http://meusite.com/<span style="background: yellow;">livros</span>/<span style="background: lime;">suspense</span>/pagina-<span style="background: orange;">3</span>/</code> (A nova URL)</p>
<p>Perceba que em todos os novos formatos temos as mesmas informações que possuíamos no formato anterior, e em alguns casos adicionamos novas informações que, para o servidor, poderão ou não fazer diferença...</p>
<p>Todos esses formatos são definidos por você, mas você vai perceber que é preciso seguir um padrão para que uma regra não acabe atrapalhando a outra.</p>
<p>Vale ressaltar que o que faremos aqui não é restrito a PHP, isso funcionará com qualquer outra linguagem desde que estejamos rodando o servidor com Apache. Claro que há outras formas de fazer URLs Amigáveis em servidores como IIS e etc. mas não vou falar sobre isso aqui.</p>
<h3>Criando a sua primeira URL Amigável</h3>
<p>Infelizmente, o mundo não é um mar de rosas e você vai precisar aprender um pouquinho de <a title="Expressões Regulares - Wikipédia" href="http://pt.wikipedia.org/wiki/Express%C3%A3o_regular" target="_blank">Expressões Regulares</a> antes de conseguir sair fazendo regras, mas felizmente existem ótimos <a title="Expressões Regulares" href="http://guia-er.sourceforge.net/" target="_blank">guias</a> na Internet e eu já falei um pouco sobre o assunto em <a title="Validação de e-mail no PHP com Expressões Regulares" href="http://blog.thiagobelem.net/php/validacao-de-e-mail-no-php-com-expressoes-regulares/">um artigo</a> aqui no blog.</p>
<p>Recomendo que, antes de mais nada, se você entende um mínimo de inglês e quer realmente conseguir usar URLs Amigáveis da melhor forma no seu site, leia a <a title="Documentação do mod_rewrite" href="http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html" target="_blank">documentação do mod_rewrite</a> no site da Apache, e acredite: essa documentação é realmente importante e significativa.</p>
<p>Vamos começar com o exemplo da página de contato que atualmente você acessa pelo endereço <code>http://www.meusite.com.br/contato.php</code>.</p>
<p>Vá até a raiz do seu site e edite (ou crie) um arquivo chamado .htaccess (<a title=".htaccess - Wikipédia" href="http://en.wikipedia.org/wiki/Htaccess" target="_blank">leia mais aqui</a>), e dentro dele coloque as seguintes linhas que explicarei mais a diante:</p>
<p>[code language="plain"]
<IfModule mod_rewrite.c>
	RewriteEngine On</p>
<p>	RewriteRule ^contato/?$ /contato.php [NC,L]
</IfModule>
[/code]</p>
<p>Agora vamos as explicações...</p>
<h4>O que é um arquivo .htaccess?</h4>
<p>Os arquivos <code>.htaccess</code> são arquivos de acesso e configuração do Apache, são arquivos lidos pelo Apache toda vez que você tenta acessar um arquivo que esta dentro de uma pasta (ou sub pastas) onde exista um arquivo <code>.htaccess</code>. Nesse arquivo podemos criar regras de bloqueio de acesso, redirecionamentos e reescritas de URL.</p>
<h4>Linhas 1 e 5: IfModule</h4>
<p>O <code>IfModule</code> é como um bloco de condição que verifica se um certo módulo existe e está habilitado, nesse caso estamos verificando se o módulo <code>mod_rewrite.c</code> está presente... Se estiver, tudo que estiver dentro desse bloco será lido... Caso contrário tudo continuará como antes e o redirecionamento não irá funcionar.</p>
<h4>Linha 2: RewriteEngine On</h4>
<p>Esta linha habilita o sistema de reescrita de URL, é com ele que iremos fazer a nossa URL amigável funcionar.</p>
<h4>Linha 4: A URL amigável</h4>
<p>É na quarta linha que a mágica acontece... Vamos ver essa linha como se estivesse divida em quatro partes:</p>
<p><code><span style="background: yellow;">RewriteRule</span> <span style="background: lime;">^contato/?$</span> <span style="background: orange;">/contato.php</span> <span style="background: cyan;">[NC,L]</span></code></p>
<p>Na parte <span style="background: yellow; color: black;"> amarela </span> temos o comando que signifca "regra de reescrita", o que diz para o Apache que nessa linha teremos uma regra para ser verificada e que pode reescrever a URL do acesso.</p>
<p>Na parte <span style="background: lime; color: black;"> verde </span> temos <code>^contato/?$</code> que é uma expressão regular que será usada para validar a URL.</p>
<p>Não vou entrar em detalhes sobre ER aqui (apenas na próxima parte) mas o circunflexo <code>^</code> significa "inicio", o cifrão <code>$</code> significa "fim" e a parte <code>/?</code> significa uma barra opcional, ou seja: A reescrita acontecerá para as URLs <code>meusite.com.br/contato</code> e <code>meusite.com.br/contato/</code>.</p>
<p>Na parte <span style="background: orange; color: black;"> laranja </span> informamos para o servidor qual arquivo atenderá pela requisição. Preste atenção que é nessa parte que dizemos ao servidor qual o formato da nossa antiga URL.</p>
<p>Na parte <span style="background: cyan; color: black;"> azul </span> temos os códigos que são chamados de <em>flags</em>. Nesse caso usamos o <code>NC</code> de "<em>no case</em>"  (ignora a diferença entre maiúsculas e minúsculas) e temos o <code>L</code> de "<em>last</em>" (faz com que, se essa regra for utilizada, nenhuma outra regra seja usada)... Se você quiser aprender mais sobre <em>flags</em>, recomendo a leitura da documentação do Apache.</p>
<p>--</p>
<p>Por hoje vamos ficar por aqui... Amanhã continuarei o tutorial falando sobre a <a title="Aprendendo URLs amigáveis com regras complexas" href="http://blog.thiagobelem.net/aprendendo-urls-amigaveis-com-regras-complexas/">reescrita de URLs mais complexas</a>, que contenham valores variáveis como os exemplos <code>meusite.com/produtos/<span style="background: yellow;">camisetas</span>/</code> e <code>meusite.com/noticias/<span style="background: yellow;">minha-noticia/2</span>/</code>.</p>
<p>Um grande abraço, uma boa noite e até amanhã!</p>
<p><strong>Continue lendo:</strong> <a title="Aprendendo URLs amigáveis com regras complexas" href="http://blog.thiagobelem.net/aprendendo-urls-amigaveis-com-regras-complexas/">Aprendendo URLs amigáveis com regras complexas</a></p>
<p>Deixe um comentário com a sua opinião! Não custa nada e ainda me ajuda a escrever tutoriais melhores para todos vocês! :)</p>
