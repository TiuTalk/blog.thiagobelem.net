---
layout: post
status: publish
published: true
title: Calculando o tempo de carregamento do site
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 280
wordpress_url: http://blog.thiagobelem.net/?p=280
date: '2009-03-07 05:05:03 -0300'
date_gmt: '2009-03-07 08:05:03 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
<p>Então você quer saber (e provavelmente exibir) quantos <span style="color: #c0c0c0; text-decoration: line-through;">minutos</span> segundos a página do seu site demorou pra ser gerada pelo PHP? Sim, nós podemos! o/</p>
<p>A lógica desse script é bem simples: primeiro você armazena um valor de tempo, depois carrega todo o seu site, e no final, pega novamente esse valor de tempo e calcula a diferença entre os dois valores.</p>
<p>Veja como é a função que usaremos pra isso:</p>
<p>[code='php']<br />
function tempoExecucao($start = null) {<br />
    // Calcula o microtime atual<br />
    $mtime = microtime(); // Pega o microtime<br />
    $mtime = explode(' ',$mtime); // Quebra o microtime<br />
    $mtime = $mtime[1] + $mtime[0]; // Soma as partes montando um valor inteiro</p>
<p>    if ($start == null) {<br />
        // Se o parametro não for especificado, retorna o mtime atual<br />
        return $mtime;<br />
    } else {<br />
        // Se o parametro for especificado, retorna o tempo de execução<br />
        return round($mtime - $start, 2);<br />
    }<br />
}<br />
[/code]</p>
<p>Alguns podem dizer que ela está um pouco avançada... Mas olhe com calma, ela é bem simples:</p>
<p>Primeiro ela calcula o <abbr title="Microtime são os microsegundos que se passaram desde 1970 (Era Unix) até agora.">microtime</abbr> e o manipula para virar um inteiro, depois, se você não passou o parâmetro pra ela, ela retorna o microtime atual (é aqui que ela retorna o primeiro <em>valor de tempo</em>). Caso você tenha passado o parâmetro pra ela, o que vai acontecer na 2ª chamada da função, ela calcula a diferença entre o 'agora' e o que você passou pra ela e te retorna a diferença com 2 casas decimais de exatidão.</p>
<p>Pra usar ela é bem simples:</p>
<p>Inclua essa função no seu site, de preferência antes de qualquer script. Logo no começo da execução do php, antes de conectar a banco de dados, abrir sessões e etc.. Coloque essa linha:</p>
<p>[code='php']<br />
// Define uma constante contendo o microtime atual<br />
define('mTIME', tempoExecucao());<br />
[/code]</p>
<p>Isso vai fazer com que o PHP defina uma constante (é como uma variável que só pode ser definida uma única vez) contendo o microtime atual, ou seja, significando o 'agora'.</p>
<p>Depois faça tudo o que você deve fazer no seu site... Exiba as coisas, conecte o banco, envie e retorne resultados, faça e aconteça... Aí, depois de todo o site, é hora de descobrir quanto tempo isso demorou, é só usar essa outra linha:</p>
<p>[code='php']<br />
// Salva numa variável o valor arredondado do tempo de carregamento<br />
$tempo = tempoExecucao(mTIME);<br />
[/code]</p>
<p>Com isso, definiremos uma variável contendo um valor real, por exemplo: <strong>1.35</strong> isso significa que o seu site demorou 1.35 segundos para ser 'gerado' pelo PHP. Aí é só exibir essa variável no fim de tudo e pronto!</p>
<p>Vale lembrar que esse tempo calculado pelo php <strong>não é</strong> o tempo que o seu navegador vai demorar pra carregar todas as imagens e elementos do site. Esse marcador que criamos serve pra descobrir quanto o php demorou pra gerar o código fonte do site.</p>
<p>8-)</p>
<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função <a href="http://br.php.net/microtime" target="_blank">microtime()</a></strong> » Retorna os microsegundos desde 1970</li>
<li><strong>Função <a href="http://us.php.net/explode" target="_blank">explode()</a></strong> » Quebra uma string usando um(ns) carectere(s) como separador</li>
<li><strong>Função <a href="http://us.php.net/round" target="_blank">round()</a></strong> » Arredonda um valor numérico real</li>
</ul>
