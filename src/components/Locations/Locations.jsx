import React, {useState} from 'react';
import styles from './Locations.module.scss';
import CardSquareLocations from '../UI/CardSquareLocations/CardSquareLocations';
import Display from '../UI/Display/Display';
import CardListLocations from '../UI/CardListLocations/CardListLocations';

function Locations() {

	const [displayMode, setDisplayMode] = useState('square');

	return (
		<>
			<Display mode={displayMode} changeMode={setDisplayMode}/>
			<div className={styles.container}>
				{displayMode === 'square'
					? <CardSquareLocations/>
					: <CardListLocations />}
			</div>
		</>

	);
}

export default Locations;