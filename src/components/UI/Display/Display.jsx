import React from 'react';
import style from './Display.module.scss';
import clas from 'classnames';


function Display({mode,changeMode}) {

	function displayList() {
		changeMode('list');
	}

	function displaySquare() {
		changeMode('square');
	}

	return (
		<div className={style.display}>
			<div className={style.view}>
				<button
					className={clas(style.viewList, (mode === 'list' ? style.activeBtn : ''))}
					onClick={displayList}></button>
				<button
					className={clas(style.viewSquare, (mode === 'square' ? style.activeBtn : ''))}
					onClick={displaySquare}></button>
			</div>
		</div>
	);
}

export default Display;