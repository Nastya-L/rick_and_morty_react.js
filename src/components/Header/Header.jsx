import React from 'react';

import '../../styles/App.scss';
import '../../styles/reset.scss';

import styles from './Header.module.scss';


function Header() {
	return (
		<header>
			<div className={styles.container}>
				<div className={styles.tools}>
					<form id='header-input'>
						<input type='search' id='header-input' className={styles.search} />
						<button className={styles.inputBtn} type="submit"></button>
					</form>
					<button className={styles.toggleLight}></button>
					<button className={styles.toggleDark}></button>
				</div>
				<div className={styles.authorizationWrapper}>
					<div className={styles.singUp}>
						<a>Регистрация</a>
					</div>
					<div className={styles.login}>
						<a>Войти</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;