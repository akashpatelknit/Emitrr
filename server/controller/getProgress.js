const User = require('../models/user');
const { getPreviousScore, getTotalScore } = require('../utils/utils');

exports.getProgress = async (req, res) => {
	try {
		let user = await User.findById(req.user._id);
		let exercises = user.exercises.filter(
			(item) => item.language === user.language
		);
		let points = exercises.map((item) => getTotalScore(item.summary));

		let labels = exercises.map((item, index) => `Exercise ${index + 1}`);
		let easy = exercises.map(
			(item) => item.summary.filter((l) => l.level === 'easy').length
		);
		let sumOfEasy = easy.reduce(
			(acc, currentValue) => acc + currentValue,
			0
		);
		let medium = exercises.map(
			(item) => item.summary.filter((l) => l.level === 'medium').length
		);
		let sumOfMedium = medium.reduce(
			(acc, currentValue) => acc + currentValue,
			0
		);
		let hard = exercises.map(
			(item) => item.summary.filter((l) => l.level === 'hard').length
		);
		let sumOfHard = hard.reduce(
			(acc, currentValue) => acc + currentValue,
			0
		);

		res.status(200).json({
			success: true,
			points,
			labels,
			easy: sumOfEasy,
			medium: sumOfMedium,
			hard: sumOfHard,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
