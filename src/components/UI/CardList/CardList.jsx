import React from 'react';
import '../../../styles/App.scss';
import '../../../styles/reset.scss';
import style from './CardList.module.scss';
import { ThemeContext } from '../Theme/ThemeContext';
import BtnDetails from '../BtnDetails/BtnDetails';

function CardList(props) {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.card} data-theme={`${theme}List`}>
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
						<p className={style.cardDescr}>{props.description}</p>
						<button className={style.cardSave}></button>
						<BtnDetails id={props.id} route={'Character/'}/>
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default CardList;