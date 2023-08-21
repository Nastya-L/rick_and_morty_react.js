import React, { useEffect, useState } from 'react';
import style from './Home.module.scss';
import clas from 'classnames';
import { routeCharacters } from '../../services/BackendUrl';
import { routeLocations } from '../../services/BackendUrl';
import axios from 'axios';
import fixImgPath from '../../Utils/fixImgPath';
import CardSquare from '../UI/CardSquare/CardSquare';
import CardSquareLocations from '../UI/CardSquareLocations/CardSquareLocations';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../UI/Theme/ThemeContext';

function Home() {

	const [responseCharacters, setResponseCharacters] = useState([]);
	const [responseLocations, setResponseLocations] = useState([]);

	useEffect(() => {
		axios
			.get(`${routeCharacters}?page=1&limit=3`)
			.then((Response) => {
				const characters = fixImgPath(Response.data.characters);
				setResponseCharacters(characters);
			})
			.catch((Error) => {
				console.log(Error, 'Error');
			});

		axios
			.get(`${routeLocations}?page=1&limit=3`)
			.then((Response) => {
				const locations = fixImgPath(Response.data.locations);
				setResponseLocations(locations);
			})
			.catch((Error) => {
				console.log(Error, 'Error');
			});
	}, []);
		
	return (
		<ThemeContext.Consumer>
			{({theme}) => 
				<section className={style.container}>
					<div className={clas(style.wrap)}>
						<NavLink data-theme={`${theme}Home`} to={'/characters'} className={style.routeAll}>View All</NavLink>
						<div className={style.containerCard}>
							{responseCharacters.length > 0 
								? responseCharacters.map((card) => {
									return <CardSquare {...card} key={card._id} />;})
								: <h1 className={style.containerCardNot}>There are no Characters</h1>}
						</div>
					</div>
					<div className={clas(style.wrap)}>
						<NavLink data-theme={`${theme}Home`} to={'/locations'} className={style.routeAll}>View All</NavLink>
						<div className={style.containerCard}>
							{responseLocations.length > 0
								? responseLocations.map((card) => {
									return <CardSquareLocations {...card} key={card._id}/>;})
								: <h1 className={style.containerCardNot}>There are no Locations</h1>}
						</div>
					</div>
				</section>
			}
		</ThemeContext.Consumer>
		
	);
}

export default Home;