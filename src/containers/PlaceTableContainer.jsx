import { connect } from "react-redux";

import { deletePlace } from "../store/actions";
import PlaceTable from "../components/PlaceTable";

const mapStateToProps = (state) => {
	return {
		places: state.places,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deletePlace: (placeId) => dispatch(deletePlace(placeId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceTable);
