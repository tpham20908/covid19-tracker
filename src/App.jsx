import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';

import useStyles from './styles';

import { Cards, Chart, CountryPicker } from './components';
import covid19Img from './images/covid_19.png';
import { fetchData } from './api';

const App = () => {
	const styles = useStyles();
	const [data, setData] = useState(null);
	const [selectedCountry, setSelectedCountry] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const data = await fetchData(selectedCountry);
			setData(data);
		};

		getData();
	}, [selectedCountry]);

	if (!data) {
		return <CircularProgress />;
	}

	return (
		<div className={styles.container}>
			<img src={covid19Img} className={styles.image} alt='Covid19' />
			<Cards data={data} />
			<CountryPicker setSelectedCountry={setSelectedCountry} />
			<Chart data={data} selectedCountry={selectedCountry} />
		</div>
	);
};

export default App;
