import React from 'react';
import star from '../../../images/rating/star.png';
import starHalf from '../../../images/rating/starHalf.png';

function CreatStar(rate) {
	let rateNumber = Number(rate);
	let rating = [];
	for (let i = 0; i < rateNumber; i += 1) {
		if ((rateNumber - i) < 1) {
			rating.push(<img key={i} src={starHalf} alt='starHalf'/>);
		} else {
			rating.push(<img key={i} src={star} alt='star' />);
		}
	}
	return rating;
}

export default CreatStar;