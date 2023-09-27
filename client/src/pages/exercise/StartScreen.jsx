import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './StartScreen.scss';
import { getQuestions } from '../../app/action/questionAction';
const StartScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let { name, language } = useSelector((state) => state.user.user.user);
	
	const handleClick = (e) => {
		dispatch(getQuestions({ name, language }));
		navigate(`/quiz`);
	};

	return (
		<div className="start-screen">
			<h2>Welcome to Language Learning Game !</h2>
			<h3>10 question to test your Language</h3>
			<div className="game-mode">
				<button
					className="btn2"
					value="easy"
					onClick={(e) => handleClick(e)}
					style={{ backgroundColor: '#0ee32a' }}
				>
					Start
				</button>
				<div className="instructions">
					<h4>Instructions:</h4>
					<ol>
						<li>
							<h6>Read each question carefully.</h6>
						</li>
						<li>
							<h6>Select the best answer for each question.</h6>
						</li>
						<li>
							<h6>
								You have a limited time to complete the quiz.
							</h6>
						</li>
						<li>
							<h6>
								Dont use any external resources or assistance.
							</h6>
						</li>
						<li>
							<h6>
								Click Submit when youre done to see your score.
							</h6>
						</li>
						<li>
							<h6>
								If you leave the page, your progress may be
								lost.
							</h6>
						</li>
						<li>
							<h6>Each question has a specified time limit.</h6>
						</li>
						<li>
							<h6>
								You can navigate between questions using the
								Next and Previous buttons.
							</h6>
						</li>
						<li>
							<h6>
								Double-check your answers before submitting.
							</h6>
						</li>
						<li>
							<h6>Good luck and enjoy the quiz!</h6>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};
export default StartScreen;
