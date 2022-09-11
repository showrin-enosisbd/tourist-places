import { ADD_PLACE } from "../types";

const addPlace = (newPlace) => ({
	type: ADD_PLACE,
	payload: newPlace,
});

export default addPlace;
