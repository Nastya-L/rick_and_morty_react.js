import React from 'react';
import '../../styles/App.scss';
import '../../styles/reset.scss';

import styles from './Sidebar.module.scss';
import LOGO from '../../images/Logo.png';
import Langs from '../Langs/Langs';

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<nav>
				<div className={styles.logo}>
					<img src={LOGO} alt="Logo" />
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<a className={styles.itemHome}>Главная</a>
					</li>
					<li className={styles.item}>
						<a className={styles.itemCharacters}>Персонажи</a>
					</li>
					<li className={styles.item}>
						<a className={styles.itemEpisodes}>Эпизоды</a>
					</li>
					<li className={styles.item}>
						<a className={styles.itemLocations}>Локации</a>
					</li>
				</ul>
			</nav>
			<Langs/>
		</div>
	);
}

export default Sidebar;