import React from 'react';
import style from './Display.module.scss';
import clas from 'classnames';
import { connect } from 'react-redux';
import { viewList, viewSquare } from '../../../redux/actions';
import { VIEW_LIST, VIEW_SQUARE } from '../../../redux/types';

function Display(props) {
	return (
		<div className={style.display}>
			<div className={style.view}>
				<button
					className={clas(style.viewList, (props.mode === VIEW_LIST ? style.activeBtn : ''))}
					onClick={props.displayList} ></button>
				<button
					className={clas(style.viewSquare, (props.mode === VIEW_SQUARE ? style.activeBtn : ''))}
					onClick={props.displaySquare} ></button>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	const { displayReducer } = state;
	return {
		mode: displayReducer.mode
	};
}

function mapDispchToProps(dispach) {
	return {
		displayList: () => {
			return  dispach(viewList());
		},
		displaySquare: () => {
			return  dispach(viewSquare());
		}
	};
}

export default connect(mapStateToProps,mapDispchToProps)(Display);