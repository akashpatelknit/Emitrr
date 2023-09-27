const express = require('express');
const Question = require('../models/Question');
const { createQuestions } = require('../controller/createQuestion');
const { generateQuestion } = require('../controller/generateQuestion');

const router = express.Router();
router.route('/question').post(generateQuestion);

// for creating questions and pushing in the database
router.route('/create').post(createQuestions);

module.exports = router;
