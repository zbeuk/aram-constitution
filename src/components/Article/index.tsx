import {JSX, Show, VoidComponent} from 'solid-js';
import {titleStyle, separatorStyle, contentStyle} from './style.css';

interface IArticleProperties {
	id: number;
	content: JSX.Element;
	separate: boolean;
}

export const Article: VoidComponent<IArticleProperties> = properties => {
	return (
		<>
			<article>
				<h2 class={titleStyle} id={`${properties.id}`}>
					Article {properties.id}.
				</h2>
				<div class={contentStyle}>{properties.content}</div>
				<Show when={properties.separate}>
					<hr class={separatorStyle} />
				</Show>
			</article>
		</>
	);
};
