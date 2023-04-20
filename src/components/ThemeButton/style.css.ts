import {style} from '@vanilla-extract/css';
import {themeSchema} from '~/style.css';

export const inputStyle = style({
	width: '0',
	height: '0',
	visibility: 'hidden',
});

export const labelStyle = style({
	position: 'fixed',
	top: '10px',
	right: '10px',
	width: '100px',
	height: '50px',
	background: themeSchema.color.secondary,
	borderRadius: '200px',
	cursor: 'pointer',
	boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
	':after': {
		content: '🌞',
		position: 'relative',
		top: '17px',
		left: '14px',
		padding: '6px 4px',
		borderRadius: 'inherit',
		background: themeSchema.color.primary,
		transition: '0.3s',
	},
	selectors: {
		[`${inputStyle}:checked + &`]: {
			background: '#242424',
		},
		[`${inputStyle}:checked + &:after`]: {
			content: '🌚',
			left: '54px',
			transform: 'translateX(-100%)',
			background: themeSchema.color.secondary,
		},
	},
});
