import { ADD_PLACE, UPDATE_PLACE, DELETE_PLACE } from "../types";
import fakePlaces from "../../data/dummyPlaces";

const initialState = [...fakePlaces];

const places = (state = initialState, action) => {
	if (action.type === ADD_PLACE) {
		const newState = [...state, action.payload];

		return newState;
	}

	if (action.type === UPDATE_PLACE) {
		const newState = [...state];
		const { placeId, updatedPlace } = action.payload;
		const placeIndex = newState.findIndex((place) => place.id === placeId);

		if (placeIndex !== -1) {
			newState[placeIndex] = updatedPlace;
		}

		return newState;
	}

	if (action.type === DELETE_PLACE) {
		const newState = [...state];
		const { placeId } = action.payload;
		const placeIndex = newState.findIndex((place) => place.id === placeId);

		if (placeIndex !== -1) {
			newState.splice(placeIndex, 1);
		}

		return newState;
	}

	return state;
};

export default places;
