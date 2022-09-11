import { ADD_PLACE } from "../types";

const addPlace = (newPlace) => ({
	type: ADD_PLACE,
	place: newPlace,
});

export default addPlace;
