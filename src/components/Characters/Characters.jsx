import React from 'react';
import CardSquare from '../UI/CardSquare/CardSquare';
import CardList from '../UI/CardList/CardList';
import { routeCharacters } from '../../services/BackendUrl';
import axios from 'axios';
import fixImgPath from '../../Utils/fixImgPath';
import DrawItemsPrew from '../DrawItemsPrew/DrawItemsPrew';

function Characters() {

	const serverRequest = async (limit, currentPage, filterParam) => {
		const prom = new Promise((resolve, reject) => {
			axios
				.get(`${routeCharacters}?page=${currentPage}&limit=${limit}&${filterParam}`)
				.then((Response) => {
					const pages = Response.data.pages;
					const characters = fixImgPath(Response.data.characters);
					resolve([characters, pages]);
				})
				.catch((Error) => {
					reject(Error);
				});
		});
		return prom;
	};

	const serverRequestFilter = async () => {
		const prom = new Promise((resolve, reject) => {
			axios
				.get(`${routeCharacters}/categories`)
				.then((Response) => {
					const categories = Response.data;
					resolve(categories);
				})
				.catch((Error) => {
					reject(Error);
				});
		});
		return prom;
	};

	const drawSquare = (card) => <CardSquare {...card} key={card._id}/>;
	const drawList = (item, i, ref) => <CardList {...item} ref={ref} key={item._id}/>;

	return (
		<>
			<DrawItemsPrew
				serverRequestFilter={serverRequestFilter}
				serverRequest={serverRequest}
				drawSquare={drawSquare}
				drawList={drawList}
			/>
		</>
	);
}

export default Characters;