import { SET_CURRENT_PAGE, VIEW_LIST, VIEW_SQUARE } from './types';

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

export function createPages(page) {
	return {
		type: SET_CURRENT_PAGE,
		payload: page
	};
}