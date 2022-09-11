import { connect } from "react-redux";

import { deletePlace } from "../store/actions";
import PlaceTable from "../components/PlaceTable";
import { SORT_DIRECTION_ASC, SORT_DIRECTION_NORMAL } from "../utils/constants";

const sortPlacesByRating = (places, sortDirection) => {
	return [...places].sort((a, b) => {
		const firstRating = parseInt(a.rating, 10);
		const secondRating = parseInt(b.rating, 10);

		if (sortDirection === SORT_DIRECTION_ASC) {
			return firstRating - secondRating;
		}

		return secondRating - firstRating;
	});
};

const searchPlaces = (places, keyWord) => {
	return places.filter((place) => place.name.toLowerCase().includes(keyWord));
};

const mapStateToProps = (state, ownProps) => {
	const { searchKeyword, sortDirection } = ownProps;
	let places = state.places;

	if (sortDirection !== SORT_DIRECTION_NORMAL) {
		places = sortPlacesByRating(places, sortDirection);
	}

	if (searchKeyword) {
		places = searchPlaces(places, searchKeyword);
	}

	return {
		places,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deletePlace: (placeId) => dispatch(deletePlace(placeId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceTable);
