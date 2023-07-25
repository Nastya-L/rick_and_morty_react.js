import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { routeCharacters, serverHost } from '../../services/BackendUrl';
import Display from '../UI/Display/Display';
import CardSquare from '../UI/CardSquare/CardSquare';
import CardList from '../UI/CardList/CardList';
import style from './Favorites.module.scss';
import { VIEW_SQUARE } from '../../redux/types';

function FavoritesPages() {
	const userFavorites = useSelector(state => state.favoritesReducer.ids);
	const dispMode = useSelector(state => state.displayReducer.mode);

	const [cards, setCards] = useState([]);

	useEffect(() => {
		if (userFavorites.length > 0) {
			const cardsId = userFavorites.join();
			axios
				.get(`${routeCharacters}/?id=${cardsId}`)
				.then((Response) => {
					const characters = Response.data.characters;
					characters.forEach(item => {
						item.img = serverHost + item.img;
					});
					setCards(characters);
				})
				.catch((Error) => {
					console.log('Error', Error);
				});
		} else {
			setCards([]);
		}
		
	},[userFavorites]);

	return (
		<>
			<Display />
			<section className={style.wrap}>
				{(cards.length <= 0) && <h1 className={style.noFavorites}>No favorites saved</h1>}
				{cards.map((card) => {
					return	dispMode === VIEW_SQUARE
						? <CardSquare {...card} key={card._id} /> 
						: <CardList {...card} key={card._id} />;
				})}
			</section>
		</>
	);
}

export default FavoritesPages;