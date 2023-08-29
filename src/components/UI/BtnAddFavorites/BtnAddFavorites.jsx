import React, { useEffect, useState } from 'react';
import style from './BtnAddFavorites.module.scss';
import clas from 'classnames';

function BtnAddFavorites({savedIds, changeSavedIds, _id}) {
	const [active, setActive] = useState();

	const changeFavorit = () => {
		let itemsId = [];
		if (savedIds) {
			itemsId = [...savedIds];
		}
		const index = itemsId.findIndex((e) => {return e == _id;});
		if (index >= 0) {
			itemsId.splice(index, 1);
			setActive(false);
		} else {
			itemsId.push(_id);
			setActive(true);
		}
		changeSavedIds(itemsId);
	};

	useEffect(() => {
		if (savedIds) {
			if (savedIds.includes(_id)) {
				setActive(true);
			}
		}
	}, []);

	return (
		<button onClick={changeFavorit} className={clas(style.save, (active && style.active))}  id={_id}>
		</button>
	);
}

export default BtnAddFavorites;