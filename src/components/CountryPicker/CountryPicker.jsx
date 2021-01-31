import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Typography } from '@material-ui/core';

import useStyles from './styles';
import { fetchContries } from '../../api';

export default function CountryPicker({ setSelectedCountry }) {
	const styles = useStyles();
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const getCountries = async () => {
			setCountries(await fetchContries());
		};

		getCountries();
	}, []);

	return (
		<div className={styles.container}>
			<Typography variant='h6'>Country:</Typography>
			<FormControl className={styles.formControl}>
				<NativeSelect
					className={styles.select}
					onChange={(e) => setSelectedCountry(e.target.value)}
				>
					<option value=''>Global</option>
					{countries.map((country) => (
						<option key={country} value={country}>
							{country}
						</option>
					))}
				</NativeSelect>
			</FormControl>
		</div>
	);
}
