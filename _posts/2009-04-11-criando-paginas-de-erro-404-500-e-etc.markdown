---
layout: post
title: Criando páginas de erro (404, 500 e etc)

date: '2009-04-11 21:09:29 -0300'
categories:
- Tutoriais
- Apache
tags: []
---
As vezes seu site pode gerar alguns endereços inválidos (404) e você modificar as mensagens feias de "<em>Error 404 - Page not found</em>".. Pra isso você precisa criar (ou editar) um arquivo chamado .htaccess que fica dentro do seu servidor de hospedagem. O nome do arquivo é esse mesmo, .htaccess (um arquivo sem nome e com extensão grandona).

Se você já tem esse arquivo no seu servidor, edite-o com o bloco de notas e coloque esse bloco de linhas no começo do arquivo:


[code language="html"]
ErrorDocument 400 /erro_400.html
ErrorDocument 401 /erro_401.html
ErrorDocument 403 /erro_403.html
ErrorDocument 404 /erro_404.html
ErrorDocument 500 /erro_500.html
[/code]

E depois é só criar cada um dos arquivos (erro_404.html) dentro da raiz (root) do servidor com a mensagem de erro... Você também pode mudar o nome do arquivo para o que preferir, usar outra extensão e fazer da melhor forma... É só ir mudando e testando.

Se o seu servidor não tem esse arquivo na raiz (root) então é só abrir o bloco de notas, colocar o código lá e salvar o arquivo como .htaccess (sem nome mesmo) e depois fazer upload pro seu servidor.

Os possíveis códigos de erro são:

<table style="border: medium none; width: 540px; margin-left: 30px" border="0">
<tbody>
<tr>
<td style="border: none" valign="top"><strong style="color: black"><em>Códigos de erro no cliente</em></strong>
<strong>400  	 Bad Request</strong>
<strong>401 	Unauthorized</strong>
402 	Payment Required
<strong>403 	Forbidden
404 	Not Found</strong>
405 	Method Not Allowed
406 	Not Acceptable
407 	Proxy
408 	Request Timeout
409 	Conflict
410 	Gone
411 	Length Required
412 	Precondition Failed
413 	Request Entity Too Large
414 	Request-URI Too Large
415 	Unsupported Media Type
416 	Requested Range Not Satisfiable
417 	Expectation Failed</td>
<td style="border: none" valign="top"><strong style="color: black"><em>Código de erros no Servidor</em></strong>
<strong>500 	Internal Server Error</strong>
501 	Not Implemented
502 	Bad Gateway
503 	Service Unavailable
504 	Gateway Timeout
505 	HTTP Version not supported</td>
</tr>
</tbody>
</table>
Deixei em negrito os mais importantes... É bem raro você conseguir que dê algum erro além desses... Mas não faz mal saber todos. ;)

Fácil, não?

