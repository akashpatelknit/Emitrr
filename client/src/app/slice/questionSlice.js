import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	questionsRedux: [],
	status: 'ready',
	index: 0,
	currentQuestion: {},
	currentQuestionLevel:null,
	answer: null,
	points: 0,
	highscore: 0,
	summary: [],
};
import { getQuestions, shuffleArray } from '../action/questionAction';

const questionSlice = createSlice({
	name: 'questionSlice',
	initialState,
	reducers: {
		newAnswer: (state, { payload }) => {
			state.answer = payload;

			state.points =
				payload === state.currentQuestion.correctAnswer
					? state.points + 20
					: state.points;
		},
		nextQuestion: (state) => {
			let temp = state.questionsRedux[state.index + 1];
			let newQuestion = {
				correctAnswer: temp.correct_answer,
				question: temp.question,
				options: shuffleArray([
					...temp.incorrect_answers,
					temp.correct_answer,
				]),
			};
			state.index += 1;
			state.currentQuestion = newQuestion;
			state.currentQuestionLevel = temp.level;
			state.answer = null;
		},
		gameEnded: (state) => {
			state.summary = [],
				(state.highscore =
					state.points > state.highscore
						? state.points
						: state.highscore);
		},
		addSummary: (state, action) => {
			state.summary.push(action.payload);
		},
	},
	extraReducers: {
		[getQuestions.pending]: (state) => {
			state.status = 'loading';
		},
		[getQuestions.fulfilled]: (state, action) => {
			let temp = action.payload[0];
			let newArray = {
				correctAnswer: temp.correct_answer,
				question: temp.question,
				options: shuffleArray([
					...temp.incorrect_answers,
					temp.correct_answer,
				]),
			};
			state.status = 'ready';
			state.questionsRedux = action.payload;
			state.currentQuestion = newArray;
			state.summary=[];
			console.log(temp.level)
			state.currentQuestionLevel=temp.level;
			state.index = 0;
			state.points = 0;
			state.answer = null;
		},
		[getQuestions.rejected]: (state) => {
			state.status = 'error';
		},
	},
});
export const { nextQuestion, newAnswer, gameEnded, addSummary } =
	questionSlice.actions;
export default questionSlice.reducer;
