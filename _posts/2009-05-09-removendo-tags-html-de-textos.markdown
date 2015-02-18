---
layout: post
title: Removendo TAGs HTML de textos
excerpt: Muita gente abusa da boa vontade e descuido alheio e tenta "brincar" com
  os sites, inserindo blocos de códigos HTML, sendo alguns deles até maliciosos, diga-se
  de passagem. Você, nobre programador, precisa estar pronto para o pior.

date: '2009-05-09 08:29:55 -0300'
categories:
- PHP
- HTML
- Tutoriais
- Segurança
tags: []
---
No mundo da WEB 2.0 é muito comum sites que permitam que seus visitantes entrem com dados e textos em campos... Comentários, cadastros, nomes e por aí vai... Só que muita gente abusa da boa vontade <strong>e descuido</strong> alheio e tenta "brincar" com os sites, inserindo blocos de códigos HTML, sendo alguns deles até maliciosos, diga-se de passagem.

Você, nobre programador, precisa estar pronto para o pior... E uma frase muito comum no nosso meio é "<strong>o usuário é o seu maior inimigo</strong>", infelizmente isso é uma realidade, e das mais cruas. Não é que todo mundo faz isso por mal... Mas, mesmo sem querer, acabam fazendo o mal, entende?

Então vou falar aqui sobre três funções que podem ser usadas para amenizar esse problema: a <strong>strip_tags()</strong>, <strong>htmlspecialchars()</strong> e a <strong>mysql_real_escape_string()</strong>... Cada uma faz uma coisa, mas todas ajudam nesse tipo de proteção.

<h3>Função strip_tags()</h3>
O que essa função faz é simples, curto e grosso: acaba, some, oculta, exclui, remove e destrói QUALQUER código HTML da string. Não importa se é um <span style="color: #888888;"><strong><b></strong><span style="color: #000000;">...</span><strong></b></strong></span>, um <span style="color: #888888;"><strong><a></strong></span>...<span style="color: #888888;"><strong></a></strong></span>, ou um <span style="color: #888888;"><strong><iframe></iframe></strong></span>... Vai tudo pro saco.

Veja um exempo de uso:


[code='php']
< ?php
// Define uma string com código HTML
$entrada = '
Ahá... <a href="mailto: fulaninho@uol.com.br">eu</a> sou <strong>malandrão!</strong>

';

$saida = strip_tags($entrada);
echo $saida;
// Saída: Ahá... eu sou malandrão!
?>
[/code]

Você também pode, se quiser, definir TAGs permitidas, que permanecerão na string:


[code='php']
< ?php
// Define uma string com código HTML
$entrada = '
Ahá... <a href="mailto: fulaninho@uol.com.br">eu</a> sou <strong>malandrão!</strong>

';

$saida = strip_tags($entrada, '<strong>
');
echo $saida;
// Saída:
Ahá... eu sou <strong>malandrão!</strong>

?>
[/code]

» <a href="http://www.php.net/manual/pt_BR/function.strip-tags.php" target="_blank">Documentação da strip_tags()</a>

<h3>Função htmlspecialchars()</h3>
A htmlspecialchars não remove as TAGs HTML... Ela escapa o código HTML... Transformando-o em códigos/entidades para exibição... Ou seja, se existe um <span style="color: #888888;"><strong><b></strong></span>Hahá!<span style="color: #888888;"><strong></b></strong></span> na string, vai aparecer tudo, inclusive o <span style="color: #888888;"><strong><b></strong><span style="color: #000000;">...</span><strong></b></strong></span> (e não negrito).

Exemplo de uso:


[code='php']
< ?php
$entrada = 'Eu sou <i>çagaiz</i>!';

$saida = htmlspecialchars($entrada);
echo $saida;
// Saída: Eu sou <i>çagaiz</i>! (Aparecerão todos os caracteres, como se o HTML fosse string)
?>
[/code]

Com isso você vai poder saber exatamente o que o espertinho tentou inserir no seu código... :)

» <a href="http://www.php.net/manual/pt_BR/function.htmlspecialchars.php" target="_blank">Documentação da htmlspecialchars()</a>

<h3>Função mysql_real_escape_string()</h3>
No quesito segurança, essa é a função mais legal.. Ela serve pra quando você for inserir aquele código malicioso (que o usuário postou) no seu banco de dados... A função escapa todos os caracteres que o MySQL possa vir a usar e se confundir achando que faz parte da sua query...

Vamos dar um exemplo:


[code='php']
< ?php
$nome = "Fulaninho's";

$nome = mysql_real_escape_string($nome);

$sql = "INSERT INTO `usuarios` VALUES (NULL, '".$nome."')";
mysql_query($sql);
?>
[/code]

Sem o uso da função, a consulta passada para o MySQL ficaria assim:


[code='sql']
INSERT INTO `usuarios` VALUES (NULL, 'Fulaninho's')
[/code]

Repare que a aspas que fecha o valor a ser inserido, é a que vem depois do "o", e não a que veio depois do "s", que seria o correto... O que daria erro no MySQL ou acabaria resultado no cadastro de dados errados e pela metade.

Já usando a função, ficaria assim:


[code='sql']
INSERT INTO `usuarios` VALUES (NULL, 'Fulaninho\'s')
[/code]

O que fazer com que o nome seja inserido de forma correta, e quando você fizer um <strong>SELECT</strong> para buscar esse dado, ele virá <strong>Fulaninho's</strong> (sem a barra).

» <a href="http://www.php.net/manual/pt_BR/function.mysql-real-escape-string.php" target="_blank">Documentação da mysql_real_escape_string()</a>

---

E aí? O que me diz? Problemas com strings <em><strong>malemolentes</strong></em>? Nunca mais!

