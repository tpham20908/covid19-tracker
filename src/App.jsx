import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';

import useStyles from './styles';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

const App = () => {
	const styles = useStyles();
	const [data, setData] = useState(null);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const data = await fetchData();
		setData(data);
	};

	if (!data) {
		return <CircularProgress />;
	}

	return (
		<div className={styles.container}>
			<Cards data={data} />
			<CountryPicker />
			<Chart />
		</div>
	);
};

export default App;
