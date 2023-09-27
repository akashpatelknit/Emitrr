const express = require('express');
const {
	register,
	login,
	myProfile,
	updateLanguage,
	logout,
} = require('../controller/userController');
const { isAuthenticated } = require('../middlewares/auth');
const { addSummaryToExercise } = require('../controller/updateSummary');
const { getProgress } = require('../controller/getProgress');
const { getLeaderBoard } = require('../controller/leaderBoard');
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/me').get(isAuthenticated, myProfile);
router.route('/updateExexcise').post(isAuthenticated, addSummaryToExercise);
router.route('/progress').get(isAuthenticated, getProgress);
router.route('/updatelanguage').post(isAuthenticated, updateLanguage);
router.route('/leaderboard').get(isAuthenticated,getLeaderBoard);
module.exports = router;
