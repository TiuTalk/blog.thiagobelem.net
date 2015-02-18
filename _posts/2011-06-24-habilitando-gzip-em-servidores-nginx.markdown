---
layout: post
status: publish
published: true
title: Habilitando GZIP em servidores Nginx
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 1618
wordpress_url: http://blog.thiagobelem.net/?p=1618
date: '2011-06-24 18:20:37 -0300'
date_gmt: '2011-06-24 21:20:37 -0300'
categories:
- Desenvolvimento
- Otimização
- Linux
- Nginx
tags:
- Linux
- Otimização
- nginx
- gzip
- rar
- zip
- compactação
- compressão
---
<p>Fala pessoal!</p>
<p>Já faz um tempão que não posto um artigo "técnico" aqui, não é mesmo?</p>
<p>Hoje precisei habilitar o <a title="gzip" href="http://www.gzip.org/">gzip</a> na minha VPS que roda <a title="Nginx" href="http://nginx.org/">Nginx</a> (um servidor web <strong>parrudão</strong> que veio pra cutucar o <strong>Apache</strong>)... Depois de pesquisar um pouco, cheguei à uma solução e resolvi repassar. :)</p>
<h3>gzoque?</h3>
<p>Pra quem não sabe, o <strong>gzip</strong> é um método de compressão de arquivos (lembram do ZIP e do RAR?) utilizando também no mundo WEB.. O seu navegador consegue receber um arquivo .js compactado com <strong>gzip</strong> e utilizá-lo da mesma forma.</p>
<p><a href="http://pt.wikipedia.org/wiki/Gzip">http://pt.wikipedia.org/wiki/Gzip</a></p>
<p>Na maioria dos casos a compressão em gzip atinge uma <strong>redução de 50% do tamanho original</strong>... Por isso ela é muito recomendada na hora de otimizar o carregamento dos sites.</p>
<h3>Configurando o nginx</h3>
<p>Pra fazer o nginx entregar arquivos HTML, XML, CSS, JS (e outros) comprimidos em gzip você precisa editar o arquivo de configuração do site, normalmente esses arquivos ficam na pasta:</p>
<p>[code]/etc/nginx/sites-available/{arquivo}[/code]</p>
<p>Mas isso pode variar no seu servidor.</p>
<p>Encontrado o arquivo, é só colocar algo do tipo dentro do bloco de configuração do seu site:</p>
<p>[code language="shell"]# Habilita o gzip<br />
gzip			on;<br />
gzip_http_version	1.1;<br />
gzip_vary		on;<br />
gzip_comp_level	6;<br />
gzip_proxied	any;</p>
<p># Mime-types que serão compactados<br />
gzip_types		text/html text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;</p>
<p># http://blog.leetsoft.com/2007/7/25/nginx-gzip-ssl<br />
gzip_buffers	16	8k;</p>
<p># Desabilita o gzip para alguns navegadores<br />
gzip_disable	&quot;MSIE [1-6].(?!.*SV1)&quot;;[/code]</p>
<p>Gist: <a href="https://gist.github.com/1045708" target="_blank">https://gist.github.com/1045708</a></p>
<p>Depois é só reiniciar o seu servidor:</p>
<p>[code language="shell"]sudo /etc/init.d/nginx restart[/code]</p>
<p>E correr para o abraço! :)</p>
