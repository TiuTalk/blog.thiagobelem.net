---
layout: post
title: Importando arquivos grandes no MySQL
excerpt: Aprenda a importar arquivos gigantes no MySQL sem receber erros de memória
  insuficiente. Fácil, muito fácil!

date: '2009-09-25 18:03:17 -0300'
categories:
- MySQL
- Tutoriais
tags:
- MySQL
- Import
---
Fala gente!

Hoje passei um aperto legal aqui tentando importar um arquivo <strong>.sql</strong> de 65Mb no meu servidor <strong>MySQL</strong> (local).

Inocentemente tentei fazer isso pelo phpMyAdmin e assisti meu servidor ir para o saco alegremente... Tive que deletar o banco de dados "zicado" pelo <strong>client do MySQL</strong>... O erro? Excesso de memória.

Aí eu tentei, pelo próprio client do MySQL (explicarei a baixo como chegar lá) importar o bendito arquivo mas também falhei miserávelmente... O erro? Ultrapassou o "<strong>max_allowed_packets</strong>", e não me pergunte o que é isso.

Ai fiquei uns bons minutos no Google procurando uma solução e descobri algo que funcionou muito bem e vim compartilhar com vocês: o comando <strong>SOURCE</strong>.

Primeiro você deve abrir o seu client do MySQL... Se você estiver usando Windows é só navegar (pelo cmd) até a pasta "bin" que fica dentro de onde o MySQL está instalado.

Se você estiver usando XAMPP essa pasta é:


[code light="true"]C:\xampp\mysql\bin\[/code]

Dentro dessa pasta você vai acessar o client, dessa forma:


[code light="true" language="sql"]mysql -u USUARIO -p[/code]

Não se esqueça de substituir "USUARIO" pelo seu usuário do MySQL, por padrão é o <strong>root</strong>.

Aí você irá digitar a sua senha, por padrão ela é vazia e é só dar ok.

Agora que você está dentro do client MySQL é só digitar o comando acompanhado do caminho do arquivo que você quer importar:


[code light="true" language="sql"]source C:\servidor\bancodedados.sql[/code]

O MySQL irá ler o arquivo e executar cada comando, um por um e entre cada comando ele "limpa" a memória, sem dar erro nenhum! :)

É perfeito!

