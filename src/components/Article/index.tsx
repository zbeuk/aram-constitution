import { Show, type VoidComponent } from "solid-js";
import type { ArticleProperties } from "~/contents";
import { contentStyle, separatorStyle, titleStyle } from "./style.css";

export const Article: VoidComponent<ArticleProperties> = (properties) => {
	return (
		<article>
			<h2 class={titleStyle} id={`${properties.id}`}>
				Article {properties.id}.
			</h2>
			<div class={contentStyle}>{properties.content}</div>
			<Show when={properties.separator}>
				<hr class={separatorStyle} />
			</Show>
		</article>
	);
};
