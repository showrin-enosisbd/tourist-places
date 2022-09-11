import { connect } from "react-redux";

// import { DEFAULT_FORM_FIELDS } from "../utils/constants";
// import { addPlace } from "../store/actions";
import PlaceTable from "../components/PlaceTable";

const mapStateToProps = (state) => {
	return {
		places: state.places,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// addPlace: (newPlace) => dispatch(addPlace(newPlace)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceTable);
