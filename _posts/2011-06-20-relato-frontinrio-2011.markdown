---
layout: post
title: Relato - FrontInRio 2011
excerpt: O evento reuniu todo o tipo de publico, mas principalmente desenvolvedores
  front end e desenvolvedores back end.

date: '2011-06-20 17:27:52 -0300'
categories:
- Desenvolvimento
- Implementação
- HTML
- CSS
- Artigos
- Otimização
- Eventos
tags:
- jQuery
- HTML
- CSS
- Desenvolvimento
- html5
- css3
- frontinrio
- front end
- html5 boilerplate
- sprites
- rio de janeiro
---
<p>No último sábado aconteceu o <a href="http://www.frontinrio.com.br/">FrontInRio 2011</a>, o primeiro evento de desenvolvimento <strong><em>front end</em></strong> do Rio de Janeiro e quiçá o maior do Brasil!</p>
<p>O evento reuniu todo o tipo de publico, mas principalmente desenvolvedores <em>front end</em> e desenvolvedores <em>back end</em>. Tivemos palestrantes de peso, como <a href="http://www.maujor.com/">Maujor</a> e <a href="http://www.bernarddeluna.com/">Bernard de Luna</a>.</p>
<p>Pra mim foi um grande evento, foi a primeira vez que palestrei para um público (e não dentro da Faculdade), a sala estava lotada e tive um feedback muito positivo de todos.</p>
<p>Infelizmente eu cheguei no evento um pouquinho tarde, então perdi as duas primeiras palestras... Mas vamos às que eu assisti:</p>
<h3>Desbravando o HTML5 Boilerplate - Zeno Rocha</h3>
<p><a href="http://www.slideshare.net/zenorocha/desbravando-o-html5-boilerplate">http://www.slideshare.net/zenorocha/desbravando-o-html5-boilerplate</a></p>
<p><img title="HTML5 Boilerplate" src="http://cmstutorials.org/sources/tutorials/653224824html5_boilerplate.jpg" alt="HTML5 Boilerplate" width="100" height="100" /></p>
<p>Mais uma vez o meu amigo <a href="http://zenorocha.com/">Zeno Rocha</a> palestrou em um evento grande, e dessa vez ele mostrou pra todo mundo o poder do <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>.</p>
<p>Ele começou a <a href="http://www.slideshare.net/zenorocha/desbravando-o-html5-boilerplate">palestra</a> falando sobre o desenvolvimento front end de forma geral, mostrando todos os passos, ferramentas e necessidade de um projeto atual que utilize HTML 5 e CSS 3.</p>
<p>Na segunda parte da palestra ele apresentou o <strong>Boilerplate</strong> e, sem entrar muito em detalhes, mostrou como ele já está preparado e te ajuda a utilizar todas essas funcionalidades e recursos, sendo um ótimo ponto de partida para um projeto em HTML 5.</p>
<h3>Engenharia de Frontend de Alta Performance - Anderson Solano</h3>
<p><a href="http://www.slideshare.net/andersonsolano/engenharia-de-front-end-de-alta-performance">http://www.slideshare.net/andersonsolano/engenharia-de-front-end-de-alta-performance</a></p>
<p>Logo após o almoço assisti a palestra do <a href="http://anderson.naoesqueca.com/">Solano</a>, desenvolvedor front end de portais como <a href="http://www.americanas.com.br/">Americanas.com</a>, <a href="http://submarino.com">Submarino.com</a> e outros.</p>
<p>A palestra dele teve muito a ver com a minha: falou sobre todas as técnicas de otimização de front end, passando por Sprites, CDN e etc.</p>
<h3>Otimizando o carregamento de sites com jQuery - Thiago Belem</h3>
<p><a href="http://dev.thiagobelem.net/otimizacao-jquery/slides/">http://dev.thiagobelem.net/otimizacao-jquery/slides/</a></p>
<p><a href="/assets/uploads/2011/06/324851939.jpg"><img class="aligncenter size-large wp-image-1600" title="324851939" src="/assets/uploads/2011/06/324851939-570x200.jpg" alt="" width="570" height="200" /></a></p>
<p>Foi a minha vez de ficar de frente pro público: minha primeira palestra, e eu estava extremamente nervoso.</p>
<p>A minha <a href="http://dev.thiagobelem.net/otimizacao-jquery/slides/">palestra</a> (feita em HTML5 e CSS3) não possuía tanto conteúdo quanto as outras, isso se deve ao tema escolhido... pouca gente se preocupa com isso hoje em dia.</p>
<p>Acompanhei a "vibe" que o Solano deixou sobre técnicas de otimização de carregamento de sites e comecei a falar mal das fucking requisições!</p>
<p>Mostrei exemplos os maiores vilões do carregamento: slideshows, fotos no fim da página, vários arquivos de pluginsa e etc.</p>
<p>Depois comecei a mostrar algumas ferramentas interessantíssimas como o <a href="http://yepnopejs.com/">yepnope.js</a> e <a href="http://www.modernizr.com/">Modernizr</a>... De tudo o que falei acredito que a parte mais interessante foi o <strong>carregamento condicional</strong> de plugins de jQuery utilizando o <strong>yepnope.js</strong>:</p>

