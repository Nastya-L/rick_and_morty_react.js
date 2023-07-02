import React from 'react';
import style from './BtnDetails.module.scss';
import { NavLink } from 'react-router-dom';

function BtnDetails(props) {
	return (
		<button className={style.more} id={props._id}>
			<NavLink to={`/details/${props.route}${props._id}`}>
				Подробнее
			</NavLink>
		</button>
	);
}

export default BtnDetails;