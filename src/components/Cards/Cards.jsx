import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

import useStyles from './styles';

export default function Cards({ data }) {
	const styles = useStyles();
	const { confirmed, recovered, deaths, lastUpdate } = data;
	console.log(confirmed);

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				{/* Infected */}
				<Grid
					item
					xs={12}
					md={4}
					component={Card}
					className={`${styles.card} ${styles.infected}`}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Infected
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>

				{/* Recovered */}
				<Grid
					item
					xs={12}
					md={4}
					component={Card}
					className={`${styles.card} ${styles.recovered}`}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Recovered
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={recovered.value}
								duration={2}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>

				{/* Death */}
				<Grid
					item
					xs={12}
					md={4}
					component={Card}
					className={`${styles.card} ${styles.deaths}`}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Death
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={deaths.value}
								duration={2}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of deaths caused by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
}
