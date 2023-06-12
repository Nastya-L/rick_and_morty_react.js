import React from 'react';
import '../../../styles/App.scss';
import '../../../styles/reset.scss';
import style from './CardSquare.module.scss';
import imageCard from '../../../images/Morty.png';
import { ThemeContext } from '../Theme/ThemeContext';
import BtnDetails from '../BtnDetails/BtnDetails';

function CardSquare(props) {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.card} data-theme={`${theme}Square`}>
					<div className={style.cardImage}>
						<img src={imageCard} />
					</div>
					<div className={style.cardWrapper}>
						<h1 className={style.cardName}>{props.name}</h1>
						<div className={style.cardInfo}>
							<p data-theme={`${theme}Square`} 
								className={style.cardState}>{props.state}</p>
							<p data-theme={`${theme}Square`} 
								className={style.cardSpecies}>{props.species}</p>
							<p data-theme={`${theme}Square`} 
								className={style.cardGender}>{props.gender}</p>
							<p data-theme={`${theme}Square`} 
								className={style.cardPlanet}>{props.planet}</p>
						</div>
						<p className={style.cardDescr}>{props.description.slice(0, 120)}...</p>
						<button className={style.cardSave}></button>
						<BtnDetails id={props.id}/>
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default CardSquare;