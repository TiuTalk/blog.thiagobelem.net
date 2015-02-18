---
layout: post
title: Um site em cada pasta – Apache + Virtual Hosts
excerpt: Aprenda a usar os Hosts Virtuais do Apache para "rodar" vários sites no mesmo
  servidor, porém em pastas diferentes que não estão necessariamente dentro da Document
  Root (raiz) do seu servidor.

date: '2009-06-20 01:13:51 -0300'
categories:
- Tutoriais
- Apache
tags:
- Apache
- Virtual Hosts
---
<p>Fala pessoal! Tudo em paz?</p>
<p>Hoje vou falar sobre um recurso fantástico do Apache: os <strong>Hosts Virtuais</strong> ou <em>Virtual Hosts</em>.</p>
<p>Com eles você pode ter vários sites, no mesmo servidor, cada um rodando em uma pasta diferente! Isso permite uma melhor organização das suas coisas e, por que não, mais segurança pros seus sistemas. Outro detalhe relevante é que ele permite que você arquive sites fora do seu <strong>document root</strong> (raiz) padrão.</p>
<h3>Tá, mas como isso funciona?</h3>
<p>É só localizar o arquivo <span style="color: #ff6600;"><strong>httpd.conf </strong></span>que geralmente fica na pasta <span style="color: #3366ff;"><strong>.../apache/conf/</strong></span> e colocar o seguinte bloco de código (no final do arquivo):</p>
<p>[code lang="plain"]<br />
<VirtualHost site1.com www.site.com><br />
	DocumentRoot C:\htdocs\site1<br />
	ServerName site1.com<br />
	ServerAdmin thiagobelem@site1.com<br />
</VirtualHost></p>
<p><VirtualHost site2.com www.site2.com site1.site2.com><br />
	DocumentRoot C:\htdocs\site2<br />
	ServerName site1.com<br />
	ServerAdmin fulano@site2.com<br />
</VirtualHost><br />
[/code]</p>
<p>Com esse exemplo nós criamos 2 hosts virtuais pra alguns casos especiais:</p>
<ul>
<li>Se o domínio for <span style="color: #808000;"><strong>site1.com</strong></span> ou <span style="color: #808000;"><strong>www.site1.com</strong></span> vai ser localizado na pasta <strong><span style="color: #3366ff;">C:\htdocs\site1</span></strong></li>
<li><strong></strong>Se o domínio for <span style="color: #808000;"><strong>site2.com</strong></span>, <span style="color: #808000;"><strong>www.site2.com </strong></span>ou <span style="color: #808000;"><strong>site1.site2.com</strong></span> vai ser localizado na pasta <strong><span style="color: #3366ff;">C:\htdocs\site2</span></strong></li>
</ul>
<p>Viram? :)</p>
<h3>Desenvolvimento local</h3>
<p>Há um porém (que eu chamaria de vantagem): você pode usar esse esquema quando desenvolver localmente também!</p>
<p>Por exemplo: você pode configurar vários <a href="http://www.no-ip.com/" target="_blank">No-IP</a> para serem ouvidos (<em>listen</em>) pelo Apache e usar isso para separar seus sites. Ou você pode configurar seu arquivo de <strong>hosts</strong> (do Windows) para redirecionar os domínios escolhidos para o ip local (<em>localhost</em>).</p>
<p>Espero que tenham gostado! :)</p>
<p>Vejam mais sobre os Virtual Hosts na <a href="http://httpd.apache.org/docs/2.0/mod/core.html#virtualhost" target="_blank">documentação oficial do Apache</a>.</p>
