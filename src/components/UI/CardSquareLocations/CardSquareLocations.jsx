import React from 'react';
import style from './CardSquareLocations.module.scss';
import { ThemeContext } from '../Theme/ThemeContext';
import imageCard from '../../../images/planeta.png';
import BtnDetails from '../BtnDetails/BtnDetails';
import BtnAddFavorites from '../BtnAddFavorites/BtnAddFavorites';

function CardSquareLocations() {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.card} data-theme={`${theme}SquareLocations`}>
					<div className={style.cardImage}>
						<img src={imageCard} />
					</div>
					<div className={style.cardWrapper}>
						<h1 className={style.cardName}>Планета Судной ночи</h1>
						<div className={style.cardInfo}>
							<p data-theme={`${theme}SquareLocations`} 
								className={style.cardType}>Тип:</p>
							<span>Планета</span>
							<p data-theme={`${theme}SquareLocations`} 
								className={style.cardDweller}>Обитатели:</p>
							<span>Кошачьи гуманоиды</span>
						</div>
						<p className={style.cardDescr}>Планета Судной ночи (англ. Purge Planet) — это планета без 
							определенного названия, которая появилась в девятой серии второго сезона «Судная Ночь».</p>
						<BtnAddFavorites />
						<BtnDetails route={'Locations/'}/>
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default CardSquareLocations;