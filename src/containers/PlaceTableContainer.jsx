import { connect } from "react-redux";

import { deletePlace } from "../store/actions";
import PlaceTable from "../components/PlaceTable";

const searchPlaces = (places, keyWord) => {
	return places.filter((place) => place.name.toLowerCase().includes(keyWord));
};

const mapStateToProps = (state, ownProps) => {
	const { searchKeyword } = ownProps;
	let places = state.places;

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
