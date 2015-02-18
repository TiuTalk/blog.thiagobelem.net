---
layout: post
title: Criando Sistemas Seguros – Parte 1

date: '2009-03-08 03:34:22 -0300'
categories:
- Artigos
- Segurança
tags: []
---
Pouca gente realmente se preocupa com a criação de sistemas seguros... São várias as providências que podem (e devem) ser tomadas para se criar um sistema <strong>um pouco</strong> mais seguro que os demais.

Vou listar aqui algumas medidas sobre as quais recomendo que você pesquise mais sobre e procure realizar/implementar no seu site... Vou falar sobre vários tipos e níveis de proteção, então não se assuste se você vir algo que nunca ouviu falar:

<ol>
<li><strong>Renomeie sua tabela de usuários</strong>
Não use nomes comuns como 'users', 'user', 'usuarios'... Isso dificulta o acesso aos usuários e senhas caso consigam encontrar uma brecha de entrada pra <strong>SQL Injection</strong>. </li>
<li><strong>Sempre valide os parâmetros passados por $_GET</strong>
Se você passa números de produtos, números de páginas ou qualquer outro tipo de dado pela url, é bom validá-lo antes de usá-lo. Por exemplo: se você passa o ID de um produto por url (produtos.php?id=12), na hora de pegar esse valor, faça - <strong>no mínimo</strong> - isso:
<strong>$id = (int)$_GET['id'];</strong>
Com isso você transforma qualquer valor que esteja na URL em inteiro. Evitando assim vários tipos de ataque. Uma boa recomendação sobre esse ponto é o [Instalando o PHPIDS no seu site](/instalando-o-phpids-no-seu-site) </li>
<li><strong>Utilize CAPTCHAs</strong>
CAPTCHAs são aquelas imagens de verificação que você precisa digitar um código (geralmente alfa-numérico) pra poder enviar um formulário de cadastro ou algo parecido. Coloque esse recurso em qualquer formulário público: envio de comentário ou cadastros por exemplo. Elas evitam, na maioria da vezes, que o formulário seja usado e enviado por robôs/scripts automáticos. Uma boa recomendação é o [reCAPTCHA](http://recaptcha.net/). </li>
<li><strong>Não oculte os erros do PHP, manipule-os</strong>
As mensagens de erros do PHP podem colocar uma corda no seu pescoço, mas evite ocultá-los completamente. Crie um manipulador de erros (<em>error handler</em>) que envie e-mails para o administrador informando dados do erro como arquivo, linha, hora, código, ip, visitante... E pro visitante exiba apenas uma mensagem do tipo "<em>Ocorreu um erro. O administrador do site foi informado</em>".

<strong>Leia mais:</strong> [Segurança – Manipulando erros no PHP](/seguranca-manipulando-erros-no-php) </li>
<li><strong>Se for usar sistemas prontos de terceiros, use bancos de dados e usuários diferentes</strong>
Cada sistema tem suas vulnerabilidades, e quanto mais conhecido o sistema for, mais vulnerabilidades conhecidas eles pondem ter. Se você usar bancos de dados separados você evitar um ataque que use as falhas desses sistemas como ponte pra destruir o banco de dados do seu site. </li>
<li><strong>Utilize senhas e usuários do Apache/IIS</strong>
Se você não considera o gerenciador/administrador do seu site 200% seguro, crie usuários do Apache ou IIS e bloqueie o acesso à pasta do administrador. A tela de login não é bonita... mas quem já viu colete a prova de balas e/ou grades bonitas? </li>
<li><strong>Banindo IPs por um bem maior</strong>
Se for preciso banir um usuário insistente que sempre usa um determinado IP, faça-o. Impeça o acesso total dele. É melhor perder um visitante/IP do que meses ou anos de trabalho. Você pode usar vários recursos pra fazer isso: [header()](http://php.net/manual/en/function.header.php) do PHP, .htaccess do Apache dentre outros.

<strong>Leia mais:</strong> [Bloqueando visitantes pelo IP com MySQL e PHP](/bloqueando-visitantes-pelo-ip-com-mysql-e-php) </li>
<li><strong>Falhas de Login</strong>
Você considera normal um usuário errar o proprio login mais de cinco vezes? Sim? Então você está pedindo pra ter problemas... Impeça o acesso ao formulário de login por, no mínimo, 10 minutos e não esqueça de avisar um administrador do site sobre as tentativas falhas consecutivas. </li>
<li><strong>LOGs, muitos LOGs</strong>
Grave LOGs de tudo o que você puder... Cada edição, cada cadastro, cada login... Eles podem ocupar um espaço indesejado, mas são uma ótima ferramenta para rastrear a causa de problemas. </li>
<li><strong>Sessões</strong>
As sessões são um ótimo recurso, sempre necessárias. Mas é preciso ter cuidado com elas... Modifique o ID da sessão a cada carregamento de página, faça verificações de IP e compare com Cookies salvos. Se algo ficar diferente do esperado, ou algum dado não bater, expulse o usuário imediatamente.<strong>Leia mais:</strong> [Aprendendo a usar sessões no PHP](/aprendendo-a-usar-sessoes-no-php) </li>
<li><strong>Mantenha seu software atualizado</strong>
Atualizações são, além de melhorias nas funcionalidades e na performance do produto, melhorias na segurança de todo um projeto. Se você usa algum tipo de pacote/software pronto, fornecido por terceiros, mantenha-o SEMPRE atualizado, custe o trabalho que custar. </li>
<li><strong>Oculte a listagem de pastas e arquivos do Apache</strong>
Sabe quando você acessa uma pasta do seu servidor, que não tem nenhum arquivo index, e você vê aquela listagem feia, mostrando todas as pastas e arquivos daquele diretório? Faça com que isso acabe o mais rápido possível. É só colocar um <strong>Options -Indexes</strong> no .htaccess do root do seu site. </li>
</ol>
--

Mais pra frente irei postar outras partes sobre esse 'guia'... Mas tomem as devidas providências com os seus sites, segurança nunca é o suficiente e nunca vai ser demais.

Abraços!

