import React, { useState } from 'react';
import '../../styles/App.scss';
import '../../styles/reset.scss';
import style from './Home.module.scss';
import CardSquare from '../UI/CardSquare/CardSquare';
import CardList from '../UI/CardList/CardList';
import clas from 'classnames';

function Home() {
	const character = [
		{
			id: '1',
			name: 'Морти Смит',
			state: 'Жив',
			gender: 'Мужской',
			species: 'Человек',
			planet: 'Земля',
			description: 'Мортимер «Морти» Смит-старший — является одним из главных героев сериала. Приходится внуком Рику и часто вынужден ходить по пятам на его различных «злоключениях».'
		},
		{
			id: '2',
			name: 'Морти Смит',
			state: 'Жив',
			gender: 'Мужской',
			species: 'Человек',
			planet: 'Земля',
			description: 'Мортимер «Морти» Смит-старший — является одним из главных героев сериала. Приходится внуком Рику и часто вынужден ходить по пятам на его различных «злоключениях».'
		},
		{
			id: '3',
			name: 'Морти Смит',
			state: 'Жив',
			gender: 'Мужской',
			species: 'Человек',
			planet: 'Земля',
			description: 'Мортимер «Морти» Смит-старший — является одним из главных героев сериала. Приходится внуком Рику и часто вынужден ходить по пятам на его различных «злоключениях».'
		},
		{
			id: '4',
			name: 'Морти Смит',
			state: 'Жив',
			gender: 'Мужской',
			species: 'Человек',
			planet: 'Земля',
			description: 'Мортимер «Морти» Смит-старший — является одним из главных героев сериала. Приходится внуком Рику и часто вынужден ходить по пятам на его различных «злоключениях».'
		}];
	
	const [displayWay, setDisplayWay] = useState('square');

	function displayList() {
		setDisplayWay('list');
	}

	function displaySquare() {
		setDisplayWay('square');
	}

	return (
		<>
			<div className={style.display}>
				<div className={style.view}>
					<button
						className={clas(style.viewList, (displayWay === 'list' ? style.activeBtn : ''))}
						onClick={displayList}></button>
					<button
						className={clas(style.viewSquare, (displayWay === 'square' ? style.activeBtn : ''))}
						onClick={displaySquare}></button>
				</div>
			</div>
			<main>
				<section className={style.container}>
					{character.map((card) => {
						return	displayWay === 'square' 
							? <CardSquare {...card} key={card.id} /> 
							: <CardList {...card} key={card.id} />;
					})}
				</section>
			</main>
		</>
	);
}

export default Home;