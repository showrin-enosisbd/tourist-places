import { connect } from "react-redux";

import { deletePlace } from "../../../store/actions";
import PlaceTable from "../components/PlaceTable";
import {
	NO_PLACES_ADDED,
	NO_PLACES_Found,
	SORT_DIRECTION_ASC,
	SORT_DIRECTION_NORMAL,
} from "../../../utils/constants";

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
	let sortedAndFilteredPlaces = state.places;
	let emptyTableMsg = "";

	if (sortDirection !== SORT_DIRECTION_NORMAL) {
		sortedAndFilteredPlaces = sortPlacesByRating(
			sortedAndFilteredPlaces,
			sortDirection
		);
	}

	if (searchKeyword) {
		sortedAndFilteredPlaces = searchPlaces(
			sortedAndFilteredPlaces,
			searchKeyword
		);
	}

	if (state.places.length === 0) {
		emptyTableMsg = NO_PLACES_ADDED;
	} else if (sortedAndFilteredPlaces.length === 0) {
		emptyTableMsg = NO_PLACES_Found;
	}

	return {
		places: sortedAndFilteredPlaces,
		emptyTableMsg,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deletePlace: (placeId) => dispatch(deletePlace(placeId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceTable);
