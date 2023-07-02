import React from 'react';
import style from './Pagination.module.scss';
import clas from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { createPages } from '../../../redux/actions';


function Pagination({page}) {
	const dispatch = useDispatch();
	const currentPage = useSelector(state => state.paginationReducer.currentPage);

	return (
		<div className={style.pagination}>
			<ul className={style.paginationWrap}>
				{page.map((page, index) => ( 
					<li key={index} className={style.paginationItem}>
						<button 
							className={clas(style.paginationBtn, (currentPage == page ? style.paginationBtnActive : ''))}
							onClick={() => dispatch(createPages(page))}>{page}</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Pagination;