import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { VIEW_SQUARE } from '../../redux/types';
import Pagination from '../UI/Pagination/Pagination';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import LoadingSquare from '../UI/LoadingSquare/LoadingSquare';
import LoadingList from '../UI/LoadingList/LoadingList';
import style from './DrawItemsPrew.module.scss';
import Filter from '../UI/Filter/Filter';
import Display from '../UI/Display/Display';
import { ThemeContext } from '../UI/Theme/ThemeContext';

const DrawItemsPrew = ({serverRequestFilter, serverRequest, drawSquare, drawList}) => {

	const dispMode = useSelector(state => state.displayReducer.mode);

	const [cards, setCards] = useState([]);
	const [pages, setPages] = useState([]);
	const [limit, setLimit] = useState(3);
	const [hasMore, setHasMore] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [filterParam, setFilterParam] = useState();

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
		serverRequest(limit,currentPage, filterParam)
			.then(([items, pagesServer]) => {
				if (dispMode !== VIEW_SQUARE) {
					setCards([...cards, ...items]);
				} else {
					setCards(items);
				}
				setHasMore(pagesServer > currentPage);
				setTimeout(() => {
					setPages(pagesServer);
					setLoading(false);
				}, isWaiteForLoading ? 1000 : 0);
			})
			.catch((Error) => {
				setLoading(false);
				console.log(Error, 'Error');
			});
	}, [currentPage, limit, filterParam]);

	const changePage = (page) => {
		setCurrentPage(page);
	};

	const nextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const selectedFilter = (param) => {
		if (filterParam !== param) {
			setFilterParam(param);
			setCurrentPage(1);
			setCards([]);
		}
	};

	return (
		<>
			<div className={style.containerMode}>
				<Filter selectedFilter={selectedFilter} serverRequestFilter={serverRequestFilter} />
				<Display />
			</div>
			<section>
				{(dispMode === VIEW_SQUARE) 
					? <CardsView DrawSquare={drawSquare} cards={cards} pages={pages} currentPage={currentPage} changePage={changePage} isloading={loading} />
					: <ListView renderItem={drawList} items={cards} hasMore={hasMore} nextPage={nextPage} isloading={loading} />
				}
			</section>
		</>
	);
};

function NoCards() {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<h1 data-theme={`${theme}DrawItemsPrew`} className={style.containerCardNot}>There are no Cards </h1>
			}
		</ThemeContext.Consumer>
	);
}

function CardsView({cards, currentPage, pages, changePage, isloading, DrawSquare}) {

	const loadingSquareHolder = [...Array(3)].map((e, i) => <LoadingSquare key={i}/>);
	const renderCards = (cards.length > 0) 
		? cards.map((card) => <DrawSquare {...card} key={card._id} />) 
		: <NoCards />;

	return (
		<>
			<div className={style.container}>
				{isloading
					? loadingSquareHolder
					: renderCards
				}
			</div>
			<Pagination page={pages} currentPage={currentPage} changePage={changePage} />
		</>
	);
}

function ListView({items, hasMore, nextPage, renderItem, isloading}) {

	const loadingListHolder = [...Array(3)].map((e, i) => <LoadingList key={i}/>);
	const renderLists = (items.length > 0) 
		? <InfiniteScroll items={items} hasMore={hasMore} nextPage={nextPage} renderItem={renderItem} /> 
		: <NoCards />;

	return (
		<>
			{isloading
				? loadingListHolder
				: renderLists
			}
		</>
	);
}

export default DrawItemsPrew;