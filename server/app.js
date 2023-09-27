const express = require('express');
const { model } = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(
	cors({
		origin: 'https://grammar-guru.vercel.app',
		methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
		credentials: true,
	})
);
app.use((req, res, next) => {
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requiest-With, Content-Type, Accept'
	);
	if (true) {
		res.header('Access-Control-Allow-Credentials', true);
		res.header(
			'Access-Control-Allow-Origin',
			'https://grammar-guru.vercel.app'
		);
	}
	res.header(
		'Access-Control-Allow-Methods',
		'GET, PUT, POST, DELETE, HEAD, OPTIONS'
	);
	next();
});

app.use(cookieParser());
app.use(bodyParser.json());
require('dotenv').config({ path: 'config/config.env' });

const User = require('./routes/userRoutes');
const Question = require('./routes/questionRoute');
app.use('/api/v1', User);
app.use('/api/v1', Question);

app.get('/', (req, res) => {
	// console.log('Cookies: ', req.cookies);
	res.json({ message: 'Working Here' });
});
module.exports = app;
