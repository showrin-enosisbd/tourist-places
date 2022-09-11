import { UPDATE_PLACE } from "../types";

const updatePlace = (placeId, updatedPlace) => ({
	type: UPDATE_PLACE,
	payload: {
		placeId,
		updatedPlace,
	},
});

export default updatePlace;
