import React, { useState } from 'react';
import style from './Filter.module.scss';
import clas from 'classnames';
import { ThemeContext } from '../Theme/ThemeContext';

function Filter({selectedFilter, serverRequestFilter}) {

	const [showFilter, setShowFilter] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedOptionParam, setSelectedOptionParam] = useState('');
	const [categoryOptions, setCategoryOptions] = useState([]);
	const [availableCategories, setAvailableCategories] = useState({});

	function ClickFilter() {
		if (showFilter) {
			selectedFilter('');
			setShowFilter(false);
			setSelectedCategory('');
			setSelectedOptionParam('');
			setCategoryOptions([]);
			setAvailableCategories({});
		} else {
			setShowFilter(true);
			serverRequestFilter().then((categories) => {
				setAvailableCategories(categories);
			});
		}
	}

	function ClickFilterCategory(category) {
		setSelectedCategory(category);
		setCategoryOptions(availableCategories[category]);
	}

	function ClickParam(param) {
		if (selectedOptionParam !== param) {
			setSelectedOptionParam(param);
			const filter = `${selectedCategory}=${param}`;
			selectedFilter(filter);
		}
	}

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<div className={style.filter}>
					<div className={style.filterContainer}>
						<ul className={style.filterWrap}>
							<li className={style.filterTitle}>
								<button data-theme={`${theme}Filter`}
									onClick={ClickFilter} className={clas(style.filterTitleBtn, style.text)}>Filter</button>
							</li>
						</ul>
						<ul className={clas(style.filterItems, (showFilter && style.active))}>
							{Object.keys(availableCategories).map((category, i) => {
								return <li className={style.filterHeader} key={i}>
									<button data-theme={`${theme}Filter`} 
										onClick={()=> {ClickFilterCategory(category);}}
										className={clas(style.filterBtn,(selectedCategory == category && style.activeBtn))}>{category}</button>
								</li>;
							})}
						</ul>
					</div>
					<ul className={clas(style.filterItem)}>
						{categoryOptions.map((param, i) => {
							return <li key={i}>
								<button onClick={()=> {ClickParam(param);}}
									className={clas(style.filterBtn,(selectedOptionParam == param && style.activeBtn))}
									data-theme={`${theme}Filter`}>{param}</button>
							</li>;
						})}
					</ul>
				</div>
			}
		</ThemeContext.Consumer>
	);
}

export default Filter;