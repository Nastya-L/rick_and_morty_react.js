import React from 'react';
import style from './CardSquareLocations.module.scss';
import { ThemeContext } from '../Theme/ThemeContext';
import BtnDetails from '../BtnDetails/BtnDetails';
import BtnAddFavoritesLocations from '../BtnAddFavorites/BtnAddFavoritesLocations';

function CardSquareLocations(props) {

	const description = props.description ? props.description.slice(0, 120) : '';

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.card} data-theme={`${theme}SquareLocations`}>
					<div className={style.cardImage}>
						<img src={props.img} />
					</div>
					<div className={style.cardWrapper}>
						<h1 className={style.cardName}>{props.name}</h1>
						<div className={style.cardInfo}>
							<p data-theme={`${theme}SquareLocations`} 
								className={style.cardType}>type:</p>
							<span>{props.type}</span>
							<p data-theme={`${theme}SquareLocations`} 
								className={style.cardDweller}>dimension:</p>
							<span>{props.dimension}</span>
						</div>
						<p className={style.cardDescr}>{description}...</p>
						<BtnAddFavoritesLocations _id={props._id} />
						<BtnDetails _id={props._id} route={'locations/'}/>
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default CardSquareLocations;