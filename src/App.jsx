import React from 'react';
import './styles/App.scss';
import './styles/reset.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';

const App = () => {

	return (
		<div className="app">
			<Header/>
			<Sidebar/>
			<Home/>
		</div>
	);
};

export default App;