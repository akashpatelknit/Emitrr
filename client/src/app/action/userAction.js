import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.withCredentials = true;

const url = 'https://grammer-guru.onrender.com/api/v1';
export const registerUser = createAsyncThunk(
	'registerUser',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${url}/register`, data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const loginrUser = createAsyncThunk(
	'loginUser',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${url}/login`, data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const logout = createAsyncThunk(
	'logout',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${url}/logout`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const loadUser = createAsyncThunk(
	'loadUser',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${url}/me`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const updateLanguage = createAsyncThunk(
	'updateLanguage',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${url}/updatelanguage`, data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const loadLanguage = createAsyncThunk(
	'loadLanguage',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${url}/language`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
