import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/App.scss';
import App from './App';
import ThemeProvider from './components/UI/Theme/ThemeProvider';

const root = createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider>
		<Router>
			<App/>
		</Router>
	</ThemeProvider>
);