---
layout: post
title: Calculando o tempo de carregamento do site

date: '2009-03-07 05:05:03 -0300'
categories:
- PHP
- Tutoriais
tags: []
---
Então você quer saber (e provavelmente exibir) quantos <span style="color: #c0c0c0; text-decoration: line-through;">minutos</span> segundos a página do seu site demorou pra ser gerada pelo PHP? Sim, nós podemos! o/

A lógica desse script é bem simples: primeiro você armazena um valor de tempo, depois carrega todo o seu site, e no final, pega novamente esse valor de tempo e calcula a diferença entre os dois valores.

Veja como é a função que usaremos pra isso:


<div data-gist-id="7ceab2c3fdd78154852d" data-gist-show-loading="false"></div>

Alguns podem dizer que ela está um pouco avançada... Mas olhe com calma, ela é bem simples:

Primeiro ela calcula o <abbr title="Microtime são os microsegundos que se passaram desde 1970 (Era Unix) até agora.">microtime</abbr> e o manipula para virar um inteiro, depois, se você não passou o parâmetro pra ela, ela retorna o microtime atual (é aqui que ela retorna o primeiro <em>valor de tempo</em>). Caso você tenha passado o parâmetro pra ela, o que vai acontecer na 2ª chamada da função, ela calcula a diferença entre o 'agora' e o que você passou pra ela e te retorna a diferença com 2 casas decimais de exatidão.

Pra usar ela é bem simples:

Inclua essa função no seu site, de preferência antes de qualquer script. Logo no começo da execução do php, antes de conectar a banco de dados, abrir sessões e etc.. Coloque essa linha:


<div data-gist-id="a94150f2ffa979a4c260" data-gist-show-loading="false"></div>

Isso vai fazer com que o PHP defina uma constante (é como uma variável que só pode ser definida uma única vez) contendo o microtime atual, ou seja, significando o 'agora'.

Depois faça tudo o que você deve fazer no seu site... Exiba as coisas, conecte o banco, envie e retorne resultados, faça e aconteça... Aí, depois de todo o site, é hora de descobrir quanto tempo isso demorou, é só usar essa outra linha:


<div data-gist-id="920d897fe395094c4aa7" data-gist-show-loading="false"></div>

Com isso, definiremos uma variável contendo um valor real, por exemplo: <strong>1.35</strong> isso significa que o seu site demorou 1.35 segundos para ser 'gerado' pelo PHP. Aí é só exibir essa variável no fim de tudo e pronto!

Vale lembrar que esse tempo calculado pelo php <strong>não é</strong> o tempo que o seu navegador vai demorar pra carregar todas as imagens e elementos do site. Esse marcador que criamos serve pra descobrir quanto o php demorou pra gerar o código fonte do site.

8-)

<h4>Documentação Oficial:</h4>
<ul>
<li><strong>Função [microtime()](http://br.php.net/microtime)</strong> » Retorna os microsegundos desde 1970</li>
<li><strong>Função [explode()](http://us.php.net/explode)</strong> » Quebra uma string usando um(ns) carectere(s) como separador</li>
<li><strong>Função [round()](http://us.php.net/round)</strong> » Arredonda um valor numérico real</li>
</ul>
