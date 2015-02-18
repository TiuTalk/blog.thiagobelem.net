---
layout: post
title: Limitando textos
wordpress_url: http://127.0.0.1/pessoal/blog/?p=7
date: '2009-03-03 02:18:15 -0300'
categories:
- PHP
- Artigos
tags: []
---
Espero que tenham gostado da nova aparência blog... Nesse novo blog eu vou postar alguns scripts prontos de PHP para vocês conhecerem novas formas de resolver os problemas do dia-a-adia.

Hoje, nesse post de abertura vou mostrar pra vocês como fazer um script que limita textos, muito usado quando você precisa exibir até X caracteres de uma frase e colocar um <span style="color: #ff6600;"><strong>...</strong></span> depois.

Vamos ao script:
[code language="php"]function limita_caracteres($texto, $limite, $quebra = true) {
    $tamanho = strlen($texto);

    // Verifica se o tamanho do texto é menor ou igual ao limite
    if ($tamanho <= $limite) {
        $novo_texto = $texto;
    // Se o tamanho do texto for maior que o limite
    } else {
        // Verifica a opção de quebrar o texto
        if ($quebra == true) {
            $novo_texto = trim(substr($texto, 0, $limite)).'...';
        // Se não, corta $texto na última palavra antes do limite
        } else {
            // Localiza o útlimo espaço antes de $limite
            $ultimo_espaco = strrpos(substr($texto, 0, $limite), ' ');
            // Corta o $texto até a posição localizada
            $novo_texto = trim(substr($texto, 0, $ultimo_espaco)).'...';
        }
    }

    // Retorna o valor formatado
    return $novo_texto;
}[/code]
E aí? O que me dizem? Bem legal né?

Pra usar essa função é bem simples, você só precisa definir dois dos três argumentos dela:
[code language="php"]echo limita_caracteres("Esta é uma frase muito longa!", 10);
// Irá exibir apenas os 10 primeiros caracteres da frase, cortando
//    qualquer palavra no meio se necessário
// Resultado: Esta é uma fras...

// Você tambem pode setar a terceira opção em 'false':
echo limita_caracteres("Esta é uma frase muito longa!", 10, false);
// Irá até a última palavra completa antes de estourar o limite de 10
// Resultado: Esta é uma...[/code]
O código está todo comentado, quem tiver alguma dúvida é só comentar e responderei assim que possível.

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função <a href="http://us2.php.net/strlen" target="_blank">strlen()</a></strong> » Mede quantos caracteres tem uma string</li>
<li><strong>Função <a href="http://us2.php.net/trim" target="_blank">trim()</a></strong> » Retira os espaços a esquerda e a direita de uma string</li>
<li><strong>Função <a href="http://us.php.net/substr" target="_blank">substr()</a></strong> » Corta uma string de X caracteres</li>
<li><strong>Função <a href="http://us.php.net/strrpos" target="_blank">strrpos()</a></strong> » Encontra a última posição (a partir do início da string) de um(ns) caractere(s) na string</li>
</ul>
