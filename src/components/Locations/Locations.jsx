import React from 'react';
import styles from './Locations.module.scss';
import CardSquareLocations from '../UI/CardSquareLocations/CardSquareLocations';
import Display from '../UI/Display/Display';
import CardListLocations from '../UI/CardListLocations/CardListLocations';
import { useSelector } from 'react-redux';
import { VIEW_SQUARE } from '../../redux/types';

function Locations() {

	const count = useSelector(state => state.displayReducer.mode);

	return (
		<>
			<Display/>
			<div className={styles.container}>
				{count === VIEW_SQUARE
					? <CardSquareLocations/>
					: <CardListLocations />}
			</div>
		</>

	);
}

export default Locations;