[code language="javascript"]
// Só vamos carregar o plugin quando for necessário!
yepnope({
        // Teste: Existe um elemento com a classe "datepicker"?
        test: $('.datepicker').length,</p>
<p>        // Carrega o CSS e o JS do plugin de datepicker
        yep: ['js/datepicker/style.css', 'js/datepicker/datepicker.js'],</p>
<p>        // Quando terminar de carregar o CSS e o JS, executa a função...
        complete: function() {</p>
<p>                // ... que ativa a funcionalidade no elemento encontrado
                $('.datepicker').datepicker();
        }
});
[/code]

<p>E terminei a palestra (bem antes do horário esperado) batendo um papo sobre as técnicas de otimização com o pessoal que estava assistindo.</p>
<p>Após a palestra recebi um feedback muito positivo de todo mundo que assistiu e do pessoal que estava organizando o evento, acredito que comecei - com essa palestra - uma coisa muito importante pro meu futuro (como pessoa) e como desenvolvedor ;)</p>
<h3>Quero ser um ninja em xHTML, HTML5 e CSS3 - Bernard de Luna</h3>
<p><a href="http://www.slideshare.net/bernarddeluna/quero-ser-um-ninja-em-xhtml-html5-e-css3-bernard-de-luna">http://www.slideshare.net/bernarddeluna/quero-ser-um-ninja-em-xhtml-html5-e-css3-bernard-de-luna</a></p>
<p>Essa foi, sem dúvida, a melhor palestra do evento.</p>
<p>O <a href="http://www.bernarddeluna.com/">Bernard</a> é um cara muito animado, polêmico e extremamente egocêntrico... Esses são os ingredientes perfeitos pra uma palestra de sucesso.</p>
<p>Ele falou sobre HTML 5 de uma forma geral sobre planejamento de design para corte, documentação de layout e de implementação, boas práticas de implementação como padronização e reutilização de código.</p>
<p>A parte mais legal da palestra foi quando ele mostrou o <a title="Zen-Coding – Criando HTML como um ninja!" href="/zen-coding-criando-html-como-um-ninja">Zen Coding</a>, uma ferramenta que já falei aqui no blog e permite a implementação de HTML com uma velocidade sem precedentes.</p>
<h3>Finalização do evento: Hora Extra e muitos sorteios</h3>
<p>O evento terminou, claro, em <a href="http://horaextra.org/">#HoraExtra</a>... Mas antes houveram vários sorteios de kits da Globo.com, livro da Smashing Magazine e de <strong>duas vagas</strong> para a próxima turma do meu <a href="http://curso-cakephp.com.br">curso de CakePHP</a>, sobre o qual falarei em breve aqui no blog.</p>
<p>Espero que tenham gostado do relato! Vou ficando por aqui ;)</p>
