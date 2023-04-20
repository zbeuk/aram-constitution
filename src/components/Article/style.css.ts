import {globalStyle, style} from '@vanilla-extract/css';
import {themeSchema} from '~/style.css';

export const titleStyle = style({
	color: themeSchema.text.color,
	fontSize: '1.3em',
	fontWeight: 700,
});

export const separatorStyle = style({
	margin: '15px 0',
	width: '100%',
	border: `1px solid ${themeSchema.color.primary}`,
});

export const contentStyle = style({});

globalStyle(`${contentStyle} > p`, {
	margin: '1em 0',
	lineHeight: '1.5em',
});

globalStyle(`${contentStyle} > ul`, {
	listStyle: 'disc',
	marginLeft: '1.5em',
});

globalStyle(`${contentStyle} > ul`, {
	lineHeight: '1.5em',
});
