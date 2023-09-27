const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
	language: {
		type: String,
	},
	questions: {
		easy: [],
		medium: [],
		hard: [],
	},
});

module.exports = mongoose.model('Question', QuestionSchema);
