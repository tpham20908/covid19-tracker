import axios from 'axios';
import moment from 'moment';

const last50Days = Array.from(Array(50).keys()).reduce((acc, ele) => {
	const d = moment()
		.add(-(ele + 1), 'days')
		.format('MM-DD-YYYY');
	return [d, ...acc];
}, []);

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (selectedCountry) => {
	let changeableUrl = url;
	if (selectedCountry) {
		changeableUrl = `${url}/countries/${selectedCountry}`;
	}
	try {
		const { data } = await axios.get(changeableUrl);
		const { confirmed, recovered, deaths, lastUpdate } = data;

		return {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
	} catch (error) {
		console.log(error);
	}
};

export const fetchDailyData = async () => {
	try {
		const data = await last50Days.reduce(async (acc, d) => {
			const dailyInfo = await axios.get(`${url}/daily/${d}`);
			const confirmed = dailyInfo.data.reduce(
				(amount, ele) => amount + parseInt(ele.confirmed),
				0
			);
			const deaths = dailyInfo.data.reduce(
				(amount, ele) => amount + parseInt(ele.deaths),
				0
			);
			const recovered = dailyInfo.data.reduce(
				(amount, ele) => amount + parseInt(ele.recovered),
				0
			);
			const neededInfo = { date: d, confirmed, deaths, recovered };
			return [...(await acc), neededInfo];
		}, []);

		return data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchContries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);

		return countries.map((country) => country.name);
	} catch (error) {}
};
