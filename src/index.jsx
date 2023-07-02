import React from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import './styles/App.scss';
import App from './App';
import ThemeProvider from './components/UI/Theme/ThemeProvider';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer);

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