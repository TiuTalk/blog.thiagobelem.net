---
layout: post
title: Criando um sistema de cache no PHP
excerpt: Técnicas de cache fazem com que seu site fique até 80% mais rápido e são
  vitais para que seu site "aguente o tranco" quando receber muitas visitas de uma
  vez.

date: '2010-08-26 17:42:50 -0300'
categories:
- PHP
- Tutoriais
- Otimização
- Orientação a objetos
tags:
- PHP
- Cache
---
"Cache" é uma forma de armazenar um valor para um consulta futura mais rápida. Com o cache conseguimos otimizar o carregamento dos sites e de suas informações.

Suponhamos que você tenha um site que faça uma consulta em um tabela do banco de dados que possua 3.000.000 registros e essa consulta demore mais de 30 segundos (acredite, isso acontece). Com o cache você pode reduzir esse tempo em alguns segundos.

Cachear uma informação significa salvá-la em algum lugar (seja em um arquivo ou diretamente na memória RAM do servidor) para depois poder consultar essa informação sem ter que obtê-la da forma mais demorada (no exemplo a cima, com a consulta ao banco de dados).

Vamos criar aqui uma classe que servirá para armazenar qualquer tipo de texto, variável, número inteiro, resultado SQL e etc.

Para começar, começamos criando uma classe vazia:


<div data-gist-id="62b08ee7b27898feebf2" data-gist-show-loading="false"></div>

Agora vamos adicionar alguns atributos que serão usados pelo sistema de cache:


<div data-gist-id="9c19c9c24c4954249997" data-gist-show-loading="false"></div>

O atributo <code>$time</code> define por quanto tempo as informações ficarão salvas no cache, tempo esse que poderá ser mudado para cada valor salvo (veremos mais a diante).

Agora vamos criar um método chamado <code>setFolder()</code> que servirá para definir o local onde os arquivos de cache serão salvos:


<div data-gist-id="32353819f34301e332cb" data-gist-show-loading="false"></div>

Esse método recebe o caminho (pasta) onde os arquivos serão criados e, após verificar se o caminho existe, é um diretório e pode ser manipulado, ele define um atributo com o caminho passado. Caso ele não consiga localizar a pasta ou não seja possível escrever nela, um erro será gerado.

Com esse método criado, podemos criar um construtor para essa classe com o seguinte código:


<div data-gist-id="bffe28d021d0d25d7e74" data-gist-show-loading="false"></div>

O construtor será chamado sempre que instanciarmos a classe Cache e, como você pode ver, ele recebe um parâmetro (opcional) onde podemos definir o local onde os arquivos serão criados... Se não passarmos nenhum parâmetro para ele o mesmo irá usar o local de arquivos temporários definido pelo seu sistema operacional.

Agora que já conseguimos definir o local onde os caches serão salvos, vamos criar o método que irá gerar o nome dos arquivos de cache:


<div data-gist-id="47f53b18001c684dc2c8" data-gist-show-loading="false"></div>

E o método que irá criar o arquivo de cache propriamente dito:


<div data-gist-id="ef123cb5a390305a916a" data-gist-show-loading="false"></div>

O nosso sistema está quase pronto.. Já podemos criar arquivos de cache na pasta de cache, precisamos então criar dois métodos: um para salvar um valor no cache (seja ele uma string, número, resultado SQL e etc.) e outro pra ler esse valor do cache.

Primeiro o método que salva um valor no cache:


<div data-gist-id="00c92988a4e5381ba854" data-gist-show-loading="false"></div>

E agora o método para ler esse valor do cache:


<div data-gist-id="1c479f8c058acb530c1a" data-gist-show-loading="false"></div>

Se você reparar, esse último método irá excluir o arquivo de cache caso ele tenha expirado.

### Usando o sistema de cache
Veja um exemplo de uso do sistema de cache onde primeiro verificamos se há um valor armazenado no cache e, se não houver, geramos o valor novamente e salvamos ele no cache para futuras verificações:


<div data-gist-id="f3a0e8276068a8954d36" data-gist-show-loading="false"></div>

Veja o código-fonte completo da classe: [http://pastebin.com/p4m0CpwH](http://pastebin.com/p4m0CpwH)

Um grande abraço e até a próxima! :)

