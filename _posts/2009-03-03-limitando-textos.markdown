---
layout: post
status: publish
published: true
title: Limitando textos
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 28
wordpress_url: http://127.0.0.1/pessoal/blog/?p=7
date: '2009-03-03 02:18:15 -0300'
date_gmt: '2009-03-03 05:18:15 -0300'
categories:
- PHP
- Artigos
tags: []
---
<p>Espero que tenham gostado da nova aparência blog... Nesse novo blog eu vou postar alguns scripts prontos de PHP para vocês conhecerem novas formas de resolver os problemas do dia-a-adia.</p>
<p>Hoje, nesse post de abertura vou mostrar pra vocês como fazer um script que limita textos, muito usado quando você precisa exibir até X caracteres de uma frase e colocar um <span style="color: #ff6600;"><strong>...</strong></span> depois.</p>
<p>Vamos ao script:<br />
[code language="php"]function limita_caracteres($texto, $limite, $quebra = true) {<br />
    $tamanho = strlen($texto);</p>
<p>    // Verifica se o tamanho do texto é menor ou igual ao limite<br />
    if ($tamanho &lt;= $limite) {<br />
        $novo_texto = $texto;<br />
    // Se o tamanho do texto for maior que o limite<br />
    } else {<br />
        // Verifica a opção de quebrar o texto<br />
        if ($quebra == true) {<br />
            $novo_texto = trim(substr($texto, 0, $limite)).'...';<br />
        // Se não, corta $texto na última palavra antes do limite<br />
        } else {<br />
            // Localiza o útlimo espaço antes de $limite<br />
            $ultimo_espaco = strrpos(substr($texto, 0, $limite), ' ');<br />
            // Corta o $texto até a posição localizada<br />
            $novo_texto = trim(substr($texto, 0, $ultimo_espaco)).'...';<br />
        }<br />
    }</p>
<p>    // Retorna o valor formatado<br />
    return $novo_texto;<br />
}[/code]<br />
E aí? O que me dizem? Bem legal né?</p>
<p>Pra usar essa função é bem simples, você só precisa definir dois dos três argumentos dela:<br />
[code language="php"]echo limita_caracteres(&quot;Esta é uma frase muito longa!&quot;, 10);<br />
// Irá exibir apenas os 10 primeiros caracteres da frase, cortando<br />
//    qualquer palavra no meio se necessário<br />
// Resultado: Esta é uma fras...</p>
<p>// Você tambem pode setar a terceira opção em 'false':<br />
echo limita_caracteres(&quot;Esta é uma frase muito longa!&quot;, 10, false);<br />
// Irá até a última palavra completa antes de estourar o limite de 10<br />
// Resultado: Esta é uma...[/code]<br />
O código está todo comentado, quem tiver alguma dúvida é só comentar e responderei assim que possível.</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função <a href="http://us2.php.net/strlen" target="_blank">strlen()</a></strong> » Mede quantos caracteres tem uma string</li>
<li><strong>Função <a href="http://us2.php.net/trim" target="_blank">trim()</a></strong> » Retira os espaços a esquerda e a direita de uma string</li>
<li><strong>Função <a href="http://us.php.net/substr" target="_blank">substr()</a></strong> » Corta uma string de X caracteres</li>
<li><strong>Função <a href="http://us.php.net/strrpos" target="_blank">strrpos()</a></strong> » Encontra a última posição (a partir do início da string) de um(ns) caractere(s) na string</li>
</ul>
