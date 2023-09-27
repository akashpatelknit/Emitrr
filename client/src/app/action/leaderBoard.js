import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.withCredentials = true;
const url = 'https://grammer-guru.onrender.com/api/v1';

export const getLeaderBoard = createAsyncThunk(
	'leaderBoard',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${url}/leaderboard`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
