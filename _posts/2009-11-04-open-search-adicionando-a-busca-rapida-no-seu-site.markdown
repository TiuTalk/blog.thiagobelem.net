---
layout: post
title: 'Open Search: Adicionando a Busca Rápida no seu site'
excerpt: Aprenda a incluir o recurso de Open Search no seu site e faça com que ele
  apareça na barrinha de Busca Rápida do FireFox e de vários outros sistemas e navegadores.

date: '2009-11-04 12:49:25 -0200'
categories:
- PHP
- Tutoriais
tags:
- PHP
- Open Search
---
<p>Fala gente,</p>
<p>Semana passada falei sobre a <strong>busca rápida</strong > (ou <em>Open Search</em>)... Muita gente ficou interessada em como poderiam incluir esse recurso em seus sites então eu fiz um scriptzinho pra facilitar a vida de vocês.</p>
<p>Pra você poder usar esse recurso no seu site o mesmo precisa ter suporte a busca via método GET... Método GET é quando os parâmetros são enviados na URL, veja o exemplo do Google:
[code light="true"]http://www.google.com.br/search?q=Thiago+Belem[/code]</p>
<p>Aquela parte no fim onde tem "<strong>?q=</strong>" significa que o parâmetro "<strong>q</strong>" está sendo passado por método GET, caso contrário você não veria nada na URL.</p>
<p>O que realmente importa é se o que foi buscado <strong>aparece na URL</strong> da pagina que mostra os resultados de busca, não importa como ou em qual posição... Faça uma busca aqui no blog e você verá que, o que você buscou, aparece na URL.</p>
<p>Sem mais baboseiras, vamos direto ao ponto:</p>
<p>Primeiro você precisa inserir um código HTML dentro do <head> do seu site que irá avisar os outros sites, sistemas e navegadores que o seu site tem um Open Search:</p>
<p>[code language="html" light="true"]<link rel="search" type="application/opensearchdescription+xml" href="http://www.meusite.com.br/opensearch.php" title="Meu Site" />[/code]</p>
<p>Perceba que o código está apontando pra um arquivo <strong>opensearch.php</strong>, o nome do arquivo não importa, mas o seu conteúdo sim:</p>
<p>[code language="php"]<?php
/**
 * Gerador de busca 'open search' para sites
 *
 * @author Thiago Belem <contato@thiagobelem.net>
 * @version 1.0
 * @require PHP 5.1.3+
 */</p>
<p>$_CONFIG = array(
	'site_nome' =>			'Meu Site',
	'site_nome_longo' =>		'Meu Site Legal',
	'busca_descricao' =>		'Busque no Meu Site',</p>
<p>	'email_contato' =>		'contato@meusite.com.br',</p>
<p>	'endereco_busca' =>		'http://meusite.com.br/busca.php?q={searchTerms}',</p>
<p>	'imagem_icone' =>		'http://meusite.com.br/open_search.jpg',
	'imagem_tamanho' =>		array(16, 16),
	'imagem_mimetype' =>		'image/jpg',</p>
<p>	'conteudo_adulto' =>		false,
	'linguagem' =>			'pt-br'
);</p>
<p>// --------- Aqui você pode parar de editar :] ---------</p>
<p>header('Content-Type: text/xml; charset=UTF-8');</p>
<p>$xml = new SimpleXMLElement('<OpenSearchDescription></OpenSearchDescription>');
$xml->addAttribute('xmlns', 'http://a9.com/-/spec/opensearch/1.1/');</p>
<p>$xml->addChild('ShortName', $_CONFIG['site_nome']);
$xml->addChild('LongName', $_CONFIG['site_nome_longo']);
$xml->addChild('Description', $_CONFIG['busca_descricao']);</p>
<p>$xml->addChild('Contact', $_CONFIG['email_contato']);</p>
<p>$url = $xml->addChild('Url');
$url->addAttribute('type', 'text/html');
$url->addAttribute('template', $_CONFIG['endereco_busca']);</p>
<p>$imagem = $xml->addChild('Image', $_CONFIG['imagem_icone']);
$imagem->addAttribute('width', $_CONFIG['imagem_tamanho'][0]);
$imagem->addAttribute('height', $_CONFIG['imagem_tamanho'][1]);
$imagem->addAttribute('type', $_CONFIG['imagem_mimetype']);</p>
<p>$xml->addChild('AdultContent', ($_CONFIG['conteudo_adulto'] ? 'true' : 'false'));
$xml->addChild('Language', $_CONFIG['linguagem']);</p>
<p>$xml->addChild('SyndicationRight', 'open');</p>
<p>echo $xml->asXml();
exit;
?>[/code]</p>
<p>Agora preste atenção no bloco de configuração no começo do arquivo!</p>
<p>Dê atenção a parte que tem "endereco_busca"... É ali que você precisa colocar a URL da sua página de busca (resultado de busca) e colocar <strong>{searchTerms}</strong> no lugar que irão os parâmetros de busca... Vamos voltar ao exemplo da busca do Google:</p>
<p>Se eu buscar por "Thiago Belem" a url de resultado vai ficar mais ou menos assim:
[code light="true"]http://www.google.com.br/search?q=Thiago+Belem[/code]</p>
<p>Então, criando um open search pra essa mesma busca do Google, teríamos isso na parte "endereco_busca":
[code light="true"]http://www.google.com.br/search?q={searchTerms}[/code]</p>
<p>As outras opções são fáceis de entender...</p>
<p>Pra quem gostou e quer saber mais: <a href="http://www.opensearch.org/Home">http://www.opensearch.org/</a></p>
<p>Espero que tenham gostado! :)</p>
