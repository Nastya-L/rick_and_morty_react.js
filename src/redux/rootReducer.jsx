import { combineReducers } from 'redux';
import { displayReducer } from './displayReducer';
import { favoritesReducer } from './favoritesReducer';
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const devTools =
	process.env.NODE_ENV === 'production' // eslint-disable-line
		? applyMiddleware(thunk)
		: composeWithDevTools(applyMiddleware(thunk));

export const rootReducer = combineReducers({
	displayReducer,
	favoritesReducer,
});

function restoreFromLocalStorage() {
	const itemsCharacters = (JSON.parse(localStorage.getItem('idsCharacters')) || []);
	const itemsLocations = (JSON.parse(localStorage.getItem('idsLocations')) || []);
	const state = {
		favoritesReducer: {
			idsCharacters: itemsCharacters,
			idsLocations: itemsLocations,
		},
	};
	return state;
}

const initialState = restoreFromLocalStorage();

export const store = createStore(rootReducer, initialState, devTools);

store.subscribe(() => {
	const cardsIdCharacters = store.getState().favoritesReducer.idsCharacters;
	const cardsIdLocations = store.getState().favoritesReducer.idsLocations;
	localStorage.setItem('idsCharacters', JSON.stringify(cardsIdCharacters));
	localStorage.setItem('idsLocations', JSON.stringify(cardsIdLocations));
});