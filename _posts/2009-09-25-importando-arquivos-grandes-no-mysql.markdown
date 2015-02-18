---
layout: post
status: publish
published: true
title: Importando arquivos grandes no MySQL
author:
  display_name: Thiago Belem
  login: thiago.belem
  email: contato@thiagobelem.net
  url: http://thiagobelem.net/
author_login: thiago.belem
author_email: contato@thiagobelem.net
author_url: http://thiagobelem.net/
excerpt: Aprenda a importar arquivos gigantes no MySQL sem receber erros de memória
  insuficiente. Fácil, muito fácil!
wordpress_id: 648
wordpress_url: http://blog.thiagobelem.net/?p=648
date: '2009-09-25 18:03:17 -0300'
date_gmt: '2009-09-25 21:03:17 -0300'
categories:
- MySQL
- Tutoriais
tags:
- MySQL
- Import
---
<p>Fala gente!</p>
<p>Hoje passei um aperto legal aqui tentando importar um arquivo <strong>.sql</strong> de 65Mb no meu servidor <strong>MySQL</strong> (local).</p>
<p>Inocentemente tentei fazer isso pelo phpMyAdmin e assisti meu servidor ir para o saco alegremente... Tive que deletar o banco de dados "zicado" pelo <strong>client do MySQL</strong>... O erro? Excesso de memória.</p>
<p>Aí eu tentei, pelo próprio client do MySQL (explicarei a baixo como chegar lá) importar o bendito arquivo mas também falhei miserávelmente... O erro? Ultrapassou o "<strong>max_allowed_packets</strong>", e não me pergunte o que é isso.</p>
<p>Ai fiquei uns bons minutos no Google procurando uma solução e descobri algo que funcionou muito bem e vim compartilhar com vocês: o comando <strong>SOURCE</strong>.</p>
<p>Primeiro você deve abrir o seu client do MySQL... Se você estiver usando Windows é só navegar (pelo cmd) até a pasta "bin" que fica dentro de onde o MySQL está instalado.</p>
<p>Se você estiver usando XAMPP essa pasta é:</p>
<p>[code light="true"]C:\xampp\mysql\bin\[/code]</p>
<p>Dentro dessa pasta você vai acessar o client, dessa forma:</p>
<p>[code light="true" language="sql"]mysql -u USUARIO -p[/code]</p>
<p>Não se esqueça de substituir "USUARIO" pelo seu usuário do MySQL, por padrão é o <strong>root</strong>.</p>
<p>Aí você irá digitar a sua senha, por padrão ela é vazia e é só dar ok.</p>
<p>Agora que você está dentro do client MySQL é só digitar o comando acompanhado do caminho do arquivo que você quer importar:</p>
<p>[code light="true" language="sql"]source C:\servidor\bancodedados.sql[/code]</p>
<p>O MySQL irá ler o arquivo e executar cada comando, um por um e entre cada comando ele "limpa" a memória, sem dar erro nenhum! :)</p>
<p>É perfeito!</p>
