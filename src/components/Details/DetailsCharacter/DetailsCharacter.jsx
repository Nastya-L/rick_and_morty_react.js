import React from 'react';
import styles from './DetailsCharacter.module.scss';
import image from '../../../images/Morty.png';
import { ThemeContext } from '../../UI/Theme/ThemeContext';
import { NavLink } from 'react-router-dom';
import Comments from '../../Comments/Comments';

function DetailsCharacter() {
	const rating = {rating: '2.8'};

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<>
					<section className={styles.detailsCharacter} 
						data-theme={`${theme}DetailsCharacter`}>
						<article className={styles.character}> {/* Персонаж */}
							<div className={styles.info}>
								<p className={styles.state} 
									data-theme={`${theme}DetailsCharacter`}>
									<NavLink>Жив</NavLink>
								</p>
								<p data-theme={`${theme}DetailsCharacter`} 
									className={styles.gender}>
									<NavLink>Мужской</NavLink>
								</p>
								<p data-theme={`${theme}DetailsCharacter`} 
									className={styles.species}>
									<NavLink>Человек</NavLink>
								</p>
								<p data-theme={`${theme}DetailsCharacter`} 
									className={styles.planet}>
									<NavLink>Земля</NavLink>
								</p>
							</div>
							<h1 className={styles.characterName}>
								Морти Смит
							</h1>
							<p className={styles.characterDescr}>
								<span>Морти Смит</span>
								(англ. Morty Smith) или Мортимер «Морти» 
								Смит-старший — является одним из главных героев сериала. Приходится внуком Рику и часто вынужден ходить по пятам на его различных
								«злоключениях».
							</p>
							<article className={styles.biography}> {/* Биография */}
								<h2 className={styles.biographyName}>
									Биография
								</h2>
								<p>
									<br/>Морти посещает школу имени Гарри Герпсона вместе со своей сестрой Саммер. Влюблен в Джессику.
								</p>
								<p>
									<br/>Морти носит короткие каштановые волосы, всегда аккуратно причёсанные. Голова Морти имеет форму круга, в отличии от других персонажей. 
									В основном, Морти носит жёлтую футболку, синие штаны и белые туфли. Имеется ярко выраженное заикание (даже когда спокоен), помимо 
									прочего, периодически Морти говорит срывающимся голосом из-за полового созревания.
								</p>
								<p>
									<br/>Морти — добродушный и впечатлительный, юный мальчик, очень ранимый и легко подверженный чужому влиянию, как все подростки в его возрасте. 
									Парень не отличается большим умом, иногда слегка заикается, что делает его объектом насмешек в школе. Морти преданно влюблен в свою 
									одноклассницу Джессику, которая на него не обращает никакого внимания. Несмотря на мягкотелость, в моменты опасности в Морти просыпается 
									сообразительность и храбрость.
								</p>
								<p>
									<br/>Имеет скрытую агрессию которою он пытается подавить, это на прямую указывается в 9-той серии 2 сезона «Судная Ночь» (англ. Look Who’s 
									Purging Now). Также несмотря на то, что он полностью подвержен манипуляциям со стороны Рика, иногда находит в себе силы дать ему отпор, 
									как, например, в серии «Мисикс и разрушение» (англ. Meeseeks and destroy) когда он стыдит Рика за его цинизм.
								</p>
							</article>
							<article className={styles.interestingFacts}> {/* Интересные факты */}
								<h2 className={styles.interestingFactsName}>
									Интересные факты
								</h2>
								<ul>
									<li>
										Морти всегда готов отправиться кому-нибудь на помощь, какие бы последствия это не имело.
									</li>
									<li>
										Также он постоянно исправляет за Риком его оплошности.
									</li>
								</ul>
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

export default DetailsCharacter;