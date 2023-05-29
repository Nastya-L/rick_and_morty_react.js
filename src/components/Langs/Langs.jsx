import React from 'react';
import '../../styles/App.scss';
import '../../styles/reset.scss';
import style from '../Langs/Langs.module.scss';

function Langs() {
	return (
		<div className={style.langs}>
			<span className={style.langsCurrent}>
				Русский
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
	);
}

export default Langs;