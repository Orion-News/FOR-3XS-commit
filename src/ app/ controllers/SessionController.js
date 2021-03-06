const mongoose = require('mongoose');
require('../models/userCreateSchema');
const Users = mongoose.model('Users');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const AuthConfig = require('../config/auth');

class SessionController {
	// verifica condições, Email e senha cadastrado? redirecionar usuario;
	async LoginUser(req, res) {
		try{
		
		const { Email, Password } = req.body;	
		
		const result = await Users.findOne({ Email }).select('+Password');
		
		if( !result || !result.Email ){
			throw Error('Email sem cadastro');
			return res.status(400).redirect(`/Error/?erro=${Error}`);
		}
		
		if(!await bcrypt.compare(Password, result.Password)){
			throw Error('Senha incorreta');
			return res.status(400).redirect(`/Error/?erro=${Error}`);
		}
		
		/* Recurso não implementado 
                 const token = jwt.sign({ id : result._id}, AuthConfig.secret, {
			expiresIn : 1m
		})
                */
		
		return res.redirect(`/Profile?name=${result.Name}`);
		
		}catch(error){		
				console.error(`Berrou na Session,
				email ou senha incorreto,
				ou talvez > --${error}-- < error System`);
				return res.redirect(`/Error?erro=${error}`);
		}
	}
}

module.exports = new SessionController();
