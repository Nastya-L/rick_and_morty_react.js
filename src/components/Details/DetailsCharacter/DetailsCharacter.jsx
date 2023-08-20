import React, { useEffect, useState } from 'react';
import styles from './DetailsCharacter.module.scss';
import { ThemeContext } from '../../UI/Theme/ThemeContext';
import { NavLink, useParams } from 'react-router-dom';
import Comments from '../../Comments/Comments';
import { routeCharacters, serverHost } from '../../../services/BackendUrl';
import axios from 'axios';

function DetailsCharacter() {
	const {id} = useParams();

	const [cardDetail, setCardDetail] = useState({});

	useEffect(() => {
		if (!id) return;
		axios
			.get(`${routeCharacters}/${id}`)
			.then((Response) => {
				Response.data.img = serverHost + Response.data.img;
				setCardDetail(Response.data);
			})
			.catch((Error) => {
				console.log('Error', Error);
			});
	}, []);

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<>
					<section className={styles.detailsCharacter} id={cardDetail._id}
						data-theme={`${theme}DetailsCharacter`}>
						<article className={styles.character}> {/* Персонаж */}
							<div className={styles.info}>
								<p className={styles.state} 
									data-theme={`${theme}DetailsCharacter`}>
									<NavLink>{cardDetail.status}</NavLink>
								</p>
								<p data-theme={`${theme}DetailsCharacter`} 
									className={styles.gender}>
									<NavLink>{cardDetail.gender}</NavLink>
								</p>
								<p data-theme={`${theme}DetailsCharacter`} 
									className={styles.species}>
									<NavLink>{cardDetail.species}</NavLink>
								</p>
								<p data-theme={`${theme}DetailsCharacter`} 
									className={styles.planet}>
									<NavLink>{cardDetail.planet}</NavLink>
								</p>
							</div>
							<h1 className={styles.characterName}>
								{cardDetail.name}
							</h1>
							<p className={styles.characterDescr}>
								<span>{cardDetail.name} </span>
								{cardDetail.description}
							</p>
							<article className={styles.biography}> {/* Биография */}
								<p>
									{cardDetail.content}
								</p>
							</article>
						</article>
						<aside className={styles.aside}>
							<div className={styles.asideImg}>
								<img src={cardDetail.img} /> {/* Картинка */}
							</div>
						</aside>
					</section>
					<Comments rating={cardDetail.rating} id={id} comments={cardDetail.comments} route={routeCharacters} />
				</>
			}
		</ThemeContext.Consumer>
	);
}

export default DetailsCharacter;