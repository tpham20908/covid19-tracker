import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		width: '80%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
}));
