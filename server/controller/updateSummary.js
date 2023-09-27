const User = require('../models/user');

exports.addSummaryToExercise = async (req, res) => {
	try {
		let user = await User.findById(req.user._id);
		user.exercises.push(req.body);
		const resp = await user.save();
		console.log('resp', resp);
		res.status(200).json({
			success: true,
			resp,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
