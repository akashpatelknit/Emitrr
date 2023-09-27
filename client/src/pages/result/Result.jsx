import React from 'react';
import './Result.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Result = () => {
	const { points } = useSelector((state) => state.questions);
	return (
		<div className="result">
			<h2>Welcome to The Trivia Quiz!</h2>
			<div className="exercise_score">
				<h3>Total Score :{points} </h3>
			</div>
			<div className="highScore">
				<h3>High Score :50</h3>
			</div>
		</div>
	);
};

export default Result;
