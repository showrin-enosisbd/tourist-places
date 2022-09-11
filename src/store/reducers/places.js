import { ADD_PLACE } from "../types";

const initialState = [];

const places = (state = initialState, action) => {
	if (action.type === ADD_PLACE) {
		const newState = [...state, action.payload];

		return newState;
	}

	return state;
};

export default places;
