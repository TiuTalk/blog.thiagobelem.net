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

<h3>gzoque?</h3>
Pra quem não sabe, o <strong>gzip</strong> é um método de compressão de arquivos (lembram do ZIP e do RAR?) utilizando também no mundo WEB.. O seu navegador consegue receber um arquivo .js compactado com <strong>gzip</strong> e utilizá-lo da mesma forma.

[http://pt.wikipedia.org/wiki/Gzip](http://pt.wikipedia.org/wiki/Gzip)

Na maioria dos casos a compressão em gzip atinge uma <strong>redução de 50% do tamanho original</strong>... Por isso ela é muito recomendada na hora de otimizar o carregamento dos sites.

<h3>Configurando o nginx</h3>
Pra fazer o nginx entregar arquivos HTML, XML, CSS, JS (e outros) comprimidos em gzip você precisa editar o arquivo de configuração do site, normalmente esses arquivos ficam na pasta:


{% highlight sh linenos %}
/etc/nginx/sites-available/{arquivo}
{% endhighlight %}

Mas isso pode variar no seu servidor.

Encontrado o arquivo, é só colocar algo do tipo dentro do bloco de configuração do seu site:


{% highlight sh linenos %}
# Habilita o gzip
gzip      on;
gzip_http_version  1.1;
gzip_vary    on;
gzip_comp_level  6;
gzip_proxied  any;

# Mime-types que serão compactados
gzip_types    text/html text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

# http://blog.leetsoft.com/2007/7/25/nginx-gzip-ssl
gzip_buffers  16  8k;

# Desabilita o gzip para alguns navegadores
gzip_disable  "MSIE [1-6].(?!.*SV1)";
{% endhighlight %}

Gist: [https://gist.github.com/1045708](https://gist.github.com/1045708)

Depois é só reiniciar o seu servidor:


{% highlight sh linenos %}
sudo /etc/init.d/nginx restart
{% endhighlight %}

E correr para o abraço! :)

