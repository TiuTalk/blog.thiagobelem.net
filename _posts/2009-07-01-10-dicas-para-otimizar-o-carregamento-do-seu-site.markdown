---
layout: post
status: publish
published: true
title: 10 dicas para otimizar o carregamento do seu site
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Veja uma série de dicas e passos que vão ajudar a carregar o seu site muito
  mais rápido! :)
wordpress_id: 558
wordpress_url: http://blog.thiagobelem.net/?p=558
date: '2009-07-01 20:13:07 -0300'
date_gmt: '2009-07-01 23:13:07 -0300'
categories:
- HTML
- CSS
- Javascript
- Otimização
- SEO
tags:
- SEO
- HTML
- CSS
- Javascript
---
<p>A alguns meses fiz um artigo sobre <a href="http://blog.thiagobelem.net/css/otimizando-o-seu-site-carregamento/" target="_blank">como otimizar o carregamento do seu site</a> no qual eu falava sobre headers, compactação de resposta HTTP dentre outros.</p>
<p>Hoje vou falar sobre algumas outras dicas que fazem muito efeito tanto no carregamento do site quanto do bandwidth mensal que você vai usar.</p>
<p>Alguns sites por ai dizem que o tempo ideal de carregamento de um site é quatro segundos, mas isso depende muito da Internet da pessoa e, claro, do tipo de conteúdo que estamos falando. Eu acredito que um site que carregue em até 10 segundos seja de ótimo tamanho e, se for por volta disso, não vai prejudicar o número de visitantes.</p>
<h3>1. Tag &lt;style&gt; e style-in-line</h3>
<p>Muita gente ainda usa o CSS todo dentro de uma tag style ou - não menos errado - usa <em>style-in-line</em>, que significa usar a propriedade <strong>style=""</strong> do elemento para mudar o estilo dele. O CSS foi lançado na década de 90 gente! Ele foi feito pra ser usado!</p>
<p>Além de deixar o seu código fonte muito mais limpo, o uso de CSS em folhas de estilos separadas otimiza o carregamento do site e permite uma melhor separação entre a estrutura (HTML) e a aparência (CSS) do mesmo.</p>
<p>Imagine que você vai fazer o papel de uma peça de teatro e lá pela terceira página, entre uma linha e outra, você encontra uma observação que diz que o seu personagem tem cabelo vermelho... Não seria melhor que isso viesse logo depois da capa, pra você já se preparar?</p>
<h3>2. Arquivos JavaScript, uni-vos!</h3>
<p>Falei sobre isso no outro artigo mas vale repetir: muita gente usa um site que, por exemplo, chama o jQuery mais três plugins e um script criado com os efeitos do site.. Isso dá um total de cinco arquivos, cinco requisições diferentes que o seu servidor recebe, organiza, manipula e redireciona só pra inserir o JavaScript do seu site.</p>
<p>Una (junte) todos os códigos JavaScript do seu site em um arquivo só, e sé isso for te dar muita dor-de-cabeça, veja sobre o <a href="http://code.google.com/p/minify/" title="Google Minify" target="_blank">Google Minify</a></p>
<h3>3. Acabe com o Flash</h3>
<p>Antes que você, designer, levante uma tocha e inicie uma caçada contra mim, essa dica vale para a exibição de conteúdo... Não daquele topo fofinho que você fez pro seu site.</p>
<p>Flash pesa? Sim, pesa. Evite usar objects espalhados pelo site... O Flash é <strong>mal lido</strong> pelo Google, não segue nenhum padrão de organização de código (já que trabalhamos apenas com imagens e efeitos visuais) e é muito mais dificil de alterar do que um simples (X)HTML... Tente usar efeitos com JavaScript (leia-se jQuery), que pesa muito menos que o Flash e você não precisa do .fla para editar... Qualquer problema é só entrar no FTP e mudar.</p>
<h3>4. As futilidades da Web</h3>
<p>Achou um chat cheio de códigos prontos de chats, sandbox, mural de recados, previsão do tempo e tudo mais? Pode sair dele agora. Não saia enfiando códigos prontos e iframes e scripts no seu site só pra tentar deixar ele mais legal... Isso é coisa de principiante e isso não traz vantagem nenhuma pro seu site! A não ser, claro, que vantagem pra você signifique coisas que ninguém vai usar.</p>
<h3>5. Galeria de fotos</h3>
<p>Seu site é uma galeria de fotos super transada e cheia de efeitos em JavaScript? Legal... Mas precisa mesmo carregar todas aquelas 80 fotos de uma só vez em escala real?</p>
<p>Crie <em>thumbnails</em> (miniaturas) das suas fotos e imagens que pesam muito (mais que 50Kb), isso vai economizar MUITO <em>bandwidth</em> (tráfego mensal) pro seu site.</p>
<h3>6. Livro do autor</h3>
<p>Você é um autor de livros super renomado e quer disponibilizar toda as 841 páginas do seu livro de bolso no seu site pessoal? Então, por favor, não coloque tudo em uma página só. Separe as páginas do livro em páginas do site... Várias! Quanto menor o conteúdo, melhor pro visitante, melhor pro Google, melhor pra velocidade do seu site, e melhor pro seu bolso (se você trabalhar com publicidade online). <strong>Menos é mais!</strong></p>
<h3>7. Meu site é HD!</h3>
<p>Bom... Você já diviu seu site em páginas, sua galeria de fotos usa thumbnails e.. peraí... As fotos (grandes) estão com 100% de qualidade?! Pra que? O cérebro humano quase nunca conseguiu reparar a diferença entre uma imagem com 80% e outra com 100% de qualidade. Reduza a qualidade das suas fotos, vale a pena.</p>
<h3>8. E o tamanho da minha imagem é...</h3>
<p>Quando você usar o atributo &lt;img ... /&gt; defina a largura e altura da imagem, isso vai economizar trabalho pro navegador do visitante que não vai ter que carregar toda a imagem antes pra descobrir o tamanho de exibição.</p>
<h3>9. O que você vê é o que você tem, mas não é o que você precisa!</h3>
<p>Sabe aquele seu editor de sites com suporte ao <strong>WYSIWYG</strong> (<em>What You See Is What You Get</em>)? Acha legal ele fazer todo o trabalho pra você de criar o HTML e o CSS sem que você precise se preocupar? Pois vá até o código fonte criado por ele e comece a fazer uma limpeza geral. Na maioria dos casos eles acabam criando códigos além do necessário, seja no HTML, seja no CSS.</p>
<p>Aprenda a criar sites usando um editor de texto que não te mostra uma representação visual, como o Notepad++, EditPlus, NetBeans e vários outros... Até o próprio Notepad serve!</p>
<h3>10. Seu site não é um Centro de Convenções!</h3>
<p>Não precisa ficar chamando um arquivo de cada site... jQuery do Google, CSS da Globo.com e por ai vai.. Quanto mais arquivos você chamar de servidores que não são o seu site, mais lento vai ser o carregamento dele pois o visitante vai precisar "resolver" vários DNSs, não só o seu.</p>
<p>--</p>
<p>Espero que tenham gostado! :D</p>