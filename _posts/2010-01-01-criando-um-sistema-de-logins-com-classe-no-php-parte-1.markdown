---
layout: post
title: Criando um sistema de logins com classe no PHP – Parte 1
excerpt: Primeira parte de um tutorial que te ensinará a criar um sistema de logins
  seguro e bem organizado, usando classes e banco de dados MySQL, de fácil configuração
  e uso.

date: '2010-01-01 00:01:18 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Login
---
Fala pessoal! Tudo na paz? Que tal um super tutorial de ano novo?! :D Esse é o primeiro artigo do ano, as 00:01 de 1º de Janeiro! Vamos começar o ano bem!

Hoje vamos começar um tutorial que será divido em várias partes... Nele vamos aprender a fazer um sistema de logins decente, usando classes no PHP... Meu objetivo aqui é que você aprenda duas coisas: como fazer um sistema de login desde o começo e aprenda um pouco mais sobre o uso de classes.

O sistema de login usará <strong>banco de dados MySQL</strong> e terá suporte a <strong>encriptação de senha</strong> (MD5, SHA1 e etc)... Totalmente customizável e será fácil alterá-lo caso você precise de alguma coisa especial. Também teremos um suporte a opção "<strong>lembrar minha senha</strong>", onde o usuário permanecerá logado caso volte no site algum tempo depois, outra funcionalidade customizável e opcional.

Outro detalhe importante sobre o sistema é que ele irá funcionar nas versões 4 e 5 do PHP e do MySQL, então, se a sua hospedagem é uma vergonha, não se preocupe! :D

<h3>A Tabela de Usuários</h3>
Se você já tem uma tabela de usuários pode pular essa parte... Se não, vamos criar a seguinte tabela no banco de dados do seu site:
<img src="/arquivos/2009/12/tabela_usuarios.jpg" alt="Tabela de Usuários" title="Tabela de Usuários" width="163" height="146" class="size-full wp-image-664" />
Para criar essa tabela, você poderá usar o seguinte código SQL:
{% highlight SQL linenos %}
CREATE TABLE `usuarios` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(150) NOT NULL ,
  `usuario` VARCHAR(100) NOT NULL ,
  `senha` VARCHAR(40) NOT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = MyISAM;
{% endhighlight %}


<h3>A classe Usuario</h3>
Vamos ao que interessa!

Antes de tudo, precisamos criar o nosso arquivo, vamos seguir algumas boas páticas de programação e vamos dar o nome de "<strong style="background: gray; color: orange">usuario.class.php</strong>". Criado o arquivo vazio, vamos começar a construir nossa classe:


{% highlight php linenos %}
<?php
class Usuario {

}
?>
{% endhighlight %}

Agora vamos começar a inserir algumas propriedades (variáveis) que serão usadas pela classe ao longo do projeto...


{% highlight php linenos %}
  /**
   * Nome do banco de dados onde está a tabela de usuários
   */
  var $bancoDeDados = 'meu_site';

  /**
   * Nome da tabela de usuários
   */
  var $tabelaUsuarios = 'usuarios';

  /**
   * Nomes dos campos onde ficam o usuário e a senha de cada usuário
   * Formato: tipo => nome_do_campo
   */
  var $campos = array(
    'usuario' => 'usuario',
    'senha' => 'senha'
  );
{% endhighlight %}

São com essas propriedades da classe que você vai poder customizar a classe para ela funcionar no seu site.. Cada uma esta devidamente comentada e explicada, é só alterar da forma que você necessitar.

Agora vamos definir o primeiro método da nossa classe:


{% highlight php linenos %}
  /**
   * Usa algum tipo de encriptação para codificar uma senha
   *
   * Método protegido: Só pode ser acessado por dentro da classe
   *
   * @param string $senha - A senha que será codificada
   * @return string - A senha já codificada
   */
  function __codificaSenha($senha) {
    // Altere aqui caso você use, por exemplo, o MD5:
    // return md5($senha);
    return $senha;
  }
{% endhighlight %}

Esse método cuidará da encriptação da senha (caso ela exista, claro)... Se o seu sistema não usar nenhum tipo de criptografia, pode deixar esse método do jeito que está, mas caso você use, por exemplo, o SHA1, você precisa mudar ali na linha 34 e colocar, por exemplo:
{% highlight php linenos %}
return sha1($senha);
{% endhighlight %}
Caso você use outro tipo de encriptação, você vai precisar modificar esse método... O importante é você receber a senha pura/plana como parâmetro ($senha) e retornar a senha encriptada.

Agora vamos criar o segundo método da classe e o último método dessa parte do tutorial:


{% highlight php linenos %}
  /**
   * Valida se um usuário existe
   *
   * @param string $usuario - O usuário que será validado
   * @param string $senha - A senha que será validada
   * @return boolean - Se o usuário existe ou não
   */
  function validaUsuario($usuario, $senha) {
    $senha = $this->__codificaSenha($senha);

    // Procura por usuários com o mesmo usuário e senha
    $sql = "SELECT COUNT(*)
        FROM `{$this->bancoDeDados}`.`{$this->tabelaUsuarios}`
        WHERE
          `{$this->campos['usuario']}` = '{$usuario}'
          AND
          `{$this->campos['senha']}` = '{$senha}'";
    $query = mysql_query($sql);
    if ($query) {
      $total = mysql_result($query, 0);
    } else {
      // A consulta foi mal sucedida, retorna false
      return false;
    }

    // Se houver apenas um usuário, retorna true
    return ($total == 1) ? true : false;
  }
{% endhighlight %}

Esse método, como o comentário explica, cuidará de validar se um usuário existe, procurando o par <strong>$usuario</strong> + <strong>$senha</strong> no banco de dados... Ele só retornará verdadeiro (<em>true</em>) quando apenas um registro for encontrado.
Se você reparar logo ali no começo do método, na linha 45, ele usa o método <strong style="background: gray; color: #FFF">__codificaSenha()</strong> que irá encriptar (ou não) a senha... Simples né? :)

Então é isso gente... Por hoje vamos ficar por aqui. Em breve postarei a [Parte 2](/criando-um-sistema-de-logins-com-classe-no-php-parte-2), onde iremos criar os métodos que deixam um usuário logado (usando sessões E cookies)... E antes que alguém reclame, <strong>essa classe ainda não está usável</strong>... Ela é apenas a 1ª parte de uma classe que vamos fazendo ao longo dessa sequencia de tutoriais.

Pra quem quiser, o <strong>download</strong> do script completo da Parte 1: [RAR](/arquivos/2010/01/usuarios.class.parte1.rar).

Não deixem de dar uma olhada nas outras partes:

<ul>
<li>[Criando um sistema de logins com classe no PHP - Parte 2](/criando-um-sistema-de-logins-com-classe-no-php-parte-2)</li>
<li>[Criando um sistema de logins com classe no PHP - Parte 3](/criando-um-sistema-de-logins-com-classe-no-php-parte-3)</li>
</ul>
Um grande abraço, feliz ano novo e até a próxima!

