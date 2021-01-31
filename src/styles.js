import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 16,
		[theme.breakpoints.down('sm')]: {
			margin: '0 12px',
		},
	},
	image: {
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
}));
