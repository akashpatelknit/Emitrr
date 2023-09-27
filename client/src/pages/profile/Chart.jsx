import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
const LineChart = () => {
	const labels = useSelector((state) => state.progress.labels);
	const scores = useSelector((state) => state.progress.scoreSet);

	const graphData = {
		labels: labels,
		datasets: [
			{
				label: 'score',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: scores,
			},
		],
	};
	return (
		<div>
			<Line data={graphData} />
		</div>
	);
};
export default LineChart;
