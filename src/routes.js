const express = require('express');
const routes = express.Router();

// importação de controllers, session, seeders; 
const UserControllerSearch = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const Seeders = require('./database/seeders/CreateSeeders');

// paginação 'renderize';
const Renderize = require('./app/controllers/RenderizePages');

// deve mostra a homepage principal;
routes.get('/', Renderize.Home);

// rota para inserir seeders, por um link na home!;
routes.post('/seeders', Seeders.Insert);

// rota para Login, deve retornar um token para ser autenticado;
routes.post('/login', SessionController.LoginUser);

// rota para usuario autenticado por token '/Profile || Dashboard';
routes.get('/Profile', Renderize.Profile);

// deve listar todos os Usuarios dentro do Atlas;
routes.post('/Search', UserControllerSearch.Search);
routes.get('/Users', Renderize.Search); // Private route;

// error tudo berrou ? chama aqui;
routes.get('/Error', Renderize.Error);

module.exports = routes;