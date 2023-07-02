import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Characters from '../Characters/Characters';
import Locations from '../Locations/Locations';
import DetailsCharacter from '../Details/DetailsCharacter/DetailsCharacter';
import DetailsLocations from '../Details/DetailsLocations/DetailsLocations';

function RoutesApp() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/characters' element={<Characters />} />
			<Route path='/locations' element={<Locations />} />
			<Route path='/details/character/:id' element={<DetailsCharacter />} />
			<Route path='/details/locations/:id' element={<DetailsLocations />}/>
		</Routes>
	);
}

export default RoutesApp;