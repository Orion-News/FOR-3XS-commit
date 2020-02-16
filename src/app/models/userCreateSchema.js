const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// implementação de paginação para react fail
// devida falta de ferramentas apropriadas para seu desenvolvimento
// const mongoosePaginate = require('mongoose-paginate');

const userSchema = new mongoose.Schema({
	Name : {
	type : String,
	required: true
	},
	Email: {
	type : String,
	unique : true,
	lowercase :true,
	required: true
	},
	Password : {
	type : String,
	required : true,
	select : false
	}
});

userSchema.pre('save', async function(next) {
const hash = await bcrypt.hash(this.Password, 10);
	this.Password = hash;
	next();
});

// userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Users", userSchema);

