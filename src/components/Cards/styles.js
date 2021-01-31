import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	container: {
		margin: '50px 0',
	},
	cards: {},
	card: {
		// margin: '0 2px !important',
		boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)',
	},
	infected: {
		borderBottom: '10px solid rgba(255,255,0,0.7)',
	},
	recovered: {
		borderBottom: '10px solid rgba(0,255,0,0.7)',
	},
	deaths: {
		borderBottom: '10px solid rgba(255,0,0,0.7)',
	},
}));
