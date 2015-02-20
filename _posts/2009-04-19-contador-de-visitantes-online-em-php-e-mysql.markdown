---
layout: post
title: Contador de visitantes online em PHP e MySQL

date: '2009-04-19 03:37:04 -0300'
categories:
- PHP
- MySQL
- Tutoriais
tags: []
---
Hoje vou ensinar vocês a criarem um pequeno sistema de contador dos visitantes que estão online no seu site.

Tudo se resume a criar uma entrada única no banco para cada visitante e apagá-la depois de 20 minutos de inatividade (nenhum carregamento de página). Também criaremos uma função para você inserir onde quiser exibir o número de visitantes que apareceram no seu site nesses ultimos 20 minutos e outra função para informar os recordes de visitas. Vamos ao que interessa:

Primeiro, criamos as tabelas no MySQL para armazenamento dos dados, são duas tabelas: uma para os visitantes onlines e outra para registro dos recordes... Veja os códigos:


<div data-gist-id="df33bd42778e35b3c333" data-gist-show-loading="false"></div>

Depois criamos um arquivo chamado <span style="color: #ff6600;"><strong>visitantes-online.php</strong></span> com o seguinte conteúdo:


<div data-gist-id="1609b502e5e25640d03b" data-gist-show-loading="false"></div>

Você só precisa inserir esse arquivo no <span style="text-decoration: underline;">começo</span> do seu site, antes de enviar qualquer HTML para o visitante. Veja a baixo as funções que você irá usar para contabilizar os visitantes online e os recordes de visitas:

Nesse arquivo criamos quatro funções que vão fazer o seguinte:

<strong>geraIdentificador()</strong>

Esta função vai criar um identificador único, usada no sistema quando temos um visitante novo e ela gera uma seqüência de números e letras únicas para identificar o visitante que será salvo no banco de dados e via cookies.

Você não precisa chamá-la em lugar nenhum do seu site.

<strong>registraVisita()</strong>

Função que irá registrar o visitante no banco de dados, atualizando o registro dele, excluindo os visitantes antigos, atualizando os recordes de visitas e, por fim, definindo um cookie no computador do visitante com o identificador gerado anteriormente.

Você não precisa chamá-la em lugar nenhum do seu site pois ela já é chamada automaticamente quando você inclui o arquivo no site.

<strong>visitantesOnline()</strong>

Esta função vai te retornar um valor numérico inteiro contendo o número de visitantes online no seu site nos últimos 20 minutos.

Para usá-la, é só inserir um bloco de php onde você deseja que o número apareça, assim:


<div data-gist-id="b8cff7997f04507e90b2" data-gist-show-loading="false"></div>

<strong>visitantesRecorde($formato)</strong>

Com essa função você vai receber um array, contendo dois elementos: primeiro a data do recorde, depois o recorde de visitas. Você pode, se quiser, formatar a data retornada (seguindo os parâmetros da função [date()](http://br2.php.net/manual/pt_BR/function.date.php)).

Para usá-la você precisará fazer da seguinte forma:


<div data-gist-id="dd7c216d76793fc20c60" data-gist-show-loading="false"></div>

Se quiser formatar a data é só fazer, por exemplo, assim:
$dados = visitantesRecorde('d/m/Y H:i');

Espero que tenham gostado! E não se esqueçam de olhar a parte de configurações do script para um bom uso dele.

Abraços! :D

