import {createSignal, type VoidComponent} from 'solid-js';

import {inputStyle, labelStyle} from './style.css';
import {darkTheme, lightTheme} from '~/style.css';

type Theme = 'dark' | 'light';

const getCurrentTheme = () => {
	const currentTheme =
		(window.localStorage.getItem('theme') as Theme) ??
		window.matchMedia('(prefers-color-scheme: dark)').matches;

	document.documentElement.className =
		currentTheme === 'dark' ? darkTheme : lightTheme;

	window.localStorage.setItem('theme', currentTheme);

	return currentTheme;
};

export const ThemeButton: VoidComponent = () => {
	const [currentTheme, setCurrentTheme] = createSignal<Theme>(
		getCurrentTheme(),
	);

	const toggleTheme = () => {
		const oppositeTheme: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
		window.localStorage.setItem('theme', oppositeTheme);
		oppositeTheme === 'dark' ? darkTheme : lightTheme;
		setCurrentTheme(oppositeTheme);
	};

	return (
		<>
			<input
				class={inputStyle}
				checked={currentTheme() === 'dark'}
				onClick={toggleTheme}
				type="checkbox"
				id="darkmode-toggler"
			/>
			<label class={labelStyle} for="darkmode-toggler" />
		</>
	);
};
