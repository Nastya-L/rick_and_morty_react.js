import React from 'react';
import '../../../styles/App.scss';
import '../../../styles/reset.scss';
import style from './CardSquare.module.scss';
import imageCard from '../../../images/Morty.png';

function CardSquare(props) {
	return (
		<div className={style.card}>
			<div className={style.cardImage}>
				<img src={imageCard} />
			</div>
			<div className={style.cardWrapper}>
				<h1 className={style.cardName}>{props.name}</h1>
				<div className={style.cardInfo}>
					<p className={style.cardState}>{props.state}</p>
					<p className={style.cardSpecies}>{props.species}</p>
					<p className={style.cardGender}>{props.gender}</p>
					<p className={style.cardPlanet}>{props.planet}</p>
				</div>
				<p className={style.cardDescr}>{props.description}</p>
				<button className={style.cardSave}></button>
				<button className={style.cardMore}>Подробнее</button>
			</div>
		</div>
	);
}

export default CardSquare;