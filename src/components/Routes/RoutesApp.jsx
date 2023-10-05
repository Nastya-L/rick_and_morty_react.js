import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Characters from '../Characters/Characters';
import Locations from '../Locations/Locations';
import DetailsCharacter from '../Details/DetailsCharacter/DetailsCharacter';
import DetailsLocations from '../Details/DetailsLocations/DetailsLocations';
import FavoritesPages from '../Favorites/Favorites';
import Error from '../404/Error';

function RoutesApp() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/characters' element={<Characters />} />
			<Route path='/locations' element={<Locations />} />
			<Route path='/favorites' element={<FavoritesPages />}/>
			<Route path='/details/character/:id' element={<DetailsCharacter />} />
			<Route path='/details/locations/:id' element={<DetailsLocations />}/>
			<Route path='*' element={<Error />} />
		</Routes>
	);
}

export default RoutesApp;