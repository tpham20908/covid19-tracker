import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	container: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '24px 12px 32px',
		[theme.breakpoints.down('sm')]: {
			margin: '16px 12px 24px',
		},
		'&:after': {
			content: '"Tung Pham - 2021"',
			position: 'absolute',
			bottom: -22,
			right: 0,
			color: '#aaa',
		},
	},
	image: {
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
}));
