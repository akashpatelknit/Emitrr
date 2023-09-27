import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://grammer-guru.onrender.com/api/v1';

export const getQuestions = createAsyncThunk(
	'getQuestions',
	async (data, { rejectWithValue }) => {
		try {
		console.log(data)
			const resp = await axios.post(`${url}/question`, data);
			return resp.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const shuffleArray = (array) => {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
};
