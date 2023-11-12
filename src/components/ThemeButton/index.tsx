import {
	type VoidComponent,
	createSignal,
	createEffect,
	on,
	onMount,
} from 'solid-js';
import {inputStyle, wrapperStyle} from './style.css';

export type Theme = 'light' | 'dark';

export const ThemeButton: VoidComponent = () => {
	const [currentTheme, setCurrentTheme] = createSignal<Theme>('light');

	onMount(() => {
		const prefferedTheme = window.matchMedia('(prefers-color-scheme: dark)')
			.matches
			? 'dark'
			: 'light';

		const defaultTheme =
			(window.localStorage.getItem('theme') as Theme) ?? prefferedTheme;

		const htmlElement = document.querySelector('html');

		if (htmlElement) {
			htmlElement.dataset.colorMode = defaultTheme;
		}

		setCurrentTheme(defaultTheme);
	});

	createEffect(
		on(currentTheme, () => {
			const htmlElement = document.querySelector('html');

			if (htmlElement) {
				htmlElement.dataset.colorMode = currentTheme();
			}
		})
	);

	const toggle = () => {
		const oppositeTheme: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
		window.localStorage.setItem('theme', oppositeTheme);
		setCurrentTheme(oppositeTheme);
	};

	return (
		<>
			<div class={wrapperStyle}>
				<input
					class={inputStyle}
					checked={currentTheme() === 'dark'}
					onClick={toggle}
					type="checkbox"
					id="darkmode-toggler"
				/>
			</div>
		</>
	);
};
