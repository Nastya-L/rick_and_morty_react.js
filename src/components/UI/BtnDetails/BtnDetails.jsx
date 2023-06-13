import React from 'react';
import style from './BtnDetails.module.scss';
import { NavLink } from 'react-router-dom';

function BtnDetails(props) {
	return (
		<button className={style.more} id={props.id}>
			<NavLink to={`/Details/${props.route}`}>
				Подробнее
			</NavLink>
		</button>
	);
}

export default BtnDetails;