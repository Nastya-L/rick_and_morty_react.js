import { USER_FAVORITE_CHARACTERS, USER_FAVORITE_LOCATIONS } from './types';

const initialState = {
	idsCharacters: [],
	idsLocations: [],
};

export const favoritesReducer = (state = initialState, action) => {
	switch(action.type) {
	case USER_FAVORITE_CHARACTERS:
		return {
			...state,
			idsCharacters: action.payload
		};

	case USER_FAVORITE_LOCATIONS:
		return {
			...state,
			idsLocations: action.payload
		};
	default: 
		return state;
	}
};