import {css} from 'styled-system/css';

export const wrapperStyle = css({
	position: 'fixed',
	top: '10px',
	right: '10px'
});

export const inputStyle = css({
	WebkitAppearance: 'none',
	width: '100px',
	height: '50px', // width / 2
	backgroundColor: 'secondary',
	border: '3px solid #222222',
	borderRadius: '30px 100px 100px 100px',
	boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
	outline: 'none',
	cursor: 'pointer',
	position: 'relative',
	transition: 'all 0.5s',
	_before: {
		content: '""',
		position: 'absolute',
		width: '50px', // width / 2
		height: '50px', // width / 2
		left: 0,
		top: '50%',
		transform: 'translateY(-50%) scale(0.7)',
		border: '3px solid #222',
		borderRadius: '30px 100px 100px 100px',
		backgroundColor: '#fde881',
		boxSizing: 'border-box',
		transition: 'all 0.3s'
	},
	_checked: {
		borderRadius: '100px 100px 30px 100px',

		_before: {
			left: '50%',
			backgroundColor: '#626c80',
			borderRadius: '100px 100px 30px 100px'
		}
	}
});
