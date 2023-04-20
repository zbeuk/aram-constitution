import type {VoidComponent} from 'solid-js';
import {linkStyle, strongStyle} from './style.css';

interface IArticleLinkProperties {
	id: number;
}

export const ArticleLink: VoidComponent<
	IArticleLinkProperties
> = properties => {
	return (
		<strong class={strongStyle}>
			<a class={linkStyle} href={`#${properties.id}`}>
				{` l'article ${properties.id} `}
			</a>
		</strong>
	);
};
