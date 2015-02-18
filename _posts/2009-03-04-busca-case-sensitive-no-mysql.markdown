---
layout: post
title: Busca case-sensitive no MySQL

date: '2009-03-04 16:46:14 -0300'
categories:
- MySQL
- Artigos
tags: []
---
<p>Opa opa... Essa é outra dúvida muito comum:</p>
<p>Quando fazemos uma busca "comum" no MySQL, se procuramos 'Thiago' e no registro tá 'thiago' esse registro é retornado... Mas quando precisamos de uma validação mais rídiga (login e/ou senha, por exemplo), é sempre bom que ela seja <em>case-sensitive</em>, ou seja: <strong>BoLa</strong> é diferente de <strong>BOLA</strong> que é diferente de <strong>bola</strong>.</p>
<p>Uma busca normal no mysql seria mais ou menos assim:
[code='sql']
SELECT * FROM `usuarios` WHERE `nome` = 'AdmiN' LIMIT 1
[/code]
Mas como eu disse, isso retornaria registros com 'admin', 'ADMIN' ou 'AdMiN' no campo nome, e não é isso que queremos... Então fazemos assim:
[code='sql']
SELECT * FROM `usuarios` WHERE BINARY `nome` = 'AdmiN' LIMIT 1
[/code]
E tudo se resolve! =)</p>
