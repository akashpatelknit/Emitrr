const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter a name'],
	},
	email: {
		type: String,
		required: [true, 'Please enter a name'],
		unique: [true, 'Email already exist'],
	},
	password: {
		type: String,
		required: [true, 'Please enter a password'],
		minlength: [4, 'Password must be at least 6 character'],
		select: false,
	},
	language: String,

	exercises: [],
});

userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});

userSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
	return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};
module.exports = mongoose.model('User', userSchema);
