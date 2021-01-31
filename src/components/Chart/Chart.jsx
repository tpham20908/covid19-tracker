import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Line, Bar } from 'react-chartjs-2';

import useStyles from './styles';
import { fetchDailyData } from '../../api';

export default function Chart() {
	const styles = useStyles();
	const [dailyData, setDailyData] = useState(null);

	useEffect(() => {
		getDailyData();
	}, []);

	const getDailyData = async () => {
		const data = await fetchDailyData();
		setDailyData(data);
	};

	const lineChart = () => {
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
							// backgroundColor: 'rgba(255,255,0,0.1)',
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

	if (!dailyData) {
		return <CircularProgress />;
	}

	return <div className={styles.container}>{lineChart()}</div>;
}
