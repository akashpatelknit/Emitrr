import { createSlice } from '@reduxjs/toolkit';
import { getProgress } from '../action/progressAction';
import { getLeaderBoard } from '../action/leaderBoard';

const progressSlice = createSlice({
	name: 'progressSlice',
	initialState: {
		status: null,
		labels: [],
		scoreSet: [],
		easy: null,
		medium: null,
		hard: null,
	},

	extraReducers: {
		[getProgress.pending]: (state) => {
			state.status = 'loading';
		},
		[getProgress.fulfilled]: (state, action) => {
			state.status = 'success';
			state.labels = action.payload.labels;
			state.scoreSet = action.payload.points;
			state.easy = action.payload.easy;
			state.medium = action.payload.medium;
			state.hard = action.payload.hard;
		},
		[getProgress.rejected]: (state) => {
			state.status = 'failed';
		},
	},
});
export default progressSlice.reducer;
