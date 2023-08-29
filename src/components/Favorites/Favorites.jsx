import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { routeCharacters } from '../../services/BackendUrl';
import { routeLocations } from '../../services/BackendUrl';
import CardSquare from '../UI/CardSquare/CardSquare';
import style from './Favorites.module.scss';
import fixImgPath from '../../Utils/fixImgPath';
import { ThemeContext } from '../UI/Theme/ThemeContext';
import CardSquareLocations from '../UI/CardSquareLocations/CardSquareLocations';

function FavoritesPages() {
	const useridsCharacters = useSelector(state => state.favoritesReducer.idsCharacters);
	const useridsLocations = useSelector(state => state.favoritesReducer.idsLocations);

	const [cardsCharacters, setCardsCharacters] = useState([]);
	const [cardsLocations, setCardsLocations] = useState([]);

	useEffect(() => {
		if (useridsCharacters && useridsCharacters.length > 0) {
			const cardsId = useridsCharacters.join();
			axios
				.get(`${routeCharacters}/?id=${cardsId}`)
				.then((Response) => {
					const characters = fixImgPath(Response.data.characters);
					setCardsCharacters(characters);
				})
				.catch((Error) => {
					console.log('Error', Error);
				});
		} else {
			setCardsCharacters([]);
		}
		if (useridsLocations && useridsLocations.length > 0) {
			const cardsId = useridsLocations.join();
			axios
				.get(`${routeLocations}/?id=${cardsId}`)
				.then((Response) => {
					const locations = fixImgPath(Response.data.locations);
					setCardsLocations(locations);
				})
				.catch((Error) => {
					console.log('Error', Error);
				});
		} else {
			setCardsLocations([]);
		}
	},[]);

	useEffect(() => {
		const changeCards = cardsCharacters.filter((card) => {
			return useridsCharacters.includes(card._id);
		});
		setCardsCharacters(changeCards);
	},[useridsCharacters]);

	useEffect(() => {
		const changeCards = cardsLocations.filter((card) => {
			return useridsLocations.includes(card._id);
		});
		setCardsLocations(changeCards);
	},[useridsLocations]);

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<>
					{((cardsCharacters.length <= 0) && (cardsLocations.length <= 0)) 
						? <h1 data-theme={`${theme}Favorites`} className={style.noFavorites}>No favorites saved</h1>
						: <section className={style.container}>
							{cardsCharacters.length > 0 &&
								<div className={style.wrap}>
									<h2 data-theme={`${theme}Favorites`} className={style.favoritesTitle}>Favorites Characters</h2>
									<div className={style.containerCard}>
										{cardsCharacters.map((card) => {
											return <CardSquare {...card} key={card._id} />;})}
									</div>
								</div>}
							
							{cardsLocations.length > 0 &&
								<div className={style.wrap}>
									<h2 data-theme={`${theme}Favorites`} className={style.favoritesTitle}>Favorites Locations</h2>
									<div className={style.containerCard}>
										{cardsLocations.map((cardLocation) => {
											return <CardSquareLocations {...cardLocation} key={cardLocation._id} />;})}
									</div>
								</div>}
						</section>}
				</>	
			}
		</ThemeContext.Consumer>
	);
}

export default FavoritesPages;