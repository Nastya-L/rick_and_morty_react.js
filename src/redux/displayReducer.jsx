import { VIEW_LIST, VIEW_SQUARE } from './types';

const initialState = {
	mode: VIEW_SQUARE
};

export const displayReducer = (state = initialState, action) => {
	switch(action.type) {
	case VIEW_LIST:
		return {
			...state,
			mode: VIEW_LIST
		};

	case VIEW_SQUARE:
		return {
			...state,
			mode: VIEW_SQUARE
		};

	default: 
		return state;
	}
};