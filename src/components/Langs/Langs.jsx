import React from 'react';
import style from '../Langs/Langs.module.scss';
import { ThemeContext } from '../UI/Theme/ThemeContext';

function Langs() {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.langs} data-theme={`${theme}Langs`}>
					<span className={style.langsCurrent}>
						English
					</span>
					<div className={style.langsMenu}>
						<div className={style.lang}>
							Русский
						</div>
						<div className={style.lang}>
							English
						</div>
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default Langs;