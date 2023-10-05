import '@testing-library/jest-dom';
import { favoritesReducer } from './favoritesReducer';
import { userFavoriteCharacters, userFavoriteLocations } from './actionsFavorite';

describe('favoritesReducer', () => {

	const arrayIds = ['64d103098c14f26224d8717b','64d101268c14f26224d87178', '64d0ffb88c14f26224d87176'];

	test('USER_FAVORITE_CHARACTERS', () => { 
		expect(favoritesReducer({idsCharacters: []}, userFavoriteCharacters(arrayIds))).toEqual({idsCharacters: arrayIds});
	});

	test('USER_FAVORITE_LOCATIONS', () => { 
		expect(favoritesReducer({idsLocations: []}, userFavoriteLocations(arrayIds))).toEqual({idsLocations: arrayIds});
	});

	test('Not initialized store', () => { 
		expect(favoritesReducer(undefined, userFavoriteCharacters())).toEqual({idsCharacters: undefined, idsLocations: []});
		expect(favoritesReducer(undefined, userFavoriteLocations())).toEqual({idsCharacters: [], idsLocations: undefined });
	});

	test('Unknown type', () => { 
		expect(favoritesReducer({idsCharacters: []}, {type: 'BlaBla'})).toEqual({idsCharacters: []});
	});
});