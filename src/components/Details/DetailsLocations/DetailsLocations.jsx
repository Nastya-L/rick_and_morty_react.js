import React from 'react';
import styles from './DetailsLocations.module.scss';
import image from '../../../images/planeta.png';
import { ThemeContext } from '../../UI/Theme/ThemeContext';
import { NavLink } from 'react-router-dom';
import Comments from '../../Comments/Comments';

function DetailsLocations() {
	const rating = {rating: '2.8'};
    
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<>
					<section className={styles.detailsLocations} 
						data-theme={`${theme}DetailsLocations`}>
						<article className={styles.Locations}>
							<div className={styles.info}>
								<span>Тип:</span>
								<p className={styles.type} 
									data-theme={`${theme}DetailsLocations`}>
									<NavLink>Планета</NavLink>
								</p>
								<span>Обитатели:</span>
								<p data-theme={`${theme}DetailsLocations`} 
									className={styles.dweller}>
									Кошачьи гуманоиды
								</p>
							</div>
							<h1 className={styles.locationsName}>
								Планета Судной ночи
							</h1>
							<p className={styles.locationsDescr}>
								<span>Планета Судной ночи</span>
								(англ. Purge Planet) — это планета без 
								определенного названия, которая появилась в девятой серии второго сезона «Судная Ночь».
							</p>
							<article className={styles.history}> {/* История */}
								<h2 className={styles.historyName}>
									История
								</h2>
								<p>
									<br/>Это планета, которая существует в Измерении подмены и является домом кошачьих гуманоидов.
									На этой планете все очень счастливы и приветливы по отношению ко всем, потому что каждый год 
									происходит чистка, где все законы отменяются на ночь, и каждый волен убивать, кого хочет, выпуская свой 
									гнев без последствий.
								</p>
								<p>
									<br/>Общество на планете контролируется богатыми, а событие Фестиваля больше затрангивает низшие классы, 
									таких как бездомные, которые считаются бесполезными для общества, в то время как высшие классы были в 
									состоянии обеспечить свою безопасность.
								</p>
							</article>
						</article>
						<aside className={styles.aside}>
							<div className={styles.asideImg}>
								<img src={image} /> {/* Картинка */}
							</div>
						</aside>
					</section>
					<Comments {...rating}/>
				</>
			}
		</ThemeContext.Consumer>
	);
}

export default DetailsLocations;