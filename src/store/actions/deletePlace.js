import { DELETE_PLACE } from "../types";

const deletePlace = (placeId) => ({
	type: DELETE_PLACE,
	payload: {
		placeId,
	},
});

export default deletePlace;
