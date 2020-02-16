#3XSolutions Demo Project;

#Execucao indice;

> npm i : para baixar as dependecias do package.json;

> npm run start : Para subir o server;

> npm run host : para abrir localhost na por 3030; no *chrome*;


#Libs and Templates;

> Express;
> bcrypt;
> mongoose;
> jsonwebtoken;

> template Engine Nunjucks;

---------------------------------------------------------------

#Demo Objective;

> construir um web app, com framework React Or Vue;
> tela login na '/' que ‚ renderizada a home page;
> usuario deve ser autenticado para prosseguir nas rotas;
> rota Profile, usa a autenticacao feita na home page, usuario
logado pode fazer uma listagem de email, essa listagem ‚ privada;

>API feita em node.js no formato rest, utiliza padrÆo JWT;
>API Cont‚m as rotas, home, login, profile, searc, users e error;
>A Pagina home Page, pode inserir no banco de dados atraves de um seeders;

---------------------------------------------------------------

#Ocorrencias, Enprevistos;

>devido a falta de equipamento adequado nao foi possivel utilizar React ou Vue... 
>o padrao de arquitetura esta criada em FULL MVC, quando a Views fica no back-end...
>views estao sendo renderizadas por Nunjucks engine template do node, para suporte do express em HTML e CSS;
>feito em um W7, 2g RAM, 320HD, Intel dual-core;