const Question = require('../models/Question');
const User = require('../models/user');
const {
	getUser,
	getAllQuestions,
	getPreviousScore,
} = require('../utils/utils');
const getRandomNonRepeatingElementsFromArray = (arr, numElements) => {
	const randomElements = [];
	const arrayCopy = [...arr];

	for (let i = 0; i < numElements; i++) {
		const randomIndex = Math.floor(Math.random() * arrayCopy.length);
		const randomElement = arrayCopy.splice(randomIndex, 1)[0];
		randomElements.push(randomElement);
	}

	return randomElements;
};

const getFilteredQuestions = (allquestions, previousScore) => {
	let questions;
	if (previousScore <= 20) {
		questions = getRandomNonRepeatingElementsFromArray(
			allquestions.easy,
			5
		);
		questions = [
			...questions,
			...getRandomNonRepeatingElementsFromArray(allquestions.medium, 3),
		];
		questions = [
			...questions,
			...getRandomNonRepeatingElementsFromArray(allquestions.hard, 2),
		];
	} else if (previousScore > 20 && previousScore <= 40) {
		questions = getRandomNonRepeatingElementsFromArray(
			allquestions.easy,
			3
		);
		questions = [
			...questions,
			...getRandomNonRepeatingElementsFromArray(allquestions.medium, 5),
		];
		questions = [
			...questions,
			...getRandomNonRepeatingElementsFromArray(allquestions.hard, 2),
		];
	} else if (previousScore > 40) {
		questions = getRandomNonRepeatingElementsFromArray(
			allquestions.easy,
			2
		);
		questions = [
			...questions,
			...getRandomNonRepeatingElementsFromArray(allquestions.medium, 3),
		];
		questions = [
			...questions,
			...getRandomNonRepeatingElementsFromArray(allquestions.hard, 5),
		];
	}
	return questions;
};

exports.generateQuestion = async (req, res) => {
	try {
		const { name, language } = req.body;
		let user = await getUser(name);
		const allquestions = await getAllQuestions(language);
		const previousScore = await getPreviousScore(user.exercises);
		let questions = getFilteredQuestions(
			allquestions[0].questions,
			previousScore
		);
		res.status(200).json(questions);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
