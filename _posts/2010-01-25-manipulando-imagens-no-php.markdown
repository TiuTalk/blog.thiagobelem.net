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

<h3>Carregando Imagens para a Memória</h3>
Quando você for usar a classe para manipular uma imagem você precisa, claro, carregar a imagem antes... Existem duas formas de fazer isso:
[code language="php"]
// Carrega a imagem de um arquivo
$img = WideImage::load('imagens/minha_foto.jpg');
[/code]


[code language="php"]
// Carrega a imagem de um arquivo
$img = WideImage::loadFromFile('imagens/minha_foto.jpg');
[/code]

Feito isso você carregou a imagem para e memória do PHP.


<h4>Redimensionando Imagens</h4>
Depois de carregada uma imagem pode ser redimensionada... Existem três tipos de redimensionamento:

<ul>
<li><strong style="color: #B40000">inside</strong> - A imagem será redimensionada para <strong>caber dentro</strong> da largura e altura especificada, não distorce a imagem (tipo padrão)</li>
<li><strong style="color: #B40000">outside</strong> - A imagem será redimensionada para <strong>preencher</strong> a largura e altura especificada, não distorce a imagem</li>
<li><strong style="color: #B40000">fill</strong> - A imagem será redimensionada para <strong>preencher por completo</strong> a largura e altura especificada, distorce a imagem se necessário</li>
</ul>

[code language="php"]
// Redimensiona a imagem para caber em um quadrado de 200x200px
$img = $img->resize(200, 200, 'inside');
[/code]

Isso fará com que a imagem seja redimensionada para caber dentro de um quadrado de 200x200 píxels... A imagem final poderá ter 200x200, 100x200 ou 200x100 pois todos esses tamanhos estão menores ou iguais a 200x200 píxels.


[code language="php"]
// Redimensiona a imagem para preencher um quadrado de 350x200px
$img = $img->resize(350, 200, 'outside');
[/code]

Isso fará com que a imagem seja redimensionada para preencher um quadrado de 350x200 píxels... Se as proporcões da imagem forem maiores que essa proporção de 350x200 a imagem final será maior que o 350x200.
Suponhamos que imagem fosse um quadrado de 500x500, depois de redimensionada ela terá 350x350, pois ela está preenchendo o quadrado de 350x200 mas precisa manter a sua proporção original de 1:1... Se o tipo de redimensionamento fosse "<strong>fill</strong>" a imagem final teria sempre 350x200, mesmo que ela fosse menor antes, pois o <strong>fill</strong> distorce a imagem quando necessário.

Existe ainda um quarto parâmetro que é a "direção" do redimensionamento, os seus valores possíveis são:

<ul>
<li><strong style="color: #B40000">any</strong> - A imagem será redimensionada <strong>sempre</strong>, seja ela maior ou menor que as dimensões de destino (direção padrão)</li>
<li><strong style="color: #B40000">down</strong> - A imagem será redimensionada apenas <strong>quando ela for maior</strong> que as dimensões de destino</li>
<li><strong style="color: #B40000">up</strong> - A imagem será redimensionada apenas <strong>quando ela for meno</strong> que as dimensões de destino</li>
</ul>

<h4>Cropando (cortando) Imagens</h4>
Você também pode cortar uma imagem carregada... O <strong>crop()</strong> é um dos métodos mais interessantes da WideImage, e usá-lo em conjunto com o método <strong>resize()</strong> é devastador...

O <strong>crop()</strong> tem quatro parâmetros: <strong>coorenada X</strong> onde o corte irá começar, <strong>coordenada Y</strong> onde o corte irá começar, <strong>largura</strong> do corte e <strong>altura</strong> do corte.

Vamos a alguns exemplos de crop:


[code language="php"]
// Corta um quadrado de 150x150px no canto superior direito da imagem
$img = $img->crop(0, 0, 150, 150);
[/code]

Mas ninguém quer cortar um pedaço do canto superior direito da imagem... Geralmente precisamos fazer um corte no meio da imagem... É aí que o crop() mostra seu poder:


[code language="php"]
// Corta um quadrado de 100x80px no meio da imagem
$img = $img->crop('50% - 50', '50% - 40', 100, 80);
[/code]

Veja que interessante: nos dois primeiros parâmetros usamos um posicionamento diferente... dizemos que o crop irá para a metade da imagem (50%) e voltará 50px para lagura e 40px para a altura e depois irá fazer um corte de 100x80... Genial não é? Isso fará um corte de 100x80 no meio da imagem.

E se a imagem for muito grande? Você pode acabar pegando um pedaço da imagem que não serve de nada... É aí que você aprende a usar o resize() em conjunto com o crop():


[code language="php"]
// Redimensiona a imagem para preencher uma area de 100x80
$img = $img->resize(100, 80, 'outside');
// Corta um quadrado de 100x80px no meio da imagem
$img = $img->crop('50% - 50', '50% - 40', 100, 80);
[/code]

Se você gostar, também pode fazer tudo de uma vez, o que é bem mais interessante:
[code language="php"]
// Redimensiona e corta a imagem
$img = $img->resize(100, 80, 'outside')->crop('50% - 50', '50% - 40', 100, 80);
[/code]


<h4>Salvando Imagens</h4>
Você já carregou sua imagem, redimensionou e cropou ela.. Agora só falta tirar ela da memória e salvar ela em um arquivo, substituindo (ou não) o anterior... E é assim que você faz isso:
[code language="php"]
// Salva a imagem em um novo arquivo
$img->saveToFile('/imagens/minha_foto_menor.jpg');
[/code]
Quando a imagem for salva em JPG você também pode definir a qualidade da imagem, diminuindo assim o tamanho do arquivo:
[code language="php"]
// Salva a imagem em um novo arquivo com 80% de qualidade
$img->saveToFile('/imagens/minha_foto_menor.jpg', null, 80);
[/code]

<h4>Enviando Imagens para o Navegador</h4>
Você também pode enviar imagens diretamente para o navegador, isso funciona bem quando você quer manipular uma imagem e exibí-la sem precisar salvá-la em um arquivo novo... É só tirar ela da memória e jogar para o navegador, assim:
[code language="php"]
// Define o tipo de cabeçalho para exibir a imagem corretamente
header("Content-type: image/jpeg");

// Envia a imagem para o navegador com 80% de qualidade
$img->asString('jpg', 80);
[/code]

<h4>Outros Exemplos</h4>
Veja aqui um exemplo onde carregamos uma imagem do HD, redimensionamos, cropamos e salvamos no mesmo local, substituindo a anterior:
[code language="php"]
$arquivo = '/imagens/fotos/tiutalk.jpg';

// Carrega a imagem
$img = WideImage::load($arquivo);

// Redimensiona a imagem para um quadrado de 100x100
$img = $img->resize(100, 100, 'outside');

// Corta um quadrado de 100x100 no centro da imagem
$img = $img->crop('50% - 50', '50% - 50', 100, 100);

// Salva a imagem substituindo a antiga
$img->saveToFile($arquivo);

// Limpa a imagem da memória
$img->destroy();
[/code]

E veja uma versão onde fazemos isso tudo numa linha:


[code language="php"]
$arquivo = '/imagens/fotos/tiutalk.jpg';

WideImage::load($arquivo)->resize(100, 100, 'outside')->crop('50% - 50', '50% - 50', 100, 100)->saveToFile($arquivo)->destroy();
[/code]

E aí? Gostaram? :)

