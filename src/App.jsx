import React from 'react';
import './styles/App.scss';
import './styles/reset.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { ThemeContext } from './components/UI/Theme/ThemeContext';
import RoutesApp from './components/Routes/RoutesApp';

const App = () => {
	
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className="app" id={theme}>
					<Header/>
					<Sidebar/>
					<RoutesApp/>
				</div>
			}
		</ThemeContext.Consumer>
	);
};

export default App;