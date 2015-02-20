---
layout: post
title: 'PHP: Sim, nós precisamos de padrões!'
excerpt: Se você é um programador web e tem o PHP como sua linguagem principal, ou
  uma das linguagens que mais usa, pode ser que você já tenha ouvido falar que a comunidade
  PHP está buscando se organizar e criar padrões para simplificar/melhorar/evoluir
  o ecossistema desta linguagem que é tão usada no mundo todo.

date: '2013-01-23 12:11:45 -0200'
categories:
- Desenvolvimento
- PHP
- Frameworks
- Artigos
tags:
- PHP
- Padrão
- PSR
---
<em>Ontem o [PHP: Sim, nós precisamos de padrões](http://infog.casoft.info/2013/01/php-sim-nos-precisamos-de-padroes/) que eu concordo em gênero, número e grau... então resolvi reproduzí-lo na íntegra aqui e adicionar alguns links/observações:</em>

Se você é um programador web e tem o PHP como sua linguagem principal, ou uma das linguagens que mais usa, pode ser que você já tenha ouvido falar que a comunidade PHP está buscando se organizar e criar padrões para simplificar/melhorar/evoluir o ecossistema desta linguagem que é tão usada no mundo todo.

Se você ainda não ouviu falar disso, então está na hora de correr atrás e se antenar mais para não ficar para trás!

## Onde começam os problemas?
PHP é uma linguagem criada para a web e cresceu na web. E isso tem seus pontos altos e seus pontos baixos. O ponto alto é que é realmente fácil começar a desenvolver para web com PHP, pois basta usar um servidor HTTP (ou o [servidor embutido do PHP 5.4](/php-5-4-servidor-interno)), um navegador, um editor de textos e pronto, você já começa com os “olá mundo!” da vida. Isso é algo fantástico no PHP e acaba trazendo muita gente para a linguagem.

Mas trazer muita gente significa trazer <strong>muita opinião</strong>, já que cada um pode fazer o que quiser e da forma que quiser. Com isso temos vários programadores, iniciantes ou não, construindo aplicações PHP em cada esquina por aí. Com várias aplicações sendo construídas  e nenhum padrão a se seguir, as pessoas acabam criando padrões e tentando convencer as pessoas que estão ao redor que  aquele padrão é bom.

No caso do PHP (e outras linguagens também), é possível escrever código de muitas maneiras diferentes e usando trocentos padrões e não padrões diferentes.

Como as pessoas acabam criando padrões e também acabam trabalhando em equipes de empresas e/ou comunidades, esses padrões se espalham e podem até se tornar padrões amplamente aceitos e utilizados. No PHP temos os padrões de código do [Yii](http://www.yiiframework.com/wiki/102/code-style), o do … É, acho que já deu para entender, não é?

Neste cenário fica muito claro que existe uma segregação entre os frameworks e também entre os usuários e programadores destes frameworks. Todo mundo pensando que o outro é inimigo, concorrente, alguém a ser vencido e eliminado.

## FIG
Como sempre existem aqueles que não buscam a guerra, aconteceu de um pessoal se juntar e começar a pensar “espera um pouco, qual é o motivo de brigarmos e repetirmos esforços?”, e desse questionamento nasce um grupo para tratar da interoperabilidade entre os frameworks, o FIG ([Framework Interop Group](http://www.php-fig.org/)).

E com isso as coisas se resolvem, o mundo se torna um lugar feliz e as pessoas passam a sorrir mais e a dormir melhor…

Não é bem por aí, já que, para funcionar a tal da interoperabilidade entre os frameworks, era necessário criar os padrões, para que todos trabalhassem de uma forma mais parecida e reaproveitável. O problema é, qual padrão usar? Já que, em teoria, todos estão corretos e cada um é o melhor de todos?

## PSR
Depois de muita discussão começam a surgir as <strong>PSR</strong> (PHP Standards Recommendation), que são as recomendações de padrões para o PHP.

Veja bem, as <strong>PSR</strong> são RECOMENDAÇÕES, não obrigações. Ou seja, você faz se quiser fazer e se entender o bem maior que esta padronização pode trazer.

Com as PSR a tendência é ter componentes melhores e com mais possibilidades de reuso. Com isso podemos centralizar esforços em código bom e bons projetos, em vez de ficar cada framework com a sua comunidade refazendo tudo o que já existe por aí.

A [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md) trata do autoload de classes, assim não é mais necessário ficar fazendo o famoso <strong>include</strong> para trazer trechos de código de outros arquivos.

Já a [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md) é composta por regras básicas para a base de código, como arquivos sempre em UTF-8, namespaces seguindo a PSR-0, classes devem estar em <strong>StudlyCaps</strong> e métodos e funções em<strong>camelCase</strong>, não usar a short tag do PHP e outras coisinhas.

A [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) é um guia de estilos mais completo, onde são definidos itens polêmicos como o uso de 4 espaços em vez de tabs, a abertura de chaves para classes, métodos e funções deve ser na linha abaixo da declaração, mas para blocos lógicos e laços deve ser na mesma linha (putz, esse me deu raiva… mas me acostumei com ele), e mais um monte de regras, que você se acostuma fácil depois de algumas horas seguindo.

Recentemente surgiu também o [PSR-3](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-3-logger-interface.md), que descreve uma interface padrão para Loggers.

E o melhor de tudo é que o código das pessoas começa a ficar mais semelhante, mais organizado e isso facilita pacas na hora de manter um projeto que você não iniciou. Isso é empatia! Pensar no próximo (lembrando que muitas vezes “o próximo” somos nós mesmos uns meses depois).

## Concluindo…
Padrões são bons, pessoal! Sério, a vida de desenvolvedor em comunidade (software livre, empresa, você e seu eu do futuro), fica muito melhor.

A comunidade PHP é conhecida por ser relaxada, desorganizada, preguiçosa e cheia de sobrinhos que pensam que programam e só sabem usar scripts prontos… Está mais do que na hora de mudar esse conceito sobre o PHP e sobre sua comunidade. A evolução está nos puxando para frente neste momento e não podemos ficar parados!

Fale sobre o FIG, as PSR e todo o movimento de melhorias e profissionalização do PHP com seus amigos, traga o pessoal para discutir e implementar melhores práticas e ajude a comunidade PHP a ser reconhecida como capaz.

(...)

<div>
Além disso, existe o [PHP The Right Way](http://www.phptherightway.com/), parada obrigatória para quem está aprendendo e/ou quer melhorar.

</div>
