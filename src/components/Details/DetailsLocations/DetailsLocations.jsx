import React, { useEffect, useState } from 'react';
import styles from './DetailsLocations.module.scss';
import { ThemeContext } from '../../UI/Theme/ThemeContext';
import { NavLink, useParams } from 'react-router-dom';
import Comments from '../../Comments/Comments';
import axios from 'axios';
import { routeLocations, serverHost } from '../../../services/BackendUrl';

function DetailsLocations() {
	const {id} = useParams();
	const [cardDetail, setCardDetail] = useState({});

	useEffect(() => {
		if (!id) return;
		axios
			.get(`${routeLocations}/${id}`)
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
					<section className={styles.detailsLocations} 
						data-theme={`${theme}DetailsLocations`}>
						<article className={styles.locations}>
							<div className={styles.info}>
								<span>type:</span>
								<p className={styles.type} 
									data-theme={`${theme}DetailsLocations`}>
									<NavLink>{cardDetail.type}</NavLink>
								</p>
								<span>dimension:</span>
								<p data-theme={`${theme}DetailsLocations`} 
									className={styles.dweller}>
									{cardDetail.dimension}
								</p>
							</div>
							<h1 className={styles.locationsName}>
								{cardDetail.name}
							</h1>
							<p className={styles.locationsDescr}>
								{cardDetail.description}
							</p>
							<article className={styles.history}>
								<h2 className={styles.historyName}>
									History
								</h2>
								<p>
									{cardDetail.content}
								</p>
							</article>
						</article>
						<aside className={styles.aside}>
							<div className={styles.asideImg}>
								<img src={cardDetail.img} />
							</div>
						</aside>
					</section>
					<Comments rating={cardDetail.rating} id={id} comments={cardDetail.comments} route={routeLocations} />
				</>
			}
		</ThemeContext.Consumer>
	);
}

export default DetailsLocations;