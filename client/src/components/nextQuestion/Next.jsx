import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { gameEnded, nextQuestion } from '../../app/slice/questionSlice';
import { addQuestionToExercise } from '../../app/action/addQuestionAction';
export const Next = () => {
	const { index } = useSelector((store) => store.questions);
	const { summary } = useSelector((store) => store.questions);
	const { language } = useSelector((store) => store.user.user.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleFinish = () => {
		dispatch(addQuestionToExercise({ summary, date: new Date(),language }));
		dispatch(gameEnded());
		navigate('/result');
	};

	if (index < 9)
		return (
			<button
				className="btn btn-ui "
				onClick={() => dispatch(nextQuestion())}
			>
				Next
			</button>
		);

	return (
		<button className="btn btn-ui" onClick={handleFinish}>
			Finish
		</button>
	);
};
