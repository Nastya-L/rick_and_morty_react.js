import React, { forwardRef } from 'react';
import style from './CardList.module.scss';
import { ThemeContext } from '../Theme/ThemeContext';
import BtnDetails from '../BtnDetails/BtnDetails';
import BtnAddFavoritesCharacters from '../BtnAddFavorites/BtnAddFavoritesCharacters';

const CardList = forwardRef(function CardList(props, ref) {

	const description = props.description ? props.description.slice(0, 120) : '';

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div ref={ref} className={style.card} data-theme={`${theme}List`} key={props._id}>
					<div className={style.cardImageWrapper}>
						<div className={style.cardImage}>
							<img src={props.img} />
						</div>
					</div>
					<div className={style.cardWrapper}>
						<h1 className={style.cardName}>{props.name}</h1>
						<div className={style.cardInfo}>
							<p 
								className={style.cardState} 
								data-theme={`${theme}List`}>{props.status}</p>
							<p 
								data-theme={`${theme}List`} 
								className={style.cardGender}>{props.gender}</p>
							<p 
								data-theme={`${theme}List`} 
								className={style.cardSpecies}>{props.species}</p>
							<p 
								data-theme={`${theme}List`} 
								className={style.cardPlanet}>{props.planet}</p>
						</div>
						<p className={style.cardDescr}>{description}...</p>
						<BtnAddFavoritesCharacters _id={props._id} />
						<BtnDetails _id={props._id} route={'character/'}/>
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
});

export default CardList;