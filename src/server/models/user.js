var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	userRights: {type: Number, default: 0,	},
	userPreferences: String
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('users', userSchema);

module.exports = User;
