#3XSolutions Demo Project;

#Execuá∆o °ndice;

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
> tela login na '/' que Ç renderizada a home page;
> usuario deve ser autenticado para prosseguir nas rotas;
> rota Profile, usa a autenticaá∆o feita na home page, usuario
logado pode fazer uma listagem de email, essa listagem Ç privada;

>API feita em node.js no formato rest, utiliza padr∆o JWT;
>API ContÇm as rotas, home, login, profile, searc, users e error;
>A Pagina home Page, pode inserir no banco de dados atraves de um seeders;

---------------------------------------------------------------

#Ocorrencias, Enprevistos;

#devido a falta de equipamento adequado n∆o foi possivel utilizar React ou Vue... 
#o padr∆o de arquitetura esta criada em FULL MVC, quando a Views fica no back-end...
#views est∆o sendo renderizadas por Nunjucks engine template do node, para suporte do express em HTML e CSS;
