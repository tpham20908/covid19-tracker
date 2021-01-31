import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Line, Bar } from 'react-chartjs-2';

import useStyles from './styles';
import { fetchDailyData } from '../../api';

export default function Chart({ data, selectedCountry }) {
	const styles = useStyles();
	const [dailyData, setDailyData] = useState(null);
	const { confirmed, recovered, deaths, lastUpdate } = data;

	useEffect(() => {
		getDailyData();
	}, []);

	const getDailyData = async () => {
		const data = await fetchDailyData();
		setDailyData(data);
	};

	const barChart = () => {
		if (!confirmed) {
			return <CircularProgress />;
		}

		return (
			<Bar
				data={{
					labels: ['Infected', 'Recovered', 'Deaths'],
					datasets: [
						{
							label: 'People',
							backgroundColor: ['#fcd947', '#47fc47', '#fc4747'],
							data: [confirmed.value, recovered.value, deaths.value],
						},
					],
				}}
				options={{
					legend: { display: false },
					title: {
						display: true,
						text: `Situation in ${selectedCountry} on ${new Date(
							lastUpdate
						).toDateString()}`,
					},
				}}
			/>
		);
	};

	const lineChart = () => {
		if (!dailyData) {
			return <CircularProgress />;
		}

		return (
			<Line
				data={{
					labels: dailyData.map(({ date }) =>
						new Date(date).toLocaleDateString()
					),
					datasets: [
						{
							data: dailyData.map((data) => data.confirmed),
							label: 'Infected',
							borderColor: '#fcd947',
							fill: true,
						},
						{
							data: dailyData.map((data) => data.deaths),
							label: 'Deaths',
							borderColor: 'red',
							backgroundColor: 'rgba(255, 0, 0, 0.5)',
							fill: true,
						},
						{
							data: dailyData.map((data) => data.recovered),
							label: 'Recovered',
							borderColor: 'green',
							backgroundColor: 'rgba(0, 255, 0, 0.5)',
							fill: true,
						},
					],
				}}
			/>
		);
	};

	return (
		<div className={styles.container}>
			{selectedCountry ? barChart() : lineChart()}
		</div>
	);
}
