---
layout: post
title: Atualizando seu projeto em CakePHP para a versão 2.0

date: '2011-10-19 19:18:39 -0200'
categories:
- Desenvolvimento
- PHP
- Frameworks
- CakePHP
- Artigos
- Tutoriais
- Orientação a objetos
- Segurança
tags:
- CakePHP
- Framework
- Desenvolvimento
- cakephp 2.0
- atualização
- frameworks
- cakephp 1.3
---
<p>Essa semana saiu a <strong>versão stable</strong> do <strong>CakePHP 2.0</strong> e muita coisa ainda está por vir.</p>
<p>Resolvi escrever esse post para ajudá-lo a atualizar sua aplicação, mas antes vamos para algumas perguntas e pontos que as pessoas levantaram nas listas e grupos ligados ao CakePHP.</p>
<p>Recomendo muito a leitura do <a href="http://book.cakephp.org/2.0/en/appendices/2-0-migration-guide.html#basics-php" target="_blank">guia de migração</a>, lá na documentação oficial do CakePHP 2.0.</p>
<h3>"Atualizar ou não atualizar?", eis a questão</h3>
<p>Recomendo fortemente que você atualize suas aplicações que atualmente rodam em CakePHP 1.3, ainda mais se elas seguirem os padrões do Cake e você não <strong>mudou nada no core</strong>.</p>
<p>A nova versão traz inúmeras melhorias, otimizações e padronizações... O CakePHP em si tá mais rápido e leve, usando recusos nativos da linguagem e usando <strong>LazyLoad</strong> (só carrega quando for usar) em vários pontos da aplicação.</p>
<h3>Não é melhor deixar tudo do jeito que tá e começar do zero?</h3>
<p>Estou trabalhando no novo site do meu curso online de CakePHP - <a title="Assando Sites, curso online de CakePHP" href="http://assando-sites.com.br/" target="_blank">Assando Sites</a> - que começou sendo criado na versão 1.3 mas ontem parei para atualizá-lo pra versão 2.0, fui lendo a documentação e fazendo os ajustes... demorei menos de 1 hora e não usei scripts prontos.</p>
<h3>O que mudou na versão nova?</h3>
<p>Recomendo que você leia essa página na documentação oficial:</p>
<p><a href="http://book.cakephp.org/2.0/en/appendices/new-features-in-cakephp-2-0.html">http://book.cakephp.org/2.0/en/appendices/new-features-in-cakephp-2-0.html</a></p>
<h2>Atualizando seu projeto</h2>
<p>Na minha opinião, o trabalho de atualizar/migrar o projeto para a nova versão foi bem tranquilo... diria que muito pouca coisa de código mudou (exceto arquivos que já vêm no APP como config, database, index.php e etc.). A maior mudança - na minha opinião - foi a estrutura de pastas e nomenclatura de arquivos.</p>
<h3>Primeiro Passo - Reestruturando as pastas</h3>
<p>O primeiro passo será renomear praticamente todas as pastas do seu projeto (APP)... As únicas pastas que não mudam de nome são a <strong>tmp</strong> e a <strong>webroot</strong>.</p>
<p>O resto das pastas têm o nome alterado para CamelCase no singular... exceto em alguns casos dentro da <strong>View</strong> (elements, errors e pastas de views para controllers [pastas que você criou]).</p>
<div style="background: rgba(255,0,0,.1); border: 1px dashed rgba(0,0,0,.2); margin-bottom: 20px; width: 45%; float: left; padding: 10px 10px 0 10px;">
<h4 style="margin: 0 0 10px 0; padding: 0;background: rgba(0, 0, 0, .1);padding: 6px 10px 8px;margin: -10px -10px 10px -10px;border-bottom: 1px dashed silver;">Antes</h4>
<ul style="font-family: Consolas, monospace;">
<li>../config/</li>
<li style="list-style: none; color: white">.</li>
<li>../controllers/</li>
<li>../controllers/components/</li>
<li>../libs/</li>
<li>../locale/</li>
<li>../models/</li>
<li>../models/behaviors/</li>
<li>../models/datasources/</li>
<li>../plugins/</li>
<li>../tests/</li>
<li>../tmp/</li>
<li>../vendors/</li>
<li>../views/</li>
<li>../views/elements/</li>
<li style="color: red;">../views/elements/emails/</li>
<li>../views/errors/</li>
<li>../views/helpers/</li>
<li>../views/layouts/</li>
<li>../views/pages/</li>
<li>../views/scaffolds/</li>
<li>../webroot/</li>
</ul>
</div>
<div style="background: rgba(0,255,0,.1); border: 1px dashed rgba(0,0,0,.2); margin-bottom: 20px; width: 45%; float: right; padding: 10px 10px 0 10px;">
<h4 style="margin: 0 0 10px 0; padding: 0;background: rgba(0, 0, 0, .1);padding: 6px 10px 8px;margin: -10px -10px 10px -10px;border-bottom: 1px dashed silver;">Depois</h4>
<ul style="font-family: Consolas, monospace;">
<li>../Config/</li>
<li style="color: green;">../Console/ <span style="color: gray;">(nova)</span></li>
<li>../Controller/</li>
<li>../Controller/Component/</li>
<li>../Lib/</li>
<li>../Locale/</li>
<li>../Model/</li>
<li>../Model/Behavior/</li>
<li>../Model/Datasource/</li>
<li>../Plugin/</li>
<li>../Test/</li>
<li style="color: blue;">../tmp/</li>
<li>../Vendor/</li>
<li>../View/</li>
<li>../View/Elements/</li>
<li style="color: green;">../View/Emails/ <span style="color: gray;">(movida)</span></li>
<li>../View/Errors/</li>
<li>../View/Helper/</li>
<li>../View/Layouts/</li>
<li>../View/Pages/</li>
<li>../View/Scaffolds/</li>
<li style="color: blue;">../webroot/</li>
</ul>
</div>
<p>Surge também uma pasta nova chamada <strong>Console</strong> que irá te ajudar a realizar tarefas de console/shell direto de dentro do seu projeto... Essa pasta você pode tirar de dentro do APP do CakePHP 2.0 que você baixar. ;)</p>
<h3>Segundo Passo - Renomeando os arquivos</h3>
<p>Agora vem uma parte um pouco mais complicada mas que vai garantir uma padronização para todo o seu projeto... O nome de um arquivo é exatamente o nome da classe que ele contém!</p>
<p>Veja alguns exemplos:</p>
<div style="background: rgba(255,0,0,.1); border: 1px dashed rgba(0,0,0,.2); margin-bottom: 20px; width: 44%; float: left; padding: 10px 10px 0 10px;">
<h4 style="margin: 0 0 10px 0; padding: 0;background: rgba(0, 0, 0, .1);padding: 6px 10px 8px;margin: -10px -10px 10px -10px;border-bottom: 1px dashed silver;">Antes</h4>
<ul style="font-family: Consolas, monospace; margin-left: -20px;">
<li>controllers/noticias_controller.php</li>
<li>controllers/components/loja.php</li>
<li>models/produto.php</li>
<li>views/helpers/loja_helper.php</li>
</ul>
</div>
<div style="background: rgba(0,255,0,.1); border: 1px dashed rgba(0,0,0,.2); margin-bottom: 20px; width: 47%; float: right; padding: 10px 10px 0 10px;">
<h4 style="margin: 0 0 10px 0; padding: 0;background: rgba(0, 0, 0, .1);padding: 6px 10px 8px;margin: -10px -10px 10px -10px;border-bottom: 1px dashed silver;">Depois</h4>
<ul style="font-family: Consolas, monospace; margin-left: -20px;">
<li>Controller/NoticiasController.php</li>
<li>Controller/Component/LojaComponent.php</li>
<li>Model/Produto.php</li>
<li>View/Helper/LojaHelper.php</li>
</ul>
</div>
<p>Alguns arquivos mudam de lugar:</p>
<div style="background: rgba(255,0,0,.1); border: 1px dashed rgba(0,0,0,.2); margin-bottom: 20px; width: 44%; float: left; padding: 10px 10px 0 10px;">
<h4 style="margin: 0 0 10px 0; padding: 0;background: rgba(0, 0, 0, .1);padding: 6px 10px 8px;margin: -10px -10px 10px -10px;border-bottom: 1px dashed silver;">Antes</h4>
<ul style="font-family: Consolas, monospace; margin-left: -20px;">
<li>app_controller.php</li>
<li>app_model.php</li>
<li>app_helper.php</li>
</ul>
</div>
<div style="background: rgba(0,255,0,.1); border: 1px dashed rgba(0,0,0,.2); margin-bottom: 20px; width: 47%; float: right; padding: 10px 10px 0 10px;">
<h4 style="margin: 0 0 10px 0; padding: 0;background: rgba(0, 0, 0, .1);padding: 6px 10px 8px;margin: -10px -10px 10px -10px;border-bottom: 1px dashed silver;">Depois</h4>
<ul style="font-family: Consolas, monospace; margin-left: -20px;">
<li>Controller/AppController.php</li>
<li>Model/AppModel.php</li>
<li>View/Helper/AppHelper.php</li>
</ul>
</div>
<h3>Terceiro Passo - Arquivos de configuração</h3>
<p>Recomendo que você copie os arquivos <code>config/core.php</code>, <code>config/database.php</code> e <code>webroot/index.php</code> da nova versão do CakePHP e substitua os da sua aplicação... vários detalhes mudaram e é mais fácil reescrever qualquer configuração do que tentar fazer um diff e mudar só que há de novo.</p>
<h3>Quarto Passo - Internacionalização / i18n</h3>
<p>Agora as funções de internacionalização/tradução como <code>__()</code> e <code>__d()</code> vão sempre retornar o texto, sem imprimí-lo como era o padrão.</p>
<div style="background: rgba(255,0,0,.1); border: 1px dashed rgba(0,0,0,.2); margin-bottom: 20px; width: 45%; float: left; padding: 10px 10px 0 10px;">
<h4 style="margin: 0 0 10px 0; padding: 0;background: rgba(0, 0, 0, .1);padding: 6px 10px 8px;margin: -10px -10px 10px -10px;border-bottom: 1px dashed silver;">Antes</h4>
<ul style="font-family: Consolas;">
<li>__('Olá Mundo')</li>
<li>$texto = __('Olá Mundo', true)</li>
</ul>
</div>
<div style="background: rgba(0,255,0,.1); border: 1px dashed rgba(0,0,0,.2); margin-bottom: 20px; width: 45%; float: right; padding: 10px 10px 0 10px;">
<h4 style="margin: 0 0 10px 0; padding: 0;background: rgba(0, 0, 0, .1);padding: 6px 10px 8px;margin: -10px -10px 10px -10px;border-bottom: 1px dashed silver;">Depois</h4>
<ul style="font-family: Consolas, monospace;">
<li>echo __('Olá Mundo')</li>
<li>$texto = __('Olá Mundo')</li>
</ul>
</div>
<h3>Quinto Passo - Funções removidas</h3>
<p>O CakePHP vinha com várias funções-atalho que serviam pra reduzir o tamanho do código mas acabavam sendo um caminho mais longo para funções e métodos <em>built-in</em> do próprio PHP... Algumas dessas funções eram <code>e()</code>, <code>r()</code>, <code>low()</code>, <code>params()</code> e várias outras que foram removidas.</p>
<p>Veja uma lista dessas funções (e suas alternativas) aqui:</p>
<p><a href="http://book.cakephp.org/2.0/en/appendices/2-0-migration-guide.html#basics-php" target="_blank">http://book.cakephp.org/2.0/en/appendices/2-0-migration-guide.html#basics-php</a></p>
<h3>Finalizando</h3>
<p>Agora você já pode começar a tentar rodar o seu projeto e ir resolvendo qualquer problema que apareça...</p>
<p>Essas não são TODAS as mudanças que você precisará fazer no seu projeto, mas isso já cuida de grande parte das mudanças... Agora você precisará fazer ajustes e em alguns de seus components, RequestHandler e etc... Vale muito a pena ler o <a href="http://book.cakephp.org/2.0/en/appendices/2-0-migration-guide.html#basics-php" target="_blank">guia de migração</a>.</p>
<p>Um grande abraço e espero que tenham gostado! :)</p>
<h2>Quer aprender CakePHP, já com todas as vantagens da versão 2.0, sem sair de casa?</h2>
<p><a href="http://assando-sites.com.br/"><img src="http://blog.thiagobelem.net/wp-content/uploads/2011/07/cookie.png" alt="Assando Sites, curso online de CakePHP" title="Assando Sites, curso online de CakePHP" width="128" height="128" class="alignright size-full wp-image-1737"></a></p>
<p>Inscreva-se no meu <strong>curso online</strong> de CakePHP, o <a title="Assando Sites, curso online de CakePHP" href="http://assando-sites.com.br/" target="_blank">Assando Sites</a>! As próximas turmas já serão feitas utilizando o CakePHP 2.0 como padrão!</p>
<p>As aulas são ao-vivo e você aprende sem sair de casa, aos domingos ou quando preferir assistir os vídeos gravados em aula. <img src="http://blog.thiagobelem.net/wp-includes/images/smilies/icon_smile.gif" alt=":)" /></p>
<p>Para saber mais informações sobre o curso, <a title="Assando Sites, curso online de CakePHP" href="http://assando-sites.com.br/" target="_blank">acesse o site</a> ou leia <a title="Curso online de CakePHP" href="http://blog.thiagobelem.net/curso-online-de-cakephp/" target="_blank">este post aqui no blog</a>.</p>
