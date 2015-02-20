---
layout: post
title: Manipulando imagens no PHP
excerpt: A classe <strong>WideImage</strong> te ajuda a manipular imagens no PHP de
  forma rápida e prática, com menos de 15 linhas você pode redimensionar, cropar (cortar)
  e salvar uma imagem com qualidade e velocidade. Veja aqui exemplos e explicação
  de como usar cada uma das funcionalidades da classe <strong>WideImage</strong>.

date: '2010-01-25 09:59:28 -0200'
categories:
- PHP
- Tutoriais
- Orientação a objetos
tags:
- PHP
- Manipulação de Imagens
- WideImage
---
Fala fala minha gente! Tudo na mais devida paz? :)

Hoje vou falar mais um pouquinho sobre a classe [Redimensionando imagens automaticamente com o PHP](/redimensionando-imagens-automaticamente-com-o-php).

A classe <strong>WideImage</strong> te ajuda manipular imagens salvas no seu site de forma extemamente fácil e intuitiva, com ela você pode:

<ul>
<li>Redimensionar imagens;</li>
<li>Cropar (cortar) imagens;</li>
<li>Inserir marca d'agua na imagem;</li>
<li>Mesclar imagens;</li>
<li>Converter a imagem em escalas de cinza;</li>
<li>E muito mais...</li>
</ul>
<strong style="color: #B40000">Atenção:</strong> A classe WideImage tem alguns pré-requisitos:

<ul>
<li>PHP 5.2 ou superior (pode funcionar em versões anteriores, mas sem direito a suporte)</li>
<li>Extensão GD2 do PHP</li>
<li>Memória o suficiente para carregar as imagens</li>
</ul>

### Carregando Imagens para a Memória
Quando você for usar a classe para manipular uma imagem você precisa, claro, carregar a imagem antes... Existem duas formas de fazer isso:

<div data-gist-id="3800c622130578fffc1f" data-gist-show-loading="false"></div>


<div data-gist-id="b524654fade13ddf76e2" data-gist-show-loading="false"></div>

Feito isso você carregou a imagem para e memória do PHP.


#### Redimensionando Imagens
Depois de carregada uma imagem pode ser redimensionada... Existem três tipos de redimensionamento:

<ul>
<li><strong style="color: #B40000">inside</strong> - A imagem será redimensionada para <strong>caber dentro</strong> da largura e altura especificada, não distorce a imagem (tipo padrão)</li>
<li><strong style="color: #B40000">outside</strong> - A imagem será redimensionada para <strong>preencher</strong> a largura e altura especificada, não distorce a imagem</li>
<li><strong style="color: #B40000">fill</strong> - A imagem será redimensionada para <strong>preencher por completo</strong> a largura e altura especificada, distorce a imagem se necessário</li>
</ul>

<div data-gist-id="a849c3e86ff967a0cf51" data-gist-show-loading="false"></div>

Isso fará com que a imagem seja redimensionada para caber dentro de um quadrado de 200x200 píxels... A imagem final poderá ter 200x200, 100x200 ou 200x100 pois todos esses tamanhos estão menores ou iguais a 200x200 píxels.


<div data-gist-id="d10e78afe1154e448015" data-gist-show-loading="false"></div>

Isso fará com que a imagem seja redimensionada para preencher um quadrado de 350x200 píxels... Se as proporcões da imagem forem maiores que essa proporção de 350x200 a imagem final será maior que o 350x200.
Suponhamos que imagem fosse um quadrado de 500x500, depois de redimensionada ela terá 350x350, pois ela está preenchendo o quadrado de 350x200 mas precisa manter a sua proporção original de 1:1... Se o tipo de redimensionamento fosse "<strong>fill</strong>" a imagem final teria sempre 350x200, mesmo que ela fosse menor antes, pois o <strong>fill</strong> distorce a imagem quando necessário.

Existe ainda um quarto parâmetro que é a "direção" do redimensionamento, os seus valores possíveis são:

<ul>
<li><strong style="color: #B40000">any</strong> - A imagem será redimensionada <strong>sempre</strong>, seja ela maior ou menor que as dimensões de destino (direção padrão)</li>
<li><strong style="color: #B40000">down</strong> - A imagem será redimensionada apenas <strong>quando ela for maior</strong> que as dimensões de destino</li>
<li><strong style="color: #B40000">up</strong> - A imagem será redimensionada apenas <strong>quando ela for meno</strong> que as dimensões de destino</li>
</ul>

#### Cropando (cortando) Imagens
Você também pode cortar uma imagem carregada... O <strong>crop()</strong> é um dos métodos mais interessantes da WideImage, e usá-lo em conjunto com o método <strong>resize()</strong> é devastador...

O <strong>crop()</strong> tem quatro parâmetros: <strong>coorenada X</strong> onde o corte irá começar, <strong>coordenada Y</strong> onde o corte irá começar, <strong>largura</strong> do corte e <strong>altura</strong> do corte.

Vamos a alguns exemplos de crop:


<div data-gist-id="d303d3b0e53ce7970f4b" data-gist-show-loading="false"></div>

Mas ninguém quer cortar um pedaço do canto superior direito da imagem... Geralmente precisamos fazer um corte no meio da imagem... É aí que o crop() mostra seu poder:


<div data-gist-id="38e004e8e369546aacbf" data-gist-show-loading="false"></div>

Veja que interessante: nos dois primeiros parâmetros usamos um posicionamento diferente... dizemos que o crop irá para a metade da imagem (50%) e voltará 50px para lagura e 40px para a altura e depois irá fazer um corte de 100x80... Genial não é? Isso fará um corte de 100x80 no meio da imagem.

E se a imagem for muito grande? Você pode acabar pegando um pedaço da imagem que não serve de nada... É aí que você aprende a usar o resize() em conjunto com o crop():


<div data-gist-id="381f94bdc7bff437eb03" data-gist-show-loading="false"></div>

Se você gostar, também pode fazer tudo de uma vez, o que é bem mais interessante:

<div data-gist-id="95587373cfc090ab34ff" data-gist-show-loading="false"></div>


#### Salvando Imagens
Você já carregou sua imagem, redimensionou e cropou ela.. Agora só falta tirar ela da memória e salvar ela em um arquivo, substituindo (ou não) o anterior... E é assim que você faz isso:

<div data-gist-id="d552a16d05fb35aa6107" data-gist-show-loading="false"></div>

Quando a imagem for salva em JPG você também pode definir a qualidade da imagem, diminuindo assim o tamanho do arquivo:

<div data-gist-id="609fe7a6aa749c13f280" data-gist-show-loading="false"></div>

#### Enviando Imagens para o Navegador
Você também pode enviar imagens diretamente para o navegador, isso funciona bem quando você quer manipular uma imagem e exibí-la sem precisar salvá-la em um arquivo novo... É só tirar ela da memória e jogar para o navegador, assim:

<div data-gist-id="ba6e41d34556d59cbf13" data-gist-show-loading="false"></div>

#### Outros Exemplos
Veja aqui um exemplo onde carregamos uma imagem do HD, redimensionamos, cropamos e salvamos no mesmo local, substituindo a anterior:

<div data-gist-id="837aa01e67465786b299" data-gist-show-loading="false"></div>

E veja uma versão onde fazemos isso tudo numa linha:


<div data-gist-id="f99e3e031563567347b0" data-gist-show-loading="false"></div>

E aí? Gostaram? :)

