---
layout: post
title: Criando senhas seguras
excerpt: O maior risco para a proteção de uma senha é o próprio usuário que a criou
  e a segurança do sistema TODO é estritamente proporcional à segurança das senhas
  dos usuários desse sistema... Aprenda os erros mais comuns na criação de uma senha
  e quais medidas de segurança tomar para que o seu sistema não seja uma porta aberta
  para invasões.

date: '2009-05-21 12:46:04 -0300'
categories:
- Artigos
- Segurança
tags: []
---
O maior risco para a proteção de uma senha é o próprio usuário que a criou... Nós (desenvolvedores) sempre precisamos ou vamos precisar criar um sistema que seja protegido por senha... E, se você pensar bem, a segurança do sistema TODO é estritamente proporcional à segurança das senhas dos usuários desse sistema.

Não importa quão bem estruturado seja o sistema, se um dos usuários usar uma senha como "12345" seria praticamente a mesma coisa que não houvesse proteção por login e senha... seria um sistema totalmente inseguro... Mas também não podemos culpar apenas o usuário que criou a senha "12345", também tem culpa no cartório o desenvolvedor, que deixou o usuário usar uma senha dessas.

<h3>Lembrar ou anotar?</h3>
O maior problema com as senhas se resume em duas formas (contraditórias) de pensamento: anotar a senha para não esquecer, e correr o risco de outro alguém descobrir... Ou guardar todas as senhas na cabeça e correr o risco de esquecer?

Geralmente as pessoas seguem a segunda linha de raciocínio e por isso acabam criando senhas usando palavras fáceis de lembrar... Ou usam datas de aniversário, nome do cachorro, nome dos filhos e etc... Tudo isso é dificil de ser esquecido, mas o problema é que se alguém conhece esse usuário pessoalmente ele tem acesso fácil a todos esses dados. Ou seja... ambas as linhas de raciocínio são facas de dois gumes.

Usar palavras existentes no dicionário também não ajuda em nada... A maioria dos ataques de <em>brute-force</em> (força bruta) tenta descobrir uma senha começando por todas as palavras do dicionário... E a senha vai ser descoberta em segundos.

Outra prática comum é a troca de senha a cada 30 dias, o que em alguns sistemas chega a ser obrigatório. Só que isso também acaba se tornando uma faca de dois gumes, pois ao mesmo tempo em que o sistema fica mais seguro, fica mais dificil do usuário lembrar das senhas e, por isso o usuário é levado a usar o nome do cachorro ou a data de nascimento da mãe como senha.

<h3>O tamanho da senha</h3>
Sim, não tenha dúvida.. O tamanho da senha é um dos fatores mais importantes para a segurança da mesma e eu vou explicar por que.

Alguns sistemas exigem um tamanho mínimo para a senha de 8 caracteres, esse é um ótimo ponto de partida... Vamos partir do principio que o usuário use apenas letras minúsculas para a sua senha, teríamos então 26^8 possibilidades, o que significa 208.827.064.576 de combinações possíveis (aproximadamente 38 bits).

Se você permitir/exigir que o usuário use, além de letras minúsculas, letras maiúsculas, números e outros símbolos (ponto, traço, barra e etc) o número de possibilidades passa a ser de 88^8, o que resulta em 3.596.345.248.055.296 possíveis combinações. Até mesmo um robô iria demorar meses ou até anos para quebrar tal senha... Usando todas as 101 teclas do teclado teríamos mais de seis quadrilhões de possibilidades.

Sabendo disso, é seu papel, sr. desenvolvedor, exigir um tamanho mínimo de senha e a presença de outros caracteres além dos comumente usados (letras minúsculas)... E dependendo do nível de segurança a ser aplicado no sistema que está sendo criado, talvez seja bom exigir até uma quantidade mínima de cada "tipo" de caractere que somados, passam dos 12 caracteres mínimos da senha... Isso sem dúvida vai der o sistema MUITO mais seguro.

<h3>Evitando senhas simples, porém fracas</h3>
Lembra da velha frase "bela porém coxa"? Pois é... mesmo que a senha tenha 10 caracteres, o que adianta se ela for fraca? E você me pergunta "como assim fraca?"... Você não pode aceitar de forma alguma senhas como "12345890abcde", "5555444333" ou "123joaodasilva"... Isso não é seguro, nem aqui nem na China.

<h3>Substituições L33T</h3>
Não estamos mais em uma época onde a linguagem L33T era desconhecida e abominada por todos... Substituir letras por números não é considerado mais seguro pois essa regra já faz parte das "tentativas" dos invasores... Então não adianta usar uam senha como "M4r1A" que fica fácil de quebrar caso seu nome seja "Maria".

