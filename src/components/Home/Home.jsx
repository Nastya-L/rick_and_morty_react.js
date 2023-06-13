import React, { useState } from 'react';
import '../../styles/App.scss';
import '../../styles/reset.scss';
import style from './Home.module.scss';
import CardSquare from '../UI/CardSquare/CardSquare';
import CardList from '../UI/CardList/CardList';
import Display from '../UI/Display/Display';

function Home() {
	const character = [
		{
			id: '1',
			name: 'Морти Смит',
			state: 'Жив',
			gender: 'Мужской',
			species: 'Человек',
			planet: 'Земля',
			rating: '4,6',
			description: 'Мортимер «Морти» Смит-старший — является одним из главных героев сериала. Приходится внуком Рику и часто вынужден ходить по пятам на его различных «злоключениях».'
		},
		{
			id: '2',
			name: 'Рик Санчез',
			state: 'Жив',
			gender: 'Мужской',
			species: 'Человек',
			planet: 'Земля',
			rating: '4',
			description: 'Ричард «Рик» Санчез (англ. Rick Sanchez) — главный протагонист мультсериала «Рик и Морти». Безумный ученый, чей алкоголизм, безрассудность и социопатия заставляют беспокоиться семью его дочери.'
		},
		{
			id: '3',
			name: 'Бет Смит',
			state: 'Жива',
			gender: 'Женский',
			species: 'Человек',
			planet: 'Земля',
			rating: '3,8',
			description: 'Элизабет "Бет" Смит (англ. Beth Smith) — дочь Рика, жена Джерри, мать Морти и Саммер. Она работает лошадиным хирургом в Больнице Святого Экуиса.'
		},
		{
			id: '4',
			name: 'Саммер Смит',
			state: 'Жива',
			gender: 'Женский',
			species: 'Человек',
			planet: 'Земля',
			rating: '2,8',
			description: 'Саммер Смит (англ. Summer Smith) — старшая сестра Морти Смита, дочь Джерри и Бет Смит, внучка Рика и Дианы Санчез. Посещает школу Гарри Герпсона вместе с Морти.'
		}];

	const [displayMode, setDisplayMode] = useState('square');
		
	return (
		<main>
			<Display mode={displayMode} changeMode={setDisplayMode}/>
			<section className={style.container}>
				{character.map((card) => {
					return	displayMode === 'square' 
						? <CardSquare {...card} key={card.id} /> 
						: <CardList {...card} key={card.id} />;
				})}
			</section>
		</main>
	);
}

export default Home;