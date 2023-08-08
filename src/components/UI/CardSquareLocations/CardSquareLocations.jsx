import React from 'react';
import style from './CardSquareLocations.module.scss';
import { ThemeContext } from '../Theme/ThemeContext';
import BtnDetails from '../BtnDetails/BtnDetails';
import BtnAddFavorites from '../BtnAddFavorites/BtnAddFavorites';

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
								className={style.cardDweller}>inhabitants:</p>
							<span>{props.dweller}</span>
						</div>
						<p className={style.cardDescr}>{description}...</p>
						<BtnAddFavorites _id={props._id} />
						<BtnDetails _id={props._id} route={'Locations/'}/>
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default CardSquareLocations;