import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	container: {
		margin: '50px 0',
	},
	cards: {
		gap: '16px',
		display: 'flex',
		justifyContent: 'center',
	},
	card: {
		boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)',
	},
	infected: {
		borderBottom: '10px solid #fcd947',
	},
	recovered: {
		borderBottom: '10px solid #47fc47',
	},
	deaths: {
		borderBottom: '10px solid #fc4747',
	},
}));
