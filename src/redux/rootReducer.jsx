import { combineReducers } from 'redux';
import { displayReducer } from './displayReducer';
import { paginationReducer } from './paginationReducer';

export const rootReducer = combineReducers({
	displayReducer,
	paginationReducer
});
