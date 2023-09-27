import { createSlice } from '@reduxjs/toolkit';
import {
	loadLanguage,
	loadUser,
	loginrUser,
	logout,
	registerUser,
	updateLanguage,
} from '../action/userAction';
const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		users: {},
		loading: false,
		error: null,
		isAuthenticated: false,
		searchData: [],
		allLanguage: [],
	},
	reducers: {},
	extraReducers: {
		[registerUser.pending]: (state) => {
			state.loading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		[registerUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[loginrUser.pending]: (state) => {
			state.loading = true;
		},
		[loginrUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		[loginrUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[logout.pending]: (state) => {
			state.loading = true;
		},
		[logout.fulfilled]: (state) => {
			state.loading = false;
			state.isAuthenticated = false;
		},
		[logout.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[loadUser.pending]: (state) => {
			state.loading = true;
		},
		[loadUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.allLanguage = action.payload.language;
			state.isAuthenticated = true;
		},
		[loadUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.isAuthenticated = false;
		},
		[updateLanguage.pending]: (state) => {
			state.loading = true;
		},
		[updateLanguage.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
		},
		[updateLanguage.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[loadLanguage.pending]: (state) => {
			state.loading = true;
		},
		[loadLanguage.fulfilled]: (state, action) => {
			state.loading = false;
			state.allLanguage = action.payload;
		},
		[loadLanguage.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});
export default userSlice.reducer;