<h3>Senhas duplicadas e repetidas</h3>
Nunca use a mesma senha para mais de um sistema/site... Se uma senha descoberta já é complicado, imagina se essa senha garantir acesso a tudo que você usa?

<h3>Escrever a senha e colar no monitor</h3>
Por favor né? Me poupe... Por que você não coloca sua senha na camiseta e sai na rua? "A senha do meu GMail é joaozinho38". Se precisar anotar aquela senha de 38 caracteres com números, letras, barras, arrobas, tralhas, pontos e vírgulas, anote.. Mas guarde esse papel em um lugar tão seguro quanto o que você quer guardar com essa senha.

<h3>Frases como senha</h3>
Essa é outra prática que pode te ajudar... Uma senha como "EuMeCaseiEm27DeJaneiroDe2009" será, sem dúvida, mais seguro que "27012099"... Mas as vezes o sistema não permitirá uma senha tão grande, então use apenas a primeira letra de cada palavra ("EmCe2dJd2") ou a última letra ("uEim7eOd9") que, ainda sim, será uma senha segura e melhor do que "casamento123".

--

Mas infelizmente... Como eu disse antes, não depende apenas da boa vontade e malandragem do usuário... O desenvolvedor também tem que tomar algumas providências e exigir/permitir uma senha realmente segura. Veja algumas dicas:

<h3>Tamanho da senha</h3>
Obrigue o usuário a usar senhas com tamanho mínimo de 12 a 16 caracteres... A proteção é potencializada em 2 a cada novo caractere que é adicionado. Recentemente o tamanho da senha influencia mais na segurança da mesma do que a sua complexidade.

<h3>Caracteres especiais</h3>
As senhas devem ser um misto de letras minúsculas e maiúsculas, com no mínimo três números e/ou caracteres especiais... Essa regra também vale para as senhas dos administradores do sistema e não apenas os usuários.

<h3>Armazenando senhas no banco de dados</h3>
<strong>Nunca</strong> salve uma senha no banco de dados sem encripta-la antes... Veja mais sobre criptografia neste artigo: [Criptografia no PHP usando md5, sha1 e base64](/criptografia-no-php-usando-md5-sha1-e-base64). Se você salvar as senhas como texto plano e alguém conseguir invadir o seu banco de dados terá acesso a TODAS as contas... E acredite, você não quer que isso aconteça.

<h3>Mudança de senhas</h3>
Peça que (ou obrigue) o usuário a mudar sua senha a cada trinta dias... Mesmo que a senha seja extremamente forte e segura, ele pode tê-la anotado em algum papel e outra pessoa pode descobrir.

<h3>Botão de emergência<span style="color: #999999;"> (Red button)</span></h3>
Certifique-se de que há uma forma fácil e rápida de terminar/encerrar uma conta caso ela seja invadia ou exposta... E só depois tome providencias.

<h3>"Esqueci minha senha"</h3>
Permita que o usuário receba lembretes de senhas por e-mail mas nunca envie a mesma senha, crie uma nova.

<h3>Reutilização de senhas</h3>
Não permita que o usuário, ao trocar de senha (quando obrigado) crie uma senha igual a(s) senha(s) usada(s) anteriormente... Isso não é segurança, é enrolação.

--

Tenha em mente que nenhuma senha é infalível... Em 1998 uma senha de 56 bits foi quebrada: eram 2^56 possibilidades, 72.057.594.037.927.936 combinações (mais de 72 quadrilhões)... E sabe quanto tempo a máquina demorou? 56 horas.

A segurança do sistema depende só de você, desenvolvedor... Tempo e dinheiro todo mundo tem e tudo isso "passa" com o tempo... Mas o problema que você vai ter caso um sistema de alta-segurança seja invadido, pode durar pra vida toda.

Abraços :D

Pra quem tiver endeço, ficam alguns links de medidores de força de senha:
» [http://www.passwordmeter.com/](http://www.passwordmeter.com/)
» [http://passwordstrength.net/](http://passwordstrength.net/)
» [http://www.microsoft.com/protect/yourself/password/checker.mspx](https://www.microsoft.com/protect/fraud/passwords/checker.aspx?WT.mc_id=Site_Link)

--

Artigo baseado no post de <span class="removed_link" title="http://www.phpro.org/articles/Creating-Secure-Passwords.html">Kevin Waterson</span>.

