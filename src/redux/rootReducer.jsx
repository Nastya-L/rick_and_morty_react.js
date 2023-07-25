import { combineReducers } from 'redux';
import { displayReducer } from './displayReducer';
import { favoritesReducer } from './favoritesReducer';
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
	displayReducer,
	favoritesReducer
});

function restoreFromLocalStorage() {
	const items = JSON.parse(localStorage.getItem('id'));
	const state = {
		favoritesReducer: {
			ids: items
		}
	};
	return state;
}

const initialState = restoreFromLocalStorage();

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));


store.subscribe(() => {
	const cardsId = store.getState().favoritesReducer.ids;
	localStorage.setItem('id', JSON.stringify(cardsId));
});