---
layout: post
title: HTML5 vs HTML4 - Parte 2
author:
  display_name: Ruan Nunes
  login: ruan.nunes
  email: ruanrln@gmail.com
  url: ''
author_login: ruan.nunes
author_email: ruanrln@gmail.com

date: '2013-02-09 17:08:35 -0200'
categories:
- Implementação
- HTML
- Tutoriais
tags:
- Javascript
- html5
- HTML4
- form
---
<p>Vejamos, esta na hora da segunda parte deste tutorial!</p>
<p>Para encurtar os posts, irei colocar apenas os trechos do código necessários, vocês devem acompanhar com uma copia dos arquivos no seu PC, de preferência. No futuro, vou manter os códigos com suas ultimas atualizações em um repositório no <a title="GitHub" href="http://github.com" target="_blank">GitHub</a>.</p>
<p>Na <a title="HTML5 vs HTML4 – Parte 1" href="http://blog.thiagobelem.net/html5-vs-html4-parte-1/" target="_blank">primeira parte</a>, construímos o arquivo <strong>HTML</strong>, vazio, hoje começaremos a mexer no body do documento, e colocar tudo que aparecera no site.</p>
<p>Como sou muito fã das novidades do <strong>HTML5</strong>, vou continuar postando códigos comparativos, ainda mais na parte de formulários, onde vejo as mais belas inovações, apesar de pouco compatíveis por enquanto.</p>
<p>Vamos ao nosso formulário, primeiro, claro, em <strong>HTML4</strong>:</p>
<div data-gist-id="4746524" data-gist-show-loading="false"></div>
<h3>Validando Formularios com JS</h3>
<p>Se prestarem atenção, tem coisas faltando nesse formulário, como o <strong>action</strong> na tag form. Outro defeito deste formulário é: a pessoa pode enviar o que quiser, nada, letras, qualquer coisa, mas para o funcionamento da nossa aplicação, devemos aceitar somente números, sendo que<strong> o coeficiente A necessariamente deve ser diferente de 0</strong>.</p>
<p>Mas não se preocupem, um “pequeno” script em <strong>JavaScript </strong>colocado no head do nosso documento pode resolver nossos problemas, e evitar muita dor de cabeça!!! É o seguinte:</p>
<div data-gist-id="4746560" data-gist-show-loading="false"></div>
<p>Lembrando que, para inserir scripts diretamente dentro do HTML (sem fazer referência à um arquivo), você precisa usar a tag script, dessa forma:</p>
<div data-gist-id="4746571" data-gist-show-loading="false"></div>
<p>Alem disso, faremos uma pequena mudança no form, alterando o botão de envio:</p>
<div data-gist-id="4746563" data-gist-show-loading="false"></div>
<p>Isso nada mais faz do que um botão, que quando clicado,<strong> chame a função validar() do JavaScript</strong>. Em outros artigos postarei outros tipos de validação, não digo melhores, por que cada tipo pode ser melhor em determinada situação.</p>
<p>Viu? eu disse que era simples, por enquanto nosso formulário não faz nada, alem de verificar se o que inserimos nele é valido.</p>
<p><strong>Atenção:</strong> não é recomendado definir eventos DOM (onclick, onsubmit e etc.) diretamente no HTML, o ideal seria fazer esse vínculo através do Javascript também, vide:</p>
<ul>
<li><span style="line-height: 14px;"><a href="http://stackoverflow.com/questions/1796141/properly-bind-javascript-events">http://stackoverflow.com/questions/1796141/properly-bind-javascript-events</a>
</span></li>
<li><a href="http://robertnyman.com/2008/11/20/why-inline-css-and-javascript-code-is-such-a-bad-thing/">http://robertnyman.com/2008/11/20/why-inline-css-and-javascript-code-is-such-a-bad-thing/</a></li>
</ul>
<h3>Novidades no HTML5</h3>
<p>Agora, vamos ao nosso mesmo formulário, só que em <strong>HTML5</strong>:</p>
<div data-gist-id="4746526" data-gist-show-loading="false"></div>
<p>Simples não? O atributo <strong>type</strong> [dos inputs] do HTML5, ganha novos valores, como o <strong>number</strong>, que obriga o usuário a digitar <strong>números</strong>, e o atributo <strong>required</strong>, faz o campo ser <strong>obrigatório</strong>.</p>
<p>Para nossa infelicidade, por enquanto o tipo number <strong>ainda não é compatível com com todos os navegadores</strong> (leia-se, Internet Explorer), mas isso vem mudando. Existem muitos outros tipos de campo, como por exemplo:</p>
<ul>
<li><strong>Range</strong>: cria uma barra de rolagem para números, geralmente se usa junto com os atributos min e max que definem limites de valores;</li>
<li><strong>Color</strong>: cria uma paleta de cores para o usuário escolher alguma;</li>
<li><strong>Date</strong>: cria um calendário onde o usuário seleciona uma data especifica, muito útil;</li>
</ul>
<p><span style="line-height: 1.714285714; font-size: 1rem;">Entre muitos outros... Recomendo a leitura dos artigos sobre HTML5 na </span><a style="line-height: 1.714285714; font-size: 1rem;" title="w3schools, html5 form input types" href="http://www.w3schools.com/html/html5_form_input_types.asp" target="_blank">W3Schools</a><span style="line-height: 1.714285714; font-size: 1rem;">, mas atenção: <span style="color: #ff0000;">use o W3Schools com muito cuidado</span>! Vide: </span><a style="line-height: 1.714285714; font-size: 1rem;" href="http://w3fools.com/">http://w3fools.com/</a></p>
<p>Sobre a questão de <strong>compatibilidade</strong> dos recursos do HTML5, procure sobre <strong>Modernizr</strong>, <strong>HTML5Shiv</strong> e <strong>Polyfills</strong>.</p>
<p>Mas nem tudo são flores, por enquanto ainda será necessário verificar se o valor do <strong>coefA</strong> é igual a zero, ou seja, usaremos o mesmo script anterior, porem só o que necessitamos agora:</p>
<p>[gist id= 4746566]</p>
<p>Se estivermos procurando apenas valores <strong>maiores que zero</strong>, poderíamos ter feito essa "regra" diretamente no campo, sem a necessidade de JavaScript:</p>
<div data-gist-id="4746599" data-gist-show-loading="false"></div>
<h3>Conclusão</h3>
<p>Bom pessoal, no próximo post estou em duvida se ensinarei a fazer o calculo das equações, ou dar uma pequena introdução sobre o CSS, o que é mais importante? O  aplicativo ser bonito, ou funcionar? Lógico que funcionar, mas ninguém gosta de apps feios!</p>
<p>Até a próxima, abraços! :)</p>
