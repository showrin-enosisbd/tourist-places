import { ADD_PLACE } from "../types";
import fakePlaces from "../../data/dummyPlaces";

const initialState = [...fakePlaces];

const places = (state = initialState, action) => {
	if (action.type === ADD_PLACE) {
		const newState = [...state, action.payload];

		return newState;
	}

	return state;
};

export default places;
