import React from 'react';
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
				<div className={styles.sidebar} data-theme={`${theme}Sidebar`}>
					<nav>
						<div className={styles.logo}>
							<NavLink to={'/'}>
								<img src={LOGO} alt="Logo" />
							</NavLink>
						</div>
						<ul className={styles.list}>
							<li data-theme={`${theme}Sidebar`} className={clas(styles.item, styles.itemHome)}>
								<NavLink data-theme={`${theme}Sidebar`} to={'/'} 
									className={({ isActive}) => isActive ? styles.active : styles.itemLink}>
									Home
								</NavLink>
							</li>
							<li data-theme={`${theme}Sidebar`} className={clas(styles.item, styles.itemCharacters)}>
								<NavLink data-theme={`${theme}Sidebar`} to={'/characters'} 
									className={({ isActive}) => isActive ? styles.active : styles.itemLink}>
									Characters
								</NavLink>
							</li>
							<li data-theme={`${theme}Sidebar`} className={clas(styles.item, styles.itemLocations)}>
								<NavLink data-theme={`${theme}Sidebar`} to={'/locations'} 
									className={({ isActive}) => isActive ? styles.active : styles.itemLink}>
									Locations
								</NavLink>
							</li>
							<li data-theme={`${theme}Sidebar`} className={clas(styles.item, styles.itemFavorites)}>
								<NavLink data-theme={`${theme}Sidebar`} to={'/favorites'} 
									className={({ isActive}) => isActive ? styles.active : styles.itemLink}>
									Favorites
								</NavLink>
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