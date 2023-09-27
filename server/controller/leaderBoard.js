const User = require('../models/user');
const { getTotalScore } = require('../utils/utils');

exports.getLeaderBoard = async (req, res) => {
	try {
		let allUser = await User.find({});
		const user = await User.findById(req.user._id);
		let language = user.language;
		allUser = allUser.map((user) => {
			return {
				name: user.name,
				language: language,
				totalScore: user.exercises
					.filter((exercise) => exercise.language === language)
					.map((x) => getTotalScore(x.summary))
					.reduce((a, b) => a + b, 0),
			};
		});
		res.status(200).json({
			allUserScore: allUser,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};
