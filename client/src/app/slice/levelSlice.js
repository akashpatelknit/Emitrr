import { createSlice } from '@reduxjs/toolkit';

const levelSlice = createSlice({
	name: 'levelSlice',
	initialState: {
		level: null,
	},
	reducers: {
		setLevel: (state, action) => {
			state.level = action.payload;
		},
	},
});
export const { setLevel } = levelSlice.actions;
export default levelSlice.reducer;
