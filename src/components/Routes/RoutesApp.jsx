import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Characters from '../Characters/Characters';
import Episodes from '../Episodes/Episodes';
import Locations from '../Locations/Locations';
import DetailsCharacter from '../Details/DetailsCharacter/DetailsCharacter';

function RoutesApp() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/Characters' element={<Characters />} />
			<Route path='/Episodes' element={<Episodes />} />
			<Route path='/Locations' element={<Locations />} />
			<Route path='/Details/Character/' element={<DetailsCharacter />} />
		</Routes>
	);
}

export default RoutesApp;