import { useDispatch, useSelector } from 'react-redux';
import './Questions.scss';
import { Next } from '../../../components/nextQuestion/Next';
import { addSummary, newAnswer } from '../../../app/slice/questionSlice';

const Question = () => {
	const { level } = useSelector((state) => state.level);
	const { currentQuestion, currentQuestionLevel, answer } = useSelector(
		(store) => store.questions
	);
	const dispatch = useDispatch();

	const statement = currentQuestion?.question;
	const options = currentQuestion?.options;
	const hasAnswered = answer !== null;
	const handleSelectOption = (option) => {
		dispatch(newAnswer(option));
		dispatch(
			addSummary({
				question: currentQuestion,
				response: option,
				level: currentQuestionLevel,
			})
		);
	};
	return (
		<div className="question_container">
			<div className="questions">
				<h2>Welcome to The Trivia Quiz!</h2>
				<p>{level} quiz</p>
				<div className="question">
					<h5>{statement}</h5>
					<div className="question_options">
						{options?.map((option,index) => {
							return (
								<div
									key={index}
									className="question_options_items"
								>
									<button
										className={`question_options_items_btn ${
											answer === option ? 'answer' : ''
										} ${
											hasAnswered
												? currentQuestion.correctAnswer ===
												option
													? 'correct'
													: ''
												: ''
										}`}
										disabled={hasAnswered}
										onClick={() =>
											handleSelectOption(option)
										}
									>
										{option}
									</button>
								</div>
							);
						})}
					</div>
				</div>
				<div className="nextQuestion">
					<Next />
				</div>
			</div>
		</div>
	);
};

export default Question;
