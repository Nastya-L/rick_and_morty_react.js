import React, { useEffect, useState, useLayoutEffect } from 'react';
import style from './Characters.module.scss';
import { useSelector } from 'react-redux';
import CardSquare from '../UI/CardSquare/CardSquare';
import CardList from '../UI/CardList/CardList';
import Display from '../UI/Display/Display';
import { routeCharacters, serverHost } from '../../services/BackendUrl';
import axios from 'axios';
import Pagination from '../UI/Pagination/Pagination';
import { VIEW_SQUARE } from '../../redux/types';
import LoadingSquare from '../UI/LoadingSquare/LoadingSquare';
import LoadingList from '../UI/LoadingList/LoadingList';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

function Characters() {
	const dispMode = useSelector(state => state.displayReducer.mode);

	const [cards, setCards] = useState([]);
	const [pages, setPages] = useState([]);
	const [limit, setLimit] = useState(3);
	const [hasMore, setHasMore] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);

	useLayoutEffect(() => {
		setPages(0);
		setCurrentPage(1);
		setCards([]);
		if (dispMode !== VIEW_SQUARE) {
			setLimit(10);
		} else {
			setLimit(3);
		}
	},[dispMode]);

	useEffect(() => {
		const isWaiteForLoading = (cards.length == 0 || dispMode == VIEW_SQUARE);
		setLoading(isWaiteForLoading);
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
				setTimeout(() => {
					setPages(pages);
					setLoading(false);
				}, isWaiteForLoading ? 1000 : 0);
			})
			.catch((Error) => {
				console.log('Error', Error);
			});
	}, [currentPage, limit]);

	const changePage = (page) => {
		setCurrentPage(page);
	};

	const nextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const renderList = (item, i, ref) => {
		return <CardList {...item} ref={ref} key={item._id} />;
	};

	return (
		<>
			<Display />
			<section className={style.wrap}>
				{(dispMode === VIEW_SQUARE) 
					? <CardsView cards={cards} pages={pages} currentPage={currentPage} changePage={changePage} isloading={loading} />
					: <ListView renderItem={renderList} items={cards} hasMore={hasMore} nextPage={nextPage} isloading={loading} />
				}
			</section>
		</>
	);
}

function CardsView({cards, currentPage, pages, changePage, isloading}) {

	const loadingSquareHolder = [...Array(3)].map((e, i) => <LoadingSquare key={i}/>);

	return (
		<>
			<div className={style.container}>
				{isloading
					? loadingSquareHolder
					: cards.map((card, i) => {
						return <CardSquare {...card} key={card._id} />;
					})
				}
			</div>
			<Pagination page={pages} currentPage={currentPage} changePage={changePage} />
		</>
	);
}

function ListView({items, hasMore, nextPage, renderItem, isloading}) {

	const loadingListHolder = [...Array(3)].map((e, i) => <LoadingList key={i}/>);

	return (
		<>
			{isloading
				? loadingListHolder
				: <InfiniteScroll items={items} hasMore={hasMore} nextPage={nextPage} renderItem={renderItem} />
			}
		</>
	);
}


export default Characters;