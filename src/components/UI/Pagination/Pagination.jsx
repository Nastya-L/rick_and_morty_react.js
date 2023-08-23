import React, { useEffect, useState } from 'react';
import style from './Pagination.module.scss';
import clas from 'classnames';

function Pagination({page, currentPage, changePage}) {
	const [pages, setPages] = useState([]);

	useEffect(() => {
		const arr = [];
		for (let i = 1; i <= page; i++) {
			arr.push(i);
		}
		setPages(arr);

	}, [page]);

	return (
		<div className={style.pagination}>
			<ul className={style.paginationWrap}>
				{pages.map((page, index) => ( 
					<li key={index} className={style.paginationItem}>
						<button 
							className={clas(style.paginationBtn, (currentPage == page && style.paginationBtnActive))}
							onClick={() => changePage(page)}>{page}</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Pagination;