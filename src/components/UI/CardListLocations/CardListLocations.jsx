import React, { forwardRef } from 'react';
import style from './CardListLocations.module.scss';
import { ThemeContext } from '../Theme/ThemeContext';
import BtnDetails from '../BtnDetails/BtnDetails';
import BtnAddFavorites from '../BtnAddFavorites/BtnAddFavorites';

const CardListLocations = forwardRef(function CardListLocations(props, ref) {

	const description = props.description ? props.description.slice(0, 120) : '';

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div ref={ref} className={style.card} data-theme={`${theme}ListLocations`} key={props._id}>
					<div className={style.cardImageWrapper}>
						<div className={style.cardImage}>
							<img src={props.img} />
						</div>
					</div>
					<div className={style.cardWrapper}>
						<h1 className={style.cardName}>{props.name}</h1>
						<div className={style.cardInfo}>
							<p 
								className={style.cardType} 
								data-theme={`${theme}ListLocations`}>type:</p>
							<span>{props.type}</span>
							<p 
								data-theme={`${theme}ListLocations`} 
								className={style.cardDweller}>dimension:</p>
							<span>{props.dimension}</span>
						</div>
						<p className={style.cardDescr}>{description}...</p>
						<BtnAddFavorites _id={props._id} />
						<BtnDetails _id={props._id} route={'locations/'} />
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
});

export default CardListLocations;