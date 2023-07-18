import React from 'react';
import style from './LoadingSquare.module.scss';
import clas from 'classnames';
import { ThemeContext } from '../Theme/ThemeContext';

function LoadingSquare() {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.wrapper} data-theme={`${theme}LoadingSquare`}>
					<div data-theme={`${theme}LoadingSquare`}
						className={clas(style.loading, style.loadingImg)}></div>
					<div data-theme={`${theme}LoadingSquare`}
						className={clas(style.loading, style.loadingTitle)}></div>
					<div data-theme={`${theme}LoadingSquare`}
						className={clas(style.loading, style.loadingInfo)}></div>
					<div data-theme={`${theme}LoadingSquare`}
						className={clas(style.loading, style.loadingStatus)}></div>
					<div data-theme={`${theme}LoadingSquare`}
						className={clas(style.loading, style.loadingDescrs)}></div>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default LoadingSquare;