import React from 'react';
import '../../styles/App.scss';
import '../../styles/reset.scss';
import clas from 'classnames';

import styles from './Sidebar.module.scss';
import LOGO from '../../images/Logo.png';
import Langs from '../Langs/Langs';
import { ThemeContext } from '../UI/Theme/ThemeContext';
import { NavLink } from 'react-router-dom';

function Sidebar() {

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={clas(styles.sidebar)} data-theme={`${theme}Sidebar`}>
					<nav>
						<div className={styles.logo}>
							<img src={LOGO} alt="Logo" />
						</div>
						<ul className={styles.list}>
							<li data-theme={`${theme}Sidebar`} className={clas(styles.item, styles.itemHome)}>
								<NavLink data-theme={`${theme}Sidebar`} to={'/'} 
									className={({ isActive}) => isActive ? styles.active : styles.itemHome}>
									Главная
								</NavLink>
							</li>
							<li data-theme={`${theme}Sidebar`} className={clas(styles.item, styles.itemCharacters)}>
								<NavLink data-theme={`${theme}Sidebar`} to={'/Characters'} 
									className={({ isActive}) => isActive ? styles.active : styles.itemCharacters}>
									Персонажи
								</NavLink>
							</li>
							<li data-theme={`${theme}Sidebar`} className={clas(styles.item, styles.itemLocations)}>
								<NavLink data-theme={`${theme}Sidebar`} to={'/Locations'} 
									className={({ isActive}) => isActive ? styles.active : styles.itemLocations}>
									Планеты</NavLink>
							</li>
						</ul>
					</nav>
					<Langs/>
				</div>
			}
		</ThemeContext.Consumer>
		
	);
}

export default Sidebar;