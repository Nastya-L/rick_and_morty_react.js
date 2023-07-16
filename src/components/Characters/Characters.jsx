import React, { useCallback, useEffect, useRef, useState, useLayoutEffect } from 'react';
import style from './Characters.module.scss';
import { useSelector } from 'react-redux';
import CardSquare from '../UI/CardSquare/CardSquare';
import CardList from '../UI/CardList/CardList';
import Display from '../UI/Display/Display';
import { routeCharacters, serverHost } from '../../services/BackendUrl';
import axios from 'axios';
import Pagination from '../UI/Pagination/Pagination';
import { VIEW_SQUARE } from '../../redux/types';

function Characters() {
	const dispMode = useSelector(state => state.displayReducer.mode);

	const [cards, setCards] = useState([]);
	const [pages, setPages] = useState([]);
	const [limit, setLimit] = useState(3);
	const [hasMore, setHasMore] = useState();
	const [currentPage, setCurrentPage] = useState(1);

	useLayoutEffect(() => {
		setCurrentPage(1);
		setCards([]);
		if (dispMode !== VIEW_SQUARE) {
			setLimit(10);
		} else {
			setLimit(3);
		}
	},[dispMode]);

	const options = {
		threshold: [0, 0.5, 1]
	};

	const observer = useRef();

	useEffect(() => {
		axios
			.get(`${routeCharacters}?page=${currentPage}&limit=${limit}`)
			.then((Response) => {
				const characters = Response.data.characters;
				const pages = Response.data.pages;
				characters.forEach(item => {
					item.img = serverHost + item.img;
				});
				if (dispMode !== VIEW_SQUARE) {
					setCards([...cards,...characters]);
				} else {
					setCards(characters);
				}
				setHasMore(pages > currentPage);
				setPages(pages);
			})
			.catch((Error) => {
				console.log('Error', Error);
			});
	}, [currentPage, limit]);

	const lastElement = useCallback(node => {
		if (node !== null) {
			if (observer.current) {
				observer.current.disconnect();
			}
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting) {
					if (hasMore == true) {
						setCurrentPage(currentPage + 1);
					}
				}
			},
			{
				options
			});
			observer.current.observe(node);
		}
	}, [hasMore]);

	const changePage = useCallback(page => {
		setCurrentPage(page);
	}, []);

	return (
		<>
			<Display />
			<section className={style.wrap}>
				<div className={style.container} >
					{cards.map((card, i) => {
						if (dispMode === VIEW_SQUARE) {
							return <CardSquare {...card} key={card._id} />;
						}
						else {
							return <CardList {...card} ref={(i === cards.length - 1 ) ? lastElement : null} key={card._id} />;
						}
					})}
				</div>
			</section>
			{dispMode === VIEW_SQUARE
				? <Pagination page={pages} currentPage={currentPage} changePage={changePage} />
				: <></>}
		</>
	);
}

export default Characters;