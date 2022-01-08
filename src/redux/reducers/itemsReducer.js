import { ADD_ITEM } from "../types/actions";

const defaultState = {
	items: [],
	isLoaded: false
};

/*
  { type: ADD_ITEM, payload: {...} }
*/

export const itemsReducer = (state = defaultState, { type, payload }) => {

	switch (type) {
		case ADD_ITEM:
			return { ...state, items: [...state.items, payload]};

		default:
			return state;
	}
};
