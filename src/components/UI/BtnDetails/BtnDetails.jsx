import React from 'react';
import style from './BtnDetails.module.scss';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Theme/ThemeContext';

function BtnDetails(props) {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<button  className={style.more} id={props._id}>
					<NavLink data-theme={`${theme}Btn`} to={`/details/${props.route}${props._id}`}>
						Read more
					</NavLink>
				</button>
			}
		</ThemeContext.Consumer>
	);
}

export default BtnDetails;