import { USER_FAVORITE } from './types';

const initialState = {
	ids: []
};

export const favoritesReducer = (state = initialState, action) => {
	switch(action.type) {
	case USER_FAVORITE:
		return {
			...state,
			ids: action.payload
		};

	default: 
		return state;
	}
};