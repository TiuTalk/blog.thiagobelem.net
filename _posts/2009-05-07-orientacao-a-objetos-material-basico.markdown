---
layout: post
title: Orientação a Objetos – Material Básico
excerpt: Classes são como funções, só que com variáveis e funções próprias.. Geralmente
  usadas para agrupar um numero X de funcionalidades/metodos... Vou ensinar a você
  como criar, passo-a-passo, uma classe para as funções básicas do MySQL.

date: '2009-05-07 17:17:55 -0300'
categories:
- PHP
- Artigos
- Orientação a objetos
tags: []
---
Não vou entrar em detalhes sobre Orientação a Objetos pois a definição não muda muita coisa... Vou resumir: <strong>P</strong>rogramação <strong>o</strong>rientada a <strong>o</strong>bjetos (ou, mais conhecida como <em><strong>POO</strong></em>) se resume ao uso de classes, um recurso um tanto quanto interessante do PHP.

Classes são como funções, só que com variáveis e funções próprias.. Geralmente usadas para agrupar um numero X de funcionalidades/métodos... Vamos criar, passo-a-passo, uma classe para as funções básicas do MySQL.

Primeiro, definimos a classe com nome <strong>MeuSQL</strong>:


<div data-gist-id="a7922443db53f6751259" data-gist-show-loading="false"></div>

Agora vamos definir algumas variáveis com valores padrões:


<div data-gist-id="79a8a113edfbaa2c81c9" data-gist-show-loading="false"></div>

Na verdade, devemos chamar estas variáveis como "<strong>propriedades</strong>" (nome que se dá para as variáveis da classe). Toda propriedade de classe, para manter a compatibilidade com o PHP 4, precisa ter a palavra "<strong>var</strong>" antes.

Vale lembrar que, fora da classe, essas propriedades não vão existir.. Nem após você chamar a classe. Isso deixa as coisas mais seguras. :)

Agora vamos definir o primeiro método. "<strong>Método</strong>" é nome que se dá para uma função dentro de uma classe.


<div data-gist-id="5d770bfd33c73089533a" data-gist-show-loading="false"></div>

Criamos um método que fará a conexão com o MySQL... Quem já estudou um pouco sobre MySQL sabe que a função <strong>mysql_connect()</strong> precisa de três parâmetros, nessa ordem: o servidor (endereço), o usuário e a senha... Repare que usamos <strong><span style="color: #3366ff;">$this->servidor</span></strong> e não <span style="color: #3366ff;"><strong>$servidor</strong></span>, vou explicar por que:

Quando queremos pegar o valor de uma propriedade de uma classe, fazemos referência a própria classe, por isso o <strong>$this</strong>. Sem isso não é possível pegar o valor da propriedade.

<span style="color: #ff0000;"><strong>Preste atenção:</strong></span> quando definimos variáveis dentro das funções (métodos) não é necessário usar o $this, pois, nesse caso, estamos falando de variáveis e não de propriedades. Sei que é um pouco complicado... Mas ninguém disse que POO é pra qulquer um  8-).

Agora vamos definir mais três métodos para as outras funções básicas do MySQL:


<div data-gist-id="32b5e6f5e58b8649dd34" data-gist-show-loading="false"></div>

Podemos dizer que a nossa classe está pronta... Salve este arquivo como <span style="color: #ff6600;"><strong>MeuSQL.php</strong></span>. Agora vamos ver um exemplo de uso e depois, comentá-la toda:


<div data-gist-id="e42da432ea87ad4fc7af" data-gist-show-loading="false"></div>

Viu como as classes podem simplificar tudo na sua vida?

Agora, por fim, fiz alguns ajustes e comentei cada método da classe para ficar mais fácil de entender:


<div data-gist-id="ce4a5e6d1ef28b1417d2" data-gist-show-loading="false"></div>

Se quiser, pode fazer o [download](/arquivos/2009/05/classe-meusql.txt) do arquivo com a classe e o exemplo de uso.

Não falei nem 1/10 do poder da orientação a objetos, mas fique certo de que o seu uso é recomendado, e deixa o código mais seguro além de mais rápido e (pra alguns) mais bonito.

Espero que tenham gostado... Qualquer dúvida (e eu sei que serão muitas) podem deixar seu comentário.

Abraços e até a próxima! :D

