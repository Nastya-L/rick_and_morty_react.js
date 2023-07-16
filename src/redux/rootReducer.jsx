import { combineReducers } from 'redux';
import { displayReducer } from './displayReducer';
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
	displayReducer
});

const initialState = {

};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));