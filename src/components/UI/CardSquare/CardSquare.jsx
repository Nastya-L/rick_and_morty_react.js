import React from 'react';
import style from './CardSquare.module.scss';
import { ThemeContext } from '../Theme/ThemeContext';
import BtnDetails from '../BtnDetails/BtnDetails';
import BtnAddFavorites from '../BtnAddFavorites/BtnAddFavorites';

function CardSquare(props) {
	const description = props.description ? props.description.slice(0, 120) : '';

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<>
					<div className={style.card} data-theme={`${theme}Square`} key={props._id}>
						<div className={style.cardImage}>
							<img src={props.img} />
						</div>
						<div className={style.cardWrapper}>
							<h1 className={style.cardName}>{props.name}</h1>
							<div className={style.cardInfo}>
								<p data-theme={`${theme}Square`} 
									className={style.cardState}>{props.status}</p>
								<p data-theme={`${theme}Square`} 
									className={style.cardSpecies}>{props.species}</p>
								<p data-theme={`${theme}Square`} 
									className={style.cardGender}>{props.gender}</p>
								<p data-theme={`${theme}Square`} 
									className={style.cardPlanet}>{props.planet}</p>
							</div>
							<p className={style.cardDescr}>{description}...</p>
							<BtnAddFavorites _id={props._id} />
							<BtnDetails _id={props._id} route={'character/'}/>
						</div>
					</div>
				</>
			}
		</ThemeContext.Consumer>
	);
}

export default CardSquare;