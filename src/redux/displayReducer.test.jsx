import '@testing-library/jest-dom';
import { displayReducer } from './displayReducer';
import { viewList, viewSquare } from './actions';
import { VIEW_LIST, VIEW_SQUARE } from './types';

describe('displayReducer', ()=> {

	test('VIEW_LIST action', () => {
		expect(displayReducer({mode: VIEW_SQUARE}, viewList())).toEqual({mode: VIEW_LIST});
	});

	test('VIEW_SQUARE action', () => {
		expect(displayReducer({mode: VIEW_LIST}, viewSquare())).toEqual({mode: VIEW_SQUARE});
	});

	test('Not initialized store', () => {
		expect(displayReducer(undefined, viewList())).toEqual({mode: VIEW_LIST});
		expect(displayReducer(undefined, viewSquare())).toEqual({mode: VIEW_SQUARE});
	});

	test('Unknown type', () => { 
		expect(displayReducer({mode: VIEW_SQUARE}, {type: 'BlaBla'})).toEqual({mode: VIEW_SQUARE});
	});
});