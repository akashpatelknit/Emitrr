import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const BarChart = () => {
	const labels = ['Easy', 'Medium', 'Hard'];
	const { easy, medium, hard } = useSelector((state) => state.progress);

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [easy, medium, hard],
			},
		],
	};
	return (
		<div>
			<Bar data={data} />
		</div>
	);
};

export default BarChart;
