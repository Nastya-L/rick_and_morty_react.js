import React from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import './styles/App.scss';
import App from './App';
import ThemeProvider from './components/UI/Theme/ThemeProvider';
import { Provider } from 'react-redux';

import { store } from './redux/rootReducer';

const root = createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<div>{store.mode}</div>
		<ThemeProvider>
			<Router>
				<App/>
			</Router>
		</ThemeProvider>
	</Provider>
);