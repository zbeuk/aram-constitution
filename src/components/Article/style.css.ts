import {css} from 'styled-system/css';

export const titleStyle = css({
	fontSize: '1.3em',
	fontWeight: 700
});

export const separatorStyle = css({
	margin: '15px 0',
	width: '100%',
	border: `1px solid token(primary)`
});

export const contentStyle = css({
	'& > p': {
		margin: '1em 0',
		lineHeight: '1.5em'
	},
	'& > ul': {
		listStyle: 'disc',
		marginLeft: '1.5em',
		lineHeight: '1.5em'
	}
});
