import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({children}) => {
	const [ theme, setTheme ] = useState('light');

	const chooseLight =() => {
		setTheme('light');
	};

	const chooseDark =() => {
		setTheme('dark');
	};

	return (
		<ThemeContext.Provider value={{theme, setTheme, chooseLight, chooseDark}}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;