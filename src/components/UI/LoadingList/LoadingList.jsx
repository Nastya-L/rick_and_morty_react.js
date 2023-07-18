import React from 'react';
import style from './LoadingList.module.scss';
import clas from 'classnames';
import { ThemeContext } from '../Theme/ThemeContext';

function LoadingList() {
	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.wrapper} data-theme={`${theme}LoadingList`}>
					<div data-theme={`${theme}LoadingList`}
						className={clas(style.loading, style.loadingImg)}></div>
					<div className={style.container}>
						<div data-theme={`${theme}LoadingList`}
							className={clas(style.loading, style.loadingTitle)}></div>
						<div data-theme={`${theme}LoadingList`}
							className={clas(style.loading, style.loadingInfo)}></div>
						<div data-theme={`${theme}LoadingList`}
							className={clas(style.loading, style.loadingStatus)}></div>
						<div data-theme={`${theme}LoadingList`}
							className={clas(style.loading, style.loadingDescrs)}></div>
					</div>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default LoadingList;