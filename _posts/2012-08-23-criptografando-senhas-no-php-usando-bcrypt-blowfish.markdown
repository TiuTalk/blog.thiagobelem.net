---
layout: post
title: Criptografando senhas no PHP usando bcrypt (Blowfish)

date: '2012-08-23 14:39:53 -0300'
categories:
- Desenvolvimento
- PHP
- Orientação a objetos
- Segurança
tags:
- PHP
- Segurança
- Criptografia
- sha1
- md5
- bcrypt
---
<p>Tenho alguns artigos (beeem antigos) aqui no blog onde falo sobre encriptação/hashing de senhas usando <strong>sha1</strong>, <strong>md5</strong> e etc.</p>
<p>Esses métodos de hashing atendem - <strong>de forma satisfatória</strong> - quem está começando a trabalhar com programação e desenvolvimento, mas são notavelmente <strong>inseguros</strong> se comparados à outros métodos (como o <strong>bcrypt</strong>).</p>
<p>Recomendo a leitura de um artigo meu (não tão antigo assim), onde falo sobre a <a title="Encriptando senhas de forma segura" href="http://blog.thiagobelem.net/encriptando-senhas-de-forma-segura/">Encriptação de senhas de forma segura</a>, e nele explico o problema por trás de hashes como MD5 e SHA1, e sugiro a utilização de outros métodos como <strong>Blowfish</strong>, que é a cifra no qual o <a href="http://en.wikipedia.org/wiki/Bcrypt">bcrypt</a> se baseia.</p>
<p>Desde então, eu tenho procurado me aprofundar um pouco mais no assunto, e recentemente comecei a usar o <strong>bcrypt </strong>nos meus projetos...</p>
<h3>Suporte ao bcrypt</h3>
<p>O PHP suporta hashing via <a href="http://en.wikipedia.org/wiki/Bcrypt">bcrypt</a> através da função <a href="http://php.net/manual/function.crypt.php">crypt()</a> que está presente desde o PHP 4, e serve pra trabalhar com hashings de mão única (como o MD5 e SHA1).</p>
<h3>Usando o bcrypt</h3>
<p>O bcrypt precisa - obrigatóriamente - receber dois "parâmetros" pra funcionar: o <strong>salt</strong> e o <strong>custo</strong> de processamento. O <strong>salt </strong>nada mais é do que a sua garantia de que, dado um salt aleatório, a mesma senha nunca será igualmente hasheada duas vezes... não importa que você criptografe a mesma senha 100 vezes, se o salt for diferente nas 100 vezes, o resultado final será sempre diferente. Para o bcrypt funcionar:</p>
<ol>
<li>O <strong>salt</strong> precisa ser uma <strong>string</strong> de <strong>22 caracteres</strong> que respeite a expressão regular <span style="background: #CECECE;">./0-9A-Za-z</span>.</li>
<li>O <strong>custo</strong> deve ser um <strong>número inteiro</strong> entre <strong>4</strong> e <strong>31</strong>, outro detalhe é que o custo precisa ter dois dígitos, então números menores que 10 precisam ter zero à esquerda</li>
</ol>
<p><span style="color: #999999;"><em>Fiz alguns testes e meu computador quase parou quado usei um custo de 15 -- O custo é a potência de 2, então 2^15 equivale a <strong>32.768 ciclos</strong>, já 2^31 equivaleria a <strong>2.147.483.648 ciclos</strong></em></span></p>
<p>O custo de processamento influencia diretamente nas tentativas de ataque de força bruta, quanto maior, mais lento, quanto mais lento, melhor.</p>
<h3>Criptografando senhas usando bcrypt</h3>
<p>Basicamente, pra criptografar a senha "<strong>olá mundo</strong>", com o salt "<strong>Cf1f11ePArKlBJomM0F6aJ</strong>" à um custo de processamento de <strong>8</strong>, você faria algo assim:</p>
<div data-gist-id="3438858" data-gist-show-loading="false"></div>
<p>O que fizemos foi passar dois valores para a função <strong>crypt()</strong>: o valor a ser criptografado (a senha em si), e uma string '<strong>$2a$08$Cf1f11ePArKlBJomM0F6aJ$</strong>', que é composta por três partes (separadas por cifrão):</p>
<ol>
<li>O método de hashing -- <strong>2a</strong> -- que fará com que o bcrypt/blowfish seja usado</li>
<li>O custo -- <strong>08</strong></li>
<li>O salt -- <strong>Cf1f11ePArKlBJomM0F6aJ</strong></li>
</ol>
<p>Isso no vai gerar o seguinte hash:</p>
<blockquote><p>$2a$08$Cf1f11ePArKlBJomM0F6a.EyvTNh6W2huyQi5UZst5qsHVyi3w5x.</p></blockquote>
<p>Que é o valor que você deve salvar no banco de dados.</p>
<p>Caso essa mesma senha seja criptografada com o mesmo salt e o mesmo custo, o resultado será idêntico... caso você mude o salt (que deve ser gerado de forma aleatória) o resultado seria diferente.</p>
<p>Vale lembrar que o hash gerado terá sempre <strong>60 caracteres</strong>, então você pode modelar a sua coluna que armazena a senha como <strong>CHAR(60)</strong> ou <strong>VARCHAR(60)</strong> se você estiver usando o MySQL. ;)</p>
<h3>Verificando e validando senhas usando bcrypt</h3>
<p>Agora suponhamos que o seu usuário está fazendo o login, e o único valor que você tem é o nome de usuário (ou email, tanto faz) e a senha que ele digitou no formulário (ola mundo), como comparar isso com o valor que está no banco para verificar se os dados estão válidos?</p>
<p>Já que você está trabalhando com um salt gerado aleatoriamente, é impossível gerar um novo hash que seja igual ao hash que está no banco... correto? ERRADO! :)</p>
<p>Para comparar uma senha texto-plano com um já hasheado, é só usar esse próprio valor hasheado como hash da senha text-plano, vejam como é simples:</p>
<div data-gist-id="3439074" data-gist-show-loading="false"></div>
<p>É ou não é sensacional? Você pode gerar o mesmo hash, tendo a senha original e o hash resultado, sem precisar do salt original! :) Isso garante que você pode gerar um salt aleatório sempre que for criptografar a senha de alguém.</p>
<p>E é aí que o <strong>custo</strong> entra em jogo... mesmo durante um ataque de força bruta, o atacante pode tentar diferentes combinações de "senha original" mas o custo vai tornar a operação toda tão lenta que não vai valer o esforço.</p>
<h3>Uma pequena classe para facilitar a sua vida</h3>
<p>Criei uma pequena <a href="https://gist.github.com/3438461">classe Bcrypt</a> que ajuda a fazer esse trabalho todo através de dois métodos bem simples de usar..</p>
<p>Primeiro, o código completo da classe:</p>
<div data-gist-id="3438461" data-gist-show-loading="false"></div>
<p>Agora como você pode usar os métodos:</p>
<div data-gist-id="3439186" data-gist-show-loading="false"></div>
<p>Espero que tenham gostado! :)</p>
