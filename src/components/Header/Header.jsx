import React from 'react';
import clas from 'classnames';

import '../../styles/App.scss';
import '../../styles/reset.scss';

import styles from './Header.module.scss';
import { ThemeContext } from '../UI/Theme/ThemeContext';


function Header() {

	return (
		<ThemeContext.Consumer>
			{({theme, chooseLight, chooseDark}) => 
				<header>
					<div className={styles.container}>
						<div className={styles.tools}>
							<form id='header-input'>
								<input type='search' id='header-input' className={styles.search} />
								<button data-theme={`${theme}Header`} className={styles.inputBtn} type="submit"></button>
							</form>
							<button 
								onClick={chooseLight} 
								className={clas(styles.toggleLight, (theme === 'light' ? styles.activeBtn : ''))}
							></button>
							<button 
								onClick={chooseDark}
								className={clas(styles.toggleDark, (theme === 'dark' ? styles.activeBtn : ''))}
							></button>
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
			}
		</ThemeContext.Consumer>
	);
}

export default Header;