---
layout: post
title: Resolvendo o problema de "headers already sent"
excerpt: Aprenda por que esses erros e avisos acontecem, entenda como os headers funcionam
  e veja como é facil resolver (da forma correta) esse problema que todo mundo já
  teve pelo menos uma vez.

date: '2009-09-07 12:06:22 -0300'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Bug
- Problema
---
<p>Um erro que muito programador iniciante acaba se deparando aí é o famoso "<strong><em style="color: #CC0000">Warning: Cannot modify header information - headers already sent by...</em></strong>" ou "<strong><em style="color: #CC0000">Warning: Cannot send session cookie - headers already sent by...</em></strong>" e nem sempre é fácil de descobrir o que se fazer para resolver esse erro (que na verdade não é erro, é um <em>warning</em>, um <strong>aviso</strong>).</p>
<p>Antes de resolver o problema você precisa entender por que esse erro acontece..</p>
<h3>Por que "headers already sent"?</h3>
<p>Toda página na internet está hospedada em servidor e o seu navegador "pede" ao servidor da página, o resultado (HTML) da página com endereço X... Aí o servidor move os seus pauzinhos, interpreta os arquivos e começa a te responder, enviando um cabeçalho de resposta (o famoso <em style="color: #000088">header</em>) esse cabeçalho contém informações sobre a codificação da página, tamanho da página, tempo de duração do cache, hora da ultima atualização e tudo que seja relevante, sobre uma página da Internet, para um navegador.</p>
<p>Depois do envio do <em>header</em> o servidor envia o HTML da página toda e o seu browser começa a montar ela pra você.</p>
<p>Quando você lê "headers already sent" no aviso, significa que o seu servidor já enviou o header e APÓS esse envio, você está tentando criar ou alterar alguma informação que deva ser enviada no header.</p>
<p>Por exemplo, os cookies: são definidos antes do envio do header e enviados para o navegador DENTRO do header... Se você tentar criar ou alterar um cookie depois que o header foi enviado você receberá o aviso de erro.</p>
<p>Outro exemplo que segue a mesma lógica dos Cookies é a Sessão, que são como cookies encriptados que ficam salvos no servidor. Toda sessão possui um <strong>cookie identificador</strong> (<em>session cookie</em>) que é enviado para o visitante a fim de identificá-lo e manter os valores da sua sessão... Se você tentar criar ou remover algum valor da sessão depois do envio do header vai receber a mensagem de erro "<strong>Warning: Cannot send session cookie - headers already sent by...</strong>".</p>
<h3>E quando raios eu enviei o header? Eu não fiz nada!</h3>
<p>Realmente, se você não usa nenhuma função de manipulação de headers, você não fez nada e está recebendo esse erro... Mas há uma explicação pra isso!</p>
<p>Em se tratando de PHP (e acredito que o mesmo ocorra com todas as outras linguagens WEB que precisam ser lidas por um parseador), o header começa a ser enviado logo que você insira o primeiro caractere no HTML final da página... Seja fora do código PHP com HTML normal, seja dentro do código PHP com um <strong>echo</strong> ou <strong>print()</strong>.</p>
<p>[code language="php"] &lt;?php<br />
$numero = 3;<br />
$dobro = $numero * 2; // 6<br />
?&gt;[/code]</p>
<p>Imagine que, na linha 1, antes do "<strong>&lt;?php</strong>" houvesse um espaço... Tudo que está fora do "<strong>&lt;?php ... ?&gt;</strong>" é HTML, então um espaço ali seria como o 1° caractere do HTML causando o envio do header... Qualquer função de sessão/cookie/etc. dentro do bloco de PHP iria causar o erro.</p>
<p>[code language="php"]&lt;?php<br />
echo 'Olá mundo';<br />
session_start(); // Inicio de sessão depois do envio do header?! Problema!<br />
?&gt;[/code]</p>
<p>Esse é outro caso clássico.. O desenvolvedor tentou criar uma sessão (que definirá um cookie de sessão novo) após enviar o header (por causa do <strong>echo</strong>).</p>
<h3>Tá, e como eu resolvo?</h3>
<p>Lembra que eu disse que você não fez nada e ainda tá recebendo o erro? Pra resolver o problema é a mesma coisa: nada (além do normal) precisa ser feito... Você só precisa colocar todo código que trabalhe com headers (sessões, cookies, redirecionamentos e etc.) antes de enviar qualquer caractere pro HTML... Nada de tentar definir/criar um cookie ou sessão depois de enviar um "Seja bem vindo!" ou enviar o &lt;head&gt; do seu site.</p>
<p>Cookies e sessões, bem como os redirecionamentos e encriptação de conteúdo devem ser enviados, criados, definidos e modificados ANTES de qualquer HTML... Afinal, todo o HTML pode e deve depender desses fatores.</p>
<p>E antes que você comente dizendo "mas <strong>meu site</strong> precisa enviar HTML antes de criar um cookie!" eu te respondo "erro de planejamento". :)</p>
<p>Espero que menos pessoas tenham esse problema a partir de hoje!</p>
<p>Abraços e até a próxima :D</p>
