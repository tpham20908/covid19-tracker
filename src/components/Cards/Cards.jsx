import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

import useStyles from './styles';

export default function Cards({ data }) {
	const styles = useStyles();
	const { confirmed, recovered, deaths, lastUpdate } = data;

	return (
		<div className={styles.container}>
			<Grid container spacing={2} justify='center' className={styles.cards}>
				{/* Offset md */}
				<Grid item md={1} />

				{/* Infected */}
				<Grid
					item
					xs={12}
					md={3}
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
					md={3}
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
					md={3}
					component={Card}
					className={`${styles.card} ${styles.deaths}`}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Deaths
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
				{/* Offset md */}
				<Grid item md={1} />
			</Grid>
		</div>
	);
}
