const mongoose = require('mongoose');
require('../models/userCreateSchema');
const Users = mongoose.model('Users');

class UserControllerSearch {
	
	// busca todos os usuarios dentro do DB Mongo
	async Search(req, res) {
	try{
	const { Email } = req.body;
	
	const result = await Users.findOne({Email});
	
	return res.redirect(`/Users?email=${result.Email}`);
	
			}catch(error){
				console.error(`Berrouuuu ---${error}---`);
			return res.redirect(`/Error?erro=${error}`);
		}
	}
}
module.exports = new UserControllerSearch();
