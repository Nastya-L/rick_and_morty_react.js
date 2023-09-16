import CreatStar from './CreatStar';

describe('CreatStar', () => {

	test('Rounding 3.5', () => { 
		const result = [<img alt="star" src={{}} />, <img alt="star" src={{}} />, <img alt="star" src={{}} />, <img alt="starHalf" src={{}} />];
		const stars = CreatStar(3.5);
		expect(stars).toEqual(result);
	});

	test('Integer 2', () => { 
		const result = [<img alt="star" src={{}} />, <img alt="star" src={{}} />];
		const stars = CreatStar(2);
		expect(stars).toEqual(result);
	});

	test('Negative number', () => { 
		const result = [];
		const stars = CreatStar(-1);
		expect(stars).toEqual(result);
	});
});