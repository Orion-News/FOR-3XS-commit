
class Renderize{

	Home(req, res){
		return res.render('auth/Home');
	}
	Profile(req, res){
		const { name } = req.query;
		return res.render('auth/Profile', {name} );
	}
	Search(req, res){
		const {email} = req.query;
		return res.render('auth/Users', {email});
	}
	Error(req, res){
		const { erro } = req.query;
		return res.render('auth/Error', {erro} );
	}

}

module.exports = new Renderize();
