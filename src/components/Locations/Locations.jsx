import React from 'react';
import CardSquareLocations from '../UI/CardSquareLocations/CardSquareLocations';
import CardListLocations from '../UI/CardListLocations/CardListLocations';
import axios from 'axios';
import { routeLocations } from '../../services/BackendUrl'; 
import fixImgPath from '../../Utils/fixImgPath';
import DrawItemsPrew from '../DrawItemsPrew/DrawItemsPrew';

function Locations() {

	const serverRequest = async (limit, currentPage, filterParam) => {
		const prom = new Promise((resolve, reject) => {
			axios
				.get(`${routeLocations}?page=${currentPage}&limit=${limit}&${filterParam}`)
				.then((Response) => {
					const pages = Response.data.pages;
					const locations = fixImgPath(Response.data.locations);
					resolve([locations, pages]);
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
				.get(`${routeLocations}/categories`)
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

	const drawSquare = (card) => <CardSquareLocations {...card} key={card._id}/>;
	const drawList = (item, i, ref) => <CardListLocations {...item} ref={ref} key={item._id}/>;

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

export default Locations;