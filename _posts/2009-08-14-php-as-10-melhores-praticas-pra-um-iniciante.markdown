---
layout: post
title: 'PHP: As 10 melhores práticas pra um iniciante'
excerpt: Veja uma listinha das 10 melhores práticas que todo iniciante em PHP deve
  seguir para se tornar uma pessoa organizada e que segue os padrões e "bons costumes"
  de um programador de sucesso.

date: '2009-08-14 02:16:23 -0300'
categories:
- PHP
- MySQL
- Artigos
tags:
- PHP
- MySQL
- Melhores Práticas
---
Hoje vi essa "pequena" [lista de atitudes](http://net.tutsplus.com/tutorials/php/30-php-best-practices-for-beginners/) criada pelo <strong>Glen Stansberry</strong> lá no <strong>Tuts+</strong> e resolvi passar ela pra vocês aqui no blog em bom português... A lista "oficial" tem 30 itens, mas eu resolvi fazer um apanhado dos 10 mais importantes.

O PHP é (hoje em dia) <span style="text-decoration: underline;">indiscutivelmente</span> a linguagem de programação mais usada do mundo... E por isso tem muitos e muitos aprendizes/iniciantes e foi por causa deles (vocês) que eu criei esse blog, então, nada melhor do que uma lista de <strong>10 coisas</strong> que vocês devem ou não devem fazer:

### 1. Seja amigo do manual e da documentação do PHP
Na [documentação do PHP](http://php.net/) você encontra explicações, exemplos e dezenas (quiçá centenas) de comentários sobre caaada função, cada variável de sistema, cada configuração... Tem de tudo lá e você precisa se acostumar a usá-la. Sempre procure por lá antes de sair perguntando nos fóruns ou para os seus amigos no fórum.. Quando você procura a solução e chega a algum lugar você sempre cresce mais e descobre mais coisas do que perguntando pros outros.

<strong>Leia mais:</strong> [Manual do PHP.net nas suas mãos!](/manual-do-php-net-nas-suas-maos)

### 2. Dê atenção aos erros do PHP
O PHP é uma das poucas linguagens de programação que os erros te ajudam a resolver o problema... Sempre haverá um nome de arquivo e um número de linha te informando onde as coisas deram errado, é só ir lá e começar a procurar...  Não se esqueça, claro, de levar em consideração a mensagem de erro que te foi passada.

Se você [ativar as mensagens de erro](http://www.php.net/manual/pt_BR/function.error-reporting.php) ao nível máximo (<strong>E_ALL</strong>) provavelmente vai começar a perceber pequenos erros e bugs no seu código que antes não existiam e que, depois de ajustados, deixam o site muito mais estável e rápido.

Não se esqueça de desligar as mensagens de erro quando colocar o site em modo de produção, ou seja, quando ele for para o ar... Ao contrário os visitantes vão poder ver mensagens de erro e isso vai deixar de ser uma ajuda pra você, se tornando uma falha de segurança e uma possível dor de cabeça.

<strong>Leia mais:</strong> [Segurança – Manipulando erros no PHP](/seguranca-manipulando-erros-no-php)

### 3. Use um IDE / GUI
Um IDE é uma ferramenta de edição de texto com recursos gráficos (<em><strong>I</strong>ntegrated <strong>D</strong>evelopment <strong>E</strong>nvironment</em>) ou GUI (<em><strong>G</strong>raphic <strong>U</strong>ser <strong>I</strong>nterface</em>).. Uma ferramenta que te ajuda enormemente na hora de criar os códigos e ver se tudo está indo bem.

Recomendo o [Eclipse](http://www.eclipse.org/), que é mais leve que o NetBeans.

As principais vantagens dos IDE/GUI são:

<ul>
<li>Deixam o código colorido (Syntax Highlight)</li>
<li>Ajudam a completar os códigos com nomes de variáveis, funções e etc. (Helpers)</li>
<li>Avisam quando há algum erro no código</li>
</ul>
<strong>Leia mais:</strong> [Editor gráfico (GUI) para PHP](/editor-grafico-gui-para-php)

### 4. Use um Framework
Você pode aprender MUITO sobre PHP e sobre Programação Orientada a Objetos (POO) usando um framework. Frameworks como o [CodeIgniter](http://codeigniter.com/) te ajudam a criar um site em muito menos tempo do que você normalmente demoraria... Em outras palavras o framework te permite  criar um site <strong>exatamente</strong> como ele deveria ser, da forma mais organizada, estável, sólida e segura o possível.

Mas nem tudo são flores, pra quem não conhece nada de PHP um framework pode ser o pior dos pesadelos, é altamente recomendável que você já esteja acostumado com o básico e saiba se virar antes de ir atraz de um FW.

<strong>Leia mais:</strong> [Frameworks no PHP: O que, quando, porque e qual?](/frameworks-no-php-o-que-quando-porque-e-qual)

### 5. Aprenda as práticas DRY e KISS
A prática <strong>DRY</strong> (<strong>D</strong>on't <strong>R</strong>epeat <strong>Y</strong>ourself) que significa "Não Se Repita" ajuda muito na hora de criar código pois evita principalmente a repetição de código que não precisa ser repetido, permitindo assim uma otimização constante do sistema. A base do DRY é a frase "Uma Vez e Somente Uma Vez" ou OAOO (<strong>O</strong>nce <strong>A</strong>nd <strong>O</strong>nly <strong>O</strong>nce), onde cada código/funcionalidade deve ser feita apenas uma vez e reutilizada pelas outras partes do sistema.

Outra prática muito boa é o <strong>KISS</strong> (<strong>K</strong>eep <strong>I</strong>t <strong>S</strong>imple, <strong>S</strong>tupid) ou "<strong>M</strong>antenha <strong>I</strong>sso <strong>S</strong>imples, <strong>E</strong>stúpido" que valoriza a simplicidade e praticidade do projeto... Outro nome para essa prática é o <strong>YAGNI</strong> (<strong>Y</strong>ou <strong>A</strong>ren't <strong>G</strong>onna <strong>N</strong>eed <strong>I</strong>t) ou "<strong>V</strong>ocê <strong>N</strong>ão <strong>I</strong>rá <strong>P</strong>recisar <strong>D</strong>isso", muito forte na área de engenharia de software que sugere a eliminação de tudo aquilo que não é necessário... Implemente aquilo que sempre será necessário mas nunca aquilo que você <strong>acha</strong> que um dia será necessário.

Se você parar para analisar todas essas práticas com mais cuidado vai perceber que elas são contraditórias em alguns pontos mas, se trabalhadas de forma correta e em conjunto, permitirão um sistema muito mais leve, administrável e sólido.

<strong>Leia mais:</strong> [Keep It Simple, Stupid](http://pt.wikipedia.org/wiki/Keep_it_Simple_Stupid)

### 6. Organize o seu código (Indentação e espaços)
Essa é simples: organize seu código para ficar mais fácil de encontrar alguma coisa quando ela precisar ser modificada... Se você usar uma IDE pode ativar a indentação automática. ;)

Pra quem ainda não sacou, "indentação" é aquele espaço em branco a esquerda das linhas, criados usando a tecla [TAB] ou espaços em branco, por exemplo:


<div data-gist-id="6461694693eb1fff85cc" data-gist-show-loading="false"></div>

No exemplo acima as linhas 2 e 3 estão indentadas pois pertencem ao bloco condicional.

### 6. Organize seus arquivos
Essa também é simples: comece a organizar seus arquivos, separe cada tipo de arquivo em pastas especificas: CSS na pasta css, imagens na pasta img ou imanges, JavaScript na pasta JS... Isso ajuda a não misturar as coisas e permite que você encontre o arquivo que procura de forma mais rápida.

### 7. Sempre... <span style="text-decoration: underline;">SEMPRE</span> use <?php ... ?>
Deixe o código PHP entre as tags <?php e ?>... Não há o que discutir aqui. :P

Antigamente era possível usar <? ... ?>, <% ... %> e até <script language="php">...</script> mas isso não é nada recomendado e não segue os padrões de hoje em dia... Sem contar que na próxima versão do PHP, o PHP 6, não serão mais aceitas outras tags além da <?php ... ?>.

### 8. Use nomes consistentes e lógicos para variáveis, funções, métodos e classes
Uma vez o [Guilherme Chapiewski](http://gc.blog.br/) falou sobre um exemplo de código que ele viu que era algo como "$mano = $lano + $pano + $dano;", eram variáveis que representavam valores financeiros como "Lucro do Ano", "Débitos do Ano" e "Média do Ano"... Mas fica praticamente impossível perceber isso de primeira... Por isso nomes lógicos e consistentes... Poderia ser $lucroAno, $debitoAno e por aí vai.

### 9. Use uma ferramenta de design de Banco de Dados
Nem todo programador consegue visualizar um banco de dados da forma correta... Use uma ferramenta de design de banco de dados que te ajude a organizar suas tabelas e as colunas dessas tabelas.. Depois é só exportar e rodar. ;)

<strong>Leia mais:</strong> [Modelagem de banco de dados](/modelagem-de-banco-de-dados)

### 10. Não se preocupe em perguntar, mas nunca tenha medo de tentar
Se você não tentar antes de perguntar nunca vai saber da sua capacidade... Tente, mude, tente novamente, e se você conseguir vai ser muito mais satisfatório do que tentar aprender com a resposta dos outros.

E isso é tudo. :)

