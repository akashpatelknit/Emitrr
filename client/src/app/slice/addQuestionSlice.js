import { createSlice } from '@reduxjs/toolkit';
import { addQuestionToExercise } from '../action/addQuestionAction';

const addQuestionSlice = createSlice({
	name: 'addQuestionSlice',
	initialState: {
		questions: [],
		loading: false,
	},
	reducers: {},
	extraReducers: {
		[addQuestionToExercise.pending]: (state) => {
			state.loading = false;
		},
		[addQuestionToExercise.fulfilled]: (state, action) => {
			state.loading = true;
			console.log(action.payload);
			state.questions = action.payload;
		},
		[addQuestionToExercise.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default addQuestionSlice.reducer;
