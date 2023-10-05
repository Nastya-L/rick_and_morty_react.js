import { USER_FAVORITE_CHARACTERS, USER_FAVORITE_LOCATIONS } from './types';

export function userFavoriteCharacters(arrayIds) {
	return {
		type: USER_FAVORITE_CHARACTERS,
		payload: arrayIds
	};
}

export function userFavoriteLocations(arrayIdsLocations) {
	return {
		type: USER_FAVORITE_LOCATIONS,
		payload: arrayIdsLocations
	};
}