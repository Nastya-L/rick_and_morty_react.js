import React, { useEffect, useState } from 'react';
import style from './BtnAddFavorites.module.scss';
import clas from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { userFavorite } from '../../../redux/actions';

function BtnAddFavorites(props) {
	const userFavorites = useSelector(state => state.favoritesReducer.ids);
	const [active, setActive] = useState();
	const dispatch = useDispatch();

	const changeFavorit = () => {
		let cardsId = [];
		if (userFavorites) {
			cardsId = [...userFavorites];
		}
		const index = cardsId.findIndex((e) => {return e == props._id;});
		if (index >= 0) {
			cardsId.splice(index, 1);
			setActive(false);
		} else {
			cardsId.push(props._id);
			setActive(true);
		}
		dispatch(userFavorite(cardsId));
	};

	useEffect(() => {
		for (let i = 0; i < userFavorites.length; i++) {
			if (userFavorites[i] === props._id) {
				setActive(true);
			}
		}
	}, []);

	return (
		<button onClick={changeFavorit} className={clas(style.save, (active && style.active))} id={props._id}>
		</button>
	);
}

export default BtnAddFavorites;