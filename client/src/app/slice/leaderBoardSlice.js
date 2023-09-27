import { createSlice } from '@reduxjs/toolkit';
import { getLeaderBoard } from '../action/leaderBoard';
import { all } from 'axios';

const progressSlice = createSlice({
	name: 'progressSlice',
	initialState: {
		allUserScore: [],
	},

	extraReducers: {
		[getLeaderBoard.pending]: (state) => {
			state.status = 'loading';
		},
		[getLeaderBoard.fulfilled]: (state, action) => {
			state.status = 'success';
			let allUser = action.payload.allUserScore;
			allUser = allUser.sort((a, b) => b.totalScore - a.totalScore);
			allUser = allUser.map((user, index) => {
				return { ...user, rank: index + 1 };
			});
			
			state.allUserScore = allUser;
		},
		[getLeaderBoard.rejected]: (state) => {
			state.status = 'failed';
		},
	},
});
export default progressSlice.reducer;
