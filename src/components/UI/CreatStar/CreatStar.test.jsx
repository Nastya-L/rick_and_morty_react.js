import CreatStar from './CreatStar';

describe('CreatStar', () => {

	test('Rounding 3.5', () => {
		const result = [<img alt="star" key={0} src={{}} />, <img alt="star" key={1} src={{}} />, <img alt="star" key={2} src={{}} />, <img alt="starHalf" key={3} src={{}} />];
		const stars = CreatStar(3.5);
		expect(stars).toEqual(result);
	});

	test('Integer 2', () => { 
		const result = [<img alt="star" key={0} src={{}} />, <img alt="star" key={1} src={{}} />];
		const stars = CreatStar(2);
		expect(stars).toEqual(result);
	});

	test('Negative number', () => { 
		const result = [];
		const stars = CreatStar(-1);
		expect(stars).toEqual(result);
	});
});