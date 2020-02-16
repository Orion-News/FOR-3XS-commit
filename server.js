const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const nunjucks = require('nunjucks');
const path = require('path');

// chamada de uma função, denifina como APP o que se refere ao Micro-Framework para Roteamento no servidor;
const app = express();

// configurações para receber conteudo estatico no NODE pelo micro framework Express;
// Nunjuck template para suporte de html e css como Views engine;
nunjucks.configure(path.resolve(__dirname, 'src', 'views' ),{
	autoescape: true,
	express: app,
	watch: true
	});
	
// Nunjuck views pasta config, diretorio para receber o Estilos da pagina;
app.use(express.static(path.resolve(__dirname, 'src', 'public') ) );

// "url en coded" diga ao express para receber requisições queryStrings;
app.use(express.urlencoded({ extended : false }) );

// aplicativo deve usar uma view engine com extenção NJK;
app.set('view engine', 'njk');

// chamada da conexão entre API e Banco de Dados, String de conexão com o Mongo DB Atlas; AWS
mongoose.connect("mongodb+srv://3Xsolutions:3Xsolutions@3xsolution-wd6bw.mongodb.net/test?retryWrites=true&w=majority",
{ useNewUrlParser: true,
  useUnifiedTopology: true,
});

// recebendo e respondendo em um formato padrão JSON;
app.use(express.json());
// utilize o arquivos padrões de rotas;
app.use(routes);


const port = (process.env.PORT || 3030);




app.listen(port, () => console.log('Server is running in port ', port));
