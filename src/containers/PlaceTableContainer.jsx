import { connect } from "react-redux";

// import { updatePlace } from "../store/actions";
import PlaceTable from "../components/PlaceTable";

const mapStateToProps = (state) => {
	return {
		places: state.places,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceTable);
