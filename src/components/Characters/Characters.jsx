import React, { useEffect, useState } from 'react';
import style from './Characters.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import CardSquare from '../UI/CardSquare/CardSquare';
import CardList from '../UI/CardList/CardList';
import Display from '../UI/Display/Display';
import { routeCharacters, serverHost } from '../../services/BackendUrl';
import axios from 'axios';
import Pagination from '../UI/Pagination/Pagination';
import { createPages } from '../../redux/actions';
import { VIEW_SQUARE } from '../../redux/types';


function Characters() {
	const dispMode = useSelector(state => state.displayReducer.mode);
	const currentPage = useSelector(state => state.paginationReducer.currentPage);
	const dispatch = useDispatch();

	const [cards, setCards] = useState([]);
	const [pages, setPages] = useState([]);

	useEffect(() => {
		dispatch(createPages(1));
	},[dispMode]);

	useEffect(() => {
		axios
			.get(`${routeCharacters}?page=${currentPage}&limit=3`)
			.then((Response) => {
				const characters = Response.data.characters;
				const pages = Response.data.pages;
				characters.forEach(item => {
					item.img = serverHost + item.img;
				});
				setCards(Response.data.characters);
				createArrPages(pages);
			})
			.catch((Error) => {
				console.log('Error', Error);
			});
	}, [currentPage]);

	function createArrPages(page) {
		const arr = [];
		for (let i = 1; i <= page; i++) {
			arr.push(i);
		}
		setPages(arr);
	}

	return (
		<>
			<Display />
			<section className={style.wrap}>
				<div className={style.container}>
					{cards.map((card) => {
						return	dispMode === VIEW_SQUARE
							? <CardSquare {...card} key={card._id} />
							: <CardList {...card} key={card._id} />;
					})}
				</div>
			</section>
			{dispMode === VIEW_SQUARE
				? <Pagination page={pages} />
				: <></>}
		</>
	);
}

export default Characters;