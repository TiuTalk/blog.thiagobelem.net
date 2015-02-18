---
layout: post
title: Criando um tema para WordPress – Parte 4

date: '2012-04-10 16:30:44 -0300'
categories:
- Desenvolvimento
- PHP
- HTML
- WordPress
- Artigos
tags:
- PHP
- HTML
- WordPress
- Desenvolvimento
- tema
- theme
- wp
- the loop
- post
- artigos
- header
- footer
- sidebar
---
<p>Fala minha gente! tudo bom?</p>
<p>Peço desculpas pela demora em continuar com essa sequência de posts: eu estava trabalhando em alguns projetos e fiquei sem muito tempo livre.</p>
<p>Hoje vamos continuar com a Parte 4 do nosso tema! :)</p>
<h2>Criando um tema para WordPress</h2>
<p>Se você ainda não está acompanhando, veja as outras partes dessa sequência de artigos:</p>
<ul>
<li><a title="Criando um tema para WordPress – Parte 1" href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress/" target="_blank">Parte 1 - Estrutura inicial do tema</a></li>
<li><a title="Criando um tema para WordPress – Parte 2" href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-2/" target="_blank">Parte 2 - HTML5, Funções básicas do WordPress, Feed RSS e Atom</a></li>
<li><a title="Criando um tema para WordPress – Parte 3" href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-3/" target="_blank">Parte 3 - Topo e listagem de posts</a></li>
</ul>
<h2>Parte 4 - Separando o tema em blocos reutilizáveis</h2>
<p>Na <a title="Criando um tema para WordPress – Parte 3" href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-3/" target="_blank">Parte 3</a> criamos o template básico da home (<strong>index.php</strong>) que ficou mais ou menos assim:</p>
<div data-gist-id="2353682" data-gist-show-loading="false"></div>
<p>Agora vamos separar as partes do nosso tema!</p>
<h3>Header e Footer</h3>
<p>É uma prática muito comum (e recomendada) que você separe - pelo menos - o topo e o rodapé do seu template em arquivos separados, assim podemos reutilizar esses "blocos" em todos os templates (páginas) do blog.</p>
<p>Vamos começar separar o <strong>header.php</strong> que contém todo o código desde o <strong>DOCTYPE</strong> até o <strong>fim do topo</strong> do seu site:</p>
<div data-gist-id="2353722" data-gist-show-loading="false"></div>
<p>Depois precisamos separar o <strong>footer.php</strong>, fazendo a mesma coisa: partindo do <strong>fim do conteúdo</strong> (começo do rodapé) até o <strong></body></strong>:</p>
<div data-gist-id="2353728" data-gist-show-loading="false"></div>
<p>Depois de salvar esses dois arquivos, é só fazer o "include" dentro do nosso <strong>index.php</strong>, deixando-o muito mais limpo:</p>
<div data-gist-id="2353735" data-gist-show-loading="false"></div>
<p>Acabamos de usar duas funções novas:</p>
<ul>
<li><a href="http://codex.wordpress.org/Function_Reference/get_header" target="_blank">get_header()</a> - Incluir o topo padrão do site (<strong>header.php</strong>)</li>
<li><a href="http://codex.wordpress.org/Function_Reference/get_footer" target="_blank">get_footer()</a> - Inclui o rodapé padrão do site (<strong>footer.php</strong>)</li>
</ul>
<p>Percebam que eu chamei de "topo padrão" e "rodapé padrão" pois se você fizer uma chamada do tipo:<strong> get_header('especial')</strong> ele vai incluir o arquivo <strong>header-especial.php</strong> ao invés de <strong>header.php</strong>. .. O mesmo vale pro footer :)</p>
<h3>Lateral</h3>
<p>Por enquanto não temos um conteúdo pra lateral, mas o elemento (sidebar) já existe... então podemos fazer exatamente o que fizemos com o topo e rodapé: separar a lateral em um novo arquivo que pode ser re-utilizado pelos outros <strong>templates</strong>.</p>
<p>Primeiro criamos um arquivo sidebar.php com a marcação da lateral:</p>
<div data-gist-id="2353760" data-gist-show-loading="false"></div>
<p>Depois incluímos ele no template usando a função <a href="http://codex.wordpress.org/Function_Reference/get_sidebar" target="_blank">get_sidebar()</a> que funciona exatamente como as funções <a href="http://codex.wordpress.org/Function_Reference/get_header" target="_blank">get_header()</a> e <a href="http://codex.wordpress.org/Function_Reference/get_footer" target="_blank">get_footer()</a>, assim:</p>
<div data-gist-id="2353770" data-gist-show-loading="false"></div>
<p>Com isso nosso template contém só o conteúdo/miolo daquela página e podemos ter páginas com formatos diferentes, que incluam ou não a lateral e que possam usar topos ou rodapés diferentes do padrão (que não vai ser o caso desse blog).</p>
<h3>Finalizando</h3>
<p>Agora nosso template já tem a estrutura básica (e recomendada) de um template pro WordPress:</p>
<ul>
<li><strong>header.php</strong> - Topo do site</li>
<li><strong>footer.php</strong> - Rodapé do site</li>
<li><strong>sidebar.php</strong> - Lateral do site</li>
<li><strong>index.php</strong> - Template da <strong>página inicial</strong> (listagem de posts)</li>
</ul>
<p>Na <a title="Criando um tema para WordPress – Parte 5" href="http://blog.thiagobelem.net/criando-um-tema-para-wordpress-parte-5/">Parte 5</a> iremos criar o <strong>single.php</strong> que é justamente o template que mostra todo o <strong>conteúdo do post</strong> (texto completo).</p>
<p>Acompanhe o template que estou criando pro meu blog, com mais algumas coisinhas (que não coloquei aqui), no GitHub: <a href="https://github.com/TiuTalk/blog.thiagobelem.net" target="_blank">https://github.com/TiuTalk/blog.thiagobelem.net</a></p>
<p>Gostou? Então comenta, compartilha e recomenda! <img src="http://blog.thiagobelem.net/wp-includes/images/smilies/icon_smile.gif" alt=":)" /></p>
<p>Abraços e até a próxima!</p>
