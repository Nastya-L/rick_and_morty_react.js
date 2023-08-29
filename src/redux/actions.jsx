import { USER_FAVORITE_CHARACTERS, USER_FAVORITE_LOCATIONS, VIEW_LIST, VIEW_SQUARE } from './types';

export function viewList() {
	return {
		type: VIEW_LIST
	};
}

export function viewSquare() {
	return {
		type: VIEW_SQUARE
	};
}

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