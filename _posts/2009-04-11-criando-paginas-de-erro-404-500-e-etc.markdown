---
layout: post
status: publish
published: true
title: Criando páginas de erro (404, 500 e etc)
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 412
wordpress_url: http://blog.thiagobelem.net/?p=412
date: '2009-04-11 21:09:29 -0300'
date_gmt: '2009-04-12 00:09:29 -0300'
categories:
- Tutoriais
- Apache
tags: []
---
<p>As vezes seu site pode gerar alguns endereços inválidos (404) e você modificar as mensagens feias de "<em>Error 404 - Page not found</em>".. Pra isso você precisa criar (ou editar) um arquivo chamado .htaccess que fica dentro do seu servidor de hospedagem. O nome do arquivo é esse mesmo, .htaccess (um arquivo sem nome e com extensão grandona).</p>
<p>Se você já tem esse arquivo no seu servidor, edite-o com o bloco de notas e coloque esse bloco de linhas no começo do arquivo:</p>
<p>[code='html']ErrorDocument 400 /erro_400.html<br />
ErrorDocument 401 /erro_401.html<br />
ErrorDocument 403 /erro_403.html<br />
ErrorDocument 404 /erro_404.html<br />
ErrorDocument 500 /erro_500.html[/code]</p>
<p>E depois é só criar cada um dos arquivos (erro_404.html) dentro da raiz (root) do servidor com a mensagem de erro... Você também pode mudar o nome do arquivo para o que preferir, usar outra extensão e fazer da melhor forma... É só ir mudando e testando.</p>
<p>Se o seu servidor não tem esse arquivo na raiz (root) então é só abrir o bloco de notas, colocar o código lá e salvar o arquivo como .htaccess (sem nome mesmo) e depois fazer upload pro seu servidor.</p>
<p>Os possíveis códigos de erro são:</p>
<table style="border: medium none; width: 540px; margin-left: 30px" border="0">
<tbody>
<tr>
<td style="border: none" valign="top"><strong style="color: black"><em>Códigos de erro no cliente</em></strong><br />
<strong>400  	 Bad Request</strong><br />
<strong>401 	Unauthorized</strong><br />
402 	Payment Required<br />
<strong>403 	Forbidden<br />
404 	Not Found</strong><br />
405 	Method Not Allowed<br />
406 	Not Acceptable<br />
407 	Proxy<br />
408 	Request Timeout<br />
409 	Conflict<br />
410 	Gone<br />
411 	Length Required<br />
412 	Precondition Failed<br />
413 	Request Entity Too Large<br />
414 	Request-URI Too Large<br />
415 	Unsupported Media Type<br />
416 	Requested Range Not Satisfiable<br />
417 	Expectation Failed</td>
<td style="border: none" valign="top"><strong style="color: black"><em>Código de erros no Servidor</em></strong><br />
<strong>500 	Internal Server Error</strong><br />
501 	Not Implemented<br />
502 	Bad Gateway<br />
503 	Service Unavailable<br />
504 	Gateway Timeout<br />
505 	HTTP Version not supported</td>
</tr>
</tbody>
</table>
<p>Deixei em negrito os mais importantes... É bem raro você conseguir que dê algum erro além desses... Mas não faz mal saber todos. ;)</p>
<p>Fácil, não?</p>
