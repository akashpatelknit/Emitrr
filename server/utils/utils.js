const User = require('../models/user');
const Question = require('../models/Question');

const getUser = async (name) => {
	try {
		const user = User.findOne({ name: name });
		return user;
	} catch (error) {
		console.log(error);
		return error.message;
	}
};

const getAllQuestions = async (language) => {
	try {
		let questions = await Question.find({ language: language });
		questions[0].language = language;
		return questions;
	} catch (error) {
		console.log(error);
		return error.message;
	}
};

const getPreviousScore = async (exercises) => {
	if (exercises.length === 0) return 0;
	let latestExercise = exercises[exercises.length - 1].summary;
	let points = 0;
	for (let i = 0; i < latestExercise.length; i++) {
		if (
			latestExercise[i].question.correctAnswer ===
			latestExercise[i].response
		) {
			points += 10;
		}
	}

	return points;
};
const getTotalScore = (arr) => {
	let points = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].question.correctAnswer === arr[i].response) {
			points += 10;
		}
	}
	return points;
};

module.exports = { getUser, getAllQuestions, getPreviousScore,getTotalScore };
