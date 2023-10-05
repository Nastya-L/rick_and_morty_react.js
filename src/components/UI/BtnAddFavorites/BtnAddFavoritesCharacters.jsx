import React from 'react';
import BtnAddFavorites from './BtnAddFavorites';
import { useDispatch, useSelector } from 'react-redux';
import { userFavoriteCharacters } from '../../../redux/actionsFavorite';

function BtnAddFavoritesCharacters({_id}) {

	const userCharactersIds = useSelector(state => state.favoritesReducer.idsCharacters);

	const dispatch = useDispatch();

	const changeSavedIds = (itemsId) => {
		dispatch(userFavoriteCharacters(itemsId));
	};

	return (
		<BtnAddFavorites savedIds={userCharactersIds} changeSavedIds={changeSavedIds}  _id={_id} />
	);
}

export default BtnAddFavoritesCharacters;