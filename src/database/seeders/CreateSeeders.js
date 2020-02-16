const mongoose = require('mongoose');
require('../../app/models/userCreateSchema');
const Users = mongoose.model('Users');


	
function CreateSeeders(){

const Seeders = [
{ "Name" : "Vanessa", "Email" : "Vanessa@hotmail.com", "Password" : "Van012"},
{ "Name" : "Felipe", "Email" : "Felipe@gmail.com", "Password" : "Lipe123" },
{ "Name" : "Bruno", "Email" : "Bruno@yahoo.com", "Password" : "Bruno123" },
{ "Name" : "Lucas", "Email" : "Lucas@terra.com", "Password" : "123" }
	];
	
	return Seeders
// .map(copiar)
	
}

// function copiar(item){
	// return {
	// name : item.Name,
	// email : item.Email,
	// password : item.Password
	// };
// }
class Seeders {

async Insert(req, res){

try{
	const insert = CreateSeeders();
		
	const Results = await Users.create(insert);
		
	return res.redirect('/');
	
	}catch(error) {
		console.log(`Berrroouu no seeders ----${error}----`);
			return res.status(409).redirect(`/Error?erro={error}`);
		}
	}
}
module.exports = new Seeders();