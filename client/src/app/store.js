import { configureStore } from '@reduxjs/toolkit';
import  userSlice  from './slice/userSlice';
import levelSlice from './slice/levelSlice';
import questionSlice from './slice/questionSlice';
import addQuestionSlice from './slice/addQuestionSlice';
import progressSlice from './slice/progressSlice';
import leaderBoardSlice from './slice/leaderBoardSlice';
const store = configureStore({
	reducer: {
		user: userSlice,
		level: levelSlice,
		questions: questionSlice,
		updateDb:addQuestionSlice,
		progress:progressSlice,
		leader:leaderBoardSlice,
	},
});

export default store;