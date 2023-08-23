import React from 'react';
import style from './Error.module.scss';
import { ThemeContext } from '../../UI/Theme/ThemeContext';

function Error() {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.container}>
					<h1 data-theme={`${theme}Error`} className={style.title}>
						Something went wrong:(
					</h1>
					<p data-theme={`${theme}Error`} className={style.descr}>
						Check the specified path
					</p>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default Error;