import React from 'react';
import style from './Display.module.scss';
import clas from 'classnames';
import {useDispatch, useSelector } from 'react-redux';
import { viewList, viewSquare } from '../../../redux/actions';
import { VIEW_LIST, VIEW_SQUARE } from '../../../redux/types';

function Display() {
	const dispach = useDispatch();
	const dispMode = useSelector(state => state.displayReducer.mode);

	function displayList() {
		dispach(viewList());
	}
	
	function displaySquare() {
		dispach(viewSquare());
	}

	return (
		<div className={style.display}>
			<div className={style.view}>
				<button
					className={clas(style.viewList, (dispMode === VIEW_LIST ? style.activeBtn : ''))}
					onClick={displayList} ></button>
				<button
					className={clas(style.viewSquare, (dispMode === VIEW_SQUARE ? style.activeBtn : ''))}
					onClick={displaySquare} ></button>
			</div>
		</div>
	);
}

export default Display;