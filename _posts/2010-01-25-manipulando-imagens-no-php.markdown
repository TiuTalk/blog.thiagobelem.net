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
<p>Fala fala minha gente! Tudo na mais devida paz? :)</p>
<p>Hoje vou falar mais um pouquinho sobre a classe <a title="WideImage" rel="external" href="http://wideimage.sourceforge.net/">WideImage</a> (agora na versão 9.09.04) que eu já falei um pouco no artigo <a href="http://blog.thiagobelem.net/php/redimensionando-imagens-automaticamente-com-o-php/" title="Redimensionando imagens automaticamente com o PHP">Redimensionando imagens automaticamente com o PHP</a>.</p>
<p>A classe <strong>WideImage</strong> te ajuda manipular imagens salvas no seu site de forma extemamente fácil e intuitiva, com ela você pode:</p>
<ul>
<li>Redimensionar imagens;</li>
<li>Cropar (cortar) imagens;</li>
<li>Inserir marca d'agua na imagem;</li>
<li>Mesclar imagens;</li>
<li>Converter a imagem em escalas de cinza;</li>
<li>E muito mais...</li>
</ul>
<p><strong style="color: #B40000">Atenção:</strong> A classe WideImage tem alguns pré-requisitos:</p>
<ul>
<li>PHP 5.2 ou superior (pode funcionar em versões anteriores, mas sem direito a suporte)</li>
<li>Extensão GD2 do PHP</li>
<li>Memória o suficiente para carregar as imagens</li>
</ul>
<p>
<h3>Carregando Imagens para a Memória</h3>
<p>Quando você for usar a classe para manipular uma imagem você precisa, claro, carregar a imagem antes... Existem duas formas de fazer isso:<br />
[code language="php"]<br />
// Carrega a imagem de um arquivo<br />
$img = WideImage::load('imagens/minha_foto.jpg');<br />
[/code]</p>
<p>[code language="php"]<br />
// Carrega a imagem de um arquivo<br />
$img = WideImage::loadFromFile('imagens/minha_foto.jpg');<br />
[/code]</p>
<p>Feito isso você carregou a imagem para e memória do PHP.</p>
<p>
<h4>Redimensionando Imagens</h4>
<p>Depois de carregada uma imagem pode ser redimensionada... Existem três tipos de redimensionamento:</p>
<ul>
<li><strong style="color: #B40000">inside</strong> - A imagem será redimensionada para <strong>caber dentro</strong> da largura e altura especificada, não distorce a imagem (tipo padrão)</li>
<li><strong style="color: #B40000">outside</strong> - A imagem será redimensionada para <strong>preencher</strong> a largura e altura especificada, não distorce a imagem</li>
<li><strong style="color: #B40000">fill</strong> - A imagem será redimensionada para <strong>preencher por completo</strong> a largura e altura especificada, distorce a imagem se necessário</li>
</ul>
<p>[code language="php"]<br />
// Redimensiona a imagem para caber em um quadrado de 200x200px<br />
$img = $img->resize(200, 200, 'inside');<br />
[/code]</p>
<p>Isso fará com que a imagem seja redimensionada para caber dentro de um quadrado de 200x200 píxels... A imagem final poderá ter 200x200, 100x200 ou 200x100 pois todos esses tamanhos estão menores ou iguais a 200x200 píxels.</p>
<p>[code language="php"]<br />
// Redimensiona a imagem para preencher um quadrado de 350x200px<br />
$img = $img->resize(350, 200, 'outside');<br />
[/code]</p>
<p>Isso fará com que a imagem seja redimensionada para preencher um quadrado de 350x200 píxels... Se as proporcões da imagem forem maiores que essa proporção de 350x200 a imagem final será maior que o 350x200.<br />
Suponhamos que imagem fosse um quadrado de 500x500, depois de redimensionada ela terá 350x350, pois ela está preenchendo o quadrado de 350x200 mas precisa manter a sua proporção original de 1:1... Se o tipo de redimensionamento fosse "<strong>fill</strong>" a imagem final teria sempre 350x200, mesmo que ela fosse menor antes, pois o <strong>fill</strong> distorce a imagem quando necessário.</p>
<p>Existe ainda um quarto parâmetro que é a "direção" do redimensionamento, os seus valores possíveis são:</p>
<ul>
<li><strong style="color: #B40000">any</strong> - A imagem será redimensionada <strong>sempre</strong>, seja ela maior ou menor que as dimensões de destino (direção padrão)</li>
<li><strong style="color: #B40000">down</strong> - A imagem será redimensionada apenas <strong>quando ela for maior</strong> que as dimensões de destino</li>
<li><strong style="color: #B40000">up</strong> - A imagem será redimensionada apenas <strong>quando ela for meno</strong> que as dimensões de destino</li>
</ul>
<p>
<h4>Cropando (cortando) Imagens</h4>
<p>Você também pode cortar uma imagem carregada... O <strong>crop()</strong> é um dos métodos mais interessantes da WideImage, e usá-lo em conjunto com o método <strong>resize()</strong> é devastador...</p>
<p>O <strong>crop()</strong> tem quatro parâmetros: <strong>coorenada X</strong> onde o corte irá começar, <strong>coordenada Y</strong> onde o corte irá começar, <strong>largura</strong> do corte e <strong>altura</strong> do corte.</p>
<p>Vamos a alguns exemplos de crop:</p>
<p>[code language="php"]<br />
// Corta um quadrado de 150x150px no canto superior direito da imagem<br />
$img = $img->crop(0, 0, 150, 150);<br />
[/code]</p>
<p>Mas ninguém quer cortar um pedaço do canto superior direito da imagem... Geralmente precisamos fazer um corte no meio da imagem... É aí que o crop() mostra seu poder:</p>
<p>[code language="php"]<br />
// Corta um quadrado de 100x80px no meio da imagem<br />
$img = $img->crop('50% - 50', '50% - 40', 100, 80);<br />
[/code]</p>
<p>Veja que interessante: nos dois primeiros parâmetros usamos um posicionamento diferente... dizemos que o crop irá para a metade da imagem (50%) e voltará 50px para lagura e 40px para a altura e depois irá fazer um corte de 100x80... Genial não é? Isso fará um corte de 100x80 no meio da imagem.</p>
<p>E se a imagem for muito grande? Você pode acabar pegando um pedaço da imagem que não serve de nada... É aí que você aprende a usar o resize() em conjunto com o crop():</p>
<p>[code language="php"]<br />
// Redimensiona a imagem para preencher uma area de 100x80<br />
$img = $img->resize(100, 80, 'outside');<br />
// Corta um quadrado de 100x80px no meio da imagem<br />
$img = $img->crop('50% - 50', '50% - 40', 100, 80);<br />
[/code]</p>
<p>Se você gostar, também pode fazer tudo de uma vez, o que é bem mais interessante:<br />
[code language="php"]<br />
// Redimensiona e corta a imagem<br />
$img = $img->resize(100, 80, 'outside')->crop('50% - 50', '50% - 40', 100, 80);<br />
[/code]</p>
<p>
<h4>Salvando Imagens</h4>
<p>Você já carregou sua imagem, redimensionou e cropou ela.. Agora só falta tirar ela da memória e salvar ela em um arquivo, substituindo (ou não) o anterior... E é assim que você faz isso:<br />
[code language="php"]<br />
// Salva a imagem em um novo arquivo<br />
$img->saveToFile('/imagens/minha_foto_menor.jpg');<br />
[/code]<br />
Quando a imagem for salva em JPG você também pode definir a qualidade da imagem, diminuindo assim o tamanho do arquivo:<br />
[code language="php"]<br />
// Salva a imagem em um novo arquivo com 80% de qualidade<br />
$img->saveToFile('/imagens/minha_foto_menor.jpg', null, 80);<br />
[/code]<br />
<br />
<h4>Enviando Imagens para o Navegador</h4>
<p>Você também pode enviar imagens diretamente para o navegador, isso funciona bem quando você quer manipular uma imagem e exibí-la sem precisar salvá-la em um arquivo novo... É só tirar ela da memória e jogar para o navegador, assim:<br />
[code language="php"]<br />
// Define o tipo de cabeçalho para exibir a imagem corretamente<br />
header("Content-type: image/jpeg");</p>
<p>// Envia a imagem para o navegador com 80% de qualidade<br />
$img->asString('jpg', 80);<br />
[/code]<br />
<br />
<h4>Outros Exemplos</h4>
<p>Veja aqui um exemplo onde carregamos uma imagem do HD, redimensionamos, cropamos e salvamos no mesmo local, substituindo a anterior:<br />
[code language="php"]<br />
$arquivo = '/imagens/fotos/tiutalk.jpg';</p>
<p>// Carrega a imagem<br />
$img = WideImage::load($arquivo);</p>
<p>// Redimensiona a imagem para um quadrado de 100x100<br />
$img = $img->resize(100, 100, 'outside');</p>
<p>// Corta um quadrado de 100x100 no centro da imagem<br />
$img = $img->crop('50% - 50', '50% - 50', 100, 100);</p>
<p>// Salva a imagem substituindo a antiga<br />
$img->saveToFile($arquivo);</p>
<p>// Limpa a imagem da memória<br />
$img->destroy();<br />
[/code]</p>
<p>E veja uma versão onde fazemos isso tudo numa linha:</p>
<p>[code language="php"]$arquivo = '/imagens/fotos/tiutalk.jpg';</p>
<p>WideImage::load($arquivo)->resize(100, 100, 'outside')->crop('50% - 50', '50% - 50', 100, 100)->saveToFile($arquivo)->destroy();[/code]</p>
<p>E aí? Gostaram? :)</p>
