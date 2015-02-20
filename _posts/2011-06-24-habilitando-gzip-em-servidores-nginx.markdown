---
layout: post
title: Habilitando GZIP em servidores Nginx

date: '2011-06-24 18:20:37 -0300'
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
Fala pessoal!

Já faz um tempão que não posto um artigo "técnico" aqui, não é mesmo?

Hoje precisei habilitar o [Nginx](http://nginx.org/) (um servidor web <strong>parrudão</strong> que veio pra cutucar o <strong>Apache</strong>)... Depois de pesquisar um pouco, cheguei à uma solução e resolvi repassar. :)

### gzoque?
Pra quem não sabe, o <strong>gzip</strong> é um método de compressão de arquivos (lembram do ZIP e do RAR?) utilizando também no mundo WEB.. O seu navegador consegue receber um arquivo .js compactado com <strong>gzip</strong> e utilizá-lo da mesma forma.

[http://pt.wikipedia.org/wiki/Gzip](http://pt.wikipedia.org/wiki/Gzip)

Na maioria dos casos a compressão em gzip atinge uma <strong>redução de 50% do tamanho original</strong>... Por isso ela é muito recomendada na hora de otimizar o carregamento dos sites.

### Configurando o nginx
Pra fazer o nginx entregar arquivos HTML, XML, CSS, JS (e outros) comprimidos em gzip você precisa editar o arquivo de configuração do site, normalmente esses arquivos ficam na pasta:


<div data-gist-id="05bf59bea9cfc8bccab0" data-gist-show-loading="false"></div>

Mas isso pode variar no seu servidor.

Encontrado o arquivo, é só colocar algo do tipo dentro do bloco de configuração do seu site:


<div data-gist-id="12a29384813c2d14cc4c" data-gist-show-loading="false"></div>

Gist: [https://gist.github.com/1045708](https://gist.github.com/1045708)

Depois é só reiniciar o seu servidor:


<div data-gist-id="0e601893182b92db3f8e" data-gist-show-loading="false"></div>

E correr para o abraço! :)

