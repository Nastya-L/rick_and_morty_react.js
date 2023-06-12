import React from 'react';
import '../../../styles/App.scss';
import '../../../styles/reset.scss';
import style from './CardList.module.scss';
import imageCard from '../../../images/Morty.png';
import { ThemeContext } from '../Theme/ThemeContext';
import BtnDetails from '../BtnDetails/BtnDetails';

function CardList(props) {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.card} data-theme={`${theme}List`}>
					<div className={style.cardImage}>
						<img src={imageCard} />
					</div>
					<div className={style.cardWrapper}>
						<h1 className={style.cardName}>{props.name}</h1>
						<div className={style.cardInfo}>
							<p 
								className={style.cardState} 
								data-theme={`${theme}List`}>{props.state}</p>
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
						<p className={style.cardDescr}>{props.description}</p>
						<button className={style.cardSave}></button>
						<BtnDetails/>
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default CardList;