import { VIEW_LIST, VIEW_SQUARE } from './types';

export function viewList() {
	return {
		type: VIEW_LIST
	};
}

export function viewSquare() {
	return {
		type: VIEW_SQUARE
	};
}