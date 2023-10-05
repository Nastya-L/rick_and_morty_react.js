import React from 'react';
import BtnAddFavorites from './BtnAddFavorites';
import { useDispatch, useSelector } from 'react-redux';
import { userFavoriteLocations } from '../../../redux/actionsFavorite';

function BtnAddFavoritesLocations({_id}) {

	const userLocationsIds = useSelector(state => state.favoritesReducer.idsLocations);

	const dispatch = useDispatch();

	const changeSavedIds = (itemsId) => {
		dispatch(userFavoriteLocations(itemsId));
	};

	return (
		<BtnAddFavorites savedIds={userLocationsIds} changeSavedIds={changeSavedIds}  _id={_id} />
	);
}

export default BtnAddFavoritesLocations;