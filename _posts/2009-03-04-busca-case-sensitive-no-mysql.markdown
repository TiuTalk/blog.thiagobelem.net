---
layout: post
status: publish
published: true
title: Busca case-sensitive no MySQL
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
wordpress_id: 228
wordpress_url: http://blog.thiagobelem.net/?p=228
date: '2009-03-04 16:46:14 -0300'
date_gmt: '2009-03-04 19:46:14 -0300'
categories:
- MySQL
- Artigos
tags: []
---
<p>Opa opa... Essa é outra dúvida muito comum:</p>
<p>Quando fazemos uma busca "comum" no MySQL, se procuramos 'Thiago' e no registro tá 'thiago' esse registro é retornado... Mas quando precisamos de uma validação mais rídiga (login e/ou senha, por exemplo), é sempre bom que ela seja <em>case-sensitive</em>, ou seja: <strong>BoLa</strong> é diferente de <strong>BOLA</strong> que é diferente de <strong>bola</strong>.</p>
<p>Uma busca normal no mysql seria mais ou menos assim:<br />
[code='sql']<br />
SELECT * FROM `usuarios` WHERE `nome` = 'AdmiN' LIMIT 1<br />
[/code]<br />
Mas como eu disse, isso retornaria registros com 'admin', 'ADMIN' ou 'AdMiN' no campo nome, e não é isso que queremos... Então fazemos assim:<br />
[code='sql']<br />
SELECT * FROM `usuarios` WHERE BINARY `nome` = 'AdmiN' LIMIT 1<br />
[/code]<br />
E tudo se resolve! =)</p>
