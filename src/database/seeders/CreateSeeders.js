const mongoose = require('mongoose');
require('../../app/models/userCreateSchema');
const Users = mongoose.model('Users');


	
function CreateSeeders(){

const Seeders = [
{ "Name" : "Geverson", "Email" : "geverson@hotmail.com", "Password" : "12345"},
{ "Name" : "Elvis", "Email" : "elvis@gmail.com", "Password" : "Elvis" },
{ "Name" : "Paulo", "Email" : "paulo@yahoo.com", "Password" : "Paulo12" },
{ "Name" : "Renata", "Email" : "renata@terra.com", "Password" : "Renatinha" }
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