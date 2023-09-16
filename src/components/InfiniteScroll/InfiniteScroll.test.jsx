import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfiniteScroll from './InfiniteScroll';

describe('InfiniteScroll', () => {
	const items = [
		{
			'_id':'64b42a5bc2ad60e163172260',
			'name':'Diane Sanchez',
		},
		{
			'_id':'64a1b1f67b55b9701ce4927d',
			'name':'Naruto Smith',
		},{
			'_id':'64a1af227b55b9701ce49225',
			'name':'Evil Morty',
		}
	];
	const hasMore = true;

	const result = {
		'_id':'64b42a5bc2ad60e163172260',
		'name':'Diane Sanchez',
	};

	const result2 = {
		'_id':'64a1b1f67b55b9701ce4927d',
		'name':'Naruto Smith',
	};

	const result3 = {
		'_id':'64a1af227b55b9701ce49225',
		'name':'Evil Morty',
	};

	test('Render test', () => { 
		const mockCallback = jest.fn();
		const {container} = render(<InfiniteScroll items={items} hasMore={hasMore} nextPage={mockCallback} renderItem={mockCallback} />);
		const expectCalls = JSON.stringify([[result, 0, null], [result2, 1, null], [result3, 2, (function(){})]]);
		fireEvent.scroll(container);
		expect(JSON.stringify(mockCallback.mock.calls)).toEqual(expectCalls);
	});
});