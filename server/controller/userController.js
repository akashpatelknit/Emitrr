const User = require('../models/user');
const Question = require('../models/Question');
exports.register = async (req, res) => {
	const { name, email, password, language } = req.body;
	// console.log(req.body);
	// console.log(name, email, password)

	let user = await User.findOne({ email });

	try {
		if (user) {
			return res.status(400).json({ message: 'User already exist' });
		}
		user = await User.create({
			name,
			email,
			password,
			language,
		});
		const token = await user.generateToken();
		const options = {
			expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
			httpOnly: true,
		};
		res.status(201).cookie('token', token, options).json({
			success: true,
			user,
			token,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

exports.login = async (req, res) => {
	console.log('login');
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email }).select('+password');

		if (!user) {
			return res.status(400).json({
				success: false,
				message: 'User does not exist',
			});
		}

		const isMatch = await user.matchPassword(password);

		if (!isMatch) {
			return res.status(700).json({
				success: false,
				message: 'Enter a valid email or password',
			});
		}

		const token = await user.generateToken();
		const options = {
			expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
			httpOnly: true,
		};
		console.log('login user token', token);
		res.status(200).cookie('token', token, options).json({
			success: true,
			user,
			token,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.error,
		});
	}
};

exports.logout = async (req, res) => {
	try {
		res.status(200)
			.cookie('token', null, {
				expires: new Date(Date.now()),
				httpOnly: true,
			})
			.json({
				success: true,
				message: 'Logged out',
			});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
exports.myProfile = async (req, res) => {
	try {
		const user = await User.findById(req.user._id);
		const question = await Question.find({ language: { $exists: 1 } });
		res.status(200).json({
			success: true,
			user,
			language: question.map((item) => item.language),
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.updateLanguage = async (req, res) => {
	try {
		let user = await User.findById(req.user._id);
		console.log(req.body.language);
		user.language = req.body.language;
		await user.save();
		res.status(200).json({
			success: true,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
